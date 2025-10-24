"use client"

import React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/app/components/ui/badge"
import { Container } from "@/app/components/container"
import { Section } from "@/app/components/section"
import { SectionHeader } from "@/app/components/section-header"
import { skills } from "@/app/data/profile"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <Section id="skills" className="relative overflow-hidden bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/50 dark:from-slate-900/50 dark:via-blue-900/20 dark:to-purple-900/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <SectionHeader
          title="Skills & Expertise"
          description="Interactive skill visualization with proficiency levels"
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skills.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300 border border-blue-200/50 dark:border-blue-800/50"
              }`}
            >
              <div className="flex items-center gap-2">
                <category.icon className={`w-5 h-5 ${
                  activeCategory === index ? "text-white" : "text-blue-600 dark:text-blue-400"
                }`} />
                <span className="font-medium text-sm">{category.name}</span>
              </div>
              {activeCategory === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Hexagonal Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Category Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200/50 dark:border-blue-800/50"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  {React.createElement(skills[activeCategory].icon, {
                    className: "w-7 h-7 text-white"
                  })}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {skills[activeCategory].name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skills[activeCategory].technologies.length} Technologies
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Simple Skill Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skills[activeCategory].technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.03,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-xl" />
                  
                  {/* Card */}
                  <div className="relative bg-transparent transition-all duration-300 p-6">
                    {/* Content */}
                    <div className="flex flex-col items-center justify-center text-center min-h-[80px]">
                      <Badge 
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-semibold bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-0 whitespace-nowrap"
                      >
                        {tech}
                      </Badge>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}