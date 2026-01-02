import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.png"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image src={logo} alt="Logo" width={120} height={40} />
            <p className="text-sm text-muted-foreground leading-relaxed">
               📍 Conversion-focused Web Design for boutique fitness studios in NJ, NYC, and Philadelphia.
            </p>
            <ul>
              <li className="text-sm text-muted-foreground mt-2">
                <a href="tel:(732)-595-7217">(732)-595-7217</a>
              </li>
              <li className="text-sm text-muted-foreground mt-2">
                <a href="mailto:contact@echowebagency.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  contact@echowebagency.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#solution" className="text-muted-foreground hover:text-foreground transition-colors">
                  Conversion Optimized Web Design
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#audit" className="text-muted-foreground hover:text-foreground transition-colors">
                  Book Free Audit
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Markets</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>New Jersey</li>
              <li>New York City</li>
              <li>Philadelphia</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ConversionSystems. Built for studios that want control and clarity.
          </p>
        </div>
      </div>
    </footer>
  )
}
