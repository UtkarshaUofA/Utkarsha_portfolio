
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
    id: '1',
    title: 'Customer Churn Prediction',
    description: 'Developed a model to predict customer churn for a telecom company, achieving 85% accuracy.',
    longDescription: 'Led a project to predict customer churn using historical customer data. Performed exploratory data analysis, feature engineering, and model selection (Logistic Regression, Random Forest, Gradient Boosting). The final model achieved 85% accuracy, providing actionable insights for retention strategies. Utilized Python, Pandas, Scikit-learn, and Matplotlib.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data graph analytics',
    liveDemoUrl: '#',
    repoUrl: '#',
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'Data Analysis'],
    date: 'Mar 2024 - May 2024'
  },
  {
    id: '2',
    title: 'Sales Forecasting Tool',
    description: 'Built a time series forecasting model to predict monthly sales for a retail client.',
    longDescription: 'Developed a sales forecasting tool using SARIMA models to predict monthly sales. Cleaned and preprocessed historical sales data, performed time series decomposition, and evaluated model performance using RMSE and MAE. The tool helped the client optimize inventory management. Implemented in Python with Statsmodels and Plotly for visualization.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sales chart graph',
    liveDemoUrl: '#',
    repoUrl: '#',
    tags: ['Python', 'Time Series', 'Statsmodels', 'Pandas', 'Forecasting'],
    date: 'Jan 2024 - Feb 2024'
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    description: 'This very portfolio website, built with Next.js and Tailwind CSS, showcasing my data science journey.',
    longDescription: 'Designed and developed this personal portfolio website to showcase my skills, projects, and experience in Data Science. Built with Next.js for server-side rendering and static site generation, ensuring optimal performance and SEO. Styled with Tailwind CSS for a clean and modern look. Includes sections for projects, experience, and a blog.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'developer portfolio',
    liveDemoUrl: '/',
    repoUrl: '#',
    tags: ['Next.js', 'Tailwind CSS', 'Portfolio', 'Data Science'],
    date: 'Jun 2024 - Present'
  },
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
