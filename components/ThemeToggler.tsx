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
        className="relative inline-flex h-12 w-20 items-center rounded-full bg-gray-300 p-1 transition-colors duration-300 dark:bg-[#232323] border border-gray-400 dark:border-[#343434]"
        aria-label={`Switch to ${
          currentTheme === "light" ? "dark" : "light"
        } mode`}
      >
        <span
          className={`${
            currentTheme === "dark" ? "translate-x-8" : "translate-x-0"
          } flex h-10 w-10 items-center justify-center rounded-full shadow-md transition-transform  bg-neutral-950 duration-300 ease-in-out border border-gray-400/10`}
        >
          {currentTheme === "dark" ? (
            <Moon size={20} className="text-yellow-200" />
          ) : (
            <Sun size={20} className="text-yellow-200" />
          )}
        </span>
      </button>
    </>
  );
};

export default ThemeToggler;
