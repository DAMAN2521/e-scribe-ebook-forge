import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft, BookOpen, Type, Minus, Plus } from "lucide-react";

// Use CDN worker for pdfjs
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

interface PageContent {
  pageNum: number;
  text: string;
}

const EBookReader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const file: File | null = location.state?.file ?? null;

  const [pages, setPages] = useState<PageContent[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("My eBook");
  const [fontSize, setFontSize] = useState(18);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setError("No PDF file provided.");
      setLoading(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const typedArray = new Uint8Array(reader.result as ArrayBuffer);
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

        const extracted: PageContent[] = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const text = content.items
            .map((item: any) => item.str)
            .join(" ")
            .replace(/\s+/g, " ")
            .trim();
          extracted.push({ pageNum: i, text });
        }

        setPages(extracted);
        // Try to extract title from first page
        if (extracted.length > 0 && extracted[0].text.length > 0) {
          const firstLine = extracted[0].text.split(/[.\n]/)[0].trim();
          if (firstLine.length > 3 && firstLine.length < 80) {
            setTitle(firstLine);
          }
        }
      } catch (e) {
        console.error("PDF parse error:", e);
        setError("Failed to parse PDF. Please try a different file.");
      } finally {
        setLoading(false);
      }
    };
    reader.readAsArrayBuffer(file);
  }, [file]);

  const totalPages = pages.length;
  const currentContent = pages[currentPage];
  const progress = totalPages > 0 ? ((currentPage + 1) / totalPages) * 100 : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Converting your PDF...</h2>
          <p className="text-muted-foreground">Extracting content and formatting your eBook</p>
        </div>
      </div>
    );
  }

  if (error || !file) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-foreground mb-4">{error || "No file provided"}</h2>
          <Button onClick={() => navigate("/")} variant="cta">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back & Upload
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-14">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <h1 className="text-sm font-semibold text-foreground truncate max-w-[50%]">
            {title}
          </h1>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setFontSize((s) => Math.max(12, s - 2))}>
              <Minus className="h-3 w-3" />
            </Button>
            <Type className="h-4 w-4 text-muted-foreground" />
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setFontSize((s) => Math.min(28, s + 2))}>
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="h-1 bg-muted">
        <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>

      {/* Book content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-card rounded-xl shadow-elegant border border-border p-8 sm:p-12 min-h-[60vh] relative">
          {/* Page number badge */}
          <div className="absolute top-4 right-4 bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">
            Page {currentPage + 1} of {totalPages}
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-foreground leading-relaxed"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}
          >
            {currentContent?.text ? (
              currentContent.text.split(/(?<=[.!?])\s+/).map((sentence, i) => (
                <p key={i} className="mb-4 text-foreground/90">
                  {sentence}
                </p>
              ))
            ) : (
              <p className="text-muted-foreground italic text-center py-12">
                This page has no extractable text content.
              </p>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <div className="flex gap-1">
            {Array.from({ length: Math.min(totalPages, 11) }, (_, i) => {
              let pageIdx: number;
              if (totalPages <= 11) {
                pageIdx = i;
              } else if (currentPage < 5) {
                pageIdx = i;
              } else if (currentPage > totalPages - 6) {
                pageIdx = totalPages - 11 + i;
              } else {
                pageIdx = currentPage - 5 + i;
              }
              return (
                <button
                  key={pageIdx}
                  onClick={() => setCurrentPage(pageIdx)}
                  className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                    pageIdx === currentPage
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {pageIdx + 1}
                </button>
              );
            })}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage >= totalPages - 1}
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default EBookReader;
