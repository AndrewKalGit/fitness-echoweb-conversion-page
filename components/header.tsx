import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import logo from "@/public/logo.png"

export default function Header() {
    return (
         <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Image src={logo} alt="Logo" width={120} height={40} />
          <nav className="hidden gap-8 md:flex">
            <Link href="#solution" className="font-semibold text-sm text-gray-800 hover:text-foreground transition-colors">
              Solution
            </Link>
            <Link
              href="#case-studies"
              className="font-semibold text-sm text-gray-800 hover:text-foreground transition-colors"
            >
              Case Studies
            </Link>
            <Link href="#pricing" className="font-semibold text-sm text-gray-800 hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:via-gray-700 hover:to-gray-600"
          >
            <Link href="#audit">Book Free Audit</Link>
          </Button>
        </div>
      </header>
    )
}
