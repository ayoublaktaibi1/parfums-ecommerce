import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { parfums } from '../../data/mockData'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('10ml') // Taille fixe par défaut
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuler un appel API
    const fetchProduct = () => {
      const foundProduct = parfums.find(p => p.id === parseInt(id))
      if (foundProduct) {
        setProduct(foundProduct)
        // Taille fixe à 10ml si disponible, sinon la première taille
        const defaultSize = foundProduct.sizes.includes('10ml') ? '10ml' : foundProduct.sizes[0]
        setSelectedSize(defaultSize)
      }
      setLoading(false)
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (product && selectedSize && product.inStock) {
      addToCart(product, selectedSize, quantity)
      alert('Produit ajouté au panier !')
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Chargement...</div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container">
        <div className="error">
          <h2>Produit non trouvé</h2>
          <button className="btn btn-primary" onClick={() => navigate('/products')}>
            Retour aux produits
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="product-detail">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Retour
        </button>

        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
            {!product.inStock && (
              <div className="out-of-stock-overlay">Rupture de stock</div>
            )}
          </div>

          <div className="product-detail-info">
            <div className="product-header">
              <h1>{product.name} - {selectedSize}</h1>
              <p className="brand">{product.brand}</p>
              <div className="product-pricing">
                {product.originalPrice ? (
                  <>
                    <span className="current-price">{formatPrice(product.price)}</span>
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  </>
                ) : (
                  <span className="current-price">{formatPrice(product.price)}</span>
                )}
              </div>
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            {product.inStock ? (
              <div className="product-options">
                <div className="quantity-selection">
                  <label htmlFor="quantity">Quantité:</label>
                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      disabled={quantity >= 10}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="add-to-cart-btn"
                  onClick={handleAddToCart}
                >
                  Ajouter au panier - {formatPrice(product.price * quantity)}
                </button>
              </div>
            ) : (
              <div className="out-of-stock-message">
                <p>Ce produit est actuellement en rupture de stock.</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate('/products')}
                >
                  Voir d'autres produits
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail