"use client";
import { useState, useEffect } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved !== "light";
    setIsDark(dark);
    document.body.classList.toggle("light-mode", !dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.toggle("light-mode", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return { isDark, toggleTheme };
}
