import { useEffect, useMemo, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("pulsegrid-theme") : null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      return;
    }

    if (typeof window !== "undefined") {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      setTheme(prefersLight ? "light" : "dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pulsegrid-theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const palette = useMemo(
    () => ({
      page: theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-slate-900",
      muted: theme === "dark" ? "text-slate-300" : "text-slate-600",
      subtle: theme === "dark" ? "text-slate-400" : "text-slate-500",
      card:
        theme === "dark"
          ? "bg-slate-900 border border-slate-800"
          : "bg-white border border-slate-200",
      softCard:
        theme === "dark"
          ? "bg-slate-900/70 border border-slate-800"
          : "bg-slate-50 border border-slate-200",
      heroPanel:
        theme === "dark"
          ? "bg-slate-900/80 border border-slate-800"
          : "bg-slate-50 border border-slate-200",
      nav:
        theme === "dark"
          ? "bg-slate-950/85 border-slate-800"
          : "bg-white/85 border-slate-200",
      buttonPrimary:
        theme === "dark"
          ? "bg-white text-slate-950 hover:bg-slate-200"
          : "bg-slate-950 text-white hover:bg-slate-800",
      buttonSecondary:
        theme === "dark"
          ? "border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white"
          : "border border-slate-300 bg-white hover:bg-slate-100 text-slate-900",
      accent: theme === "dark" ? "bg-sky-400" : "bg-sky-500",
      accentText: theme === "dark" ? "text-sky-300" : "text-sky-600",
      sectionTint: theme === "dark" ? "bg-slate-900/40" : "bg-slate-50",
      heroGlowA: theme === "dark" ? "bg-sky-400/20" : "bg-sky-500/15",
      heroGlowB: theme === "dark" ? "bg-fuchsia-400/15" : "bg-indigo-400/10",
    }),
    [theme]
  );

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, palette, toggleTheme };
}
