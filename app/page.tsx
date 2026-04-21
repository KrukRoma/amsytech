import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Services } from "@/components/services"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Services />
      <Footer />
      <ThemeToggle />
    </main>
  )
}