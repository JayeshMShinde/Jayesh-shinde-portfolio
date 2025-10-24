"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code, Database } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Container } from "@/app/components/container"
import { personalInfo } from "@/app/data/profile"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const floatingIcons = [
    { Icon: Code, delay: 0, x: -20, y: -10 },
    { Icon: Database, delay: 2, x: 20, y: -15 },
    { Icon: Sparkles, delay: 4, x: -15, y: 10 },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background - Light mode friendly */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-blue-950/50 dark:to-purple-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent dark:from-blue-900/30 dark:via-transparent dark:to-transparent" />

      {/* Animated floating elements - Better visibility in light mode */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-30 dark:opacity-20"
          style={{ left: `${20 + index * 30}%`, top: `${20 + index * 20}%` }}
          animate={{
            x: [0, x, -x, 0],
            y: [0, y, -y, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8 + delay,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-12 h-12 text-blue-600/40 dark:text-blue-400/30" />
        </motion.div>
      ))}

      {/* Grid pattern overlay - Subtle in light mode */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <Container className="relative z-10 py-20">
        <div className="text-center space-y-8 sm:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Enhanced title with better gradients for light mode */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold px-4 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent drop-shadow-2xl dark:drop-shadow-2xl animate-gradient-x">
                {personalInfo.name}
              </span>
              {/* Glow effect - Subtle in light mode */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-cyan-400/20 blur-3xl -z-10 animate-pulse" />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium px-4 text-gray-800 dark:text-foreground bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Data Analyst & Full Stack Developer
              </p>
              <div className="flex justify-center">
                <motion.div
                  className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-muted-foreground max-w-4xl mx-auto leading-relaxed px-6 font-light"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col gap-6 justify-center items-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white border-0 px-8 py-4 text-base font-medium rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 min-h-[56px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Get In Touch</span>
                <ArrowDown className="w-5 h-5 ml-3 group-hover:translate-y-1 transition-transform relative z-10" />
              </Button>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" asChild className="min-h-[48px] px-6 border-2 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 group">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" asChild className="min-h-[48px] px-6 border-2 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-all duration-300 group">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" className="min-h-[48px] px-6 border-2 hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 transition-all duration-300 group">
                  <Download className="w-4 h-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
                  Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}