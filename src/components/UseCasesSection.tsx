
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Award, 
  RotateCcw, 
  Briefcase 
} from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Drive More Traffic",
    description: "Share on LinkedIn, SlideShare, and blogs to bring readers back to your website",
    benefit: "Increase website visits by 300%",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: DollarSign,
    title: "Sell eBooks Online",
    description: "Turn your expertise into a profitable digital product for your store",
    benefit: "Generate passive income",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Generate More Leads",
    description: "Offer your eBook as a lead magnet and grow your email list rapidly",
    benefit: "Build your audience",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Award,
    title: "Increase Brand Visibility",
    description: "Establish your authority in your niche with professional design",
    benefit: "Become a thought leader",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: RotateCcw,
    title: "Repurpose Old Content",
    description: "Transform blog posts, articles, and notes into fresh downloadable eBooks",
    benefit: "Maximize content ROI",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "Create for Clients",
    description: "Use your skills to sell eBook creation services to other businesses",
    benefit: "Start a new revenue stream",
    color: "from-indigo-500 to-blue-500"
  }
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What You Can Do with 
            <span className="text-primary"> eScribe eBooks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn your knowledge into powerful business results. Here's how successful 
            creators are using eBooks to grow their business and reach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${useCase.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <useCase.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{useCase.title}</h3>
                      <p className="text-white/80 text-sm font-medium">{useCase.benefit}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-2">
            Ready to unlock these opportunities?
          </p>
          <p className="text-sm text-muted-foreground">
            Join thousands of creators already growing their business with eBooks
          </p>
        </div>
      </div>
    </section>
  );
};
