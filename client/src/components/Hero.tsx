import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center pt-20">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6" style={{ lineHeight: "1.05", letterSpacing: "-0.02em" }}>
          Ace Your PMP Certification with{" "}
          <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            AI-Powered Practice
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12" style={{ lineHeight: "1.4" }}>
          Prepare for the Project Management Professional (PMP) exam with our cutting-edge AI-driven practice sessions. Get personalized feedback and master the exam content efficiently.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/get-started">
            <a>
              <Button size="lg" className="text-base px-8 py-6 h-auto" data-testid="button-start-practicing">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </Link>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto backdrop-blur-sm" data-testid="button-learn-more">
            Learn More
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-chart-2 rounded-full" />
            <span>50,000+ Students</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>92% Pass Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-chart-3 rounded-full" />
            <span>AI-Powered</span>
          </div>
        </div>
      </div>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        data-testid="link-scroll-down"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
