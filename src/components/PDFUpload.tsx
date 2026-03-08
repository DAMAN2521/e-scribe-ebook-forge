import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, X, Check, AlertCircle, Loader2 } from "lucide-react";

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  file: File;
}

export const PDFUpload = () => {
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(1) + " MB";
  };

  const validateFile = (file: File): string | null => {
    if (file.type !== "application/pdf") return "Only PDF files are accepted.";
    if (file.size > 20 * 1024 * 1024) return "File size must be under 20MB.";
    return null;
  };

  const simulateUpload = useCallback((file: File) => {
    setUploading(true);
    setUploadProgress(0);
    setError(null);

    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setUploading(false);
      return;
    }

    setUploadedFile({ name: file.name, size: file.size, type: file.type, file });

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25 + 10;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploading(false);
      }
      setUploadProgress(Math.min(progress, 100));
    }, 200);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) simulateUpload(file);
  }, [simulateUpload]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) simulateUpload(file);
  };

  const handleProcess = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setProcessed(true);
    }, 2000);
  };

  const handleReset = () => {
    setUploadedFile(null);
    setUploadProgress(0);
    setUploading(false);
    setProcessing(false);
    setProcessed(false);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <Card className="border-2 border-dashed border-primary/30 bg-card/50 backdrop-blur-sm shadow-elegant">
      <CardContent className="p-6">
        {!uploadedFile && !error ? (
          <div
            className={`flex flex-col items-center justify-center py-8 rounded-lg transition-colors cursor-pointer ${
              dragOver ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
            }`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Drag & Drop your PDF here
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              or click to browse • Max 20MB
            </p>
            <Button variant="cta" size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Choose PDF File
            </Button>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={handleFileSelect}
            />
          </div>
        ) : error ? (
          <div className="flex flex-col items-center py-8">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <p className="text-destructive font-medium mb-4">{error}</p>
            <Button variant="outline" size="sm" onClick={handleReset}>
              Try Again
            </Button>
          </div>
        ) : (
          <div className="py-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{uploadedFile?.name}</p>
                <p className="text-sm text-muted-foreground">{uploadedFile && formatSize(uploadedFile.size)}</p>
              </div>
              {!processing && !processed && (
                <Button variant="ghost" size="icon" onClick={handleReset} className="flex-shrink-0">
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {uploading && (
              <div className="mb-4">
                <Progress value={uploadProgress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Uploading... {Math.round(uploadProgress)}%</p>
              </div>
            )}

            {!uploading && !processed && (
              <Button
                variant="cta"
                className="w-full"
                onClick={handleProcess}
                disabled={processing}
              >
                {processing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing PDF...
                  </>
                ) : (
                  <>
                    <FileText className="mr-2 h-4 w-4" />
                    Convert to eBook
                  </>
                )}
              </Button>
            )}

            {processed && (
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-secondary" />
                </div>
                <p className="font-semibold text-foreground mb-1">PDF Ready!</p>
                <p className="text-sm text-muted-foreground mb-4">Your eBook is ready for customization.</p>
                <div className="flex gap-2">
                  <Button variant="cta" className="flex-1">Choose Template</Button>
                  <Button variant="outline" className="flex-1" onClick={handleReset}>Upload Another</Button>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
