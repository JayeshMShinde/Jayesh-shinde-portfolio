export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface About {
  title: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface Training {
  title: string;
  organization: string;
  period: string;
  points: string[];
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  technologies: string[];
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
}