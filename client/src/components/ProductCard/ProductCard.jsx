import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (product.inStock && product.sizes.length > 0) {
      addToCart(product, product.sizes[0], 1)
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
          {!product.inStock && <div className="out-of-stock-overlay">Rupture de stock</div>}
          {product.featured && <div className="featured-badge">Coup de cœur</div>}
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-brand">{product.brand}</p>
          <p className="product-price">{formatPrice(product.price)}</p>
          
          <div className="product-sizes">
            {product.sizes.slice(0, 3).map((size, index) => (
              <span key={index} className="size-tag">{size}</span>
            ))}
            {product.sizes.length > 3 && <span className="size-tag">+{product.sizes.length - 3}</span>}
          </div>
        </div>
      </Link>
      
      <div className="product-actions">
        <button 
          className={`btn ${product.inStock ? 'btn-primary' : 'btn-secondary'}`}
          onClick={handleQuickAdd}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Ajouter au panier' : 'Indisponible'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard