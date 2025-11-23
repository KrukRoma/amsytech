"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function Hero() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  const scrollToProducts = () => {
    const element = document.querySelector("#destinations")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Знімок екрана 2025-11-10 о 20.37.51 копія.png"
            alt="Paradise destination"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance">
              Відкрий Своє Нове
              <span className="block font-semibold mt-2">Рішення</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Ми розробляємо сучасні системи керування та контролю, які роблять опалення зручнішим, економнішим і
              надійнішим.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base group"
                onClick={scrollToProducts}
              >
                Наші Продукти
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base border-2 bg-transparent"
                onClick={() => setIsContactDialogOpen(true)}
              >
                Звʼязатися з нами
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light">10+</div>
              <div className="text-sm text-muted-foreground">Років досвіду</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light">500+</div>
              <div className="text-sm text-muted-foreground">Проєктів</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-light">24/7</div>
              <div className="text-sm text-muted-foreground">Підтримка</div>
            </div>
          </div>
        </div>
      </section>

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
