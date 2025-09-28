"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Container } from "@/app/components/container"
import { Section } from "@/app/components/section"
import { SectionHeader } from "@/app/components/section-header"
import { training } from "@/app/data/profile"

export function Projects() {
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

        <div className="grid md:grid-cols-2 gap-8">
          {training.map((project, index) => {
            const techBadges = getTechBadges(project.points)
            const description = project.points.filter(point => 
              !point.toLowerCase().includes('technologies used:')
            )

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-t-lg flex items-center justify-center">
                    <div className="text-6xl opacity-20">💻</div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

                    <div className="flex gap-2 pt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}