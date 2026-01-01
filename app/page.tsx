import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { PricingSection } from "@/components/pricing-section"
import { AuditSection } from "@/components/audit-section"

// Final TODO: Add metadata for SEO 
// Optimize images and content for performance
// Optimize mobile responsiveness and accessibility
// Optimize SEO tags and metadata
// Optimize SEO content for keywords

// Final TODO for outreach:
// Set up Google Analytics and Search Console
// Set up conversion tracking for audit bookings
// Create outreach plan for fitness studios
// Prepare email templates and marketing materials
// Plan social media announcements and ads
// Reach out to existing contacts in the fitness industry
// Compile list of potential clients in NJ, NYC, and Philadelphia using web scraping tools 

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <OutcomesSection />
      <CaseStudiesSection />
      <SocialProofSection />
      <PricingSection />
      <AuditSection />
    </div>
  )
}
