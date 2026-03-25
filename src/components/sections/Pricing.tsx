
"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Basic",
    price: "₹2,499",
    description: "Perfect for small projects",
    features: ["Standard Landing Page", "Responsive Design", "3 Revision Rounds", "Basic SEO Optimization", "Email Support"],
    popular: false
  },
  {
    name: "Standard",
    price: "₹9,999",
    description: "Ideal for growing startups",
    features: ["Custom Web Application", "AI Chatbot Integration", "User Authentication", "Dashboard Access", "Priority Support"],
    popular: true
  },
  {
    name: "Premium",
    price: "₹29,999",
    description: "Enterprise grade solutions",
    features: ["Custom AI Agent Training", "Full Data Automation", "Advanced Analytics", "Dedicated Project Manager", "24/7 Support"],
    popular: false
  },
  {
    name: "Custom",
    price: "Contact Us",
    description: "Bespoke systems & research",
    features: ["Hardware AI Integration", "Complex Research & DL", "Dedicated R&D Team", "White-label Solutions", "On-site Integration"],
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground">Transparent pricing tailored to your scale and technical requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-8 rounded-[2rem] glass-card flex flex-col h-full transition-all duration-500",
                plan.popular ? "border-primary/50 shadow-[0_0_40px_-15px_rgba(153,77,255,0.3)] scale-105 z-10" : "border-white/5"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold py-1 px-4 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.name !== "Custom" && <span className="text-muted-foreground">/project</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className={cn(
                  "w-full rounded-2xl h-12 font-semibold",
                  plan.popular ? "bg-primary hover:bg-primary/90" : "hover:bg-white/5"
                )}
              >
                {plan.name === "Custom" ? "Contact Us" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
