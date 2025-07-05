// src/data/mockData.js

export const parfums = [
  {
    id: 1,
    name: "Chanel N°5",
    brand: "Chanel",
    price: 89.99,
    image: "https://via.placeholder.com/300x400/e6f3ff/333333?text=Chanel+N°5",
    description: "Le parfum le plus iconique au monde, avec des notes florales aldéhydées.",
    category: "femme",
    type: "classique",
    sizes: ["5ml", "10ml", "50ml", "100ml"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Sauvage",
    brand: "Dior",
    price: 79.99,
    image: "https://via.placeholder.com/300x400/f0f8ff/333333?text=Dior+Sauvage",
    description: "Un parfum frais et puissant avec des notes de bergamote et de poivre.",
    category: "homme",
    type: "ete",
    sizes: ["5ml", "10ml", "60ml", "100ml"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    price: 94.99,
    image: "https://via.placeholder.com/300x400/1a1a1a/ffffff?text=Black+Opium",
    description: "Un parfum addictif avec des notes de café noir et de vanille.",
    category: "femme",
    type: "hiver",
    sizes: ["5ml", "10ml", "30ml", "50ml", "90ml"],
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Terre d'Hermès",
    brand: "Hermès",
    price: 105.99,
    image: "https://via.placeholder.com/300x400/8b4513/ffffff?text=Terre+Hermès",
    description: "Un parfum minéral et végétal qui évoque la terre.",
    category: "homme",
    type: "classique",
    sizes: ["5ml", "10ml", "50ml", "75ml"],
    inStock: false,
    featured: false
  },
  {
    id: 5,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 87.99,
    image: "https://via.placeholder.com/300x400/ffc0cb/333333?text=La+Vie+Est+Belle",
    description: "Un parfum gourmand avec des notes de praline et de vanille.",
    category: "femme",
    type: "ete",
    sizes: ["5ml", "10ml", "30ml", "50ml", "75ml"],
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: 99.99,
    image: "https://via.placeholder.com/300x400/4169e1/ffffff?text=Bleu+Chanel",
    description: "Un parfum aromatique boisé, frais et sensuel.",
    category: "homme",
    type: "ete",
    sizes: ["5ml", "10ml", "50ml", "100ml"],
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 92.99,
    image: "https://via.placeholder.com/300x400/dc143c/ffffff?text=Good+Girl",
    description: "Un parfum féminin et audacieux avec des notes de jasmin et de cacao.",
    category: "femme",
    type: "hiver",
    sizes: ["5ml", "10ml", "30ml", "50ml", "80ml"],
    inStock: true,
    featured: false
  },
  {
    id: 8,
    name: "Acqua di Giò",
    brand: "Giorgio Armani",
    price: 75.99,
    image: "https://via.placeholder.com/300x400/00bfff/ffffff?text=Acqua+di+Giò",
    description: "Un parfum aquatique frais et marin.",
    category: "homme",
    type: "ete",
    sizes: ["5ml", "10ml", "50ml", "100ml"],
    inStock: true,
    featured: true
  },
  {
    id: 9,
    name: "Flowerbomb",
    brand: "Viktor & Rolf",
    price: 98.99,
    image: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Flowerbomb",
    description: "Un parfum floral explosif avec des notes de jasmin et de rose.",
    category: "femme",
    type: "classique",
    sizes: ["5ml", "10ml", "30ml", "50ml", "100ml"],
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: "One Million",
    brand: "Paco Rabanne",
    price: 84.99,
    image: "https://via.placeholder.com/300x400/ffd700/333333?text=One+Million",
    description: "Un parfum oriental épicé et sensuel.",
    category: "homme",
    type: "hiver",
    sizes: ["5ml", "10ml", "50ml", "100ml"],
    inStock: true,
    featured: false
  },
  {
    id: 11,
    name: "CK One",
    brand: "Calvin Klein",
    price: 45.99,
    image: "https://via.placeholder.com/300x400/f5f5f5/333333?text=CK+One",
    description: "Un parfum unisexe frais et moderne.",
    category: "unisexe",
    type: "ete",
    sizes: ["5ml", "10ml", "50ml", "100ml"],
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: "Tom Ford Black Orchid",
    brand: "Tom Ford",
    price: 149.99,
    image: "https://via.placeholder.com/300x400/2f1b26/ffffff?text=Black+Orchid",
    description: "Un parfum unisexe luxueux et mystérieux.",
    category: "unisexe",
    type: "hiver",
    sizes: ["5ml", "10ml", "30ml", "50ml"],
    inStock: true,
    featured: true
  }
]

export const packs = [
  {
    id: 1,
    name: "Pack Découverte Femme",
    description: "3 parfums miniatures pour découvrir nos meilleures fragrances féminines",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://via.placeholder.com/400x300/ffc0cb/333333?text=Pack+Découverte+Femme",
    products: [1, 3, 5],
    category: "femme"
  },
  {
    id: 2,
    name: "Pack Découverte Homme",
    description: "3 parfums miniatures pour découvrir nos meilleures fragrances masculines",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://via.placeholder.com/400x300/4169e1/ffffff?text=Pack+Découverte+Homme",
    products: [2, 4, 6],
    category: "homme"
  },
  {
    id: 3,
    name: "Pack Été",
    description: "Collection de parfums frais pour l'été",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://via.placeholder.com/400x300/00bfff/ffffff?text=Pack+Été",
    products: [2, 5, 8, 11],
    category: "ete"
  }
]

export const promotions = [
  {
    id: 1,
    title: "Offre Spéciale Saint-Valentin",
    description: "Jusqu'à 30% de réduction sur une sélection de parfums",
    discount: 30,
    image: "https://via.placeholder.com/600x300/ff69b4/ffffff?text=Saint-Valentin+30%25",
    validUntil: "2025-02-14",
    products: [1, 3, 5, 7, 9]
  },
  {
    id: 2,
    title: "Nouveautés Printemps",
    description: "Découvrez nos nouveaux parfums avec 20% de réduction",
    discount: 20,
    image: "https://via.placeholder.com/600x300/90ee90/333333?text=Nouveautés+Printemps+20%25",
    validUntil: "2025-04-30",
    products: [2, 6, 8, 11]
  }
]

// Images supplémentaires pour la page d'accueil
export const heroImage = "https://via.placeholder.com/800x500/667eea/ffffff?text=Collection+Parfums+de+Luxe"

export const categoryImages = {
  femme: "https://via.placeholder.com/400x300/ffc0cb/333333?text=Parfums+Femme",
  homme: "https://via.placeholder.com/400x300/4169e1/ffffff?text=Parfums+Homme",
  unisexe: "https://via.placeholder.com/400x300/9370db/ffffff?text=Parfums+Unisexe"
}