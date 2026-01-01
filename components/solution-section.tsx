import { Card } from "@/components/ui/card"
import { Target, Users, BarChart3, Zap } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">The Conversion System</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Not just a website. A conversion layer that sits between attention and action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
                <Target className="h-5 w-5 text-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Information That's Actually Organized</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Programs, pricing, schedules everything someone needs to make a decision, laid out so they don't have
                  to hunt for it.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
                <Users className="h-5 w-5 text-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Pre-Answered Questions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We anticipate what people wonder about experience level, commitment, cost and answer it before they
                  ask.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">A Path, Not a Maze</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The right people move forward easily. The wrong people filter themselves out. Everyone saves time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
                <Zap className="h-5 w-5 text-gray-900" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Automated Lead Capture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Inquiries flow directly into your system. No manual entry. No lost contacts. No wondering who to
                  follow up with.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border-border text-center">
          <p className="text-lg font-medium text-pretty">
            We use conversion-focused layouts, clear UX principles, and strategic messaging to turn your existing
            traffic into real member inquiries.
          </p>
        </Card>
      </div>
    </section>
  )
}
