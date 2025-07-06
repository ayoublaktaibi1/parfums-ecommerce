// src/components/Header/Header.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import Cart from '../Cart/Cart'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getTotalItems } = useCart()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h1>ParfumStore</h1>
            </Link>
          </div>

          <div className="header-right">
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
                <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Produits</Link></li>
                <li><Link to="/products?category=femme" onClick={() => setIsMenuOpen(false)}>Femme</Link></li>
                <li><Link to="/products?category=homme" onClick={() => setIsMenuOpen(false)}>Homme</Link></li>
              </ul>
            </nav>

            <div className="header-actions">
              <button className="cart-btn" onClick={toggleCart}>
                <span className="cart-icon">🛒</span>
                {getTotalItems() > 0 && (
                  <span className="cart-count">{getTotalItems()}</span>
                )}
              </button>

              <button className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isCartOpen && (
        <div className="cart-overlay">
          <Cart onClose={toggleCart} />
        </div>
      )}
    </header>
  )
}

export default Header