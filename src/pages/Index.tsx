import { Sprout, MessageSquare, Camera, Mic, Globe, Cloud, Smartphone, MessageCircle, Zap, Brain, Shield } from "lucide-react";
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
      <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50 shadow-tech">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="p-2 rounded-lg bg-gradient-futuristic shadow-glow animate-glow-pulse">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">KisaRaksha</h1>
              <p className="text-sm text-muted-foreground">AI-Powered Crop Protection</p>
            </div>
          </div>
          <LanguageSelector />
        </div>
        const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

// Load saved theme
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleBtn.textContent = currentTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

toggleBtn.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");
  let newTheme = theme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});

      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-futuristic opacity-95" />
        <div className="absolute inset-0 bg-gradient-tech opacity-50" />
        
        {/* Futuristic background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              कृषि रक्षा
              <br />
              <span className="text-accent-light bg-gradient-sunset bg-clip-text text-transparent">AI के साथ</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Future-ready crop protection • Advanced AI diagnostics • Smart farming solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button variant="tech" size="lg" className="text-lg px-8 py-6 animate-glow-pulse">
                <Brain className="h-5 w-5 mr-2" />
                Start AI Analysis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Zap className="h-5 w-5 mr-2" />
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      <section className="py-12 px-4 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-earth opacity-50" />
        <div className="container mx-auto relative z-10 animate-slide-up">
          <WeatherWidget />
        </div>
      </section>

      {/* Query Interface */}
      <section className="py-16 px-4 relative">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              AI-Powered Crop Diagnostics
            </h3>
            <p className="text-lg text-muted-foreground">
              Advanced machine learning for instant crop analysis and protection strategies
            </p>
          </div>
          <div className="animate-slide-up">
            <QueryInput />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-earth relative">
        <div className="absolute inset-0 bg-gradient-tech opacity-10" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Advanced AI Capabilities
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Next-generation artificial intelligence protecting crops across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
            <FeatureCard
              icon={MessageSquare}
              title="Neural Language Processing"
              description="Advanced NLP understands context in Hindi, English, and regional languages"
              colorClass="text-primary"
            />
            <FeatureCard
              icon={Mic}
              title="Voice AI Recognition"
              description="Real-time speech processing with dialect adaptation technology"
              colorClass="text-accent"
            />
            <FeatureCard
              icon={Camera}
              title="Computer Vision Analysis"
              description="Deep learning models identify pests, diseases, and nutrient deficiencies"
              colorClass="text-secondary"
            />
            <FeatureCard
              icon={Brain}
              title="Predictive Intelligence"
              description="Machine learning algorithms predict crop threats before they occur"
              colorClass="text-primary-light"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-futuristic opacity-5" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Next-Gen Agricultural Intelligence
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="p-2 rounded-lg bg-primary/10 shadow-glow">
                    <Cloud className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">IoT Weather Integration</h4>
                    <p className="text-muted-foreground">Satellite data and IoT sensors for hyper-local predictions</p>
                  </div>
                </div>
                <div className="flex gap-4 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="p-2 rounded-lg bg-accent/10 shadow-warm">
                    <Smartphone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Edge Computing</h4>
                    <p className="text-muted-foreground">On-device AI processing for instant results without internet</p>
                  </div>
                </div>
                <div className="flex gap-4 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="p-2 rounded-lg bg-secondary/10 shadow-tech">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quantum-Ready Analytics</h4>
                    <p className="text-muted-foreground">Future-proof algorithms preparing for quantum computing era</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-right animate-slide-up">
              <div className="inline-block p-8 rounded-2xl bg-gradient-tech shadow-tech hover:shadow-glow transition-all duration-500 hover:scale-105">
                <h4 className="text-2xl font-bold text-primary-foreground mb-4 flex items-center justify-center gap-2">
                  <Shield className="h-6 w-6" />
                  Protect 1M+ Acres
                </h4>
                <p className="text-primary-foreground/80 mb-6">
                  KisaRaksha AI safeguarding crops across 500+ districts in India
                </p>
                <Button variant="accent" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                  <Zap className="h-5 w-5 mr-2" />
                  Deploy AI Protection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-futuristic text-primary-foreground relative">
        <div className="absolute inset-0 bg-gradient-tech opacity-30" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in">
            <div className="p-2 rounded-lg bg-primary-foreground/10 shadow-glow animate-glow-pulse">
              <Shield className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">KisaRaksha</span>
          </div>
          <p className="text-primary-foreground/80 mb-4">
            Revolutionizing agriculture with AI-powered crop protection technology
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © 2024 KisaRaksha AI. Securing India's agricultural future with advanced AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
