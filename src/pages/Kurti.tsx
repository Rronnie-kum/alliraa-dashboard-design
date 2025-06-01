
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';

const Kurti = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const kurtiProducts = [
    {
      id: '1',
      name: 'Traditional Embroidered Kurti',
      price: 75,
      originalPrice: 95,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      badge: 'Bestseller',
      rating: 4.8,
      reviews: 124
    },
    {
      id: '2',
      name: 'Cotton Printed Kurti',
      price: 45,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 89
    },
    {
      id: '3',
      name: 'Designer Silk Kurti',
      price: 125,
      originalPrice: 150,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      badge: 'Premium',
      rating: 4.9,
      reviews: 156
    },
    {
      id: '4',
      name: 'Casual Daily Wear Kurti',
      price: 35,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 67
    },
    {
      id: '5',
      name: 'Festive Occasion Kurti',
      price: 95,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
      badge: 'Special',
      rating: 4.7,
      reviews: 203
    },
    {
      id: '6',
      name: 'Modern Fusion Kurti',
      price: 65,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&v=2',
      rating: 4.4,
      reviews: 78
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

  const priceRanges = [
    { label: 'Under ₹50', value: 'under-50' },
    { label: '₹50 - ₹100', value: '50-100' },
    { label: '₹100 - ₹150', value: '100-150' },
    { label: 'Above ₹150', value: 'above-150' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23fbbf24\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
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
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Shop Now
            </Button>
            <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg rounded-full">
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
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`group relative overflow-hidden rounded-2xl p-8 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ${category.color}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 mb-4">{category.count} items</p>
                  <div className="inline-flex items-center text-sm font-medium">
                    Explore Collection
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
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                All Filters
              </Button>
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest First</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                <option>All Prices</option>
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
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

      {/* Enhanced Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Kurtis
              </h2>
              <p className="text-gray-600">
                Showing {kurtiProducts.length} of 500+ products
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Free shipping on orders over ₹999
            </div>
          </div>
          
          <div className={`grid gap-8 ${viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            {kurtiProducts.map((product) => (
              <div key={product.id} className="group">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Load More Kurtis
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Special Offers */}
      <section className="py-20 bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M30 30l15-15v30l-15-15z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
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
            <Button className="bg-white text-orange-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
              Shop Collection
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
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
