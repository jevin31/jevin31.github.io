import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Web & Software Development",
    skills: ["React", "Next.js", "Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB", "Linux"],
  },
  {
    title: "Other Technical Skills",
    skills: ["Agile/Scrum", "CI/CD", "Testing", "UI/UX Design", "Data Structures", "Algorithms"],
  },
];

export function SkillsSection() {
  const { ref: sectionRef, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });
  const [pulsePosition, setPulsePosition] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setPulsePosition((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 30);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through academic projects, internships,
              and personal exploration.
            </p>
          </div>

          {/* Skills with central line */}
          <div className="relative">
            {/* Central vertical line */}
            <div
              ref={lineRef}
              className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"
            >
              {/* Pulsing light */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_6px] shadow-primary/50 transition-all duration-100"
                style={{ top: `${pulsePosition}%` }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {skillCategories.map((category, categoryIndex) => {
                const isLeft = categoryIndex % 2 === 0;
                const delay = categoryIndex * 150;
                const shouldHighlight =
                  pulsePosition >= categoryIndex * 25 &&
                  pulsePosition < (categoryIndex + 1) * 25;

                return (
                  <div
                    key={category.title}
                    className={`relative transition-all duration-700 ${
                      isInView
                        ? "opacity-100 translate-x-0"
                        : isLeft
                        ? "opacity-0 -translate-x-10"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    {/* Connector line to center */}
                    <div
                      className={`hidden md:block absolute top-8 w-8 h-px transition-all duration-300 ${
                        shouldHighlight ? "bg-primary" : "bg-border"
                      } ${isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}
                    />

                    {/* Node on center line */}
                    <div
                      className={`hidden md:block absolute top-8 w-2 h-2 rounded-full transition-all duration-300 ${
                        shouldHighlight ? "bg-primary scale-150" : "bg-muted-foreground"
                      } ${isLeft ? "-right-[2.25rem]" : "-left-[2.25rem]"} -translate-y-1/2`}
                    />

                    <div
                      className={`p-6 rounded-xl bg-card border transition-all duration-300 ${
                        shouldHighlight
                          ? "border-primary shadow-lg shadow-primary/10"
                          : "border-border hover:border-primary/30 hover:shadow-lg"
                      }`}
                    >
                      <h3
                        className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                          shouldHighlight ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => {
                          const skillShouldHighlight =
                            shouldHighlight &&
                            pulsePosition % 25 >= skillIndex * 4;

                          return (
                            <span
                              key={skill}
                              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 ${
                                skillShouldHighlight
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary text-secondary-foreground"
                              }`}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
