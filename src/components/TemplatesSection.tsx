
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";

const templateCategories = [
  {
    name: "Business & Marketing",
    count: 25,
    color: "from-blue-500 to-indigo-600",
    description: "Professional templates for business plans, marketing guides, and corporate reports"
  },
  {
    name: "Education & Training",
    count: 30,
    color: "from-green-500 to-teal-600",
    description: "Course materials, training manuals, and educational content layouts"
  },
  {
    name: "Health & Wellness",
    count: 20,
    color: "from-pink-500 to-rose-600",
    description: "Fitness guides, nutrition plans, and wellness eBooks with clean, modern designs"
  },
  {
    name: "Technology & How-To",
    count: 15,
    color: "from-purple-500 to-violet-600",
    description: "Technical documentation, tutorials, and step-by-step guides"
  },
  {
    name: "Creative & Lifestyle",
    count: 18,
    color: "from-orange-500 to-amber-600",
    description: "Art books, lifestyle guides, and creative portfolio layouts"
  },
  {
    name: "Finance & Investment",
    count: 12,
    color: "from-emerald-500 to-green-600",
    description: "Financial reports, investment guides, and business analysis templates"
  }
];

export const TemplatesSection = () => {
  return (
    <section id="templates" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">100+</span> Professional Templates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start with beautiful, professionally designed templates. 
            Every template is fully customizable to match your brand and style.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Single & Two-Column Layouts
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Mobile Responsive
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Print Ready
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templateCategories.map((category, index) => (
            <Card key={index} className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                {/* Gradient header */}
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative`}>
                  <div className="absolute top-2 right-2 bg-white/20 rounded-full px-3 py-1">
                    <span className="text-xs font-bold">{category.count} templates</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="text-white border-white/20 hover:bg-white/20 h-8">
                      <Eye className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Template Preview Grid */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Preview Sample Templates
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-full h-3 bg-gray-300 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-gray-300 rounded mb-4 mx-auto"></div>
                    <div className="grid grid-cols-2 gap-1 mb-2">
                      <div className="h-8 bg-gray-300 rounded"></div>
                      <div className="h-8 bg-gray-300 rounded"></div>
                    </div>
                    <div className="w-full h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="w-2/3 h-2 bg-gray-300 rounded mx-auto"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="secondary" className="text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    Use This
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Browse All Templates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
