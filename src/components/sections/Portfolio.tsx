
"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "AI Customer Support Bot",
    category: "AI",
    description: "A comprehensive support automation platform reducing response times by 90%.",
    tech: ["Next.js", "Gemini", "Firebase"],
    image: "https://picsum.photos/seed/p1/600/400"
  },
  {
    id: 2,
    title: "Smart Data Dashboard",
    category: "Analytics",
    description: "Real-time enterprise analytics with predictive forecasting and interactive visualization.",
    tech: ["React", "Recharts", "Node.js"],
    image: "https://picsum.photos/seed/p2/600/400"
  },
  {
    id: 3,
    title: "Automated Workflow System",
    category: "Automation",
    description: "End-to-end business process automation connecting legacy systems to cloud AI.",
    tech: ["Python", "FastAPI", "Docker"],
    image: "https://picsum.photos/seed/p3/600/400"
  }
]

export function Portfolio() {
  const [filter, setFilter] = React.useState("All")

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-muted-foreground">Showcasing our technical expertise across various industries.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["All", "AI", "Analytics", "Automation"].map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" className="rounded-full gap-2 font-semibold">
                    View Details <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="bg-white/5 text-xs text-secondary">{t}</Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
