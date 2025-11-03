import { Card } from "@/components/ui/card";
import { AlertCircle, Clock, Droplet, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual Monitoring Inefficiency",
      description: "Farmers spend excessive time manually checking greenhouse conditions, leading to fatigue and inconsistent monitoring schedules."
    },
    {
      icon: AlertCircle,
      title: "Delayed Response Time",
      description: "Critical environmental changes often go unnoticed until visible plant stress occurs, resulting in reduced crop quality and yield."
    },
    {
      icon: Droplet,
      title: "Resource Wastage",
      description: "Without precise data, water and energy resources are often over-utilized or under-utilized, increasing operational costs."
    },
    {
      icon: TrendingDown,
      title: "Limited Scalability",
      description: "Traditional methods don't scale well for larger operations or multiple greenhouse management, limiting business growth."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Problem Statement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the challenges that traditional greenhouse farming faces
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <Card className="p-8 md:p-12 bg-destructive/10 border-destructive/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Current State of Greenhouse Management
            </h3>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              Traditional greenhouse operations rely heavily on manual intervention and periodic checks, 
              which creates several critical challenges:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-2">→</span>
                <span>Lack of real-time visibility into environmental parameters</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-2">→</span>
                <span>No historical data for trend analysis and predictive insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-2">→</span>
                <span>Limited ability to respond quickly to adverse conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-2">→</span>
                <span>Difficulty in maintaining optimal growing conditions consistently</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-destructive/10 flex-shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
