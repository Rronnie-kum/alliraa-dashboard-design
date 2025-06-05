import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import KurtiFilters from '@/components/KurtiFilters';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Kurti = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(6);

  const kurtiProducts = [
    {
      id: '1',
      name: 'Traditional Embroidered Kurti',
      price: 75,
      originalPrice: 95,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      badge: 'Bestseller',
      rating: 4.8,
      reviews: 124,
      category: 'embroidered'
    },
    {
      id: '2',
      name: 'Cotton Printed Kurti',
      price: 45,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 89,
      category: 'cotton'
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
      category: 'silk'
    },
    {
      id: '4',
      name: 'Casual Daily Wear Kurti',
      price: 35,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 67,
      category: 'cotton'
    },
    {
      id: '5',
      name: 'Festive Occasion Kurti',
      price: 95,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
      badge: 'Special',
      rating: 4.7,
      reviews: 203,
      category: 'designer'
    },
    {
      id: '6',
      name: 'Modern Fusion Kurti',
      price: 65,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&v=2',
      rating: 4.4,
      reviews: 78,
      category: 'designer'
    },
    {
      id: '7',
      name: 'Floral Print Cotton Kurti',
      price: 55,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&v=2',
      rating: 4.3,
      reviews: 92,
      category: 'printed'
    },
    {
      id: '8',
      name: 'Silk Embroidered Kurti',
      price: 135,
      originalPrice: 160,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&v=3',
      badge: 'Limited',
      rating: 4.9,
      reviews: 234,
      category: 'embroidered'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Kurtis', count: '500+', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { id: 'cotton', name: 'Cotton Kurtis', count: '120+', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { id: 'silk', name: 'Silk Kurtis', count: '85+', color: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
    { id: 'embroidered', name: 'Embroidered', count: '95+', color: 'bg-gradient-to-br from-green-500 to-teal-500' },
    { id: 'printed', name: 'Printed', count: '150+', color: 'bg-gradient-to-br from-red-500 to-pink-500' },
    { id: 'designer', name: 'Designer', count: '60+', color: 'bg-gradient-to-br from-indigo-500 to-purple-500' }
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = kurtiProducts;

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
        // Keep original order for newest (since we don't have dates)
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const handleLoadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 6, filteredAndSortedProducts.length));
  };

  const handleShopCollection = () => {
    // Navigate to shop with kurti filter
    window.location.href = '/shop?category=kurti';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-amber-100"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-amber-800 mb-6">
            <Star className="h-4 w-4 mr-2 text-yellow-500" />
            Handpicked Collection
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Exquisite <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Kurti</span> Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover our curated selection of traditional and contemporary kurtis, 
            crafted with premium fabrics and timeless designs for the modern woman
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleShopCollection}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/about'}
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg rounded-full"
            >
              View Lookbook
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect style from our diverse collection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`group relative overflow-hidden rounded-2xl p-8 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ${category.color} ${selectedCategory === category.id ? 'ring-4 ring-white shadow-2xl' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 mb-4">{category.count} items</p>
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

      {/* Enhanced Filters and Controls */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-white hover:bg-gray-50"
              >
                <Filter className="h-4 w-4" />
                All Filters
              </Button>
              <Link to="/liked-products">
                <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-pink-50 border-pink-200 text-pink-600 hover:text-pink-700">
                  <Heart className="h-4 w-4" />
                  Show Liked Products
                </Button>
              </Link>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">Newest First</option>
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
        <KurtiFilters 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onClose={() => setShowFilters(false)}
        />
      )}

      {/* Enhanced Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'all' ? 'Featured Kurtis' : `${categories.find(c => c.id === selectedCategory)?.name || 'Kurtis'}`}
              </h2>
              <p className="text-gray-600">
                Showing {Math.min(visibleProducts, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} products
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
            {filteredAndSortedProducts.slice(0, visibleProducts).map((product) => (
              <div key={product.id} className="group">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {visibleProducts < filteredAndSortedProducts.length && (
            <div className="text-center mt-16">
              <Button 
                onClick={handleLoadMore}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Load More Kurtis
              </Button>
            </div>
          )}

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="mt-4 bg-amber-600 hover:bg-amber-700 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Special Offers */}
      <section className="py-20 bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-orange-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Limited Time Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Special Kurti Collection
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get up to 40% off on our premium designer kurti collection. 
            Plus free shipping on all orders!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleShopCollection}
              className="bg-white text-orange-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
            >
              Shop Collection
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/shop?sale=true'}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
            >
              View Offers
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kurti;
