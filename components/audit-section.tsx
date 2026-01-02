"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export function AuditSection() {
  const [formData, setFormData] = useState({
    studioName: "",
    ownerName: "",
    email: "",
    phone: "",
    studioType: "",
    memberCount: "",
    currentWebsite: "",
    biggestChallenge: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    // Initialize EmailJS once when component mounts
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    console.log("EmailJS Public Key:", publicKey ? "Found" : "Missing")
    console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? "Found" : "Missing")
    console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? "Found" : "Missing")
    
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    
    if (!serviceId || !templateId) {
      console.error("EmailJS configuration is missing. Please check your environment variables.")
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          studio_name: formData.studioName,
          owner_name: formData.ownerName,
          user_email: formData.email,
          phone: formData.phone || "Not provided",
          studio_type: formData.studioType,
          member_count: formData.memberCount || "Not provided",
          current_website: formData.currentWebsite || "Not provided",
          biggest_challenge: formData.biggestChallenge,
        }
      )

      console.log("EmailJS response:", result)
      
      if (result.status === 200 || result.text === "OK") {
        setSubmitStatus("success")
        setFormData({
          studioName: "",
          ownerName: "",
          email: "",
          phone: "",
          studioType: "",
          memberCount: "",
          currentWebsite: "",
          biggestChallenge: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="audit" className="py-20 px-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
            Book a Free Conversion Audit
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            We'll review your current setup, identify conversion gaps, and outline exactly how we'd fix them. No
            obligation. No sales pitch.
          </p>
        </div>

        <Card className="p-8 border-border bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studioName">Studio Name *</Label>
                <Input
                  id="studioName"
                  required
                  value={formData.studioName}
                  onChange={(e) => setFormData({ ...formData, studioName: e.target.value })}
                  placeholder="Your studio name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ownerName">Your Name *</Label>
                <Input
                  id="ownerName"
                  required
                  value={formData.ownerName}
                  onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studioType">Studio Type *</Label>
                <Input
                  id="studioType"
                  required
                  value={formData.studioType}
                  onChange={(e) => setFormData({ ...formData, studioType: e.target.value })}
                  placeholder="e.g., CrossFit, MMA, TKD, Boxing, Yoga"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="memberCount">Current Member Count</Label>
                <Input
                  id="memberCount"
                  value={formData.memberCount}
                  onChange={(e) => setFormData({ ...formData, memberCount: e.target.value })}
                  placeholder="Approximate number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentWebsite">Current Website (if you have one)</Label>
              <Input
                id="currentWebsite"
                type="url"
                value={formData.currentWebsite}
                onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                placeholder="https://yourstudio.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="biggestChallenge">What's your biggest conversion challenge right now? *</Label>
              <Textarea
                id="biggestChallenge"
                required
                value={formData.biggestChallenge}
                onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                placeholder="Tell us what's not working with your current lead flow..."
                rows={4}
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-900 text-sm">
                Thanks for reaching out! We'll review your info and get back to you within 24 hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-900 text-sm">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:via-gray-700 hover:to-gray-600"
              disabled={isSubmitting || submitStatus === "success"}
            >
              {isSubmitting ? "Sending..." : submitStatus === "success" ? "✓ Request Sent" : "Request Free Audit"}
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              We'll respond within 24 hours on business days. Typically faster.
            </p>
          </form>
          <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY}></div>
        </Card>
      </div>
    </section>
  )
}