
import type { LucideIcon } from 'lucide-react';
import { BrainCircuit, GraduationCap, Code, GitMerge, Film, Gamepad2, Share2, Layers, Cpu, Network, TestTube, Briefcase } from 'lucide-react';
import { PythonIcon, TensorFlowIcon, PyTorchIcon, NextjsIcon, VscodeIcon } from '@/components/icons';
import imageData from './placeholder-images.json';

const images = imageData.placeholderImages;

const findImage = (id: string) => images.find(img => img.id === id) || images[0];

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

export interface HighlightItem {
  icon: React.ElementType;
  text: string;
  description: string;
}

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

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

interface PortfolioData {
  profile: ProfileData;
  highlights: HighlightItem[];
  posts: Post[];
  education: EducationItem[];
}

export const portfolioData: PortfolioData = {
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
      resume: '/resume.pdf',
    },
  },
  highlights: [
    { icon: BrainCircuit, text: 'Machine Learning', description: 'Experience with supervised, unsupervised, and reinforcement learning models.' },
    { icon: PythonIcon, text: 'Python', description: 'Proficient in Python for data science, web development, and automation.' },
    { icon: TensorFlowIcon, text: 'TensorFlow', description: 'Building and training deep learning models with TensorFlow and Keras.' },
    { icon: PyTorchIcon, text: 'PyTorch', description: 'Skilled in using PyTorch for flexible and dynamic neural network development.' },
    { icon: NextjsIcon, text: 'Next.js', description: 'Creating server-rendered React applications with Next.js for performance.' },
    { icon: GraduationCap, text: 'B.Tech AI/ML', description: 'Bachelor of Technology in Artificial Intelligence and Machine Learning.' },
    { icon: VscodeIcon, text: 'VS Code', description: 'My code editor of choice for its power and extensibility.' },
    { icon: GitMerge, text: 'Git', description: 'Using Git for version control in both personal and collaborative projects.' },
    { icon: TestTube, text: 'Colab', description: 'Leveraging Google Colab for training models and collaborative research.' },
    { icon: Film, text: 'Video Editing', description: 'Passionate about storytelling through video editing and visual effects.' },
    { icon: Gamepad2, text: 'Gaming', description: 'I enjoy strategy games and exploring immersive virtual worlds.' },
  ],
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
  education: [
    {
      degree: 'Bachelor of Technology in AI & Machine Learning',
      institution: 'University of Technology',
      period: '2020 - 2024',
      details: 'Graduated with honors, focusing on deep learning and computer vision.'
    },
    {
      degree: 'Higher Secondary Certificate (Class 12th)',
      institution: 'City Public School',
      period: '2019 - 2020',
      details: 'Focused on Science stream with Computer Science.'
    },
    {
      degree: 'Secondary School Certificate (Class 10th)',
      institution: 'City Public School',
      period: '2017 - 2018',
    }
  ]
};
