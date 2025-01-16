import { 
    Code, 
    Briefcase, 
    GraduationCap, 
    Award, 
    Mail, 
    Phone, 
    Linkedin, 
    MapPin,
    BookOpen,
    Binary,
    Database,
    Github,
    Layout,
    Terminal,
    Globe,
    Server,
    LucideIcon
  } from 'lucide-react';
  
  export interface Experience {
    title: string;
    company: string;
    period: string;
    location: string;
    icon?: LucideIcon;
  }
  
  export interface Training {
    title: string;
    organization: string;
    period: string;
    points: string[];
    icon?: LucideIcon;
  }
  
  export interface Education {
    degree: string;
    details: string;
    institution: string;
    location: string;
    year: string;
    score?: string;
    icon?: LucideIcon;
  }
  
  export interface Certification {
    title: string;
    organization: string;
    year: string;
    icon?: LucideIcon;
  }
  
  export interface Skill {
    name: string;
    icon: LucideIcon;
    color: string;
  }
  
  export interface ContactInfo {
    type: string;
    value: string;
    icon: LucideIcon;
    link: string;
  }
  
  export const personalInfo = {
    name: "Jayesh Mahendra Shinde",
    location: "Valsad, India",
    email: "Jayesh4178@gmail.com",
    phone: "9975154178",
    linkedin: "www.linkedin.com/in/jayesh-mahendra-shinde",
    summary: "Crafting digital experiences through code | Full Stack Developer specialized in building scalable web applications. Ready to bring innovative solutions to a dynamic organization",
    contactInfo: [
      {
        type: "Email",
        value: "Jayesh4178@gmail.com",
        icon: Mail,
        link: "mailto:Jayesh4178@gmail.com"
      },
      {
        type: "Phone",
        value: "9975154178",
        icon: Phone,
        link: "tel:9975154178"
      },
      {
        type: "LinkedIn",
        value: "Jayesh Mahendra Shinde",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/jayesh-mahendra-shinde"
      },
      {
        type: "Location",
        value: "Valsad, India",
        icon: MapPin,
        link: "#"
      }
    ]
  };
  
  export const experiences: Experience[] = [
    {
      title: "Python Full Stack Developer",
      company: "Xira Infotech",
      period: "September 2023 - Present",
      location: "Vapi",
      icon: Code
    },
    {
      title: "Java Full Stack Developer Intern",
      company: "CIIT Training Institute",
      period: "December 2022 - May 2023",
      location: "Pune, Maharashtra",
      icon: Terminal
    }
  ];
  
  export const education: Education[] = [
    {
      degree: "B. Tech in Computer Science and Engineering",
      details: "Minor in Business Analytics and Optimization",
      institution: "School of Computer Science and Engineering, Sandip University",
      location: "Nashik, Maharashtra",
      year: "2022",
      score: "8.71",
      icon: GraduationCap
    },
    {
      degree: "Diploma in Information Technology",
      details: "",
      institution: "Sandip Polytechnic, Sandip Foundation",
      location: "Nashik, Maharashtra",
      year: "2019",
      score: "7.69",
      icon: BookOpen
    },
    {
      degree: "10th (SSC)",
      details: "",
      institution: "St. Francis's High School",
      location: "Vapi, Gujarat",
      year: "2016",
      score: "",
      icon: BookOpen
    }
  ];
  
  export const training: Training[] = [
    {
      title: "Exam Portal",
      organization: "CIIT Training Institute",
      period: "December 2022 - May 2023",
      points: [
        "Implemented Exam Portal system for student exams and result access",
        "Designed user-friendly interface for students and administrators",
        "Managed student records and exam questions collaboratively"
      ],
      icon: Layout
    },
    {
      title: "GUI Based Data Visualization Software",
      organization: "Sandip University",
      period: "July 2021 - April 2022",
      points: [
        "Developed Data Visualization program using Exploratory Data Analysis (EDA) techniques",
        "Created user-friendly GUI application for data exploration and visualization",
        "Plotted graphs to communicate data patterns and trends",
        "Integrated Predefined/Built-in Machine Learning (ML) Algorithm"
      ],
      icon: Binary
    }
  ];
  
  export const certifications: Certification[] = [
    {
      title: "Java Full Stack Developer",
      organization: "CIIT Institute",
      year: "2023",
      icon: Award
    }
  ];
  
  export const skills: Skill[] = [
    { name: "HTML", icon: Layout, color: "text-orange-400" },
    { name: "CSS", icon: Layout, color: "text-blue-400" },
    { name: "Bootstrap", icon: Layout, color: "text-purple-400" },
    { name: "Tailwind CSS", icon: Layout, color: "text-cyan-400" },
    { name: "JavaScript", icon: Binary, color: "text-yellow-400" },
    { name: "TypeScript", icon: Binary, color: "text-blue-400" },
    { name: "Python", icon: Code, color: "text-green-400" },
    { name: "Java", icon: Code, color: "text-red-400" },
    { name: "SQL/PLSQL", icon: Database, color: "text-blue-400" },
    { name: "Git", icon: Github, color: "text-orange-400" },
    { name: "Django", icon: Server, color: "text-green-400" },
    { name: "React.js", icon: Code, color: "text-cyan-400" },
    { name: "Next.js", icon: Globe, color: "text-gray-400" },
    { name: "Spring Boot", icon: Server, color: "text-green-400" }
  ];