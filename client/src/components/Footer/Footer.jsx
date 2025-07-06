// src/components/Footer/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ParfumStore</h3>
            <p>
              Votre boutique en ligne de parfums de luxe. 
              Découvrez notre sélection des plus grandes marques 
              avec livraison gratuite et paiement à la livraison.
            </p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/products">Tous les produits</Link></li>
              <li><Link to="/products?category=femme">Parfums Femme</Link></li>
              <li><Link to="/products?category=homme">Parfums Homme</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Catégories</h4>
            <ul>
              <li><Link to="/products?type=ete">Parfums d'été</Link></li>
              <li><Link to="/products?type=hiver">Parfums d'hiver</Link></li>
              <li><Link to="/products?type=classique">Parfums classiques</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Service Client</h4>
            <ul>
              <li>Livraison gratuite</li>
              <li>Paiement à la livraison</li>
              <li>Retour sous 14 jours</li>
              <li>Service client 7j/7</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>📞 +212 6 12 34 56 78</p>
              <p>✉️ contact@parfumstore.ma</p>
              <p>📍 123 Avenue Mohammed V, Casablanca</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ParfumStore. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="#privacy">Politique de confidentialité</a>
            <a href="#terms">Conditions d'utilisation</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer