import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronDown, 
  ChevronUp, 
  Github, 
  ExternalLink, 
  Brain, 
  Shield, 
  Zap, 
  Target,
  Code,
  BarChart3,
  Calendar,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { TechnicalProject } from "@/data/portfolio";

const categoryIcons = {
  "agent-systems": Brain,
  "constitutional-ai": Shield,
  "evaluation-frameworks": Target,
  "multi-agent": Zap,
  "safety-research": AlertTriangle,
};

interface TechnicalProjectCardProps {
  project: TechnicalProject;
  index: number;
}

export default function TechnicalProjectCard({ project, index }: TechnicalProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'results' | 'research'>('architecture');
  
  const Icon = categoryIcons[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
        <CardHeader className="pb-4">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <Badge 
                  variant="secondary" 
                  className="mb-2 text-xs font-medium"
                >
                  {project.category.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </Badge>
                {project.featured && (
                  <Badge variant="default" className="ml-2 text-xs">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {project.date}
            </div>
          </div>

          <CardTitle className="text-2xl mb-2 leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          
          <div className="text-base font-medium text-primary/80 mb-3">
            {project.subtitle}
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Metrics Preview */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            {project.empiricalResults.performance.slice(0, 3).map((metric, i) => (
              <div key={i} className="text-center p-3 bg-secondary/50 rounded-lg">
                <div className="text-lg font-bold text-primary">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Expand/Collapse Button */}
          <Button
            onClick={() => setExpanded(!expanded)}
            variant="outline"
            className="w-full mb-4 flex items-center gap-2"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Hide Technical Details
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                View Technical Details
              </>
            )}
          </Button>

          {/* Expanded Content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {/* Tab Navigation */}
                <div className="flex mb-6 border-b border-border">
                  {[
                    { key: 'architecture', label: 'Architecture', icon: Code },
                    { key: 'results', label: 'Results', icon: BarChart3 },
                    { key: 'research', label: 'Research Impact', icon: Brain }
                  ].map(({ key, label, icon: TabIcon }) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key as any)}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                        activeTab === key
                          ? 'border-primary text-primary'
                          : 'border-transparent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <TabIcon className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[300px]">
                  {activeTab === 'architecture' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <Brain className="w-5 h-5 text-primary" />
                          System Architecture
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {project.architecture.overview}
                        </p>
                      </div>

                      {project.architecture.codeExample && (
                        <div>
                          <h5 className="text-sm font-semibold mb-3 text-foreground">
                            Implementation Example:
                          </h5>
                          <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg border border-border overflow-x-auto text-sm">
                            <code>{project.architecture.codeExample}</code>
                          </pre>
                        </div>
                      )}

                      <div>
                        <h5 className="text-sm font-semibold mb-3 text-foreground">
                          Technical Challenges & Solutions:
                        </h5>
                        <div className="space-y-4">
                          {project.architecture.challenges.map((item, i) => (
                            <div key={i} className="border border-border rounded-lg p-4">
                              <div className="flex items-start gap-3 mb-2">
                                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h6 className="font-medium text-foreground mb-1">Challenge:</h6>
                                  <p className="text-sm text-muted-foreground">{item.challenge}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h6 className="font-medium text-foreground mb-1">Solution:</h6>
                                  <p className="text-sm text-muted-foreground">{item.solution}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'results' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-primary" />
                          Performance Metrics
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                          {project.empiricalResults.performance.map((metric, i) => (
                            <div key={i} className="text-center p-4 bg-secondary/30 rounded-lg border border-border">
                              <div className="text-xl font-bold text-primary mb-1">
                                {metric.value}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {project.empiricalResults.safetyMetrics && (
                        <div>
                          <h5 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-500" />
                            Safety Metrics
                          </h5>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {project.empiricalResults.safetyMetrics.map((metric, i) => (
                              <div key={i} className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                                <div className="text-lg font-bold text-green-600">
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

                      <div>
                        <h5 className="text-sm font-semibold mb-3 text-foreground">
                          Real-World Impact:
                        </h5>
                        <ul className="space-y-2">
                          {project.empiricalResults.impact.map((impact, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {impact}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'research' && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Brain className="w-5 h-5 text-primary" />
                          Research Applications
                        </h4>
                        
                        <div className="space-y-6">
                          <div>
                            <h5 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                              <Target className="w-4 h-4 text-primary" />
                              Anthropic Alignment
                            </h5>
                            <ul className="space-y-2">
                              {project.researchRelevance.anthropicAlignment.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                              <Zap className="w-4 h-4 text-amber-500" />
                              Agent Capabilities Demonstrated
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {project.researchRelevance.agentCapabilities.map((capability, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {capability}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
                              <Shield className="w-4 h-4 text-green-500" />
                              Safety Contributions
                            </h5>
                            <ul className="space-y-2">
                              {project.researchRelevance.safetyContributions.map((contribution, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                  <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  {contribution}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Separator className="my-6" />

          {/* Action Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.map((link, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                asChild
                className="flex items-center gap-2"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label.toLowerCase().includes('github') ? (
                    <Github className="w-4 h-4" />
                  ) : (
                    <ExternalLink className="w-4 h-4" />
                  )}
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}