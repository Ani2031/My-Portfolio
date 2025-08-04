import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeContext";

export default function AppRoutes() {
  const { theme } = useTheme();

  const themeClasses = {
    theme1: "bg-white text-gray-900",
    theme2: "bg-gray-900 text-white",
    theme3: "bg-blue-50 text-gray-800",
  };

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors duration-500 ease-in-out ${
          themeClasses[theme]
        }`}
      >
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
