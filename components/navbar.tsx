"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const navRef = React.useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

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
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Логотип — лівий край */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
              <Image src="/AmsytechLogoImage.svg" alt="Amsytech Logo" width={40} height={40} className="object-contain" />
              <h1 className="text-4xl whitespace-nowrap font-style italic">
                <span style={{ fontStyle: "italic" }}>AMSYTECH</span>
              </h1>
            </div>

            {/* Пункти меню */}
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
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span
                  className="burger-line block h-0.5 w-full bg-foreground rounded-full origin-center"
                  style={{ transform: isMobileMenuOpen ? "translateY(9px) rotate(45deg)" : "none" }}
                />
                <span
                  className="burger-line block h-0.5 w-full bg-foreground rounded-full"
                  style={{ opacity: isMobileMenuOpen ? 0 : 1, transform: isMobileMenuOpen ? "scaleX(0)" : "scaleX(1)" }}
                />
                <span
                  className="burger-line block h-0.5 w-full bg-foreground rounded-full origin-center"
                  style={{ transform: isMobileMenuOpen ? "translateY(-9px) rotate(-45deg)" : "none" }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Мобільне випадаюче меню */}
        <div
          className={`mobile-menu${isMobileMenuOpen ? "" : " closing"} md:hidden bg-background border-t border-border overflow-hidden`}
          style={{ maxHeight: isMobileMenuOpen ? "400px" : "0px", opacity: isMobileMenuOpen ? 1 : 0 }}
        >
          <div className="px-6 py-6 space-y-4">
            {[
              { href: "#home", label: "Головна" },
              { href: "#destinations", label: "Продукти" },
              { href: "#about", label: "Про Нас" },
              { href: "#contact", label: "Послуги" },
            ].map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className="mobile-menu-item block text-base font-medium text-foreground/70 hover:text-foreground"
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
                  transitionDelay: isMobileMenuOpen ? `${0.08 + i * 0.06}s` : "0s",
                }}
              >
                {item.label}
              </a>
            ))}
            <div
              className="mobile-menu-item"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
                transitionDelay: isMobileMenuOpen ? "0.32s" : "0s",
              }}
            >
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