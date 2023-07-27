"use client"
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";


export function ToggleDark() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <>
      <button
      className="w-16 h-8 px-1 flex items-center justify-start dark:justify-end rounded-full dark:bg-zinc-600 bg-zinc-800"
        
        onClick={handleToggle}
      >
        <div
          className=
          {"w-6 h-6 rounded-full bg-zinc-400 shadow-md flex items-center justify-center"}
        >
          {isDarkMode ? <Sun className="text-zinc-50 w-4 h-4" /> : <Moon className="text-zinc-50 w-4 h-4" />}
        </div>
      </button>
    </>
  );
}