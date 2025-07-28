import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Trophy,
  Calendar
} from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-container bg-secondary/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Formal education and professional certifications that provide the theoretical foundation 
            for my practical work in AI safety, machine learning, and blockchain development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu) => (
            <div key={edu.degree}>
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl mb-1">
                          {edu.degree}
                        </CardTitle>
                        <div className="text-lg font-medium text-primary">
                          {edu.school}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                      <Badge variant="secondary" className="w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.year}
                      </Badge>
                    </div>
                  </div>

                  {edu.specialization && (
                    <div className="text-muted-foreground mb-3">
                      <strong>Specialization:</strong> {edu.specialization}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Key Areas of Study:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-sm">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Academic Achievements</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-yellow-500/10">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold">Dean's List Recognition</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Achieved Dean's List recognition for Fall 2020 semester, demonstrating academic excellence 
                  and consistent high performance across all coursework.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold">National Honor Society</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Member of National Honor Society, recognizing outstanding scholarship, 
                  character, leadership, and service throughout academic career.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-primary/5 to-sky-400/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Commitment to Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Beyond formal education, I maintain an active commitment to staying current with rapidly evolving 
                fields like AI safety and blockchain technology. This includes participating in research communities, 
                contributing to open-source projects, and pursuing specialized coursework in emerging areas like 
                Constitutional AI and autonomous agent development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}