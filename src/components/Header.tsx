import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    // { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 
        glass-panel rounded-full px-6 py-2.5 flex justify-between items-center 
        transition-all duration-300"
      >
        {/* Logo */}
        <h1
          className="flex items-center gap-2 text-xl font-bold tracking-tight cursor-pointer group"
          onClick={handleNavigate}
        >
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-extrabold transition-all group-hover:opacity-85">
            Anish.dev
          </span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 items-center text-sm font-medium">
          <nav className="flex gap-1 items-center mr-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-1.5 rounded-full transition-colors duration-300 ${isActive(link.to)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.to) && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-slate-900/[0.04] dark:bg-white/[0.08] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:scale-105 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-slate-600 dark:text-slate-300 active:scale-95"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {theme === "dark" ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Nav Actions */}
        <div className="flex md:hidden items-center gap-2">
          {/* Dark Mode Toggle for Mobile Nav Bar */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-slate-950/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: "100%", opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-20 right-4 h-[calc(100vh-6rem)] w-64 
                glass-panel rounded-3xl z-40 px-6 py-8 md:hidden"
            >
              <nav className="flex flex-col gap-3 text-base font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-4 py-2.5 rounded-xl transition-all ${isActive(link.to)
                        ? "text-blue-600 dark:text-blue-400 bg-slate-900/[0.04] dark:bg-white/[0.06]"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
