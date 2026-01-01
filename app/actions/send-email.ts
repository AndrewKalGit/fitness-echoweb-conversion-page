"use server"

import emailjs from "@emailjs/browser"

export async function sendAuditRequest(formData: {
  studioName: string
  ownerName: string
  email: string
  phone: string
  studioType: string
  memberCount: string
  currentWebsite: string
  biggestChallenge: string
}) {
  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || "",
      process.env.EMAILJS_TEMPLATE_ID || "",
      {
        studio_name: formData.studioName,
        owner_name: formData.ownerName,
        email: formData.email,
        phone: formData.phone,
        studio_type: formData.studioType,
        member_count: formData.memberCount,
        current_website: formData.currentWebsite,
        biggest_challenge: formData.biggestChallenge,
      },
      process.env.EMAILJS_PUBLIC_KEY || "",
    )

    return { success: true }
  } catch (error) {
    console.error("[v0] EmailJS error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
