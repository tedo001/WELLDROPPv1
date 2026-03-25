
"use client"

import { 
  Bot, 
  Cpu, 
  Layout, 
  BarChart3, 
  Database, 
  Globe, 
  Zap, 
  LineChart 
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "AI Agents Development",
    description: "Autonomous software agents that perform complex tasks with minimal human intervention.",
    icon: Bot,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "AI Chatbot Services",
    description: "Next-gen 24/7 customer care bots powered by advanced natural language processing.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "LLM Solutions",
    description: "Custom Large Language Model implementations, fine-tuning, and pipeline optimization.",
    icon: Cpu,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "E-commerce Applications",
    description: "Scalable digital stores built with conversion-focused design and modern tech stacks.",
    icon: Layout,
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Data Analytics Dashboards",
    description: "Interactive visualization tools that transform raw data into actionable business insights.",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Data Management Systems",
    description: "Robust architectures for storing, processing, and securing enterprise-level data.",
    icon: Database,
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Website Development",
    description: "High-performance, responsive websites designed for premium brands and startups.",
    icon: Globe,
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "Data Automation Apps",
    description: "Custom scripts and applications to automate repetitive data workflows.",
    icon: LineChart,
    color: "from-cyan-600 to-blue-600"
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Core Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of AI and software solutions designed to propel your business into the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden relative"
            >
              {/* Card Glow Effect */}
              <div className={cn(
                "absolute -right-4 -top-4 w-24 h-24 blur-[60px] opacity-20 group-hover:opacity-60 transition-opacity bg-gradient-to-br",
                service.color
              )} />

              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br transition-transform duration-500 group-hover:scale-110",
                service.color
              )}>
                <service.icon className="text-white w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
