
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter, ShoppingBag, Grid, List, Trash2 } from 'lucide-react';

interface LikedProductsControlsProps {
  wishlistItemsCount: number;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  onAddAllToCart: () => void;
  onClearAll: () => void;
}

const LikedProductsControls: React.FC<LikedProductsControlsProps> = ({
  wishlistItemsCount,
  viewMode,
  setViewMode,
  onAddAllToCart,
  onClearAll
}) => {
  return (
    <section className="py-6 bg-amber-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-amber-50 border-amber-300 text-amber-800">
              <Filter className="h-4 w-4" />
              Filter by Category
            </Button>
            {wishlistItemsCount > 0 && (
              <>
                <Button 
                  onClick={onAddAllToCart}
                  className="bg-amber-800 hover:bg-amber-900 text-white shadow-md"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add All to Cart
                </Button>
                <Button 
                  onClick={onClearAll}
                  variant="destructive"
                  className="shadow-md"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-amber-700 mr-3 font-medium">View:</span>
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-amber-800 hover:bg-amber-900' : 'border-amber-300 text-amber-800 hover:bg-amber-50'}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-amber-800 hover:bg-amber-900' : 'border-amber-300 text-amber-800 hover:bg-amber-50'}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LikedProductsControls;
