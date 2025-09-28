import {
  Code,
  Database,
  Github,
  Server,
  Layout,
  Languages,
  Brain,
} from 'lucide-react';

export const personalInfo = {
  name: "Jayesh Shinde",
  email: "jayesh4178@gmail.com",
  phone: "+91 9975154178",
  location: "Vapi, Gujarat",
  github: "https://github.com/JayeshMShinde",
  linkedin: "https://linkedin.com/in/jayesh-mahendra-shinde",
  summary:
    "Full Stack Developer & Data Analyst—building scalable web apps and reliable data pipelines (Qlik → Snowflake, SQL). Seeking impact-driven teams that value clean code, performance, and continuous learning."
};

export const about = {
  title: "About Me",
  description: `I am a passionate Full Stack Developer and Data Analyst with a strong foundation in 
  both software engineering and data-driven solutions. Over the past few years, I have built 
  expertise in designing and developing scalable web applications, integrating APIs, and 
  optimizing performance for better user experiences. 

  At Infosys, I gained hands-on experience in data analytics—developing Qlik to Snowflake data pipelines, 
  writing optimized SQL queries, and enabling real-time data availability for business intelligence. 
  My previous role as a Python Full Stack Developer at Xira Infotech sharpened my skills in building 
  end-to-end web solutions using Django, React, and Next.js, while integrating secure payment gateways 
  and third-party APIs.

  I thrive in collaborative environments, love solving complex problems, and adapt quickly to 
  new technologies. My long-term goal is to contribute to impactful projects that combine 
  software development and data engineering, while continuously expanding my technical expertise.`
};

export const experiences = [
  {
    title: "Data Analyst",
    company: "Infosys",
    location: "Pune, Maharashtra",
    period: "Oct 2024 - Present",
    responsibilities: [
      "Built end-to-end data ingestion pipelines using Qlik for ETL into Snowflake Data Warehouse",
      "Used Qlik Data Integration (Attunity) for real-time replication and batch ingestion to support scalable analytics",
      "Wrote complex SQL transformations to deliver validated, business-ready datasets for dashboards and reporting"
    ]
  },
  {
    title: "Python Full Stack Developer",
    company: "Xira Infotech",
    location: "Vapi, Gujarat",
    period: "Sept 2023 - Sept 2024",
    responsibilities: [
      "Developed and maintained web applications with Python and Django",
      "Designed and implemented RESTful APIs for front-end/back-end integration",
      "Delivered responsive UIs using HTML, CSS, JavaScript, and TypeScript",
      "Improved performance via code refactoring and database optimization",
      "Used Git for version control and team collaboration",
      "Integrated Razorpay (payments) and Delhivery (logistics) third-party APIs"
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Sandip University",
    location: "Nashik",
    year: "Aug 2019 - Aug 2022"
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Sandip Polytechnic",
    location: "Nashik",
    year: "Jul 2016 - Jul 2019"
  }
];

// Kept key name 'training' to match your existing codebase.
// Entries aligned to the PROJECTS in your CV.
export const training = [
  {
    title: "Data Visualization with ML Integration",
    organization: "Academic Project",
    period: "Dec 2021 - Mar 2022",
    points: [
      "Built a data visualization program leveraging EDA",
      "Implemented a GUI app with a built-in ML algorithm",
      "Technologies used: Python, Pandas, Matplotlib, Scikit-learn"
    ]
  },
  {
    title: "Klippie-GPT — AI Video Creation Tool",
    organization: "Freelance Project",
    period: "Aug 2024 - Sept 2024",
    points: [
      "Designed a responsive web UI for AI-powered video ideation/creation",
      "Developed real-time collaboration via WebSocket for chat and live feedback",
      "Added chat regeneration, archiving, and content management",
      "Technologies used: Next.js, React, Tailwind CSS, WebSocket, Shadcn UI, Mantine Dev UI"
    ]
  },
  {
    title: "E-Commerce Platform",
    organization: "Xira Infotech",
    period: "Jan 2024 - May 2024",
    points: [
      "Built full-stack e-commerce platform with payment integration",
      "Implemented user authentication, product catalog, and order management",
      "Integrated Razorpay for secure payment processing",
      "Technologies used: Django, React, PostgreSQL, Razorpay API"
    ]
  },
  {
    title: "Real-Time Analytics Dashboard",
    organization: "Infosys",
    period: "Nov 2024 - Present",
    points: [
      "Developed interactive dashboard for real-time data monitoring",
      "Implemented automated data refresh and alert systems",
      "Optimized SQL queries for sub-second response times",
      "Technologies used: Qlik Sense, Snowflake, SQL, JavaScript"
    ]
  },
  {
    title: "Task Management System",
    organization: "Personal Project",
    period: "Jun 2023 - Aug 2023",
    points: [
      "Created collaborative task management application",
      "Implemented drag-and-drop functionality and real-time updates",
      "Added team collaboration features and progress tracking",
      "Technologies used: React, Node.js, MongoDB, Socket.io"
    ]
  },
  {
    title: "Portfolio Website",
    organization: "Personal Project",
    period: "Dec 2024 - Present",
    points: [
      "Built responsive portfolio with neural network particle background",
      "Implemented interactive terminal interface and smooth animations",
      "Optimized for mobile devices and accessibility",
      "Technologies used: Next.js, TypeScript, Tailwind CSS, Framer Motion"
    ]
  }
];

export const skills = [
  {
    name: "Frontend Development",
    icon: Layout,
    color: "text-blue-400",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Next.js", "TypeScript", "RTK Query", "TanStack Query", "TanStack Router"]
  },
  {
    name: "Backend Development",
    icon: Server,
    color: "text-green-400",
    technologies: ["Python", "Django", "Java", "Spring Boot", "RESTful APIs"]
  },
  {
    name: "Data Engineering & Analytics",
    icon: Database,
    color: "text-emerald-400",
    technologies: ["Qlik Data Integration (Attunity)", "Snowflake", "ETL/ELT", "SQL"]
  },
  {
    name: "Databases",
    icon: Database,
    color: "text-yellow-400",
    technologies: ["MySQL", "PostgreSQL"]
  },
  {
    name: "Version Control",
    icon: Github,
    color: "text-orange-400",
    technologies: ["Git", "GitHub", "GitLab"]
  },
  {
    name: "Tools & Platforms",
    icon: Code,
    color: "text-purple-400",
    technologies: ["WebSocket", "Shadcn UI", "Mantine Dev UI", "Docker", "Jira", "Windows", "Linux"]
  },
  {
    name: "Languages",
    icon: Languages,
    color: "text-pink-400",
    technologies: ["English", "Hindi", "Marathi", "Gujarati"]
  },
  {
    name: "Soft Skills",
    icon: Brain,
    color: "text-indigo-400",
    technologies: ["Quick learner", "Team player", "Problem-solving", "Communication"]
  }
];

export const certifications = [
  {
    title: "Java Full Stack Developer",
    organization: "CIIT Training Institute",
    year: "2023"
  }
];

export const languages = ["English", "Hindi", "Marathi", "Gujarati"];
