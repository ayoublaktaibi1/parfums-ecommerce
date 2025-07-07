import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Cart.css'

const Cart = ({ onClose }) => {
  const { items, removeFromCart, getTotalPrice, clearCart } = useCart()

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
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
                    <h4 className="item-title">{item.name} - {item.size}</h4>
                    <p className="item-quantity">Quantité: {item.quantity}</p>
                    <p className="item-price">{formatPrice(item.price)}</p>
                  </div>
                  
                  <div className="item-controls">
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
                  className="btn btn-vider-panier"
                  onClick={clearCart}
                >
                  Vider le panier
                </button>
                
                <Link
                  to="/checkout"
                  className="btn btn-commander"
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