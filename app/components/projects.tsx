"use client"

import { motion } from "framer-motion"
import { Github, Calendar, Building, Eye, Code2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Container } from "@/app/components/container"
import { Section } from "@/app/components/section"
import { SectionHeader } from "@/app/components/section-header"
import { training } from "@/app/data/profile"
import { useState, useEffect } from "react"

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)

  const getTechBadges = (points: string[]) => {
    const techPoint = points.find(point => point.toLowerCase().includes('technologies used:'))
    if (!techPoint) return []

    const techString = techPoint.split('Technologies used:')[1]?.trim()
    if (!techString) return []

    return techString.split(',').map(tech => tech.trim())
  }

  // Update slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  const maxSlides = Math.max(0, training.length - slidesPerView)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1))
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [maxSlides])

  return (
    <Section id="projects" className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/50 dark:from-slate-900/30 dark:via-blue-900/10 dark:to-purple-900/30" />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5"
          style={{
            left: `${15 + (i * 15)}%`,
            top: `${25 + (i * 10)}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {i % 4 === 0 && <div className="w-12 h-12 border-2 border-blue-300 rounded-full" />}
          {i % 4 === 1 && <div className="w-8 h-8 border-2 border-purple-300 rotate-45" />}
          {i % 4 === 2 && <div className="w-16 h-6 border-2 border-cyan-300 rounded-lg" />}
          {i % 4 === 3 && <div className="w-6 h-6 border-2 border-indigo-300 rounded-lg rotate-12" />}
        </motion.div>
      ))}

      <Container className="relative z-10">
        <SectionHeader
          title="Featured Projects"
          description="Showcasing innovative solutions in data analytics and full-stack development"
        />

        {/* Modern Sliding Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <ChevronLeft className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-[-2px] transition-transform" />
            </motion.button>

            {/* Slide indicators */}
            <div className="flex gap-2">
              {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 dark:bg-blue-400 w-8'
                      : 'bg-blue-200 dark:bg-blue-800 hover:bg-blue-300 dark:hover:bg-blue-700'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-[2px] transition-transform" />
            </motion.button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              animate={{
                translateX: `-${(currentSlide * 100) / slidesPerView}%`
              }}
              style={{
                width: `${(training.length * 100) / slidesPerView}%`
              }}
            >
              {training.map((project, index) => {
                const techBadges = getTechBadges(project.points)
                const description = project.points.filter(point =>
                  !point.toLowerCase().includes('technologies used:')
                )

                return (
                  <div
                    key={index}
                    className="px-4"
                    style={{ width: `${100 / training.length}%` }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: (index % slidesPerView) * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      className="group h-full"
                    >
                      <Card className="h-full relative overflow-hidden border-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group-hover:-translate-y-2">
                        {/* Project Visual Header */}
                        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500">
                          {/* Animated background pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px] animate-pulse" />
                          </div>

                          {/* Central icon */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="relative">
                              <Code2 className="w-12 h-12 text-white/90 group-hover:text-white transition-colors duration-300" />
                              <motion.div
                                className="absolute inset-0 border-2 border-white/30 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                              />
                            </div>
                          </motion.div>

                          {/* Tech badges */}
                          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                            {techBadges.slice(0, 2).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Project indicator */}
                          <div className="absolute top-3 right-3">
                            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <Sparkles className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Card Content */}
                        <CardHeader className="pb-3 pt-4">
                          <CardTitle className="text-lg font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                            {project.title}
                          </CardTitle>

                          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Building className="w-3 h-3 text-blue-500 flex-shrink-0" />
                              <span className="font-medium truncate text-xs">{project.organization}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3 h-3 text-purple-500 flex-shrink-0" />
                              <span className="text-xs">{project.period}</span>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4 flex-1 flex flex-col pt-0">
                          {/* Description */}
                          <div className="space-y-2 flex-1">
                            {description.slice(0, 2).map((point, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Additional tech badges */}
                          {techBadges.length > 2 && (
                            <div className="space-y-2">
                              <div className="flex flex-wrap gap-1">
                                {techBadges.slice(2, 5).map((tech, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="secondary"
                                    className="text-xs px-2 py-0.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-0"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                                {techBadges.length > 5 && (
                                  <Badge variant="outline" className="text-xs px-2 py-0.5 border-dashed">
                                    +{techBadges.length - 5}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Action buttons */}
                          <div className="flex gap-2 pt-2 mt-auto">
                            {project.github_url ? (
                              <Button
                                asChild
                                size="sm"
                                variant="outline"
                                className="flex-1 h-9 text-xs border-2 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300"
                              >
                                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-3 h-3 mr-1" />
                                  Code
                                </a>
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 h-9 text-xs opacity-50 cursor-not-allowed"
                                disabled
                              >
                                <Github className="w-3 h-3 mr-1" />
                                Code
                              </Button>
                            )}

                            {project.url ? (
                              <Button
                                asChild
                                size="sm"
                                className="flex-1 h-9 text-xs bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                              >
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                  <Eye className="w-3 h-3 mr-1" />
                                  Demo
                                </a>
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                className="flex-1 h-9 text-xs opacity-50 cursor-not-allowed bg-muted"
                                disabled
                              >
                                <Eye className="w-3 h-3 mr-1" />
                                Demo
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200/50 dark:border-blue-800/50">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              More projects available on GitHub
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}