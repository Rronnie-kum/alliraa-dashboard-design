
import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { 
    name: 'All Kurtis', 
    count: '500+ items',
    image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=all',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  { 
    name: 'Cotton Kurtis', 
    count: '120+ items',
    image: 'https://images.unsplash.com/photo-1506629905587-4b47d3cb0ee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=cotton',
    gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  { 
    name: 'Silk Kurtis', 
    count: '85+ items',
    image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=silk',
    gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  },
  { 
    name: 'Embroidered', 
    count: '95+ items',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=embroidered',
    gradient: 'bg-gradient-to-br from-green-500 to-teal-500'
  },
  { 
    name: 'Printed', 
    count: '150+ items',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=printed',
    gradient: 'bg-gradient-to-br from-red-500 to-pink-500'
  },
  { 
    name: 'Designer', 
    count: '60+ items',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=designer',
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-500'
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect style from our diverse collection
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`group relative overflow-hidden rounded-2xl p-8 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl ${category.gradient}`}
              onClick={() => handleCategoryClick(category.route)}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/90 mb-6">{category.count}</p>
                
                {/* Call to Action */}
                <div className="inline-flex items-center text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full group-hover:bg-white/30 transition-colors">
                  Explore Collection
                  <svg 
                    className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <button 
            onClick={() => navigate('/shop')}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
