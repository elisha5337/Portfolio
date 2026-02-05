
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  gallery?: string[];
  tags: string[];
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  icon: string;
  detailedDescription: string;
  subSkills: string[];
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}
