"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { name: "React/Next.js", level: 95, color: "bg-emerald-500" },
    { name: "TypeScript", level: 90, color: "bg-teal-500" },
    { name: "Node.js", level: 85, color: "bg-emerald-600" },
    { name: "Python", level: 80, color: "bg-teal-600" },
    { name: "PostgreSQL", level: 85, color: "bg-emerald-400" },
    { name: "AWS/Cloud", level: 75, color: "bg-teal-400" },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration, message encryption, and file sharing capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Socket.io", "OpenAI", "MongoDB"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with kanban boards, time tracking, and team analytics.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Vue.js", "Express", "Redis", "Chart.js"],
      github: "#",
      live: "#",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100 text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-stone-800">Jesse Everts</div>
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-emerald-600" : "text-stone-600 hover:text-stone-800"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5"></div>
        <div
          className={`max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-stone-800">Technical Consultant</h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto">
          I design, build, and test backend systems by combining development, analysis and automation to bring clarity and stability to complex software environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
            >
              View My Experience <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-stone-500 hover:text-emerald-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-stone-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-stone-800">About Me</h2>
              <p className="text-stone-600 text-lg mb-6">
                With over 5 years of experience in full-stack development, I've helped startups and enterprises build
                scalable web applications that serve millions of users.
              </p>
              <p className="text-stone-600 text-lg mb-6">
                I'm passionate about clean code, user experience, and staying at the forefront of technology. When I'm
                not coding, you'll find me contributing to open source projects or mentoring aspiring developers.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white border border-stone-200 rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600">50+</div>
                  <div className="text-stone-500">Projects Completed</div>
                </div>
                <div className="bg-white border border-stone-200 rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-teal-600">5+</div>
                  <div className="text-stone-500">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 shadow-lg">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Alex Chen"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-100/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-stone-800 font-medium">{skill.name}</span>
                  <span className="text-stone-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-stone-200 shadow-sm">
              <CardHeader>
                <Code className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle className="text-stone-800">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 mb-4">Modern, responsive user interfaces</p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border border-stone-200 shadow-sm">
              <CardHeader>
                <Database className="w-8 h-8 text-teal-600 mb-2" />
                <CardTitle className="text-stone-800">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 mb-4">Scalable server-side solutions</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "PostgreSQL", "Redis"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-teal-50 text-teal-700 border-teal-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border border-stone-200 shadow-sm">
              <CardHeader>
                <Globe className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle className="text-stone-800">DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 mb-4">Cloud infrastructure & deployment</p>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Docker", "CI/CD", "Vercel"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`bg-white border border-stone-200 shadow-sm overflow-hidden ${
                  project.featured ? "md:grid md:grid-cols-2" : ""
                }`}
              >
                <div className="relative group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github}>
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                        <a href={project.live}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-stone-800 text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-stone-600">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-stone-300 text-stone-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="sm" asChild className="text-stone-600 hover:text-emerald-600">
                        <a href={project.github}>
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild className="text-stone-600 hover:text-emerald-600">
                        <a href={project.live}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">Let's Work Together</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-stone-800">Get In Touch</h3>
              <p className="text-stone-600 text-lg mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you need a full-stack
                developer or want to discuss a potential collaboration, I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span className="text-stone-600">alex.chen@example.com</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-stone-500 hover:text-emerald-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-stone-500 hover:text-emerald-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-stone-500 hover:text-emerald-600 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <Card className="bg-white border border-stone-200 shadow-sm">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-stone-50 border-stone-200 text-stone-800 placeholder-stone-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-stone-50 border-stone-200 text-stone-800 placeholder-stone-400"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      className="bg-stone-50 border-stone-200 text-stone-800 placeholder-stone-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-stone-50 border-stone-200 text-stone-800 placeholder-stone-400"
                    />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-500">© 2024 Alex Chen. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
