import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { PricingSection } from "@/components/pricing-section"
import { AuditSection } from "@/components/audit-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-lg font-semibold tracking-tight">Echo Web Fitness</div>
          <nav className="hidden gap-8 md:flex">
            <Link href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </Link>
            <Link
              href="#case-studies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:via-gray-700 hover:to-gray-600"
          >
            <Link href="#audit">Book Free Audit</Link>
          </Button>
        </div>
      </header>

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <OutcomesSection />
      <CaseStudiesSection />
      <SocialProofSection />
      <PricingSection />
      <AuditSection />
      <Footer />
    </div>
  )
}
