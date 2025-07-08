// src/components/Footer/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3><img src="../../../AzoulParfum.png" alt="Logo AzoulParfum" /> AzoulParfum</h3>
            <p>Votre boutique en ligne de parfums originaux</p>
          </div>

          <div className="footer-links">
            <h4>Informations</h4>
            <Link to="/terms">Conditions d'utilisation</Link>
            <Link to="/privacy">Politique de confidentialité</Link>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <i className="fas fa-phone"></i> +212 6 12 34 56 78
            </p>
            <p>
              <i className="fas fa-envelope"></i> contact@AzoulParfum.ma
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 AzoulParfum. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer