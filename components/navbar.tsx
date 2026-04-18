"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

function useHasMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const hasMounted = useHasMounted()

  useEffect(() => {
    if (!hasMounted) return
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasMounted])

  const navClass = hasMounted
    ? isScrolled
      ? "bg-white/80 backdrop-blur-xl border-b border-border"
      : "bg-transparent"
    : "bg-white/80 backdrop-blur-xl border-b border-border"

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    if (targetId === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const el = document.querySelector(targetId)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Логотип — лівий край */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
              <Image src="/AmsytechLogoImage.svg" alt="Amsytech Logo" width={40} height={40} className="object-contain" />
              <h1 className="text-4xl whitespace-nowrap font-style italic">
                <span style={{ fontStyle: "italic" }}>AMSYTECH</span>
              </h1>
            </div>

            {/* Пункти меню — рівномірно між логотипом і кнопкою */}
            <div className="hidden md:flex flex-1 items-center justify-evenly">
              <a href="#home" onClick={(e) => smoothScroll(e, "#home")} className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                Головна
              </a>
              <a href="#destinations" onClick={(e) => smoothScroll(e, "#destinations")} className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                Продукти
              </a>
              <a href="#about" onClick={(e) => smoothScroll(e, "#about")} className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                Про Нас
              </a>
              <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")} className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap">
                Послуги
              </a>
            </div>

            {/* Кнопка — правий край */}
            <div className="hidden md:block flex-shrink-0">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 text-base whitespace-nowrap cursor-pointer"
                onClick={() => setIsContactDialogOpen(true)}
              >
                Звʼязатися
              </Button>
            </div>

            {/* Мобільне меню */}
            <button
              className="md:hidden relative w-6 h-6 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
                <span className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Мобільне випадаюче меню */}
        <div className={`md:hidden bg-white border-t border-border transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-6 py-6 space-y-4">
            <a href="#home" onClick={(e) => smoothScroll(e, "#home")} className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Головна
            </a>
            <a href="#destinations" onClick={(e) => smoothScroll(e, "#destinations")} className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Продукти
            </a>
            <a href="#about" onClick={(e) => smoothScroll(e, "#about")} className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Про Нас
            </a>
            <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")} className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Послуги
            </a>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full cursor-pointer"
              onClick={() => {
                setIsContactDialogOpen(true)
                setIsMobileMenuOpen(false)
              }}
            >
              Звʼязатися
            </Button>
          </div>
        </div>
      </nav>

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center space-y-2">
            <DialogTitle className="text-center">Контактна інформація</DialogTitle>
            <DialogDescription className="text-center">Звʼяжіться з нами будь-яким зручним способом</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4 text-center">
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <a href="mailto:amsytech@gmail.com" className="text-primary hover:underline">
                amsytech@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Телефон</h4>
              <a href="tel:+380969369572" className="text-primary hover:underline">
                +380 96 936 95 72
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Адреса</h4>
              <p className="text-sm text-muted-foreground">
                Україна, Рівне
                <br />
                Кулика і Гудачека 24
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { Navbar }