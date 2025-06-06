
import type { Project, Experience, BlogPost, Skill } from '@/lib/types';
import { Code, Database, GitBranch, Zap, BarChartBig, TrendingUp, Search, Presentation, Edit3, Users, FileSpreadsheet, ListChecks, Brain } from 'lucide-react';

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
    id: '1',
    companyName: 'Data Insights Corp.',
    jobTitle: 'Data Science Intern',
    startDate: 'May 2024',
    endDate: 'Aug 2024',
    logoUrl: 'https://placehold.co/100x100.png',
    logoHint: 'data analytics company',
    summary: [
      'Developed and deployed machine learning models to predict customer behavior, improving marketing campaign targeting by 20%.',
      'Collaborated with a cross-functional team of data scientists and engineers in an agile environment, focusing on data-driven product enhancements.',
      'Built and maintained data pipelines using Python and SQL for ETL processes, preparing large datasets for analysis and model training.',
      'Validated model performance and ensured data quality through rigorous testing, evaluation metrics, and A/B testing.',
    ],
  },
  {
    id: '2',
    companyName: 'University of Arizona - Data Science Institute',
    jobTitle: 'Research Assistant & TA',
    startDate: 'Aug 2023',
    endDate: 'May 2024',
    logoUrl: 'https://placehold.co/100x100.png',
    logoHint: 'university building',
    summary: [
      'Assisted in teaching Data Mining and Statistical Learning courses (Python, R) to over 80 undergraduate and graduate students.',
      'Led lab sessions on data analysis, predictive modeling, and machine learning algorithms; graded projects and provided constructive feedback.',
      'Contributed to a research project on natural language processing, focusing on sentiment analysis of social media data.',
      'Developed supplementary course materials, including Jupyter notebooks and coding examples for advanced data science techniques.',
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Power of Exploratory Data Analysis (EDA)',
    excerpt: 'A comprehensive guide to EDA techniques and how they form the crucial first step in any data science project.',
    date: 'July 15, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data charts dashboard',
    url: '#',
    author: 'Utkarsha Patil',
    readingTime: '8 min read'
  },
  {
    id: '2',
    title: 'Understanding Bias and Fairness in Machine Learning',
    excerpt: 'Exploring the ethical implications of AI and strategies to mitigate bias in machine learning models.',
    date: 'June 28, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'algorithm network ethics',
    url: '#',
    author: 'Utkarsha Patil',
    readingTime: '6 min read'
  },
  {
    id: '3',
    title: 'My Journey into Data Science: From Curiosity to Career',
    excerpt: 'Reflections on my path into the field of data science, the challenges overcome, and key learnings.',
    date: 'May 10, 2024',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'graduation cap computer',
    url: '#',
    author: 'Utkarsha Patil',
    readingTime: '5 min read'
  },
];
