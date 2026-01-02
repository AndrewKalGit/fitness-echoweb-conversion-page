import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">Pricing and Service Checklist</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-4xl mx-auto">
           All prices are starting from and may vary based on specific requirements and customizations. Contact us for a personalized audit & quote tailored to your gym's needs.
          </p>
        </div>

        <div className="grid md:grid-cols-1 max-w-2xl gap-8 mx-auto">
          {/* <Card className="p-8 border-2 border-gray-900 bg-gradient-to-br from-gray-50 to-white relative">
            <div className="absolute w-fit -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
             January Special 50% Off!
            </div>
            <h3 className="text-2xl font-bold mb-2">Hositng & Maintenance</h3>
            <div className="text-4xl font-bold mb-6">
             <span className="line-through text-gray-500">$50</span> $25
              <span className="text-base font-normal text-muted-foreground ml-2">monthly</span>
          </div>
            <ul className="space-y-3 mb-8">
              
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Monthly website traffic report *can opt out or opt at anytime </span>
              </li>
               <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"> </span>
              </li>

            </ul>
            <div className="mt-auto">
              <Button
              asChild
              className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:via-gray-700 hover:to-gray-600"
              >
              <Link href="#audit">Get Started</Link>
              </Button>
            </div>
          </Card> */}

          <Card className="p-8 border-2 border-gray-900 bg-gradient-to-br from-gray-50 to-white relative">
            <div className="absolute w-fit -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
              January Special 50% Off!
            </div>
            <h3 className="text-2xl font-bold mb-2">Botique Gym Website</h3>
            <h4 className="text-lg font-medium text-gray-700">Starting From</h4>
            <div className="flex flex-col text-4xl font-bold mb-6">
              <span><span className="line-through text-gray-500">$4,000+ </span> $2,000+ <span className="text-base font-normal text-muted-foreground">one time</span></span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                     Custom conversion-focused pages (e.g., Home, Programs, Pricing, About, Contact, Instructors, Blog, etc.) tailored to your gym's needs.
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"> Components and features for smart lead capture and user engagement e.g., CTAs, testimonials, image gallery, comparison table, location map, lead magnet integration, etc.
                </span>
              </li>
                <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"> Functionality integrations e.g., live schedule integration through embdedding, class booking system integration, social media integration, easy membership sign up integration, etc.
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Lead organization & email automation setup</span>
              </li>
                <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Optimizated setup for Search Engines</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Text & writing optimized for conversions
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground"> Custom branding & design tailored to your studio
                </span>
              </li>

              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">2 rounds of revisions</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Mobile-responsive design</span>
              </li>
                 <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Secured lead capture and contact form</span>
              </li>
               <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">4-week delivery timeline</span>
              </li>
            </ul>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:via-gray-700 hover:to-gray-600"
            >
              <Link href="#audit">Get Started</Link>
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Hosting, Maintenance, and SEO Updates <br/>Starting at: $50/Month</h3>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
           Agreed upon monthly content changes at start of project e.g., updating images seasonally, updating images to media gallery, adding blog posts, adding a testimonial to website. Additional changes outside of agreed upon scope will be quoted separately.
          </p>
        </div>
      </div>
    </section>
  )
}
