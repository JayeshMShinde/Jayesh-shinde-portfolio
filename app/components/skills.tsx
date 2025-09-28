"use client"

import { motion } from "framer-motion"
import { Badge } from "@/app/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Container } from "@/app/components/container"
import { Section } from "@/app/components/section"
import { SectionHeader } from "@/app/components/section-header"
import { skills } from "@/app/data/profile"

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/30">
      <Container>
        <SectionHeader 
          title="Skills & Technologies"
          description="The tools and technologies I work with"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <category.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}