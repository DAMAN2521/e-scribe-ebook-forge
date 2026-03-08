import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Upload, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const templateCategories = [
  { name: "Business & Marketing", count: 45, color: "from-blue-500 to-indigo-600", description: "Professional templates for business plans, marketing guides, and corporate reports" },
  { name: "Education & Training", count: 52, color: "from-green-500 to-teal-600", description: "Course materials, training manuals, and educational content layouts" },
  { name: "Health & Wellness", count: 38, color: "from-pink-500 to-rose-600", description: "Fitness guides, nutrition plans, and wellness eBooks with clean, modern designs" },
  { name: "Technology & How-To", count: 31, color: "from-purple-500 to-violet-600", description: "Technical documentation, tutorials, and step-by-step guides" },
  { name: "Creative & Lifestyle", count: 28, color: "from-orange-500 to-amber-600", description: "Art books, lifestyle guides, and creative portfolio layouts" },
  { name: "Finance & Investment", count: 22, color: "from-emerald-500 to-green-600", description: "Financial reports, investment guides, and business analysis templates" },
  { name: "Recipe & Cookbook", count: 35, color: "from-red-500 to-orange-600", description: "Beautiful recipe books, meal planners, and culinary guides" },
  { name: "Travel & Adventure", count: 28, color: "from-sky-500 to-blue-600", description: "Travel itineraries, adventure guides, and destination eBooks" },
  { name: "Children's & Educational", count: 42, color: "from-yellow-500 to-amber-500", description: "Colorful children's books, workbooks, and educational materials" },
  { name: "Academic & Research", count: 31, color: "from-slate-500 to-gray-600", description: "Academic papers, thesis layouts, and research publication formats" },
  { name: "Workbooks & Planners", count: 25, color: "from-teal-500 to-cyan-600", description: "Interactive workbooks, daily planners, and productivity templates" },
  { name: "Photography & Art", count: 22, color: "from-fuchsia-500 to-pink-600", description: "Stunning photo books, art portfolios, and visual showcase layouts" },
  { name: "Self-Help & Motivation", count: 38, color: "from-violet-500 to-purple-600", description: "Inspiring self-help guides, motivational content, and personal growth books" },
  { name: "Technical & User Manuals", count: 19, color: "from-cyan-500 to-teal-600", description: "Product manuals, API docs, and technical reference guides" },
  { name: "Legal & Compliance", count: 16, color: "from-gray-500 to-slate-600", description: "Legal documents, compliance guides, and regulatory handbooks" },
  { name: "Non-Fiction & Biography", count: 33, color: "from-amber-500 to-yellow-600", description: "Biographical layouts, memoir templates, and non-fiction book designs" },
];

const totalTemplates = templateCategories.reduce((sum, c) => sum + c.count, 0);

export const TemplatesSection = () => {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = templateCategories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="templates" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">{totalTemplates}+</span> Professional Templates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start with beautiful, professionally designed templates — fully customizable to match your brand.
          </p>

          <div className="max-w-md mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Upload Your Own card */}
          <Card className="group border-2 border-dashed border-primary/30 hover:border-primary/60 shadow-none hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted/50 p-6 flex flex-col items-center justify-center h-full min-h-[200px]">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Upload className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-1">Upload Your Own PDF</h3>
                <p className="text-muted-foreground text-sm text-center">
                  Import your existing PDF and convert it into a stunning eBook.
                </p>
              </div>
            </CardContent>
          </Card>

          {displayed.map((category, index) => (
            <Card key={index} className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white relative`}>
                  <div className="absolute top-2 right-2 bg-white/20 rounded-full px-3 py-1">
                    <span className="text-xs font-bold">{category.count} templates</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                  <Button size="sm" variant="ghost" className="text-white border-white/20 hover:bg-white/20 h-8">
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : `View All ${filtered.length} Categories`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
