import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Globe, 
  Search,
  Shield,
  Zap,
  BarChart3
} from "lucide-react";
import { skills } from "@/data/portfolio";

const categoryIcons = {
  "AI/ML & Safety": Brain,
  "Programming Languages": Code, 
  "Blockchain & DeFi": Zap,
  "Web Development": Globe,
  "Research & Analytics": Search,
};

const categoryColors = {
  "AI/ML & Safety": "from-sky-400 to-cyan-400",
  "Programming Languages": "from-blue-500 to-cyan-500",
  "Blockchain & DeFi": "from-orange-500 to-red-500", 
  "Web Development": "from-green-500 to-teal-500",
  "Research & Analytics": "from-indigo-500 to-sky-400",
};

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning AI safety research, autonomous systems development, 
            blockchain technology, and empirical research methodologies built through years of 
            hands-on experience and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillCategory) => {
            const Icon = categoryIcons[skillCategory.category as keyof typeof categoryIcons];
            const colorClass = categoryColors[skillCategory.category as keyof typeof categoryColors];
            
            return (
              <div key={skillCategory.category}>
                <Card className="h-full card-hover">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClass}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">
                        {skillCategory.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.skills.map((skill) => (
                        <div key={skill}>
                          <Badge 
                            variant="secondary" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Core Competencies Highlight */}
        <div className="bg-gradient-to-br from-primary/10 to-sky-400/10 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise areas that define my unique value proposition in AI safety and autonomous systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "AI Safety Research",
                description: "Constitutional AI, RLHF, red teaming, safety evaluation frameworks",
                gradient: "from-sky-400 to-cyan-400"
              },
              {
                icon: Brain,
                title: "Autonomous Agents",
                description: "Multi-agent coordination, planning systems, tool use orchestration",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "DeFi & Blockchain",
                description: "Smart contracts, MEV, flash loans, on-chain analytics",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: BarChart3,
                title: "Empirical Research",
                description: "Statistical modeling, experimental design, performance evaluation",
                gradient: "from-green-500 to-teal-500"
              }
            ].map((competency) => (
              <div key={competency.title} className="text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${competency.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <competency.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{competency.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <Card className="bg-secondary/20 border-none">
            <CardContent className="p-8">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Continuous Learning Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My technical expertise is built on a foundation of continuous learning and hands-on application. 
                  From formal education at MIT to open-source contributions and production deployments, 
                  I believe in learning through building, researching through experimentation, and growing through collaboration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}