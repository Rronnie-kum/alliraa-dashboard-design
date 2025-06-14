
import React from 'react';
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  count: string;
  color: string;
}

interface KurtiCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const KurtiCategories: React.FC<KurtiCategoriesProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            Browse Categories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Category</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect style from our diverse collection of premium kurtis
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-2xl p-8 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ${category.color} ${selectedCategory === category.id ? 'ring-4 ring-white shadow-2xl scale-105' : ''}`}
              onClick={() => onCategorySelect(category.id)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/90 text-lg">{category.count} items</p>
                  </div>
                  {selectedCategory === category.id && (
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex items-center text-sm font-medium">
                  {selectedCategory === category.id ? (
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      ✓ Selected
                    </span>
                  ) : (
                    <span className="group-hover:translate-x-2 transition-transform">
                      Explore Collection →
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => onCategorySelect('all')}
            className={`px-8 py-4 text-lg rounded-full transition-all ${
              selectedCategory === 'all' 
                ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                : 'bg-gray-100 hover:bg-amber-50 text-gray-900 hover:text-amber-800'
            }`}
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KurtiCategories;
