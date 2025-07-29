import { useState } from "react";
import { MotionDiv, animationVariants } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Shield, 
  Target, 
  Zap, 
  AlertTriangle,
  Filter,
  BarChart3,
  Users,
  CheckCircle
} from "lucide-react";
import { technicalProjects } from "@/data/portfolio";
import TechnicalProjectCard from "./TechnicalProjectCard";

const categoryFilters = [
  { value: "all", label: "All Projects", icon: BarChart3 },
  { value: "agent-systems", label: "Agent Systems", icon: Brain },
  { value: "constitutional-ai", label: "Constitutional AI", icon: Shield },
  { value: "multi-agent", label: "Multi-Agent", icon: Users },
  { value: "evaluation-frameworks", label: "Evaluation", icon: Target },
  { value: "safety-research", label: "Safety Research", icon: AlertTriangle },
];

const techSkills = [
  "Multi-Agent Coordination", "Planning and Decision-Making", "Tool Use and Integration", 
  "Memory and Context", "Constitutional AI", "Safety Constraint Implementation", 
  "Evaluation Frameworks", "Real-time Processing", "Production Engineering"
];

export default function TechnicalPortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? technicalProjects 
    : technicalProjects.filter(project => project.category === activeFilter);

  return (
    <section id="technical-portfolio" className="section-container bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <MotionDiv 
          className="text-center mb-16"
          {...animationVariants.fadeIn}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Agent Systems Development
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Project Portfolio
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Production-grade agent systems demonstrating core competencies in multi-agent coordination, 
            tool use orchestration, planning systems, and empirical evaluation—directly aligned with 
            <span className="text-primary font-semibold"> Anthropic's Research Engineer, Agents</span> role requirements.
          </p>

          {/* Key Competencies */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {techSkills.slice(0, 6).map((skill, i) => (
              <Badge key={i} variant="outline" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>

          {/* Impact Summary */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Total Transaction Volume", value: "$2M+", icon: BarChart3 },
              { label: "System Uptime", value: "99.7%", icon: CheckCircle },
              { label: "Safety Events", value: "0", icon: Shield },
              { label: "Production Systems", value: "5", icon: Zap },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 bg-secondary/20 rounded-lg border border-border/50"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* Research Focus Highlight */}
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Anthropic Research Alignment
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each project demonstrates key areas of Anthropic's agent research focus: 
              <span className="font-semibold text-foreground"> reliable execution</span>, 
              <span className="font-semibold text-foreground"> tool use</span>, 
              <span className="font-semibold text-foreground"> planning</span>, and 
              <span className="font-semibold text-foreground"> systematic evaluation</span>. 
              The combination of real-world deployment experience, safety-conscious design, 
              and empirical methodologies aligns directly with building helpful, honest, and harmless AI systems.
            </p>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">Filter by Category</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categoryFilters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <Button
                  key={filter.value}
                  variant={activeFilter === filter.value ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.value)}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {filter.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <TechnicalProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>

        {/* Conclusion */}
        <div className="text-center mt-20 p-8 bg-secondary/10 rounded-xl border border-border/50">
          <h3 className="text-2xl font-bold mb-4">Technical Achievements Summary</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Production Engineering</h4>
              <p className="text-sm text-muted-foreground">
                99.7% uptime, robust error handling, scalable multi-threaded architecture
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Safety-First Design</h4>
              <p className="text-sm text-muted-foreground">
                Zero capital loss events, comprehensive constraint validation, circuit breakers
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Empirical Methodology</h4>
              <p className="text-sm text-muted-foreground">
                Systematic evaluation, A/B testing, red teaming protocols for agent reliability
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground italic">
              "Each project showcases not just technical implementation, but the kind of empirical, 
              safety-focused methodology that aligns with Anthropic's mission of building helpful, 
              honest, and harmless AI systems."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}