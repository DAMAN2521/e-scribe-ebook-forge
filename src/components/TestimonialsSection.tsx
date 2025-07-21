
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Digital Marketing Consultant",
    company: "Growth Solutions Inc.",
    content: "eScribe transformed how I create lead magnets. I went from spending 2 weeks per eBook to just 2 hours. My conversion rates increased by 40%!",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Course Creator",
    company: "TechEdu Online",
    content: "The template library is incredible. I've created 12 course materials that look professionally designed. Students constantly compliment the quality.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emma Rodriguez",
    role: "Fitness Coach",
    company: "FitLife Coaching",
    content: "Creating workout guides used to take forever. Now I can publish a new nutrition or workout eBook every week. My clients love the professional look!",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Park",
    role: "Business Consultant",
    company: "Strategic Partners LLC",
    content: "I've created over 20 business reports for clients using eScribe. The drag-and-drop editor makes customization so easy. Clients are always impressed.",
    rating: 5,
    avatar: "DP"
  },
  {
    name: "Lisa Thompson",
    role: "Content Creator",
    company: "Creative Content Co.",
    content: "The one-click global styling feature is a game-changer. I can rebrand an entire eBook to match any client's style in minutes, not hours.",
    rating: 5,
    avatar: "LT"
  },
  {
    name: "James Wilson",
    role: "Real Estate Agent",
    company: "Premium Properties",
    content: "I use eScribe to create buyer and seller guides. The professional templates help me stand out from other agents. I've closed 30% more deals this year!",
    rating: 5,
    avatar: "JW"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">10,000+</span> Creators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our community of creators, marketers, and entrepreneurs 
            are saying about their eScribe experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold mr-1">4.9/5</span>
              <span>Average Rating</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-1">10,000+</span>
              <span>Happy Users</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-1">50,000+</span>
              <span>eBooks Created</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
