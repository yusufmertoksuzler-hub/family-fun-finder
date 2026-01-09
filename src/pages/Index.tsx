import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogHighlightsSection from "@/components/home/BlogHighlightsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Çocuklarınız İçin Harika Aktiviteler Keşfedin"
        description="Çocuklarınız için en iyi aktiviteleri keşfedin ve rezervasyon yapın. Spordan sanata, müzikten STEM'e - çocukların öğrenmesine, büyümesine ve eğlenmesine yardımcı olan yaşa uygun deneyimler bulun."
        canonical="/"
      />
      <HeroSection />
      <CategoriesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogHighlightsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
