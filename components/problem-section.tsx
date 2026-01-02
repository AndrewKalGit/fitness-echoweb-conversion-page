import { Card } from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

export function ProblemSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
            You Have Attention. But Is It Converting?
          </h2>
          <p className="text-lg text-muted-foreground text-balance mx-auto">
            You have interested prospects, turn them into members by fixing common conversion gaps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 border-border bg-white">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💬</div>
              <div>
              <h3 className="font-semibold mb-3 text-lg">Vague Inquiries</h3>
              <p className="text-muted-foreground leading-relaxed">
               Turning inquiries into members is hard when you don&apos;t know what they&apos;re looking for. At which point on the sites are they making the inquiry?  
              </p>
              </div>
            </div>
            </Card>

            <Card className="p-6 border-border bg-white">
            <div className="flex items-start gap-4">
              <div className="text-2xl">➡️</div>
              <div>
              <h3 className="font-semibold mb-3 text-lg">No Clear Next Step</h3>
              <p className="text-muted-foreground leading-relaxed">
                They check your Instagram. Maybe your website. Then nothing. There&apos;s no obvious &quot;here&apos;s how you actually join&quot; moment.
              </p>
              </div>
            </div>
            </Card>

            <Card className="p-6 border-border bg-white">
            <div className="flex items-start gap-4">
              <div className="text-2xl">❓</div>
              <div>
              <h3 className="font-semibold mb-3 text-lg">Hidden Expectations</h3>
              <p className="text-muted-foreground leading-relaxed">
             Are they Open or Closed?  Are the class schedule current? Pricing updated? The pricing layout confusing or clear. What do I bring on the first day?</p>
              </div>
            </div>
            </Card>

            <Card className="p-6 border-border bg-white">
            <div className="flex items-start gap-4">
              <div className="text-2xl">⚙️</div>
              <div>
              <h3 className="font-semibold mb-3 text-lg">Admin Overload</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every inquiry becomes a manual conversation. You&apos;re answering the same questions, chasing follow-ups, managing spreadsheets.
              </p>
              </div>
            </div>
            </Card>
        </div>

        <div className="text-center mt-10">
          <p className="text-lg font-medium text-foreground">This isn't a marketing problem. It's a structural one.</p>
        </div>
        {/* <Button className="flex justify-center mx-auto mt-6"><Link href="/#case" >See Our Solutions In Action</Link></Button> */}
      </div>
    </section>
  )
}
