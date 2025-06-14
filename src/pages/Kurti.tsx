
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/collections/ProductGrid';
import CollectionControls from '@/components/collections/CollectionControls';
import ShopFilters from '@/components/ShopFilters';
import KurtiHero from '@/components/kurti/KurtiHero';
import KurtiCategories from '@/components/kurti/KurtiCategories';
import KurtiOffers from '@/components/kurti/KurtiOffers';
import useProductFilter from '@/hooks/useProductFilter';
import { useNavigate } from 'react-router-dom';

const Kurti = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sample kurti products data
  const kurtiProducts = [
    {
      id: '1',
      name: 'Traditional Embroidered Kurti',
      price: 75,
      originalPrice: 95,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      badge: 'Bestseller',
      rating: 4.8,
      reviews: 124,
      category: 'embroidered',
      subcategory: 'traditional',
      colors: ['red', 'gold', 'blue'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: '2',
      name: 'Cotton Printed Kurti',
      price: 45,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 89,
      category: 'cotton',
      subcategory: 'casual',
      colors: ['blue', 'white', 'green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '3',
      name: 'Designer Silk Kurti',
      price: 125,
      originalPrice: 150,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      badge: 'Premium',
      rating: 4.9,
      reviews: 156,
      category: 'silk',
      subcategory: 'designer',
      colors: ['gold', 'red', 'purple'],
      sizes: ['S', 'M', 'L']
    },
    {
      id: '4',
      name: 'Casual Daily Wear Kurti',
      price: 35,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 67,
      category: 'cotton',
      subcategory: 'casual',
      colors: ['white', 'black', 'gray'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: '5',
      name: 'Festive Occasion Kurti',
      price: 95,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
      badge: 'Special',
      rating: 4.7,
      reviews: 203,
      category: 'designer',
      subcategory: 'festive',
      colors: ['red', 'gold', 'orange'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: '6',
      name: 'Modern Fusion Kurti',
      price: 65,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&v=2',
      rating: 4.4,
      reviews: 78,
      category: 'designer',
      subcategory: 'fusion',
      colors: ['blue', 'pink', 'white'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: '7',
      name: 'Floral Print Cotton Kurti',
      price: 55,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&v=2',
      rating: 4.3,
      reviews: 92,
      category: 'printed',
      subcategory: 'floral',
      colors: ['pink', 'yellow', 'green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '8',
      name: 'Silk Embroidered Kurti',
      price: 135,
      originalPrice: 160,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&v=3',
      badge: 'Limited',
      rating: 4.9,
      reviews: 234,
      category: 'embroidered',
      subcategory: 'luxury',
      colors: ['gold', 'red', 'blue'],
      sizes: ['S', 'M', 'L']
    },
    {
      id: '9',
      name: 'Casual Stripe Kurti',
      price: 42,
      image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?w=400&h=400&fit=crop&v=4',
      rating: 4.2,
      reviews: 156,
      category: 'cotton',
      subcategory: 'stripe',
      colors: ['blue', 'white', 'navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: '10',
      name: 'Party Wear Designer Kurti',
      price: 110,
      originalPrice: 140,
      image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=400&h=400&fit=crop&v=5',
      badge: 'Hot',
      rating: 4.8,
      reviews: 189,
      category: 'designer',
      subcategory: 'party',
      colors: ['black', 'gold', 'silver'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: '11',
      name: 'Traditional Block Print Kurti',
      price: 68,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&v=6',
      rating: 4.5,
      reviews: 143,
      category: 'printed',
      subcategory: 'block-print',
      colors: ['red', 'yellow', 'green'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: '12',
      name: 'Summer Cotton Kurti',
      price: 38,
      image: 'https://images.unsplash.com/photo-1506629905587-4b47d3cb0ee0?w=400&h=400&fit=crop&v=7',
      rating: 4.4,
      reviews: 98,
      category: 'cotton',
      subcategory: 'summer',
      colors: ['white', 'light-blue', 'pink'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Kurtis', count: '500+', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { id: 'cotton', name: 'Cotton Kurtis', count: '120+', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { id: 'silk', name: 'Silk Kurtis', count: '85+', color: 'bg-gradient-to-br from-yellow-500 to-orange-500' },
    { id: 'embroidered', name: 'Embroidered', count: '95+', color: 'bg-gradient-to-br from-green-500 to-teal-500' },
    { id: 'printed', name: 'Printed', count: '150+', color: 'bg-gradient-to-br from-red-500 to-pink-500' },
    { id: 'designer', name: 'Designer', count: '60+', color: 'bg-gradient-to-br from-indigo-500 to-purple-500' }
  ];

  // Use the product filter hook
  const {
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
    currentProducts,
    hasMoreProducts,
    isLoading,
    isLoadingMore,
    handleViewMore,
    clearAllFilters
  } = useProductFilter({
    products: kurtiProducts,
    initialCategory: 'all',
    initialPriceRange: 'all'
  });

  // Event handlers
  const handleShopNow = () => {
    const element = document.getElementById('kurti-products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewLookbook = () => {
    navigate('/about');
  };

  const handleShopCollection = () => {
    navigate('/shop?category=kurti');
  };

  const handleViewOffers = () => {
    navigate('/shop?sale=true');
  };

  const getCategoryName = () => {
    const category = categories.find(c => c.id === selectedCategory);
    return category ? category.name : 'Featured Kurtis';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <KurtiHero 
        onShopNow={handleShopNow}
        onViewLookbook={handleViewLookbook}
      />

      {/* Categories Section */}
      <KurtiCategories 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Filters and Controls */}
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

      {/* Advanced Filters */}
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

      {/* Products Grid */}
      <div id="kurti-products">
        <ProductGrid
          products={currentProducts}
          filteredCount={filteredAndSortedProducts.length}
          totalCount={kurtiProducts.length}
          viewMode={viewMode}
          selectedCategory={selectedCategory}
          categoryName={getCategoryName()}
          hasMoreProducts={hasMoreProducts}
          isLoading={isLoading}
          isLoadingMore={isLoadingMore}
          onViewMoreClick={handleViewMore}
          onClearFilters={clearAllFilters}
        />
      </div>

      {/* Special Offers Section */}
      <KurtiOffers 
        onShopCollection={handleShopCollection}
        onViewOffers={handleViewOffers}
      />

      <Footer />
    </div>
  );
};

export default Kurti;
