import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Courses from "@/components/Courses";
import PracticePreview from "@/components/PracticePreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Statistics />
      <Courses />
      <PracticePreview />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
