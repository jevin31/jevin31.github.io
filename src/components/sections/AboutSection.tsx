import { Code, Brain, Shield, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const { ref: imageRef, isInView: imageInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  const highlights = [
    { icon: Code, label: "Software Engineering" },
    { icon: Brain, label: "Artificial Intelligence" },
    { icon: Shield, label: "Cybersecurity" },
    { icon: Cpu, label: "System Design" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image/Avatar side */}
            <div
              ref={imageRef}
              className={`relative transition-all duration-700 ${
                imageInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
                <div className="relative w-full h-full rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div
              ref={contentRef}
              className={`text-center lg:text-left transition-all duration-700 delay-150 ${
                contentInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Passionate Developer & Problem Solver
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Computer Science student with a deep passion for building
                  innovative software solutions. My journey in tech began with curiosity
                  about how things work, and it has evolved into a commitment to creating
                  impactful digital experiences.
                </p>
                <p>
                  I focus on writing clean, maintainable code and designing systems
                  that scale. Whether it's developing web applications, exploring AI
                  possibilities, or understanding security vulnerabilities, I'm always
                  eager to learn and grow.
                </p>
              </div>

              {/* Interest badges */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                {highlights.map(({ icon: Icon, label }, index) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground hover:border-primary/50 transition-all duration-500 ${
                      contentInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
