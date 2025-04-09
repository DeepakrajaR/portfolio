"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function BackgroundElements() {
  const { theme } = useTheme()
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    setMounted(true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  // Calculate parallax positions based on scroll
  const parallaxSlow = scrollY * 0.02
  const parallaxMedium = scrollY * 0.05
  const parallaxFast = scrollY * 0.08

  return (
    <>
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Large circle - top right */}
      <div
        className="fixed -top-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#3A5199] opacity-[0.03] dark:opacity-[0.05] blur-3xl pointer-events-none z-0"
        style={{
          transform: `translateY(${parallaxSlow}px)`,
        }}
      />

      {/* Medium circle - bottom left */}
      <div
        className="fixed -bottom-[5%] -left-[5%] w-[30vw] h-[30vw] rounded-full bg-[#3A5199] opacity-[0.04] dark:opacity-[0.06] blur-2xl pointer-events-none z-0"
        style={{
          transform: `translateY(${-parallaxMedium}px)`,
        }}
      />

      {/* Small circle - mid right */}
      <div
        className="fixed top-[40%] -right-[5%] w-[15vw] h-[15vw] rounded-full bg-[#3A5199] opacity-[0.03] dark:opacity-[0.05] blur-xl pointer-events-none z-0"
        style={{
          transform: `translateY(${-parallaxFast}px)`,
        }}
      />

      {/* Code bracket SVG - top left */}
      <div
        className="fixed top-[15%] left-[5%] w-[10vw] h-[10vw] opacity-[0.04] dark:opacity-[0.06] pointer-events-none z-0 hidden md:block"
        style={{
          transform: `translateY(${parallaxMedium}px) rotate(${parallaxSlow}deg)`,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme === "dark" ? "#A0B1E9" : "#3A5199"}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </div>

      {/* Data flow SVG - bottom right */}
      <div
        className="fixed bottom-[20%] right-[10%] w-[12vw] h-[12vw] opacity-[0.04] dark:opacity-[0.06] pointer-events-none z-0 hidden md:block"
        style={{
          transform: `translateY(${-parallaxFast}px)`,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme === "dark" ? "#A0B1E9" : "#3A5199"}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
          <line x1="2" y1="20" x2="2" y2="20"></line>
        </svg>
      </div>

      {/* AI/ML node SVG - mid left */}
      <div
        className="fixed top-[60%] left-[8%] w-[8vw] h-[8vw] opacity-[0.04] dark:opacity-[0.06] pointer-events-none z-0 hidden md:block"
        style={{
          transform: `translateY(${parallaxSlow}px) rotate(${-parallaxMedium * 0.2}deg)`,
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme === "dark" ? "#A0B1E9" : "#3A5199"}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      </div>

      {/* Floating dots pattern - scattered */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#3A5199] opacity-[0.1] dark:opacity-[0.15]"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${
                i % 2 === 0 ? parallaxSlow * (i % 5) * 0.1 : -parallaxMedium * (i % 3) * 0.1
              }px)`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay that changes with scroll */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          background: `linear-gradient(${scrollY * 0.05}deg, rgba(58, 81, 153, 0.1), rgba(106, 129, 201, 0.1), rgba(58, 81, 153, 0.1))`,
        }}
      />
    </>
  )
}
