import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiePolicy() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <div className="flex-1 py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary transition-colors">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground font-semibold">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </Button>

          <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">Legal Information</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Cookie Policy</h1>
          <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest mb-16 pb-8 border-b border-border">
            Last updated: March 2026
          </p>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">1. What Are Cookies?</h2>
              <p className="mb-4">
                This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using cookies and how that information is used.
              </p>
              <p>
                Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Session Cookies:</strong> Used to operate our AI dashboards and authenticate users during their visit.</li>
                <li><strong className="text-foreground">Preference Cookies:</strong> Used to remember your preferences, dark mode settings, and various settings over time.</li>
                <li><strong className="text-foreground">Analytics Cookies:</strong> Used to track information on how the website is used so we can make improvements, such as time spent on our landing pages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">3. Disabling Cookies</h2>
              <p className="mb-4">
                You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of to our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4">
                In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Google Analytics:</strong> Provides us with aggregated data about who visits our site and how they interact with it.</li>
                <li><strong className="text-foreground">Payment Processors:</strong> We use secure providers that may set functional cookies to ensure secure transactions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">5. Contact Information</h2>
              <p className="mb-4">
                For more information on how we handle user data and our use of tracking technologies, reach out to our privacy compliance officer:
              </p>
              <p className="font-semibold text-primary">privacy@welldropp.com</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
