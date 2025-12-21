import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Development Intern",
    organization: "Astek Mauritius",
    period: "June 2024 - Present",
    description:
      "Developing web applications using modern frameworks, collaborating with senior developers, and contributing to production codebases.",
  },
];

const education = [
  {
    type: "education",
    title: "BSc in Computer Science",
    organization: "University of Mauritius",
    period: "2021 - 2025",
    description:
      "Focusing on software engineering, algorithms, and artificial intelligence. Active member of the Computer Science Society.",
  },
];

export function ExperienceSection() {
  const timeline = [...experiences, ...education];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background that shaped my 
              skills and passion for technology.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    {item.type === "work" ? (
                      <Briefcase className="h-6 w-6 text-primary" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    )}
                  </div>

                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm font-medium text-primary">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">
                      {item.organization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
