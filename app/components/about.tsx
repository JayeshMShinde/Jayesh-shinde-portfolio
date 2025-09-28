"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Star } from "lucide-react"
import { Card, CardContent } from "@/app/components/ui/card"
import { Container } from "@/app/components/container"
import { Section } from "@/app/components/section"
import { SectionHeader } from "@/app/components/section-header"
import { personalInfo, about } from "@/app/data/profile"

export function About() {
  const highlights = [
    "Data Analytics & Engineering",
    "Full Stack Development", 
    "ETL Pipeline Development",
    "Real-time Data Processing"
  ]

  return (
    <Section id="about" className="bg-muted/30">
      <Container>
        <SectionHeader 
          title="About Me"
          description="Passionate about transforming data into insights and building scalable solutions"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get to Know Me</h3>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {about.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-4">What I Do Best</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">{personalInfo.location}</p>
                      <p className="text-sm text-muted-foreground">Available for remote work</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium">{personalInfo.phone}</p>
                      <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium">{personalInfo.email}</p>
                      <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Currently at Infosys</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Data Analyst specializing in Qlik, Snowflake, and ETL pipelines
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}