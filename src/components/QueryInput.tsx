import { useState, useRef } from "react";
import { Mic, Camera, Send, Upload, MicOff, MessageSquare, Brain, Image, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export function QueryInput() {
  const [query, setQuery] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [activeMode, setActiveMode] = useState<'text' | 'voice' | 'image' | 'query'>('text');
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

  const inputModes = [
    {
      id: 'text' as const,
      title: 'Text to Text',
      description: 'Type your farming question',
      icon: Type,
      color: 'text-primary'
    },
    {
      id: 'voice' as const,
      title: 'Voice to Text',
      description: 'Speak your question aloud',
      icon: Mic,
      color: 'text-accent'
    },
    {
      id: 'image' as const,
      title: 'Image to Text',
      description: 'Upload crop photos for analysis',
      icon: Image,
      color: 'text-secondary'
    },
    {
      id: 'query' as const,
      title: 'AI Query',
      description: 'Advanced AI-powered assistance',
      icon: Brain,
      color: 'text-primary-light'
    }
  ];

  return (
    <Card className="p-6 bg-card shadow-natural">
      <div className="space-y-6">
        {/* Input Mode Selection */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {inputModes.map((mode) => (
            <Button
              key={mode.id}
              variant={activeMode === mode.id ? "tech" : "outline"}
              className="h-auto p-4 flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
              onClick={() => setActiveMode(mode.id)}
            >
              <mode.icon className={`h-6 w-6 ${activeMode === mode.id ? 'text-primary-foreground' : mode.color}`} />
              <div className="text-center">
                <div className="font-semibold text-sm">{mode.title}</div>
                <div className="text-xs opacity-80">{mode.description}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Active Mode Interface */}
        <div className="space-y-4">
          {activeMode === 'text' && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Type className="h-5 w-5 text-primary" />
                Text to Text Query
              </h3>
              <Textarea
                placeholder="किसान भाई, अपना सवाल यहाँ लिखें... (Write your farming question here...)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="min-h-[120px] text-base resize-none"
              />
            </div>
          )}

          {activeMode === 'voice' && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Mic className="h-5 w-5 text-accent" />
                Voice to Text Input
              </h3>
              <div className="p-6 border-2 border-dashed border-accent/30 rounded-lg text-center bg-accent/5">
                <Button
                  variant={isRecording ? "destructive" : "accent"}
                  size="lg"
                  onClick={handleVoiceToggle}
                  className="mb-4 animate-glow-pulse"
                >
                  {isRecording ? <MicOff className="h-6 w-6 mr-2" /> : <Mic className="h-6 w-6 mr-2" />}
                  {isRecording ? "Stop Recording" : "Start Voice Input"}
                </Button>
                <p className="text-muted-foreground">
                  {isRecording ? "Listening... Speak your farming question" : "Click to start voice recording"}
                </p>
              </div>
            </div>
          )}

          {activeMode === 'image' && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Image className="h-5 w-5 text-secondary" />
                Image to Text Analysis
              </h3>
              <div className="p-6 border-2 border-dashed border-secondary/30 rounded-lg text-center bg-secondary/5">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => fileInputRef.current?.click()}
                  className="mb-4"
                >
                  <Upload className="h-6 w-6 mr-2" />
                  Upload Crop Image
                </Button>
                <p className="text-muted-foreground">
                  Upload photos of crops, pests, diseases, or soil for AI analysis
                </p>
              </div>
              {selectedImage && (
                <div className="flex items-center gap-2 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <Camera className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium text-secondary">
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
            </div>
          )}

          {activeMode === 'query' && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary-light" />
                AI-Powered Query Processing
              </h3>
              <div className="p-6 border-2 border-dashed border-primary/30 rounded-lg bg-gradient-tech/5">
                <Textarea
                  placeholder="Ask complex farming questions for advanced AI analysis..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-[100px] text-base resize-none mb-4 bg-background/50"
                />
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-primary/10 rounded-full">Weather Integration</span>
                  <span className="px-2 py-1 bg-accent/10 rounded-full">Predictive Analysis</span>
                  <span className="px-2 py-1 bg-secondary/10 rounded-full">Expert Knowledge</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          variant="hero"
          size="lg"
          onClick={handleSubmit}
          className="w-full text-lg py-6 animate-glow-pulse"
          disabled={!query.trim() && !selectedImage}
        >
          <Send className="h-5 w-5 mr-2" />
          Process with KisaRaksha AI
        </Button>

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