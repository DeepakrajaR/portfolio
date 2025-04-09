import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">Have a project in mind or want to collaborate? Let's talk!</p>
        </div>

        <div className="max-w-xl mx-auto">
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
