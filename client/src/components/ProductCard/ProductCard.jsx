// src/components/ProductCard/ProductCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product, selectedSize }) => {
  const { addToCart } = useCart()
  
  // Utiliser la taille sélectionnée ou la première taille disponible
  const currentSize = selectedSize || product.sizes[0]

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (product.inStock && currentSize) {
      addToCart(product, currentSize, 1)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-info">
          <h3 className="card-product-name">{product.name} - {currentSize}</h3>
          <div className="product-pricing">
            {product.originalPrice ? (
              <>
                <span className="product-current-price">{formatPrice(product.price)}</span>
                <span className="product-original-price">{formatPrice(product.originalPrice)}</span>
              </>
            ) : (
              <span className="product-current-price">{formatPrice(product.price)}</span>
            )}
          </div>
        </div>
      </Link>
      
      <div className="product-actions">
        <button 
          className="product-add-to-cart-btn"
          onClick={handleQuickAdd}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}

export default ProductCard