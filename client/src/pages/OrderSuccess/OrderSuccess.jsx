import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './OrderSuccess.css'

const OrderSuccess = () => {
  const location = useLocation()
  const { orderId, total } = location.state || {}

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  return (
    <div className="order-success-page">
      <div className="container">
        <div className="success-content">
          <div className="success-icon">✅</div>
          
          <h1>Commande confirmée !</h1>
          
          <div className="order-details">
            {orderId && (
              <p className="order-number">
                Numéro de commande : <strong>#{orderId}</strong>
              </p>
            )}
            
            {total && (
              <p className="order-total">
                Montant total : <strong>{formatPrice(total)}</strong>
              </p>
            )}
          </div>

          <div className="success-message">
            <h3>Merci pour votre commande !</h3>
            <p>
              Votre commande a été enregistrée avec succès. 
              Vous recevrez un email de confirmation sous peu.
            </p>
          </div>

          <div className="delivery-info">
            <h4>📦 Informations de livraison</h4>
            <ul>
              <li>Livraison gratuite partout au Maroc</li>
              <li>Délai de livraison : 2-3 jours ouvrés</li>
              <li>Paiement à la livraison en espèces</li>
              <li>Possibilité de retour sous 14 jours</li>
            </ul>
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
              Contactez-nous au <strong>+33 1 23 45 67 89</strong> 
              ou par email : <strong>contact@parfumstore.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess