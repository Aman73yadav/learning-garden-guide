import { Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <Sprout className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-card-foreground">GreenHouse IoT</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              Cloud-Based Smart Greenhouse Monitoring System
            </p>
            <p className="text-sm text-muted-foreground">
              GITAM Deemed to be University • Department of CSE
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2024 GreenHouse IoT Project. Designed for precision agriculture.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
