import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            ConversionSystems
          </Link>
          <Button asChild size="sm" variant="ghost">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Effective Date: January 1, 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ConversionSystems ("we," "our," or "us") operates a website and provides conversion system services for
                boutique fitness studios. This Privacy Policy explains how we collect, use, and protect your personal
                information when you visit our website or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We respect your privacy and are committed to protecting your personal data. This policy describes what
                information we collect, why we collect it, and how we handle it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">Information You Provide</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you fill out our contact or audit request forms, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Studio name and owner name</li>
                <li>Email address and phone number</li>
                <li>Studio type and member count</li>
                <li>Current website URL (if provided)</li>
                <li>Information about your business challenges and goals</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you visit our website, we automatically collect certain technical information through analytics
                tools:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>IP address and general location data</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website or source</li>
                <li>Device information (mobile, desktop, tablet)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To respond to your inquiries and provide conversion audit services</li>
                <li>To communicate with you about our services, project details, and updates</li>
                <li>To improve our website, services, and user experience</li>
                <li>To analyze website traffic and understand how visitors use our site</li>
                <li>To identify potential business leads and market our services appropriately</li>
                <li>To comply with legal obligations and protect our business interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Analytics and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use Google Analytics 4 (GA4) to understand how visitors interact with our website. GA4 collects data
                such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Page views and session duration</li>
                <li>Geographic location (city/region level)</li>
                <li>Traffic sources and referral information</li>
                <li>Device and browser information</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Google Analytics uses cookies and similar technologies to collect this data. You can opt out of Google
                Analytics by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline hover:no-underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Lead Generation and B2B Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use Apollo.io, a business-to-business (B2B) lead generation and contact database tool, to identify
                potential fitness studio clients and gather publicly available business contact information.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Apollo.io helps us find business contact details (such as business email addresses and phone numbers)
                that are publicly available or provided by users on professional platforms. We use this tool strictly
                for B2B outreach to fitness studios and related businesses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Sharing and Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties. We may share your data only
                in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Service Providers:</strong> We work with trusted third-party service providers (such as email
                  delivery services, analytics tools, and CRM platforms) who assist us in operating our website and
                  delivering our services. These providers have access to your data only to perform specific tasks on
                  our behalf and are obligated to protect your information.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required by law, regulation,
                  legal process, or governmental request.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of that transaction.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable technical and organizational measures to protect your personal information from
                unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the
                internet or electronic storage is completely secure. While we strive to protect your data, we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. When your data is no
                longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>The right to access the personal data we hold about you</li>
                <li>The right to request correction of inaccurate or incomplete data</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to object to or restrict certain processing activities</li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                To exercise any of these rights, please contact us using the information provided below. We will respond
                to your request within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience and
                analyze site traffic. Cookies are small text files stored on your device that help us recognize you and
                remember your preferences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You can control cookie settings through your browser preferences. Note that disabling cookies may affect
                the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you believe we have inadvertently collected information from a child,
                please contact us immediately so we can delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. When we make changes, we will update the "Effective Date" at the top of this page. We
                encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please
                contact us:
              </p>
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@conversionsystems.com"
                    className="text-foreground underline hover:no-underline"
                  >
                    privacy@conversionsystems.com
                  </a>
                </p>
                <p className="mt-2">
                  <strong>Business Name:</strong> ConversionSystems
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ConversionSystems. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
