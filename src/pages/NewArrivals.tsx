
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CollectionHero from '@/components/collections/CollectionHero';
import CollectionControls from '@/components/collections/CollectionControls';
import ProductGrid from '@/components/collections/ProductGrid';
import CollectionOffers from '@/components/collections/CollectionOffers';
import useProductFilter from '@/hooks/useProductFilter';
import { productData } from '@/models/product';

const NewArrivals = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products to show only new arrivals (products with badge 'NEW')
  const newArrivalProducts = productData.filter(product => 
    product.badge === 'NEW' || product.badge === 'Bestseller' || product.badge === 'Premium'
  );

  const {
    currentProducts,
    filteredAndSortedProducts,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    selectedColors,
    setSelectedColors,
    selectedSizes,
    setSelectedSizes,
    hasMoreProducts,
    isLoading,
    isLoadingMore,
    handleViewMore,
    clearAllFilters
  } = useProductFilter({
    products: newArrivalProducts,
    initialCategory: 'all'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <CollectionHero />
      
      <CollectionControls
        sortBy={sortBy}
        setSortBy={setSortBy}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        viewMode={viewMode}
        setViewMode={setViewMode}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
      />
      
      <ProductGrid
        products={currentProducts}
        filteredCount={filteredAndSortedProducts.length}
        totalCount={newArrivalProducts.length}
        viewMode="grid"
        selectedCategory={selectedCategory}
        categoryName="New Arrivals"
        hasMoreProducts={hasMoreProducts}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        onViewMoreClick={handleViewMore}
        onClearFilters={clearAllFilters}
      />
      
      <CollectionOffers />
      
      <Footer />
    </div>
  );
};

export default NewArrivals;
