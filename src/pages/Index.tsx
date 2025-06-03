
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import BestsellerSection from '@/components/BestsellerSection';
import TopSellingProducts from '@/components/TopSellingProducts';
import PromotionalBanners from '@/components/PromotionalBanners';
import ShopTheLookSection from '@/components/ShopTheLookSection';
import LifestyleBanner from '@/components/LifestyleBanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <BestsellerSection />
      <TopSellingProducts />
      <PromotionalBanners />
      <ShopTheLookSection />
      <LifestyleBanner />
      <Footer />
    </div>
  );
};

export default Index;
