import { Card } from "@/components/ui/card";
import { Brain, TrendingUp, Calendar, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Prioritized Focus Areas",
    description: "Feeling overwhelmed? Our AI analyzes your performance to pinpoint your weakest areas, creating a balanced study plan to combat cognitive overload.",
  },
  {
    icon: Target,
    title: "Confidence Score & Realistic Practice",
    description: "Build unshakable confidence. Get a real-time Confidence Score and experience our 'Test Like the Real Thing' mode to eliminate exam day jitters.",
  },
  {
    icon: Calendar,
    title: "AI-Based Spaced Repetition",
    description: "Forget forgetting. Our AI-Powered Spaced Repetition Engine reinforces concepts at the optimal time to ensure long-term retention.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Triumphs",
    description: "No more ambiguity. See your growth with a 'Weekly Progress Digest' and celebrate milestones on your 'Personal Record Wall'.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ lineHeight: "1.1" }}>
            Your PMP Journey, Reimagined
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We've listened to your frustrations and built an AI-powered platform to address every pain point in your PMP prep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
