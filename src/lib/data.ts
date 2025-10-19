
import type { LucideIcon } from 'lucide-react';
import { BrainCircuit, GraduationCap, Code, GitMerge, Film, Gamepad2, Share2, Layers, Cpu, Network, TestTube, Briefcase } from 'lucide-react';
import { PythonIcon, TensorFlowIcon, PyTorchIcon, NextjsIcon, VscodeIcon } from '@/components/icons';
import imageData from './placeholder-images.json';

const images = imageData.placeholderImages;

const findImage = (id: string) => images.find(img => img.id === id) || images[0];

// INTERFACE DEFINITIONS
// Defines the structure for your profile information
export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: {
    url: string;
    hint: string;
  };
  links: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
    phone: string;
  };
}

// Defines the structure for each skill highlight
export interface HighlightItem {
  icon: React.ElementType;
  text: string;
  description: string;
}

// Defines the structure for each post (project, certificate, or achievement)
export interface Post {
  id: string;
  type: 'project' | 'certificate' | 'achievement';
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  link?: string;
}

// Defines the structure for each education entry
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

// Defines the overall structure of all your portfolio data
export interface PortfolioData {
  profile: ProfileData;
  highlights: HighlightItem[];
  posts: Post[];
  education: EducationItem[];
}

// PORTFOLIO DATA
// This is where you can edit your personal information.
// You can change your name, title, bio, links, skills, projects, and education.

