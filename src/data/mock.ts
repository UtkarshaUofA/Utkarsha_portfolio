
import type { Project, Experience, Skill, Education } from '@/lib/types';
import { Code, Database, GitBranch, Zap, BarChartBig, TrendingUp, Search, Presentation, Edit3, Users, FileSpreadsheet, ListChecks, Brain, GraduationCap } from 'lucide-react';

export const skills: Skill[] = [
  { id: 'python', name: 'Python', icon: Code },
  { id: 'sql', name: 'SQL', icon: Database },
  { id: 'machine-learning', name: 'Machine Learning', icon: Zap },
  { id: 'data-visualization', name: 'Data Visualization', icon: BarChartBig },
  { id: 'statistics', name: 'Statistics', icon: TrendingUp },
  { id: 'pandas', name: 'Pandas', icon: Code },
  { id: 'numpy', name: 'NumPy', icon: Code },
  { id: 'scikit-learn', name: 'Scikit-learn', icon: Zap },
  { id: 'jupyter-notebooks', name: 'Jupyter Notebooks', icon: Edit3 },
  { id: 'git', name: 'Git', icon: GitBranch },
  { id: 'data-analysis', name: 'Data Analysis', icon: BarChartBig },
  { id: 'databricks', name: 'Databricks', icon: Database },
  { id: 'excel', name: 'Excel', icon: FileSpreadsheet },
  { id: 'predictive-modeling', name: 'Predictive Modeling', icon: Brain },
  { id: 'tableau', name: 'Tableau', icon: Presentation },
  { id: 'problem-solving', name: 'Problem Solving', icon: Search },
  { id: 'communication', name: 'Communication', icon: Users },
  { id: 'jira', name: 'JIRA', icon: ListChecks },
];

export const projects: Project[] = [
  {
    id: '4',
    title: 'Descriptive Analysis of Grade Outcomes Report',
    description: 'This study explores grade outcomes for students at a level one research institution before, during, and after a public health emergency.',
    longDescription: 'This project involved a descriptive analysis of student grade outcomes at a major research university, examining trends before, during, and after a significant public health emergency. The study aimed to identify patterns and provide insights into the pandemic\'s impact on academic performance. Techniques included data cleaning, statistical analysis, and visualization of grade distributions and trends over time.',
    imageUrl: '/timeseries.png',
    imageHint: 'grade analysis chart',
    liveDemoUrl: 'https://info-523-exercises.github.io/project-final-The-Null-Wranglers/',
    repoUrl: 'https://github.com/INFO-523-Exercises/project-final-The-Null-Wranglers',
    tags: ['Data Analysis', 'Statistical Analysis', 'Education', 'Research'],
    date: 'Oct 2023'
  },
  {
    id: '5',
    title: 'Crime Trends and the Correlation with the Unemployment Rate in Tucson',
    description: 'This study analyzes criminal history and the correlation between crime and unemployment in Tucson to understand and address community issues.',
    longDescription: 'This study analyzes criminal history and the correlation between crime and unemployment in Tucson to understand and address community issues. The project involved data collection, cleaning, statistical analysis, and visualization to identify patterns and potential relationships between crime rates and unemployment figures in the Tucson area. Python, Pandas, and Matplotlib/Seaborn were key tools used in this analysis.',
    imageUrl: '/tucson.png',
    imageHint: 'crime analysis tucson',
    repoUrl: 'https://github.com/UtkarshaUofA/Analyzing-Crime-Trends-and-the-Correlation-with-the-Unemployment-Rate-in-Tucson',
    tags: ['Data Analysis', 'Correlation Analysis', 'Social Science', 'Python', 'Pandas'],
    date: 'Dec 2024'
  },
  {
    id: '6',
    title: 'Pharmacy Store Data Management System',
    description: 'This study analyzes criminal history and the correlation between crime and unemployment in Tucson to understand and address community issues.',
    longDescription: 'This study analyzes criminal history and the correlation between crime and unemployment in Tucson to understand and address community issues.',
    imageUrl: '/pharmacy.png',
    imageHint: 'pharmacy system',
    repoUrl: 'https://github.com/UtkarshaUofA/Analyzing-Crime-Trends-and-the-Correlation-with-the-Unemployment-Rate-in-Tucson',
    tags: ['Data Management', 'System Design', 'Database', 'Software Development'],
    date: 'May 2024'
  },
  {
    id: '7',
    title: 'YouTube Video Recommendation Based On User Comments And Its Statistical Analysis',
    description: 'To minimize the issue of irrelevant recommendation, we are proposing the YouTube recommendation system based network of user comments and their sentiment analysis.',
    longDescription: 'This project proposes a YouTube recommendation system that leverages user comments and their sentiment analysis to provide more relevant video suggestions. The core idea is to build a network from user comments, analyze the sentiment expressed, and use this information to improve the quality of recommendations, moving beyond traditional metrics that might lead to irrelevant suggestions.',
    imageUrl: '/YouTube.png',
    imageHint: 'youtube logo comments',
    repoUrl: 'https://github.com/UtkarshaUofA/YouTube-Recommendation',
    tags: ['Recommendation System', 'NLP', 'Sentiment Analysis', 'Python', 'Statistics'],
    date: 'May 2019'
  }
];

