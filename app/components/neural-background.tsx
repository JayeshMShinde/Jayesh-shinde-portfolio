"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
  pulse: number
  pulseDirection: number
}

interface Connection {
  from: number
  to: number
  signal: number
  signalSpeed: number
  active: boolean
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const connectionsRef = useRef<Connection[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.max(20, Math.min(50, Math.floor((canvas.width * canvas.height) / 15000)))
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
          pulse: Math.random() * Math.PI * 2,
          pulseDirection: Math.random() > 0.5 ? 1 : -1
        })
      }
      
      particlesRef.current = particles
    }

    const createConnections = () => {
      const connections: Connection[] = []
      const particles = particlesRef.current
      const maxDistance = 150
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < maxDistance && Math.random() > 0.7) {
            connections.push({
              from: i,
              to: j,
              signal: 0,
              signalSpeed: 0.02 + Math.random() * 0.03,
              active: Math.random() > 0.8
            })
            
            particles[i].connections.push(j)
            particles[j].connections.push(i)
          }
        }
      }
      
      connectionsRef.current = connections
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const particles = particlesRef.current
      const connections = connectionsRef.current
      
      // Update particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.02 * particle.pulseDirection
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      })
      
      // Update connections and signals
      connections.forEach((connection) => {
        if (connection.active) {
          connection.signal += connection.signalSpeed
          if (connection.signal >= 1) {
            connection.signal = 0
            connection.active = Math.random() > 0.7
          }
        } else if (Math.random() > 0.995) {
          connection.active = true
          connection.signal = 0
        }
      })
      
      // Draw connections
      connections.forEach((connection) => {
        const from = particles[connection.from]
        const to = particles[connection.to]
        
        const dx = to.x - from.x
        const dy = to.y - from.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Base connection line
        const opacity = Math.max(0, 1 - distance / 150) * 0.3
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()
        
        // Signal animation
        if (connection.active && connection.signal > 0) {
          const signalX = from.x + dx * connection.signal
          const signalY = from.y + dy * connection.signal
          
          // Signal glow
          const gradient = ctx.createRadialGradient(signalX, signalY, 0, signalX, signalY, 8)
          gradient.addColorStop(0, "rgba(34, 197, 94, 0.8)")
          gradient.addColorStop(0.5, "rgba(34, 197, 94, 0.4)")
          gradient.addColorStop(1, "rgba(34, 197, 94, 0)")
          
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(signalX, signalY, 8, 0, Math.PI * 2)
          ctx.fill()
          
          // Signal core
          ctx.fillStyle = "rgba(34, 197, 94, 1)"
          ctx.beginPath()
          ctx.arc(signalX, signalY, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      })
      
      // Draw particles
      particles.forEach((particle) => {
        const pulseSize = 2 + Math.sin(particle.pulse) * 1
        
        // Particle glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulseSize * 3
        )
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
        gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.3)")
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize * 3, 0, Math.PI * 2)
        ctx.fill()
        
        // Particle core
        ctx.fillStyle = "rgba(59, 130, 246, 1)"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
        ctx.fill()
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }

    const init = () => {
      resizeCanvas()
      createParticles()
      createConnections()
      animate()
    }

    init()
    window.addEventListener("resize", () => {
      resizeCanvas()
      createParticles()
      createConnections()
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
      className="fixed inset-0 z-0 opacity-80 dark:opacity-60 pointer-events-none"
      style={{ background: "transparent" }}
    />
  )
}