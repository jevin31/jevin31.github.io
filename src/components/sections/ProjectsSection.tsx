import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { CarouselApi } from "@/components/ui/carousel";

export const projects = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, payment processing, and inventory management. Built with modern technologies for scalability and performance.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    id: "ai-task-manager",
    title: "AI Task Manager",
    description:
      "An intelligent task management app that uses ML to prioritize and categorize tasks automatically. Features natural language processing for smart task creation.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  },
  {
    id: "real-time-chat-app",
    title: "Real-time Chat App",
    description:
      "A scalable chat application with WebSocket support, message encryption, and file sharing capabilities. Supports group chats and direct messaging.",
    techStack: ["TypeScript", "Socket.io", "Redis", "MongoDB"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
  },
  {
    id: "portfolio-analytics-dashboard",
    title: "Portfolio Analytics Dashboard",
    description:
      "A data visualization dashboard for tracking investment portfolios with real-time market data. Features interactive charts and performance metrics.",
    techStack: ["Next.js", "D3.js", "Python", "AWS"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group p-4 rounded-xl border border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      <Link to={`/project/${project.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <Link to={`/project/${project.id}`}>
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </Link>

      <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
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
  );
}

export function ProjectsSection() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });
  const { ref: carouselRef, isInView: carouselInView } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api || !carouselInView) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api, carouselInView]);

  return (
    <section id="projects" className="py-20 lg:py-32">
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

          <div
            ref={carouselRef}
            className={`transition-all duration-700 ${
              carouselInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <ProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
