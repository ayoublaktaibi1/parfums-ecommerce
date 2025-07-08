import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Checkout.css'

const Checkout = () => {
  const navigate = useNavigate()
  const { items, getTotalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formatPrice = (price) => {
    return `${Math.round(price)} MAD`
  }

  const getDeliveryFee = () => {
    return 35 // Frais de livraison en MAD
  }

  const getTotalWithDelivery = () => {
    return getTotalPrice() + getDeliveryFee()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Effacer l'erreur si le champ est maintenant rempli
    if (errors[name] && value.trim()) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'L\'adresse est requise'
    }

    if (!formData.city.trim()) {
      newErrors.city = 'La ville est requise'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Simuler l'envoi de la commande
      const order = {
        id: Date.now(),
        items,
        subtotal: getTotalPrice(),
        deliveryFee: getDeliveryFee(),
        total: getTotalWithDelivery(),
        customer: formData,
        status: 'en_attente',
        createdAt: new Date().toISOString(),
        paymentMethod: 'cash_on_delivery'
      }

      // Ici, vous feriez un appel API pour créer la commande
      // await ordersAPI.create(order)

      setTimeout(() => {
        clearCart()
        navigate('/order-success', { 
          state: { orderId: order.id, total: order.total } 
        })
      }, 2000)

    } catch (error) {
      console.error('Erreur lors de la création de la commande:', error)
      alert('Une erreur s\'est produite. Veuillez réessayer.')
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="container">
        <div className="empty-checkout">
          <div className="empty-cart-icon">
            <i className="fas fa-shopping-bag"></i>
          </div>
          <h2>Votre panier est vide</h2>
          <p>Ajoutez des produits à votre panier pour passer commande.</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate('/products')}
          >
            Continuer les achats
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="page-header">
          <h1>Finaliser votre commande</h1>
          <p>Paiement à la livraison uniquement</p>
        </div>

        <div className="checkout-layout">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Informations personnelles</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Prénom *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={errors.firstName ? 'error' : ''}
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Nom *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={errors.lastName ? 'error' : ''}
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-section">
                <h3>Adresse de livraison</h3>
                
                <div className="form-group">
                  <label htmlFor="address">Adresse *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={errors.address ? 'error' : ''}
                  />
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="city">Ville *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={errors.city ? 'error' : ''}
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-retour"
                  onClick={() => navigate(-1)}
                  disabled={isSubmitting}
                >
                  Retour
                </button>
                
                <button
                  type="submit"
                  className="btn btn-finaliser"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Confirmer la commande'}
                </button>
              </div>
            </form>
          </div>

          <div className="order-summary">
            <h3>Récapitulatif de commande</h3>
            
            <div className="order-items">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="order-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="item-details">
                    <h4>{item.name} - {item.size}</h4>
                    <p>Quantité: {item.quantity}</p>
                  </div>
                  
                  <div className="item-price">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-total">
              <div className="total-line">
                <span>Sous-total:</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <div className="total-line">
                <span>Livraison:</span>
                <span>{formatPrice(getDeliveryFee())}</span>
              </div>
              <div className="total-line final-total">
                <span>Total:</span>
                <span>{formatPrice(getTotalWithDelivery())}</span>
              </div>
            </div>

            <div className="payment-info">
              <h4>
                <i className="fas fa-credit-card"></i> Paiement à la livraison
              </h4>
              <p>Vous paierez en espèces lors de la réception de votre commande.</p>
            </div>

            <div className="payment-info">
              <h4>
                <i className="fas fa-truck"></i> Livraison
              </h4>
              <p>Livraison à domicile dans 48H ouvrées partout au Maroc.</p>
            </div>

            <div className="payment-info">
              <h4>
                <i className="fas fa-undo"></i> Retour
              </h4>
              <p>Retour dans les 3 jours et échange dans les 7 jours à compter de la date d'achat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout