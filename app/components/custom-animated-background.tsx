"use client"

import { useEffect, useRef } from "react"

export function CustomAnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
      life: number
      maxLife: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 3 + 1
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
        this.alpha = Math.random() * 0.5 + 0.1
        this.life = 0
        this.maxLife = Math.random() * 1000 + 500
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life++

        // Wrap around edges
        if (this.x < 0) this.x = canvas!.width
        if (this.x > canvas!.width) this.x = 0
        if (this.y < 0) this.y = canvas!.height
        if (this.y > canvas!.height) this.y = 0

        // Fade out as life decreases
        this.alpha = Math.max(0.1, 1 - (this.life / this.maxLife))
      }

      draw() {
        ctx!.save()
        ctx!.globalAlpha = this.alpha
        ctx!.fillStyle = this.color
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
        ctx!.restore()
      }
    }

    // Geometric shapes
    class GeometricShape {
      x: number
      y: number
      vx: number
      vy: number
      rotation: number
      rotationSpeed: number
      size: number
      type: 'triangle' | 'square' | 'hexagon'
      color: string
      alpha: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.size = Math.random() * 20 + 10
        this.type = ['triangle', 'square', 'hexagon'][Math.floor(Math.random() * 3)] as 'triangle' | 'square' | 'hexagon'
        this.color = `hsl(${Math.random() * 60 + 180}, 60%, 70%)`
        this.alpha = Math.random() * 0.1 + 0.05
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotationSpeed

        // Wrap around edges
        if (this.x < -this.size) this.x = canvas!.width + this.size
        if (this.x > canvas!.width + this.size) this.x = -this.size
        if (this.y < -this.size) this.y = canvas!.height + this.size
        if (this.y > canvas!.height + this.size) this.y = -this.size
      }

      draw() {
        ctx!.save()
        ctx!.globalAlpha = this.alpha
        ctx!.translate(this.x, this.y)
        ctx!.rotate(this.rotation)
        ctx!.fillStyle = this.color
        ctx!.strokeStyle = this.color
        ctx!.lineWidth = 1

        ctx!.beginPath()
        switch (this.type) {
          case 'triangle':
            ctx!.moveTo(0, -this.size)
            ctx!.lineTo(-this.size * 0.866, this.size * 0.5)
            ctx!.lineTo(this.size * 0.866, this.size * 0.5)
            break
          case 'square':
            ctx!.rect(-this.size/2, -this.size/2, this.size, this.size)
            break
          case 'hexagon':
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3
              const x = Math.cos(angle) * this.size
              const y = Math.sin(angle) * this.size
              if (i === 0) ctx!.moveTo(x, y)
              else ctx!.lineTo(x, y)
            }
            break
        }
        ctx!.closePath()
        ctx!.fill()
        ctx!.stroke()
        ctx!.restore()
      }
    }

    // Create particles and shapes
    const particles: Particle[] = []
    const shapes: GeometricShape[] = []

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    for (let i = 0; i < 15; i++) {
      shapes.push(new GeometricShape())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Update and draw shapes
      shapes.forEach(shape => {
        shape.update()
        shape.draw()
      })

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = (1 - distance / 100) * 0.1
            ctx.strokeStyle = p1.color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}