import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart-3/10 to-chart-2/10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ lineHeight: "1.1" }}>
          Ready to Take the Next Step?
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of successful project managers who have aced their exams with CertSpire.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/get-started">
            <a>
              <Button size="lg" className="text-base px-8 py-6 h-auto" data-testid="button-cta-get-started">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </Link>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 h-auto backdrop-blur-sm" data-testid="button-cta-view-pricing">
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
