"use client"

import { useState, useEffect } from "react"
import { OpalLogo } from "./opal-logo"
import { Button } from "./ui/button"

const navItems = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre Nós" },
  { id: "services", label: "Serviços" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <OpalLogo />

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-primary hover:underline cursor-pointer ${
                activeSection === item.id ? "text-primary border-b-2 border-accent pb-1" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        
      </nav>
    </header>
  )
}