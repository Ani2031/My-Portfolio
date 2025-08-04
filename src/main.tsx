import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./router/index";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
