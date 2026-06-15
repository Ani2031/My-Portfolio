import React from "react";
import { Github, Linkedin, Mail, ArrowRight, Sparkles, MessageSquare, ShoppingCart, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiSocketdotio,
} from "react-icons/si";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const renderMockup = (type: string) => {
    switch (type) {
      case "chat":
        return (
          <div className="w-full h-full bg-slate-950/90 dark:bg-slate-950/80 rounded-t-2xl p-4 flex flex-col justify-between border-b border-slate-200/50 dark:border-white/[0.04] overflow-hidden relative group">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[10px] text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Socket Active</span>
              </div>
              <span>#general</span>
            </div>
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
            <div className="flex justify-between items-center pb-2 border-b border-white/[0.06]">
              <span className="text-[10px] text-slate-400 font-mono">AnishShop</span>
              <div className="relative p-1 bg-white/10 dark:bg-white/[0.06] rounded-md text-blue-400 group-hover:scale-110 transition-transform">
                <ShoppingCart size={11} />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-600 text-[8px] text-white rounded-full flex items-center justify-center font-bold animate-bounce">1</span>
              </div>
            </div>
            <div className="flex gap-3 my-2 items-center bg-white/5 dark:bg-white/[0.02] p-2 rounded-xl border border-white/[0.05]">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-blue-500/10">
                Watch
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-bold text-white leading-tight">Smart Watch Pro</h4>
                <p className="text-[9px] text-emerald-400 font-mono font-bold">$199.00</p>
              </div>
            </div>
            <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center text-[9px] font-bold shadow-md shadow-blue-500/10 group-hover:brightness-110 transition-all">
              Proceed to Stripe Checkout
            </div>
          </div>
        );
      case "theme":
        return (
          <div className="w-full h-full rounded-t-2xl p-4 flex flex-col justify-between border-b border-slate-200/50 dark:border-white/[0.04] overflow-hidden relative transition-all duration-700 bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900 group">
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
      default:
        return null;
    }
  };

  const skills = [
    { name: "React", icon: <SiReact className="text-sky-500" />, glow: "hover:shadow-sky-500/10 hover:border-sky-500/30" },
    { name: "Redux", icon: <SiRedux className="text-purple-600" />, glow: "hover:shadow-purple-500/10 hover:border-purple-500/30" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, glow: "hover:shadow-blue-500/10 hover:border-blue-500/30" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, glow: "hover:shadow-sky-400/10 hover:border-sky-400/30" },
    { name: "MUI", icon: <SiMui className="text-blue-500" />, glow: "hover:shadow-blue-500/10 hover:border-blue-500/30" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-violet-600" />, glow: "hover:shadow-violet-500/10 hover:border-violet-500/30" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, glow: "hover:shadow-yellow-500/10 hover:border-yellow-500/30" },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-600" />, glow: "hover:shadow-orange-500/10 hover:border-orange-500/30" },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" />, glow: "hover:shadow-blue-500/10 hover:border-blue-500/30" },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" />,
      glow: "hover:shadow-green-500/10 hover:border-green-500/30"
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      glow: "hover:shadow-gray-500/10 hover:border-gray-500/30"
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-500" />,
      glow: "hover:shadow-blue-500/10 hover:border-blue-500/30"
    },
    {
      name: "Sequelize",
      icon: <SiSequelize className="text-cyan-500" />,
      glow: "hover:shadow-cyan-500/10 hover:border-cyan-500/30"
    },
    {
      name: "Socket.IO",
      icon: <SiSocketdotio />,
      glow: "hover:shadow-white/10 hover:border-white/30"
    }
  ];

  return (
    <main
      className="relative min-h-screen w-full px-6 pt-32 pb-20 overflow-hidden bg-grid-pattern transition-colors duration-500 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text"
    >
      {/* Decorative Radial Gradient Background */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        {/* Gemini-style Light Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[700px] h-[400px] pointer-events-none -z-10 select-none overflow-visible opacity-80 dark:opacity-90">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-purple-500/20 to-pink-500/25 dark:from-blue-500/30 dark:via-purple-500/25 dark:to-pink-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
          <div className="absolute inset-10 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-orange-500/20 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full blur-[90px] md:blur-[130px] animate-float" />
          <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-emerald-500/10 dark:from-cyan-500/15 dark:via-blue-500/10 dark:to-emerald-500/10 rounded-full blur-[100px] md:blur-[140px] animate-spin-slow opacity-60" />
        </div>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent font-extrabold">
            Anish, a Software Developer.
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 transition-all inline-flex items-center justify-center gap-2 group"
          >
            <span>Explore Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/40 backdrop-blur-sm hover:bg-slate-100 dark:hover:bg-slate-900 hover:scale-[1.02] active:scale-[0.98] transition-all text-slate-700 dark:text-slate-300 inline-flex items-center justify-center gap-2"
          >
            <Sparkles size={18} className="text-indigo-500" />
            <span>More About Me</span>
          </Link>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto mb-28 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">My Tech Stack</h2>
          <div className="h-1 w-12 rounded bg-blue-600" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl glass-panel glass-panel-hover cursor-default border border-slate-200/50 dark:border-white/[0.04] ${skill.glow}`}
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto mb-28 relative z-10 scroll-mt-24">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
          <div className="h-1 w-12 rounded bg-blue-600" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Real-Time Chat Platform",
              desc: "Real-time messaging application with Socket.IO, media sharing, group conversations, notifications and optimized communication.",
              tech: [
                "React",
                "Node.js",
                "Socket.IO",
                "PostgreSQL",
              ],
              mockupType: "chat",
            },
            {
              title: "E-Commerce Platform",
              desc: "Full-stack e-commerce application with authentication, cart management, API integration and secure user workflows.",
              tech: [
                "React",
                "Express",
                "PostgreSQL",
                "JWT",
              ],
              mockupType: "ecommerce",
            },
            {
              title: "Multi Theme Application",
              desc: "Dynamic theme-switching application with persistent settings, reusable components and smooth animations.",
              tech: [
                "React",
                "TypeScript",
                "Tailwind",
                "Framer Motion",
              ],
              mockupType: "theme",
            },
          ].map((proj, i) => (
            <Link
              key={i}
              to="/projects"
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-300 relative shadow-sm border border-slate-200/80 dark:border-white/[0.06]"
            >
              {/* Visual Mockup Header Container */}
              {/* <div className="w-full h-40 bg-slate-900 overflow-hidden relative">
                {renderMockup(proj.mockupType)}
              </div> */}

              {/* Info Content */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-lg font-bold mb-2.5 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-6 line-clamp-2">
                    {proj.desc}
                  </p>
                </div>
                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/[0.04]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* View Details CTA */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <span>View Details</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA to Projects Page */}
        <div className="flex justify-center mt-12">
          <Link
            to="/projects"
            className="px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-500/10 hover:shadow-blue-500/25 transition-all inline-flex items-center gap-2 group"
          >
            <span>Explore All Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto text-center relative z-10 pt-8">
        <div className="glass-panel rounded-3xl p-10 md:p-12 relative overflow-hidden">
          {/* subtle decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/5 blur-2xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 dark:bg-purple-500/5 blur-2xl rounded-full" />

          <h2 className="text-3xl font-bold mb-4 tracking-tight">Let’s Connect</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Interested in collaborating on a project or exploring new employment opportunities? I’m always open to discussing new ideas.
          </p>

          <div className="flex justify-center items-center gap-4">
            <a
              href="https://github.com/Ani2031"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glass-panel hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/anish-prajapati-9a794b218/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glass-panel hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anishprajapati731@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glass-panel hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
