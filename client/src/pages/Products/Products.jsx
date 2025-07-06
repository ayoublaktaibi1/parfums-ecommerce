// src/pages/Products/Products.jsx
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import { parfums } from '../../data/mockData'
import './Products.css'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('name')
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')

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
    if (searchTerm.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtrage par catégorie depuis l'URL
    const categoryParam = searchParams.get('category')
    if (categoryParam && categoryParam !== 'unisexe') {
      filtered = filtered.filter(product => product.category === categoryParam)
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
  }, [products, searchTerm, sortBy, searchParams])

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    
    // Mettre à jour l'URL
    const params = new URLSearchParams(searchParams)
    if (value.trim()) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    setSearchParams(params)
  }

  const clearSearch = () => {
    setSearchTerm('')
    const params = new URLSearchParams(searchParams)
    params.delete('search')
    setSearchParams(params)
  }

  const getResultsText = () => {
    const total = filteredProducts.length
    if (total === 0) return 'Aucun produit trouvé'
    if (total === 1) return '1 produit trouvé'
    return `${total} produits trouvés`
  }

  const getCategoryTitle = () => {
    const category = searchParams.get('category')
    switch (category) {
      case 'femme':
        return 'Parfums Femme'
      case 'homme':
        return 'Parfums Homme'
      default:
        return 'Nos Parfums'
    }
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
          <h1>{getCategoryTitle()}</h1>
          <p>Découvrez notre collection complète de parfums de luxe</p>
        </div>

        <div className="products-content">
          <div className="search-and-sort">
            <div className="search-section">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Rechercher un parfum, une marque..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input"
                />
                {searchTerm && (
                  <button 
                    onClick={clearSearch}
                    className="clear-search-btn"
                    title="Effacer la recherche"
                  >
                    ✕
                  </button>
                )}
                <div className="search-icon">🔍</div>
              </div>
            </div>

            <div className="toolbar">
              <div className="results-info">
                <span>{getResultsText()}</span>
                {searchTerm && (
                  <span className="search-info">
                    pour "{searchTerm}"
                  </span>
                )}
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
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <div className="no-products-icon">🔍</div>
              <h3>Aucun produit trouvé</h3>
              {searchTerm ? (
                <div>
                  <p>Aucun résultat pour "{searchTerm}"</p>
                  <button
                    className="btn btn-primary"
                    onClick={clearSearch}
                  >
                    Effacer la recherche
                  </button>
                </div>
              ) : (
                <p>Aucun produit disponible dans cette catégorie</p>
              )}
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products