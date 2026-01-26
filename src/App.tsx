import React from 'react';
import {
  Shield,
  Server,
  Network,
  Code2,
  ShieldCheck,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight,
  Monitor,
  Database,
  Layers,
  Wrench,
  UserCheck,
  Briefcase,
  Building2,
  Lock
} from 'lucide-react';
import { Section, BentoCard } from './components/layout-utils';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Youtube } from 'lucide-react';
import { Cpu } from 'lucide-react';
import emailjs from '@emailjs/browser';


function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-sans font-bold text-xl">
            <Shield className="w-6 h-6 text-primary" />
            <span>William <span className="text-primary">Sokol</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button asChild variant="outline" size="sm" className="border-border hover:border-primary transition-all">
            <a href="/Documents/William_Sokol_Resume.pdf" download="William_Sokol_Resume.pdf">
              Download CV
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="home" className="pt-32 md:pt-48 pb-20">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Badge - outside and centered */}
          <div className="flex justify-center animate-reveal">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1 font-medium">
              Enterprise IT & Infrastructure
            </Badge>
          </div>

          {/* Image and Title side by side, centered as a unit */}
          <div className="flex justify-center items-center gap-4 animate-reveal">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="/images/profile.jpg"
                alt="William Sokol"
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl border-4 border-primary/10"
              />
            </div>

            {/* Title - centered */}
            <div className="text-center max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight leading-tight text-foreground">
                Technical Excellence in <br />
                <span className="text-gradient">Modern Enterprise Systems</span>
              </h1>
            </div>
          </div>

          {/* Everything below - Centered */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed animate-reveal">
              Specialized in diagnosing complex infrastructure challenges, with deep expertise in
              <span className="text-foreground font-medium"> networking</span>,
              <span className="text-foreground font-medium"> cybersecurity</span>, and
              <span className="text-foreground font-medium"> hardware integration</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-4 animate-reveal" style={{ animationDelay: '200ms' }}>
              {/* Wrap the Button with asChild and an anchor tag */}
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 group px-8"
              >
                <a
                  href="https://www.linkedin.com/in/william-sokol-56040790/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get in Touch
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <div className="flex items-center gap-4 px-4">
                <a href="https://www.linkedin.com/in/william-sokol-56040790/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/williamsokol" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@bobojo5642" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="mailto:williamsokol0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 animate-reveal" style={{ animationDelay: '400ms' }}>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8" />
                <span className="text-xs font-semibold uppercase tracking-wider">Security First</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Server className="w-8 h-8" />
                <span className="text-xs font-semibold uppercase tracking-wider">Scalable Infra</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Network className="w-8 h-8" />
                <span className="text-xs font-semibold uppercase tracking-wider">Optimized Net</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Database className="w-8 h-8" />
                <span className="text-xs font-semibold uppercase tracking-wider">Data Integrity</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Arsenal" subtitle="Core competencies in enterprise-grade IT infrastructure and systems integration.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BentoCard
            title="Infrastructure"
            icon={Monitor}
            description="End-to-end enterprise systems management."
          >
            <div className="flex flex-wrap gap-2">
              {['Windows Server', 'Linux Admin', 'Azure Cloud', 'Active Directory', 'ITSM'].map(s => (
                <Badge key={s} variant="secondary" className="bg-secondary text-secondary-foreground">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="Hardware Systems"
            icon={Server}
            description="Hardware-level diagnostics and embedded integration."
          >
            <div className="flex flex-wrap gap-2">
              {['ESP32/IOT', 'PCB Diagnostics', 'Serial Protocols', 'Edge Computing', 'Robotics'].map(s => (
                <Badge key={s} variant="secondary" className="bg-secondary text-secondary-foreground">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="Development"
            icon={Code2}
            description="Technical automation and custom tool development."
          >
            <div className="flex flex-wrap gap-2">
              {['Python', 'Node.js', 'C++', 'Shell Scripting', 'SQL Systems', 'TypeScript'].map(s => (
                <Badge key={s} variant="secondary" className="bg-secondary text-secondary-foreground">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="Enterprise Networking"
            icon={Network}
            description="Advanced network design and routing optimization."
          >
            <div className="flex flex-wrap gap-2">
              {['WiFi 7 Systems', 'Protocol Analysis', 'Routing Logic', 'Network Security', 'VLANs'].map(s => (
                <Badge key={s} variant="secondary" className="bg-secondary text-secondary-foreground">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="Security Compliance"
            icon={Lock}
            description="Dedicated focus on cybersecurity frameworks and standards."
          >
            <div className="flex flex-wrap gap-2">
              {['CompTIA Tech+', 'Google Cybersecurity', 'Azure Security', 'Access Control'].map(s => (
                <Badge key={s} variant="secondary" className="bg-secondary text-secondary-foreground">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            title="Operations"
            icon={Wrench}
            description="Strategic project management and technical documentation."
          >
            <div className="flex flex-wrap gap-2">
              {['Agile/Scrum', 'CI/CD Pipelines', 'Technical Writing', 'Stakeholder Mgmt', 'Jira'].map(s => (
                <Badge key={s} variant="secondary" className="bg-secondary text-secondary-foreground">{s}</Badge>
              ))}
            </div>
          </BentoCard>
        </div>
      </Section>

      {/* Experience Section */}
      {/* Experience Section */}
      <Section id="experience" title="Professional Experience">
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            {
              role: "Founder & Technical Lead",
              company: "BallyBots | Livermore, CA",
              period: "Jan 2024 – Aug 2025",
              image: "/images/ballybots.jpeg", // Path to image
              icon: UserCheck, // Fallback component
              url: "https://ballybots.com",
              points: [
                "Developed scalable robotics education frameworks for edge-AI systems",
                "Engineered robust ESP32-based hardware with integrated sensor arrays",
                "Led technical diagnostics and performance benchmarking for prototype units",
                "Maintained exceptional service standards with high resolution metrics"
              ]
            },
            {
              role: "Systems Engineer",
              company: "Vanet Inc. | Rancho Santa Margarita, CA",
              period: "Jul 2023 – Jan 2024",
              image: "/image/vanet.png",
              icon: Building2,
              url: "https://www.vanetusa.com/",
              points: [
                "Optimized next-generation network infrastructure using prototype protocols",
                "Reduced system latency by 30% through targeted kernel optimizations",
                "Developed automated testing suites for network performance validation",
                "Managed complex hardware debugging using industry-standard tools"
              ]
            },
            {
              role: "Junior Systems Engineer",
              company: "Saffron Rose Corp | Livermore, CA",
              period: "Feb 2021 – Jan 2022",
              image: "/image/saffron.png",
              icon: Briefcase,
              url: "javascript:void(0)",
              points: [
                "Implemented computer vision systems for quality control and analysis",
                "Built custom lightfield capture solutions using high-precision automation",
                "Leveraged machine learning models to improve identification accuracy by 80%"
              ]
            },
            {
              role: "Programming Instructor",
              company: "The Coder School | San Ramon, CA",
              period: "Aug 2020 – Jul 2023",
              image: "/images/TheCoderSchool.jpeg",
              icon: Briefcase,
              url: "https://thecoderschool.com",
              points: [
                "Instructed K-12 students in Python, Java, C++, and Unity, focusing on CS fundamentals",
                "Authored specialized curricula for game design, web dev, and robotics programs",
                "Delivered 3+ years of technical support and application troubleshooting for staff",
                "Managed custom Windows deployment images and hardware maintenance for 3D printers",
              ]
            }
          ].map((exp, i) => {
            const IconComponent = exp.icon;

            return (
              <div
                key={i}
                className="relative flex gap-6 group p-4 rounded-2xl transition-all hover:bg-muted/40"
              >
                {/* Timeline Decoration */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center group-hover:border-primary transition-all overflow-hidden shrink-0 relative">

                    {/* Fallback Icon (Behind the image) */}
                    <span className="absolute inset-0 flex items-center justify-center text-primary w-6 h-6 m-auto">
                      <IconComponent />
                    </span>

                    {/* Company Image (On top) */}
                    {exp.image && (
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="absolute inset-0 w-full h-full object-cover z-10 bg-card"
                        onError={(e) => {
                          // This hides the image if it fails to load
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                  <div className="flex-1 w-px bg-border my-2 group-last:hidden" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <a
                        href={exp.url}
                        // Only open a new tab if it's a real external link
                        target={exp.url.startsWith('http') ? "_blank" : "_self"}
                        rel={exp.url.startsWith('http') ? "noopener noreferrer" : ""}
                        className="after:absolute after:inset-0 focus:outline-none"
                      >
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                      </a>
                    </div>
                    <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/5 rounded-full z-10">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-primary font-medium mb-4">{exp.company}</p>

                  <ul className="space-y-2 relative z-10">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Projects Section */}
      {/* Projects Section */}
      <Section id="projects" title="Technical Projects" subtitle="Scalable solutions in robotics, vision systems, and network engineering.">
        {(() => {
          const [showAll, setShowAll] = React.useState(false);

          const allProjects = [
            {
              title: "3D Reconstruction Engine",
              tag: "Python / Data",
              desc: "Enhanced SLAM-based 3D reconstruction pipelines for specialized hardware environments, optimizing point cloud data accuracy.",
              icon: Database,
              href: "https://www.youtube.com/watch?v=29UQXbXoMCk"
            },
            {
              title: "Perspective Warping System",
              tag: "OpenCV / Systems",
              desc: "Real-time head tracking implementation for adaptive perspective rendering in high-performance browser environments.",
              icon: UserCheck,
              href: "https://github.com/williamsokol/HeadTrackingInGodotHTML5"
            },
            {
              title: "Core Mathematics Library",
              tag: "Algorithm Design",
              desc: "Developed a comprehensive tensor processing library from scratch for browser-side neural network implementation.",
              icon: Layers,
              href: "https://github.com/williamsokol/NN"
            },
            // Add more projects here as needed
            {
              title: "BallyBots Robotics Kit",
              tag: "ESP32 / IoT",
              desc: "Low-cost robotics education platform with real-time video streaming and edge-AI capabilities for STEM learning.",
              icon: Cpu,
              href: "https://ballybots.com"
            },
            {
              title: "WiFi 7 Mesh Network",
              tag: "Linux Kernel / Networking",
              desc: "Custom kernel modules for WiFi 7 mesh networks achieving 30% latency reduction through protocol optimization.",
              icon: Network,
              href: "#"
            }
          ];

          return (
            <>
              <style>{`
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allProjects.slice(0, 4).map((project, i) => (
                  <div
                    key={i}
                    className="group glass p-8 rounded-2xl border-border hover:border-primary/20 transition-all"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="font-sans text-xs">{project.tag}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {project.desc}
                    </p>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="group/btn text-primary hover:text-primary hover:bg-primary/5 p-0"
                    >
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        View Repository
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>

              {/* Expandable extra projects with animation */}
              <div
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{
                  maxHeight: showAll ? '2000px' : '0px'
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {allProjects.slice(3).map((project, i) => (
                    <div
                      key={i + 3}
                      className="group glass p-8 rounded-2xl border-border hover:border-primary/20 transition-all"
                      style={{
                        animation: showAll ? `fadeIn 0.6s ease-out ${i * 0.15}s forwards` : 'none'
                      }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                          <project.icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="outline" className="font-sans text-xs">{project.tag}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                        {project.desc}
                      </p>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="group/btn text-primary hover:text-primary hover:bg-primary/5 p-0"
                      >
                        <a href={project.href} target="_blank" rel="noopener noreferrer">
                          View Repository
                          <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {allProjects.length > 3 && (
                <div className="flex justify-center mt-12 transition-all duration-500">
                  <Button
                    onClick={() => setShowAll(!showAll)}
                    variant="outline"
                    size="lg"
                    className="border-border hover:border-primary transition-all group"
                  >
                    {showAll ? 'Show Less' : `Show More Projects (${allProjects.length - 3} more)`}
                    <ChevronRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`} />
                  </Button>
                </div>
              )}
            </>
          );
        })()}
      </Section>

      {/* Contact Section */}
      {/* Contact Section */}
      <Section id="contact" title="Get in Touch" subtitle="Available for consultations on IT infrastructure and enterprise systems development.">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl border-border space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                <Building2 className="w-5 h-5 text-primary" />
                Professional Education
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-lg">Systems Infrastructure Program</div>
                  <div className="text-primary font-medium">NPower | Aug 2025 – Dec 2025</div>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Advanced technical certification track specializing in Microsoft Azure architecture,
                    CompTIA infrastructure standards, and enterprise IT management.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border-border space-y-6">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                Communication
              </h3>
              <div className="space-y-4">
                <a href="mailto:williamsokol0@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  williamsokol0@gmail.com
                </a>
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  (408) 990-6034
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border-border">
            <form
              action="https://formspree.io/f/mvzakgyq"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-secondary/50 border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-secondary/50 border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Work Email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                <input
                  name="subject"
                  type="text"
                  required
                  className="w-full bg-secondary/50 border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors text-sm"
                  placeholder="Inquiry Subject"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-secondary/50 border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors text-sm h-32"
                  placeholder="How can I assist you?"
                />
              </div>

              {/* Hidden field to set email subject */}
              <input type="hidden" name="_subject" value="New contact form submission from portfolio" />

              {/* Optional: Redirect after submission */}
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 py-6">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-border relative overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground">William Sokol</span>
            <span className="opacity-50">| Infrastructure & Security Professional</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/in/william-sokol-56040790/" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2 font-medium">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/williamsokol" className="hover:text-primary transition-colors flex items-center gap-2 font-medium">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
