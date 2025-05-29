
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import BestsellerSection from '@/components/BestsellerSection';
import PromotionalBanners from '@/components/PromotionalBanners';
import LifestyleBanner from '@/components/LifestyleBanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategorySection />
      <BestsellerSection />
      <PromotionalBanners />
      <LifestyleBanner />
      <Footer />
    </div>
  );
};

export default Index;
