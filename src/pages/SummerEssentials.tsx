
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/collections/ProductGrid';
import { productData } from '@/models/product';
import useProductFilter from '@/hooks/useProductFilter';
import { Button } from '@/components/ui/button';
import { Sun, Sparkles, Star } from 'lucide-react';

const SummerEssentials = () => {
  const {
    filteredAndSortedProducts,
    currentProducts,
    hasMoreProducts,
    isLoading,
    isLoadingMore,
    handleViewMore,
    clearAllFilters
  } = useProductFilter({
    products: productData.filter(product => 
      product.category === 'tops' || 
      product.category === 'dresses' || 
      product.subcategory === 'casual'
    ),
    initialCategory: 'all',
    initialPriceRange: 'all'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')"
          }}
        ></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Sun className="h-8 w-8 text-yellow-200 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Sparkles className="h-6 w-6 text-orange-200 opacity-50" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce delay-300">
          <Star className="h-5 w-5 text-pink-200 opacity-60" />
        </div>
        
        <div className="relative z-10 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium mb-6 shadow-lg">
              <Sun className="h-5 w-5 mr-2" />
              Summer Collection 2024
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Summer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Essentials
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our handpicked collection of bright, breezy pieces perfect for sunny days and warm nights
            </p>
            
            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{filteredAndSortedProducts.length}+</div>
                <div className="text-white/80">Summer Styles</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">From $29</div>
                <div className="text-white/80">Starting Price</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Free Shipping</div>
                <div className="text-white/80">On Orders $99+</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                View Lookbook
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-current text-yellow-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-4">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UV Protection</h3>
              <p className="text-gray-600">All fabrics tested for sun protection and comfort</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Breathable Fabrics</h3>
              <p className="text-gray-600">Lightweight materials perfect for hot weather</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trending Styles</h3>
              <p className="text-gray-600">Latest summer fashion trends and timeless classics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Grid */}
      <div className="bg-white">
        <ProductGrid 
          products={currentProducts}
          filteredCount={filteredAndSortedProducts.length}
          totalCount={productData.length}
          viewMode="grid"
          selectedCategory="summer"
          categoryName="Summer Essentials Collection"
          hasMoreProducts={hasMoreProducts}
          isLoading={isLoading}
          isLoadingMore={isLoadingMore}
          onViewMoreClick={handleViewMore}
          onClearFilters={clearAllFilters}
        />
      </div>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated on Summer Trends
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get exclusive access to new arrivals and summer style tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold shadow-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SummerEssentials;
