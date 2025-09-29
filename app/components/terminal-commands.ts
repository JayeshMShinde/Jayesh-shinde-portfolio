import { personalInfo, about, experiences, education, training, skills, certifications } from "@/app/data/profile"

/**
 * Polished terminal output utilities
 * - Consistent box width & padding
 * - Real "$ <cmd>" prompts
 * - Clean alignment for lists/columns
 */

// Visible width for inner content (characters inside the vertical bars)
const WIDTH = 61; // keep consistent with your existing art

// Basic helpers --------------------------------------------------------------
const repeat = (ch: string, n: number) => new Array(n + 1).join(ch);
const trimAnsi = (s: string) => s.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");

const padLine = (text = "") => {
  const raw = trimAnsi(text);
  const clipped = raw.length > WIDTH ? raw.slice(0, WIDTH) : raw;
  const pad = WIDTH - clipped.length;
  return `| ${clipped}${repeat(" ", pad)} |`;
};

const boxTop = () => "+" + repeat("-", WIDTH + 2) + "+";

const box = (lines: string[]) => [boxTop(), ...lines.map(padLine), boxTop()];

const prompt = (cmd: string) => `$ ${cmd}`;

// Text layout helpers --------------------------------------------------------
const sectionTitle = (title: string) => `${title.toUpperCase()}`;
const bullet = (text: string) => `• ${text}`;

const twoCol = (left: string, right: string) => {
  // Create a neat two-column key/value line
  const L = ` ${left}`;
  const R = right ? ` ${right}` : "";
  const gap = WIDTH - L.length - R.length;
  if (gap < 1) return `${L}${repeat(" ", Math.max(1, WIDTH - L.length))}`; // fallback
  return `${L}${repeat(" ", gap)}${R}`;
};

const wrapPara = (text: string, indent = 0) => {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  const max = WIDTH - indent;
  let cur = "";
  for (const w of words) {
    if ((cur + (cur ? " " : "") + w).length > max) {
      lines.push(repeat(" ", indent) + cur);
      cur = w;
    } else {
      cur = cur ? cur + " " + w : w;
    }
  }
  if (cur) lines.push(repeat(" ", indent) + cur);
  return lines;
};

const listToColumns = (items: string[], perLine = 4) => {
  const rows: string[] = [];
  for (let i = 0; i < items.length; i += perLine) {
    rows.push(`  ${items.slice(i, i + perLine).map(t => `[${t}]`).join("  ")}`);
  }
  return rows;
};

// ASCII art (kept as-is from your original) ---------------------------------
export const asciiArt = {
  logo: [
    "",
    "        ██╗ █████╗ ██╗   ██╗███████╗███████╗██╗  ██╗",
    "        ██║██╔══██╗╚██╗ ██╔╝██╔════╝██╔════╝██║  ██║",
    "        ██║███████║ ╚████╔╝ █████╗  ███████╗███████║",
    "   ██   ██║██╔══██║  ╚██╔╝  ██╔══╝  ╚════██║██╔══██║",
    "   ╚█████╔╝██║  ██║   ██║   ███████╗███████║██║  ██║",
    "    ╚════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝",
    "",
    "           J A Y E S H   S H I N D E   P O R T F O L I O",
    "           ═══════════════════════════════════════════════",
    ""
  ],
  
  welcome: [
    "",
    "    +-------------------------------------------------------+",
    "    |                                                       |",
    "    |  Welcome to Jayesh Shinde's Interactive Terminal      |",
    "    |  ===================================================  |",
    "    |                                                       |",
    "    |  Data Analyst & Full Stack Developer                 |",
    "    |  Mumbai, Maharashtra, India                           |",
    "    |  Currently at Infosys Limited                         |",
    "    |                                                       |",
    "    |  Type 'help' to see all available commands           |",
    "    |  Type 'whoami' for a quick introduction              |",
    "    |                                                       |",
    "    +-------------------------------------------------------+",
    ""
  ],

  computer: [
    "    +===================================+",
    "    |    TERMINAL PORTFOLIO v2.1        |",
    "    +===================================+",
    "    |                                   |",
    "    |   [*] jayesh@portfolio:~$         |",
    "    |   [*] Ready for commands...       |",
    "    |                                   |",
    "    +===================================+",
    ""
  ]
};

