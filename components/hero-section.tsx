"use client"

import { Button } from "./ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 text-balance">
            Transformando Negócios Através da
            <span className="text-primary block mt-2">Inovação em IA</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos sistemas sob medida com integração de IA de ponta, automação inteligente e análise preditiva
            para impulsionar sua transformação digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              Explore Nossos Serviços
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("about")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
            >
              Conheça-nos
            </Button>
          </div>
        </div>

        {/* Decorative geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45 rounded-lg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary/30 rotate-12 rounded-lg"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/10 rotate-45 rounded-lg"></div>
        </div>
      </div>
    </section>
  )
}
