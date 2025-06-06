
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface NoProductsFoundProps {
  onClearFilters: () => void;
}

const NoProductsFound: React.FC<NoProductsFoundProps> = ({ onClearFilters }) => {
  return (
    <div className="text-center py-16">
      <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
        <Filter className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
      <p className="text-gray-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
      <Button onClick={onClearFilters} className="bg-amber-600 hover:bg-amber-700">
        Clear All Filters
      </Button>
    </div>
  );
};

export default NoProductsFound;
