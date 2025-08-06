import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from 'lucide-react'
import Link from "next/link"
import Hero from "@/components/ui/hero"
import Navbar from "@/components/ui/navbar"
import Section from "@/components/layout/section"

export default function Page() {
  return (
    <div className="min-h-screen relative">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <main className="relative z-10">
        <Navbar />
        <Hero />

        {/* Services section */}
        <section id="work" className="py-20">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-lg">
                services & expertise
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <ServiceCard 
                title="Backend Architecture" 
                description="Design and implement scalable backend systems with focus on performance and reliability." 
              />
              <ServiceCard
                title="System Integration"
                description="Connect disparate systems and create seamless data flows across your tech stack."
              />
              <ServiceCard 
                title="Performance Optimization" 
                description="Analyze and optimize existing systems for better performance and reduced operational costs." 
              />
            </div>
          </div>
        </section>

        {/* Contact section */}
        <Section variant="dark" className="py-32">
          <div className="container mx-auto px-6 text-center">
            <Button variant="outline" className="mb-8 border-white/20 text-white hover:bg-white/10 rounded-lg">
              let&apos;s connect
            </Button>
            <h2 className="mb-6 text-6xl font-bold tracking-tight">
              READY TO OPTIMIZE
              <br />
              YOUR SYSTEMS?
            </h2>
            <p className="mb-8 text-xl text-gray-400 max-w-2xl mx-auto">
              I&apos;m available for consulting projects and would love to discuss
              <br />
              how we can improve your backend infrastructure.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg">
              Get in touch
            </Button>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-gray-400">© 2024 Jesse Everts. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-gray-300">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://github.com" target="_blank" className="text-white hover:text-gray-300">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="mailto:jesse@everts.dev" className="text-white hover:text-gray-300">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-sm text-gray-400">Technical Consultant & Backend Specialist</p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group relative p-6 border border-white/20 rounded-lg hover:border-blue-500/50 transition-colors">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
      <Button variant="outline" className="mt-6 border-white/20 text-white hover:bg-white/10 rounded-lg">
        Learn more →
      </Button>
    </div>
  )
}
