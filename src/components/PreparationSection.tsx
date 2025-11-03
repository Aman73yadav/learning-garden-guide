import { Card } from "@/components/ui/card";
import { CheckCircle2, Wrench, Code, Rocket } from "lucide-react";

const PreparationSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Hardware Setup",
      icon: Wrench,
      duration: "Weeks 1-2",
      tasks: [
        "Procure IoT sensors (DHT22, soil moisture, light sensors)",
        "Set up microcontroller (ESP32/Arduino)",
        "Test sensor connectivity and calibration",
        "Assemble actuators (water pumps, fans)",
        "Create initial circuit diagrams"
      ]
    },
    {
      phase: "Phase 2",
      title: "Cloud Infrastructure",
      icon: Code,
      duration: "Weeks 3-4",
      tasks: [
        "Create AWS account and configure IoT Core",
        "Set up MQTT broker and topics",
        "Configure device authentication certificates",
        "Set up DynamoDB or S3 for data storage",
        "Test data streaming and storage"
      ]
    },
    {
      phase: "Phase 3",
      title: "Application Development",
      icon: Rocket,
      duration: "Weeks 5-7",
      tasks: [
        "Design web dashboard UI/UX",
        "Implement real-time data visualization",
        "Create mobile responsive interface",
        "Develop alert notification system",
        "Add remote control features for actuators"
      ]
    },
    {
      phase: "Phase 4",
      title: "Testing & Deployment",
      icon: CheckCircle2,
      duration: "Week 8",
      tasks: [
        "Perform end-to-end system testing",
        "Conduct load testing for scalability",
        "Test alert mechanisms and response times",
        "Deploy to production environment",
        "Documentation and user training"
      ]
    }
  ];

  return (
    <section id="preparation" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How to Prepare & Start
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A step-by-step guide to implement your smart greenhouse monitoring system
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                          {phase.phase}
                        </div>
                        <div className="text-xs text-muted-foreground">{phase.duration}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">
                      {phase.title}
                    </h3>
                    <ul className="space-y-3">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 md:p-12 bg-accent text-accent-foreground">
            <h3 className="text-2xl font-bold mb-4">Prerequisites & Requirements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-lg">Technical Skills</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• Basic electronics and IoT knowledge</li>
                  <li>• Programming (Python/JavaScript)</li>
                  <li>• Cloud computing fundamentals</li>
                  <li>• Web development basics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-lg">Resources Needed</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• IoT sensors and microcontroller</li>
                  <li>• AWS account (free tier available)</li>
                  <li>• Development environment</li>
                  <li>• Test greenhouse or simulation setup</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;
