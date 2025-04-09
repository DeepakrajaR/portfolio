"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  name: string
  role: string
  summary: string
}

export default function HeroSection({ name, role, summary }: HeroSectionProps) {
  // State to control animation visibility
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animation on component mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#364573] to-[#1A2F6F] dark:from-[#2A3F7F] dark:to-[#0A1F5F] -z-10" />

      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content with fade-in animation */}
          <div
            className={`space-y-8 text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-white/80">{role}</h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">{name}</h1>
            </div>

            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">{summary}</p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#364573] hover:bg-white/90 px-8 text-lg font-medium"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <a className="flex items-center gap-2">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-[#364573] bg-white hover:bg-white/90 hover:text-[#364573] px-8 text-lg font-medium"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <a>Contact Me</a>
              </Button>
            </div>
          </div>

          {/* Profile Image with animation */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-float">
              <Image src="/placeholder.svg?height=400&width=400" alt={name} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
