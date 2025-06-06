
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, ShoppingBag, Filter, Grid, List, Sparkles, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const LikedProducts = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sample liked products data
  const likedProducts = [
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
      id: '5',
      name: 'Festive Occasion Kurti',
      price: 95,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
      badge: 'Special',
      rating: 4.7,
      reviews: 203
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Updated to match home page style */}
      <section className="relative bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link to="/kurti">
              <Button variant="ghost" className="mr-4 bg-white/90 hover:bg-white shadow-md backdrop-blur-sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Collections
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-purple-800 mb-8 shadow-lg">
              <Heart className="h-5 w-5 mr-2 text-purple-600 fill-purple-600" />
              <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
              Your Wishlist Collection
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Favorite 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 block">
                Fashion Finds
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Curated with love - all your heart-picked fashion pieces in one beautiful space. 
              Your personal style sanctuary awaits.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-gray-700 shadow-lg">
                <Star className="h-4 w-4 inline mr-2 text-yellow-500 fill-yellow-500" />
                Premium Selection
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                <TrendingUp className="h-4 w-4 inline mr-2" />
                Trending Styles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Enhanced styling */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white fill-white" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{likedProducts.length}</div>
              <div className="text-gray-600 font-medium">Loved Items</div>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                ${likedProducts.reduce((total, product) => total + (product.originalPrice || product.price), 0)}
              </div>
              <div className="text-gray-600 font-medium">Total Collection Value</div>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-amber-600 mb-2">
                ${likedProducts.reduce((total, product) => total + (product.originalPrice || product.price) - product.price, 0)}
              </div>
              <div className="text-gray-600 font-medium">You're Saving</div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section - Modern design */}
      <section className="py-8 bg-gradient-to-r from-gray-50 to-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-purple-50 border-purple-200 text-purple-700 hover:text-purple-800 shadow-sm">
                <Filter className="h-4 w-4" />
                Filter Collection
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add All to Cart
              </Button>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">View Mode:</span>
              <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`${viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-purple-600'
                  } transition-all duration-200`}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`${viewMode === 'list' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-purple-600'
                  } transition-all duration-200`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {likedProducts.length > 0 ? (
            <>
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Curated Collection
                  <span className="text-purple-600"> ({likedProducts.length})</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Every piece tells a story. These are the items that caught your heart and deserve a place in your wardrobe.
                </p>
              </div>
              
              <div className={`grid gap-8 ${viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
              }`}>
                {likedProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="absolute top-3 right-3 z-10">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="bg-white/95 hover:bg-white shadow-lg backdrop-blur-sm border border-gray-200"
                      >
                        <Heart className="h-4 w-4 text-purple-500 fill-purple-500" />
                      </Button>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-105">
                      <ProductCard {...product} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <Link to="/collections">
                  <Button variant="outline" className="px-8 py-3 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 shadow-sm">
                    Discover More Styles
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="h-16 w-16 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Your Wishlist Awaits
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                Start exploring our beautiful collection and heart the pieces that speak to your style.
              </p>
              <Link to="/collections">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-lg">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Start Your Collection
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Recommendations Section - Enhanced design */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-purple-800 mb-6 shadow-lg">
              <Sparkles className="h-4 w-4 mr-2 text-purple-600" />
              Curated For You
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              You Might Also 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Love</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked styles that complement your taste and elevate your wardrobe
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: '7',
                name: 'Casual Cotton Kurti',
                price: 55,
                image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
                rating: 4.5
              },
              {
                id: '8',
                name: 'Elegant Evening Kurti',
                price: 85,
                image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
                rating: 4.6
              },
              {
                id: '9',
                name: 'Printed Summer Kurti',
                price: 65,
                image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&v=3',
                rating: 4.4
              },
              {
                id: '10',
                name: 'Traditional Block Print',
                price: 75,
                image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&v=2',
                rating: 4.7
              }
            ].map((product) => (
              <div key={product.id} className="transform transition-transform duration-300 hover:scale-105">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/collections">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 shadow-lg">
                Explore Full Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LikedProducts;
