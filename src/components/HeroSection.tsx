import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Create Stunning eBooks & Reports in{" "}
              <span className="text-secondary">2 Minutes</span>
            </h1>
            
            <p className="text-xl text-white/90 mt-6 mb-8 leading-relaxed">
              Advanced ebook creator software that transforms your content into 
              beautifully designed ebooks ready for publishing. No design or 
              technical skills necessary.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="group">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 text-white/80 text-sm">
              ✓ No credit card required • ✓ 14-day free trial • ✓ Cancel anytime
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={heroMockup} 
                alt="eScribe Editor Interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};