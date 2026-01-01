import { Card } from "@/components/ui/card"
import Image from "next/image"

export function CaseStudiesSection() {

// TODO: Replace the image placeholders with video demos later 

  return (
    <section id="case-studies" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">Demo Case Studies</h2>
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
            Modeled Examples from Real Studio Problems
          </p>
          <p className="text-muted-foreground text-balance max-w-2xl mx-auto">
            These show how layout and messaging decisions solve actual conversion issues we've seen in the fitness
            space.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="overflow-hidden border-border bg-white">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
                <Image
                  src="/mma-gym-training-with-heavy-bags-and-fighters.jpg"
                  alt="MMA gym training environment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-medium text-muted-foreground mb-2">MMA GYM</div>
                <h3 className="text-2xl font-bold mb-4">Elite Combat Training</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Strong Instagram following, but every inquiry started with &ldquo;do I need experience?&rdquo; Multiple
                      back-and-forth conversations just to qualify interest level.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Program tiers laid out upfront &ldquo;beginner&rdquo;, &ldquo;intermediate&rdquo;, &ldquo;competitive&rdquo;. FAQ addresses experience
                      requirements before anyone asks. Separate paths for casual trial vs. serious training.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Result</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Inquiries arrive pre-qualified. Less time explaining basics. More time talking to people who are
                      actually ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden border-border bg-white">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
                <Image src="/boxing-gym-with-ring-and-training-equipment.jpg" alt="Boxing gym with ring" fill className="object-cover" />
              </div>
              <div className="p-8">
                <div className="text-sm font-medium text-muted-foreground mb-2">BOXING GYM</div>
                <h3 className="text-2xl font-bold mb-4">Brooklyn Boxing Club</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Pricing was hidden. People reached out, seemed interested, then ghosted after hearing the monthly
                      cost. Wasted time on both sides.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Full pricing transparency. Value justification built into the layout. Equipment access, class
                      structure, and membership tiers explained before the inquiry form.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Result</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Self-filtering by budget. Inquiries already know what they're paying. Higher intent-to-join ratio.
                      No surprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden border-border bg-white">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
                <Image src="/taekwondo-school-with-students-training-in-uniform.jpg" alt="Taekwondo training class" fill className="object-cover" />
              </div>
              <div className="p-8">
                <div className="text-sm font-medium text-muted-foreground mb-2">TAEKWONDO SCHOOL</div>
                <h3 className="text-2xl font-bold mb-4">Family Taekwondo Center</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Parents wanted to know about belt progression, competition requirements, kids vs. adult programs.
                      Every inquiry turned into a long email exchange.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Separate pages for kids and adult programs. Visual curriculum breakdown. Belt timeline explained.
                      Testing expectations laid out clearly.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Result</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Parents arrive informed about time commitment and progression. Inquiries focus on scheduling, not
                      explaining the basics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden border-border bg-white">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
                <Image
                  src="/boutique-fitness-studio-with-yoga-and-pilates-equi.jpg"
                  alt="Boutique fitness studio interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-medium text-muted-foreground mb-2">BOUTIQUE FITNESS STUDIO</div>
                <h3 className="text-2xl font-bold mb-4">Core Performance Studio</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Offering yoga, Pilates, and strength training confused people. They didn't know which program
                      suited their goals or how to combine them.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Goal-based navigation (flexibility, strength, recovery). Clear differentiation. Sample weekly
                      schedules showing how to mix programs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Result</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Self-guided program selection. Inquiries already aligned with specific class types. Higher
                      conversion to membership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
