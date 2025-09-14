import { Sprout, MessageSquare, Camera, Mic, Globe, Cloud, Smartphone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { QueryInput } from "@/components/QueryInput";
import { WeatherWidget } from "@/components/WeatherWidget";
import { FeatureCard } from "@/components/FeatureCard";
import heroImage from "@/assets/hero-farming.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-hero">
              <Sprout className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">KisanMitra AI</h1>
              <p className="text-sm text-muted-foreground">Your Smart Farming Assistant</p>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              खेती में नई तकनीक
              <br />
              <span className="text-accent-light">AI के साथ</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Ask questions in your language • Voice, text, or image input • Instant expert advice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-lg px-8 py-6">
                Start Asking Questions
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <WeatherWidget />
        </div>
      </section>

      {/* Query Interface */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              पूछें अपना सवाल
            </h3>
            <p className="text-lg text-muted-foreground">
              Voice, text, or image - ask in any way that's comfortable for you
            </p>
          </div>
          <QueryInput />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-earth">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              How KisanMitra Helps You
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology made simple for farmers across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={MessageSquare}
              title="Text Queries"
              description="Type your questions in Hindi, English, or any regional language"
              colorClass="text-primary"
            />
            <FeatureCard
              icon={Mic}
              title="Voice Input"
              description="Speak naturally in your local language - our AI understands"
              colorClass="text-accent"
            />
            <FeatureCard
              icon={Camera}
              title="Image Analysis"
              description="Take photos of crops, pests, or diseases for instant identification"
              colorClass="text-secondary"
            />
            <FeatureCard
              icon={Globe}
              title="Multi-Platform"
              description="Access via app, WhatsApp, SMS, or phone calls"
              colorClass="text-primary-light"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Get Expert Advice Instantly
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Weather Integration</h4>
                    <p className="text-muted-foreground">Get localized weather data and farming recommendations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Smartphone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mobile First</h4>
                    <p className="text-muted-foreground">Designed for smartphones with offline capabilities</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
                    <p className="text-muted-foreground">Round-the-clock AI assistance in your preferred language</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-block p-8 rounded-2xl bg-gradient-sunset shadow-warm">
                <h4 className="text-2xl font-bold text-accent-foreground mb-4">
                  Join 10,000+ Farmers
                </h4>
                <p className="text-accent-foreground/80 mb-6">
                  Already using KisanMitra to improve their farming practices
                </p>
                <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                  Start Free Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary-foreground/10">
              <Sprout className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">KisanMitra AI</span>
          </div>
          <p className="text-primary-foreground/80 mb-4">
            Empowering farmers with AI-powered agricultural assistance
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © 2024 KisanMitra AI. Made with ❤️ for Indian farmers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;