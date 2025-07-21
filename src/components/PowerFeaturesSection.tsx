
import { Card, CardContent } from "@/components/ui/card";
import { 
  MousePointer, 
  ImageIcon, 
  Palette, 
  Search, 
  ListOrdered, 
  PenTool,
  Link,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: MousePointer,
    title: "Drag-and-Drop Editor",
    description: "Full control to move, resize, and restyle anything with our intuitive visual editor",
    highlight: "Visual Control"
  },
  {
    icon: ImageIcon,
    title: "Built-in Image Editor",
    description: "Crop, filter, and adjust colors without leaving the platform",
    highlight: "Image Magic"
  },
  {
    icon: Palette,
    title: "One-Click Global Styling",
    description: "Change fonts and colors across your entire book instantly",
    highlight: "Brand Consistency"
  },
  {
    icon: Search,
    title: "Free Image Library",
    description: "Search millions of copyright-free photos from Unsplash & Pixabay",
    highlight: "Unlimited Assets"
  },
  {
    icon: ListOrdered,
    title: "Auto TOC & Page Numbers",
    description: "Generate clickable Table of Contents and custom page numbers in 1 click",
    highlight: "Professional Layout"
  },
  {
    icon: PenTool,
    title: "Distraction-Free Writing",
    description: "Use the Project Draft Editor for fresh content or to paste in from notes",
    highlight: "Focus Mode"
  },
  {
    icon: Link,
    title: "Clickable Links & Headers",
    description: "All your internal links and headers are interactive and beautifully styled",
    highlight: "Interactive Design"
  },
  {
    icon: Sparkles,
    title: "Smart Content Import",
    description: "Automatically clean imported content by removing ads, navigation, and clutter",
    highlight: "Clean Import"
  }
];

export const PowerFeaturesSection = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Powerful Features Built for
            <span className="text-primary"> Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, design, and publish professional eBooks 
            without any technical skills or expensive software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-6 h-full">
                <div className="flex flex-col h-full">
                  {/* Icon and highlight */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-bold text-foreground mb-3 text-lg">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            And much more... Try it yourself!
          </p>
        </div>
      </div>
    </section>
  );
};
