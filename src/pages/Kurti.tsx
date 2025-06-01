
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const Kurti = () => {
  const kurtiProducts = [
    {
      id: '1',
      name: 'Traditional Embroidered Kurti',
      price: 75,
      originalPrice: 95,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      badge: 'Bestseller'
    },
    {
      id: '2',
      name: 'Cotton Printed Kurti',
      price: 45,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop'
    },
    {
      id: '3',
      name: 'Designer Silk Kurti',
      price: 125,
      originalPrice: 150,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      badge: 'Premium'
    },
    {
      id: '4',
      name: 'Casual Daily Wear Kurti',
      price: 35,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop'
    },
    {
      id: '5',
      name: 'Festive Occasion Kurti',
      price: 95,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop',
      badge: 'Special'
    },
    {
      id: '6',
      name: 'Modern Fusion Kurti',
      price: 65,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&v=2'
    }
  ];

  const categories = [
    { name: 'Cotton Kurtis', count: '120+ items' },
    { name: 'Silk Kurtis', count: '85+ items' },
    { name: 'Embroidered', count: '95+ items' },
    { name: 'Printed', count: '150+ items' },
    { name: 'Plain', count: '75+ items' },
    { name: 'Designer', count: '60+ items' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beautiful Kurti Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our exquisite range of traditional and modern kurtis, 
            crafted with premium fabrics and intricate designs for every occasion
          </p>
          <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 text-lg">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-amber-50 hover:shadow-md transition-all cursor-pointer"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Kurtis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Kurtis
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked collection of our most popular designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {kurtiProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3">
              View All Kurtis
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Special Kurti Collection</h2>
          <p className="text-lg mb-8 opacity-90">
            Get up to 40% off on our premium designer kurti collection
          </p>
          <Button variant="outline" className="bg-white text-amber-800 hover:bg-gray-100 border-white">
            Shop Collection
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kurti;
