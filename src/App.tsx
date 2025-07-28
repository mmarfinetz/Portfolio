import { useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechnicalPortfolioSection from "@/components/TechnicalPortfolioSection";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ResumeDocument from "@/components/ResumeDocument";
import LoadingSpinner from "@/components/LoadingSpinner";
import "@/styles/globals.css";

function App() {
  console.log('App component loaded');
  const location = useLocation();
  
  useEffect(() => {
    console.log('App useEffect running');
    // Set initial scroll position to top
    window.scrollTo(0, 0);
  }, []);

  // Show resume document for /resume route
  if (location.pathname === '/resume') {
    console.log('Rendering ResumeDocument');
    return <ResumeDocument />;
  }

  console.log('Rendering main app');
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main>
          <div id="hero">
            <Hero />
          </div>
          
          <div id="experience">
            <Experience />
          </div>
          
          <div id="projects">
            <Projects />
          </div>
          
          <div id="technical-portfolio">
            <TechnicalPortfolioSection />
          </div>
          
          <div id="skills">
            <Skills />
          </div>
          
          <div id="education">
            <Education />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-secondary/20 border-t border-border py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="text-sm text-muted-foreground">
              © 2024 Mitchell Marfinetz. Built with React, TypeScript, and shadcn/ui.
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Focused on AI Safety, Autonomous Systems, and Blockchain Innovation
            </div>
          </div>
        </footer>
      </div>
    </Suspense>
  );
}

export default App;