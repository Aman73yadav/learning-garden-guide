import { Card } from "@/components/ui/card";
import { Database, Cloud, Activity, Smartphone } from "lucide-react";

const AbstractSection = () => {
  return (
    <section id="abstract" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Project Abstract
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive cloud-based solution for modern greenhouse management
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-card border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              This project aims to design and develop a comprehensive cloud-based monitoring system for smart greenhouses. 
              The system leverages <strong className="text-primary">IoT sensors</strong> to collect real-time environmental data 
              such as temperature, humidity, soil moisture, and light intensity.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Data is streamed to a cloud platform (AWS IoT Core) using the <strong className="text-primary">MQTT protocol</strong>, 
              where it is processed, stored, and visualized through interactive web and mobile dashboards.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              The application provides farmers with actionable insights, enables real-time alerts for critical conditions, 
              and facilitates remote control of actuators. The proposed solution addresses limitations of traditional farming by 
              enhancing crop yield, optimizing resource usage, and enabling precision agriculture through modern 
              <strong className="text-primary"> cloud computing</strong> and data visualization technologies.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <Database className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">IoT Data Collection</h3>
            <p className="text-muted-foreground">
              Real-time sensor data from temperature, humidity, soil moisture, and light sensors
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <Cloud className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Cloud Processing</h3>
            <p className="text-muted-foreground">
              AWS IoT Core integration with MQTT protocol for scalable data streaming
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <Activity className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Real-time Monitoring</h3>
            <p className="text-muted-foreground">
              Live dashboards with instant alerts for critical environmental conditions
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <Smartphone className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-card-foreground mb-2">Remote Control</h3>
            <p className="text-muted-foreground">
              Control actuators like water pumps and fans from web and mobile interfaces
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AbstractSection;
