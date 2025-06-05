import type { Project, Experience, BlogPost, Skill } from '@/lib/types';
import { Briefcase, Code, Database, GitBranch, Cloud, Smartphone, TrendingUp, Zap, Users, Edit3, Search, BarChartBig, Presentation } from 'lucide-react';

export const skills: Skill[] = [
  { id: 'react', name: 'React', icon: Code, level: 'Advanced' },
  { id: 'nextjs', name: 'Next.js', icon: Code, level: 'Advanced' },
  { id: 'typescript', name: 'TypeScript', icon: Code, level: 'Intermediate' },
  { id: 'nodejs', name: 'Node.js', icon: Database, level: 'Intermediate' },
  { id: 'python', name: 'Python', icon: Code, level: 'Intermediate' },
  { id: 'git', name: 'Git', icon: GitBranch, level: 'Advanced' },
  { id: 'docker', name: 'Docker', icon: Cloud, level: 'Beginner' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: Code, level: 'Advanced' },
  { id: 'figma', name: 'Figma', icon: Edit3, level: 'Intermediate' },
  { id: 'problem-solving', name: 'Problem Solving', icon: Search, level: 'Expert' },
  { id: 'data-analysis', name: 'Data Analysis', icon: BarChartBig, level: 'Intermediate' },
  { id: 'project-management', name: 'Project Management', icon: Presentation, level: 'Intermediate' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with modern features and a responsive design.',
    longDescription: 'Developed a feature-rich e-commerce platform using Next.js for the frontend, Node.js for the backend API, and PostgreSQL for the database. Implemented user authentication, product catalog, shopping cart, order processing, and an admin dashboard for managing products and orders. Integrated Stripe for payment processing. Focused on performance, SEO, and user experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    liveDemoUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    date: 'Mar 2024 - May 2024'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application to help teams organize their work.',
    longDescription: 'Built a real-time collaborative task management app using React, Firebase (Firestore and Authentication), and Material UI. Features include creating projects, assigning tasks, setting deadlines, tracking progress with a Kanban board, and real-time updates for collaborators. Designed for individuals and small teams.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'to-do list',
    liveDemoUrl: '#',
    repoUrl: '#',
    tags: ['React', 'Firebase', 'Material UI', 'Collaboration'],
    date: 'Jan 2024 - Feb 2024'
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    description: 'This very portfolio website, built with Next.js and Tailwind CSS.',
    longDescription: 'Designed and developed this personal portfolio website to showcase my skills, projects, and experience. Built with Next.js for server-side rendering and static site generation, ensuring optimal performance and SEO. Styled with Tailwind CSS for a clean and modern look. Includes an AI-powered resume feedback tool.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'developer portfolio',
    liveDemoUrl: '/',
    repoUrl: '#',
    tags: ['Next.js', 'Tailwind CSS', 'GenAI', 'Portfolio'],
    date: 'Jun 2024 - Present'
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    companyName: 'Tech Solutions Inc.',
    jobTitle: 'Software Engineer Intern',
    startDate: 'May 2024',
    endDate: 'Aug 2024',
    logoUrl: 'https://placehold.co/100x100.png',
    logoHint: 'company logo',
    summary: [
      'Contributed to the development of a new customer portal using React and TypeScript, improving user engagement by 15%.',
      'Collaborated with a team of 5 engineers on agile sprints, participating in daily stand-ups, sprint planning, and retrospectives.',
      'Developed and maintained RESTful APIs using Node.js and Express for backend services.',
      'Wrote unit and integration tests, achieving 90% code coverage for new features.',
    ],
  },
  {
    id: '2',
    companyName: 'University of Arizona - CS Department',
    jobTitle: 'Teaching Assistant',
    startDate: 'Aug 2023',
    endDate: 'May 2024',
    logoUrl: 'https://placehold.co/100x100.png',
    logoHint: 'university logo',
    summary: [
      'Assisted in teaching introductory programming courses (Python and Java) to over 100 undergraduate students.',
      'Conducted weekly lab sessions, graded assignments, and provided one-on-one tutoring.',
      'Developed supplementary course materials and coding examples to enhance student learning.',
      'Received positive feedback from students for clarity and helpfulness.',
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Asynchronous JavaScript',
    excerpt: 'A deep dive into Promises, async/await, and common patterns for handling asynchronous operations in JavaScript.',
    date: 'July 15, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code syntax',
    url: '#', // Replace with actual URL if external
    author: 'Utkarsha Patil',
    readingTime: '7 min read'
  },
  {
    id: '2',
    title: 'The Future of Web Development with AI',
    excerpt: 'Exploring how Generative AI is transforming the landscape of web development, from code generation to UI design.',
    date: 'June 28, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence',
    url: '#',
    author: 'Utkarsha Patil',
    readingTime: '5 min read'
  },
  {
    id: '3',
    title: 'My Journey into Software Engineering',
    excerpt: 'Reflections on my path to becoming a software engineer, challenges faced, and lessons learned along the way.',
    date: 'May 10, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'graduation cap',
    url: '#',
    author: 'Utkarsha Patil',
    readingTime: '6 min read'
  },
];
