import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import Filters from '../../components/Filters/Filters'
import { parfums } from '../../data/mockData'
import './Products.css'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('name')
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    type: searchParams.get('type') || '',
    priceRange: '',
    inStock: searchParams.get('inStock') === 'true',
    featured: searchParams.get('featured') === 'true',
    search: searchParams.get('search') || ''
  })

  useEffect(() => {
    // Simuler un appel API
    setTimeout(() => {
      setProducts(parfums)
      setLoading(false)
    }, 500)
  }, [])

  useEffect(() => {
    let filtered = [...products]

    // Filtrage par recherche
    if (filters.search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.brand.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    // Filtrage par catégorie
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category)
    }

    // Filtrage par type
    if (filters.type) {
      filtered = filtered.filter(product => product.type === filters.type)
    }

    // Filtrage par prix
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      if (max) {
        filtered = filtered.filter(product => product.price >= min && product.price <= max)
      } else {
        filtered = filtered.filter(product => product.price >= min)
      }
    }

    // Filtrage par stock
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock)
    }

    // Filtrage par featured
    if (filters.featured) {
      filtered = filtered.filter(product => product.featured)
    }

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        case 'brand':
          return a.brand.localeCompare(b.brand)
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }, [products, filters, sortBy])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    
    // Mettre à jour l'URL
    const params = new URLSearchParams()
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== '') {
        params.set(key, value.toString())
      }
    })
    setSearchParams(params)
  }

  const clearFilters = () => {
    const clearedFilters = {
      category: '',
      type: '',
      priceRange: '',
      inStock: false,
      featured: false,
      search: ''
    }
    setFilters(clearedFilters)
    setSearchParams({})
  }

  const getResultsText = () => {
    const total = filteredProducts.length
    if (total === 0) return 'Aucun produit trouvé'
    if (total === 1) return '1 produit trouvé'
    return `${total} produits trouvés`
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Chargement des produits...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1>Nos Parfums</h1>
          <p>Découvrez notre collection complète de parfums de luxe</p>
        </div>

        <div className="products-layout">
          <aside className="filters-sidebar">
            <Filters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
            />
          </aside>

          <main className="products-main">
            <div className="products-toolbar">
              <div className="results-info">
                <span>{getResultsText()}</span>
              </div>
              
              <div className="sort-controls">
                <label htmlFor="sort">Trier par :</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Nom (A-Z)</option>
                  <option value="brand">Marque</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="no-products">
                <div className="no-products-icon">🔍</div>
                <h3>Aucun produit trouvé</h3>
                <p>Essayez de modifier vos filtres ou votre recherche</p>
                <button
                  className="btn btn-primary"
                  onClick={clearFilters}
                >
                  Effacer les filtres
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Products