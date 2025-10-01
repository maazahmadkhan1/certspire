const stats = [
  { value: "50K+", label: "Successful Students" },
  { value: "92%", label: "Pass Rate" },
  { value: "10K+", label: "Practice Questions" },
  { value: "5+", label: "Certifications" },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
