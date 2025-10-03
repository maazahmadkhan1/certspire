import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const certifications = [
  { value: "PMP", label: "PMP - Project Management Professional" },
  { value: "CISSP", label: "CISSP - Certified Information Systems Security Professional" },
  { value: "CISM", label: "CISM - Certified Information Security Manager" },
  { value: "CCSP", label: "CCSP - Certified Cloud Security Professional" },
];

export default function GetStarted() {
  const [, setLocation] = useLocation();
  const [selectedCert, setSelectedCert] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save user responses to localStorage
    const userData = {
      targetCertification: selectedCert,
      yearsOfExperience: experience,
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem("certspire_user_data", JSON.stringify(userData));
    
    console.log("User data saved:", userData);
    
    // Redirect to home or dashboard
    setLocation("/");
  };

  const isFormValid = selectedCert && experience;

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl">
        <Link href="/">
          <a className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors" data-testid="link-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's Get Started
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your certification goals to personalize your learning experience.
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <Label htmlFor="certification" className="text-base font-semibold">
                What is your target certification?
              </Label>
              <Select value={selectedCert} onValueChange={setSelectedCert}>
                <SelectTrigger id="certification" className="h-12" data-testid="select-certification">
                  <SelectValue placeholder="Select a certification" />
                </SelectTrigger>
                <SelectContent>
                  {certifications.map((cert) => (
                    <SelectItem key={cert.value} value={cert.value} data-testid={`option-${cert.value.toLowerCase()}`}>
                      {cert.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="experience" className="text-base font-semibold">
                {selectedCert
                  ? `How many years of experience do you have with ${selectedCert}?`
                  : "How many years of relevant experience do you have?"}
              </Label>
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="Enter years of experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="h-12"
                data-testid="input-experience"
              />
              <p className="text-sm text-muted-foreground">
                This helps us tailor practice questions to your knowledge level.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Link href="/">
                <Button type="button" variant="outline" className="flex-1" data-testid="button-cancel">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className="flex-1"
                disabled={!isFormValid}
                data-testid="button-submit"
              >
                Continue
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>

        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-2">Why we ask this:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Personalized study plans based on your target certification</li>
            <li>• Difficulty-adjusted practice questions matching your experience level</li>
            <li>• Focused learning paths to maximize your success rate</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