export const portfolioData: PortfolioData = {
  // To change your profile information, edit the values below
  profile: {
    name: 'Dhruv Gola',
    title: 'AI/ML Engineer',
    bio: 'AI/ML Engineer | Video Editor | Loves Building & Automating Stuff',
    avatar: {
      url: findImage('profile').imageUrl,
      hint: findImage('profile').imageHint,
    },
    links: {
      github: 'https://github.com/example',
      linkedin: 'https://linkedin.com/in/example',
      email: 'mailto:dhruvgola@example.com',
      phone: 'tel:+1234567890',
      resume: '/resume.pdf', // You can place your resume in the `public` folder
    },
  },
  // To change your skills, edit the array below. 
  // You can add or remove skills, change icons, text and descriptions.
  highlights: [
    { icon: BrainCircuit, text: 'Machine Learning', description: 'Extensive experience with supervised, unsupervised, and reinforcement learning models. Skilled in building and deploying predictive models.' },
    { icon: PythonIcon, text: 'Python', description: 'Highly proficient in Python for data science, web development (Flask, Django), and creating automation scripts.' },
    { icon: TensorFlowIcon, text: 'TensorFlow', description: 'Expertise in building, training, and optimizing deep learning models for various applications using TensorFlow and Keras.' },
    { icon: PyTorchIcon, text: 'PyTorch', description: 'Adept at using PyTorch for its flexibility and dynamic computational graph, ideal for research and complex neural network architectures.' },
    { icon: NextjsIcon, text: 'Next.js', description: 'Building high-performance, server-rendered React applications with Next.js, focusing on SEO and user experience.' },
    { icon: GraduationCap, text: 'B.Tech AI/ML', description: 'Pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning, with a strong academic record.' },
    { icon: VscodeIcon, text: 'VS Code', description: 'My code editor of choice, customized with extensions for a productive development workflow.' },
    { icon: GitMerge, text: 'Git', description: 'Proficient with Git for version control, including branching, merging, and collaborating in team environments.' },
    { icon: TestTube, text: 'Colab', description: 'Utilizing Google Colab for its free GPU resources to train deep learning models and conduct experimental research.' },
    { icon: Film, text: 'Video Editing', description: 'Passionate about visual storytelling, with skills in video editing, color grading, and motion graphics using Adobe Premiere Pro.' },
    { icon: Gamepad2, text: 'Gaming', description: 'An avid gamer who enjoys competitive strategy games and exploring immersive open-world RPGs.' },
  ],
  // To change your projects, certificates, or achievements, edit the array below.
  posts: [
    {
      id: 'proj-1',
      type: 'project',
      title: 'ML Data Visualization',
      shortDescription: 'Visualizing complex datasets.',
      longDescription: 'This project focuses on using various machine learning techniques to create intuitive and interactive visualizations for large and complex datasets. Built with Python, Pandas, and Plotly.',
      imageUrl: findImage('project-1').imageUrl,
      imageHint: findImage('project-1').imageHint,
      link: 'https://github.com/example/project-1',
    },
    {
      id: 'proj-2',
      type: 'project',
      title: 'NLP Sentiment Analysis',
      shortDescription: 'Analyzing text sentiment.',
      longDescription: 'A deep learning model for sentiment analysis on social media text. The model is trained on a large corpus of data and achieves high accuracy in classifying text as positive, negative, or neutral. Tech used: PyTorch, Hugging Face Transformers.',
      imageUrl: findImage('project-2').imageUrl,
      imageHint: findImage('project-2').imageHint,
      link: 'https://github.com/example/project-2',
    },
    {
      id: 'cert-1',
      type: 'certificate',
      title: 'Coursera ML Specialization',
      shortDescription: 'Machine Learning by Andrew Ng.',
      longDescription: 'Completed the comprehensive Machine Learning specialization on Coursera, taught by Andrew Ng. Covered topics from linear regression to deep learning and reinforcement learning.',
      imageUrl: findImage('certificate-1').imageUrl,
      imageHint: findImage('certificate-1').imageHint,
      link: '#',
    },
    {
      id: 'ach-1',
      type: 'achievement',
      title: 'Hackathon Winner 2023',
      shortDescription: '1st Place at InnovateAI.',
      longDescription: 'Led a team to win first place at the InnovateAI Hackathon 2023. We developed a real-time sign language translation app using computer vision and deep learning.',
      imageUrl: findImage('achievement-1').imageUrl,
      imageHint: findImage('achievement-1').imageHint,
    },
    {
      id: 'proj-3',
      type: 'project',
      title: 'Computer Vision App',
      shortDescription: 'Object detection in real-time.',
      longDescription: 'Developed a real-time object detection application using TensorFlow and OpenCV. The application can identify and track multiple objects in a video stream with high precision.',
      imageUrl: findImage('project-3').imageUrl,
      imageHint: findImage('project-3').imageHint,
      link: 'https://github.com/example/project-3',
    },
    {
      id: 'cert-2',
      type: 'certificate',
      title: 'Canara Aspire Certification',
      shortDescription: 'Advanced Python Programming.',
      longDescription: 'Achieved certification in Advanced Python Programming from Canara Aspire, focusing on performance optimization, advanced data structures, and concurrent programming.',
      imageUrl: findImage('certificate-2').imageUrl,
      imageHint: findImage('certificate-2').imageHint,
    },
     {
      id: 'ach-2',
      type: 'achievement',
      title: 'Top Coder Competition',
      shortDescription: 'Ranked in top 5%.',
      longDescription: 'Consistently ranked in the top 5% in several national-level coding competitions, demonstrating strong problem-solving and algorithmic skills.',
      imageUrl: findImage('achievement-2').imageUrl,
      imageHint: findImage('achievement-2').imageHint,
    },
    {
      id: 'proj-4',
      type: 'project',
      title: 'Portfolio Website',
      shortDescription: 'This website!',
      longDescription: 'This portfolio itself is a project, built with Next.js and Tailwind CSS to be a modern, responsive, and Instagram-inspired showcase of my work and skills.',
      imageUrl: findImage('project-4').imageUrl,
      imageHint: findImage('project-4').imageHint,
      link: 'https://github.com/example/portfolio',
    },
    {
      id: 'cert-3',
      type: 'certificate',
      title: 'Udemy React Course',
      shortDescription: 'React - The Complete Guide.',
      longDescription: 'Completed an in-depth course on React, covering everything from the basics to advanced concepts like state management with Redux, Next.js for server-side rendering, and more.',
      imageUrl: findImage('certificate-3').imageUrl,
      imageHint: findImage('certificate-3').imageHint,
    },
  ],
  // To change your education details, edit the array below
  education: [
    {
      degree: 'Bachelor of Technology in AI & Machine Learning',
      institution: 'University of Technology',
      period: '2020 - 2024',
      details: 'Graduated with honors, focusing on deep learning and computer vision. CGPA: 8.5/10.'
    },
    {
      degree: 'Higher Secondary Certificate (Class 12th)',
      institution: 'City Public School',
      period: '2019 - 2020',
      details: 'Focused on Science stream with Computer Science. Score: 95%.'
    },
    {
      degree: 'Secondary School Certificate (Class 10th)',
      institution: 'City Public School',
      period: '2017 - 2018',
      details: 'Score: 98%.'
    }
  ]
};
