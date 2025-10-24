"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"
import { ThemeToggle } from "@/app/components/theme-toggle"
import { Container } from "@/app/components/container"
import { cn } from "@/app/lib/utils"

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md",
      isScrolled 
        ? "bg-background/90 shadow-lg shadow-black/5 border-b border-border/50" 
        : "bg-transparent"
    )}>
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-18">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-xl lg:text-2xl cursor-pointer"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300">
              Jayesh
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg",
                    activeSection === item.id
                      ? "text-primary bg-primary/10 shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden hover:bg-muted/50 transition-colors">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-background/95 backdrop-blur-xl border-l border-border/50">
                <nav className="flex flex-col gap-6 mt-6">
                  <div className="px-2">
                    <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Navigation
                    </h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    {navItems.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="ghost"
                          onClick={() => scrollToSection(item.id)}
                          className={cn(
                            "w-full justify-start text-base font-medium h-12 px-4 rounded-lg transition-all duration-300",
                            activeSection === item.id
                              ? "text-primary bg-primary/10 shadow-md border-l-4 border-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                        >
                          {item.label}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  )
}