import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import { ContactForm } from "@/components/contact-form"
import Footer from "@/components/footer"
import SectionHeading from "@/components/section-heading"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Header with navigation and theme toggle */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <div className="text-xl font-semibold text-[#364573] dark:text-[#6A81C9]">
          <img
            src="https://raw.githubusercontent.com/DeepakrajaR/portfolio/main/public/placeholder-logo.png"
            alt="DR Logo"
            className="h-8 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-foreground/80 hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-foreground/80 hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-foreground/80 hover:text-[#364573] dark:hover:text-[#6A81C9] transition-colors"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          name="Deepakraja Rajendran"
          role="AI/ML Engineer"
          summary="Building intelligent systems that solve real-world problems through machine learning and artificial intelligence."
        />

        {/* About Section - Now before Projects */}
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title="About Me" />
              <div className="space-y-6 text-muted-foreground relative bg-background/50 dark:bg-background/30 p-6 rounded-lg shadow-sm">
                <p>
                  I'm an AI/ML Engineer passionate about creating intelligent systems that solve complex problems. With
                  expertise in machine learning, deep learning, and data science, I develop solutions that transform raw
                  data into actionable insights.
                </p>
                <p>
                  My work focuses on building scalable AI systems that can be deployed in production environments. I
                  have experience with various frameworks including TensorFlow, PyTorch, and scikit-learn, as well as
                  cloud platforms like AWS and Google Cloud.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the latest research papers, contributing to open-source
                  projects, or sharing knowledge through technical writing and presentations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Now after About */}
        <section id="projects" className="py-24 bg-muted/30 relative">
          <div className="container mx-auto px-4 relative">
            <SectionHeading
              title="Featured Projects"
              subtitle="A collection of my recent work in AI and machine learning"
            />
            <ProjectsSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-muted/30 relative">
          <div className="container mx-auto px-4 relative">
            <SectionHeading
              title="Get In Touch"
              subtitle="Have a project in mind or want to collaborate? Let's talk!"
            />
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
