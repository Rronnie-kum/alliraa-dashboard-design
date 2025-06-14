
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import BestsellerSection from '@/components/BestsellerSection';
import NewArrivalsSection from '@/components/NewArrivalsSection';
import TrendingNowSection from '@/components/TrendingNowSection';
import TopSellingProducts from '@/components/TopSellingProducts';
import PromotionalBanners from '@/components/PromotionalBanners';
import ShopTheLookSection from '@/components/ShopTheLookSection';
import LifestyleBanner from '@/components/LifestyleBanner';
import CustomerReviews from '@/components/CustomerReviews';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <BestsellerSection />
      <NewArrivalsSection />
      <TrendingNowSection />
      <TopSellingProducts />
      <PromotionalBanners />
      <ShopTheLookSection />
      <LifestyleBanner />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Index;
