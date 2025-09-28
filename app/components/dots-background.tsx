"use client"

export function DotsBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          animation: 'drift 20s ease-in-out infinite alternate'
        }}
      />
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'drift 25s ease-in-out infinite alternate-reverse'
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 12}s`
          }}
        />
      ))}
      
      {/* Glowing orbs */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full blur-xl opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${['rgba(59, 130, 246, 0.3)', 'rgba(147, 51, 234, 0.3)', 'rgba(34, 197, 94, 0.3)'][i]}, transparent)`,
            left: `${20 + i * 30}%`,
            top: `${20 + i * 25}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${4 + i * 2}s`
          }}
        />
      ))}
    </div>
  )
}