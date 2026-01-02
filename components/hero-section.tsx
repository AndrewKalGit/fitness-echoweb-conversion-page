import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

// TODO: Replace video with actual video file that shows how the service works 

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
              Turn Interest Into Qualified Member Inquiries
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
              You've built something real. People already know about you Instagram, word-of-mouth, community presence.
              But too many interested people never actually sign up. We fix that gap.
            </p>
            <Button
              asChild
              size="lg"
              className="text-base px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:via-gray-700 hover:to-gray-600"
            >
              <Link href="#audit">
                Book a Free Conversion Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-2">The audit will help you identify conversion gaps and outline exactly how we would fix them.</p>
            <p className="text-sm text-muted-foreground mt-4">
              For CrossFit, MMA, boxing, martial arts, yoga, and boutique fitness studios
            </p>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
            <Image
              alt="Design mock up and demo overview image for fitness studio website conversion optimization service"
              fill
              src="/modern-fitness-studio-interior-with-training-equip.jpg"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
