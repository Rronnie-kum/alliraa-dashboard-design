
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

interface KurtiFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: string;
  setPriceRange: (range: string) => void;
  onClose: () => void;
}

const KurtiFilters: React.FC<KurtiFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  onClose
}) => {
  const categories = [
    { id: 'all', name: 'All Kurtis' },
    { id: 'cotton', name: 'Cotton Kurtis' },
    { id: 'silk', name: 'Silk Kurtis' },
    { id: 'embroidered', name: 'Embroidered' },
    { id: 'printed', name: 'Printed' },
    { id: 'designer', name: 'Designer' }
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
    { name: 'Red', color: 'bg-red-500' },
    { name: 'Blue', color: 'bg-blue-500' },
    { name: 'Green', color: 'bg-green-500' },
    { name: 'Yellow', color: 'bg-yellow-500' },
    { name: 'Pink', color: 'bg-pink-500' },
    { name: 'Purple', color: 'bg-purple-500' },
    { name: 'Black', color: 'bg-black' },
    { name: 'White', color: 'bg-white border' }
  ];

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
  };

  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Filter Kurtis
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
                    <label key={category.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-amber-600 focus:ring-amber-500"
                      />
                      <span className="text-gray-700">{range.label}</span>
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
                      className="hover:bg-amber-50 hover:border-amber-300"
                    >
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
                      key={colorItem.name}
                      className={`w-8 h-8 rounded-full border-2 border-gray-300 hover:border-amber-500 transition-colors ${colorItem.color}`}
                      title={colorItem.name}
                    />
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
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2"
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

export default KurtiFilters;
