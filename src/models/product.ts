
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
  }
];