// Terminal Commands ----------------------------------------------------------
export const terminalCommands = {
  help: () => {
    const header = [
      sectionTitle("Available Commands")
    ];

    const body = [
      "",
      "PERSONAL INFORMATION",
      "  whoami     - Display personal information",
      "  about      - Show detailed about section",
      "  contact    - Get contact information",
      "  social     - Show social media links",
      "",
      "PROFESSIONAL",
      "  skills     - List technical skills",
      "  experience - Show work experience",
      "  projects   - Display featured projects",
      "  education  - Show educational background",
      "  certs      - List certifications",
      "",
      "UTILITIES",
      "  resume     - Download resume",
      "  clear      - Clear terminal screen",
      "  history    - Show command history",
      "  neofetch   - System information",
      "  exit       - Close terminal session",
    ];

    const tip = ["", "Tip: Use <tab> completion and arrow keys for better experience"]; 

    return [
      prompt("help"),
      "",
      ...box([header[0], ...body, ...tip])
    ];
  },

  whoami: () => {
    const sysBox = box([
      sectionTitle("System User Info"),
      twoCol("User:", personalInfo.name),
      twoCol("Role:", "Data Analyst & Full Stack Developer"),
      twoCol("Location:", personalInfo.location),
      twoCol("Email:", personalInfo.email),
      twoCol("Phone:", personalInfo.phone),
      twoCol("Status:", "Online - Available for opportunities"),
    ]);

    const mission = ["", "💡 CURRENT MISSION:", ...wrapPara(personalInfo.summary)];

    return [
      prompt("whoami"),
      "",
      ...asciiArt.computer,
      ...sysBox,
      ...mission,
      "",
      "→ Use 'experience' to see my professional journey",
      "→ Use 'skills' to explore my technical expertise",
    ];
  },

  neofetch: () => {
    const totalTech = skills.reduce((acc, cat) => acc + cat.technologies.length, 0);
    return [
      prompt("neofetch"),
      "",
      "                   jayesh@portfolio",
      "                   ────────────────",
      "    ██████████     OS: Professional Developer",
      "  ██          ██   Host: Infosys Limited",
      " ██    ████    ██  Kernel: Data Analytics & Web Dev",
      "██    ██████    ██ Uptime: 2+ years in industry",
      `██    ██████    ██ Packages: ${totalTech} technologies`,
      "██    ██████    ██ Shell: JavaScript, Python, SQL",
      " ██    ████    ██ Resolution: Full Stack Solutions",
      "  ██          ██   DE: VS Code, IntelliJ IDEA",
      "    ██████████     WM: React, Node.js, Django",
      "                   Terminal: Portfolio Terminal v2.1",
      "",
      "💻 System ready for collaboration!",
    ];
  },

  about: () => {
    const paragraphs = about.description
      .split('\n\n')
      .flatMap(p => wrapPara(p));

    const highlights = [
      "",
      "🎯 KEY HIGHLIGHTS:",
      bullet("Data Analytics & Engineering Expertise"),
      bullet("Full Stack Development Proficiency"),
      bullet("ETL Pipeline Development"),
      bullet("Real-time Data Processing"),
      bullet("API Integration & Optimization"),
      bullet("Cross-functional Team Leadership"),
      "",
      "└─ Ready to tackle complex challenges and deliver results",
    ];

    return [
      prompt("about"),
      "",
      ...box([sectionTitle("About Me"), "", ...paragraphs, ...highlights])
    ];
  },

  skills: () => {
    const out: string[] = [prompt("skills"), ""]; 

    const header = [sectionTitle("Technical Arsenal")];

    const lines: string[] = [];

    skills.forEach((category, index) => {
      const icon = ['💻', '🗄️', '☁️', '📊', '🔧', '🎨'][index] || '🔹';
      lines.push(`${icon} ${category.name.toUpperCase()}:`);
      lines.push(...listToColumns(category.technologies, 4));
      lines.push("");
    });

    const total = skills.reduce((acc, cat) => acc + cat.technologies.length, 0);

    out.push(...box([header[0], "", ...lines, `Total Technologies Mastered: ${total}`]));
    return out;
  },

  experience: () => {
    const lines: string[] = [];

    experiences.forEach((exp, index) => {
      const timelineSymbol = index === 0 ? "●" : "○";
      lines.push(`${timelineSymbol} ${exp.title}`);
      lines.push(`   🏢 ${exp.company}`);
      lines.push(`   📍 ${exp.location} │ 📅 ${exp.period}`);
      lines.push("");
      lines.push("   🎯 KEY ACHIEVEMENTS:");
      exp.responsibilities.forEach((resp: string) => {
        lines.push(`   ▶ ${resp}`);
      });
      if (index < experiences.length - 1) {
        lines.push("");
        lines.push("   │");
        lines.push("   │");
        lines.push("");
      }
    });

    return [
      prompt("experience"),
      "",
      ...box([sectionTitle("Professional Journey"), "", ...lines])
    ];
  },

  projects: () => {
    const lines: string[] = [];

    training.forEach((project, index: number) => {
      const projectIcon = ["🎯", "⚡", "🔥", "💎", "🌟", "📦"][index] || "📦";
      lines.push(`${projectIcon} ${project.title}`);
      if (project.organization) lines.push(`   🏢 ${project.organization}`);
      if (project.period) lines.push(`   📅 ${project.period}`);
      lines.push("");

      const techPoint = project.points.find((p: string) => p.toLowerCase().includes('technologies used:'));
      const otherPoints = project.points.filter((p: string) => !p.toLowerCase().includes('technologies used:'));

      if (otherPoints.length > 0) {
        lines.push("   📋 PROJECT HIGHLIGHTS:");
        otherPoints.forEach((point: string) => lines.push(`   ▶ ${point}`));
        lines.push("");
      }

      if (techPoint) {
        const techs = techPoint.split('Technologies used:')[1]?.trim();
        if (techs) {
          const techArray = techs.split(',').map((t: string) => t.trim()).filter(Boolean);
          lines.push("   🛠️  TECH STACK:");
          lines.push("   " + techArray.map((t: string) => `[${t}]`).join(" "));
          lines.push("");
        }
      }

      if (index < training.length - 1) {
        lines.push("   " + repeat("─", 50));
        lines.push("");
      }
    });

    return [
      prompt("projects"),
      "",
      ...box([sectionTitle("Featured Projects"), "", ...lines])
    ];
  },

  education: () => {
    const lines: string[] = [];

    education.forEach((edu, index: number) => {
      lines.push(`🎓 ${edu.degree}`);
      lines.push(`   🏫 ${edu.institution}`);
      lines.push(`   📍 ${edu.location}`);
      lines.push(`   📅 ${edu.year}`);
      if (index < education.length - 1) {
        lines.push("");
        lines.push("   " + repeat("─", 30));
        lines.push("");
      }
    });

    return [
      prompt("education"),
      "",
      ...box([sectionTitle("Education"), "", ...lines])
    ];
  },

  certs: () => {
    const lines: string[] = [];

    certifications.forEach((cert, index: number) => {
      const certIcon = ["🏅", "⭐", "🎖️", "🏆", "🥇"][index] || "📜";
      lines.push(`${certIcon} ${cert.title}`);
      lines.push(`   🏢 ${cert.organization}`);
      lines.push(`   📅 ${cert.year}`);
      lines.push(`   ✓ Verified Credential`);
      if (index < certifications.length - 1) lines.push("");
    });

    lines.push("");
    lines.push(`📊 Total Certifications: ${certifications.length}`);

    return [
      prompt("certs"),
      "",
      ...box([sectionTitle("Certifications"), "", ...lines])
    ];
  },

  contact: () => {
    const lines = [
      "📧 EMAIL:",
      `   ${personalInfo.email}`,
      `   Response time: Within 24 hours`,
      "",
      "📱 PHONE:",
      `   ${personalInfo.phone}`,
      `   Available: 9 AM - 6 PM IST (Mon-Fri)`,
      "",
      "📍 LOCATION:",
      `   ${personalInfo.location}`,
      `   Open to remote opportunities worldwide`,
      "",
      "💼 CURRENT STATUS:",
      `   ● Available for new opportunities`,
      `   Data Analyst at Infosys Limited`,
      `   Seeking: Senior Developer/Analyst roles`,
      "",
      "⚡ Quick Response Guaranteed!",
    ];

    return [
      prompt("contact"),
      "",
      ...box([sectionTitle("Contact Information"), "", ...lines])
    ];
  },

  social: () => {
    const lines = [
      "🔗 PROFESSIONAL PROFILES:",
      "",
      `   GitHub:   ${personalInfo.github}`,
      `   ▶ View code repositories and contributions`,
      `   ▶ Explore open source projects`,
      `   ▶ See coding activity and stats`,
      "",
      `   LinkedIn: ${personalInfo.linkedin}`,
      `   ▶ Professional network and recommendations`,
      `   ▶ Career updates and achievements`,
      `   ▶ Industry connections and insights`,
      "",
      "📊 STATS:",
      `   GitHub Repos: 20+`,
      `   LinkedIn Connections: 500+`,
      "",
      "💡 Pro Tip: Connect with me for tech discussions!",
    ];

    return [
      prompt("social"),
      "",
      ...box([sectionTitle("Social Networks"), "", ...lines])
    ];
  },

  resume: () => {
    const lines = [
      "📋 AVAILABLE FORMATS:",
      "",
      `   1. PDF Format (Recommended for ATS)`,
      `   2. Word Document (.docx)`,
      `   3. Plain Text (.txt)`,
      `   4. JSON Data (Machine readable)`,
      "",
      "🔗 ACCESS METHODS:",
      "",
      `   📧 Email Request: ${personalInfo.email}`,
      `   💬 Direct Message: LinkedIn or GitHub`,
      `   📱 Quick Call: ${personalInfo.phone}`,
      "",
      "📊 RESUME HIGHLIGHTS:",
      `   ✓ 2+ years professional experience`,
      `   ✓ Multiple technology certifications`,
      `   ✓ Proven project delivery record`,
      `   ✓ ATS-optimized format`,
      "",
      "⚡ Latest version always available on request!",
    ];

    return [
      prompt("resume"),
      "",
      ...box([sectionTitle("Resume Access"), "", ...lines])
    ];
  },

  history: () => {
    const lines = [
      "📜 COMMAND HISTORY",
      "",
      "Recent commands:",
      "   1  help",
      "   2  whoami",
      "   3  skills",
      "   4  experience",
      "   5  projects",
      "   6  contact",
      "   7  history",
      "",
      "💡 Use ↑/↓ arrows to navigate command history",
    ];

    return [
      prompt("history"),
      "",
      ...lines
    ];
  },

  clear: () => [
    prompt("clear"),
    "",
    ...asciiArt.welcome
  ],

  exit: () => {
    const lines = [
      "",
      "Thanks for exploring my portfolio!",
      "",
      "🚀 Next Steps:",
      `   📧 Email me: ${personalInfo.email}`,
      `   🔗 Connect: LinkedIn & GitHub`,
      `   📱 Call me: ${personalInfo.phone}`,
      `   💼 View projects: GitHub repositories`,
      "",
      "💡 Remember:",
      `   ▶ I'm actively seeking new opportunities`,
      `   ▶ Open to remote and hybrid work`,
      `   ▶ Available for immediate start`,
      "",
      "Session will close in 3 seconds...",
      "",
      "Have a great day! 🌟",
    ];

    return [
      prompt("exit"),
      "",
      ...box([sectionTitle("Session Ended"), "", ...lines])
    ];
  }
};

