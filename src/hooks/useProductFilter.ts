
import { useMemo, useState, useCallback, useEffect } from 'react';
import { Product } from '@/models/product';

interface UseProductFilterProps {
  products: Product[];
  initialCategory?: string;
  initialPriceRange?: string;
}

interface UseProductFilterReturn {
  filteredAndSortedProducts: Product[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
  displayedProducts: number;
  setDisplayedProducts: (count: number) => void;
  currentProducts: Product[];
  hasMoreProducts: boolean;
  isLoading: boolean;
  isLoadingMore: boolean;
  handleViewMore: () => void;
  clearAllFilters: () => void;
}

const useProductFilter = ({
  products,
  initialCategory = 'all',
  initialPriceRange = 'all'
}: UseProductFilterProps): UseProductFilterReturn => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(initialPriceRange);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  // Filter and sort products without side effects
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

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
          filtered = filtered.filter(product => product.price > 100 && product.price <= 150);
          break;
        case 'above-150':
          filtered = filtered.filter(product => product.price > 150);
          break;
      }
    }

    // Filter by colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        // Keep original order for newest
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    return filtered;
  }, [selectedCategory, priceRange, selectedColors, selectedSizes, sortBy, products]);

  // Handle loading state with useEffect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, priceRange, selectedColors, selectedSizes, sortBy, products]);

  // Display products based on displayedProducts count
  const currentProducts = useMemo(() => {
    return filteredAndSortedProducts.slice(0, displayedProducts);
  }, [filteredAndSortedProducts, displayedProducts]);

  const hasMoreProducts = displayedProducts < filteredAndSortedProducts.length;

  const handleViewMore = useCallback(() => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setDisplayedProducts(prev => Math.min(prev + 12, filteredAndSortedProducts.length));
      setIsLoadingMore(false);
    }, 500);
  }, [filteredAndSortedProducts.length]);

  const clearAllFilters = useCallback(() => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSelectedColors([]);
    setSelectedSizes([]);
    setDisplayedProducts(12);
  }, []);

  return {
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
    displayedProducts,
    setDisplayedProducts,
    currentProducts,
    hasMoreProducts,
    isLoading,
    isLoadingMore,
    handleViewMore,
    clearAllFilters
  };
};

export default useProductFilter;
