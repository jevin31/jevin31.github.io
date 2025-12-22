import { useState, useEffect } from "react";
import { Home, User, Wrench, FolderOpen, Briefcase, Mail, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  { href: "#hero", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#skills", icon: Wrench, label: "Skills" },
  { href: "#projects", icon: FolderOpen, label: "Projects" },
  { href: "#experience", icon: Briefcase, label: "Experience" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./../../public/resume/resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-card/90 backdrop-blur-lg border border-border shadow-lg">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <Tooltip key={href}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    className={`relative p-2 sm:p-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    {isActive && (
                      <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className="mb-2">
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}

          <div className="w-px h-6 bg-border mx-1" />

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleDownloadResume}
                className="p-2 sm:p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" className="mb-2">
              <p>Download Resume</p>
            </TooltipContent>
          </Tooltip>

          <ThemeToggle />
        </div>
      </nav>
    </TooltipProvider>
  );
}
