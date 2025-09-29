"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal as TerminalIcon, X, Minimize2 } from "lucide-react"
import { terminalCommands, easterEggs, asciiArt } from "@/app/components/terminal-commands"

interface Command {
  input: string
  output: string[]
  timestamp: Date
  isTyping?: boolean
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Command[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [typingCommand, setTypingCommand] = useState<number | null>(null)
  const [loadingDots, setLoadingDots] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const welcomeMessage = [
    ...asciiArt.logo,
    "Welcome to Jayesh Shinde's Interactive Portfolio Terminal v2.0",
    "Type 'help' to see available commands | Type 'gui' to switch to visual mode",
    "Pro tip: Try 'banner', 'coffee', or explore with tab completion!",
    ""
  ]

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const allCommands = {
    ...terminalCommands,
    ...easterEggs,
    clear: () => {
      setHistory([])
      return []
    },
    gui: () => {
      setIsOpen(false)
      return ["Switching to GUI mode...", "Terminal closed."]
    },
    exit: () => {
      setIsOpen(false)
      return terminalCommands.exit()
    }
  }
  
  // const availableCommands = Object.keys(allCommands).filter(cmd => cmd !== 'clear')

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    // Handle special commands
    if (trimmedCmd.startsWith('sudo ')) {
      const output = easterEggs.sudo()
      const newCommand: Command = { input: cmd, output, timestamp: new Date() }
      setHistory(prev => [...prev, newCommand])
      setInput("")
      setHistoryIndex(-1)
      return
    }
    
    const output = allCommands[trimmedCmd as keyof typeof allCommands]?.() || [
      `Command not found: ${cmd}`,
      "Type 'help' for available commands.",
      "Did you mean: help, whoami, about, skills, projects?",
      ""
    ]

    const newCommand: Command = {
      input: cmd,
      output,
      timestamp: new Date(),
      isTyping: true
    }

    if (trimmedCmd !== 'clear') {
      setHistory(prev => [...prev, newCommand])
      setTypingCommand(history.length)
      
      // Loading animation
      const loadingInterval = setInterval(() => {
        setLoadingDots(prev => (prev + 1) % 4)
      }, 300)
      
      // Start typing animation
      setTimeout(() => {
        clearInterval(loadingInterval)
        setTypingCommand(null)
        setLoadingDots(0)
        setHistory(prev => prev.map((cmd, idx) => 
          idx === history.length ? { ...cmd, isTyping: false } : cmd
        ))
      }, 1500)
    }
    setInput("")
    setHistoryIndex(-1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
    
    if (value.length > 0) {
      const matches = Object.keys(allCommands).filter(cmd => 
        cmd.toLowerCase().startsWith(value.toLowerCase()) && cmd !== 'clear'
      )
      setSuggestions(matches.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input)
      setSuggestions([])
    } else if (e.key === 'Tab') {
      e.preventDefault()
      if (suggestions.length > 0) {
        setInput(suggestions[0])
        setSuggestions([])
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const commandHistory = history.map(h => h.input).filter(Boolean)
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
        setSuggestions([])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const commandHistory = history.map(h => h.input).filter(Boolean)
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
        setSuggestions([])
      }
    }
  }

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gray-800 text-green-400 p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 border border-gray-600 min-h-[56px] min-w-[56px]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <TerminalIcon className="w-6 h-6" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-2 sm:inset-4 z-50 bg-black/95 rounded-xl shadow-2xl border border-gray-600/50 flex flex-col backdrop-blur-md max-h-[90vh]"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-gray-800/90 px-4 py-3 rounded-t-xl border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer transition-colors"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer transition-colors"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 cursor-pointer transition-colors"></div>
                <span className="ml-4 text-gray-300 text-sm font-medium">Terminal — jayesh@portfolio</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-gray-400 hover:text-white"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Content */}
            {!isMinimized && (
              <div className="flex-1 flex flex-col min-h-0">
                <div
                  ref={terminalRef}
                  className="flex-1 p-6 overflow-y-auto font-mono text-sm text-green-400 bg-black/95 min-h-0"
                >
                  {/* Welcome Message */}
                  {history.length === 0 && (
                    <div className="mb-4">
                      {welcomeMessage.map((line, index) => (
                        <div key={index} className="mb-1 whitespace-pre">
                          {line}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Command History */}
                  {history.map((command, index) => (
                    <div key={index} className="mb-4">
                      <div className="text-white">
                        <span className="text-green-400">jayesh@portfolio</span>
                        <span className="text-white">:</span>
                        <span className="text-blue-400">~</span>
                        <span className="text-white">$ </span>
                        <span className="text-white">{command.input}</span>
                      </div>
                      {command.isTyping && typingCommand === index ? (
                        <div className="text-green-400 leading-relaxed flex items-center gap-2">
                          <span>Processing</span>
                          <span className="text-blue-400">
                            {'.'.repeat(loadingDots)}
                            <span className="opacity-30">{'.'.repeat(3 - loadingDots)}</span>
                          </span>
                        </div>
                      ) : (
                        command.output.map((line, lineIndex) => {
                          const coloredLine = line
                            .replace(/═+/g, '<span class="text-gray-500">$&</span>')
                            .replace(/║/g, '<span class="text-gray-500">║</span>')
                            .replace(/╔|╗|╚|╝|╠|╣/g, '<span class="text-gray-500">$&</span>')
                            .replace(/🔧|💼|📧|📱|📍|🔗|🎯|🏢|📅|🛠️|🏫|📄|🎨|👋|🚀/g, '<span class="text-yellow-400">$&</span>')
                            .replace(/•/g, '<span class="text-blue-400">•</span>')
                            .replace(/(Name:|Role:|Location:|Email:|Phone:|GitHub:|LinkedIn:)/g, '<span class="text-green-400">$1</span>')
                            .replace(/(PERSONAL|PROFESSIONAL|UTILITIES|ABOUT ME|TECHNICAL SKILLS|WORK EXPERIENCE|FEATURED PROJECTS|EDUCATION|CONTACT INFORMATION|SOCIAL MEDIA|AVAILABLE COMMANDS)/g, '<span class="text-cyan-400 font-bold">$1</span>')
                            .replace(/(Frontend Development|Backend Development|Data Engineering|Databases|Version Control|Tools|Languages|Soft Skills):/g, '<span class="text-yellow-400">$1:</span>')
                            .replace(/(Data Analyst|Python Full Stack Developer|B\.Tech|Diploma)/g, '<span class="text-blue-400">$1</span>')
                          
                          return (
                            <div 
                              key={lineIndex} 
                              className="text-gray-200 leading-relaxed hover:text-white transition-colors whitespace-pre"
                              dangerouslySetInnerHTML={{ __html: coloredLine }}
                            />
                          )
                        })
                      )}
                    </div>
                  ))}

                  {/* Current Input Line */}
                  <div className="flex items-center">
                    <span className="text-green-400">jayesh@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$ </span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Type 'help' for commands..."
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent text-white outline-none ml-1 caret-white"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </div>
                  
                  {/* Auto-suggestions */}
                  {suggestions.length > 0 && (
                    <div className="mt-2 text-cyan-400 text-sm">
                      <div className="mb-1 text-purple-300">Suggestions (press Tab):</div>
                      {suggestions.map((suggestion, index) => (
                        <div key={index} className="ml-4 text-emerald-300 hover:text-yellow-300 cursor-pointer">
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}