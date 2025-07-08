// src/pages/Home/Home.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useCart } from '../../context/CartContext'
import { parfums, packs, promotions } from '../../data/mockData'
import './Home.css'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [currentPromotion, setCurrentPromotion] = useState(0)
  const { addToCart } = useCart()

  useEffect(() => {
    // Charger seulement 4 produits en vedette
    const featured = parfums.filter(product => product.featured).slice(0, 4)
    setFeaturedProducts(featured)

    // Carrousel automatique pour les promotions
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price) => {
    return `${Math.round(price)} MAD`
  }

  const handlePackAddToCart = (pack) => {
    // Créer un item de pack pour le panier
    const packItem = {
      id: `pack-${pack.id}`,
      name: pack.name,
      brand: "Pack AzoulParfum",
      price: pack.price,
      image: pack.image,
      size: "Pack",
      quantity: 1,
      isPack: true,
      packProducts: pack.products
    }

    // Ajouter directement au panier comme un produit normal
    addToCart(packItem, "Pack", 1)
  }

  return (
    <div className="home">
      {/* Promotions Carousel */}
      {promotions.length > 0 && (
        <section className="promotions">
          <div className="container">
            <div className="promotions-carousel">
              {promotions.map((promo, index) => (
                <div
                  key={promo.id}
                  className={`promotion-slide ${index === currentPromotion ? 'active' : ''}`}
                >
                  <div className="promotion-content">
                    <h2>{promo.title}</h2>
                    <p>{promo.description}</p>
                    <span className="discount-badge">-{promo.discount}%</span>
                  </div>
                  <div className="promotion-image">
                    <img src={promo.image} alt={promo.title} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="promotion-indicators">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentPromotion ? 'active' : ''}`}
                  onClick={() => setCurrentPromotion(index)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packs Section - 4 par ligne */}
      <section className="packs-section">
        <div className="container">
          <div className="section-header">
            <h2>Nos packs découverte</h2>
            <p>Économisez avec nos packs spécialement sélectionnés</p>
          </div>
          
          <div className="packs-grid">
            {packs.map((pack) => (
              <div key={pack.id} className="pack-card">
                <div className="pack-image">
                  <img src={pack.image} alt={pack.name} />
                  <div className="pack-discount-badge">
                    -{pack.discount}%
                  </div>
                </div>
                
                <div className="pack-info">
                  <h3>{pack.name}</h3>
                  <p className="pack-description">{pack.description}</p>
                  
                  <div className="pack-pricing">
                    <span className="pack-price">{formatPrice(pack.price)}</span>
                    <span className="pack-original-price">{formatPrice(pack.originalPrice)}</span>
                  </div>
                  
                  <button 
                    className="pack-add-to-cart-btn"
                    onClick={() => handlePackAddToCart(pack)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Seulement 4 cartes */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Nos parfums populaires</h2>
            <p>Découvrez notre sélection des parfums les plus populaires</p>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} selectedSize="10ml" />
            ))}
          </div>
          
          <div className="section-footer">
            <Link to="/products" className="btn btn-primary">
              Voir tous les parfums
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3>Livraison rapide</h3>
              <p>Livraison rapide partout au Maroc</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>Paiement à la livraison</h3>
              <p>Payez votre commande à la réception</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Service après vente</h3>
              <p>Nous priorisons la satisfaction client</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Qualité garantie</h3>
              <p>Produits authentiques des grandes marques</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home