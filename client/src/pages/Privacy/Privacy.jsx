import React from 'react'
import { Link } from 'react-router-dom'
import '../Terms/Terms.css' // Import du même style que Terms

const Privacy = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <div className="terms-content">
          <div className="terms-header">
            <h1>Politique de Confidentialité</h1>
            <p>
              Notre site Web respecte votre vie privée et cherche à protéger vos données personnelles
            </p>
          </div>

          <div className="terms-section">
            <h2>Introduction</h2>
            <p>
              La politique de confidentialité explique comment nous collectons et utilisons vos données personnelles. N'oubliez pas non plus les procédures utilisées pour garantir la confidentialité de vos informations. Enfin, cette politique détermine vos options concernant la collecte, l'utilisation et la divulgation des données personnelles.
            </p>
            <p>
              En visitant le site directement ou via un autre site Web, vous acceptez les pratiques décrites dans cette politique.
            </p>
            
            <div className="highlight-box">
              <h4>Protection des données</h4>
              <p>La protection de vos données est très importante pour nous. Votre nom et d'autres informations vous concernant sont utilisés conformément aux termes indiqués dans la politique de confidentialité.</p>
            </div>

            <p>
              Vous pouvez naviguer sur le site sans avoir à fournir de données personnelles. Votre identité personnelle reste anonyme tout au long de votre visite sur le site et n'est pas exposée à moins que vous n'ayez un compte en ligne spécial.
            </p>
          </div>

          <div className="terms-section">
            <h2>1. Les Données que Nous Collectons</h2>
            
            <h3>Informations de commande</h3>
            <p>
              Nous pouvons être amenés à collecter vos informations si vous souhaitez passer une commande d'un bien sur notre site. Nous collectons, stockons et traitons vos données nécessaires pour poursuivre votre achat sur notre site.
            </p>

            <h3>Types d'informations collectées</h3>
            <p>
              Nous pouvons collecter des informations personnelles, y compris mais sans s'y limiter :
            </p>
            <ul>
              <li>Le nom et prénom</li>
              <li>L'adresse e-mail</li>
              <li>L'adresse postale</li>
              <li>L'adresse de livraison (si différente)</li>
              <li>Le numéro de téléphone</li>
              <li>Les détails de paiement</li>
            </ul>

            <h3>Utilisation des informations</h3>
            <p>
              Nous utilisons les informations que vous fournissez pour :
            </p>
            <ul>
              <li>Traiter vos commandes</li>
              <li>Vous fournir les services demandés</li>
              <li>Gérer votre compte</li>
              <li>Vérifier vos transactions</li>
              <li>Améliorer notre site et nos services</li>
              <li>Vous envoyer des informations promotionnelles (avec votre consentement)</li>
            </ul>

            <div className="highlight-box">
              <h4>Livraison</h4>
              <p>Nous pouvons donner votre nom et votre adresse à un tiers afin de vous remettre votre commande (par exemple, agent de livraison).</p>
            </div>

            <h3>Gestion de compte</h3>
            <p>
              En vous connectant à votre compte sur le site, vous pouvez consulter les informations et les détails de vos achats. Vous devez respecter une confidentialité totale lors de l'accès à vos données personnelles et ne pas les mettre à la disposition d'un tiers non autorisé.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Autres Utilisations de Vos Informations</h2>
            
            <h3>Études marketing</h3>
            <p>
              Nous pouvons utiliser vos informations personnelles dans les sondages d'opinion et les études marketing, à votre discrétion, à des fins statistiques tout en garantissant leur totale confidentialité. Vous avez le droit de vous retirer à tout moment.
            </p>

            <h3>Communications promotionnelles</h3>
            <p>
              Nous pouvons envoyer des informations sur nos produits, ventes, offres, bulletins et autres informations. Si vous ne souhaitez pas obtenir ces informations, veuillez cliquer sur le lien "se désinscrire" dans tout e-mail qui vous sera envoyé.
            </p>

            <h3>Données anonymes</h3>
            <p>
              Nous pouvons utiliser certaines données, tout en préservant la vie privée, à d'autres fins, y compris pour vérifier où se trouvent les utilisateurs et fournir ces données anonymes à un tiers. Ces données ne permettent pas l'identification de votre identité personnelle.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. Cookies</h2>
            
            <h3>Qu'est-ce qu'un cookie ?</h3>
            <p>
              Les cookies sont de petits fichiers texte qui permettent à notre serveur d'identifier votre ordinateur en tant qu'utilisateur unique lors de la visite de certaines pages du site.
            </p>

            <h3>Utilisation des cookies</h3>
            <p>
              Nous utilisons des cookies pour :
            </p>
            <ul>
              <li>Assurer votre confort lors de la navigation</li>
              <li>Mémoriser votre identité lors de modifications du panier</li>
              <li>Améliorer les fonctionnalités du site</li>
            </ul>

            <div className="highlight-box">
              <h4>Configuration des cookies</h4>
              <p>Vous pouvez configurer votre navigateur pour qu'il n'accepte pas les cookies, mais cela limitera votre utilisation du site. L'acceptation des cookies n'est pas une condition préalable à la visite du site.</p>
            </div>

            <h3>Google Analytics</h3>
            <p>
              Ce site Web utilise Google Analytics, un service fourni par Google pour analyser les pages Web. Google Analytics utilise des cookies pour analyser la façon dont les utilisateurs utilisent le site. Les informations générées sont transférées vers des serveurs Google où elles sont stockées et analysées.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. Sécurité</h2>
            
            <h3>Mesures de protection</h3>
            <p>
              Nous utilisons des techniques et procédures de sécurité appropriées pour empêcher tout accès non autorisé ou illégal à vos informations. Nos mesures incluent :
            </p>
            <ul>
              <li>Stockage dans des bases de données sécurisées</li>
              <li>Utilisation de systèmes de pare-feu</li>
              <li>Cryptage SSL pour les informations sensibles</li>
              <li>Garanties physiques, électroniques et procédurales</li>
            </ul>

            <div className="highlight-box">
              <h4>Recommandations de sécurité</h4>
              <p>Nous vous déconseillons fortement d'envoyer les détails de votre carte de crédit par voie électronique sans cryptage. Il est de votre responsabilité de protéger votre mot de passe et votre ordinateur contre toute utilisation non autorisée.</p>
            </div>
          </div>

          <div className="terms-section">
            <h2>5. Droits du Client</h2>
            
            <p>
              En tant que client, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul>
              <li><strong>Droit d'accès :</strong> Vous pouvez demander l'accès aux données personnelles que nous détenons à votre sujet</li>
              <li><strong>Droit de rectification :</strong> Vous pouvez nous demander de corriger toute erreur dans vos données personnelles, gratuitement</li>
              <li><strong>Droit d'opposition :</strong> Vous pouvez nous demander, à tout moment, de cesser d'utiliser vos données personnelles à des fins de marketing direct</li>
              <li><strong>Droit de suppression :</strong> Vous pouvez demander la suppression de vos données dans certaines conditions</li>
            </ul>

            <div className="highlight-box">
              <h4>Comment exercer vos droits</h4>
              <p>Pour exercer l'un de ces droits, contactez-nous à l'adresse contact@AzoulParfum.ma ou au +212 6 12 34 56 78. Nous traiterons votre demande dans les plus brefs délais.</p>
            </div>
          </div>

          <div className="terms-section">
            <h2>6. Tiers et Liens</h2>
            
            <h3>Partage avec des tiers</h3>
            <p>
              Nous pouvons transférer vos informations à d'autres sociétés de notre groupe ou à nos agents et sous-traitants pour nous aider dans les transactions, par exemple :
            </p>
            <ul>
              <li>Livraison des produits</li>
              <li>Traitement des paiements</li>
              <li>Statistiques et recherche marketing</li>
              <li>Service client</li>
            </ul>

            <h3>Protection contre la fraude</h3>
            <p>
              Nous pouvons échanger des informations avec un tiers afin de nous protéger contre la fraude et de réduire le risque de crédit.
            </p>

            <p>
              En dehors de ce qui est indiqué dans la présente politique, nous ne vendrons pas vos données personnelles ni ne les divulguerons à un tiers sans obtenir votre approbation préalable.
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

export default Privacy