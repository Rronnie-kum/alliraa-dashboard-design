
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Gift, Clock } from 'lucide-react';

interface KurtiOffersProps {
  onShopCollection: () => void;
  onViewOffers: () => void;
}

const KurtiOffers: React.FC<KurtiOffersProps> = ({ onShopCollection, onViewOffers }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4 mr-2" />
              Limited Time Offer
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Special Kurti <br />
              <span className="text-yellow-300">Collection</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get up to 40% off on our premium designer kurti collection. 
              Plus free shipping on all orders above $99!
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Gift className="h-5 w-5 mr-3 text-yellow-300" />
                <span>Free Gift Wrapping</span>
              </div>
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-3 text-yellow-300" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-3 text-yellow-300" />
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-yellow-300" />
                <span>24/7 Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onShopCollection}
                className="bg-white text-orange-800 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold transform hover:scale-105 transition-all"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                onClick={onViewOffers}
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
              >
                View All Offers
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Special Kurti Collection"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Quality</h3>
                <p className="text-white/90">Handcrafted with love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KurtiOffers;
