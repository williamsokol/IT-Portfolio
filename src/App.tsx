import React from 'react';
import { 
  Terminal, 
  Cpu, 
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
  Bot
} from 'lucide-react';
import { Section, BentoCard } from './components/layout-utils';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

function App() {
  return (
    <div className="min-h-screen scanline relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono font-bold text-xl">
            <Terminal className="w-6 h-6 text-primary" />
            <span>WS<span className="text-primary">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono">
            <a href="#about" className="hover:text-primary transition-colors">/about</a>
            <a href="#skills" className="hover:text-primary transition-colors">/skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">/experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">/projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">/contact</a>
          </div>
          <Button variant="outline" size="sm" className="font-mono border-primary/20 hover:border-primary">
            Resume.pdf
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="home" className="pt-40 md:pt-56">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1 font-mono">
                System Status: Online
              </Badge>
              <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter leading-tight">
                William Sokol<br />
                <span className="text-gradient">IT Support Specialist</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                Adept at diagnosing intricate hardware/software issues with expertise in 
                <span className="text-foreground"> embedded systems</span>, 
                <span className="text-foreground"> networking</span>, and 
                <span className="text-foreground"> enterprise IT</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono group">
                Connect
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-4 px-4">
                <a href="https://www.linkedin.com/in/william-sokol-56040790/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:williamsokol0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
            <div className="glass rounded-2xl p-8 h-full flex flex-col justify-between border-white/5 relative z-10 animate-float">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <Badge variant="outline" className="font-mono text-[10px] opacity-50">kernel_v6.8.0-40</Badge>
              </div>
              <div className="font-mono text-sm space-y-3 opacity-80 overflow-hidden">
                <p className="text-primary">$ whoami</p>
                <p>william_sokol</p>
                <p className="text-primary">$ ls skills/</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <p>• embedded_linux</p>
                  <p>• networking_cfg</p>
                  <p>• hardware_debug</p>
                  <p>• enterprise_support</p>
                </div>
                <p className="text-primary">$ status --it-support</p>
                <p className="text-green-500">[SUCCESS] 90% resolution_rate</p>
                <p className="text-primary">$ fetch certifications</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-white/10 text-[10px]">CompTIA Tech+</Badge>
                  <Badge className="bg-white/10 text-[10px]">Azure Fund.</Badge>
                  <Badge className="bg-white/10 text-[10px]">Google IT</Badge>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Systems Load</p>
                    <p className="text-sm font-mono">OPTIMAL</p>
                  </div>
                </div>
                <Monitor className="w-8 h-8 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="skills & certifications" subtitle="Technical arsenal for enterprise IT and hardware-software integration.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BentoCard 
            title="Infrastructure" 
            icon={Monitor} 
            description="Enterprise level support and management."
          >
            <div className="flex flex-wrap gap-2">
              {['Windows/Linux', 'Active Directory', 'Azure', 'macOS', 'Cli/Bash'].map(s => (
                <Badge key={s} variant="secondary" className="bg-white/5 hover:bg-white/10">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard 
            title="Embedded Systems" 
            icon={Cpu} 
            description="Hardware-software integration and low-level protocols."
          >
            <div className="flex flex-wrap gap-2">
              {['Arduino', 'ESP32', 'UART/SPI/I2C', 'PCB Testing', 'Embedded Linux'].map(s => (
                <Badge key={s} variant="secondary" className="bg-white/5 hover:bg-white/10">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard 
            title="Programming" 
            icon={Code2} 
            description="Full-stack and automation capabilities."
          >
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'C++', 'Node.js', 'SQL', 'C#', 'R'].map(s => (
                <Badge key={s} variant="secondary" className="bg-white/5 hover:bg-white/10">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard 
            title="Networking" 
            icon={Network} 
            description="Advanced network configuration and optimization."
          >
            <div className="flex flex-wrap gap-2">
              {['WiFi 7', 'Router Optimization', 'Kernel Modules', 'Protocols', 'WPA_Supplicant'].map(s => (
                <Badge key={s} variant="secondary" className="bg-white/5 hover:bg-white/10">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard 
            title="Cybersecurity" 
            icon={ShieldCheck} 
            description="Google Cybersecurity & Azure Fundamentals certified."
          >
            <div className="flex flex-wrap gap-2">
              {['CompTIA Tech+', 'Google IT Support', 'Azure Fundamentals', 'Google Cybersecurity'].map(s => (
                <Badge key={s} variant="secondary" className="bg-white/5 hover:bg-white/10">{s}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard 
            title="Tools & Soft Skills" 
            icon={Wrench} 
            description="Agile collaboration and technical writing."
          >
            <div className="flex flex-wrap gap-2">
              {['Git/GitLab', 'Docker', 'Jira', 'EasyEDA', 'Technical Writing', 'Comm.'].map(s => (
                <Badge key={s} variant="secondary" className="bg-white/5 hover:bg-white/10">{s}</Badge>
              ))}
            </div>
          </BentoCard>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="professional experience">
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          
          {/* BallyBots */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background group-hover:bg-primary transition-colors absolute left-0 md:left-1/2 md:-ml-5">
              <Bot className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border-white/5 group-hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between mb-1">
                <div className="font-bold text-lg">Founder & Developer</div>
                <time className="font-mono text-sm text-primary">Jan 2024 – Aug 2025</time>
              </div>
              <div className="text-primary font-mono text-sm mb-4">BallyBots | Livermore, CA</div>
              <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                <li>Created low-cost Robotics education kit introducing edge-AI & real-time video streaming</li>
                <li>Engineered ESP32-based robot with sensor/motor integration and UART, SPI, USB protocols</li>
                <li>Tested prototype PCBs using multimeters, power supplies, and traffic generators</li>
                <li>Achieved 90% first-contact resolution rate in customer service</li>
              </ul>
            </div>
          </div>

          {/* Vanet Inc */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background group-hover:bg-primary transition-colors absolute left-0 md:left-1/2 md:-ml-5">
              <Network className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border-white/5 group-hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between mb-1">
                <div className="font-bold text-lg">Systems Engineer</div>
                <time className="font-mono text-sm text-primary">Jul 2023 – Jan 2024</time>
              </div>
              <div className="text-primary font-mono text-sm mb-4">Vanet Inc. | Rancho Santa Margarita, CA</div>
              <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                <li>Configured and optimized WiFi 7 routers with prototype routing protocols</li>
                <li>Designed custom kernel modules reducing latency by 30%</li>
                <li>Wrote Bash test scripts to validate software performance across WiFi networks</li>
                <li>Debugged WiFi scanning programs using WPA_Supplicant and netfilter modules</li>
              </ul>
            </div>
          </div>

          {/* Saffron Rose */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background group-hover:bg-primary transition-colors absolute left-0 md:left-1/2 md:-ml-5">
              <Layers className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border-white/5 group-hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between mb-1">
                <div className="font-bold text-lg">Junior Engineer</div>
                <time className="font-mono text-sm text-primary">Feb 2021 – Jan 2022</time>
              </div>
              <div className="text-primary font-mono text-sm mb-4">Saffron Rose Corp | Livermore, CA</div>
              <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                <li>Imaging & analysis of saffron flowers using machine vision and color grading</li>
                <li>Created lightfield capture program using Python and GCode for 3D interpretations</li>
                <li>Trained Tensorflow neural network to identify saffron pistils with 80% accuracy</li>
              </ul>
            </div>
          </div>

          {/* The Coder School */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/50 bg-background group-hover:bg-primary transition-colors absolute left-0 md:left-1/2 md:-ml-5">
              <Terminal className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border-white/5 group-hover:border-primary/20 transition-all">
              <div className="flex items-center justify-between mb-1">
                <div className="font-bold text-lg">Programming Instructor</div>
                <time className="font-mono text-sm text-primary">Aug 2020 – Jul 2023</time>
              </div>
              <div className="text-primary font-mono text-sm mb-4">The Coder School | San Ramon, CA</div>
              <ul className="text-muted-foreground text-sm space-y-2 list-disc list-inside">
                <li>Taught Python, Java, C++, Unity, and Robotics to students aged 8-18</li>
                <li>Managed client services and technical support for students and instructors</li>
                <li>Created custom Windows .iso images and maintained 3D printers/computers</li>
              </ul>
            </div>
          </div>

        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="projects" subtitle="Recent explorations in robotics, neural networks, and computer vision.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl overflow-hidden group">
            <div className="h-48 bg-primary/5 flex items-center justify-center border-b border-white/5 overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-primary/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold font-mono tracking-tighter">SLAM3R 3D Reconstruction</h3>
                <Badge variant="outline" className="text-[10px] font-mono">Python</Badge>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Modified in-development Python repository to work with alternate hardware. 
                Fixed bugs and corrected data from libraries that convert images to accurate 3D point clouds.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="text-xs font-mono border-primary/20 group">
                  <Github className="w-3.5 h-3.5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl overflow-hidden group">
            <div className="h-48 bg-primary/5 flex items-center justify-center border-b border-white/5 overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-primary/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold font-mono tracking-tighter">Inbrowser Head Tracking</h3>
                <Badge variant="outline" className="text-[10px] font-mono">OpenCV / Godot</Badge>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Combined OpenCV webassembly with GDscript using Godot Game engine Javascript Bridge. 
                Implemented real-time head tracking for realistic perspective warping.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="text-xs font-mono border-primary/20 group">
                  <Github className="w-3.5 h-3.5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl overflow-hidden group">
            <div className="h-48 bg-primary/5 flex items-center justify-center border-b border-white/5 overflow-hidden">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-primary/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold font-mono tracking-tighter">XOR BackProp NN</h3>
                <Badge variant="outline" className="text-[10px] font-mono">Vanilla JS</Badge>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Built a Deep Neural Network from vanilla JavaScript to run in browser. 
                Created custom tensor math library with gradient descent & backpropagation algorithms.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="text-xs font-mono border-primary/20 group">
                  <Github className="w-3.5 h-3.5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Education & Contact Section */}
      <Section id="contact" title="connect" subtitle="Let's discuss system infrastructure, embedded development, or IT solutions.">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-mono text-primary flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Education
              </h3>
              <div>
                <div className="font-bold text-lg">IT Support Specialist Program</div>
                <div className="text-primary font-mono text-sm">NPower | Aug 2025 – Dec 2025</div>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  300+ hours of hands-on technical training focused on CompTIA Tech+, Microsoft Azure, and Google IT Support.
                </p>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl border-white/5 space-y-6">
              <h3 className="text-xl font-bold font-mono text-primary flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Contact Info
              </h3>
              <div className="space-y-4">
                <a href="mailto:williamsokol0@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  williamsokol0@gmail.com
                </a>
                <div className="flex items-center gap-4 text-muted-foreground group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  (408) 990-6034
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  Livermore, CA
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl border-white/5">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">/name</label>
                <input className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary/50 transition-colors font-mono text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">/email</label>
                <input className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary/50 transition-colors font-mono text-sm" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">/message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-primary/50 transition-colors font-mono text-sm h-32" placeholder="Your message here..." />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono py-6">
                Send Transmission
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span>© 2026 William Sokol. All logs cleared.</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="https://www.linkedin.com/in/william-sokol-56040790/" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
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
