
import React from 'react';
import { Button } from '@/components/ui/button';
import { Grid, List, ChevronDown, SlidersHorizontal } from 'lucide-react';

interface CollectionsToolbarProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  selectedCategory: string;
  priceRange: string;
  sortBy: string;
  setSortBy: (sort: string) => void;
  viewMode: string;
  setViewMode: (mode: string) => void;
  onClearFilters: () => void;
}

const CollectionsToolbar: React.FC<CollectionsToolbarProps> = ({
  showFilters,
  setShowFilters,
  selectedCategory,
  priceRange,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  onClearFilters
}) => {
  return (
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
                onClick={onClearFilters}
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
  );
};

export default CollectionsToolbar;
