import { Briefcase, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timelineItems = [
  {
    type: "work",
    title: "Software Development Intern",
    organization: "Astek Mauritius",
    period: "June 2024 - Present",
    description:
      "Developing web applications using modern frameworks, collaborating with senior developers, and contributing to production codebases.",
  },
  {
    type: "education",
    title: "BSc in Computer Science",
    organization: "University of Mauritius",
    period: "2021 - 2025",
    description:
      "Focusing on software engineering, algorithms, and artificial intelligence. Active member of the Computer Science Society.",
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: typeof timelineItems[0];
  index: number;
}) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`relative pl-8 sm:pl-12 pb-8 last:pb-0 transition-all duration-700 ${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] sm:left-[15px] top-0 bottom-0 w-px bg-border" />

      {/* Timeline marker */}
      <div
        className={`absolute left-0 top-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
          isInView
            ? "bg-primary border-primary"
            : "bg-background border-border"
        }`}
      >
        {item.type === "work" ? (
          <Briefcase className={`h-3 w-3 sm:h-4 sm:w-4 transition-colors ${isInView ? "text-primary-foreground" : "text-muted-foreground"}`} />
        ) : (
          <GraduationCap className={`h-3 w-3 sm:h-4 sm:w-4 transition-colors ${isInView ? "text-primary-foreground" : "text-muted-foreground"}`} />
        )}
      </div>

      {/* Content wrapped in rectangle */}
      <div className="p-4 sm:p-5 rounded-xl border border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-semibold text-foreground">
            {item.title}
          </h3>
          <span className="text-xs sm:text-sm font-medium text-primary whitespace-nowrap">
            {item.period}
          </span>
        </div>
        <p className="text-muted-foreground font-medium mb-2 text-sm sm:text-base">
          {item.organization}
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
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
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
