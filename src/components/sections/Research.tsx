
"use client"

import { Binary, Microchip, Layers } from "lucide-react"

const researchAreas = [
  {
    title: "Machine Learning & DL",
    description: "Exploring advanced architectures for neural networks and predictive modeling.",
    icon: Binary
  },
  {
    title: "AI & Chip Integration",
    description: "Optimizing AI models for hardware acceleration and edge computing.",
    icon: Microchip
  },
  {
    title: "Tensor Computing",
    description: "Researching high-dimensional data processing for next-gen computation.",
    icon: Layers
  }
]

export function Research() {
  return (
    <section id="research" className="py-24 relative bg-black/40 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/10" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
              Innovation <br />
              <span className="text-gradient">Research Lab</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              At WELLDROPP, we don't just build software; we pioneer the future. Our research team focuses on the intersection of hardware, mathematics, and artificial intelligence.
            </p>
            
            <div className="space-y-6">
              {researchAreas.map((area) => (
                <div key={area.title} className="flex gap-4 p-4 glass rounded-2xl border border-white/5 hover:border-primary/30 transition-all cursor-default group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{area.title}</h4>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-square glass rounded-[40px] flex items-center justify-center p-12 relative overflow-hidden group">
              {/* Futuristic Node Visual */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-48 h-48 rounded-full border border-secondary/20 animate-[spin_6s_linear_infinite_reverse]" />
                <div className="absolute w-24 h-24 bg-primary/20 rounded-full blur-[40px] animate-pulse" />
              </div>
              
              <div className="relative z-10 text-center">
                <div className="text-8xl font-headline font-bold text-white/5 mb-4">WELLDROPP</div>
                <div className="text-primary font-code text-sm tracking-widest animate-pulse">SYSTEMS_OPTIMIZED</div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl text-xs font-code">
                    <span className="text-secondary">#</span> TENSOR_READY
                  </div>
                  <div className="glass p-4 rounded-xl text-xs font-code">
                    <span className="text-secondary">#</span> NEURAL_SYNC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
