import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  tags: string[];
  date: string;
}

export interface Experience {
  id:string;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  summary: string[];
  logoUrl?: string;
  logoHint?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  url: string;
  author?: string;
  readingTime?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon?: LucideIcon;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}
