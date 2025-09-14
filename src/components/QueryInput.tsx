import { useState, useRef } from "react";
import { Mic, Camera, Send, Upload, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export function QueryInput() {
  const [query, setQuery] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast.success("Voice recording started");
    } else {
      toast.info("Voice recording stopped");
    }
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      toast.success("Image selected successfully");
    }
  };

  const handleSubmit = () => {
    if (!query.trim() && !selectedImage) {
      toast.error("Please enter a question or select an image");
      return;
    }
    
    toast.success("Query submitted! Processing your request...");
    setQuery("");
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="p-6 bg-card shadow-natural">
      <div className="space-y-4">
        <div className="relative">
          <Textarea
            placeholder="किसान भाई, अपना सवाल यहाँ लिखें... (Write your farming question here...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[120px] pr-12 text-base resize-none"
          />
        </div>

        {selectedImage && (
          <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
            <Camera className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Image selected: {selectedImage.name}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedImage(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
            >
              Remove
            </Button>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Button
            variant={isRecording ? "destructive" : "outline"}
            size="lg"
            onClick={handleVoiceToggle}
            className="flex-1 sm:flex-none"
          >
            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            <span>{isRecording ? "Stop Recording" : "Voice Input"}</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => fileInputRef.current?.click()}
            className="flex-1 sm:flex-none"
          >
            <Upload className="h-5 w-5" />
            <span>Upload Image</span>
          </Button>

          <Button
            variant="hero"
            size="lg"
            onClick={handleSubmit}
            className="flex-1 sm:flex-auto"
            disabled={!query.trim() && !selectedImage}
          >
            <Send className="h-5 w-5" />
            <span>Ask Question</span>
          </Button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
      </div>
    </Card>
  );
}