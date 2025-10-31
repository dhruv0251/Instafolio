
import type { LucideIcon } from 'lucide-react';
import { BrainCircuit, GraduationCap, Code, GitMerge, Film, Gamepad2, Share2, Layers, Cpu, Network, TestTube, Briefcase } from 'lucide-react';
import { PythonIcon, TensorFlowIcon, PyTorchIcon, NextjsIcon, VscodeIcon, CppIcon, DataScienceIcon, NlpIcon } from '@/components/icons';
import imageData from './placeholder-images.json';

const images = imageData.placeholderImages;

const findImage = (id: string) => images.find(img => img.id === id) || images[0];

// INTERFACE DEFINITIONS
/**
 * @fileoverview This file contains all the data for your portfolio.
 * You can edit your personal information, skills, projects, and education here.
 * The images are managed in `src/lib/placeholder-images.json`.
 */

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
  type: 'project' | 'certificate' | 'achievement' | 'experience';
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
      github: 'https://github.com/dhruv0251',
      linkedin: 'https://www.linkedin.com/in/dhruv-gola-654242316/',
      email: 'mailto:dhruv.0570.gola@gmail.com',
      phone: 'tel:+919873079928',
      // IMPORTANT: Replace this with the public link to your resume
      resume: 'https://drive.google.com/file/d/1evGZRdqAyDnXcwVPMKSakJrc8JLMeO4M/view?usp=sharing',
    },
  },
  // To change your skills, edit the array below. 
  // You can add or remove skills, change icons, text and descriptions.
  highlights: [
    { icon: BrainCircuit, text: 'Machine Learning', description: 'Extensive experience with supervised, unsupervised, and reinforcement learning models. Skilled in building and deploying predictive models.' },
    { icon: Network, text: 'Deep Learning', description: 'Specialized in Deep Learning architectures including:\n- Convolutional Neural Networks (CNNs) for image recognition.\n- Recurrent Neural Networks (RNNs) for sequence data.\n- Large Language Models (LLMs) and Generative AI (Gen AI) for advanced NLP tasks.' },
    { icon: PythonIcon, text: 'Python', description: 'Highly proficient in Python for data science, web development (Flask, Django), and creating automation scripts.' },
    { icon: DataScienceIcon, text: 'Data Science Libraries', description: 'Proficient with essential data science libraries including: \n- NumPy for numerical computation.\n- Pandas for data manipulation and analysis.\n- Scikit-learn for classical machine learning algorithms.\n- Keras for high-level deep learning models.' },
    { icon: TensorFlowIcon, text: 'TensorFlow', description: 'Expertise in building, training, and optimizing deep learning models for various applications using TensorFlow and Keras.' },
    { icon: PyTorchIcon, text: 'PyTorch', description: 'Adept at using PyTorch for its flexibility and dynamic computational graph, ideal for research and complex neural network architectures.' },
    { icon: NlpIcon, text: 'NLP', description: 'Experience in Natural Language Processing (NLP) techniques for tasks like sentiment analysis, text classification, and named entity recognition using libraries like Hugging Face and NLTK.' },
    { icon: CppIcon, text: 'C++', description: 'Solid understanding of C++ for performance-critical applications and competitive programming. Familiar with data structures, algorithms, and object-oriented principles.'},
    { icon: NextjsIcon, text: 'Next.js', description: 'Building high-performance, server-rendered React applications with Next.js, focusing on SEO and user experience.' },
    { icon: GitMerge, text: 'Git', description: 'Proficient with Git for version control, including branching, merging, and collaborating in team environments.' },
    { icon: Gamepad2, text: 'Gaming', description: 'An avid gamer who enjoys competitive strategy games and exploring immersive open-world RPGs.' },
  ],
  // To change your projects, certificates, or achievements, edit the array below.
  posts: [
    {
      id: 'exp-1',
      type: 'experience',
      title: 'Python Programming Intern',
      shortDescription: '@ Extion Infotech [june 2024 - August 2024]',
      longDescription: 'Through rigorous training in a Python programming course, I mastered core concepts including object-oriented programming, fundamental data structures, and essential algorithmic thinking. This foundational knowledge enabled me to develop and thoroughly debug a significant portfolio project, showcasing practical proficiency with a key Python library. I also gained experience integrating external APIs to effectively fetch and process real-time data within applications, and achieved an advanced understanding of version control by utilizing Git/GitHub to manage project iterations and collaborate effectively.',
      imageUrl: findImage('experience-1').imageUrl,
      imageHint: findImage('experience-1').imageHint,
      link: 'https://www.extioninfotech.com/',
    },
    {
      id: 'proj-1',
      type: 'project',
      title: 'MeetMid',
      shortDescription: 'Intelligent Midpoint-Based Meet-up Suggestion System',
      longDescription: 'MeetMid is a web application that suggests a fair meeting point between two users. It uses the A* pathfinding algorithm to calculate an optimized midpoint based on real travel distance rather than simple geometric averaging. To improve accuracy, it also applies NLP-based sentiment analysis on place reviews to generate a sentiment score, ensuring that only genuinely well-reviewed locations are recommended. The system is built using Next.js and Google Maps APIs for geolocation, distance calculation, and place discovery.',
      imageUrl: findImage('project-1').imageUrl,
      imageHint: findImage('project-1').imageHint,
      link: 'https://meet-mid.vercel.app/',
    },
    {
      id: 'proj-2',
      type: 'project',
      title: 'Candilyzer',
      shortDescription: 'AI Powered Candidate Analyzer',
      longDescription: 'Candilyzer is an AI-powered candidate analysis platform that evaluates developers based on their GitHub and LinkedIn profiles, delivering objective, expert-level hiring insights. Built with Streamlit, Nebius AI, and the Agno Agent Framework, it acts like a strict technical recruiter analyzing repositories, commits, and professional backgrounds to generate data-backed reports with detailed reasoning and a final verdict. By combining tools like GitHubTools, ExaTools, and ReasoningTools, Candilyzer ensures fair, bias-free assessments that measure true coding skill, activity, and job fit. It supports both single and multi-candidate analysis, helping recruiters, startups, and hiring teams instantly identify top talent through intelligent automation and professional-grade AI evaluation.',
      imageUrl: findImage('project-2').imageUrl,
      imageHint: findImage('project-2').imageHint,
      link: 'https://github.com/dhruv0251/Candilyzer',
    },
    {
      id: 'cert-1',
      type: 'certificate',
      title: 'Generative AI: Fundamentals, Applications, and Challenges- University of Michigan',
      shortDescription: 'Certified in “Generative AI: Fundamentals, Applications, and Challenges” by University of Michigan, covering core concepts, real-world use cases, and responsible AI practices.',
      longDescription: 'The course provided in-depth knowledge of how large language models and generative systems operate, covering topics such as transformers, diffusion models, prompt engineering, and real-world applications across text, image, and audio generation. It also explored key limitations of AI, including bias, misinformation risks, and responsible AI deployment frameworks. This certification strengthened my ability to both build with and critically evaluate modern AI systems.',
      imageUrl: findImage('certificate-1').imageUrl,
      imageHint: findImage('certificate-1').imageHint,
      link: 'https://www.coursera.org/account/accomplishments/verify/PSJDB96XI42G',
    },
    {
      id: 'proj-3',
      type: 'project',
      title: 'Instafolio',
      shortDescription: 'This Portfolio Website',
      longDescription: 'AI/ML Engineer Portfolio Application: Developed and deployed a dynamic personal portfolio web application using Streamlit, designed to provide a comprehensive, interactive view of my technical capabilities. This platform seamlessly integrates data from GitHub and LinkedIn, allowing for the streamlined presentation of AI/ML projects, technical skills (including Python, TensorFlow, PyTorch, and NLP), and professional experience. By consolidating my digital footprint into an intuitive interface, this application effectively demonstrates my proficiency in web development, data aggregation, and my core expertise as an AI/ML Engineer, offering a superior and objective overview of my qualifications.',
      imageUrl: findImage('project-3').imageUrl,
      imageHint: findImage('project-3').imageHint,
      link: 'https://dhruvgola.vercel.app',
    },
    {
      id: 'cert-2',
      type: 'certificate',
      title: 'Product Management- Self Paced- Coursera',
      shortDescription: 'Roadmap planning, user research, and feature prioritization.',
      longDescription: 'Completed the Product Management – Self Paced program on Coursera, gaining a structured understanding of the full product lifecycle from identifying user needs and conducting market research to defining MVPs, prioritizing features, and managing stakeholder communication. The course also focused on metrics-driven decision-making and agile execution, helping me build a product mindset that balances user value with business goals.',
      imageUrl: findImage('certificate-2').imageUrl,
      imageHint: findImage('certificate-2').imageHint,
      link: 'https://media.geeksforgeeks.org/courses/certificates/3271becbdabefb3501b3e3a36268f2e3.pdf',

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
      title: 'Oracle Could Infrastructure 2025 Certified AI Foundations Associate',
      shortDescription: 'Learnt the foundational concepts of AI and ML',
      longDescription: 'Explore Machine Learning and Deep Learning Fundamentals: Dive into the basics of machine learning with an emphasis on supervised and unsupervised learning techniques. Gain insights into deep learning, exploring convolutional and sequence models like CNNs and RNNs and LSTMs.Get Started with OCIs AI Tools: Familiarize myself with OCI comprehensive AI tools portfolio.',
      imageUrl: findImage('certificate-3').imageUrl,
      imageHint: findImage('certificate-3').imageHint,
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9E9B922FDCCE855CB8F125989ADEAB37A198F70CD0AA8447313F66990E313B8B',
    },
  ],
  // To change your education details, edit the array below
  education: [
    {
      degree: 'Bachelor of Technology in AI & Machine Learning',
      institution: 'Vivekananda Institute of Professional Studies Technical Campus - Pitampura',
      period: '2022 - 2026',
    },
    {
      degree: 'Higher Secondary Certificate (Class 12th)',
      institution: 'Vidya Jain Public school - Rohini',
      period: '2020 - 2022',
    },
    {
      degree: 'Secondary School Certificate (Class 10th)',
      institution: 'Vidya Jain Public school - Rohini',
      period: '2008 - 2020',
    }
  ]
};
