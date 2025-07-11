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

  const closeCart = () => {
    setIsCartOpen(false)
  }

  // Fermer le panier en cliquant sur l'overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCart()
    }
  }

  return (
    <>
      {/* FontAwesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/">
              <div className="logo">
                  <img src="../../../AzoulParfum.png" alt="Logo AzoulParfum" />
                  <h1>AzoulParfum</h1>
              </div>
            </Link>

            <div className="header-right">
              <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <ul className="nav-list">
                  <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
                  <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Tous les parfums</Link></li>
                  <li><Link to="/products?category=femme" onClick={() => setIsMenuOpen(false)}>Femme</Link></li>
                  <li><Link to="/products?category=homme" onClick={() => setIsMenuOpen(false)}>Homme</Link></li>
                </ul>
              </nav>

              <div className="header-actions">
                <button className="cart-btn" onClick={toggleCart}>
                  <i className="fas fa-shopping-bag"></i>
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
          <div className="cart-overlay" onClick={handleOverlayClick}>
            <Cart onClose={closeCart} />
          </div>
        )}
      </header>
    </>
  )
}

export default Header