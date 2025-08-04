import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { getItem, setItem } from "../utils/localStorage";

type Theme = "theme1" | "theme2" | "theme3";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
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
  const [theme, setTheme] = useState<Theme>("theme1");

  useEffect(() => {
    const storedTheme = getItem<Theme>("theme");
    if (storedTheme === "theme1" || storedTheme === "theme2" || storedTheme === "theme3") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    setItem("theme", theme);
    document.documentElement.className = "";
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
