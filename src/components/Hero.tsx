import { Button } from "@/components/ui/button";
import { ArrowRight, Thermometer, Droplets, Sun, Cloud } from "lucide-react";
import heroImage from "@/assets/hero-greenhouse.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center pt-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Cloud className="w-4 h-4" />
                IoT-Powered Agriculture
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Smart Greenhouse
              <span className="block text-primary">Monitoring System</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real-time cloud-based monitoring system leveraging IoT sensors for precision agriculture. 
              Optimize growth conditions, automate processes, and maximize yields with intelligent data analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("abstract")}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection("preparation")}
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                How to Start
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-medium)" }}>
              <img 
                src={heroImage} 
                alt="Smart Greenhouse with IoT sensors" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-card p-4 rounded-lg shadow-lg border border-border">
                <Thermometer className="w-6 h-6 text-primary mb-2" />
                <div className="text-2xl font-bold text-foreground">22°C</div>
                <div className="text-xs text-muted-foreground">Temperature</div>
              </div>
              
              <div className="bg-card p-4 rounded-lg shadow-lg border border-border">
                <Droplets className="w-6 h-6 text-primary mb-2" />
                <div className="text-2xl font-bold text-foreground">65%</div>
                <div className="text-xs text-muted-foreground">Humidity</div>
              </div>
              
              <div className="bg-card p-4 rounded-lg shadow-lg border border-border">
                <Droplets className="w-6 h-6 text-primary mb-2" />
                <div className="text-2xl font-bold text-foreground">45%</div>
                <div className="text-xs text-muted-foreground">Soil Moisture</div>
              </div>
              
              <div className="bg-card p-4 rounded-lg shadow-lg border border-border">
                <Sun className="w-6 h-6 text-primary mb-2" />
                <div className="text-2xl font-bold text-foreground">850</div>
                <div className="text-xs text-muted-foreground">Light (lux)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
