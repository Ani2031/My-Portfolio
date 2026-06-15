import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  ExternalLink, 
  X, 
  MessageSquare, 
  ShoppingCart, 
  Layers, 
  LayoutDashboard, 
  Image, 
  ArrowRight, 
  Sparkles,
  Zap,
  Code
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "frontend" | "fullstack";
  desc: string;
  tech: string[];
  features: string[];
  challenge: string;
  demoUrl: string;
  codeUrl: string;
  mockupType: "chat" | "ecommerce" | "theme" | "dashboard" | "ai" | "portfolio";
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "frontend" | "fullstack">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsData: Project[] = [
    {
      id: 1,
      title: "Real-Time Chat App",
      category: "fullstack",
      desc: "A real-time communication platform utilizing WebSockets for instant message delivery, multimedia sharing, and room management.",
      tech: ["React.js", "Socket.IO", "Node.js", "Express", "Tailwind CSS"],
      features: [
        "Instant two-way message synchronization via WebSockets",
        "Public and private channels with customizable settings",
        "User presence status (online, offline, typing indicators)",
        "Image and file attachments via cloud storage integrations"
      ],
      challenge: "Achieving sub-10ms synchronization for concurrent connections and managing connection state drops gracefully.",
      demoUrl: "https://github.com/Ani2031",
      codeUrl: "https://github.com/Ani2031",
      mockupType: "chat"
    },
    {
      id: 2,
      title: "E-Commerce Marketplace",
      category: "fullstack",
      desc: "A high-performance online marketplace featuring secure payment gateways, user accounts, and dynamic admin inventory tracking.",
      tech: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "MUI"],
      features: [
        "Secure user authentication using JWT and Google OAuth",
        "Interactive product catalog with faceted tag search and filters",
        "Full cart management with offline local storage persistence",
        "Integrated payment gateways using Stripe sandbox APIs"
      ],
      challenge: "Implementing atomic inventory updates during peak checkout simulations to prevent overselling.",
      demoUrl: "https://github.com/Ani2031",
      codeUrl: "https://github.com/Ani2031",
      mockupType: "ecommerce"
    },
    {
      id: 3,
      title: "Premium Theme Switcher",
      category: "frontend",
      desc: "A responsive website demonstrating multi-theme styling patterns using CSS custom properties, LocalStorage, and Framer Motion.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      features: [
        "Smooth page color transitions using custom CSS transitions",
        "Automatic system theme preference sensing",
        "Multiple design system configurations (Slate, Velvet, Emerald)",
        "Fully accessible visual contrasts matching WCAG compliance"
      ],
      challenge: "Eliminating light-mode flash on hard page reloads when resolving client-side preferences.",
      demoUrl: "https://github.com/Ani2031",
      codeUrl: "https://github.com/Ani2031",
      mockupType: "theme"
    },
    {
      id: 4,
      title: "Task Management Board",
      category: "frontend",
      desc: "A digital workspace featuring drag-and-drop workflow status boards, team notifications, and interactive productivity metrics.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Fluid drag-and-drop column transitions using Framer Motion",
        "Dynamic task priorities, tag search, and filters",
        "Activity audit logs for task transitions",
        "Interactive metrics display showing task velocities"
      ],
      challenge: "Optimizing state updates during fast drag operations on items in dense columns to avoid layout stutter.",
      demoUrl: "https://github.com/Ani2031",
      codeUrl: "https://github.com/Ani2031",
      mockupType: "dashboard"
    },
    {
      id: 5,
      title: "AI Image Studio",
      category: "fullstack",
      desc: "A platform interface that processes descriptive text prompts to construct high-fidelity generated images via AI model APIs.",
      tech: ["React.js", "Redux", "Express", "OpenAI API", "Tailwind CSS"],
      features: [
        "Text-to-image prompt optimization utilizing LLM suggestions",
        "Responsive, paginated image grid highlighting prompt logs",
        "Downloadable assets with metadata overlay tags",
        "Reliable queuing states using skeleton cards"
      ],
      challenge: "Configuring a stable loading placeholder flow during backend image generation without UI locks.",
      demoUrl: "https://github.com/Ani2031",
      codeUrl: "https://github.com/Ani2031",
      mockupType: "ai"
    },
    {
      id: 6,
      title: "Premium Developer Portfolio",
      category: "frontend",
      desc: "A state-of-the-art developer portfolio featuring customized glassmorphism styling, a floating navbar, and rich fluid animations.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      features: [
        "Dynamic dark/light mode toggle with localized state",
        "Floating navigation bar with spring active indicator pills",
        "Google Gemini-style rotating multi-layered background aura",
        "Fully responsive structures supporting both mobile and ultra-wide screens"
      ],
      challenge: "Balancing complex background animations and filter rendering to guarantee fluid 60fps performance on mobile devices.",
      demoUrl: "https://github.com/Ani2031",
      codeUrl: "https://github.com/Ani2031",
      mockupType: "portfolio"
    }
  ];

  const filteredProjects = projectsData.filter(proj => 
    filter === "all" || proj.category === filter
  );

  // Render CSS Mockup graphics depending on the project type
  const renderMockup = (type: string) => {
    switch (type) {
      case "chat":
        return (
          <div className="w-full h-full bg-slate-950/90 dark:bg-slate-950/80 rounded-t-2xl p-4 flex flex-col justify-between border-b border-slate-200/50 dark:border-white/[0.04] overflow-hidden relative group">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[10px] text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Socket Active</span>
              </div>
              <span>#general</span>
            </div>
            {/* Messages */}
            <div className="flex flex-col gap-2.5 my-3 text-[10px] text-left">
              <div className="bg-white/10 dark:bg-white/[0.04] rounded-lg p-2 max-w-[80%] border border-white/[0.05] self-start transform transition-transform group-hover:translate-x-1 duration-300">
                <span className="text-[9px] text-indigo-400 block font-semibold">UserA</span>
                Is the Socket connection synchronized?
              </div>
              <div className="bg-blue-600 rounded-lg p-2 max-w-[80%] self-end text-white text-right transform transition-transform group-hover:-translate-x-1 duration-300">
                <span className="text-[9px] text-blue-200 block font-semibold">You</span>
                Yes, sub-10ms latency configured! 🚀
              </div>
            </div>
            {/* Input Mockup */}
            <div className="flex gap-1.5 pt-1.5 border-t border-white/[0.06]">
              <div className="flex-1 bg-white/5 dark:bg-white/[0.02] border border-white/[0.08] rounded-md h-6 px-2 flex items-center text-[9px] text-slate-500">
                Type a message...
              </div>
              <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
                <MessageSquare size={10} />
              </div>
            </div>
          </div>
        );
      case "ecommerce":
        return (
          <div className="w-full h-full bg-slate-950/90 dark:bg-slate-950/80 rounded-t-2xl p-4 flex flex-col justify-between border-b border-slate-200/50 dark:border-white/[0.04] overflow-hidden relative group">
            {/* Header */}
            <div className="flex justify-between items-center pb-2 border-b border-white/[0.06]">
              <span className="text-[10px] text-slate-400 font-mono">AnishShop</span>
              <div className="relative p-1 bg-white/10 dark:bg-white/[0.06] rounded-md text-blue-400 group-hover:scale-110 transition-transform">
                <ShoppingCart size={11} />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-600 text-[8px] text-white rounded-full flex items-center justify-center font-bold animate-bounce">1</span>
              </div>
            </div>
            {/* Product Item */}
            <div className="flex gap-3 my-2 items-center bg-white/5 dark:bg-white/[0.02] p-2 rounded-xl border border-white/[0.05]">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-blue-500/10">
                Watch
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-bold text-white leading-tight">Smart Watch Pro</h4>
                <p className="text-[9px] text-emerald-400 font-mono font-bold">$199.00</p>
              </div>
            </div>
            {/* Checkout CTA */}
            <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center text-[9px] font-bold shadow-md shadow-blue-500/10 group-hover:brightness-110 transition-all">
              Proceed to Stripe Checkout
            </div>
          </div>
        );
      case "theme":
        return (
          <div className="w-full h-full rounded-t-2xl p-4 flex flex-col justify-between border-b border-slate-200/50 dark:border-white/[0.04] overflow-hidden relative transition-all duration-700 bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900 group">
            {/* Sun/Moon Orbit graphic */}
            <div className="flex justify-between items-center border-b border-slate-300 dark:border-white/[0.06] pb-2 text-[10px]">
              <span className="text-slate-700 dark:text-slate-300 font-mono">Theme Engine</span>
              <span className="px-2 py-0.5 rounded-full text-[8px] bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-300 font-bold uppercase tracking-wider">
                Dynamic
              </span>
            </div>
            <div className="my-auto flex justify-center items-center gap-6 relative py-2">
              <div className="w-10 h-10 rounded-full bg-amber-400 shadow-md shadow-amber-400/20 dark:opacity-0 dark:scale-50 transition-all duration-500 flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
              <div className="absolute w-10 h-10 rounded-full bg-indigo-900 opacity-0 scale-50 dark:opacity-100 dark:scale-100 transition-all duration-500 flex items-center justify-center text-white border border-indigo-500/30">
                <Layers size={16} />
              </div>
              <div className="text-left text-[10px] text-slate-700 dark:text-slate-300">
                <p className="font-bold">Active Theme</p>
                <p className="font-mono text-[9px] text-blue-600 dark:text-blue-400">
                  light-mode / dark-mode
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between gap-2">
              <div className="flex-1 h-3 rounded bg-slate-300 dark:bg-slate-800" />
              <div className="w-8 h-3 rounded bg-blue-600" />
            </div>
          </div>
        );
      case "dashboard":
        return (
          <div className="w-full h-full bg-slate-950/90 dark:bg-slate-950/80 rounded-t-2xl p-4 flex flex-col justify-between border-b border-slate-200/50 dark:border-white/[0.04] overflow-hidden relative group">
            {/* Header */}
            <div className="flex justify-between items-center pb-2 border-b border-white/[0.06] text-[10px] text-slate-400">
              <span className="font-mono">Metrics Board</span>
              <LayoutDashboard size={10} />
            </div>
            {/* Columns */}
            <div className="grid grid-cols-3 gap-2 my-2.5">
              <div className="bg-white/5 dark:bg-white/[0.02] border border-white/[0.06] rounded-lg p-1.5">
                <span className="text-[7px] text-slate-500 block uppercase font-bold">To Do</span>
                <div className="h-5 rounded bg-white/10 dark:bg-white/[0.04] my-1" />
              </div>
              <div className="bg-white/5 dark:bg-white/[0.02] border border-white/[0.06] rounded-lg p-1.5 relative overflow-hidden">
                <span className="text-[7px] text-blue-400 block uppercase font-bold">Progress</span>
                <div className="h-5 rounded bg-blue-600/20 border border-blue-500/30 my-1 animate-pulse" />
              </div>
              <div className="bg-white/5 dark:bg-white/[0.02] border border-white/[0.06] rounded-lg p-1.5">
                <span className="text-[7px] text-emerald-400 block uppercase font-bold">Done</span>
                <div className="h-5 rounded bg-emerald-500/20 border border-emerald-500/30 my-1 transform transition-transform group-hover:-translate-y-0.5 duration-300" />
              </div>
            </div>
            {/* Footer Charts */}
            <div className="flex items-end justify-between h-5 gap-1 border-t border-white/[0.06] pt-1">
              <div className="w-full bg-blue-500/40 rounded-t h-2 animate-bounce" />
              <div className="w-full bg-indigo-500/40 rounded-t h-3" />
              <div className="w-full bg-purple-500/60 rounded-t h-4" />
              <div className="w-full bg-blue-600 rounded-t h-5" />
            </div>
          </div>
        );
      case "ai":
        return (
          <div className="w-full h-full bg-slate-950/90 dark:bg-slate-950/80 rounded-t-2xl p-4 flex flex-col justify-between border-b border-slate-200/50 dark:border-white/[0.04] overflow-hidden relative group">
            {/* Text prompt */}
            <div className="bg-white/5 dark:bg-white/[0.02] border border-white/[0.08] rounded-xl p-2 text-left font-mono text-[8px] text-slate-300 relative">
              <span className="text-[7px] text-indigo-400 block">OpenAI Prompt</span>
              /imagine cyberpunk metropolis...
              <div className="absolute right-2 top-2 text-indigo-400">
                <Sparkles size={8} className="animate-spin-slow" />
              </div>
            </div>
            {/* Generating visual grid */}
            <div className="grid grid-cols-2 gap-1.5 my-2">
              <div className="h-10 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-blue-500/20 flex items-center justify-center animate-pulse">
                <Image size={12} className="text-blue-400" />
              </div>
              <div className="h-10 rounded-lg bg-gradient-to-tr from-purple-500/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-radial-gradient blur-xs animate-spin-slow" />
                <Sparkles size={12} className="text-purple-400 relative z-10 animate-bounce" />
              </div>
            </div>
            {/* Status bar */}
            <div className="w-full h-1 bg-white/10 dark:bg-white/[0.06] rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
            </div>
          </div>
        );
      case "portfolio":
        return (
          <div className="w-full h-full bg-slate-950/90 dark:bg-slate-950/80 rounded-t-2xl p-4 flex flex-col justify-between border-b border-slate-200/50 dark:border-white/[0.04] overflow-hidden relative group">
            {/* Browser window top bar */}
            <div className="flex gap-1.5 items-center pb-2 border-b border-white/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[8px] text-slate-500 ml-2 font-mono">anish.dev</span>
            </div>
            {/* Content mockup */}
            <div className="my-auto py-1 relative flex items-center justify-center">
              {/* Mini Gemini Aura */}
              <div className="absolute w-12 h-12 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-md animate-pulse-slow" />
              <div className="relative text-center text-white">
                <h4 className="text-[10px] font-extrabold tracking-tight scale-90 group-hover:scale-100 transition-transform">
                  Hi, I’m <span className="text-blue-400">Anish</span>
                </h4>
                <p className="text-[7px] text-slate-400">React.js Developer</p>
              </div>
            </div>
            {/* Floating cards */}
            <div className="flex justify-between items-center text-[7px] text-slate-500 bg-white/5 dark:bg-white/[0.02] border border-white/[0.08] p-1 rounded-md">
              <span>Home</span>
              <span className="text-blue-400 font-bold">Projects</span>
              <span>Skills</span>
              <span>About</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-grid-pattern transition-colors duration-500 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      {/* Decorative Radial Grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-4 uppercase tracking-wider shadow-sm"
          >
            <Zap size={12} className="animate-bounce" />
            <span>Showcase Portfolio</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-extrabold">Projects</span>
          </motion.h1>
          
          <motion.p 
            className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            An overview of client work, product designs, and interactive web applications I have built.
          </motion.p>
          <div className="h-1 w-12 rounded bg-blue-600 mt-4" />
        </div>

        {/* Category Filters */}
        <motion.div 
          className="flex justify-center items-center gap-2 mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {(["all", "frontend", "fullstack"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-300 outline-none ${
                filter === cat
                  ? "text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {filter === cat && (
                <motion.span
                  layoutId="active-filter-pill"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer border border-slate-200/80 dark:border-white/[0.06] hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-300 relative shadow-sm"
                onClick={() => setSelectedProject(proj)}
              >
                {/* Visual Mockup Header Container */}
                <div className="w-full h-40 bg-slate-900 overflow-hidden relative">
                  {renderMockup(proj.mockupType)}
                </div>

                {/* Info Content */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-2.5">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {proj.title}
                      </h3>
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20">
                        {proj.category}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-6 line-clamp-2">
                      {proj.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tech.slice(0, 3).map((t, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/[0.04]"
                        >
                          {t}
                        </span>
                      ))}
                      {proj.tech.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-slate-200/50 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                          +{proj.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Details CTA */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 group-hover:translate-x-1 transition-all">
                      <span>View Details</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Project Details Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/60 dark:bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl flex flex-col"
            >
              {/* Top Graphic Header */}
              <div className="w-full h-44 bg-slate-900 relative">
                {renderMockup(selectedProject.mockupType)}
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 border border-white/10 text-white hover:bg-slate-900 hover:scale-105 transition-all shadow-md outline-none"
                  aria-label="Close details"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 text-left flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {selectedProject.desc}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Code size={13} className="text-blue-500" />
                      <span>Key Features</span>
                    </h4>
                    <ul className="grid gap-2 text-xs text-slate-600 dark:text-slate-300">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Engineering Challenge */}
                  <div className="mb-6 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-white/[0.04] p-4 rounded-2xl">
                    <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles size={13} />
                      <span>Key Challenge Solved</span>
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
                      Built With
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/10"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2"
                  >
                    <Github size={14} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Projects;
