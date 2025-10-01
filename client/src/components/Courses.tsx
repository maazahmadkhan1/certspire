import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BarChart, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

//todo: remove mock functionality
const courses = [
  {
    title: "PMP Certification Prep",
    description: "Complete preparation for the Project Management Professional exam with AI-powered practice and personalized feedback.",
    hours: "120",
    difficulty: "Intermediate",
    progress: 65,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "CAPM Fundamentals",
    description: "Master the Certified Associate in Project Management exam with our comprehensive study materials and practice tests.",
    hours: "80",
    difficulty: "Beginner",
    progress: 40,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Agile Certified Practitioner",
    description: "Prepare for the PMI-ACP certification with hands-on exercises and real-world agile scenarios.",
    hours: "60",
    difficulty: "Advanced",
    progress: 0,
    color: "from-orange-500 to-red-500",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ lineHeight: "1.1" }}>
            Certification Programs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your path to professional certification success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-course-${index}`}
            >
              <div className={`h-40 bg-gradient-to-br ${course.color} relative`}>
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <Badge variant="secondary" className="shrink-0">
                    {course.difficulty}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.hours}h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="w-4 h-4" />
                    <span>{course.progress}% Complete</span>
                  </div>
                </div>
                {course.progress > 0 && (
                  <Progress value={course.progress} className="h-1" />
                )}
                <Button className="w-full" variant="outline" data-testid={`button-course-${index}`}>
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
