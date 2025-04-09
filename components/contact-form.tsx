"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import SocialLinks from "@/components/social-links"
import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export function ContactForm() {
  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form data
      formSchema.parse(formData)

      // Simulate form submission with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form and show success message
      setIsSubmitted(true)
      setErrors({})
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message
          }
        })
        setErrors(newErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset form to send another message
  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <>
      <Card className="border-0 shadow-lg bg-background/80">
        <CardContent className="p-8">
          {isSubmitted ? (
            // Success message after submission
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-[#364573] dark:text-[#6A81C9] mb-4">Thank You!</h3>
              <p className="text-muted-foreground">
                Your message has been received. I'll get back to you as soon as possible.
              </p>
              <Button
                className="mt-6 bg-[#364573] hover:bg-[#2A3563] dark:bg-[#364573] dark:hover:bg-[#4A5583]"
                onClick={handleReset}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            // Contact form
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={isSubmitting}
                    aria-describedby="name-error"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    disabled={isSubmitting}
                    aria-describedby="email-error"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject field */}
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  disabled={isSubmitting}
                  aria-describedby="subject-error"
                  className={errors.subject ? "border-red-500" : ""}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-sm text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                  disabled={isSubmitting}
                  aria-describedby="message-error"
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-[#364573] hover:bg-[#2A3563] dark:bg-[#364573] dark:hover:bg-[#4A5583] py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Social links section */}
      <SocialLinks />
    </>
  )
}

// Add default export that references the named export
export default ContactForm
