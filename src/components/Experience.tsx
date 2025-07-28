import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Briefcase, 
  GraduationCap, 
  Rocket, 
  ExternalLink, 
  Github,
  Calendar,
  MapPin
} from "lucide-react";
import { experiences } from "@/data/portfolio";

const typeIcons = {
  professional: Briefcase,
  project: Rocket,
  education: GraduationCap,
};

const typeColors = {
  professional: "bg-blue-500",
  project: "bg-sky-400", 
  education: "bg-green-500",
};

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline showcasing my progression in AI safety research, blockchain development, 
            and technical leadership across professional roles and significant projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = typeIcons[exp.type];
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={exp.id}
                  className={`relative flex ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full ${typeColors[exp.type]} flex items-center justify-center z-10`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${
                    isEven ? "md:pr-8" : "md:pl-8"
                  }`}>
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                          <Badge variant="secondary" className="w-fit">
                            {exp.type === 'professional' ? 'Professional' : 
                             exp.type === 'project' ? 'Key Project' : 'Education'}
                          </Badge>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl md:text-2xl mb-2">
                          {exp.title}
                        </CardTitle>
                        
                        <div className="text-lg font-medium text-primary mb-3">
                          {exp.company}
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </CardHeader>

                      <CardContent className="pt-0">
                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Separator className="my-4" />

                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        {exp.links && exp.links.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.links.map((link, i) => (
                              <Button
                                key={i}
                                variant="outline"
                                size="sm"
                                asChild
                                className="text-xs"
                              >
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1"
                                >
                                  {link.label.toLowerCase().includes('github') ? (
                                    <Github className="w-3 h-3" />
                                  ) : (
                                    <ExternalLink className="w-3 h-3" />
                                  )}
                                  {link.label}
                                </a>
                              </Button>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "7+" },
            { label: "AI Safety Projects", value: "3+" },
            { label: "Production Systems", value: "5+" },
            { label: "Transaction Volume", value: "$2M+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}