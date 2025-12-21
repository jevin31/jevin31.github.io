import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and inventory management.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "🛒",
  },
  {
    title: "AI Task Manager",
    description:
      "An intelligent task management app that uses ML to prioritize and categorize tasks automatically.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI"],
    liveUrl: null,
    githubUrl: "https://github.com",
    image: "🤖",
  },
  {
    title: "Real-time Chat App",
    description:
      "A scalable chat application with WebSocket support, message encryption, and file sharing capabilities.",
    techStack: ["TypeScript", "Socket.io", "Redis", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "💬",
  },
  {
    title: "Portfolio Analytics Dashboard",
    description:
      "A data visualization dashboard for tracking investment portfolios with real-time market data.",
    techStack: ["Next.js", "D3.js", "Python", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "📊",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
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

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project icon */}
                <div className="w-14 h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {project.image}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
