
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Shield } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Create Your First
            <br />
            <span className="text-secondary">Professional eBook?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of creators who've already transformed their content 
            into beautiful, professional eBooks that drive results.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/80">
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-secondary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-secondary" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-secondary" />
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto group bg-white text-primary hover:bg-white/90">
              Start Creating Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white/20 bg-white/10 text-white hover:bg-white/20">
              View Live Demo
            </Button>
          </div>

          <p className="text-white/70 text-sm">
            🚀 <strong>Special Launch Offer:</strong> Get 50% off your first month. Limited time only!
          </p>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white/60">
              <div>
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50,000+</div>
                <div className="text-sm">eBooks Created</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm">Templates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
