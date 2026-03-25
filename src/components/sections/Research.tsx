"use client"

import { Brain, Settings, Sparkles } from "lucide-react"

const articles = [
  {
    title: "Building Behavior-Aware Neural Networks for Real-Time Threat Detection",
    excerpt: "How custom MLP classifiers outperform traditional CV pipelines in edge deployment scenarios...",
    category: "Deep Learning",
    date: "Mar 2025",
    readTime: "8 min read",
    icon: Brain
  },
  {
    title: "Deploying Agentic AI in Production: A Framework for Reliability at Scale",
    excerpt: "A practical guide to building agent pipelines that don't break at 3AM when you're asleep...",
    category: "MLOps",
    date: "Feb 2025",
    readTime: "12 min read",
    icon: Settings
  },
  {
    title: "Why Small Specialized Models Will Dominate Business AI in 2025",
    excerpt: "A finely tuned 7B model on your own infra can outperform GPT-4 for your specific use case...",
    category: "AI Research",
    date: "Jan 2025",
    readTime: "10 min read",
    icon: Sparkles
  }
]

export function Research() {
  return (
    <section id="research" className="py-24 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">Research & Insights</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Latest from the<br />Welldropp Lab</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.title} className="group glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all">
              <div className="h-48 flex items-center justify-center bg-gradient-to-br from-background to-card group-hover:from-primary/5 group-hover:to-card transition-all">
                <article.icon className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-all group-hover:scale-110" />
              </div>
              <div className="p-8">
                <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-3">{article.category}</p>
                <h3 className="text-lg font-black mb-4 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <div className="pt-6 border-t border-border flex justify-between items-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  <span>{article.date}</span>
                  <span className="text-primary">{article.readTime} →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
