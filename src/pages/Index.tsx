
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PowerFeaturesSection } from "@/components/PowerFeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { TemplatesSection } from "@/components/TemplatesSection";
import { CTASection } from "@/components/CTASection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CTASection />
      <HowItWorksSection />
      <PowerFeaturesSection />
      <UseCasesSection />
      <TemplatesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
