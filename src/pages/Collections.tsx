import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CollectionsFilters from '@/components/CollectionsFilters';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Filter, Grid, List, ChevronDown, SlidersHorizontal } from 'lucide-react';

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const allProducts = [
    {
      id: '1',
      name: 'Elegant Evening Dress',
      price: 199,
      originalPrice: 299,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      badge: 'Sale',
      category: 'dresses',
      rating: 5
    },
    {
      id: '2',
      name: 'Casual Cotton Shirt',
      price: 45,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
      category: 'tops',
      rating: 4
    },
    {
      id: '3',
      name: 'Designer Silk Blouse',
      price: 129,
      originalPrice: 180,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      badge: '30% Off',
      category: 'tops',
      rating: 5
    },
    {
      id: '4',
      name: 'Bohemian Maxi Dress',
      price: 159,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
      category: 'dresses',
      rating: 4
    },
    {
      id: '5',
      name: 'Classic White Blouse',
      price: 65,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
      category: 'tops',
      rating: 5
    },
    {
      id: '6',
      name: 'Summer Floral Dress',
      price: 89,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop',
      badge: 'New',
      category: 'dresses',
      rating: 4
    },
    {
      id: '7',
      name: 'Professional Blazer',
      price: 199,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      category: 'blazers',
      rating: 5
    },
    {
      id: '8',
      name: 'Vintage Denim Jacket',
      price: 79,
      originalPrice: 99,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop',
      badge: 'Sale',
      category: 'jackets',
      rating: 4
    },
    {
      id: '9',
      name: 'Luxury Silk Scarf',
      price: 35,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
      category: 'accessories',
      rating: 5
    },
    {
      id: '10',
      name: 'Trendy Crop Top',
      price: 29,
      originalPrice: 45,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      badge: 'Hot',
      category: 'tops',
      rating: 4
    },
    {
      id: '11',
      name: 'Midi Wrap Dress',
      price: 139,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
      category: 'dresses',
      rating: 5
    },
    {
      id: '12',
      name: 'Cozy Knit Sweater',
      price: 89,
      originalPrice: 125,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      badge: '30% Off',
      category: 'sweaters',
      rating: 4
    }
  ];

  const filterProducts = () => {
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
          filtered = filtered.filter(product => product.price >= 100 && product.price <= 150);
          break;
        case 'above-150':
          filtered = filtered.filter(product => product.price > 150);
          break;
      }
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Keep original order for 'popular'
        break;
    }

    return filtered;
  };

  const filteredProducts = filterProducts();
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('popular');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Collections</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collections of premium fashion pieces, 
            each selected for quality, style, and timeless appeal
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              {filteredProducts.length} Items Found
            </span>
            <span className="bg-amber-100 px-4 py-2 rounded-full text-sm font-medium text-amber-800">
              Free Shipping Over $100
            </span>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6 border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 hover:bg-amber-50 hover:border-amber-300"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {(selectedCategory !== 'all' || priceRange !== 'all') && (
                  <span className="bg-amber-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                    Active
                  </span>
                )}
              </Button>
              
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 pr-8 bg-white hover:border-amber-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                >
                  <option value="popular">Sort by: Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {(selectedCategory !== 'all' || priceRange !== 'all') && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleClearFilters}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Clear Filters
                </Button>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-2">View:</span>
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('grid')}
                className="px-3"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setViewMode('list')}
                className="px-3"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Panel */}
      {showFilters && (
        <CollectionsFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onClose={() => setShowFilters(false)}
        />
      )}

      {/* Products Grid/List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayedProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <Filter className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
              <Button onClick={handleClearFilters} className="bg-amber-600 hover:bg-amber-700">
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1 lg:grid-cols-2 gap-6'
              }`}>
                {displayedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    {...product}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16">
                  <Pagination>
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                      
                      {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index + 1}>
                          <PaginationLink
                            onClick={() => setCurrentPage(index + 1)}
                            isActive={currentPage === index + 1}
                            className="cursor-pointer"
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
