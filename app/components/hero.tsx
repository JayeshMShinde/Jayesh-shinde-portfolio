"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Container } from "@/app/components/container"
import { personalInfo } from "@/app/data/profile"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-950/30 to-purple-950/30 dark:from-slate-950 dark:via-blue-950/50 dark:to-purple-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-background/80 to-background dark:from-blue-900/20 dark:via-slate-900/50 dark:to-black" />
      
      <Container className="relative z-10 py-20">
        <div className="text-center space-y-8 sm:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold px-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                {personalInfo.name}
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground px-4">
                Data Analyst & Full Stack Developer
              </p>
              <div className="flex justify-center">
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-6 font-light"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-6 justify-center items-center px-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-medium rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 min-h-[56px]"
            >
              <Mail className="w-5 h-5 mr-3" />
              Get In Touch
              <ArrowDown className="w-5 h-5 ml-3 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="outline" size="lg" asChild className="min-h-[48px] px-6">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="min-h-[48px] px-6">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="min-h-[48px] px-6">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}