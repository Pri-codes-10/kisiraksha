import { Cloud, Sun, Droplets, Wind, Thermometer } from "lucide-react";
import { Card } from "@/components/ui/card";

export function WeatherWidget() {
  // Mock weather data - in real app, this would come from an API
  const weatherData = {
    location: "Punjab, India",
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    precipitation: 20,
  };

  return (
    <Card className="p-6 bg-gradient-earth shadow-natural">
      <div className="flex items-center gap-3 mb-4">
        <Sun className="h-6 w-6 text-accent" />
        <div>
          <h3 className="font-semibold text-foreground">Weather Today</h3>
          <p className="text-sm text-muted-foreground">{weatherData.location}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Thermometer className="h-5 w-5 text-accent" />
          </div>
          <div className="text-2xl font-bold text-foreground">{weatherData.temperature}°C</div>
          <div className="text-xs text-muted-foreground">Temperature</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Droplets className="h-5 w-5 text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground">{weatherData.humidity}%</div>
          <div className="text-xs text-muted-foreground">Humidity</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Wind className="h-5 w-5 text-secondary" />
          </div>
          <div className="text-2xl font-bold text-foreground">{weatherData.windSpeed} km/h</div>
          <div className="text-xs text-muted-foreground">Wind Speed</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Cloud className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold text-foreground">{weatherData.precipitation}%</div>
          <div className="text-xs text-muted-foreground">Rain Chance</div>
        </div>
      </div>
    </Card>
  );
}