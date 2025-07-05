import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import Cart from '../Cart/Cart'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { getTotalItems } = useCart()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm}`)
      setSearchTerm('')
    }
  }

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

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
              <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Produits</Link></li>
              <li><Link to="/products?category=femme" onClick={() => setIsMenuOpen(false)}>Femme</Link></li>
              <li><Link to="/products?category=homme" onClick={() => setIsMenuOpen(false)}>Homme</Link></li>
              <li><Link to="/products?category=unisexe" onClick={() => setIsMenuOpen(false)}>Unisexe</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Rechercher un parfum..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <span className="search-icon">🔍</span>
              </button>
            </form>

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

      {isCartOpen && (
        <div className="cart-overlay">
          <Cart onClose={toggleCart} />
        </div>
      )}
    </header>
  )
}

export default Header