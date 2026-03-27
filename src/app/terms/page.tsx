import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfUse() {
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
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Terms of Use</h1>
          <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest mb-16 pb-8 border-b border-border">
            Last updated: March 2026
          </p>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Welldropp Technologies ("we," "us," or "our"). 
              </p>
              <p>
                By accessing our website, custom AI agents, or automated infrastructure, you agree that you have read, understood, and agreed to be bound by all of these Terms of Use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">2. Intellectual Property Rights</h2>
              <p className="mb-4">
                Unless otherwise indicated, our proprietary software, source code, neural network models, datasets, website design, and UI functionalities are the intellectual property of Welldropp Technologies and are protected by applicable copyright, trademark, and other intellectual property laws.
              </p>
              <p>You may not reverse-engineer, modify, reproduce, or resell access to our proprietary agentic models without express written permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">3. Acceptable Use Policy</h2>
              <p className="mb-4">You agree not to use our Services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Services in any way that could damage our website, services, or general business of Welldropp Technologies.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Prohibited Activities:</strong> Utilizing bots to scrape data, attempting to bypass security measures (including prompt injection against our LLM endpoints), or reverse engineering model weights.</li>
                <li><strong className="text-foreground">Malicious Use:</strong> Deploying our chatbots or telegram automation for spamming, harassment, or distribution of explicit material.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">4. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Welldropp Technologies or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, without limitation, damages for loss of business profits, business interruption, or loss of business information) arising out of the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-foreground mb-4">5. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed by and defined following international business law. You irrevocably consent that the designated courts shall have exclusive jurisdiction to resolve any dispute which may arise.
              </p>
              <p className="font-semibold text-primary">legal@welldropp.com</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
