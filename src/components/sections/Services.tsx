"use client"

import { Bot, Server, Headset, ShoppingCart, BarChart3, Globe, Cpu, Rocket } from "lucide-react"

const services = [
  {
    title: "Agentic AI Systems",
    description: "Autonomous agents that handle multi-step tasks, make decisions, and execute workflows without human intervention.",
    icon: Bot,
    tag: "Autonomous"
  },
  {
    title: "Webservice & APIs",
    description: "Robust, scalable backend services and RESTful APIs built to power modern applications and AI integrations.",
    icon: Server,
    tag: "Scalable"
  },
  {
    title: "Customer Care Chatbots",
    description: "Integrated 24/7 chatbots embedded into your product — live chat, FAQ resolution, lead capture, and ticket handling.",
    icon: Headset,
    tag: "24/7 Live"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce builds with AI-powered recommendations, inventory management, and conversion optimization.",
    icon: ShoppingCart,
    tag: "Full-Stack"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time business dashboards with AI-driven insights, KPI tracking, and automated reporting pipelines.",
    icon: BarChart3,
    tag: "Real-Time"
  },
  {
    title: "AI Website Builder",
    description: "Drag-and-drop website builder augmented with AI generation — create, customize, and deploy in hours, not weeks.",
    icon: Globe,
    tag: "No-Code"
  },
  {
    title: "ML / DL Research",
    description: "Applied ML and deep learning R&D — model fine-tuning, architecture research, and custom model deployment.",
    icon: Cpu,
    tag: "Research"
  },
  {
    title: "Coming Soon",
    description: "Multi-modal models, voice AI, and autonomous pipelines — more products in active development.",
    icon: Rocket,
    tag: "Future",
    isComingSoon: true
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">AI solutions,<br />precisely engineered</h2>
          <p className="text-muted-foreground max-w-lg">
            From conversational agents to full-stack platforms — we build and deploy AI that works while you sleep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group glass-card p-8 rounded-2xl relative overflow-hidden transition-all hover:-translate-y-1 ${service.isComingSoon ? 'opacity-60 border-dashed' : ''}`}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <service.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-lg font-black mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">
                {service.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
