import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

//todo: remove mock functionality
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Project Manager",
    initials: "SJ",
    content: "CertSpire's AI-powered practice sessions were a game-changer for my PMP prep. The personalized feedback helped me identify and strengthen my weak areas efficiently.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "IT Project Lead",
    initials: "MC",
    content: "The spaced repetition system ensured I retained everything I learned. Passed my PMP exam on the first try with a score I'm proud of!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Construction PM",
    initials: "ER",
    content: "The confidence scoring feature really helped me understand where I stood. The practice interface feels just like the real exam.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Agile Coach",
    initials: "DT",
    content: "Outstanding platform! The AI recommendations were spot-on, and the weekly progress reports kept me motivated throughout my study journey.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ lineHeight: "1.1" }}>
            Trusted by Professionals
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful certification candidates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
