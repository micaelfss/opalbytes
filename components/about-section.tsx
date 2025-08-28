"use client"

import { Card, CardContent } from "./ui/card"
import { CheckCircle } from "lucide-react"

const differentiators = [
  "Sistemas sob medida projetados para suas necessidades específicas",
  "Segurança e escalabilidade de nível empresarial",
  "Metodologias ágeis para desenvolvimento rápido",
  "Equipe multidisciplinar de especialistas",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Sobre a opalBYTES</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Somos uma empresa de tecnologia especializada no desenvolvimento de soluções inovadoras que integram
            inteligência artificial, automação e análise avançada para transformar como as empresas operam na era
            digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Por que Escolher a opalBYTES?</h3>
            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-card-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-primary mb-4">Nossa Missão</h4>
              <p className="text-card-foreground leading-relaxed mb-6">
                Capacitar empresas com soluções tecnológicas inteligentes que impulsionam eficiência, inovação e
                crescimento sustentável em um mundo cada vez mais digital.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">20</div>
                  <div className="text-sm text-muted-foreground">Projetos Entregues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação do Cliente</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
