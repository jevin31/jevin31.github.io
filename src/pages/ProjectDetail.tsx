import { useParams, Link } from "react-router-dom";
import { Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/components/sections/ProjectsSection";
import { Helmet } from "react-helmet-async";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Portfolio</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            {/* Project image */}
            <div className="relative overflow-hidden rounded-xl mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>

            {/* Project title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {project.title}
            </h1>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* GitHub button */}
            <Button size="lg" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
