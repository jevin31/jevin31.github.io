import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and inventory management. Built with modern technologies for scalability and performance.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "AI Task Manager",
    description:
      "An intelligent task management app that uses ML to prioritize and categorize tasks automatically. Features natural language processing for smart task creation.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  },
  {
    title: "Real-time Chat App",
    description:
      "A scalable chat application with WebSocket support, message encryption, and file sharing capabilities. Supports group chats and direct messaging.",
    techStack: ["TypeScript", "Socket.io", "Redis", "MongoDB"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
  },
  {
    title: "Portfolio Analytics Dashboard",
    description:
      "A data visualization dashboard for tracking investment portfolios with real-time market data. Features interactive charts and performance metrics.",
    techStack: ["Next.js", "D3.js", "Python", "AWS"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`group grid md:grid-cols-2 gap-6 lg:gap-10 items-center transition-all duration-700 ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className={`${isEven ? "" : "md:order-2"}`}>
        <div className="relative overflow-hidden rounded-xl border border-border bg-card group-hover:border-primary/30 transition-all duration-500">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className={`${isEven ? "" : "md:order-1"}`}>
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub button */}
        <Button variant="outline" size="sm" asChild>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <Github className="h-4 w-4" />
            View Code
          </a>
        </Button>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for
              building impactful software solutions.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
