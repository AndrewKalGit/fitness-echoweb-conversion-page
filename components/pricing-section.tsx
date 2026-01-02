import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            One project. One price. No subscriptions. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
          {/* <Card className="p-8 border-border bg-white">
            <h3 className="text-2xl font-bold mb-2">Standard Build</h3>
            <div className="text-4xl font-bold mb-6">
              $2,500
              <span className="text-base font-normal text-muted-foreground ml-2">one-time</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Custom conversion-focused site</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Up to 5 pages (Home, Programs, Pricing, About, Contact)</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Lead capture form with email integration</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Mobile-responsive design</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">2 rounds of revisions</span>
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
          </Card> */}

          <Card className="p-8 border-2 border-gray-900 bg-gradient-to-br from-gray-50 to-white relative">
            <div className="absolute w-fit -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
              January Special 50% Off!
            </div>
            <h3 className="text-2xl font-bold mb-2">Botique Gym Website</h3>
            <div className="text-4xl font-bold mb-6">
              <span className="line-through text-gray-500">$1,000</span> $500 
              <span className="text-base font-normal text-muted-foreground ml-2">one-time</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                     5 custom conversion-focused pages (Home, Programs, Pricing, About, Contact)
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Lead organization & email automation setup</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Advanced text & writing optimized for conversions
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">2 rounds of revisions</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Analytics & tracking setup</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">2-week delivery timeline</span>
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
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
            All builds include domain setup assistance and basic training on updating content. Hosting is separate
            (typically $15-30/month through standard providers).
          </p>
        </div>
      </div>
    </section>
  )
}
