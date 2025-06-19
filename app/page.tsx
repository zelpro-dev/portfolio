"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  ExternalLink,
  Code,
  Database,
  Shield,
  GraduationCap,
  Briefcase,
  Calendar,
  Menu,
  X,
  Download,
  Atom,
  Triangle,
  FileText,
  Server,
  Code2,
  Container,
  Layers,
  Send,
  User,
  MessageSquare,
  ArrowRight,
  Instagram,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

// Componente de partículas flotantes
const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar el canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Crear partículas
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
    }> = []

    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"]

    // Inicializar partículas
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Actualizar posición
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Dibujar partícula con glow
        ctx.save()
        ctx.globalAlpha = particle.opacity

        // Efecto glow
        ctx.shadowColor = particle.color
        ctx.shadowBlur = 8
        ctx.fillStyle = particle.color

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        // Conectar partículas cercanas
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.save()
              ctx.globalAlpha = ((100 - distance) / 100) * 0.1
              ctx.strokeStyle = particle.color
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
              ctx.restore()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}

// Componente de orbes flotantes
const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orbe azul */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
        style={{
          animation: "float 6s ease-in-out infinite",
          animationDelay: "0s",
        }}
      />

      {/* Orbe púrpura */}
      <div
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
        style={{
          animation: "float 8s ease-in-out infinite reverse",
          animationDelay: "2s",
        }}
      />

      {/* Orbe verde */}
      <div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse"
        style={{
          animation: "float 7s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />

      {/* Orbe cian */}
      <div
        className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
        style={{
          animation: "float 9s ease-in-out infinite reverse",
          animationDelay: "1s",
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.05); }
          50% { transform: translateY(0px) translateX(20px) scale(1); }
          75% { transform: translateY(20px) translateX(-10px) scale(0.95); }
        }
      `}</style>
    </div>
  )
}

// Componente de gradiente animado
const AnimatedGradient = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `,
          animation: "gradientShift 10s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { 
            filter: hue-rotate(0deg) brightness(1);
          }
          25% { 
            filter: hue-rotate(90deg) brightness(1.2);
          }
          50% { 
            filter: hue-rotate(180deg) brightness(0.8);
          }
          75% { 
            filter: hue-rotate(270deg) brightness(1.1);
          }
        }
      `}</style>
    </div>
  )
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)

    // Seguimiento del mouse para efectos interactivos
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = [
    { name: "React", icon: Atom, level: 95 },
    { name: "Next.js", icon: Triangle, level: 90 },
    { name: "TypeScript", icon: FileText, level: 90 },
    { name: "Node.js", icon: Server, level: 85 },
    { name: "Python", icon: Code2, level: 80 },
    { name: "MongoDB", icon: Database, level: 85 },
    { name: "PostgreSQL", icon: Layers, level: 80 },
    { name: "Docker", icon: Container, level: 75 },
  ]

  const projects = [
    {
      title: "JGS Store",
      description: "Una tienda de scripts de Fivem hecha con NextJS y Tebex para JGS Store.",
      image: "/projects/jgs-store.png",
      tags: ["NextJS", "TailwindCSS", "TebexAPI"],
      link: "https://jgs-store.com",
    },
    {
      title: "StudyGate",
      description: "Plataforma de estudio con funcionalidades avanzadas en seguimiento de progreso. (En desarrollo...)",
      image: "/projects/studygate.png",
      tags: ["Next.js", "TailwindCSS", "Supabase", "ShadCN"],
      link: "https://studygate-kappa.vercel.app/",
    },
    {
      title: "Better Pokedex",
      description: "Una pokedex con interfaz moderna y gran cantidad de información. Utiliza la PokeAPI para nutrirse de datos",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["NextJS", "TailwindCSS", "PokeAPI"],
      link: "https://better-pokedex.vercel.app/",
    },
    {
      title: "Politimos",
      description: "Web donde se exponen todos los casos de corrupción política en españa.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TailwindCSS"],
      link: "https://politimos.vercel.app/",
    },
  ]

  const education = [
    {
      title: "Bachillerato Tecnológico",
      institution: "IES Marqués de Santillana",
      period: "2024 - Presente",
      description: "Con pensamiento futuro de una ingienería en informática o telecomunicaciones",
    },
    {
      title: "English B2",
      institution: "Cambridge English",
      period: "Presente",
      description: "Trabajando en la obtención del certificado B2",
    },
  ]

  const experience = [
    {
      title: "Full Stack Developer",
      company: "JGS Store",
      period: "2024 - Presente",
      description: "Desarrollo de interfaces modernas con NextJS y Tebex",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Efectos de fondo dinámicos */}
      <AnimatedGradient />
      <FloatingOrbs />
      <FloatingParticles />

      {/* Efecto de seguimiento del mouse */}
      <div
        className="fixed pointer-events-none z-10 w-6 h-6 rounded-full bg-white/10 blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(1)",
        }}
      />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-neutral-800/50">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div
              className={`text-xl font-semibold transition-all duration-500 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              Alejandro Bolado
            </div>

            {/* Desktop Navigation */}
            <div
              className={`hidden md:flex items-center space-x-8 transition-all duration-500 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
              }`}
            >
              <button
                onClick={() => scrollToSection("about")}
                className="text-neutral-300 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                Sobre Mí
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-neutral-300 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                Proyectos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-neutral-300 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                Experiencia
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-neutral-200 hover:scale-105 transition-all duration-200"
              >
                <Mail className="inline-block mr-2 size-5 mb-[2px]" />
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-8 h-8 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Menu
                  className={`w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-6 pb-6 border-t border-neutral-800">
              <div className="flex flex-col space-y-6 pt-6">
                {[
                  { name: "Sobre Mí", section: "about" },
                  { name: "Proyectos", section: "projects" },
                  { name: "Experiencia", section: "experience" },
                ].map((item) => (
                  <button
                    key={item.section}
                    onClick={() => scrollToSection(item.section)}
                    className="text-neutral-300 hover:text-white hover:translate-x-1 transition-all duration-200 font-medium text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors duration-200 w-fit"
                >
                  <Mail className="inline-block mr-2 size-5 mb-[2px]" />
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-20">
        <div className="text-center space-y-8 px-6">
          <Avatar
            className={`w-40 h-40 md:w-48 md:h-48 mx-auto transition-all duration-700 ${
              isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } hover:scale-105 relative`}
            style={{
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
            }}
          >
            <AvatarImage src="/fotomia.png?height=192&width=192" alt="Profile" />
            <AvatarFallback className="text-4xl bg-gradient-to-br from-neutral-700 to-neutral-800 text-white">
              AB
            </AvatarFallback>
          </Avatar>

          <div className="space-y-4">
            <h1
              className={`text-3xl md:text-6xl font-bold transition-all duration-700 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
              }}
            >
              Alejandro Bolado
            </h1>
            <p
              className={`text-lg md:text-2xl text-neutral-400 font-light transition-all duration-700 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Full Stack Web Developer
            </p>
            <p
              className={`text-md sm:text-lg text-neutral-500 max-w-2xl mx-auto transition-all duration-700 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Creando experiencias digitales excepcionales con código limpio y diseño moderno
            </p>
          </div>

          <div
            className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-900 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Badge
              variant="outline"
              className="rounded-full px-6 py-3 bg-transparent border-neutral-600 text-neutral-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-200 hover:shadow-md hover:shadow-blue-400/15"
            >
              <Code className="w-4 h-4 mr-2" />
              Frontend
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full px-6 py-3 bg-transparent border-neutral-600 text-neutral-300 hover:border-purple-400 hover:text-purple-400 transition-all duration-200 hover:shadow-md hover:shadow-purple-400/15"
            >
              <Database className="w-4 h-4 mr-2" />
              Backend
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full px-6 py-3 bg-transparent border-neutral-600 text-neutral-300 hover:border-green-400 hover:text-green-400 transition-all duration-200 hover:shadow-md hover:shadow-green-400/15"
            >
              <Shield className="w-4 h-4 mr-2" />
              Ciberseguridad
            </Badge>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center pt-8 transition-all duration-700 delay-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Button
              className="bg-white text-black hover:bg-neutral-200 hover:scale-105 transition-all duration-200 rounded-full px-8 py-3 font-medium hover:shadow-md hover:shadow-white/15"
              onClick={() => scrollToSection("projects")}
            >
              Ver Proyectos
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-neutral-200 hover:scale-105 transition-all duration-200 rounded-full px-8 py-3 font-medium hover:shadow-md hover:shadow-white/15"
            >
              Descargar CV
              <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20 space-y-32 relative z-20">
        {/* About Section */}
        <section id="about" className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Sobre Mí</h2>
            <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Soy un desarrollador web apasionado con más de 3 años de experiencia creando aplicaciones web modernas y
              responsivas. Me especializo en tecnologías como React, Next.js, Node.js y TypeScript. Mi enfoque está en
              crear experiencias de usuario excepcionales con código limpio y eficiente.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-12">Tecnologías</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={index}
                    className="text-center space-y-4 p-6 rounded-2xl bg-neutral-900/30 hover:bg-neutral-900/50 hover:scale-105 transition-all duration-300 group backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700/50 hover:shadow-md hover:shadow-blue-500/5"
                  >
                    <IconComponent className="w-12 h-12 mx-auto text-white group-hover:text-blue-400 transition-colors duration-300" />
                    <div className="space-y-2">
                      <h4 className="font-medium text-white">{skill.name}</h4>
                      <div className="w-full bg-neutral-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-neutral-400">{skill.level}%</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "50+", label: "Proyectos" },
              { number: "3+", label: "Años" },
              { number: "20+", label: "Clientes" },
              { number: "15+", label: "Tecnologías" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 p-4 rounded-2xl bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-200 backdrop-blur-sm border border-neutral-800/30 hover:border-neutral-700/50 hover:shadow-md hover:shadow-purple-500/5"
              >
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-neutral-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Proyectos</h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes y significativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300 hover:-translate-y-2 group backdrop-blur-sm hover:border-neutral-700/50 hover:shadow-md hover:shadow-blue-500/5"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
                    <CardDescription className="text-neutral-300">{project.description}</CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="rounded-full bg-neutral-800 text-neutral-300 text-xs hover:bg-neutral-700 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={project.link} target="_blank">
                    <Button className="w-full rounded-full bg-white text-black hover:bg-neutral-200 hover:scale-105 transition-all duration-200 mt-6 hover:shadow-md hover:shadow-white/15">
                      Ver Proyecto
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Experiencia</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
                Experiencia Profesional
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card
                    key={index}
                    className="rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-200 backdrop-blur-sm hover:border-neutral-700/50 hover:shadow-md hover:shadow-blue-500/5"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white text-lg">{exp.title}</h4>
                        <p className="text-neutral-300 font-medium">{exp.company}</p>
                        <div className="flex items-center text-sm text-neutral-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <p className="text-neutral-400">{exp.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-purple-400" />
                Educación
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-200 backdrop-blur-sm hover:border-neutral-700/50 hover:shadow-md hover:shadow-purple-500/5"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white text-lg">{edu.title}</h4>
                        <p className="text-neutral-300 font-medium">{edu.institution}</p>
                        <div className="flex items-center text-sm text-neutral-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                        <p className="text-neutral-400">{edu.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Contacto</h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300 backdrop-blur-sm hover:border-neutral-700/50 hover:shadow-md hover:shadow-green-500/5">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-semibold flex items-center justify-center gap-2">
                        <MessageSquare className="w-6 h-6 text-blue-400" />
                        Envíame un mensaje
                      </h3>
                      <p className="text-neutral-300">Te responderé lo antes posible</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Nombre
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre completo"
                          className="bg-neutral-800/50 border-neutral-700 text-white placeholder-neutral-400 rounded-xl focus:border-blue-400 transition-colors duration-200 backdrop-blur-sm"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          className="bg-neutral-800/50 border-neutral-700 text-white placeholder-neutral-400 rounded-xl focus:border-purple-400 transition-colors duration-200 backdrop-blur-sm"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Mensaje
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Cuéntame sobre tu proyecto..."
                          rows={5}
                          className="bg-neutral-800/50 border-neutral-700 text-white placeholder-neutral-400 rounded-xl focus:border-green-400 transition-colors duration-200 resize-none backdrop-blur-sm"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 rounded-xl hover:scale-105 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/15"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensaje
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300 backdrop-blur-sm hover:border-neutral-700/50 hover:shadow-md hover:shadow-green-500/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                      <Phone className="w-6 h-6 text-green-400" />
                      Información de Contacto
                    </h3>
                    <div className="space-y-6">
                      {[
                        {
                          icon: Mail,
                          label: "Email",
                          value: "alejandro@email.com",
                        },
                        {
                          icon: Phone,
                          label: "Teléfono",
                          value: "+1 (555) 123-4567",
                        },
                        {
                          icon: MapPin,
                          label: "Ubicación",
                          value: "Ciudad, País",
                        },
                      ].map((contact, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors duration-200">
                            <contact.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">{contact.label}</p>
                            <p className="text-neutral-300">{contact.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300 backdrop-blur-sm hover:border-neutral-700/50 hover:shadow-md hover:shadow-purple-500/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                      <Globe className="w-6 h-6 text-purple-400" />
                      Redes Sociales
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: Github,
                          name: "GitHub",
                          handle: "@alejandrobolado",
                        },
                        {
                          icon: Linkedin,
                          name: "LinkedIn",
                          handle: "Alejandro Bolado",
                        },
                        {
                          icon: Instagram,
                          name: "Instagram",
                          handle: "alejandrobolado.com",
                        },
                      ].map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full rounded-xl border-neutral-700 bg-transparent text-white hover:bg-neutral-800 hover:scale-105 justify-start h-16 transition-all duration-200 backdrop-blur-sm hover:border-neutral-600 hover:shadow-md hover:shadow-purple-500/5"
                        >
                          <social.icon className="w-6 h-6 mr-4" />
                          <div className="text-left">
                            <p className="font-medium">{social.name}</p>
                            <p className="text-sm text-neutral-400">{social.handle}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 ml-auto" />
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-900/20 py-16 relative z-20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Footer Header */}
            <div className="text-center space-y-6 mb-12">
              <Avatar className="w-20 h-20 mx-auto hover:scale-110 transition-transform duration-300">
                <AvatarImage src="/fotomia.png?height=80&width=80" alt="Alejandro Bolado" />
                <AvatarFallback className="text-xl bg-gradient-to-br from-neutral-700 to-neutral-800 text-white">
                  AB
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold mb-2">Alejandro Bolado</h3>
                <p className="text-neutral-300">Full Stack Web Developer</p>
              </div>
            </div>

            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                <div className="space-y-2">
                  {[
                    { name: "Sobre Mí", section: "about" },
                    { name: "Proyectos", section: "projects" },
                    { name: "Experiencia", section: "experience" },
                    { name: "Contacto", section: "contact" },
                  ].map((link) => (
                    <button
                      key={link.section}
                      onClick={() => scrollToSection(link.section)}
                      className="block text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <div className="space-y-2 text-neutral-300">
                  <p>alexbolatrue@gmail.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>Ciudad, País</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
                <div className="flex justify-center md:justify-end space-x-4">
                  {[Github, Linkedin, Instagram].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-300 hover:text-white hover:scale-110 transition-all duration-200 hover:bg-neutral-700"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-neutral-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-neutral-300 text-sm">© 2025 Alejandro Bolado. Todos los derechos reservados.</div>
                <div className="text-neutral-300 text-sm flex items-center">
                  Hecho con <span className="text-red-500 mx-1">❤️</span> y mucho café
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
