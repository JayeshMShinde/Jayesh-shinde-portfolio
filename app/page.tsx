"use client";

import { useEffect, useState } from "react";
import { Terminal, GitBranch, Briefcase } from "lucide-react";
import TypeWriter from "./components/TypeWriter";
import { personalInfo, training, skills, experiences } from "./data";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      let currentSection = sections[0];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top - 200 && scrollPosition < top + height) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="relative bg-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-sm border-b border-blue-500/20" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Terminal className="w-6 h-6 text-blue-400" />
              <code className="text-blue-400 font-mono text-lg">~/portfolio</code>
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-mono transition-colors duration-200 ${activeSection === item.id ? "text-blue-400 border-b border-blue-400" : ""}`}
                >
                  {"< "}{item.label}{" />"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent"></div>
          
          <div className="w-full max-w-4xl p-8 rounded-lg bg-gray-900/80 backdrop-blur-md border border-gray-700/50 shadow-2xl relative">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700/50 pb-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <code className="text-gray-400 text-sm">terminal</code>
            </div>
            
            <div className="font-mono">
              <p className="text-green-400">$ whoami</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {personalInfo.name} <span className="animate-blink">_</span>
              </h1>
              
              <p className="text-green-400">$ role</p>
              <div className="text-2xl md:text-3xl text-blue-400 mb-4">
                <TypeWriter
                  words={["Full Stack Developer", "Python Developer", "Frontend Developer", "Problem Solver"]}
                  delay={100}
                  deleteDelay={50}
                />
              </div>
              
              <p className="text-green-400">$ cat about.txt</p>
              <p className="text-gray-300 mb-6">{personalInfo.summary}</p>
              
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group relative px-6 py-2 text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200"
                >
                  <span className="relative z-10">{">"} Contact_Me</span>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-200"></div>
                </button>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <GitBranch className="w-4 h-4" />
                  View_Source
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-16">
              <span className="text-purple-400">class</span> Experience {"{"}
            </h2>
            <div className="grid gap-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company} • {exp.location} • {exp.period}</p>
                    </div>
                  </div>
                  <div className="pl-10 border-l-2 border-gray-700">
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility: string, idx: number) => (
                        <li key={idx} className="text-gray-300">
                          <code className="text-purple-400">→</code> {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-center text-white mt-8">{"}"}</h2>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-16">
              <span className="text-blue-400">const</span> skills = {"{"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((category, index) => (
                <div
                  key={index}
                  className="relative group p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <category.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                  <div className="space-y-2">
                    {category.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300">
                        <code className="text-blue-400">→</code>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-center text-white mt-8">{"}"}</h2>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-16">
              <span className="text-green-400">function</span> showcase_projects() {"{"}
            </h2>
            <div className="grid gap-8">
              {training.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-6 h-6 text-green-400" />
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="pl-10 border-l-2 border-gray-700">
                    <p className="text-gray-400 mb-4">{project.organization} • {project.period}</p>
                    <ul className="space-y-2">
                      {project.points.map((point, idx) => (
                        <li key={idx} className="text-gray-300">
                          <code className="text-green-400">→</code> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-center text-white mt-8">{"}"}</h2>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <pre className="inline-block text-left bg-gray-800/50 p-8 rounded-lg border border-gray-700/50">
              <code className="text-gray-300">
                <span className="text-purple-400">async function</span>{" "}
                <span className="text-blue-400">contactMe</span>() {"{"}
                <br />
                {"  "}
                <span className="text-green-400">const</span> email ={" "}
                <span className="text-orange-400">&ldquo;{personalInfo.email}&rdquo;</span>;
                <br />
                {"  "}
                <span className="text-green-400">const</span> linkedin ={" "}
                <span className="text-orange-400">&ldquo;{personalInfo.linkedin}&rdquo;</span>;
                <br />
                {"  "}phone:{" "}
                <span className="text-orange-400">&ldquo;{personalInfo.phone}&rdquo;</span>;
                <br />
                {"  "}location:{" "}
                <span className="text-orange-400">&ldquo;{personalInfo.location}&rdquo;</span>;
                <br />
                {"  "}
                <span className="text-purple-400">return</span> {"{"}
                <br />
                {"    "}status: <span className="text-orange-400">&ldquo;Looking forward to connecting!&rdquo;</span>
                <br />
                {"  }"};
                <br />
                {"}"}
              </code>
            </pre>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 
                  transition-colors duration-200 flex items-center gap-2"
              >
                Connect
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 
                  transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
