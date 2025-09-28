"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/app/components/ui/card"
import { Container } from "@/app/components/container"
import { Section } from "@/app/components/section"
import { SectionHeader } from "@/app/components/section-header"
import { experiences } from "@/app/data/profile"

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeader 
          title="Professional Experience"
          description="My journey in data analytics and full-stack development"
        />

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 sm:mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
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