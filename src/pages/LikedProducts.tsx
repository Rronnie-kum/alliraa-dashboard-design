
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
      
      {/* Hero Section - Matching home page style */}
      <section className="bg-gradient-to-r from-blue-100 to-teal-100 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link to="/kurti">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Collections
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Your Favorite Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              All your loved items in one place. Continue shopping or add them to your cart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add All to Cart
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white fill-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{likedProducts.length}</div>
              <div className="text-gray-600">Loved Items</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-teal-600 mb-2">
                ${likedProducts.reduce((total, product) => total + (product.originalPrice || product.price), 0)}
              </div>
              <div className="text-gray-600">Total Value</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">%</span>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${likedProducts.reduce((total, product) => total + (product.originalPrice || product.price) - product.price, 0)}
              </div>
              <div className="text-gray-600">You Save</div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-8 bg-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <span className="text-gray-600">{likedProducts.length} items</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">View:</span>
              <div className="flex bg-white rounded-lg border border-gray-300">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {likedProducts.length > 0 ? (
            <>
              <div className={`grid gap-8 ${viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
              }`}>
                {likedProducts.map((product) => (
                  <div key={product.id} className="relative">
                    <div className="absolute top-3 right-3 z-10">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="bg-white/80 hover:bg-white"
                      >
                        <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                      </Button>
                    </div>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link to="/collections">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Discover More
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No Liked Products Yet
              </h3>
              <p className="text-gray-600 mb-8">
                Start exploring our collection and like the products you love.
              </p>
              <Link to="/collections">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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
              Discover more products based on your preferences
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
          
          <div className="text-center mt-12">
            <Link to="/collections">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                View All Products
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
