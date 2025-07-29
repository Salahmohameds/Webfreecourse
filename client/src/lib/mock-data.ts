export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  platform: string;
  category: "web-dev" | "ai-ml" | "cybersecurity" | "data-science";
  image: string;
  progress: number;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  logo: string;
  location: string;
  workType: "Remote" | "Hybrid" | "On-site";
  roles: string[];
  levels: string[];
  posted: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Full Stack Web Development",
    description: "Learn HTML, CSS, JavaScript, and Node.js to build complete web applications from scratch.",
    level: "Beginner",
    duration: "40 hours",
    platform: "freeCodeCamp",
    category: "web-dev",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    progress: 0
  },
  {
    id: "2",
    title: "React.js Frontend Development",
    description: "Master React.js, hooks, and state management to build modern, interactive user interfaces.",
    level: "Intermediate",
    duration: "25 hours",
    platform: "Coursera",
    category: "web-dev",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    progress: 35
  },
  {
    id: "3",
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps using React Native and Flutter frameworks.",
    level: "Advanced",
    duration: "60 hours",
    platform: "Udacity",
    category: "web-dev",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    progress: 0
  },
  {
    id: "4",
    title: "Machine Learning Fundamentals",
    description: "Introduction to ML algorithms, data preprocessing, and model evaluation techniques.",
    level: "Beginner",
    duration: "35 hours",
    platform: "edX",
    category: "ai-ml",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    progress: 0
  },
  {
    id: "5",
    title: "Deep Learning with Python",
    description: "Build neural networks using TensorFlow and Keras for computer vision and NLP.",
    level: "Intermediate",
    duration: "50 hours",
    platform: "Fast.ai",
    category: "ai-ml",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    progress: 20
  },
  {
    id: "6",
    title: "Ethical Hacking Basics",
    description: "Learn penetration testing fundamentals and security assessment techniques.",
    level: "Beginner",
    duration: "30 hours",
    platform: "Cybrary",
    category: "cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    progress: 0
  },
  {
    id: "7",
    title: "Data Science with Python",
    description: "Complete data science workflow from data collection to visualization and modeling.",
    level: "Intermediate",
    duration: "45 hours",
    platform: "Kaggle Learn",
    category: "data-science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    progress: 0
  },
  {
    id: "8",
    title: "Advanced Cybersecurity",
    description: "Advanced topics in network security, incident response, and threat analysis.",
    level: "Advanced",
    duration: "55 hours",
    platform: "SANS",
    category: "cybersecurity",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
    progress: 0
  }
];

export const companies: Company[] = [
  {
    id: "1",
    name: "Google",
    industry: "Technology",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    location: "Mountain View, CA",
    workType: "Remote",
    roles: ["Software Engineer", "Product Manager", "Data Scientist"],
    levels: ["Entry Level", "Junior"],
    posted: "2 days ago"
  },
  {
    id: "2",
    name: "Microsoft",
    industry: "Technology",
    logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    location: "Seattle, WA",
    workType: "Hybrid",
    roles: ["Cloud Engineer", "Security Analyst"],
    levels: ["Internship", "Entry Level"],
    posted: "1 week ago"
  },
  {
    id: "3",
    name: "Amazon",
    industry: "E-commerce & Cloud",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    location: "Austin, TX",
    workType: "On-site",
    roles: ["DevOps Engineer", "Backend Developer", "ML Engineer"],
    levels: ["Junior", "Mid-level"],
    posted: "3 days ago"
  },
  {
    id: "4",
    name: "Netflix",
    industry: "Entertainment Technology",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    location: "Los Gatos, CA",
    workType: "Remote",
    roles: ["Frontend Developer", "Data Engineer"],
    levels: ["Entry Level", "Junior"],
    posted: "5 days ago"
  },
  {
    id: "5",
    name: "Meta",
    industry: "Social Media Technology",
    logo: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    location: "Menlo Park, CA",
    workType: "Hybrid",
    roles: ["Software Engineer", "AI Researcher", "Product Designer"],
    levels: ["Internship", "Entry Level", "Junior"],
    posted: "1 day ago"
  }
];
