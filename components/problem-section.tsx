import { Card } from "@/components/ui/card"

export function ProblemSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
            You Have Attention. But It's Not Converting.
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            You're not invisible people find you. The problem is what happens next.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 border-border bg-white">
            <h3 className="font-semibold mb-3 text-lg">Vague Inquiries</h3>
            <p className="text-muted-foreground leading-relaxed">
              Someone DMs asking "what do you offer?" You reply. They respond two days later with another half-formed
              question. Eventually, they disappear.
            </p>
          </Card>

          <Card className="p-6 border-border bg-white">
            <h3 className="font-semibold mb-3 text-lg">No Clear Next Step</h3>
            <p className="text-muted-foreground leading-relaxed">
              They check your Instagram. Maybe your website. Then nothing. There's no obvious "here's how you actually
              join" moment.
            </p>
          </Card>

          <Card className="p-6 border-border bg-white">
            <h3 className="font-semibold mb-3 text-lg">Hidden Expectations</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pricing isn't clear. Requirements aren't explained. People show up unprepared or don't show up at all
              because they're guessing.
            </p>
          </Card>

          <Card className="p-6 border-border bg-white">
            <h3 className="font-semibold mb-3 text-lg">Admin Overload</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every inquiry becomes a manual conversation. You're answering the same questions, chasing follow-ups,
              managing spreadsheets.
            </p>
          </Card>
        </div>

        <div className="text-center mt-10">
          <p className="text-lg font-medium text-foreground">This isn't a marketing problem. It's a structural one.</p>
        </div>
      </div>
    </section>
  )
}
