import React from 'react'
import { Link } from 'react-router-dom'
import './OrderSuccess.css'

const OrderSuccess = () => {
  return (
    <div className="order-success-page">
      <div className="container">
        <div className="success-content">
          <div className="success-icon">
            <i className="far fa-check-circle"></i>
          </div>
          
          <h1>Merci pour votre commande !</h1>

          <div className="success-message">
            <h3>Votre commande a été enregistrée avec succès</h3>
            <p>
              Nous allons traiter votre commande dans les plus brefs délais. 
              Vous recevrez un appel de confirmation sous peu.
            </p>
          </div>

          <div className="next-steps">
            <h4>Prochaines étapes</h4>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <strong>Préparation</strong>
                  <p>Nous préparons votre commande</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <strong>Expédition</strong>
                  <p>Votre colis est en route</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <strong>Livraison</strong>
                  <p>Réception et paiement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <Link to="/products" className="btn btn-primary">
              Continuer les achats
            </Link>
            
            <Link to="/" className="btn btn-secondary">
              Retour à l'accueil
            </Link>
          </div>

          <div className="contact-info">
            <p>
              Une question sur votre commande ? 
              <br />
              Contactez-nous au <strong>+212 6 12 34 56 78</strong> 
              ou par email : <strong>contact@AzoulParfum.ma</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess