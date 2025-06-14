import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ShopFilters from '@/components/ShopFilters';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List, Star, Heart, ShoppingCart, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const productsPerPage = 12;

  const allProducts = [
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

  const categories = [
    { id: 'all', name: 'All Collections', count: '500+', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { id: 'kurti', name: 'Kurti Collections', count: '120+', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { id: 'tops', name: 'Top Collections', count: '85+', color: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
    { id: 'dresses', name: 'Dress Collections', count: '95+', color: 'bg-gradient-to-br from-green-500 to-teal-500' },
    { id: 'bottoms', name: 'Bottom Collections', count: '150+', color: 'bg-gradient-to-br from-red-500 to-pink-500' },
    { id: 'accessories', name: 'Accessory Collections', count: '60+', color: 'bg-gradient-to-br from-indigo-500 to-purple-500' }
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-50':
          filtered = filtered.filter(product => product.price < 50);
          break;
        case '50-100':
          filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
          break;
        case '100-150':
          filtered = filtered.filter(product => product.price > 100 && product.price <= 150);
          break;
        case 'above-150':
          filtered = filtered.filter(product => product.price > 150);
          break;
      }
    }

    // Filter by colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        // Keep original order for newest
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, selectedColors, selectedSizes, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-amber-100"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-amber-800 mb-6">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            Premium Collections
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Collections</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Explore our handpicked collections of premium fashion items, 
            carefully curated for style, quality, and modern elegance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Browse Collections
            </Button>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg rounded-full"
              >
                View Lookbook
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Browse Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover your perfect style from our diverse collections
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`group relative overflow-hidden rounded-2xl p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ${category.color} ${selectedCategory === category.id ? 'ring-4 ring-white shadow-2xl' : ''}`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage(1);
                }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 mb-3">{category.count} items</p>
                  <div className="inline-flex items-center text-sm font-medium">
                    {selectedCategory === category.id ? 'Selected' : 'Explore Collection'}
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white hover:bg-gray-50"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Collection Filters
              </Button>
              <Link to="/liked-products">
                <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-pink-50 border-pink-200 text-pink-600 hover:text-pink-700">
                  <Heart className="h-4 w-4" />
                  Wishlist
                </Button>
              </Link>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="featured">Sort by: Featured Collections</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">Newest Collections</option>
              </select>
              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="under-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-150">$100 - $150</option>
                <option value="above-150">Above $150</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-3">View:</span>
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-amber-600 hover:bg-amber-700' : ''}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-amber-600 hover:bg-amber-700' : ''}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <ShopFilters 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
          onClose={() => setShowFilters(false)}
        />
      )}

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'all' ? 'All Collections' : `${categories.find(c => c.id === selectedCategory)?.name || 'Collections'}`}
              </h2>
              <p className="text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} items
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Free shipping on orders over $99
            </div>
          </div>
          
          <div className={`grid gap-8 ${viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            {currentProducts.map((product) => (
              <div key={product.id} className="group">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1;
                    if (totalPages <= 5) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => handlePageChange(page)}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                    return null;
                  })}
                  
                  {totalPages > 5 && <PaginationEllipsis />}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No collections found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange('all');
                  setSelectedColors([]);
                  setSelectedSizes([]);
                  setCurrentPage(1);
                }}
                className="mt-4 bg-amber-600 hover:bg-amber-700 text-white"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-orange-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Limited Time Collection Sale
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Exclusive Collections Sale
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get up to 40% off on premium collections. Plus free shipping on all orders over $99!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
              Browse Sale Collections
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
            >
              View Special Offers
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
