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
    <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="flex justify-center mb-4">
        <div className={`p-3 rounded-full bg-muted ${colorClass}`}>
          <Icon className="h-8 w-8" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}