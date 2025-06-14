
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopFilters from '@/components/ShopFilters';
import CollectionHero from '@/components/collections/CollectionHero';
import CollectionControls from '@/components/collections/CollectionControls';
import CollectionOffers from '@/components/collections/CollectionOffers';
import ProductGrid from '@/components/collections/ProductGrid';
import { productData, categories } from '@/models/product';
import useProductFilter from '@/hooks/useProductFilter';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const {
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
    filteredAndSortedProducts,
    currentProducts,
    hasMoreProducts,
    isLoading,
    isLoadingMore,
    handleViewMore,
    clearAllFilters
  } = useProductFilter({
    products: productData,
    initialCategory: searchParams.get('category') || 'all',
    initialPriceRange: 'all'
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find the selected category name
  const categoryName = selectedCategory === 'all' ? 
    'All Collections' : 
    categories.find(c => c.id === selectedCategory)?.name || 'Collections';

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
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      {/* Filters Panel */}
      {showFilters && (
        <ShopFilters 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
          onClose={() => setShowFilters(false)}
        />
      )}

      <ProductGrid 
        products={currentProducts}
        filteredCount={filteredAndSortedProducts.length}
        totalCount={productData.length}
        viewMode={viewMode}
        selectedCategory={selectedCategory}
        categoryName={categoryName}
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

export default Shop;
