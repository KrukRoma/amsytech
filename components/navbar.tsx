"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()

    const isProductPage = window.location.pathname.startsWith("/products/")

    if (isProductPage) {
      window.location.href = `/${targetId}`
    } else {
      if (targetId === "#packages" || targetId === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        const element = document.querySelector(targetId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }

    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.location.href = "/"
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
              <Image src="/5425129490188724738 копія.jpg" alt="Amsytech Logo" width={40} height={40} className="object-contain" />
              <h1 className="text-2xl font-semibold tracking-tight">Amsytech</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <a
                href="#packages"
                onClick={(e) => smoothScroll(e, "#packages")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Головна
              </a>
              <a
                href="#destinations"
                onClick={(e) => smoothScroll(e, "#destinations")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Продукти
              </a>

              <a
                href="#about"
                onClick={(e) => smoothScroll(e, "#about")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Про Нас
              </a>
              <a
                href="#contact"
                onClick={(e) => smoothScroll(e, "#contact")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Контакти
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
                onClick={() => setIsContactDialogOpen(true)}
              >
                Звʼязатися
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-6 h-6 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative w-6 h-6 flex flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 absolute top-1/2 left-0 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 absolute top-1/2 left-0 ${
                    isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-border transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            <a
              href="#packages"
              onClick={(e) => smoothScroll(e, "#packages")}
              className="block text-base font-medium text-foreground/70 hover:text-foreground"
            >
              Головна
            </a>
            <a
              href="#destinations"
              onClick={(e) => smoothScroll(e, "#destinations")}
              className="block text-base font-medium text-foreground/70 hover:text-foreground"
            >
              Продукти
            </a>

            <a
              href="#about"
              onClick={(e) => smoothScroll(e, "#about")}
              className="block text-base font-medium text-foreground/70 hover:text-foreground"
            >
              Про Нас
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, "#contact")}
              className="block text-base font-medium text-foreground/70 hover:text-foreground"
            >
              Контакти
            </a>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
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
