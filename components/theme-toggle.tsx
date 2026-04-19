"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, ArrowUp } from "lucide-react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    const css = document.createElement("style")
    css.id = "theme-transition"
    css.textContent = `
      *, *::before, *::after {
        transition: background-color 0.4s ease, border-color 0.4s ease, color 0.4s ease, opacity 0.4s ease !important;
      }
      img {
        transition: opacity 0.4s ease, filter 0.4s ease !important;
      }
    `
    document.head.appendChild(css)
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
    setTimeout(() => {
      const el = document.getElementById("theme-transition")
      if (el) el.remove()
    }, 500)
  }

  return (
    <>
      <style>{`
        @keyframes show-on-scroll {
          from { opacity: 0; visibility: hidden; pointer-events: none; }
          to   { opacity: 1; visibility: visible; pointer-events: auto; }
        }
        .scroll-btn {
          animation: show-on-scroll linear both;
          animation-timeline: scroll();
          animation-range: 300px 301px;
        }
      `}</style>

      <button
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
        aria-label="Перемкнути тему"
        suppressHydrationWarning
      >
        <Sun className="h-6 w-6 text-foreground dark:hidden" />
        <Moon className="h-6 w-6 text-foreground hidden dark:block" />
      </button>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll-btn fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:scale-110 cursor-pointer"
        aria-label="Підняти догори"
        suppressHydrationWarning
      >
        <ArrowUp className="h-6 w-6 text-foreground" />
      </button>
    </>
  )
}