
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, ShoppingBag, Filter, Grid, List } from 'lucide-react';
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 via-rose-50 to-red-50 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-pink-100"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/kurti">
              <Button variant="ghost" className="mr-4 hover:bg-white/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Kurtis
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-pink-800 mb-6">
              <Heart className="h-4 w-4 mr-2 text-pink-500 fill-pink-500" />
              Your Favorites
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Liked <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Products</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All your favorite kurtis in one place. Shop your wishlisted items and never miss out on the styles you love.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">{likedProducts.length}</div>
              <div className="text-gray-600">Liked Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${likedProducts.reduce((total, product) => total + (product.originalPrice || product.price), 0)}
              </div>
              <div className="text-gray-600">Total Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ${likedProducts.reduce((total, product) => total + (product.originalPrice || product.price) - product.price, 0)}
              </div>
              <div className="text-gray-600">Potential Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                Filter by Category
              </Button>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add All to Cart
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-3">View:</span>
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-pink-600 hover:bg-pink-700' : ''}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-pink-600 hover:bg-pink-700' : ''}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {likedProducts.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Your Liked Products ({likedProducts.length})
                </h2>
                <p className="text-gray-600">
                  Items you've marked as favorites
                </p>
              </div>
              
              <div className={`grid gap-8 ${viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
              }`}>
                {likedProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="absolute top-2 right-2 z-10">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="bg-white/90 hover:bg-white shadow-md"
                      >
                        <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />
                      </Button>
                    </div>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link to="/kurti">
                  <Button variant="outline" className="px-8 py-3">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Liked Products Yet
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Start browsing our collection and heart the items you love to see them here.
              </p>
              <Link to="/kurti">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              You Might Also Like
            </h2>
            <p className="text-gray-600">
              Similar styles based on your preferences
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
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LikedProducts;
