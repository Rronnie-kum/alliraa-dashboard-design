
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CollectionHero from '@/components/collections/CollectionHero';
import CollectionControls from '@/components/collections/CollectionControls';
import ProductGrid from '@/components/collections/ProductGrid';
import CollectionOffers from '@/components/collections/CollectionOffers';
import useProductFilter from '@/hooks/useProductFilter';
import { productData } from '@/models/product';

const NewArrivals = () => {
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

  const heroData = {
    title: "New Arrivals Collection",
    subtitle: "Discover the Latest Fashion Trends",
    description: "Fresh styles that just landed in our collection. Be the first to wear what's next in fashion.",
    backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    badge: "Fresh Arrivals"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <CollectionHero {...heroData} />
      
      <CollectionControls
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        selectedSizes={selectedSizes}
        setSelectedSizes={setSelectedSizes}
        onClearFilters={clearAllFilters}
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
