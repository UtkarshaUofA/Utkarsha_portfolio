
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

export interface Skill {
  id: string;
  name: string;
  icon?: LucideIcon;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  graduationDate: string;
  logoUrl?: string;
  logoHint?: string;
  details?: string[];
}

// BlogPost type removed as per user request
