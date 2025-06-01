
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Product = () => {
  const relatedProducts = [
    {
      id: '1',
      name: 'Similar Style Dress',
      price: 95,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop'
    },
    {
      id: '2',
      name: 'Matching Accessories',
      price: 35,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop'
    },
    {
      id: '3',
      name: 'Complementary Top',
      price: 55,
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop'
    },
    {
      id: '4',
      name: 'Coordinated Set',
      price: 125,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Product Detail Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop"
                  alt="Featured Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={`https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=150&h=150&fit=crop&v=${i}`}
                      alt={`Product view ${i}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Premium Floral Summer Dress
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(128 reviews)</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-900">$89.00</span>
                  <span className="text-xl text-gray-500 line-through">$120.00</span>
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                    26% OFF
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  This beautiful floral summer dress combines comfort and style perfectly. 
                  Made from premium cotton blend fabric, it features a flattering A-line silhouette 
                  and delicate floral prints that make it perfect for any summer occasion.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
                <div className="flex gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className="border border-gray-300 px-4 py-2 rounded-md hover:border-amber-800 hover:text-amber-800 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex gap-2">
                  {['bg-pink-300', 'bg-blue-300', 'bg-green-300', 'bg-purple-300'].map((color, i) => (
                    <button
                      key={i}
                      className={`w-8 h-8 rounded-full ${color} border-2 border-gray-300 hover:border-amber-800`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button className="flex-1 bg-amber-800 hover:bg-amber-900 text-white">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
