import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  MessageCircle,
  Calendar,
  Download,
  Brain
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Inquiry&body=Hi Mitchell, I saw your portfolio and would like to discuss opportunities.`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${personalInfo.phone}`;
  };

  const scrollToTechnicalPortfolio = () => {
    const element = document.getElementById('technical-portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-container bg-gradient-to-br from-primary/5 to-sky-400/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking opportunities in AI safety research, autonomous systems development, 
            and technical roles where I can contribute to building helpful, honest, and harmless AI systems.
          </p>
        </div>

        {/* Availability Status */}
        <div className="text-center mb-12">
          <Badge variant="default" className="px-6 py-3 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Available for Full-Time Opportunities
          </Badge>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Primary Contact */}
          <div>
            <Card className="h-full card-hover">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Primary Contact</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center gap-3 text-muted-foreground">
                      <Mail className="w-5 h-5" />
                      <span>{personalInfo.email}</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3 text-muted-foreground">
                      <Phone className="w-5 h-5" />
                      <span>{personalInfo.phone}</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      onClick={handleEmailClick}
                      className="w-full"
                      size="lg"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    
                    <Button 
                      onClick={handlePhoneClick}
                      variant="outline"
                      className="w-full"
                      size="lg"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Direct
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social & Professional */}
          <div>
            <Card className="h-full card-hover">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-6">Professional Profiles</h3>
                  
                  <div className="space-y-3">
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                      size="lg"
                    >
                      <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-3" />
                        GitHub (Work)
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                      size="lg"
                    >
                      <a href={personalInfo.links.githubPersonal} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-3" />
                        GitHub (Personal)
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                      size="lg"
                    >
                      <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-3" />
                        LinkedIn Profile
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                      size="lg"
                    >
                      <a href={personalInfo.links.dune} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-3" />
                        Dune Analytics
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full justify-start"
                      size="lg"
                    >
                      <a href={personalInfo.links.eportfolio} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-3" />
                        MIT ePortfolio
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center mb-12">
          <Card className="bg-secondary/20 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Resume & Documents</h3>
              <p className="text-muted-foreground mb-6">
                Download my latest resume or view additional technical documentation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="px-8">
                  <a href="/resume" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume (PDF)
                  </a>
                </Button>
                
                <Button 
                  onClick={scrollToTechnicalPortfolio}
                  variant="outline" 
                  size="lg" 
                  className="px-8"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  View Technical Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you're working on AI safety research, building autonomous systems, or developing 
              innovative blockchain applications, I'd love to discuss how my experience in Constitutional AI, 
              multi-agent coordination, and production system development can contribute to your team's success.
            </p>
            
            <Button 
              onClick={handleEmailClick}
              size="lg"
              className="px-8 py-3 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}