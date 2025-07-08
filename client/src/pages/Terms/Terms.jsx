import React from 'react'
import { Link } from 'react-router-dom'
import './Terms.css'

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <div className="terms-content">
          <div className="terms-header">
            <h1>Conditions d'Utilisation</h1>
            <p>
              Veuillez lire attentivement ces conditions d'utilisation avant d'utiliser notre site web AzoulParfum
            </p>
          </div>

          <div className="terms-section">
            <h2>1. Présentation</h2>
            <p>
              Les conditions d'utilisation s'appliquent au site AzoulParfum et à tous nos services, succursales et sites Internet qui se réfèrent à ces conditions générales de référence.
            </p>
            <p>
              Lors de sa visite sur le site, le client déclare accepter les conditions générales en vigueur. Si vous ne l'acceptez pas, vous ne devez pas utiliser notre site. Les exploitants du site se réservent le droit de changer ou d'amender des parties des conditions d'utilisation et des dispositions, d'y ajouter des informations ou de les supprimer à tout moment.
            </p>
            
            <div className="highlight-box">
              <h4>Important</h4>
              <p>Les modifications prennent effet dès leur mise en ligne sur le site sans préavis. Veuillez consulter les conditions d'utilisation régulièrement pour toute mise à jour.</p>
            </div>
          </div>

          <div className="terms-section">
            <h2>2. Utilisation du Site</h2>
            
            <h3>Âge minimum</h3>
            <p>
              Pour visiter ce site, vous devez avoir au moins 18 ans ou visiter le site sous la surveillance d'un parent ou d'un tuteur légal.
            </p>

            <h3>Licence d'utilisation</h3>
            <p>
              Nous vous accordons une licence non transférable et révocable afin d'utiliser le site conformément aux termes et conditions spécifiques. Le but de cette licence est de faire des achats d'articles personnels vendus sur le site.
            </p>
            <p>
              <strong>L'utilisation commerciale ou l'utilisation au nom de tiers est interdite</strong>, sauf autorisation expresse et transparente de notre part. Toute violation de ces termes et conditions entraînera la révocation immédiate de la licence accordée.
            </p>

            <h3>Contenu informatif</h3>
            <p>
              Le contenu affiché sur ce site est fourni à titre informatif uniquement. Les explications des produits exprimées sur ce site appartiennent aux vendeurs eux-mêmes et nous n'avons rien à voir avec eux.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. Inscription et Comptes Utilisateur</h2>
            <p>
              Certains services et fonctionnalités qui peuvent être disponibles sur le site nécessitent une inscription ou un abonnement. En choisissant de vous inscrire, vous acceptez de :
            </p>
            <ul>
              <li>Fournir des informations exactes et à jour sur vous-même</li>
              <li>Mettre à jour vos informations en temps opportun en cas de modification</li>
              <li>Conserver vos mots de passe en sécurité</li>
              <li>Nous informer de toute utilisation non autorisée de votre compte</li>
            </ul>

            <div className="highlight-box">
              <h4>Responsabilité du compte</h4>
              <p>Il est de la responsabilité de chaque utilisateur de conserver les mots de passe et autres méthodes d'identification. L'entière responsabilité du titulaire du compte incombe à toutes les activités qui se produisent à l'aide de son mot de passe.</p>
            </div>

            <h3>Communications promotionnelles</h3>
            <p>
              Lors du processus d'inscription, le client s'engage à recevoir des courriels promotionnels du site. Vous pouvez, à une date ultérieure, annuler cette option en cliquant sur le lien de désabonnement en bas de tout e-mail promotionnel.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. Messages et Contenu Utilisateur</h2>
            <p>
              Tous vos messages sur le site, y compris les questions, critiques, commentaires et suggestions, deviennent notre propriété unique et exclusive. En partageant vos commentaires ou critiques sur le site, vous nous accordez également le droit d'utiliser le nom que vous affichez.
            </p>
            <p>
              <strong>Vous n'êtes pas autorisé à :</strong>
            </p>
            <ul>
              <li>Utiliser une fausse adresse e-mail</li>
              <li>Prétendre que vous êtes une autre personne</li>
              <li>Essayer de nous induire en erreur concernant l'originalité de vos messages</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>5. Commandes et Prix</h2>
            
            <h3>Approbation des commandes</h3>
            <p>
              Les opérateurs du site se réservent le droit de rejeter ou d'annuler toute commande pour quelque raison que ce soit à tout moment. Avant d'accepter la commande, nous pouvons vous demander de fournir des informations supplémentaires pour vérification.
            </p>

            <h3>Politique de prix</h3>
            <p>
              Nous nous efforçons de fournir les informations de prix les plus précises. Cependant, des erreurs peuvent parfois survenir. Par conséquent, nous nous réservons le droit de rejeter ou d'annuler toute commande en cas d'erreur de prix.
            </p>

            <div className="highlight-box">
              <h4>Paiement à la livraison</h4>
              <p>AzoulParfum propose uniquement le paiement à la livraison. Vous paierez votre commande en espèces lors de la réception.</p>
              <p><strong>Frais de livraison :</strong> 35 MAD partout au Maroc</p>
            </div>
          </div>

          <div className="terms-section">
            <h2>6. Propriété Intellectuelle</h2>
            <p>
              Tous les droits de propriété intellectuelle sur le site nous appartiennent, y compris mais sans s'y limiter :
            </p>
            <ul>
              <li>Les textes, graphiques, programmes, images, vidéos</li>
              <li>La musique et le son</li>
              <li>Leur choix et leur coordination</li>
              <li>Tous les codes source et programmes</li>
            </ul>
            <p>
              Tous les contenus du site sont protégés par des droits d'auteur. <strong>Tous droits réservés.</strong>
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Loi Applicable</h2>
            <p>
              Ces termes et conditions sont interprétés et appliqués conformément aux lois en vigueur au Maroc. En conséquence, chaque partie accepte de comparaître devant les instances judiciaires du Maroc.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. Résiliation</h2>
            <p>
              Nous pouvons, immédiatement et sans préavis, résilier les présentes conditions générales ou annuler tout ou partie de vos droits. Dans tous les cas de résiliation, vous devez immédiatement cesser de visiter et d'utiliser le site.
            </p>
            <p>
              Si vous n'êtes pas satisfait de ce site ou de l'un des termes et conditions, votre seule action exclusive est d'arrêter d'utiliser le site.
            </p>
          </div>

          <div className="back-to-home">
            <Link to="/" className="btn btn-primary">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms