
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/collections/ProductGrid';
import { productData } from '@/models/product';
import useProductFilter from '@/hooks/useProductFilter';

const HealthyLifestyle = () => {
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
      product.category === 'bottoms' || 
      product.subcategory === 'casual' ||
      product.subcategory === 'sports' ||
      product.subcategory === 'activewear'
    ),
    initialCategory: 'all',
    initialPriceRange: 'all'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-amber-100 to-orange-200 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/94720f0d-9ce4-4047-9927-ea1ad7d2e74a.png')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Everyday<br />
              For Your Healthy
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover our curated collection of comfortable, stylish pieces perfect for your active lifestyle
            </p>
            <div className="text-lg">Starting from $25</div>
          </div>
        </div>
        
        {/* Scrolling text */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-white py-4 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            <span className="mx-8 text-2xl font-bold">ACTIVE LIFESTYLE! • COMFORT FIRST! • HEALTHY CHOICES! • STYLE & WELLNESS! • </span>
            <span className="mx-8 text-2xl font-bold">ACTIVE LIFESTYLE! • COMFORT FIRST! • HEALTHY CHOICES! • STYLE & WELLNESS! • </span>
          </div>
        </div>
      </section>

      <ProductGrid 
        products={currentProducts}
        filteredCount={filteredAndSortedProducts.length}
        totalCount={productData.length}
        viewMode="grid"
        selectedCategory="healthy"
        categoryName="Healthy Lifestyle Collection"
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

export default HealthyLifestyle;
