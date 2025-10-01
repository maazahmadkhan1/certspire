import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Sparkles, CheckCircle, XCircle } from "lucide-react";

export default function PracticePreview() {
  const [confidence, setConfidence] = useState([70]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = () => {
    setShowFeedback(true);
    console.log("Answer submitted with confidence:", confidence[0]);
  };

  return (
    <section id="practice" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ lineHeight: "1.1" }}>
            AI-Powered Practice Sessions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience intelligent practice with real-time feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-8">
            <div className="flex items-center justify-between mb-6">
              <Badge variant="secondary">Question 23 of 180</Badge>
              <Badge>Process Groups</Badge>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Which of the following best describes the purpose of the project charter?
            </h3>

            <div className="space-y-3 mb-8">
              {[
                "To formally authorize the project and provide the project manager with authority",
                "To define detailed project requirements and specifications",
                "To establish the project budget and timeline",
                "To identify all project stakeholders and their responsibilities",
              ].map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all hover-elevate ${
                    selectedAnswer === index
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  }`}
                  data-testid={`button-answer-${index}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedAnswer === index
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                      )}
                    </div>
                    <span className={selectedAnswer === index ? "font-medium" : ""}>
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="border-t pt-6 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  How confident are you? {confidence[0]}%
                </label>
                <Slider
                  value={confidence}
                  onValueChange={setConfidence}
                  max={100}
                  step={5}
                  className="w-full"
                  data-testid="slider-confidence"
                />
              </div>

              <Button
                className="w-full"
                onClick={handleSubmit}
                disabled={selectedAnswer === null || showFeedback}
                data-testid="button-submit-answer"
              >
                Submit Answer
              </Button>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">AI Feedback</h4>
            </div>

            {showFeedback ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-chart-2 mb-1">Correct!</p>
                    <p className="text-sm text-muted-foreground">
                      The project charter formally authorizes the project and gives the project manager authority to apply resources.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-2">Key Concept</p>
                  <p className="text-sm text-muted-foreground">
                    The project charter is a foundational document in the Initiating Process Group that establishes project authority.
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium mb-2">Your Progress</p>
                  <p className="text-sm text-muted-foreground">
                    You've improved 15% on Process Groups questions this week. Keep it up!
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p className="text-sm">Submit your answer to see AI-powered feedback and insights</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
