
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

interface CollectionsFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  onClose: () => void;
}

const CollectionsFilters: React.FC<CollectionsFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  onClose
}) => {
  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'tops', name: 'Tops & Blouses' },
    { id: 'blazers', name: 'Blazers' },
    { id: 'jackets', name: 'Jackets' },
    { id: 'sweaters', name: 'Sweaters' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-50', label: 'Under $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-150', label: '$100 - $150' },
    { value: 'above-150', label: 'Above $150' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', color: 'bg-black' },
    { name: 'White', color: 'bg-white border' },
    { name: 'Red', color: 'bg-red-500' },
    { name: 'Blue', color: 'bg-blue-500' },
    { name: 'Green', color: 'bg-green-500' },
    { name: 'Pink', color: 'bg-pink-500' },
    { name: 'Purple', color: 'bg-purple-500' },
    { name: 'Yellow', color: 'bg-yellow-500' },
    { name: 'Gray', color: 'bg-gray-500' },
    { name: 'Brown', color: 'bg-amber-700' }
  ];

  const brands = ['Zara', 'H&M', 'Mango', 'Forever 21', 'ASOS', 'Uniqlo'];
  const occasions = ['Casual', 'Formal', 'Party', 'Work', 'Wedding', 'Beach'];

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
  };

  return (
    <div className="bg-white border-t border-gray-200 py-8 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0">
          <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-amber-50 to-orange-50">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Filter Collections
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-white">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                        {category.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sizes</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      size="sm"
                      className="hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-colors"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Colors</h3>
                <div className="grid grid-cols-5 gap-3">
                  {colors.map((colorItem) => (
                    <button
                      key={colorItem.name}
                      className={`w-8 h-8 rounded-full border-2 border-gray-300 hover:border-amber-500 hover:scale-110 transition-all ${colorItem.color}`}
                      title={colorItem.name}
                    />
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-600 focus:ring-amber-500 rounded"
                      />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors text-sm">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Occasions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Occasions</h3>
                <div className="space-y-2">
                  {occasions.map((occasion) => (
                    <label key={occasion} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-amber-600 focus:ring-amber-500 rounded"
                      />
                      <span className="text-gray-700 group-hover:text-amber-600 transition-colors text-sm">
                        {occasion}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200">
              <Button 
                variant="outline" 
                onClick={handleClearFilters}
                className="px-6 py-2 hover:bg-gray-50"
              >
                Clear All Filters
              </Button>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={onClose}
                  className="px-6 py-2"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={onClose}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-2"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollectionsFilters;
