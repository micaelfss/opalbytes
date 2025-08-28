"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Brain, Zap, Settings, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Desenvolvimento com IA",
    description:
      "Aplicações web e mobile com capacidades de inteligência artificial integradas para experiências de usuário aprimoradas e automação inteligente.",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description:
      "Soluções avançadas de automação e análise preditiva que otimizam operações e fornecem insights acionáveis para o negócio.",
  },
  {
    icon: Settings,
    title: "Integrações Personalizadas",
    description:
      "Soluções de integração perfeitas para processos críticos de negócio, conectando seus sistemas existentes com capacidades modernas de IA.",
  },
  {
    icon: TrendingUp,
    title: "Transformação Digital",
    description:
      "Serviços abrangentes de consultoria e implementação para inovação tecnológica e estratégias completas de transformação digital.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Soluções tecnológicas abrangentes projetadas para acelerar o crescimento do seu negócio através de automação
            inteligente e integração de IA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground text-center leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4 text-balance">
                Mais que uma software house, somos parceiros estratégicos
              </h3>
              <p className="text-card-foreground leading-relaxed mb-6 text-pretty">
                Trabalhamos em estreita colaboração com sua equipe para entender seus desafios únicos e desenvolver
                soluções que não apenas atendem às suas necessidades atuais, mas também posicionam seu negócio para
                crescimento e inovação futuros.
              </p>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
