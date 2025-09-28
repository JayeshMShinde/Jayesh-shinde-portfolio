"use client"

import { useEffect, useRef } from "react"

interface Shape {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  opacity: number
  type: 'triangle' | 'square' | 'hexagon' | 'circle'
  color: string
}

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const shapesRef = useRef<Shape[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const colors = [
      "rgba(59, 130, 246, 0.1)",   // blue
      "rgba(147, 51, 234, 0.1)",   // purple
      "rgba(34, 197, 94, 0.1)",    // green
      "rgba(239, 68, 68, 0.1)",    // red
      "rgba(245, 158, 11, 0.1)",   // amber
    ]

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createShapes = () => {
      const shapes: Shape[] = []
      const shapeCount = Math.min(30, Math.floor((canvas.width * canvas.height) / 20000))
      
      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 20 + Math.random() * 60,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          opacity: 0.1 + Math.random() * 0.3,
          type: ['triangle', 'square', 'hexagon', 'circle'][Math.floor(Math.random() * 4)] as Shape['type'],
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
      
      shapesRef.current = shapes
    }

    const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath()
      ctx.moveTo(x, y - size)
      ctx.lineTo(x - size * 0.866, y + size * 0.5)
      ctx.lineTo(x + size * 0.866, y + size * 0.5)
      ctx.closePath()
    }

    const drawSquare = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath()
      ctx.rect(x - size/2, y - size/2, size, size)
    }

    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const px = x + size * Math.cos(angle)
        const py = y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
    }

    const drawCircle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath()
      ctx.arc(x, y, size/2, 0, Math.PI * 2)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const shapes = shapesRef.current
      
      shapes.forEach((shape) => {
        shape.rotation += shape.rotationSpeed
        
        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)
        ctx.translate(-shape.x, -shape.y)
        
        // Set style
        ctx.fillStyle = shape.color
        ctx.strokeStyle = shape.color.replace('0.1', '0.3')
        ctx.lineWidth = 1
        
        // Draw shape
        switch (shape.type) {
          case 'triangle':
            drawTriangle(ctx, shape.x, shape.y, shape.size)
            break
          case 'square':
            drawSquare(ctx, shape.x, shape.y, shape.size)
            break
          case 'hexagon':
            drawHexagon(ctx, shape.x, shape.y, shape.size)
            break
          case 'circle':
            drawCircle(ctx, shape.x, shape.y, shape.size)
            break
        }
        
        ctx.fill()
        ctx.stroke()
        ctx.restore()
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }

    const init = () => {
      resizeCanvas()
      createShapes()
      animate()
    }

    init()
    window.addEventListener("resize", () => {
      resizeCanvas()
      createShapes()
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
      className="fixed inset-0 -z-10 opacity-40 dark:opacity-20"
      style={{ background: "transparent" }}
    />
  )
}