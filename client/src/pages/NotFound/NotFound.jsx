import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-number">404</div>
          
          <h1>Page non trouvée</h1>
          
          <p>
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="search-suggestions">
            <h3>Que souhaitez-vous faire ?</h3>
            <div className="suggestions-grid">
              <Link to="/" className="suggestion-card">
                <div className="suggestion-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h4>Accueil</h4>
                <p>Retourner à la page d'accueil</p>
              </Link>
              
              <Link to="/products" className="suggestion-card">
                <div className="suggestion-icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <h4>Nos produits</h4>
                <p>Découvrir tous nos parfums</p>
              </Link>
              
              <Link to="/products?category=femme" className="suggestion-card">
                <div className="suggestion-icon">
                  <i className="fas fa-female"></i>
                </div>
                <h4>Parfums femme</h4>
                <p>Collection féminine</p>
              </Link>
              
              <Link to="/products?category=homme" className="suggestion-card">
                <div className="suggestion-icon">
                  <i className="fas fa-male"></i>
                </div>
                <h4>Parfums homme</h4>
                <p>Collection masculine</p>
              </Link>
            </div>
          </div>

          <div className="help-section">
            <h4>Besoin d'aide ?</h4>
            <p>
              Contactez notre service client au <strong>+212 6 12 34 56 78</strong>
              <br />
              ou par email : <strong>contact@parfumstore.ma</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound