import { Card, CardContent } from "@/components/ui/card";
import { Upload, Palette, FileDown } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Choose Source",
    subtitle: "Import Content or Start from Scratch",
    description: "Import from a URL, Word, Google Docs, or click New Draft to start from scratch. We'll load your content automatically, ignoring navigation, ads, and other clutter.",
    features: [
      "Import from a URL, Word, or Google Docs",
      "Or click New Draft to start from scratch"
    ]
  },
  {
    step: "02", 
    icon: Palette,
    title: "Template Library",
    subtitle: "Choose an eBook Template",
    description: "Get started immediately with over 100 project templates. You can completely customize it afterwards, changing images, fonts and styles.",
    features: [
      "Change the cover image to whatever you want",
      "Use single or two column layouts"
    ]
  },
  {
    step: "03",
    icon: FileDown,
    title: "Publish to PDF & ePub", 
    subtitle: "Customize and Export",
    description: "Fine-tune your design with our intuitive editor, then export your ebook in multiple formats ready for distribution and publishing.",
    features: [
      "Export to PDF, ePub, and more formats",
      "Professional quality output every time"
    ]
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Here's How it Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your content into professional ebooks in just three simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                {/* Step number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <h4 className="text-primary font-semibold mb-4">
                  {step.subtitle}
                </h4>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};