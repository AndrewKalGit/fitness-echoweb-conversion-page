import { Card } from "@/components/ui/card"
import { UserCheck, TrendingUp, Clock, CheckCircle2, Award, Target } from "lucide-react"

export function OutcomesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
            What This Does for Your Studio
          </h2>
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-8">
            Based on Conversion & UX Principles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 border-border text-center bg-white">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-4">
              <UserCheck className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Better-Qualified Leads</h3>
            <p className="text-muted-foreground leading-relaxed">
              People arrive already knowing what you cost, what you offer, and what you expect. No more surprises.
            </p>
          </Card>

          <Card className="p-6 border-border text-center bg-white">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">More From the Same Traffic</h3>
            <p className="text-muted-foreground leading-relaxed">
              You don't need more followers. You need more of your current followers to actually take action.
            </p>
          </Card>

          <Card className="p-6 border-border text-center bg-white">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Less Time on Admin</h3>
            <p className="text-muted-foreground leading-relaxed">
              Google Sheets script ready for you to click and organize all your lead data in one place.
            </p>
          </Card>

          <Card className="p-6 border-border text-center bg-white">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Clear Expectations</h3>
            <p className="text-muted-foreground leading-relaxed">
              Members show up prepared. They know what they're getting into. Better fit from day one.
            </p>
          </Card>

          <Card className="p-6 border-border text-center bg-white">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Professional First Impression</h3>
            <p className="text-muted-foreground leading-relaxed">
              An organized, polished system signals that you run a serious operation. Trust starts before the first
              visit.
            </p>
          </Card>

          <Card className="p-6 border-border text-center bg-white">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Realistic Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              We focus on UX and conversion principles, The goal is to get results, not just a pretty site.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
