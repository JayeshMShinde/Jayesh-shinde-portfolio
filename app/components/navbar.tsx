"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
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
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border" 
        : "bg-transparent"
    )}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jayesh
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <div className="px-2 py-4">
                    <h2 className="text-lg font-semibold">Navigation</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Button
                        key={item.id}
                        variant="ghost"
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "w-full justify-start text-base font-medium h-12",
                          activeSection === item.id
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Button>
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