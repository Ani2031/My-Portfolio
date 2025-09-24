import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import webLogo from "../assets/webLogo.svg";
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
    // { label: "Projects", to: "/projects" },
    { label: "Skills", to: "/skills" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 
        border-b bg-white text-gray-800 dark:bg-gray-900 dark:text-white dark:border-gray-700 
        border-gray-200 transition-colors"
      >
        {/* Logo */}
        <h1
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight cursor-pointer"
          onClick={handleNavigate}
        >
          <span className="drop-shadow-sm">My Portfolio</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                isActive(link.to)
                  ? "bg-gray-200 dark:bg-gray-700"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:scale-110 transition-transform 
              bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-2 rounded-full hover:scale-110 transition-transform 
            bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-16 right-0 h-full w-64 
              bg-white dark:bg-gray-900 text-gray-800 dark:text-white 
              shadow-lg z-40 px-6 py-8"
          >
            <nav className="flex flex-col gap-4 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md transition-all ${
                    isActive(link.to)
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Dark Mode Toggle in Sidebar */}
              <button
                onClick={toggleTheme}
                className="mt-6 flex items-center gap-2 px-3 py-2 rounded-md 
                  bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
