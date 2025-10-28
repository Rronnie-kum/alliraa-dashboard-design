import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { productData } from '@/models/product';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Sparkles, Briefcase, Palette } from 'lucide-react';

const PouchBag = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter pouch bag products
  const pouchBagProducts = productData.filter(product => product.category === 'pouch-bags');

  // Categories with icons
  const categories = [
    { 
      id: 'all', 
      name: 'All Pouch Bags', 
      icon: ShoppingBag,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'travel', 
      name: 'Travel Pouch Bags', 
      icon: Briefcase,
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'makeup', 
      name: 'Makeup Pouch Bags', 
      icon: Sparkles,
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      id: 'leather', 
      name: 'Leather Pouch Bags', 
      icon: ShoppingBag,
      gradient: 'from-amber-600 to-orange-500'
    },
    { 
      id: 'printed', 
      name: 'Printed Pouch Bags', 
      icon: Palette,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? pouchBagProducts 
    : pouchBagProducts.filter(p => p.subcategory === selectedCategory);

  // Sort products by rating (highest first)
  const sortedProducts = [...filteredProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Pouch Bags Collection
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover our curated selection of premium pouch bags for every occasion
          </p>
          <div className="flex items-center justify-center gap-4 text-sm md:text-base">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              🌟 {pouchBagProducts.length}+ Premium Designs
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              ⭐ Top Rated Collection
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              const categoryProducts = category.id === 'all' 
                ? pouchBagProducts 
                : pouchBagProducts.filter(p => p.subcategory === category.id);
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-br ' + category.gradient + ' text-white shadow-2xl scale-105' 
                      : 'bg-card hover:shadow-xl hover:scale-105'
                  }`}
                >
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full transition-colors ${
                      isActive 
                        ? 'bg-white/20 backdrop-blur-sm' 
                        : 'bg-muted group-hover:bg-muted/80'
                    }`}>
                      <Icon className={`h-8 w-8 ${isActive ? 'text-white' : 'text-foreground'}`} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-white' : 'text-foreground'}`}>
                        {category.name}
                      </h3>
                      <p className={`text-sm ${isActive ? 'text-white/90' : 'text-muted-foreground'}`}>
                        {categoryProducts.length} Products
                      </p>
                    </div>
                  </div>
                  {!isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                {categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-muted-foreground mt-2">
                Showing {sortedProducts.length} products • Sorted by highest rating
              </p>
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">No products found in this category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="animate-fade-in">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-800 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Explore our full collection or contact us for custom orders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-amber-800 hover:bg-gray-100 font-semibold"
              onClick={() => window.location.href = '/shop'}
            >
              Browse All Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-semibold"
              onClick={() => window.location.href = '/about'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PouchBag;
