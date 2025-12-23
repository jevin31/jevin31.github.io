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
    id: "polaris-ai-travel-companion",
    title: "Polaris - Your AI Travel Companion",
    description:
      "Polaris is an AI-powered navigation app that transforms exploration with adventure, gamification, and accessibility features. Built to make travel delightful and inclusive, it was developed for the UoM AppCup 2025 and won first place.",
    techStack: ["Kotlin", "SQL Delight", "Supabase", "Google Maps API", "AI", "AR"],
    githubUrl: "https://github.com/TeamAegis/Polaris",
    image: "./../../polaris/polaris1.jpeg",
  },
  {
    id: "dermai-skin-care-companion",
    title: "DermAI - Your Skin Care Companion",
    description:
      "DermAI is an innovative healthcare application. It connects patients with dermatologists and provides AI-driven image classification for skin conditions, instant preliminary diagnoses, a health guidance chatbot, appointment scheduling, and secure video consultations to make dermatological care accessible from anywhere.",
    techStack: ["Dart", "Flutter", "Python", "TensorFlow", "Gemini AI", "Flask"],
    githubUrl: "https://github.com/The-Vegapunks/dermai_flutter",
    image: "./../../dermai/dermai1.png",
  },
  {
    id: "aspark-parking-management",
    title: "Aspark - Parking Management System",
    description:
      "Developed during a 10-week internship at Astek Mauritius, Aspark is an internal web application for parking space reservation and management. I worked on full-stack features using Angular 18, Java 21, and Spring Boot 3, contributed to UI design in Figma, and performed API testing with Postman to ensure reliable endpoints.",
    techStack: ["Angular 18", "Java 21", "Spring Boot 3", "Postman", "PostgreSQL", "GitLab"],
    // githubUrl: "https://github.com/jevin31/aspark",
    image: "./../../aspark/aspark1.png",
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
            className={`text-center mb-16 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
            className={`transition-all duration-700 ${carouselInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
