
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, ShoppingBag, Filter, Grid, List, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';

const LikedProducts = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { toast } = useToast();

  const handleClearAll = () => {
    wishlistItems.forEach(product => removeFromWishlist(product.id));
    toast({
      title: "Wishlist Cleared",
      description: "All items have been removed from your wishlist"
    });
  };

  const handleAddAllToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${wishlistItems.length} items added to cart`
    });
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      {/* Hero Section with Amber Theme */}
      <section className="relative bg-gradient-to-br from-amber-100 via-amber-50 to-orange-100 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-amber-200 to-orange-200"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/kurti">
              <Button variant="outline" className="mr-4 border-amber-300 text-amber-800 hover:bg-amber-100">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Kurtis
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-amber-800 mb-6 shadow-sm border border-amber-200">
              <Heart className="h-5 w-5 mr-2 text-amber-600 fill-amber-600" />
              Your Favorites Collection
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-4">
              Liked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Products</span>
            </h1>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              All your favorite kurtis in one place. Shop your wishlisted items and never miss out on the styles you love.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section with Amber Theme */}
      <section className="py-8 bg-white border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-amber-50 rounded-lg border border-amber-200">
              <div className="text-3xl font-bold text-amber-700 mb-2">{wishlistItems.length}</div>
              <div className="text-amber-600 font-medium">Liked Items</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="text-3xl font-bold text-green-700 mb-2">
                ${wishlistItems.reduce((total, product) => total + (product.originalPrice || product.price), 0)}
              </div>
              <div className="text-green-600 font-medium">Total Value</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-3xl font-bold text-orange-700 mb-2">
                ${wishlistItems.reduce((total, product) => total + (product.originalPrice ? product.originalPrice - product.price : 0), 0)}
              </div>
              <div className="text-orange-600 font-medium">Potential Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section with Amber Theme */}
      <section className="py-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-amber-50 border-amber-300 text-amber-800">
                <Filter className="h-4 w-4" />
                Filter by Category
              </Button>
              {wishlistItems.length > 0 && (
                <>
                  <Button 
                    onClick={handleAddAllToCart}
                    className="bg-amber-800 hover:bg-amber-900 text-white shadow-md"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add All to Cart
                  </Button>
                  <Button 
                    onClick={handleClearAll}
                    variant="destructive"
                    className="shadow-md"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-amber-700 mr-3 font-medium">View:</span>
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-amber-800 hover:bg-amber-900' : 'border-amber-300 text-amber-800 hover:bg-amber-50'}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-amber-800 hover:bg-amber-900' : 'border-amber-300 text-amber-800 hover:bg-amber-50'}
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
          {wishlistItems.length > 0 ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-amber-900 mb-2">
                  Your Liked Products ({wishlistItems.length})
                </h2>
                <p className="text-amber-700">
                  Items you've marked as favorites
                </p>
              </div>
              
              <div className={`grid gap-8 ${viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
              }`}>
                {wishlistItems.map((product) => (
                  <div key={product.id} className="group relative">
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link to="/kurti">
                  <Button variant="outline" className="px-8 py-3 border-amber-300 text-amber-800 hover:bg-amber-50">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="bg-amber-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-16 w-16 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                No Liked Products Yet
              </h3>
              <p className="text-amber-700 mb-8 max-w-md mx-auto">
                Start browsing our collection and heart the items you love to see them here.
              </p>
              <Link to="/kurti">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 shadow-md">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Recommendations Section with Amber Theme */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              You Might Also Like
            </h2>
            <p className="text-amber-700">
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
