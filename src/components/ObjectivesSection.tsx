import { Card } from "@/components/ui/card";
import { Target, Zap, BarChart3, Shield, Smartphone, Cloud } from "lucide-react";

const ObjectivesSection = () => {
  const objectives = [
    {
      icon: Target,
      title: "Real-Time Data Collection",
      description: "Implement IoT sensors for continuous monitoring of temperature, humidity, soil moisture, and light intensity with sub-second latency."
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Establish robust AWS IoT Core infrastructure using MQTT protocol for reliable data streaming and processing."
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Develop responsive web and mobile interfaces with real-time data visualization and historical trend analysis."
    },
    {
      icon: Zap,
      title: "Smart Alerts System",
      description: "Create intelligent notification system that alerts farmers when environmental parameters exceed defined thresholds."
    },
    {
      icon: Smartphone,
      title: "Remote Control",
      description: "Enable remote operation of greenhouse actuators (pumps, fans, vents) through intuitive mobile and web interfaces."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Implement secure authentication, encrypted data transmission, and compliance with agricultural data privacy standards."
    }
  ];

  return (
    <section id="objectives" className="py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Project Objectives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear goals to transform greenhouse management through technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {objective.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
            <h3 className="text-3xl font-bold mb-6">Ultimate Goal</h3>
            <p className="text-lg leading-relaxed opacity-95 mb-4">
              To create a comprehensive, scalable, and user-friendly smart greenhouse monitoring system 
              that empowers farmers with real-time insights and control capabilities. 
            </p>
            <p className="text-lg leading-relaxed opacity-95">
              This system will enhance crop yield by 20-30%, reduce resource consumption by 25-40%, 
              and enable precision agriculture practices through data-driven decision-making and automation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
