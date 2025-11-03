import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Sprout className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">GreenHouse IoT</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("abstract")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Abstract
            </button>
            <button 
              onClick={() => scrollToSection("introduction")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Introduction
            </button>
            <button 
              onClick={() => scrollToSection("problem")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection("objectives")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Objectives
            </button>
            <button 
              onClick={() => scrollToSection("preparation")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Preparation
            </button>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
