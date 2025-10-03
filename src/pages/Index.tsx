import Navigation from '@/components/Navigation';
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
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
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