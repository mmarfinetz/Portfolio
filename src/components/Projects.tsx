import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Zap, 
  Code, 
  Search,
  TrendingUp,
  BarChart3,
  Calendar
} from "lucide-react";
import { projects } from "@/data/portfolio";

const categoryIcons = {
  "ai-ml": Brain,
  blockchain: Zap,
  "web-dev": Code,
  research: Search,
};

const categoryFilters = [
  { value: "all", label: "All Projects" },
  { value: "ai-ml", label: "AI/ML" },
  { value: "blockchain", label: "Blockchain" },
  { value: "web-dev", label: "Web Dev" },
  { value: "research", label: "Research" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-container bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Production-grade systems demonstrating expertise in AI safety, autonomous agents, 
            blockchain development, and research methodologies. Each project showcases 
            real-world impact and technical innovation.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Highlighted Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const Icon = categoryIcons[project.category];
              return (
                <div key={project.id}>
                  <ProjectCard project={project} Icon={Icon} featured />
                </div>
              );
            })}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryFilters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className="px-6 py-2"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = categoryIcons[project.category];
            return (
              <div key={project.id}>
                <ProjectCard project={project} Icon={Icon} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  Icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
}

function ProjectCard({ project, Icon, featured = false }: ProjectCardProps) {
  return (
    <Card className={`h-full card-hover ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            {featured && (
              <Badge variant="default" className="text-xs">
                Featured
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {project.date}
          </div>
        </div>

        <CardTitle className="text-xl mb-2 leading-tight">
          {project.title}
        </CardTitle>
        
        <div className="text-sm font-medium text-primary mb-3">
          {project.subtitle}
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-xs text-muted-foreground ml-3">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
              <BarChart3 className="w-3 h-3" />
              Metrics:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {project.metrics.slice(0, 4).map((metric, i) => (
                <div key={i} className="text-center p-2 bg-secondary/50 rounded">
                  <div className="text-sm font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Separator className="my-4" />

        {/* Action Links */}
        <div className="flex flex-wrap gap-2">
          {project.links.map((link, i) => (
            <Button
              key={i}
              variant="outline"
              size="sm"
              asChild
              className="text-xs flex-1 min-w-fit"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 justify-center"
              >
                {link.label.toLowerCase().includes('github') ? (
                  <Github className="w-3 h-3" />
                ) : link.label.toLowerCase().includes('demo') || link.label.toLowerCase().includes('live') ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <ExternalLink className="w-3 h-3" />
                )}
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}