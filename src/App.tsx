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
  Lock,
  Globe,
  Globe2,
  GlobeLock,
  Globe2Icon,
  Gamepad2,
  Heart
} from 'lucide-react';
import { Section, BentoCard } from './components/layout-utils';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Youtube } from 'lucide-react';
import { Cpu } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Global } from 'recharts';
import { skillsData } from './data/skills-data';
import { projectsData } from './data/projects-data';
import { motion, AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-sans font-bold text-xl">
            <Globe className="w-6 h-6 text-primary" />
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
            <a href={`${import.meta.env.BASE_URL}Documents/William_Sokol_Resume.pdf`} download="William_Sokol_Resume.pdf">
              Download CV
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="home" className="pt-32 md:pt-38 pb-20">
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
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
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
      <Section id="skills" title="Skills & Certifications" subtitle="Core competencies in enterprise-grade IT infrastructure and systems integration.">
        {(() => {
          const [expandedCard, setExpandedCard] = React.useState<string | null>(null);
          const [clickedPosition, setClickedPosition] = React.useState({ x: 0, y: 0 });

          const handleCardClick = (key: string, event: React.MouseEvent) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setClickedPosition({ x: rect.left, y: rect.top });
            setExpandedCard(key);
          };

          return (
            <>
              <AnimatePresence>
                {expandedCard && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="fixed inset-0 bg-black/50 z-40"
                      onClick={() => setExpandedCard(null)}
                    />

                    {/* Expanded content - centered */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
                      <motion.div
                        layoutId={`card-${expandedCard}`}
                        className="pointer-events-auto max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                      >
                        <button
                          onClick={() => setExpandedCard(null)}
                          className="absolute top-0 right-0 text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-4 z-10"
                        >
                          <span className="text-sm font-medium">Close</span>
                          <ChevronRight className="w-5 h-5 rotate-90" />
                        </button>

                        <div className="glass p-8 rounded-2xl border-border">
                          <motion.div
                            className="flex items-center gap-4 mb-8"
                            layoutId={`header-${expandedCard}`}
                          >
                            <motion.div
                              className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center"
                              layoutId={`icon-${expandedCard}`}
                            >
                              {React.createElement(skillsData[expandedCard].icon, { className: "w-8 h-8 text-primary" })}
                            </motion.div>
                            <div>
                              <motion.h3
                                className="text-3xl font-bold"
                                layoutId={`title-${expandedCard}`}
                              >
                                {skillsData[expandedCard].title}
                              </motion.h3>
                              <motion.p
                                className="text-muted-foreground"
                                layoutId={`description-${expandedCard}`}
                              >
                                {skillsData[expandedCard].description}
                              </motion.p>
                            </div>
                          </motion.div>

                          <motion.div
                            className="grid md:grid-cols-2 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            {skillsData[expandedCard].skills.map((skill, i) => (
                              <motion.div
                                key={i}
                                layoutId={`skill-${expandedCard}-${skill.name}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                                className="flex gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                              >
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between gap-2">
                                    <h4 className="font-bold text-lg mb-1">{skill.name}</h4>
                                    {skill.url && (
                                      <a
                                        href={skill.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                      </a>
                                    )}
                                  </div>
                                  <motion.p
                                    className="text-sm text-muted-foreground leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                                  >
                                    {skill.detail}
                                  </motion.p>
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </AnimatePresence>

              {/* Grid view */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillsData).map(([key, data]) => (
                  <motion.div
                    key={key}
                    layoutId={`card-${key}`}
                    onClick={(e) => handleCardClick(key, e)}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  >
                    <BentoCard
                      title={data.title}
                      icon={data.icon}
                      description={data.description}
                    >
                      <div className="flex flex-wrap gap-2">
                        {data.skills.map(skill => (
                          <motion.div
                            key={skill.name}
                            layoutId={`skill-${key}-${skill.name}`}
                          >
                            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                              {skill.name}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </BentoCard>
                  </motion.div>
                ))}
              </div>
            </>
          );
        })()}
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Experience">
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            {
              role: "Founder & Technical Lead",
              company: "BallyBots | Livermore, CA",
              period: "Jan 2024 – Aug 2025",
              image: `${import.meta.env.BASE_URL}/images/ballybots.jpeg`, // Path to image
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
              image: `${import.meta.env.BASE_URL}/images/TheCoderSchool.jpeg`,
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
      <Section id="projects" title="Technical Projects" subtitle="Scalable solutions in robotics, vision systems, and network engineering.">
        {(() => {
          const [showAll, setShowAll] = React.useState(false);

          // Helper function to render a project card to keep code DRY
          const renderProjectCard = (project, i, isAnimated = false) => (
            <a
              key={i}
              href={project.href}
              target={project.href?.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="glass rounded-2xl overflow-hidden group border border-white/5 hover:border-primary/40 hover:bg-white/[0.04] transition-all flex flex-col cursor-pointer no-underline"
              style={isAnimated ? { animation: `fadeIn 0.6s ease-out ${i * 0.1}s forwards` } : {}}
            >
              {/* Image Area with Blue Tint */}
              <div className="h-40 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Blue tint overlay */}
                <div className="absolute inset-0 bg-primary/50 mix-blend-multiply group-hover:bg-primary/10 transition-colors" />
                {/* Additional gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Visual indicator on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="text-white w-5 h-5 shadow-sm" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3 gap-2">
                  <h3 className="text-xl font-bold font-mono tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="text-[10px] font-mono border-primary/30 text-primary">
                    {project.tag}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-xs flex-1">
                  {project.desc}
                </p>

                {/* Keep the "View Project" link for accessibility/visual cue */}
                <div className="flex items-center text-primary font-bold text-xs group-hover:gap-2 transition-all">
                  View Project
                  <ExternalLink className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          );

          return (
            <>
              <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

              {/* First 4 Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.slice(0, 4).map((project, i) => renderProjectCard(project, i))}
              </div>

              {/* Expandable Section */}
              <div
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ maxHeight: showAll ? '2000px' : '0px' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {projectsData.slice(4).map((project, i) => renderProjectCard(project, i + 4, true))}
                </div>
              </div>

              {/* Show More Button */}
              {projectsData.length > 4 && (
                <div className="flex justify-center mt-12">
                  <Button
                    onClick={() => setShowAll(!showAll)}
                    variant="outline"
                    size="lg"
                    className="border-border hover:border-primary transition-all group"
                  >
                    {showAll ? 'Show Less' : `Show More Projects (${projectsData.length - 4} more)`}
                    <ChevronRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`} />
                  </Button>
                </div>
              )}
            </>
          );
        })()}
      </Section>

      {/* About Me Section */}
      <Section id="about" title="About Me" subtitle="A bridge between hardware, IT engineering, and education.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Professional Side */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ShieldCheck className="text-primary w-5 h-5" />
              Technical Foundation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With a background spanning from <strong>Linux kernel optimization</strong> to
              <strong> enterprise networking</strong>, I view IT as more than just support.
              It's the art of creating optimal paths for people to interact with technology.
              I specialize in building systems that are scalable, secure, and most importantly,
              <strong> usable</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach is rooted in <strong>proactive architecture</strong>: identifying
              bottlenecks before they become failures and documenting processes to ensure
              clear & operational continuity.
            </p>
          </div>

          {/* Personal/Personality Side */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Heart className="text-primary w-5 h-5" />
              The Human Element
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology is most powerful when it's accessible. This belief led me to create
              <strong> BallyBots </strong>, an initiative focused on lowering the barrier to entry
              for robotics and IoT education.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not in a rack or a terminal, you'll find me experimenting with
              <strong> Generation & Networking </strong> in Godot or exploring the intersection of
              AI and edge computing. I’m a lifelong tinkerer driven by the question:
              <em> "What is the coolest thing I can do with this technology?"</em>
            </p>
          </div>

        </div>
      </Section>

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
            <Globe className="w-4 h-4 text-primary" />
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
