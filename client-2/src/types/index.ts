export interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  featured: boolean;
  createdAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface User {
  username: string;
  password: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}
