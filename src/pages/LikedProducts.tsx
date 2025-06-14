
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import LikedProductsHero from '@/components/liked-products/LikedProductsHero';
import LikedProductsStats from '@/components/liked-products/LikedProductsStats';
import LikedProductsControls from '@/components/liked-products/LikedProductsControls';
import LikedProductsContent from '@/components/liked-products/LikedProductsContent';
import LikedProductsEmpty from '@/components/liked-products/LikedProductsEmpty';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';

const LikedProducts = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { toast } = useToast();

  const handleClearAll = () => {
    wishlistItems.forEach(product => removeFromWishlist(product.id));
    toast({
      title: "Wishlist Cleared",
      description: "All items have been removed from your wishlist"
    });
  };

  const handleAddAllToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${wishlistItems.length} items added to cart`
    });
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <LikedProductsHero />

      <LikedProductsStats wishlistItems={wishlistItems} />

      <LikedProductsControls 
        wishlistItemsCount={wishlistItems.length}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onAddAllToCart={handleAddAllToCart}
        onClearAll={handleClearAll}
      />

      {wishlistItems.length > 0 ? (
        <LikedProductsContent 
          wishlistItems={wishlistItems}
          viewMode={viewMode}
        />
      ) : (
        <LikedProductsEmpty />
      )}

      {/* Recommendations Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              You Might Also Like
            </h2>
            <p className="text-amber-700">
              Similar styles based on your preferences
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: '7',
                name: 'Casual Cotton Kurti',
                price: 55,
                image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop',
                rating: 4.5
              },
              {
                id: '8',
                name: 'Elegant Evening Kurti',
                price: 85,
                image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop',
                rating: 4.6
              },
              {
                id: '9',
                name: 'Printed Summer Kurti',
                price: 65,
                image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&v=3',
                rating: 4.4
              },
              {
                id: '10',
                name: 'Traditional Block Print',
                price: 75,
                image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&v=2',
                rating: 4.7
              }
            ].map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LikedProducts;
