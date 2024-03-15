import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "./components/theme-provider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/index.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="default" storageKey="portfolio-vinicius-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
