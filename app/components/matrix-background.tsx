"use client"

import { useEffect, useRef } from "react"

interface Drop {
  x: number
  y: number
  speed: number
  chars: string[]
  opacity: number
}

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const dropsRef = useRef<Drop[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Matrix characters (mix of code symbols and binary)
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]()<>+-*/=;:.,?!@#$%^&|~`"
    const fontSize = 14
    const columns = Math.floor(window.innerWidth / fontSize)

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createDrops = () => {
      const drops: Drop[] = []
      
      for (let i = 0; i < columns; i++) {
        if (Math.random() > 0.7) { // Only create drops for some columns
          drops.push({
            x: i * fontSize,
            y: Math.random() * canvas.height,
            speed: 1 + Math.random() * 3,
            chars: Array.from({ length: 10 + Math.random() * 20 }, () => 
              chars[Math.floor(Math.random() * chars.length)]
            ),
            opacity: 0.3 + Math.random() * 0.7
          })
        }
      }
      
      dropsRef.current = drops
    }

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const drops = dropsRef.current
      
      drops.forEach((drop) => {
        // Update position
        drop.y += drop.speed
        
        // Reset drop when it goes off screen
        if (drop.y > canvas.height + drop.chars.length * fontSize) {
          drop.y = -drop.chars.length * fontSize
          drop.x = Math.floor(Math.random() * columns) * fontSize
          drop.speed = 1 + Math.random() * 3
          drop.opacity = 0.3 + Math.random() * 0.7
          // Randomly change some characters
          drop.chars = drop.chars.map(char => 
            Math.random() > 0.95 ? chars[Math.floor(Math.random() * chars.length)] : char
          )
        }
        
        // Draw characters
        ctx.font = `${fontSize}px monospace`
        
        drop.chars.forEach((char, charIndex) => {
          const charY = drop.y + charIndex * fontSize
          
          if (charY > 0 && charY < canvas.height) {
            // Calculate opacity based on position in the trail
            const trailOpacity = drop.opacity * (1 - charIndex / drop.chars.length)
            
            // Leading character is brighter (green/cyan)
            if (charIndex === 0) {
              ctx.fillStyle = `rgba(0, 255, 150, ${trailOpacity})`
            } else if (charIndex < 3) {
              ctx.fillStyle = `rgba(0, 200, 100, ${trailOpacity * 0.8})`
            } else {
              ctx.fillStyle = `rgba(0, 150, 80, ${trailOpacity * 0.6})`
            }
            
            ctx.fillText(char, drop.x, charY)
          }
        })
      })
      
      // Occasionally add new drops
      if (Math.random() > 0.98 && drops.length < columns * 0.3) {
        const availableColumns = Array.from({ length: columns }, (_, i) => i)
          .filter(col => !drops.some(drop => Math.abs(drop.x - col * fontSize) < fontSize))
        
        if (availableColumns.length > 0) {
          const col = availableColumns[Math.floor(Math.random() * availableColumns.length)]
          drops.push({
            x: col * fontSize,
            y: -fontSize * 20,
            speed: 1 + Math.random() * 3,
            chars: Array.from({ length: 10 + Math.random() * 20 }, () => 
              chars[Math.floor(Math.random() * chars.length)]
            ),
            opacity: 0.3 + Math.random() * 0.7
          })
        }
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    const init = () => {
      resizeCanvas()
      createDrops()
      animate()
    }

    init()
    window.addEventListener("resize", () => {
      resizeCanvas()
      createDrops()
    })

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", init)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-30 dark:opacity-20"
      style={{ background: "transparent" }}
    />
  )
}