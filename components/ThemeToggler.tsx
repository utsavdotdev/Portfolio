"use client";   
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Use useEffect to handle mounting state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Return null until component is mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Use resolvedTheme which accounts for system preference
  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <>
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-12 w-20 items-center rounded-full bg-gray-300 p-1 transition-colors duration-300 dark:bg-[#141414] border border-gray-400/10"
        aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
      >
        <span
          className={`${
            currentTheme === "dark"
              ? "translate-x-8 bg-gray-950"
              : "translate-x-0 bg-white"
          } flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-in-out`}
        >
          {currentTheme === "dark" ? (
            <Moon size={20} className="text-yellow-200" />
          ) : (
            <Sun size={20} className="text-yellow-500" />
          )}
        </span>
      </button>
    </>
  );
};

export default ThemeToggler;
