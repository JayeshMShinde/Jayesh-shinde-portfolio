import { personalInfo, about, experiences, education, training, skills, certifications } from "@/app/data/profile"

export const asciiArt = {
  logo: [
    "     ██╗ █████╗ ██╗   ██╗███████╗███████╗██╗  ██╗",
    "     ██║██╔══██╗╚██╗ ██╔╝██╔════╝██╔════╝██║  ██║",
    "     ██║███████║ ╚████╔╝ █████╗  ███████╗███████║",
    "██   ██║██╔══██║  ╚██╔╝  ██╔══╝  ╚════██║██╔══██║",
    "╚█████╔╝██║  ██║   ██║   ███████╗███████║██║  ██║",
    " ╚════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝",
    ""
  ],
  
  computer: [
    "    ┌─────────────────────────────────┐",
    "    │  ████████████████████████████   │",
    "    │  █ JAYESH SHINDE PORTFOLIO █   │", 
    "    │  █ Data Analyst & Dev      █   │",
    "    │  ████████████████████████████   │",
    "    │                                 │",
    "    └─────────────────────────────────┘",
    "           ████████████████████",
    "          ██                  ██",
    "         ████████████████████████",
    ""
  ]
}

export const terminalCommands = {
  help: () => [
    "╔══════════════════════════════════════════════════════════╗",
    "║                    AVAILABLE COMMANDS                    ║",
    "╠══════════════════════════════════════════════════════════╣",
    "║ PERSONAL                                                 ║",
    "║   whoami          Display personal information           ║",
    "║   about           Show detailed about section            ║",
    "║   contact         Get contact information                ║",
    "║   social          Show social media links               ║",
    "║                                                          ║",
    "║ PROFESSIONAL                                             ║",
    "║   skills          List technical skills                  ║",
    "║   experience      Show work experience                   ║",
    "║   projects        Display featured projects              ║",
    "║   education       Show educational background            ║",
    "║   certifications  List certifications                    ║",
    "║                                                          ║",
    "║ UTILITIES                                                ║",
    "║   resume          Download resume                        ║",
    "║   clear           Clear terminal                         ║",
    "║   gui             Switch to visual portfolio             ║",
    "║   exit            Close terminal                         ║",
    "║   banner          Show ASCII banner                      ║",
    "╚══════════════════════════════════════════════════════════╝",
    ""
  ],

  banner: () => [
    ...asciiArt.logo,
    "    Full Stack Developer & Data Analyst",
    "    Building scalable solutions with clean code",
    ""
  ],

  whoami: () => [
    ...asciiArt.computer,
    "╔══════════════════════════════════════════════════════════╗",
    "║                    PERSONAL PROFILE                      ║",
    "╠══════════════════════════════════════════════════════════╣",
    `║ Name:     ${personalInfo.name.padEnd(43)} ║`,
    `║ Role:     Data Analyst & Full Stack Developer${' '.repeat(11)} ║`,
    `║ Location: ${personalInfo.location.padEnd(43)} ║`,
    `║ Email:    ${personalInfo.email.padEnd(43)} ║`,
    `║ Phone:    ${personalInfo.phone.padEnd(43)} ║`,
    "╚══════════════════════════════════════════════════════════╝",
    "",
    "💼 CURRENT SUMMARY:",
    personalInfo.summary,
    ""
  ],

  about: () => [
    "╔══════════════════════════════════════════════════════════╗",
    "║                       ABOUT ME                           ║",
    "╚══════════════════════════════════════════════════════════╝",
    "",
    ...about.description.split('\n\n').map(paragraph => 
      paragraph.trim().replace(/\s+/g, ' ')
    ),
    "",
    "🎯 KEY HIGHLIGHTS:",
    "  • Data Analytics & Engineering Expertise",
    "  • Full Stack Development Proficiency", 
    "  • ETL Pipeline Development",
    "  • Real-time Data Processing",
    "  • API Integration & Optimization",
    ""
  ],

  skills: () => {
    const output = [
      "╔══════════════════════════════════════════════════════════╗",
      "║                   TECHNICAL SKILLS                       ║",
      "╚══════════════════════════════════════════════════════════╝",
      ""
    ]
    
    skills.forEach(category => {
      output.push(`🔧 ${category.name.toUpperCase()}:`)
      const techList = category.technologies.join(", ")
      const chunks = techList.match(/.{1,55}/g) || [techList]
      chunks.forEach(chunk => {
        output.push(`   ${chunk}`)
      })
      output.push("")
    })
    
    return output
  },

  experience: () => {
    const output = [
      "╔══════════════════════════════════════════════════════════╗",
      "║                   WORK EXPERIENCE                        ║",
      "╚══════════════════════════════════════════════════════════╝",
      ""
    ]
    
    experiences.forEach((exp, index) => {
      output.push(`${index + 1}. ${exp.title} @ ${exp.company}`)
      output.push(`   📍 ${exp.location} | 📅 ${exp.period}`)
      output.push("")
      output.push("   KEY RESPONSIBILITIES:")
      exp.responsibilities.forEach(resp => {
        output.push(`   • ${resp}`)
      })
      output.push("")
    })
    
    return output
  },

  projects: () => {
    const output = [
      "╔══════════════════════════════════════════════════════════╗",
      "║                  FEATURED PROJECTS                       ║",
      "╚══════════════════════════════════════════════════════════╝",
      ""
    ]
    
    training.forEach((project, index) => {
      output.push(`${index + 1}. ${project.title}`)
      output.push(`   🏢 ${project.organization} | 📅 ${project.period}`)
      output.push("")
      
      const techPoint = project.points.find(p => p.toLowerCase().includes('technologies used:'))
      const otherPoints = project.points.filter(p => !p.toLowerCase().includes('technologies used:'))
      
      if (otherPoints.length > 0) {
        output.push("   PROJECT DETAILS:")
        otherPoints.forEach(point => {
          output.push(`   • ${point}`)
        })
      }
      
      if (techPoint) {
        const techs = techPoint.split('Technologies used:')[1]?.trim()
        if (techs) {
          output.push(`   🛠️  TECH STACK: ${techs}`)
        }
      }
      
      output.push("")
    })
    
    return output
  },

  education: () => {
    const output = [
      "╔══════════════════════════════════════════════════════════╗",
      "║                      EDUCATION                           ║",
      "╚══════════════════════════════════════════════════════════╝",
      ""
    ]
    
    education.forEach((edu, index) => {
      output.push(`${index + 1}. ${edu.degree}`)
      output.push(`   🏫 ${edu.institution}, ${edu.location}`)
      output.push(`   📅 ${edu.year}`)
      output.push("")
    })
    
    return output
  },

  certifications: () => {
    const output = [
      "╔══════════════════════════════════════════════════════════╗",
      "║                   CERTIFICATIONS                         ║",
      "╚══════════════════════════════════════════════════════════╝",
      ""
    ]
    
    certifications.forEach((cert, index) => {
      output.push(`${index + 1}. ${cert.title}`)
      output.push(`   🏢 ${cert.organization}`)
      output.push(`   📅 ${cert.year}`)
      output.push("")
    })
    
    return output
  },

  contact: () => [
    "╔══════════════════════════════════════════════════════════╗",
    "║                 CONTACT INFORMATION                      ║",
    "╚══════════════════════════════════════════════════════════╝",
    "",
    "📧 EMAIL:",
    `   ${personalInfo.email}`,
    "   Response time: Within 24 hours",
    "",
    "📱 PHONE:",
    `   ${personalInfo.phone}`,
    "   Available: 9 AM - 6 PM IST",
    "",
    "📍 LOCATION:",
    `   ${personalInfo.location}`,
    "   Open to remote opportunities worldwide",
    "",
    "💼 CURRENT STATUS:",
    "   Data Analyst at Infosys",
    "   Actively seeking new opportunities",
    ""
  ],

  social: () => [
    "╔══════════════════════════════════════════════════════════╗",
    "║                 SOCIAL MEDIA & LINKS                     ║",
    "╚══════════════════════════════════════════════════════════╝",
    "",
    "🔗 PROFESSIONAL PROFILES:",
    "",
    `   GitHub:   ${personalInfo.github}`,
    "   • View my code repositories",
    "   • See contribution activity",
    "   • Explore open source projects",
    "",
    `   LinkedIn: ${personalInfo.linkedin}`,
    "   • Professional network",
    "   • Career updates",
    "   • Industry connections",
    "",
    "💡 TIP: Use 'contact' command for direct communication",
    ""
  ],

  resume: () => [
    "╔══════════════════════════════════════════════════════════╗",
    "║                    RESUME DOWNLOAD                       ║",
    "╚══════════════════════════════════════════════════════════╝",
    "",
    "📄 RESUME FORMATS AVAILABLE:",
    "",
    "   • PDF Format (Recommended)",
    "   • Word Document (.docx)",
    "   • Plain Text (.txt)",
    "",
    "🔗 DOWNLOAD LINKS:",
    "   In a production environment, this would provide",
    "   direct download links to resume files.",
    "",
    "📧 ALTERNATIVE:",
    "   Email me at jayesh4178@gmail.com to request",
    "   the latest version of my resume.",
    ""
  ],

  gui: () => [
    "🎨 Switching to visual portfolio mode...",
    "",
    "The graphical interface provides:",
    "• Interactive animations",
    "• Responsive design", 
    "• Visual project galleries",
    "• Contact forms",
    "",
    "Terminal will remain accessible via the floating button.",
    ""
  ],

  exit: () => [
    "👋 Thanks for exploring my portfolio!",
    "",
    "Session ended. Feel free to:",
    "• Explore the visual portfolio",
    "• Contact me for opportunities",
    "• Connect on social media",
    "",
    "Have a great day! 🚀",
    ""
  ],

  clear: () => []
}

export const easterEggs = {
  "konami": () => [
    "🎮 KONAMI CODE ACTIVATED!",
    "",
    "    ↑ ↑ ↓ ↓ ← → ← → B A",
    "",
    "You found the secret! Here's a fun fact:",
    "This portfolio was built with passion,",
    "lots of coffee ☕, and clean code principles.",
    ""
  ],
  
  "coffee": () => [
    "☕ COFFEE DETECTED!",
    "",
    "    ( (",
    "     ) )",
    "  ........",
    "  |      |]",
    "  \\      /",
    "   `----'",
    "",
    "Fun fact: This portfolio was powered by coffee!",
    "Current coffee count: ∞",
    ""
  ],

  "sudo": () => [
    "🔐 SUDO ACCESS DENIED!",
    "",
    "Nice try! But this is a portfolio, not a server.",
    "However, I appreciate the Linux knowledge! 🐧",
    "",
    "Try 'help' for available commands instead.",
    ""
  ]
}