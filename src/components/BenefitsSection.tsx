import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Users, Zap, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Save $300-$1000 on outsourcing costs",
    description: "No need to hire expensive designers or agencies"
  },
  {
    icon: Clock,
    title: "Publish in Minutes",
    description: "Save hours of writing and designing from scratch"
  },
  {
    icon: Users,
    title: "No wasting time searching for designers",
    description: "Everything you need built right into the platform"
  },
  {
    icon: Zap,
    title: "Save $300 on expensive Design tools",
    description: "No need for Photoshop, InDesign, or other costly software"
  },
  {
    icon: Shield,
    title: "Save up to $500 for design ebook templates",
    description: "Access to 100+ professional templates included"
  },
  {
    icon: Sparkles,
    title: "Avoid technology overwhelm",
    description: "Easy to use & fun online tool anyone can master"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Save Time and Money
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop wasting resources on expensive tools and lengthy processes. 
            Get professional results in minutes, not hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};