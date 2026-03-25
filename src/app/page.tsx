
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Research } from "@/components/sections/Research"
import { Portfolio } from "@/components/sections/Portfolio"
import { Pricing } from "@/components/sections/Pricing"
import { Contact } from "@/components/sections/Contact"
import { Toaster } from "@/components/ui/toaster"
import { CheckCircle, Zap, Shield, Rocket, HeartHandshake } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      <Hero />
      
      {/* Short About Section integrated into flow */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-6 rounded-3xl animate-float">
                  <Rocket className="text-primary mb-4" />
                  <h4 className="font-bold mb-2">Fast Delivery</h4>
                  <p className="text-xs text-muted-foreground">Swift iterations from concept to production ready code.</p>
                </div>
                <div className="glass p-6 rounded-3xl animate-float [animation-delay:1000ms] mt-8">
                  <Shield className="text-secondary mb-4" />
                  <h4 className="font-bold mb-2">Scalable Systems</h4>
                  <p className="text-xs text-muted-foreground">Architectures built to grow with your user base.</p>
                </div>
                <div className="glass p-6 rounded-3xl animate-float [animation-delay:2000ms]">
                  <Zap className="text-amber-400 mb-4" />
                  <h4 className="font-bold mb-2">AI-First</h4>
                  <p className="text-xs text-muted-foreground">Intelligent automation embedded in every line of code.</p>
                </div>
                <div className="glass p-6 rounded-3xl animate-float [animation-delay:3000ms] mt-8">
                  <HeartHandshake className="text-red-400 mb-4" />
                  <h4 className="font-bold mb-2">24/7 Support</h4>
                  <p className="text-xs text-muted-foreground">Dedicated engineers available around the clock.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
                Intelligent Systems <br />
                <span className="text-gradient">Engineered to Scale</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                WELLDROPP is a forward-thinking software development and AI solutions startup. We specialize in building intelligent systems using AI, automation, and modern software technologies.
              </p>
              <ul className="space-y-4">
                {[
                  "Specialized AI agents for enterprise efficiency",
                  "Large Language Model based bespoke solutions",
                  "High-performance web & mobile applications",
                  "Advanced data automation and integration"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-5 h-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Research />
      <Portfolio />
      <Pricing />
      <Contact />
      
      <Footer />
      <Toaster />
    </main>
  )
}
