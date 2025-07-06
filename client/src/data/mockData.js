// src/data/mockData.js

export const parfums = [
  {
    id: 1,
    name: "Chanel N°5",
    brand: "Chanel",
    price: 89.99,
    originalPrice: 109.99, // Prix barré
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Le parfum le plus iconique au monde, avec des notes florales aldéhydées.",
    category: "femme",
    type: "classique",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Sauvage",
    brand: "Dior",
    price: 79.99,
    originalPrice: null, // Pas de prix barré
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum frais et puissant avec des notes de bergamote et de poivre.",
    category: "homme",
    type: "ete",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    price: 94.99,
    originalPrice: 119.99,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum addictif avec des notes de café noir et de vanille.",
    category: "femme",
    type: "hiver",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Terre d'Hermès",
    brand: "Hermès",
    price: 105.99,
    originalPrice: null,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum minéral et végétal qui évoque la terre.",
    category: "homme",
    type: "classique",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 87.99,
    originalPrice: 99.99,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum gourmand avec des notes de praline et de vanille.",
    category: "femme",
    type: "ete",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: 99.99,
    originalPrice: null,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum aromatique boisé, frais et sensuel.",
    category: "homme",
    type: "ete",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 92.99,
    originalPrice: 115.99,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum féminin et audacieux avec des notes de jasmin et de cacao.",
    category: "femme",
    type: "hiver",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Acqua di Giò",
    brand: "Giorgio Armani",
    price: 75.99,
    originalPrice: null,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum aquatique frais et marin.",
    category: "homme",
    type: "ete",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: "Flowerbomb",
    brand: "Viktor & Rolf",
    price: 98.99,
    originalPrice: 129.99,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum floral explosif avec des notes de jasmin et de rose.",
    category: "femme",
    type: "classique",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: "One Million",
    brand: "Paco Rabanne",
    price: 84.99,
    originalPrice: null,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum oriental épicé et sensuel.",
    category: "homme",
    type: "hiver",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: false
  },
  {
    id: 11,
    name: "Angel",
    brand: "Mugler",
    price: 89.99,
    originalPrice: 104.99,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum gourmand iconique avec des notes de chocolat et de vanille.",
    category: "femme",
    type: "hiver",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: "Invictus",
    brand: "Paco Rabanne",
    price: 79.99,
    originalPrice: null,
    image: "https://visionaryfragrances.com/cdn/shop/files/3F0A0524Large_1200x1200.jpg?v=1711563312",
    description: "Un parfum sportif et dynamique avec des notes fraîches et boisées.",
    category: "homme",
    type: "ete",
    sizes: ["5ml", "10ml", "20ml"],
    inStock: true,
    featured: true
  }
]

export const packs = [
  {
    id: 1,
    name: "Pack Découverte Femme",
    description: "Trois parfums miniatures sélectionnés pour découvrir nos meilleures fragrances féminines de luxe",
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    image: "https://www.diamond-parfums.com/cdn/shop/files/unnamed_b52ba1f8-6b42-4ddf-985d-f512b9c74874.jpg?v=1730545061&width=533",
    products: [1, 3, 5],
    category: "femme"
  },
  {
    id: 2,
    name: "Pack Découverte Homme",
    description: "Trois parfums miniatures sélectionnés pour découvrir nos meilleures fragrances masculines de luxe",
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    image: "https://www.diamond-parfums.com/cdn/shop/files/unnamed_b52ba1f8-6b42-4ddf-985d-f512b9c74874.jpg?v=1730545061&width=533",
    products: [2, 4, 6],
    category: "homme"
  },
  {
    id: 3,
    name: "Pack Été Fraîcheur",
    description: "Collection complète de parfums frais et légers parfaits pour les journées ensoleillées d'été",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    image: "https://www.diamond-parfums.com/cdn/shop/files/unnamed_b52ba1f8-6b42-4ddf-985d-f512b9c74874.jpg?v=1730545061&width=533",
    products: [2, 5, 8, 12],
    category: "ete"
  },
  {
    id: 4,
    name: "Pack Luxe Premium",
    description: "Sélection exclusive des parfums les plus prestigieux pour une expérience olfactive d'exception",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image: "https://www.diamond-parfums.com/cdn/shop/files/unnamed_b52ba1f8-6b42-4ddf-985d-f512b9c74874.jpg?v=1730545061&width=533",
    products: [1, 4, 9],
    category: "premium"
  }
]

export const promotions = [
  {
    id: 1,
    title: "Offre Spéciale Saint-Valentin",
    description: "Jusqu'à 30% de réduction sur une sélection de parfums",
    discount: 30,
    image: "https://media.gqmagazine.fr/photos/67c70369485f2ddc48ebdc74/16:9/w_2560%2Cc_limit/maxime_parfum_2.jpg",
    validUntil: "2025-02-14",
    products: [1, 3, 5, 7, 9]
  },
  {
    id: 2,
    title: "Nouveautés Printemps",
    description: "Découvrez nos nouveaux parfums avec 20% de réduction",
    discount: 20,
    image: "https://media.gqmagazine.fr/photos/6866703c51d2273e233ad69a/16:9/w_1280,c_limit/parfum%20sous-co%CC%82te%CC%81es.jpg",
    validUntil: "2025-04-30",
    products: [2, 6, 8, 12]
  }
]

// Images supplémentaires pour la page d'accueil
export const heroImage = "https://via.placeholder.com/800x500/667eea/ffffff?text=Collection+Parfums+de+Luxe"

export const categoryImages = {
  femme: "https://lawsonparis.com/wp-content/uploads/2022/02/Parfum-Lawson-Paris-Icone-8.jpg",
  homme: "https://lawsonparis.com/wp-content/uploads/2022/02/Parfum-Lawson-Paris-Icone-8.jpg"
}