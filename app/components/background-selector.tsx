"use client"

import { useState } from "react"
import { CustomAnimatedBackground } from "./custom-animated-background"
import { NeuralBackground } from "./neural-background"
import { GeometricBackground } from "./geometric-background"
import { MatrixBackground } from "./matrix-background"
import { GradientBackground } from "./gradient-background"
import { DotsBackground } from "./dots-background"
import { ParticleBackground } from "./particle-background"

type BackgroundType = 'custom' | 'particles' | 'dots' | 'neural' | 'geometric' | 'matrix' | 'gradient' | 'none'

export function BackgroundSelector() {
  const [activeBackground] = useState<BackgroundType>('custom')
  // const setActiveBackground = useState<BackgroundType>('custom')[1] // Uncomment if needed

  const renderBackground = () => {
    switch (activeBackground) {
      case 'custom':
        return <CustomAnimatedBackground />
      case 'particles':
        return <ParticleBackground />
      case 'dots':
        return <DotsBackground />
      case 'neural':
        return <NeuralBackground />
      case 'geometric':
        return <GeometricBackground />
      case 'matrix':
        return <MatrixBackground />
      case 'gradient':
        return <GradientBackground />
      default:
        return null
    }
  }

  return (
    <>
      {renderBackground()}
      
      {/* Background Selector UI - Hidden by default, uncomment to show */}
      {/* 
      <div className="fixed top-20 right-4 z-40 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-3 space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Background:</p>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => setActiveBackground('custom')}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              activeBackground === 'custom' 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            }`}
          >
            Custom
          </button>
          <button
            onClick={() => setActiveBackground('particles')}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              activeBackground === 'particles' 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            }`}
          >
            Particles
          </button>
          <button
            onClick={() => setActiveBackground('neural')}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              activeBackground === 'neural' 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            }`}
          >
            Neural
          </button>
          <button
            onClick={() => setActiveBackground('geometric')}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              activeBackground === 'geometric' 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            }`}
          >
            Geometric
          </button>
          <button
            onClick={() => setActiveBackground('matrix')}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              activeBackground === 'matrix' 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            }`}
          >
            Matrix
          </button>
          <button
            onClick={() => setActiveBackground('none')}
            className={`text-xs px-2 py-1 rounded transition-colors ${
              activeBackground === 'none' 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            }`}
          >
            None
          </button>
        </div>
      </div>
      */}
    </>
  )
}