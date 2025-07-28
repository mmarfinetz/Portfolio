import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Available for AI Safety & Research Opportunities
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Mitchell Marfinetz</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Key Specializations */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Constitutional AI",
              "Multi-Agent Systems", 
              "DeFi Research",
              "Autonomous Agents",
              "Safety Evaluation"
            ].map((skill, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 text-lg"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.links.dune}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.links.eportfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator - kept without animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}