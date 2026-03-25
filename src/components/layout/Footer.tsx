
"use client"

import Link from "next/link"
import { Twitter, Github, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="font-headline font-bold text-lg">W</span>
              </div>
              <span className="font-headline font-bold text-2xl">WELLDROPP</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building the next generation of intelligent software systems. We bridge the gap between complex AI research and practical business applications.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary transition-colors">AI Agents</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Chatbots</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">LLM Solutions</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">App Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#research" className="hover:text-primary transition-colors">Research</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to get the latest AI insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary px-4 py-2 rounded-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WELLDROPP Digital Solutions. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
