import { useState } from 'react';
import Navigation from '@/components/Navigation';
import FloatingMenu from '@/components/FloatingMenu';
import FloatingDownloadCTA from '@/components/FloatingDownloadCTA';
import HeroSection from '@/components/HeroSection';
import WhyBossWallah from '@/components/WhyBossWallah';
import FeaturesSection from '@/components/FeaturesSection';
import GlobalSolutionsSection from '@/components/GlobalSolutionsSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onMenuToggle={() => setIsMenuOpen(true)} />
      <FloatingMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <FloatingDownloadCTA />
      
      <main>
        <HeroSection />
        <WhyBossWallah />
        <FeaturesSection />
        <GlobalSolutionsSection />
        <SuccessStoriesSection />
        <FAQSection />
        <BlogSection />
        <FinalCTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;