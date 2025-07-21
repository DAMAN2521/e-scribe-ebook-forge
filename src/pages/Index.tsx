import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CTASection />
      <BenefitsSection />
      <HowItWorksSection />
    </div>
  );
};

export default Index;
