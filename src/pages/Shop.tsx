
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      id: '1',
      name: 'Floral Summer Dress',
      price: 89,
      originalPrice: 120,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      badge: 'Sale'
    },
    {
      id: '2',
      name: 'Casual Cotton Shirt',
      price: 45,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop'
    },
    {
      id: '3',
      name: 'Elegant Evening Gown',
      price: 199,
      originalPrice: 250,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop',
      badge: '20% Off'
    },
    {
      id: '4',
      name: 'Bohemian Maxi Dress',
      price: 129,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop'
    },
    {
      id: '5',
      name: 'Classic White Blouse',
      price: 65,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop'
    },
    {
      id: '6',
      name: 'Trendy Crop Top',
      price: 35,
      originalPrice: 45,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      badge: 'New'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop All</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete collection of carefully curated fashion pieces
          </p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>Sort by: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
