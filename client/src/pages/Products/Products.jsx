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
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [selectedSize, setSelectedSize] = useState('10ml') // Par défaut 10ml

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

    // Filtrage par taille sélectionnée
    filtered = filtered.filter(product => product.sizes.includes(selectedSize))

    // Tri par nom par défaut
    filtered.sort((a, b) => a.name.localeCompare(b.name))

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedSize, searchParams])

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
          <p>Découvrez notre collection complète de parfums originaux</p>
        </div>

        <div className="products-content">
          <div className="search-and-filters">
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
                    <i className="fas fa-times"></i>
                  </button>
                )}
                <div className="search-icon">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>

            <div className="size-filters">
              <button
                className={`size-filter-btn ${selectedSize === '5ml' ? 'active' : ''}`}
                onClick={() => setSelectedSize('5ml')}
              >
                5ml
              </button>
              <button
                className={`size-filter-btn ${selectedSize === '10ml' ? 'active' : ''}`}
                onClick={() => setSelectedSize('10ml')}
              >
                10ml
              </button>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <div className="no-products-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Aucun produit trouvé</h3>
              {searchTerm ? (
                <div>
                  <p>Aucun résultat pour "{searchTerm}" en taille {selectedSize}</p>
                  <button
                    className="btn btn-primary"
                    onClick={clearSearch}
                  >
                    Effacer la recherche
                  </button>
                </div>
              ) : (
                <p>Aucun produit disponible en taille {selectedSize} dans cette catégorie</p>
              )}
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  selectedSize={selectedSize}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products