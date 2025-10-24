"use client"

import { motion } from "framer-motion"
import { Code, Briefcase, Award, Users, TrendingUp, Zap } from "lucide-react"
import { Card, CardContent } from "@/app/components/ui/card"
import { Container } from "@/app/components/container"
import { Section } from "@/app/components/section"

const stats = [
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Experience",
    description: "Professional development",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    value: "5+",
    label: "Projects Completed",
    description: "Full-stack applications",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Award,
    value: "10+",
    label: "Technologies",
    description: "Skills mastered",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Problem Solving",
    description: "Complex challenges tackled",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    value: "2+",
    label: "Team Projects",
    description: "Collaborative work",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Learning Mindset",
    description: "Continuous improvement",
    color: "from-yellow-500 to-orange-500"
  }
]

export function Stats() {
  return (
    <Section className="py-16 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-cyan-950/20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
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