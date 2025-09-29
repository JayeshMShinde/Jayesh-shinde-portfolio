"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Building, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Container } from "@/app/components/container"
import { Section } from "@/app/components/section"
import { SectionHeader } from "@/app/components/section-header"
import { training } from "@/app/data/profile"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps'
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const getTechBadges = (points: string[]) => {
    const techPoint = points.find(point => point.toLowerCase().includes('technologies used:'))
    if (!techPoint) return []
    
    const techString = techPoint.split('Technologies used:')[1]?.trim()
    if (!techString) return []
    
    return techString.split(',').map(tech => tech.trim())
  }

  return (
    <Section id="projects">
      <Container>
        <SectionHeader 
          title="Featured Projects"
          description="Showcasing my work in data analytics and full-stack development"
        />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {training.map((project, index) => {
                const techBadges = getTechBadges(project.points)
                const description = project.points.filter(point => 
                  !point.toLowerCase().includes('technologies used:')
                )

                return (
                  <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] pr-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-t-lg flex items-center justify-center">
                          <div className="text-6xl opacity-20">💻</div>
                        </div>
                        
                        <CardHeader>
                          <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </CardTitle>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {project.organization}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {project.period}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            {description.map((point, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>

                          {techBadges.length > 0 && (
                            <div className="space-y-2">
                              <p className="text-sm font-medium">Technologies:</p>
                              <div className="flex flex-wrap gap-2">
                                {techBadges.map((tech, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="flex flex-col sm:flex-row gap-2 pt-4">
                            {project.github_url ? (
                              <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button size="sm" variant="outline" className="w-full min-h-[44px]">
                                  <Github className="w-4 h-4 mr-2" />
                                  Code
                                </Button>
                              </a>
                            ) : (
                              <Button size="sm" variant="outline" className="flex-1 min-h-[44px]" disabled>
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            )}
                            {project.url ? (
                              <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button size="sm" variant="outline" className="w-full min-h-[44px]">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Demo
                                </Button>
                              </a>
                            ) : (
                              <Button size="sm" variant="outline" className="flex-1 min-h-[44px]" disabled>
                                <ExternalLink className="w-4 h-4 mr-2" />
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
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}