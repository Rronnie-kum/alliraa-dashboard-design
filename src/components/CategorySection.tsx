
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

const categories = [
  { 
    name: 'All Kurtis', 
    count: '500+ items',
    image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=all',
    gradient: 'from-rose-400 via-pink-500 to-purple-600',
    bgPattern: 'bg-gradient-to-br',
    description: 'Explore our complete collection'
  },
  { 
    name: 'Cotton Kurtis', 
    count: '120+ items',
    image: 'https://images.unsplash.com/photo-1506629905587-4b47d3cb0ee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=cotton',
    gradient: 'from-blue-400 via-cyan-500 to-teal-600',
    bgPattern: 'bg-gradient-to-br',
    description: 'Comfortable everyday wear'
  },
  { 
    name: 'Silk Kurtis', 
    count: '85+ items',
    image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=silk',
    gradient: 'from-amber-400 via-orange-500 to-red-600',
    bgPattern: 'bg-gradient-to-br',
    description: 'Luxury and elegance'
  },
  { 
    name: 'Embroidered', 
    count: '95+ items',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=embroidered',
    gradient: 'from-emerald-400 via-green-500 to-teal-600',
    bgPattern: 'bg-gradient-to-br',
    description: 'Intricate handwork designs'
  },
  { 
    name: 'Printed', 
    count: '150+ items',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=printed',
    gradient: 'from-violet-400 via-purple-500 to-indigo-600',
    bgPattern: 'bg-gradient-to-br',
    description: 'Beautiful patterns & motifs'
  },
  { 
    name: 'Designer', 
    count: '60+ items',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=designer',
    gradient: 'from-fuchsia-400 via-pink-500 to-rose-600',
    bgPattern: 'bg-gradient-to-br',
    description: 'Premium designer pieces'
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-3 rounded-full text-orange-800 font-medium mb-6">
            <Sparkles className="h-5 w-5 mr-2 text-orange-600" />
            Curated Collections
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-pink-800 bg-clip-text text-transparent mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover your perfect kurti from our carefully curated collections, 
            each designed to celebrate your unique style and grace
          </p>
        </div>

        {/* Enhanced Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-2xl"
              onClick={() => handleCategoryClick(category.route)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${category.bgPattern} ${category.gradient} opacity-90`}></div>
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-24 h-24 border border-white/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-between text-white">
                <div>
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Heart className="h-3 w-3 mr-1" />
                    {category.count}
                  </div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-lg mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                    {category.description}
                  </p>
                </div>

                {/* Enhanced CTA */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center bg-white/25 backdrop-blur-md px-6 py-3 rounded-full group-hover:bg-white/35 transition-all duration-300 border border-white/20">
                    <span className="font-semibold text-sm">Explore Collection</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <ArrowRight className="h-5 w-5 transform group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-white/80 to-orange-50/80 backdrop-blur-sm rounded-3xl p-12 border border-orange-100/50 shadow-xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find your perfect style?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Browse our complete collection of over 1000+ premium kurtis from top designers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/shop')}
                className="group bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  Browse All Products
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
