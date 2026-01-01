import { Check } from "lucide-react"

export function SocialProofSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance mb-6">
          Built for Studios That Want to Grow Without Guessing
        </h2>
        <p className="text-lg text-muted-foreground text-balance mb-8 max-w-2xl mx-auto leading-relaxed">
          Clear process. Technical clarity. Transparent pricing. Built with real gym workflows in mind not generic
          templates.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="flex gap-3">
            <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">UX-Focused Approach</h3>
              <p className="text-sm text-muted-foreground">Conversion principles, not guesswork</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Collaborative Process</h3>
              <p className="text-sm text-muted-foreground">You're involved, not handed a template</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Check className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">No Long Contracts</h3>
              <p className="text-sm text-muted-foreground">One project. Clear scope. Done.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
