import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ConversionSystems - Conversion Systems for Boutique Fitness Studios",
  description:
    "Turn interest into qualified member inquiries. Conversion systems for boutique fitness studios with existing traffic but inconsistent conversions. No heavy ad spend required.",
  keywords: [
    "conversion systems for boutique fitness studios",
    "gym landing page design",
    "fitness studio web design",
    "New Jersey fitness web design",
    "NYC gym websites",
    "Philadelphia fitness marketing",
  ],
  authors: [{ name: "ConversionSystems" }],
  generator: "v0.app",
  openGraph: {
    title: "ConversionSystems - Turn Interest Into Qualified Member Inquiries",
    description: "Conversion systems for boutique fitness studios. Built with UX, designed for results.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
