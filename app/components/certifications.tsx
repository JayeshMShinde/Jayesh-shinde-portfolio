"use client"

import { motion } from "framer-motion"
import { Award, Calendar, Building } from "lucide-react"
import { Card, CardContent } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Container } from "@/app/components/container"
import { Section } from "@/app/components/section"
import { SectionHeader } from "@/app/components/section-header"
import { certifications } from "@/app/data/profile"

export function Certifications() {
  return (
    <Section id="certifications">
      <Container>
        <SectionHeader 
          title="Certifications"
          description="Professional certifications and achievements"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building className="w-4 h-4" />
                          {cert.organization}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {cert.year}
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-3">
                        Certified
                      </Badge>
                    </div>
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