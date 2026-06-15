import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

export default function AppRoutes() {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors duration-500 ease-in-out ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <Header />
        <Routes>
           <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
