
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
  category: string;
  subcategory: string;
  colors: string[];
  sizes: string[];
}

interface ProductGridProps {
  products: Product[];
  filteredCount: number;
  totalCount: number;
  viewMode: 'grid' | 'list';
  selectedCategory: string;
  categoryName: string;
  hasMoreProducts: boolean;
  isLoading: boolean;
  isLoadingMore: boolean;
  onViewMoreClick: () => void;
  onClearFilters: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  filteredCount,
  totalCount,
  viewMode,
  selectedCategory,
  categoryName,
  hasMoreProducts,
  isLoading,
  isLoadingMore,
  onViewMoreClick,
  onClearFilters
}) => {
  const renderSkeletons = () => {
    return Array.from({ length: 8 }, (_, index) => (
      <ProductCardSkeleton key={`skeleton-${index}`} />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {categoryName}
            </h2>
            <p className="text-gray-600">
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <Loader className="h-4 w-4 animate-spin" />
                  Loading products...
                </span>
              ) : (
                `Showing ${products.length} of ${filteredCount} items`
              )}
            </p>
          </div>
          <div className="text-sm text-gray-500">
            Free shipping on orders over $99
          </div>
        </div>
        
        <div className={`grid gap-8 ${viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {isLoading ? (
            renderSkeletons()
          ) : (
            products.map((product) => (
              <div key={product.id} className="group">
                <ProductCard {...product} />
              </div>
            ))
          )}
        </div>

        {/* View More Products Button */}
        {hasMoreProducts && !isLoading && (
          <div className="mt-12 text-center">
            <Button 
              onClick={onViewMoreClick}
              disabled={isLoadingMore}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {isLoadingMore ? (
                <>
                  <Loader className="h-5 w-5 mr-2 animate-spin" />
                  Loading More...
                </>
              ) : (
                'View More Products'
              )}
            </Button>
          </div>
        )}

        {filteredCount === 0 && !isLoading && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No collections found matching your criteria.</p>
            <Button 
              onClick={onClearFilters}
              className="mt-4 bg-amber-600 hover:bg-amber-700 text-white"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