export const experiences: Experience[] = [
  {
    id: '3',
    companyName: 'University of Arizona Health Sciences',
    jobTitle: 'Student AI Developer',
    startDate: 'Jan 2025',
    endDate: 'May 2025',
    logoUrl: '/uarizona_logo.jpg',
    logoHint: 'university arizona logo',
    summary: [
      'Analyzed cross-team requirements to optimize AI-driven form-building and 3D patient simulation, improving efficiency by 35% through Python scripting and API integrations.',
      'Developed and monitored key performance metrics for AI-based patient simulations, ensuring data accuracy and usability for healthcare applications.',
      'Refined chatbot interactions by analyzing user behavior, improving session management, and optimizing data storage to enhance engagement and retention.',
      'Conducted exploratory data analysis (EDA) on chatbot logs, identifying patterns and insights to improve user experience and error handling.',
      'Presented weekly data-driven progress reports to 25+ stakeholders, ensuring alignment, transparency, and actionable insights for continuous improvements.',
      'Utilized Python (Programming Language), EDA, and other data science skills in AI projects.'
    ],
  },
  {
    id: '4',
    companyName: 'The Force for Health® Network',
    jobTitle: 'Data Analyst Intern',
    startDate: 'Sep 2024',
    endDate: 'Dec 2024',
    logoUrl: '/theforceforhealth_logo.jpg',
    logoHint: 'the force for health logo',
    summary: [
      'Automated six customer email campaigns tailored to diverse subscription plans, reducing manual workload by 60% and improving segmentation accuracy.',
      'Managed data ingestion and preprocessing for 40 U.S. counties and urban/rural areas in India using Python and Excel, ensuring data accuracy for visualization through 2 Tableau dashboards.',
      'Collaborated with three cross-functional teams during weekly sprint planning, execution, and updates to report progress and address challenges, contributing to a 90% sprint completion rate and reducing project delays by 20%.'
    ],
  },
  {
    id: '1',
    companyName: 'Capgemini',
    jobTitle: 'Associate Consultant',
    startDate: 'Nov 2019',
    endDate: 'Jul 2023',
    logoUrl: '/capgemini_logo.jpg',
    logoHint: 'capgemini logo',
    summary: [
      'Developed and optimized complex SQL queries to extract, clean, and analyze large datasets, improving accuracy in reporting and streamlining data retrieval processes.',
      'Streamlined weekly performance analysis by developing a scalable Performance Drivers dashboard, reducing analysis time by 45% and enhancing leadership reporting with clear KPI insights for effective root cause analysis.',
      'Created and maintained 2 Tableau dashboards for feature tracking and deep-dive analysis, cutting weekly analytics work by 5 hours and improving data-driven decision-making for cross-functional teams.',
      'Conducted 3+ A/B tests for email campaigns, delivering data-driven insights to optimize user engagement strategies.',
      'Performed ad hoc and deep-dive analytics, resulting in a 7% improvement in key product KPIs through actionable insights.',
      'Partnered with business and finance teams to align data reporting, contributing to a standardized analytics framework.'
    ],
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Arizona',
    degree: 'Master of Science in Data Science',
    graduationDate: 'May 2025',
    logoUrl: '/uarizona_logo.jpg',
    logoHint: 'university arizona logo',
    details: [
      'Activities and societies: ASTEC, WISE, Arizona Student Unions',
      'Coursework: Data Mining, Data Visualization, Machine Learning, Applied Natural Language Processing (NLP), Computational Social Science, Database Management, SQL/NoSQL Databases for Data and Information Sciences, Foundations of Data Science, Data Ethics.',
      'Key Highlights:',
      'AI Application Developer, ASTEC – Developed AI-driven solutions for healthcare applications, patient simulation, and improved patient form building.',
      'Worked with real-world datasets to identify trends, patterns, and outliers.',
      'Interned at The Force for Health Network, worked on healthcare applications.',
      'Collaborated on projects involving predictive modeling and text processing techniques.',
      'Gained hands-on experience with Python, SQL, and data analytics tools like Tableau.',
      'WISE Mentorship Program participant.',
      'Skills: MySQL, Python (Programming Language), and more.'
    ],
  },
  {
    id: '2',
    institution: 'Savitribai Phule Pune University',
    degree: 'Bachelor of Engineering - BE, Computer Science',
    graduationDate: '2019',
    logoUrl: '/Puneuni.jpg',
    logoHint: 'savitribai phule pune university logo',
    details: [
      'Activities and societies: NSS (National Service Scheme), ISTE (Indian Society for Technical Education)',
      'Worked on YouTube Video Analysis & Recommendation System, implementing sentiment analysis and improving recommendation relevance.',
      'Published a research paper on the project in IJRAR.',
      'Led technical event organization for the Computer Science department.',
      'Volunteered for NSS, contributing to community service initiatives.',
      'Coursework: Data Structures & Algorithms, Database Management Systems, Data Mining, Data Analytics',
    ],
  },
];
