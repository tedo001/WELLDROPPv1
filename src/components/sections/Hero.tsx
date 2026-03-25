
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, BrainCircuit } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Leading AI Innovations</span>
        </div>

        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in-up [animation-delay:200ms]">
          Engineering Intelligent <br />
          <span className="text-gradient">Digital Experiences</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up [animation-delay:400ms]">
          AI Agents, Chatbots, Automation & Scalable Digital Solutions built for the future. We transform complex ideas into intelligent software systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
          <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/20">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 rounded-full text-lg glass hover:bg-white/10">
            View Projects
          </Button>
        </div>

        {/* Floating UI Elements */}
        <div className="mt-20 relative hidden lg:block">
          <div className="absolute -left-20 top-0 w-64 p-6 glass-card rounded-2xl animate-float">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-yellow-400" />
              <span className="font-semibold">AI Automation</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-primary animate-pulse" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Efficiency improved by 85%</p>
          </div>

          <div className="absolute -right-20 top-10 w-64 p-6 glass-card rounded-2xl animate-float [animation-delay:2000ms]">
            <div className="flex items-center gap-3 mb-4">
              <BrainCircuit className="text-blue-400" />
              <span className="font-semibold">Neural Processing</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-12 w-8 bg-white/5 rounded-sm flex items-end">
                  <div className="w-full bg-secondary rounded-sm" style={{ height: `${Math.random() * 100}%` }} />
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Real-time inference optimized</p>
          </div>
        </div>
      </div>
    </section>
  )
}
