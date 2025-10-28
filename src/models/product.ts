
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
  category: string;
  subcategory: string;
  colors: string[];
  sizes: string[];
}

export interface Category {
  id: string;
  name: string;
  count: string;
  color: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All Collections', count: '500+', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { id: 'kurti', name: 'Kurti Collections', count: '120+', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
  { id: 'tops', name: 'Top Collections', count: '85+', color: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
  { id: 'dresses', name: 'Dress Collections', count: '95+', color: 'bg-gradient-to-br from-green-500 to-teal-500' },
  { id: 'bottoms', name: 'Bottom Collections', count: '150+', color: 'bg-gradient-to-br from-red-500 to-pink-500' },
  { id: 'accessories', name: 'Accessory Collections', count: '60+', color: 'bg-gradient-to-br from-indigo-500 to-purple-500' }
];

export const productData: Product[] = [
  // Kurtis
  {
    id: '1',
    name: 'Traditional Embroidered Kurti',
    price: 75,
    originalPrice: 95,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
    badge: 'Bestseller',
    rating: 4.8,
    reviews: 124,
    category: 'kurti',
    subcategory: 'embroidered',
    colors: ['red', 'blue', 'green'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Cotton Printed Kurti',
    price: 45,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 89,
    category: 'kurti',
    subcategory: 'cotton',
    colors: ['pink', 'yellow', 'white'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '3',
    name: 'Designer Silk Kurti',
    price: 125,
    originalPrice: 150,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
    badge: 'Premium',
    rating: 4.9,
    reviews: 156,
    category: 'kurti',
    subcategory: 'silk',
    colors: ['purple', 'gold', 'black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  // Tops
  {
    id: '4',
    name: 'Casual Crop Top',
    price: 35,
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 67,
    category: 'tops',
    subcategory: 'casual',
    colors: ['white', 'black', 'gray'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '5',
    name: 'Formal Blouse',
    price: 65,
    originalPrice: 80,
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
    badge: 'Special',
    rating: 4.7,
    reviews: 203,
    category: 'tops',
    subcategory: 'formal',
    colors: ['navy', 'white', 'cream'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  // Dresses
  {
    id: '6',
    name: 'Summer Maxi Dress',
    price: 95,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 78,
    category: 'dresses',
    subcategory: 'maxi',
    colors: ['floral', 'blue', 'green'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '7',
    name: 'Party Cocktail Dress',
    price: 135,
    originalPrice: 160,
    image: 'https://images.unsplash.com/photo-1566479179817-fb3e4ea6e6c0?w=400&h=400&fit=crop',
    badge: 'Limited',
    rating: 4.9,
    reviews: 234,
    category: 'dresses',
    subcategory: 'party',
    colors: ['black', 'red', 'gold'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  // Bottoms
  {
    id: '8',
    name: 'High Waist Jeans',
    price: 85,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 156,
    category: 'bottoms',
    subcategory: 'jeans',
    colors: ['blue', 'black', 'gray'],
    sizes: ['24', '26', '28', '30', '32']
  },
  {
    id: '9',
    name: 'Palazzo Pants',
    price: 55,
    originalPrice: 70,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 92,
    category: 'bottoms',
    subcategory: 'palazzo',
    colors: ['black', 'navy', 'brown'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  // Accessories
  {
    id: '10',
    name: 'Designer Handbag',
    price: 165,
    originalPrice: 200,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    badge: 'Trending',
    rating: 4.8,
    reviews: 145,
    category: 'accessories',
    subcategory: 'bags',
    colors: ['brown', 'black', 'tan'],
    sizes: ['One Size']
  },
  {
    id: '11',
    name: 'Statement Earrings',
    price: 25,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 78,
    category: 'accessories',
    subcategory: 'jewelry',
    colors: ['gold', 'silver', 'rose-gold'],
    sizes: ['One Size']
  },
  {
    id: '12',
    name: 'Silk Scarf',
    price: 45,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1601762466937-1e5c4f6e8a12?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 98,
    category: 'accessories',
    subcategory: 'scarves',
    colors: ['pink', 'blue', 'multicolor'],
    sizes: ['One Size']
  },
  // Pouch Bags - Travel
  {
    id: '13',
    name: 'Waterproof Travel Organizer Pouch',
    price: 35,
    originalPrice: 45,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 342,
    category: 'pouch-bags',
    subcategory: 'travel',
    colors: ['black', 'navy', 'gray'],
    sizes: ['Small', 'Medium', 'Large']
  },
  {
    id: '14',
    name: 'Multi-Pocket Travel Pouch Set',
    price: 48,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
    badge: 'Premium',
    rating: 4.8,
    reviews: 289,
    category: 'pouch-bags',
    subcategory: 'travel',
    colors: ['brown', 'olive', 'charcoal'],
    sizes: ['Medium', 'Large']
  },
  {
    id: '15',
    name: 'Compact Travel Toiletry Pouch',
    price: 28,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 215,
    category: 'pouch-bags',
    subcategory: 'travel',
    colors: ['black', 'gray', 'blue'],
    sizes: ['Small', 'Medium']
  },
  {
    id: '16',
    name: 'Premium Leather Travel Pouch',
    price: 65,
    originalPrice: 85,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
    badge: 'Trending',
    rating: 4.9,
    reviews: 387,
    category: 'pouch-bags',
    subcategory: 'travel',
    colors: ['tan', 'brown', 'black'],
    sizes: ['Medium', 'Large']
  },
  // Pouch Bags - Makeup
  {
    id: '17',
    name: 'Professional Makeup Organizer Pouch',
    price: 42,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    badge: 'Popular',
    rating: 4.8,
    reviews: 456,
    category: 'pouch-bags',
    subcategory: 'makeup',
    colors: ['pink', 'rose-gold', 'silver'],
    sizes: ['Medium', 'Large']
  },
  {
    id: '18',
    name: 'Cosmetic Brush Holder Pouch',
    price: 32,
    originalPrice: 40,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 298,
    category: 'pouch-bags',
    subcategory: 'makeup',
    colors: ['black', 'white', 'nude'],
    sizes: ['Small', 'Medium']
  },
  {
    id: '19',
    name: 'Luxury Velvet Makeup Pouch',
    price: 55,
    originalPrice: 70,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
    badge: 'Premium',
    rating: 4.9,
    reviews: 412,
    category: 'pouch-bags',
    subcategory: 'makeup',
    colors: ['burgundy', 'emerald', 'navy'],
    sizes: ['Medium']
  },
  {
    id: '20',
    name: 'Clear Waterproof Makeup Pouch',
    price: 24,
    image: 'https://images.unsplash.com/photo-1563278047-4996d0ffa18a?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 234,
    category: 'pouch-bags',
    subcategory: 'makeup',
    colors: ['clear', 'frosted-pink', 'frosted-blue'],
    sizes: ['Small', 'Medium', 'Large']
  },
  // Pouch Bags - Leather
  {
    id: '21',
    name: 'Genuine Leather Zip Pouch',
    price: 78,
    originalPrice: 95,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 523,
    category: 'pouch-bags',
    subcategory: 'leather',
    colors: ['cognac', 'black', 'burgundy'],
    sizes: ['Small', 'Medium']
  },
  {
    id: '22',
    name: 'Handcrafted Leather Clutch Pouch',
    price: 92,
    originalPrice: 115,
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop',
    badge: 'Premium',
    rating: 4.8,
    reviews: 387,
    category: 'pouch-bags',
    subcategory: 'leather',
    colors: ['tan', 'dark-brown', 'olive'],
    sizes: ['Medium']
  },
  {
    id: '23',
    name: 'Vintage Leather Document Pouch',
    price: 85,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 298,
    category: 'pouch-bags',
    subcategory: 'leather',
    colors: ['brown', 'black', 'camel'],
    sizes: ['Large']
  },
  {
    id: '24',
    name: 'Soft Leather Wristlet Pouch',
    price: 68,
    originalPrice: 82,
    image: 'https://images.unsplash.com/photo-1564422167509-4f9d69f7f3b8?w=400&h=400&fit=crop',
    badge: 'Trending',
    rating: 4.8,
    reviews: 445,
    category: 'pouch-bags',
    subcategory: 'leather',
    colors: ['nude', 'gray', 'navy'],
    sizes: ['Small', 'Medium']
  },
  // Pouch Bags - Printed
  {
    id: '25',
    name: 'Floral Canvas Pouch Bag',
    price: 38,
    originalPrice: 48,
    image: 'https://images.unsplash.com/photo-1564422167509-4f9d69f7f3b8?w=400&h=400&fit=crop',
    badge: 'Popular',
    rating: 4.7,
    reviews: 356,
    category: 'pouch-bags',
    subcategory: 'printed',
    colors: ['floral-pink', 'floral-blue', 'floral-green'],
    sizes: ['Small', 'Medium', 'Large']
  },
  {
    id: '26',
    name: 'Geometric Print Cotton Pouch',
    price: 32,
    image: 'https://images.unsplash.com/photo-1585916420730-d7f95e942d46?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 267,
    category: 'pouch-bags',
    subcategory: 'printed',
    colors: ['geometric-multi', 'geometric-mono', 'geometric-pastel'],
    sizes: ['Medium']
  },
  {
    id: '27',
    name: 'Bohemian Mandala Print Pouch',
    price: 42,
    originalPrice: 55,
    image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400&h=400&fit=crop',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 498,
    category: 'pouch-bags',
    subcategory: 'printed',
    colors: ['boho-red', 'boho-purple', 'boho-turquoise'],
    sizes: ['Small', 'Medium']
  },
  {
    id: '28',
    name: 'Abstract Art Canvas Pouch',
    price: 35,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 312,
    category: 'pouch-bags',
    subcategory: 'printed',
    colors: ['abstract-blue', 'abstract-yellow', 'abstract-red'],
    sizes: ['Small', 'Medium', 'Large']
  }
];
