
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/collections/ProductGrid';
import { productData } from '@/models/product';
import useProductFilter from '@/hooks/useProductFilter';

const EveningElegance = () => {
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
      product.category === 'dresses' || 
      product.subcategory === 'party' ||
      product.subcategory === 'formal' ||
      product.category === 'accessories'
    ),
    initialCategory: 'all',
    initialPriceRange: 'all'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Evening Elegance</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Sophisticated pieces for special occasions and memorable nights
          </p>
          <div className="text-lg">Starting from $89</div>
        </div>
      </section>

      <ProductGrid 
        products={currentProducts}
        filteredCount={filteredAndSortedProducts.length}
        totalCount={productData.length}
        viewMode="grid"
        selectedCategory="evening"
        categoryName="Evening Elegance Collection"
        hasMoreProducts={hasMoreProducts}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        onViewMoreClick={handleViewMore}
        onClearFilters={clearAllFilters}
      />

      <Footer />
    </div>
  );
};

export default EveningElegance;
