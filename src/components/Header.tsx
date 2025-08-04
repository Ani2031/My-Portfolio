import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import { Paintbrush, Menu, X } from "lucide-react";
import webLogo from "../assets/webLogo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const themes = [
  {
    id: "theme1",
    name: "Minimalist",
    color: "bg-white text-black",
    preview: "bg-gray-100 border border-gray-300",
  },
  {
    id: "theme2",
    name: "Dark + Sidebar",
    color: "bg-gray-900 text-white",
    preview: "bg-gray-800 border border-gray-600",
  },
  {
    id: "theme3",
    name: "Colorful Cards",
    color:
      "bg-gradient-to-br from-yellow-300 to-pink-400 text-purple-900 font-bold",
    preview: "bg-gradient-to-br from-yellow-300 to-pink-400",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false); // Close sidebar on route change
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 border-b transition-colors 
          ${
            theme === "theme1"
              ? "bg-white text-gray-800 border-gray-200"
              : theme === "theme2"
              ? "bg-gray-900 text-white border-gray-700"
              : "bg-gradient-to-br from-yellow-300 to-pink-400 text-purple-900 border-pink-300"
          }
        `}
      >
        <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
          <img
            src={webLogo}
            alt="ShopNow Logo"
            className="w-9 h-9 object-cover rounded-full shadow"
          />
          <span className="drop-shadow-sm">ShopNow</span>
        </h1>

        {/* Nav or Sidebar Toggle */}
        {theme === "theme2" ? (
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-full hover:scale-110 transition-transform bg-gray-700 text-white"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        ) : (
          <div className="flex gap-4 items-center text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                  isActive(link.to)
                    ? theme === "theme3"
                      ? "bg-white text-purple-900"
                      : "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Theme Switcher */}
        <div className="relative">
          <button
            onClick={() => setShowSwitcher(!showSwitcher)}
            className={`p-2 rounded-full hover:scale-110 transition-transform ml-2
              ${
                theme === "theme1"
                  ? "bg-gray-200 text-gray-800"
                  : theme === "theme2"
                  ? "bg-gray-700 text-white"
                  : "bg-white text-purple-900"
              }
            `}
          >
            <Paintbrush size={20} />
          </button>

          <AnimatePresence>
            {showSwitcher && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`absolute right-0 mt-4 w-72 shadow-xl rounded-lg p-4 z-50 transition-all 
                  ${
                    theme === "theme1"
                      ? "bg-white text-gray-800"
                      : theme === "theme2"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-purple-900 border border-yellow-400"
                  }
                `}
              >
                <h3 className="text-lg font-semibold mb-2">Choose Theme</h3>
                <div className="grid grid-cols-1 gap-4">
                  {themes.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id as any);
                        setShowSwitcher(false);
                      }}
                      className={`flex items-center gap-4 p-3 rounded-md cursor-pointer transition-all 
                        ${
                          theme === t.id
                            ? "ring-2 ring-blue-500"
                            : "hover:ring-1 hover:ring-gray-400"
                        }
                      `}
                    >
                      <div className={`w-12 h-12 rounded-md ${t.preview}`} />
                      <span className={`font-medium`}>{t.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Sidebar for Theme 2 */}
      <AnimatePresence>
        {theme === "theme2" && sidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-16 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-40 px-6 py-8"
          >
            <nav className="flex flex-col gap-4 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md transition-all ${
                    isActive(link.to) ? "bg-gray-700" : "hover:bg-gray-700/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
