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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32"
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

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-md bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