// Easter eggs (kept fun, with mild polishing) --------------------------------
export const easterEggs = {
  sudo: () => [
    prompt("sudo"),
    "",
    ...box([
      "sudo: permission denied",
      "",
      "Nice try! But this is a portfolio, not a production server 😄",
      "However, I appreciate the Linux knowledge! 🐧",
      "",
      "Available privileges:",
      "   ▶ Read access to all portfolio data",
      "   ▶ Execute permission on contact commands",
      "   ▶ Write access to collaboration opportunities",
      "",
      "Pro tip: Try 'help' for actual available commands",
    ])
  ],

  coffee: () => [
    prompt("coffee"),
    "",
    ...box([
      "☕ COFFEE PROTOCOL ACTIVATED",
      "",
      "      ( (",
      "       ) )",
      "    ........",
      "    |      |]",
      "    \\      /",
      "     `----'",
      "",
      "☕ Coffee Stats:",
      `   Daily intake: ∞ cups`,
      `   Preferred blend: Strong & Dark`,
      `   Coding efficiency: +9000%`,
      "",
      "Warning: This portfolio was entirely powered by coffee!",
      "Side effects: Clean code and bug-free solutions ✨",
    ])
  ],

  matrix: () => [
    prompt("matrix"),
    "",
    ...box([
      "🟢 Entering the Matrix...",
      "",
      "01001000 01100101 01101100 01101100 01101111",
      "01010111 01101111 01110010 01101100 01100100",
      "",
      "Translation: Hello World",
      "",
      "You took the right pill - welcome to my digital world!",
      "Reality: I'm a developer who loves binary as much as coffee ☕",
    ])
  ],

  hack: () => [
    prompt("hack"),
    "",
    ...box([
      "🚫 INTRUSION DETECTED",
      "",
      "Initializing countermeasures...",
      "[████████████████████████] 100%",
      "",
      "Just kidding! 😄",
      "This is a portfolio, not a government database",
      "",
      "Real hacking skills:",
      `   ▶ Hacking through complex algorithms`,
      `   ▶ Breaking down data silos`,
      `   ▶ Cracking coding interviews`,
    ])
  ]
};

// Command suggestions and auto-completion -----------------------------------
export const commandSuggestions = [
  'help', 'whoami', 'about', 'contact', 'social', 'skills', 
  'experience', 'projects', 'education', 'certs', 'resume', 
  'clear', 'history', 'neofetch', 'exit'
];

// ASCII animations for loading states ---------------------------------------
export const loadingAnimations = {
  dots: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
  bars: ['▁', '▃', '▄', '▅', '▆', '▇', '█', '▇', '▆', '▅', '▄', '▃'],
  arrows: ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙']
};

const terminalConfig = {
  asciiArt,
  terminalCommands,
  easterEggs,
  commandSuggestions,
  loadingAnimations
};

export default terminalConfig;
