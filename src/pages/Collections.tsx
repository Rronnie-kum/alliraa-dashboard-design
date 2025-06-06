
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CollectionsFilters from '@/components/CollectionsFilters';
import CollectionsHeader from '@/components/CollectionsHeader';
import CollectionsToolbar from '@/components/CollectionsToolbar';
import ProductGrid from '@/components/ProductGrid';
import NoProductsFound from '@/components/NoProductsFound';
import { filterAndSortProducts } from '@/utils/productFilters';
import { allProducts } from '@/data/products';

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredProducts = filterAndSortProducts(allProducts, selectedCategory, priceRange, sortBy);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('popular');
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <CollectionsHeader filteredProductsCount={filteredProducts.length} />

      <CollectionsToolbar
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        selectedCategory={selectedCategory}
        priceRange={priceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onClearFilters={handleClearFilters}
      />

      {showFilters && (
        <CollectionsFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onClose={() => setShowFilters(false)}
        />
      )}

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayedProducts.length === 0 ? (
            <NoProductsFound onClearFilters={handleClearFilters} />
          ) : (
            <ProductGrid
              products={displayedProducts}
              viewMode={viewMode}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
