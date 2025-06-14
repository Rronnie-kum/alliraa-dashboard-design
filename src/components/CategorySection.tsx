
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const categories = [
  { 
    name: 'SHORTS', 
    image: 'https://images.unsplash.com/photo-1594736797933-d0e3e8aa8c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=shorts',
    count: '85+',
    description: 'Comfortable & Trendy',
    gradient: 'from-pink-500 to-rose-500'
  },
  { 
    name: 'COTTON KURTI', 
    image: 'https://images.unsplash.com/photo-1506629905587-4b47d3cb0ee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=cotton',
    count: '120+',
    description: 'Breathable & Soft',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    name: 'SILK KURTI', 
    image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=silk',
    count: '95+',
    description: 'Luxurious & Elegant',
    gradient: 'from-amber-500 to-orange-500'
  },
  { 
    name: 'EMBROIDERED', 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=embroidered',
    count: '110+',
    description: 'Artistic & Detailed',
    gradient: 'from-emerald-500 to-teal-500'
  },
  { 
    name: 'PRINTED KURTI', 
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=printed',
    count: '150+',
    description: 'Vibrant & Stylish',
    gradient: 'from-purple-500 to-indigo-500'
  },
  { 
    name: 'DESIGNER KURTI', 
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', 
    route: '/kurti?type=designer',
    count: '75+',
    description: 'Premium & Exclusive',
    gradient: 'from-rose-500 to-pink-500'
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-orange-200/30 to-yellow-200/30 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-amber-800 mb-6 shadow-lg">
            <Sparkles className="h-4 w-4 mr-2 text-amber-600" />
            Curated Collections
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Category</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find your perfect style from our diverse collection of handpicked, premium quality kurtis
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.name} 
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              onClick={() => handleCategoryClick(category.route)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-amber-500 mr-1" />
                        <span className="text-sm font-medium text-gray-800">{category.count} items</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-amber-600">
                      {category.count} styles available
                    </span>
                    <div className="flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors">
                      <span className="text-sm mr-1">Explore</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't decide? 
            </h3>
            <p className="text-gray-600 mb-6">
              Browse our complete collection and discover your perfect kurti
            </p>
            <button 
              onClick={() => navigate('/kurti')}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Categories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
