// src/components/Footer/Footer.jsx
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>ParfumStore</h3>
            <p>Votre boutique en ligne de parfums de luxe</p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📞 +212 6 12 34 56 78</p>
            <p>✉️ contact@parfumstore.ma</p>
          </div>

          <div className="footer-links">
            <h4>Informations</h4>
            <a href="#privacy">Politique de confidentialité</a>
            <a href="#terms">Conditions d'utilisation</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ParfumStore. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer