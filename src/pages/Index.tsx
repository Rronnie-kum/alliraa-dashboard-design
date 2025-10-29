
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import BestsellerSection from '@/components/BestsellerSection';
import NewArrivalsSection from '@/components/NewArrivalsSection';
import TrendingNowSection from '@/components/TrendingNowSection';
import TopSellingProducts from '@/components/TopSellingProducts';
import ShopTheLookSection from '@/components/ShopTheLookSection';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="space-y-8">
        <CategorySection />
        <BestsellerSection />
        <NewArrivalsSection />
        <TrendingNowSection />
        <TopSellingProducts />
        <ShopTheLookSection />
        <CustomerReviews />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
