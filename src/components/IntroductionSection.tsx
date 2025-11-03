import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Cpu, Wifi } from "lucide-react";

const IntroductionSection = () => {
  return (
    <section id="introduction" className="py-24" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Smart Greenhouse Monitoring?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Traditional greenhouse farming faces challenges in constant manual monitoring, 
            leading to inefficiencies and potential crop loss. The integration of 
            <strong className="text-primary"> IoT and cloud technologies</strong> offers 
            a transformative solution for precision agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="p-8 bg-card border-border">
            <Lightbulb className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">The Challenge</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Manual monitoring is time-consuming and prone to errors</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Delayed response to critical environmental changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Inefficient resource utilization (water, electricity)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Limited data-driven insights for optimization</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card border-border">
            <TrendingUp className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">The Solution</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Automated real-time environmental monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Instant alerts for critical conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Optimal resource management through data analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Remote control and decision-making capabilities</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
            <div className="flex items-start gap-4 mb-6">
              <Cpu className="w-10 h-10 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Core Concept</h3>
                <p className="text-lg leading-relaxed opacity-95">
                  This project focuses on building an end-to-end system that automates data acquisition 
                  from a greenhouse environment and presents it in a user-friendly manner. The core idea 
                  is to enable <strong>data-driven decision-making</strong> for farmers, ensuring optimal 
                  plant growth conditions and resource conservation through a scalable cloud architecture.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Wifi className="w-10 h-10 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-4">Technology Stack</h3>
                <p className="text-lg leading-relaxed opacity-95">
                  Leveraging IoT sensors, MQTT protocol, AWS IoT Core for cloud infrastructure, 
                  and modern web technologies for interactive dashboards - creating a complete 
                  ecosystem for precision agriculture.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
