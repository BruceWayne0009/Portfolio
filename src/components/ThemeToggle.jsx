import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const cn = (...classes) => classes.filter(Boolean).join(' ');

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      if (storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-6 right-6 max-sm:hidden z-50 p-3 rounded-full transition-all duration-300 group",
        "bg-background/90 backdrop-blur-md border border-border/50 shadow-lg",
        "hover:shadow-xl hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-primary/20"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={cn(
            "absolute inset-0 transition-all duration-500 text-yellow-500",
            "group-hover:text-yellow-400 group-hover:rotate-90",
            isDarkMode 
              ? "opacity-0 rotate-90 scale-50" 
              : "opacity-100 rotate-0 scale-100"
          )}
        />
        <Moon 
          className={cn(
            "absolute inset-0 transition-all duration-500 text-blue-500",
            "group-hover:text-blue-400 group-hover:-rotate-12",
            isDarkMode 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-90 scale-50"
          )}
        />
      </div>

      {/* Glow effect */}
      <div className={cn(
        "absolute inset-0 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100",
        isDarkMode 
          ? "bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.5)]" 
          : "bg-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.5)]"
      )}></div>
    </button>
  );
};