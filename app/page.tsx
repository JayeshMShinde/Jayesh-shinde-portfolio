import { Navbar } from "@/app/components/navbar"
import { Hero } from "@/app/components/hero"
import { About } from "@/app/components/about"
import { Experience } from "@/app/components/experience"
import { Education } from "@/app/components/education"
import { Projects } from "@/app/components/projects"
import { Skills } from "@/app/components/skills"
import { Certifications } from "@/app/components/certifications"
import { Contact } from "@/app/components/contact"
import { Footer } from "@/app/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
