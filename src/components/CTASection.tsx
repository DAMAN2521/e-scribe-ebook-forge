import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="bg-gradient-subtle py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Start growing with{" "}
          <span className="text-primary">ESCRIBE</span> today
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          For more Sales, Leads, Customer Engagement. Become an Author, Create Information Products.
        </p>
        
        <p className="text-muted-foreground mb-12">
          All done quickly and easily. No Design or Technical skills necessary.
        </p>

        <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};