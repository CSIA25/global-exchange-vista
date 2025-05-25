
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PrePaymentBanner from '@/components/PrePaymentBanner';
import GlobalPresenceSection from '@/components/GlobalPresenceSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <PrePaymentBanner />
      <GlobalPresenceSection />
      <WhyChooseUsSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
