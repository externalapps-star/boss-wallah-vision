import Navigation from '@/components/Navigation';
import FloatingMenu from '@/components/FloatingMenu';
import FloatingDownloadCTA from '@/components/FloatingDownloadCTA';
import HeroSection from '@/components/HeroSection';
import WhyBossWallah from '@/components/WhyBossWallah';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingMenu />
      <FloatingDownloadCTA />
      
      <main>
        <HeroSection />
        <WhyBossWallah />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
        <FinalCTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;