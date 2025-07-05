import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import { parfums, packs, promotions, heroImage, categoryImages } from '../../data/mockData'
import './Home.css'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [currentPromotion, setCurrentPromotion] = useState(0)

  useEffect(() => {
    // Charger les produits en vedette
    const featured = parfums.filter(product => product.featured).slice(0, 6)
    setFeaturedProducts(featured)

    // Carrousel automatique pour les promotions
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Découvrez l'univers des parfums</h1>
          <p>
            Collection exclusive des plus grandes marques de parfumerie. 
            Livraison gratuite et paiement à la livraison.
          </p>
          <Link to="/products" className="btn btn-primary hero-btn">
            Découvrir nos parfums
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Collection de parfums" />
        </div>
      </section>

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
                    <Link
                      to="/products"
                      className="btn btn-secondary"
                    >
                      Voir les offres
                    </Link>
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

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Nos coups de cœur</h2>
            <p>Découvrez notre sélection des parfums les plus populaires</p>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="section-footer">
            <Link to="/products" className="btn btn-primary">
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* Packs Section */}
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
                  <div className="savings-badge">
                    Économisez {formatPrice(pack.originalPrice - pack.price)}
                  </div>
                </div>
                
                <div className="pack-info">
                  <h3>{pack.name}</h3>
                  <p>{pack.description}</p>
                  
                  <div className="pack-pricing">
                    <span className="original-price">{formatPrice(pack.originalPrice)}</span>
                    <span className="pack-price">{formatPrice(pack.price)}</span>
                  </div>
                  
                  <button className="btn btn-primary">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Nos catégories</h2>
            <p>Trouvez le parfum parfait selon vos préférences</p>
          </div>
          
          <div className="categories-grid">
            <Link to="/products?category=femme" className="category-card">
              <div className="category-image">
                <img src="/images/categories/femme.jpg" alt="Parfums Femme" />
              </div>
              <div className="category-info">
                <h3>Parfums Femme</h3>
                <p>Élégance et féminité</p>
              </div>
            </Link>
            
            <Link to="/products?category=homme" className="category-card">
              <div className="category-image">
                <img src="/images/categories/homme.jpg" alt="Parfums Homme" />
              </div>
              <div className="category-info">
                <h3>Parfums Homme</h3>
                <p>Force et caractère</p>
              </div>
            </Link>
            
            <Link to="/products?category=unisexe" className="category-card">
              <div className="category-image">
                <img src="/images/categories/unisexe.jpg" alt="Parfums Unisexe" />
              </div>
              <div className="category-info">
                <h3>Parfums Unisexe</h3>
                <p>Pour tous les goûts</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Livraison gratuite</h3>
              <p>Livraison gratuite pour toutes les commandes</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Paiement à la livraison</h3>
              <p>Payez en toute sécurité à la réception</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Retour gratuit</h3>
              <p>Retour sous 14 jours si non satisfait</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
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