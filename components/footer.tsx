import type React from "react"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { SiKaggle } from "react-icons/si" 

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright information */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Deepakraja Rajendran. All rights reserved.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex space-x-6 mb-6 md:mb-0">
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social media icons */}
          <div className="flex space-x-4">
            <Link
              href="https://github.com/deepakrajaR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/deepakraja-rajendran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.kaggle.com/deepakrajar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
              aria-label="Kaggle Profile"
            >
              <SiKaggle className="h-10 w-10" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Custom Kaggle icon component
function KaggleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17.5 12.5L12 18l-5.5-5.5" />
      <path d="M12 18V6" />
    </svg>
  )
}
