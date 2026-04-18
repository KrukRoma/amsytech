"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const check = () => setShowScroll(window.scrollY > 300)
    check()
    window.addEventListener("scroll", check)
    return () => window.removeEventListener("scroll", check)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
        aria-label="Перемкнути тему"
        suppressHydrationWarning
      >
        <Sun className="h-6 w-6 text-foreground dark:hidden" />
        <Moon className="h-6 w-6 text-foreground hidden dark:block" />
      </button>

      <button
        onClick={scrollToTop}
        style={{ opacity: showScroll ? 1 : 0, pointerEvents: showScroll ? "auto" : "none" }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-opacity duration-300 cursor-pointer"
        aria-label="Підняти догори"
        suppressHydrationWarning
      >
        <ArrowUp className="h-6 w-6 text-foreground" />
      </button>
    </>
  )
}
