
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Loader, Check } from 'lucide-react';

interface ShopFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
  onClose: () => void;
}

const ShopFilters: React.FC<ShopFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
  onClose
}) => {
  const [isApplying, setIsApplying] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'kurti', name: 'Kurtis' },
    { id: 'tops', name: 'Tops' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'bottoms', name: 'Bottoms' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-50', label: 'Under $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-150', label: '$100 - $150' },
    { value: 'above-150', label: 'Above $150' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '24', '26', '28', '30', '32', 'One Size'];
  
  const colors = [
    { name: 'Red', value: 'red', color: 'bg-red-500' },
    { name: 'Blue', value: 'blue', color: 'bg-blue-500' },
    { name: 'Green', value: 'green', color: 'bg-green-500' },
    { name: 'Yellow', value: 'yellow', color: 'bg-yellow-500' },
    { name: 'Pink', value: 'pink', color: 'bg-pink-500' },
    { name: 'Purple', value: 'purple', color: 'bg-purple-500' },
    { name: 'Black', value: 'black', color: 'bg-black' },
    { name: 'White', value: 'white', color: 'bg-white border' },
    { name: 'Gray', value: 'gray', color: 'bg-gray-500' },
    { name: 'Brown', value: 'brown', color: 'bg-amber-700' },
    { name: 'Navy', value: 'navy', color: 'bg-blue-900' },
    { name: 'Gold', value: 'gold', color: 'bg-yellow-400' }
  ];

  const handleColorToggle = (colorValue: string) => {
    if (selectedColors.includes(colorValue)) {
      setSelectedColors(selectedColors.filter(c => c !== colorValue));
    } else {
      setSelectedColors([...selectedColors, colorValue]);
    }
  };

  const handleSizeToggle = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSelectedColors([]);
    setSelectedSizes([]);
  };

  const handleApplyFilters = () => {
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      onClose();
    }, 500);
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all' || selectedColors.length > 0 || selectedSizes.length > 0;

  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              Filter Collections
              {hasActiveFilters && (
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {[
                    selectedCategory !== 'all' ? 1 : 0,
                    priceRange !== 'all' ? 1 : 0,
                    selectedColors.length,
                    selectedSizes.length
                  ].reduce((sum, count) => sum + count, 0)} active
                </span>
              )}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                      variant={selectedSizes.includes(size) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSizeToggle(size)}
                      className={`text-xs relative ${selectedSizes.includes(size) 
                        ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                        : 'hover:bg-amber-50 hover:border-amber-300'
                      }`}
                    >
                      {selectedSizes.includes(size) && (
                        <Check className="h-3 w-3 absolute top-0 right-0 transform translate-x-1 -translate-y-1" />
                      )}
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Colors</h3>
                <div className="grid grid-cols-4 gap-3">
                  {colors.map((colorItem) => (
                    <button
                      key={colorItem.value}
                      onClick={() => handleColorToggle(colorItem.value)}
                      className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColors.includes(colorItem.value)
                          ? 'border-amber-500 ring-2 ring-amber-200 scale-110' 
                          : 'border-gray-300 hover:border-amber-400 hover:scale-105'
                      } ${colorItem.color}`}
                      title={colorItem.name}
                    >
                      {selectedColors.includes(colorItem.value) && (
                        <Check className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-lg" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <Button 
                variant="outline" 
                onClick={handleClearFilters}
                className="px-6 py-2"
                disabled={!hasActiveFilters}
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
                  onClick={handleApplyFilters}
                  disabled={isApplying}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2"
                >
                  {isApplying ? (
                    <>
                      <Loader className="h-4 w-4 mr-2 animate-spin" />
                      Applying...
                    </>
                  ) : (
                    'Apply Filters'
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShopFilters;
