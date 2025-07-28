import { useEffect } from "react";
import { personalInfo, experiences, skills, education } from "@/data/portfolio";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Calendar,
  Building,
  GraduationCap,
  Award,
  CheckCircle
} from "lucide-react";

export default function ResumeDocument() {
  useEffect(() => {
    // Set document title for PDF
    document.title = `${personalInfo.name} - Resume`;
    
    // Auto-trigger print dialog after component loads
    const timer = setTimeout(() => {
      window.print();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-4xl mx-auto bg-white text-black min-h-screen print:min-h-0">
      {/* Print-specific styles */}
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          .print-avoid-break { page-break-inside: avoid; }
          * { color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
        @page {
          margin: 0.5in;
          size: letter;
        }
      `}</style>

      {/* Header */}
      <header className="text-center py-8 print:py-6 border-b-2 border-gray-900">
        <h1 className="text-4xl print:text-3xl font-bold text-gray-900 mb-2">
          {personalInfo.name}
        </h1>
        <p className="text-xl print:text-lg text-gray-700 mb-4 font-medium">
          {personalInfo.title}
        </p>
        <p className="text-base print:text-sm text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>
        
        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-4 print:gap-3 text-sm print:text-xs text-gray-700">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4 print:w-3 print:h-3" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 print:w-3 print:h-3" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 print:w-3 print:h-3" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="w-4 h-4 print:w-3 print:h-3" />
            <span>github.com/0xmarf</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4 print:w-3 print:h-3" />
            <span>linkedin.com/in/mitchellmarfinetz</span>
          </div>
        </div>
      </header>

      <div className="p-8 print:p-6 space-y-8 print:space-y-6">
        {/* Professional Summary */}
        <section className="print-avoid-break">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-4 print:mb-3 border-b border-gray-300 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-base print:text-sm">
            AI/ML Engineer and Blockchain Developer with expertise in autonomous agent systems, Constitutional AI, 
            and production-grade safety research. Demonstrated experience building multi-agent coordination systems 
            with $2M+ transaction volume and 99.7% uptime. Focused on AI safety research, empirical evaluation 
            methodologies, and building helpful, honest, and harmless AI systems aligned with industry best practices.
          </p>
        </section>

        {/* Core Skills */}
        <section className="print-avoid-break">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-4 print:mb-3 border-b border-gray-300 pb-2">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 print:grid-cols-1 gap-6 print:gap-4">
            {skills.map((skillGroup, index) => (
              <div key={index} className="print-avoid-break">
                <h3 className="text-lg print:text-base font-semibold text-gray-800 mb-2 print:mb-1">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {skillGroup.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs print:text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-4 print:mb-3 border-b border-gray-300 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-6 print:space-y-4">
            {experiences.filter(exp => exp.type === 'professional').map((experience) => (
              <div key={experience.id} className="print-avoid-break">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg print:text-base font-bold text-gray-900">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700 text-base print:text-sm">
                      <Building className="w-4 h-4 print:w-3 print:h-3" />
                      <span className="font-medium">{experience.company}</span>
                      <span>•</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-sm print:text-xs mt-1 sm:mt-0">
                    <Calendar className="w-4 h-4 print:w-3 print:h-3" />
                    <span className="font-medium">{experience.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3 print:mb-2 text-sm print:text-xs leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="space-y-1">
                  {experience.achievements.slice(0, 4).map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm print:text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 print:w-2 print:h-2 text-green-600 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 print:mt-2">
                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.slice(0, 8).map((tech, i) => (
                      <span 
                        key={i}
                        className="inline-block bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs print:text-xs border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="print-break">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-4 print:mb-3 border-b border-gray-300 pb-2">
            Key Projects & Research
          </h2>
          <div className="space-y-5 print:space-y-3">
            {experiences.filter(exp => exp.type === 'project').slice(0, 3).map((project) => (
              <div key={project.id} className="print-avoid-break">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg print:text-base font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-blue-700 font-medium text-sm print:text-xs">
                      {project.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-sm print:text-xs">
                    <Calendar className="w-4 h-4 print:w-3 print:h-3" />
                    <span>{project.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-2 text-sm print:text-xs leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 print:gap-1">
                  {project.achievements.slice(0, 4).map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm print:text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 print:w-2 print:h-2 text-green-600 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="mt-2 print:mt-1">
                    <div className="flex flex-wrap gap-2 print:gap-1">
                      {project.links.map((link, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs print:text-xs text-blue-700">
                          <ExternalLink className="w-3 h-3 print:w-2 print:h-2" />
                          {link.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="print-avoid-break">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-4 print:mb-3 border-b border-gray-300 pb-2">
            Education & Certifications
          </h2>
          <div className="space-y-4 print:space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="print-avoid-break">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-lg print:text-base font-bold text-gray-900">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700 text-base print:text-sm">
                      <GraduationCap className="w-4 h-4 print:w-3 print:h-3" />
                      <span className="font-medium">{edu.school}</span>
                    </div>
                    {edu.specialization && (
                      <p className="text-blue-700 text-sm print:text-xs font-medium">
                        {edu.specialization}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-sm print:text-xs">
                    <Award className="w-4 h-4 print:w-3 print:h-3" />
                    <span>{edu.year}</span>
                  </div>
                </div>
                
                <div className="mt-2 print:mt-1 flex flex-wrap gap-1">
                  {edu.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="inline-block bg-green-50 text-green-800 px-2 py-1 rounded text-xs print:text-xs border border-green-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-6 print:pt-4 border-t border-gray-300 text-xs print:text-xs text-gray-600">
          <p>
            This resume was generated from live portfolio data • Updated {currentYear} • 
            View full technical portfolio at mitchellmarfinetz.com
          </p>
          <p className="mt-1">
            Specialized in AI Safety Research, Constitutional AI, and Production Agent Systems
          </p>
        </footer>
      </div>

      {/* No-print instruction for web view */}
      <div className="no-print fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
        <p className="text-sm">Press Ctrl+P (Cmd+P on Mac) to save as PDF</p>
      </div>
    </div>
  );
}