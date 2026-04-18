"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { WhyChooseUs } from "@/components/why-choose-us"
import Footer from "@/components/footer"     // ПРАВИЛЬНО
import { useEffect } from "react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
