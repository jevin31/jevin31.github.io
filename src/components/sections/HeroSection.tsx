import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import TypingText from "@/components/ui/TypingText";

type TypingTextProps = {
  text: string;
  highlightWords?: string[];
  speed?: number; // ms per character
  start?: boolean; // when true, begin typing
  className?: string;
  cursorClassName?: string;
};

// TypingText moved to `src/components/ui/TypingText.tsx`

export function HeroSection() {
  const { ref, isInView } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./../../public/resume/resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              Welcome to my portfolio
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Hi, I'm <span className="text-primary">Bhovanen Murday</span>
          </h1>

          <p
            className={`text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground mb-4 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Computer Science Student | Software Developer
          </p>

          <p
            className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            aria-live="polite"
          >
            <TypingText
              text="Exploring the World of Tech & AI"
              highlightWords={["Tech", "AI"]}
              speed={50}
              pause={2000}
              start={isInView}
            />
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-[400ms] ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="gap-2 px-8 shadow-lg hover:shadow-xl transition-shadow"
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-8"
              onClick={handleDownloadResume}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div
            className={`flex items-center justify-center gap-4 transition-all duration-700 delay-500 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="https://github.com/jevin31"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhovanen-murday/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">Scroll down</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
