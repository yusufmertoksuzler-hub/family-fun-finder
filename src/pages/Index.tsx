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
        title="Find Amazing Activities for Kids"
        description="Discover and book the best activities for your children. From sports to arts, music to STEM - find age-appropriate experiences that help kids learn, grow, and have fun."
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
