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
  github: "https://github.com/JayeshMShinde", // Add your GitHub URL
  linkedin: "https://linkedin.com/in/jayesh-mahendra-shinde", // Add your LinkedIn URL
  summary: "Crafting digital experiences through code | Full Stack Developer specialized in building scalable web applications. Ready to bring innovative solutions to a dynamic organization"
};

export const experiences = [
  {
    title: "Python Full Stack Developer",
    company: "Xira Infotech",
    location: "Vapi",
    period: "Sept 2023 - Present",
    responsibilities: [
      "Developed and maintained web applications using Python, Django frameworks",
      "Designed and implemented RESTful APIs for front-end and back-end communication",
      "Implemented responsive front-end designs using HTML, CSS, JavaScript, and TypeScript",
      "Optimized application performance through code refactoring and database optimization",
      "Utilized Git for code management and collaboration",
      "Integrated third-party APIs including Razorpay and Delhivery"
    ]
  }
];

export const education = [
  {
    degree: "B.tech in Computer Science and Engineering",
    institution: "Sandip University",
    location: "Nashik",
    year: "2019 - 2022"
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Sandip Polytechnic",
    location: "Nashik",
    year: "2016 - 2019"
  }
];

export const training = [
  {
    title: "Learning Management System (LMS)",
    organization: "Academic Project",
    period: "Dec 2022 - May 2023",
    points: [
      "Developed a Learning Management System with admin and student interfaces",
      "Enabled student registration, password management via email, and secure login",
      "Integrated features for students to take exams and view results",
      "Technologies used: Java, HTML, CSS, Reactjs"
    ]
  },
  {
    title: "Data Visualization with ML Integration",
    organization: "Academic Project",
    period: "Dec 2021 - Mar 2022",
    points: [
      "Developed a Data Visualization program using Exploratory Data Analysis (EDA)",
      "Implemented GUI application with built-in Machine Learning algorithm",
      "Technologies used: Python"
    ]
  },
  {
    title: "Klippie-GPT AI Video Creation Tool",
    organization: "Freelance Project",
    period: "Aug 2024 - Sept 2024",
    points: [
      "Designed responsive web interface for AI-powered video creation platform",
      "Developed real-time collaboration features using WebSocket",
      "Created functionalities for chat regeneration and content management",
      "Technologies used: Next.js, React, Tailwind CSS, WebSocket, Shadcn UI, Mantine Dev UI"
    ]
  }
];

export const skills = [
  {
    name: "Frontend Development",
    icon: Layout,
    color: "text-blue-400",
    technologies: ["HTML5", "CSS3", "React.js", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Backend Development",
    icon: Server,
    color: "text-green-400",
    technologies: ["Python", "Django", "Java", "Spring Boot", "RESTful APIs"]
  },
  {
    name: "Databases",
    icon: Database,
    color: "text-yellow-400",
    technologies: ["MySQL", "PostgreSQL", "Django ORM"]
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
    technologies: ["WebSocket", "Shadcn UI", "Mantine Dev UI", "Docker", "Jira"]
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

export const languages = [
  "English",
  "Hindi",
  "Marathi",
  "Gujarati"
];