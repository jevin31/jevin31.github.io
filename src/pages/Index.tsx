import { Helmet } from "react-helmet-async";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>John Doe | Software Developer & CS Student Portfolio</title>
        <meta
          name="description"
          content="Portfolio of John Doe, a Computer Science student and software developer. Showcasing projects in web development, AI, and software engineering."
        />
        <meta
          name="keywords"
          content="software developer, computer science, web developer, portfolio, React, TypeScript"
        />
        <meta property="og:title" content="John Doe | Software Developer Portfolio" />
        <meta
          property="og:description"
          content="Building scalable, clean, and impactful software solutions."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://johndoe.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <FloatingNav />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
