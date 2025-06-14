
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Grid, List, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CollectionControlsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  setShowFilters: (show: boolean) => void;
  showFilters: boolean;
}

const CollectionControls: React.FC<CollectionControlsProps> = ({
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  viewMode,
  setViewMode,
  setShowFilters,
  showFilters
}) => {
  return (
    <section className="py-6 bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white hover:bg-gray-50"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Collection Filters
            </Button>
            <Link to="/liked-products">
              <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-pink-50 border-pink-200 text-pink-600 hover:text-pink-700">
                <Heart className="h-4 w-4" />
                Wishlist
              </Button>
            </Link>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="featured">Sort by: Featured Collections</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="newest">Newest Collections</option>
            </select>
            <select 
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="under-50">Under $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-150">$100 - $150</option>
              <option value="above-150">Above $150</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 mr-3">View:</span>
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-amber-600 hover:bg-amber-700' : ''}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-amber-600 hover:bg-amber-700' : ''}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionControls;
