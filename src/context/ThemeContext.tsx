import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { getItem, setItem } from "../utils/localStorage";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Dark by default
  const [theme, setTheme] = useState<Theme>("dark");

  // Load saved theme if available
  useEffect(() => {
    const storedTheme = getItem<Theme>("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
  }, []);

  // Apply theme & save to localStorage
  useEffect(() => {
    setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
