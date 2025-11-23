"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const smoothScroll = (targetId: string) => {
    const isProductPage = window.location.pathname.startsWith("/products/")

    if (isProductPage) {
      window.location.href = `/${targetId}`
    } else {
      if (targetId === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        const element = document.querySelector(targetId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }
  }

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.location.href = "/"
    }
  }

  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
              <Image src="/5425129490188724738 копія.jpg" alt="Amsytech Logo" width={40} height={40} className="object-contain" />
              <h3 className="text-2xl font-semibold">Amsytech</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Інженерні рішення для безпечного та ефективного опалення
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4">Продукти</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/products/pulti-keruvannya" className="hover:text-foreground transition-colors">
                  Пульти керування котлами
                </Link>
              </li>
              <li>
                <Link href="/products/datchiki-temperaturi" className="hover:text-foreground transition-colors">
                  Датчики температури
                </Link>
              </li>
              <li>
                <Link href="/products/avarijni-termostati" className="hover:text-foreground transition-colors">
                  Аварійні термостати
                </Link>
              </li>
              <li>
                <Link href="/products/tajmeri-opalennya" className="hover:text-foreground transition-colors">
                  Таймери для опалення
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компанія</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("#home")
                  }}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Головна
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("#destinations")
                  }}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Продукти
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("#about")
                  }}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Про нас
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScroll("#contact")
                  }}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Контакти
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Контакти</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:amsytech@gmail.com" className="hover:text-foreground transition-colors">
                  amsytech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+380969369572" className="hover:text-foreground transition-colors">
                  +380 96 936 95 72
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Україна, Рівне
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Кулика і Гудачека 24
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Amsytech. Всі права захищені</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
