"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Camera,
  AtSign,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Lens } from "@/components/ui/lens";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const devSkills = [
    { name: "JavaScript", icon: "/icons/js.png", level: 70 },
    { name: "Node.js", icon: "/icons/njs.png", level: 85 },
    { name: "React", icon: "/icons/react.png", level: 65 },
    { name: "Next.js", icon: "/icons/nextjs.png", level: 70 },
    { name: "TailWindCSS", icon: "/icons/tw.png", level: 80 },
    { name: "MongoDB", icon: "/icons/mongo.png", level: 85 },
    { name: "Supabase", icon: "/icons/supabase.png", level: 70 },
    { name: "Discord.JS", icon: "/icons/djs.png", level: 90 },
    { name: "Astro", icon: "/icons/astro.png", level: 60 },
  ];

  const photography = [
    { name: "Lightroom", icon: "/icons/lr.png" },
    { name: "Photoshop", icon: "/icons/ps.png" },
    { name: "Davinci Resolve", icon: "/icons/dr.png" },
  ];

  const projects = [
    {
      title: "JGS Store",
      description:
        "Una tienda de scripts de Fivem hecha con NextJS y Tebex para JGS Store.",
      image: "/projects/jgs-store.png",
      tags: ["NextJS", "TailwindCSS", "TebexAPI"],
      link: "https://jgs-store.com",
    },
    {
      title: "StudyGate",
      description:
        "Plataforma de estudio con funcionalidades avanzadas en seguimiento de progreso. (En desarrollo...)",
      image: "/projects/studygate.png",
      tags: ["Next.js", "TailwindCSS", "Supabase", "ShadCN"],
      link: "https://studygate-kappa.vercel.app/",
    },
    {
      title: "Better Pokedex",
      description:
        "Una pokedex con interfaz moderna y gran cantidad de información. Utiliza la PokeAPI para nutrirse de datos",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["NextJS", "TailwindCSS", "PokeAPI"],
      link: "https://better-pokedex.vercel.app/",
    },
    {
      title: "Politimos",
      description:
        "Web donde se exponen todos los casos de corrupción política en españa.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TailwindCSS"],
      link: "https://politimos.vercel.app/",
    },
  ];

  const education = [
    {
      title: "Bachillerato Tecnológico",
      institution: "IES Marqués de Santillana",
      period: "2024 - Presente",
      description:
        "Con pensamiento futuro de una ingienería en informática o telecomunicaciones",
    },
    {
      title: "English B2",
      institution: "Cambridge English",
      period: "Presente",
      description: "Trabajando en la obtención del certificado B2",
    },
  ];

  const experience = [
    {
      title: "Web Developer",
      company: "JGS Store",
      period: "2024 - Presente",
      description: "Desarrollo de interfaces modernas con NextJS y Tebex",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/20">
        <nav className="container mx-auto px-5 py-5">
          <div className="flex items-center justify-between">
            <div
              className={`text-md font-semibold transition-all duration-500 flex justify-center items-center gap-4 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <Avatar
                className={`w-10 h-10 mx-auto transition-all duration-700 ${
                  isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                } hover:scale-105 relative`}
              >
                <AvatarImage
                  src="/fotomia.png?height=24&width=24"
                  alt="Profile"
                />
                <AvatarFallback className="text-4xl bg-gradient-to-br from-neutral-700 to-neutral-800 text-white">
                  AB
                </AvatarFallback>
              </Avatar>
              Alejandro Bolado
            </div>

            {/* Desktop Navigation */}
            <div
              className={`hidden md:flex items-center space-x-8 transition-all duration-500 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-5 opacity-0"
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
        <div className="text-center space-y-8 px-6 z-50">
          <Avatar
            className={`w-40 h-40 md:w-48 md:h-48 mx-auto transition-all duration-700 ${
              isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } hover:scale-105 relative`}
          >
            <AvatarImage
              src="/fotomia.png?height=192&width=192"
              alt="Profile"
            />
            <AvatarFallback className="text-4xl bg-gradient-to-br from-neutral-700 to-neutral-800 text-white">
              AB
            </AvatarFallback>
          </Avatar>

          <div className="space-y-4">
            <h1
              className={`text-3xl md:text-6xl font-bold transition-all duration-700 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Alejandro Bolado
            </h1>
            <p
              className={`text-md sm:text-lg text-neutral-500 max-w-2xl mx-auto transition-all duration-700 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Creando experiencias digitales excepcionales con código limpio y
              diseño moderno
            </p>
          </div>

          <div
            className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
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
              <Camera className="w-4 h-4 mr-2" />
              Fotografía
            </Badge>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
            <svg
              className="w-6 h-6 text-neutral-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-20 space-y-32 relative z-20">
        {/* About Section */}
        <section id="about" className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Sobre Mí</h2>
            <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Soy un desarrollador web apasionado con más de 3 años de
              experiencia creando aplicaciones web modernas y responsivas. Me
              especializo en tecnologías como React, Next.js, Node.js y
              TypeScript. Mi enfoque está en crear experiencias de usuario
              excepcionales con código limpio y eficiente.
            </p>
          </div>

          {/* Dev Skills Grid */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-center mb-12">
              Tecnologías como programador
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {devSkills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-neutral-900/30 hover:bg-neutral-900/50 hover:scale-105 transition-all duration-300 group backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700/50 hover:shadow-md hover:shadow-blue-500/5"
                  >
                    <img src={skill.icon} className="w-14 h-14" />
                    <div className="space-y-2 w-full">
                      <h4 className="font-medium text-white">{skill.name}</h4>
                      <div className="w-full bg-neutral-800 rounded-full h-2">
                        <div
                          className="bg-white h-2 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-neutral-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Photography Skills Grid */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-center mb-12">
              Habilidades como fotógrafo
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {photography.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-neutral-900/30 hover:bg-neutral-900/50 hover:scale-105 transition-all duration-300 group backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700/50 hover:shadow-md hover:shadow-blue-500/5"
                  >
                    <img src={skill.icon} className="w-14 h-14" />
                    <div className="space-y-2 w-full">
                      <h4 className="font-medium text-white">{skill.name}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: "10+", label: "Proyectos" },
              { number: "3+", label: "Años" },
              { number: "10+", label: "Clientes" },
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
                    <CardTitle className="text-xl font-semibold text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-neutral-300">
                      {project.description}
                    </CardDescription>
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

        {/* Photography Section */}
        <section id="projects" className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Mis fotos</h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes y significativos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "/photos/1.jpg",
              "/photos/2.jpg",
              "/photos/3.jpg",
              "/photos/4.jpg",
              "/photos/5.jpg",
              "/photos/6.jpg",
              "/photos/7.jpg",
              "/photos/8.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              >
                <Lens>
                  <img
                    src={src}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-100 object-cover transform"
                  />
                </Lens>
              </div>
            ))}
          </div>

          {/* Botón "Ver más" */}
          <div className="text-center mt-10">
            <a
              href="https://instagram.com/bolado.visuals" // cambia esto por tu enlace real
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 w-fit mx-auto px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-neutral-200 transition-colors duration-200"
            >
              <Instagram />
              Ver más en mi Instagram
            </a>
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
                        <h4 className="font-semibold text-white text-lg">
                          {exp.title}
                        </h4>
                        <p className="text-neutral-300 font-medium">
                          {exp.company}
                        </p>
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
                        <h4 className="font-semibold text-white text-lg">
                          {edu.title}
                        </h4>
                        <p className="text-neutral-300 font-medium">
                          {edu.institution}
                        </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Card 1: Información de Contacto */}
              <Card className="rounded-2xl border border-neutral-800 bg-neutral-900/30 transition-all duration-300 backdrop-blur-sm hover:border-neutral-700/50 hover:shadow-md hover:shadow-green-500/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-4 text-white">
                    <Phone className="w-6 h-6 text-green-400" />
                    Información de Contacto
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        label: "Email",
                        value: "alexbolatrue@gmail.com",
                      },
                      {
                        icon: MapPin,
                        label: "Ubicación",
                        value: "Cantabria, España",
                      },
                      {
                        icon: AtSign,
                        label: "Discord",
                        value: "@zelpro",
                      },
                    ].map((contact, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors duration-200">
                          <contact.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            {contact.label}
                          </p>
                          <p className="text-neutral-300">{contact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Redes Sociales */}
              <Card className="rounded-2xl border border-neutral-800 bg-neutral-900/30 transition-all duration-300 backdrop-blur-sm hover:border-neutral-700/50 hover:shadow-md hover:shadow-purple-500/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-4 text-white">
                    <Globe className="w-6 h-6 text-purple-400" />
                    Redes Sociales
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Github,
                        name: "GitHub",
                        handle: "@zelpro-dev",
                        href: "https://github.com/zelpro-dev"
                      },
                      {
                        icon: Instagram,
                        name: "Mi Instagram",
                        handle: "@alejandro_bolado_",
                        href: "https://instagram.com/alejandro_bolado_"
                      },
                      {
                        icon: Instagram,
                        name: "Bolado Visuals (Fotografía)",
                        handle: "@bolado.visuals",
                        href: "https://instagram.com/bolado.visuals"
                      },
                    ].map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full rounded-xl border-neutral-700 bg-neutral-900/30 hover:bg-neutral-900/30 hover:text-white text-white hover:scale-105 justify-start h-16 transition-all duration-200 backdrop-blur-sm "
                      >
                        <a className="flex items-center justify-center w-full mx-auto" target="_blank" rel="noopener noreferrer" href={social.href}>
                        <social.icon className="w-6 h-6 mr-4" />
                        <div className="text-left">
                          <p className="font-medium">{social.name}</p>
                          <p className="text-sm text-neutral-400">
                            {social.handle}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-auto" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-900/20 py-12 relative z-20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
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
                  <p>Cantabria, España</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
                <div className="flex justify-center md:justify-end space-x-4">
                  {[Github, Instagram].map((Icon, index) => (
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
                <div className="text-neutral-300 text-sm">
                  © 2025 Alejandro Bolado. Todos los derechos reservados.
                </div>
                <div className="text-neutral-300 text-sm flex items-center">
                  Hecho con <span className="text-red-500 mx-1">❤️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
