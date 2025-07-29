export interface ChatMessage {
  id: number;
  type: 'user' | 'bot';
  content: string;
}

export type ChatStep = 'initial' | 'specialization' | 'complete';

export interface UserInterests {
  primary?: string;
  specialization?: string;
}

export interface CourseRecommendation {
  courses: string[];
  career: string;
  steps: string[];
}

export function handleChatResponse(interest: string): { message: string } {
  const responses = {
    'web-development': "Excellent choice! Web development is in high demand. What specific area interests you most?",
    'data-science': "Data science is a growing field! What aspect excites you most?",
    'ai-ml': "AI and ML are revolutionizing technology! Which area appeals to you?",
    'cybersecurity': "Cybersecurity is crucial in today's digital world! What interests you most?"
  };

  return {
    message: responses[interest as keyof typeof responses] || "That's an interesting choice! Let me help you explore this field."
  };
}

export function handleSpecialization(primary: string, specialization: string): CourseRecommendation {
  return getCourseRecommendations(primary, specialization);
}

export function getCourseRecommendations(primary: string, specialization: string): CourseRecommendation {
  const recommendations: Record<string, Record<string, CourseRecommendation>> = {
    'web-development': {
      'frontend': {
        courses: ['HTML & CSS Fundamentals', 'JavaScript ES6+', 'React.js Complete Guide', 'CSS Grid & Flexbox'],
        career: 'Frontend Developer → Senior Frontend Developer → UI/UX Developer → Frontend Architect',
        steps: [
          'Master HTML, CSS, and JavaScript basics',
          'Learn a modern framework (React, Vue, or Angular)',
          'Build 3-5 portfolio projects',
          'Apply for junior frontend positions'
        ]
      },
      'backend': {
        courses: ['Node.js Backend Development', 'Database Design', 'API Development', 'Server Administration'],
        career: 'Backend Developer → Senior Backend Developer → DevOps Engineer → System Architect',
        steps: [
          'Learn a backend language (Node.js, Python, or Java)',
          'Understand databases and API design',
          'Practice with cloud platforms',
          'Build scalable applications'
        ]
      },
      'fullstack': {
        courses: ['Full Stack Web Development', 'MERN Stack', 'Database Management', 'DevOps Basics'],
        career: 'Full Stack Developer → Senior Full Stack Developer → Technical Lead → CTO',
        steps: [
          'Master both frontend and backend technologies',
          'Learn about system design and architecture',
          'Build complete web applications',
          'Gain experience with deployment and DevOps'
        ]
      },
      'mobile': {
        courses: ['React Native Development', 'Flutter Basics', 'Mobile UI/UX Design', 'App Store Optimization'],
        career: 'Mobile Developer → Senior Mobile Developer → Mobile Architect → Lead Developer',
        steps: [
          'Learn React Native or Flutter',
          'Understand mobile design patterns',
          'Build and publish mobile apps',
          'Learn app store guidelines and optimization'
        ]
      }
    },
    'data-science': {
      'analytics': {
        courses: ['Python for Data Science', 'Statistics & Probability', 'Data Analysis with Pandas', 'SQL for Analytics'],
        career: 'Data Analyst → Senior Data Analyst → Data Scientist → Chief Data Officer',
        steps: [
          'Learn Python and SQL fundamentals',
          'Master data visualization tools',
          'Practice with real datasets',
          'Build a portfolio of analysis projects'
        ]
      },
      'visualization': {
        courses: ['Tableau Fundamentals', 'Power BI Basics', 'D3.js for Web Visualization', 'Data Storytelling'],
        career: 'Data Visualization Specialist → Senior Analyst → BI Developer → Analytics Manager',
        steps: [
          'Master visualization tools like Tableau or Power BI',
          'Learn design principles for data presentation',
          'Practice creating interactive dashboards',
          'Develop storytelling skills with data'
        ]
      },
      'statistics': {
        courses: ['Statistical Analysis', 'R Programming', 'Experimental Design', 'Advanced Statistics'],
        career: 'Research Analyst → Senior Statistician → Data Scientist → Research Director',
        steps: [
          'Master statistical concepts and methods',
          'Learn R or Python for statistical analysis',
          'Practice with research methodologies',
          'Publish your research and findings'
        ]
      },
      'business-intelligence': {
        courses: ['Business Intelligence Fundamentals', 'Data Warehousing', 'ETL Processes', 'Business Analytics'],
        career: 'BI Analyst → Senior BI Developer → BI Architect → Analytics Director',
        steps: [
          'Learn BI tools and data warehousing concepts',
          'Understand business processes and KPIs',
          'Practice building BI solutions',
          'Develop business communication skills'
        ]
      }
    },
    'ai-ml': {
      'machine-learning': {
        courses: ['Machine Learning Fundamentals', 'Python for ML', 'Scikit-learn Complete Guide', 'Statistics for ML'],
        career: 'ML Engineer → Senior ML Engineer → AI Research Scientist → AI Director',
        steps: [
          'Learn Python and mathematics basics',
          'Understand ML algorithms and theory',
          'Practice with real-world datasets',
          'Deploy ML models to production'
        ]
      },
      'deep-learning': {
        courses: ['Deep Learning with Python', 'Neural Networks', 'TensorFlow & Keras', 'Computer Vision'],
        career: 'Deep Learning Engineer → Senior AI Engineer → Research Scientist → AI Architect',
        steps: [
          'Master deep learning frameworks',
          'Understand neural network architectures',
          'Practice with image and text data',
          'Contribute to open-source AI projects'
        ]
      },
      'nlp': {
        courses: ['Natural Language Processing', 'Text Mining', 'Transformers & BERT', 'Conversational AI'],
        career: 'NLP Engineer → Senior NLP Specialist → AI Research Scientist → Head of AI',
        steps: [
          'Learn NLP fundamentals and techniques',
          'Master transformer models and BERT',
          'Build text processing applications',
          'Stay updated with latest NLP research'
        ]
      },
      'computer-vision': {
        courses: ['Computer Vision Basics', 'OpenCV', 'Convolutional Neural Networks', 'Image Processing'],
        career: 'Computer Vision Engineer → Senior CV Specialist → AI Researcher → Computer Vision Lead',
        steps: [
          'Learn computer vision fundamentals',
          'Master OpenCV and deep learning for vision',
          'Build image recognition applications',
          'Contribute to computer vision research'
        ]
      }
    },
    'cybersecurity': {
      'ethical-hacking': {
        courses: ['Ethical Hacking Basics', 'Penetration Testing', 'Network Security', 'Cybersecurity Fundamentals'],
        career: 'Security Analyst → Penetration Tester → Security Consultant → CISO',
        steps: [
          'Learn networking and system fundamentals',
          'Practice with ethical hacking tools',
          'Obtain security certifications',
          'Gain hands-on experience with security assessments'
        ]
      },
      'network-security': {
        courses: ['Network Security Fundamentals', 'Firewall Configuration', 'Intrusion Detection', 'Security Monitoring'],
        career: 'Network Security Analyst → Senior Security Engineer → Security Architect → Security Director',
        steps: [
          'Master networking protocols and security',
          'Learn security tools and technologies',
          'Practice network security configuration',
          'Obtain industry certifications like CISSP'
        ]
      },
      'incident-response': {
        courses: ['Incident Response Planning', 'Digital Forensics', 'Malware Analysis', 'Crisis Management'],
        career: 'Incident Response Analyst → Senior IR Specialist → IR Manager → Security Operations Director',
        steps: [
          'Learn incident response methodologies',
          'Master digital forensics tools',
          'Practice with simulated security incidents',
          'Develop crisis communication skills'
        ]
      },
      'compliance': {
        courses: ['Security Compliance', 'Risk Assessment', 'Audit Procedures', 'Regulatory Frameworks'],
        career: 'Compliance Analyst → Senior Compliance Officer → Risk Manager → Chief Compliance Officer',
        steps: [
          'Learn regulatory frameworks (SOX, HIPAA, GDPR)',
          'Master risk assessment methodologies',
          'Practice audit procedures',
          'Develop policy and procedure documentation'
        ]
      }
    }
  };

  return recommendations[primary]?.[specialization] || {
    courses: ['General Programming', 'Computer Science Fundamentals', 'Problem Solving'],
    career: 'Entry Level → Mid Level → Senior Level → Leadership',
    steps: ['Learn the basics', 'Practice regularly', 'Build projects', 'Apply for positions']
  };
}
