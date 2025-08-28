"use client"

import { OpalLogo } from "./opal-logo"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog"


const quickLinks = [
  { label: "Início", href: "#home" },
  { label: "Sobre Nós", href: "#about" },
  { label: "Serviços", href: "#services" },
]

export function Footer() {
  const [showPrivacyPolicyModal, setShowPrivacyPolicyModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [privacyPolicyContent, setPrivacyPolicyContent] = useState("")
  const [termsContent, setTermsContent] = useState("")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const fetchContent = async (url: string, setContent: (content: string) => void) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const text = await response.text()
      setContent(text)
    } catch (error) {
      console.error("Failed to fetch content:", error)
      setContent("<p>Erro ao carregar o conteúdo.</p>")
    }
  }

  useEffect(() => {
    if (showPrivacyPolicyModal && !privacyPolicyContent) {
      fetchContent("/docs/politicas.html", setPrivacyPolicyContent)
    }
  }, [showPrivacyPolicyModal, privacyPolicyContent])

  useEffect(() => {
    if (showTermsModal && !termsContent) {
      fetchContent("/docs/termos.html", setTermsContent)
    }
  }, [showTermsModal, termsContent])

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div>
            <OpalLogo className="mb-4 [&>div>span]:text-primary-foreground" />
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformando negócios através de soluções inovadoras de IA e tecnologias de automação inteligente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:underline cursor-pointer transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Address */}
          <div>
            <h4 className="font-semibold mb-4">Informações de Contato</h4>
            <address className="text-primary-foreground/80 not-italic leading-relaxed">
              Rua Leonor Calmon, 44
              <br />
              Cidade Jardim - 40296-210
              <br />
              Bahia, Brasil
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">© 2025 opalBYTES. Todos os direitos reservados.</p>

          <div className="flex gap-6 text-sm">
            <button
              onClick={() => setShowPrivacyPolicyModal(true)}
              className="text-primary-foreground/80 hover:text-primary-foreground hover:underline cursor-pointer transition-colors"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => setShowTermsModal(true)}
              className="text-primary-foreground/80 hover:text-primary-foreground hover:underline cursor-pointer transition-colors"
            >
              Termos e Condições
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Dialog open={showPrivacyPolicyModal} onOpenChange={setShowPrivacyPolicyModal}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Política de Privacidade</DialogTitle>
            <DialogDescription>
              Leia nossa política de privacidade para entender como lidamos com seus dados.
            </DialogDescription>
          </DialogHeader>
          <div dangerouslySetInnerHTML={{ __html: privacyPolicyContent }} />
        </DialogContent>
      </Dialog>

      {/* Terms and Conditions Modal */}
      <Dialog open={showTermsModal} onOpenChange={setShowTermsModal}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Termos e Condições</DialogTitle>
            <DialogDescription>
              Leia nossos termos e condições de uso.
            </DialogDescription>
          </DialogHeader>
          <div dangerouslySetInnerHTML={{ __html: termsContent }} />
        </DialogContent>
      </Dialog>
    </footer>
  )
}
