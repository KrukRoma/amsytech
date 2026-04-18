"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

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

  const goToProduct = (productId: string) => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString())
    window.location.href = `/products/${productId}`
  }

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        const pos = sessionStorage.getItem("scrollPosition")
        if (pos && window.location.pathname === "/") {
          window.scrollTo(0, parseInt(pos))
          sessionStorage.removeItem("scrollPosition")
        }
      }
    }

    const pos = sessionStorage.getItem("scrollPosition")
    if (pos && window.location.pathname === "/") {
      window.scrollTo(0, parseInt(pos))
      sessionStorage.removeItem("scrollPosition")
    }

    window.addEventListener("pageshow", handlePageShow)
    return () => window.removeEventListener("pageshow", handlePageShow)
  }, [])

  return (
    <footer id="contact" className="bg-background border-t border-border h-30 flex items-center justify-center">
      <p className="text-center text-base text-muted-foreground">© 2026 AMSYTECH. Всі права захищені</p>
    </footer>
  )
}