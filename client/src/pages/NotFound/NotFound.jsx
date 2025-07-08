import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-container">
            {/* Éléments décoratifs subtils */}
            <div className="decorative-elements">
              <div className="decorative-circle"></div>
              <div className="decorative-circle"></div>
              <div className="decorative-circle"></div>
            </div>

            {/* Numéro 404 */}
            <div className="error-number">404</div>
            
            {/* Titre */}
            <h1>Page non trouvée</h1>
            
            {/* Description */}
            <p>
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              Retournons ensemble à l'accueil.
            </p>

            {/* Bouton de retour */}
            <Link to="/" className="back-home-btn">
              <i className="fas fa-arrow-left"></i>
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound