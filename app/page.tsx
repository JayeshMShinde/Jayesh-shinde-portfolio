"use client";

import { useEffect, useState } from "react";
import {
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  ChevronDown,
} from "lucide-react";
import TypeWriter from "./components/TypeWriter";
import {
  personalInfo,
  experiences,
  education,
  training,
  certifications,
  skills,
} from "./data";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/50 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Design */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full">
                <span className="text-white font-extrabold text-xl">JS</span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">
                Experience
              </button>
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">
                Projects
              </button>
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up relative">
            Hi, I'm{" "}
            <span className="text-blue-500">
              <TypeWriter
                words={[personalInfo.name, "Full Stack Developer"]}
                delay={100}
                deleteDelay={50}
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate-fade-up delay-200">
            {personalInfo.summary}
          </p>
          <div className="flex gap-4 animate-fade-up delay-300">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full 
                transition-all duration-300 transform hover:scale-105 relative"
            >
              <span className="absolute inset-0 bg-blue-400/40 blur-xl group-hover:blur-2xl transition-all"></span>
              <span className="relative">Contact Me</span>
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full 
                transition-all duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
          <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">
            Experience
            <span className="block h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="fade-in p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm 
                  hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <div className="text-gray-400">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">
            Education
            <span className="block h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="fade-in p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm 
                  hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-gray-400">
                  <p>
                    {edu.location} • {edu.year}
                  </p>
                  {edu.score && <p>Score: {edu.score}</p>}
                  {edu.details && <p>{edu.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training & Projects Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 fade-in">
            Training & Projects
            <span className="block h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <div className="grid gap-8">
            {training.map((item, index) => (
              <div
                key={index}
                className="fade-in p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm 
                  hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Code className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-400">
                      {item.organization} • {item.period}
                    </p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills
            <span className="block h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></span>
          </h2>
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl shadow-lg bg-gradient-to-br from-gray-800/50 to-gray-700/50 
          backdrop-blur-md hover:from-blue-600/60 hover:to-blue-500/60 transition-all 
          duration-500 hover:shadow-xl hover:-translate-y-2 transform flex flex-col 
          items-center text-center gap-3"
                >
                  {/* Background Animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-lg"></div>

                  {/* Skill Icon */}
                  <div
                    className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 shadow-md 
            group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className={`w-8 h-8 ${skill.color}`} />
                  </div>

                  {/* Skill Name */}
                  <span className="relative z-10 text-lg font-medium text-gray-300 group-hover:text-white transition-all">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div
            className="fade-in bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 
            rounded-2xl backdrop-blur-sm border border-gray-700 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <h2 className="text-4xl font-bold text-center mb-8 relative">
              Get in Touch
              <span className="block h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full"></span>
            </h2>
            <div className="max-w-xl mx-auto text-center">
              <p className="text-xl mb-6">Let's work together!</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 
                    rounded-full transition-all duration-300 transform hover:scale-105 relative"
                >
                  <span className="absolute inset-0 bg-blue-400/40 blur-xl group-hover:blur-2xl transition-all"></span>
                  <span className="relative">Email Me</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 
                    rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
