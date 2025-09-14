import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass?: string;
}

export function FeatureCard({ icon: Icon, title, description, colorClass = "text-primary" }: FeatureCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-tech transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-card backdrop-blur-sm border-0 shadow-natural animate-fade-in group">
      <div className="flex justify-center mb-4">
        <div className={`p-3 rounded-full bg-muted/50 ${colorClass} transition-all duration-300 group-hover:shadow-glow group-hover:scale-110 backdrop-blur-sm`}>
          <Icon className="h-8 w-8" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground/80">{description}</p>
    </Card>
  );
}