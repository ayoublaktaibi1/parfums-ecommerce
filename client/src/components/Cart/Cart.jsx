import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Cart.css'

const Cart = ({ onClose }) => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id, item.size)
    } else {
      updateQuantity(item.id, item.size, newQuantity)
    }
  }

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h2>Panier</h2>
        <button className="close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="cart-content">
        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Votre panier est vide</p>
            <Link to="/products" className="btn btn-primary" onClick={onClose}>
              Continuer les achats
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-brand">{item.brand}</p>
                    <p className="item-size">Taille: {item.size}</p>
                    <p className="item-price">{formatPrice(item.price)}</p>
                  </div>
                  
                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <strong>Total: {formatPrice(getTotalPrice())}</strong>
              </div>
              
              <div className="cart-actions">
                <button
                  className="btn btn-secondary"
                  onClick={clearCart}
                >
                  Vider le panier
                </button>
                
                <Link
                  to="/checkout"
                  className="btn btn-success"
                  onClick={onClose}
                >
                  Commander
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart