
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const newArrivals = [
  {
    id: '101',
    name: 'Floral Summer Dress',
    price: 180,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '102',
    name: 'Vintage Denim Jacket',
    price: 160,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '103',
    name: 'Bohemian Maxi Skirt',
    price: 140,
    image: 'https://images.unsplash.com/photo-1566479179817-34b8ac7c6cfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '104',
    name: 'Casual Cotton Blouse',
    price: 90,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  },
  {
    id: '105',
    name: 'Elegant Evening Gown',
    price: 320,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    rating: 5,
    badge: 'NEW'
  }
];

const NewArrivalsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Sparkles className="h-4 w-4 mr-2" />
            Fresh Arrivals
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            New <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Arrivals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest fashion trends that just landed in our collection
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {newArrivals.map((product, index) => (
            <div 
              key={product.id} 
              className="group transform transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <ProductCard {...product} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/shop?category=new-arrivals')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All New Arrivals
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-bounce"></div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
