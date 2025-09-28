"use client"

import { motion } from "framer-motion"
import { cn } from "@/app/lib/utils"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("text-center mb-8 sm:mb-12 px-4", className)}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}