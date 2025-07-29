export interface Translation {
  nav: {
    home: string;
    courses: string;
    companies: string;
    about: string;
    contact: string;
    darkMode: string;
    language: string;
  };
  home: {
    title: string;
    subtitle: string;
    description: string;
    getStarted: string;
    learnMore: string;
    stats: {
      courses: string;
      students: string;
      companies: string;
    };
    features: {
      courses: {
        title: string;
        description: string;
      };
      companies: {
        title: string;
        description: string;
      };
      chatbot: {
        title: string;
        description: string;
      };
    };
  };
  courses: {
    title: string;
    subtitle: string;
    search: string;
    filter: {
      all: string;
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    level: string;
    duration: string;
    startCourse: string;
    continue: string;
    courseInfo: string;
  };
  companies: {
    title: string;
    subtitle: string;
    search: string;
    filter: {
      all: string;
      remote: string;
      onsite: string;
      hybrid: string;
    };
    table: {
      company: string;
      roles: string;
      location: string;
      type: string;
      posted: string;
      actions: string;
    };
    apply: string;
    info: string;
  };
  about: {
    title: string;
    subtitle: string;
    mission: string;
    faq: {
      title: string;
      q1: {
        question: string;
        answer: string;
      };
      q2: {
        question: string;
        answer: string;
      };
      q3: {
        question: string;
        answer: string;
      };
    };
    fields: {
      title: string;
      web: string;
      mobile: string;
      ai: string;
      data: string;
      security: string;
      devops: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      type: string;
      general: string;
      course: string;
      career: string;
      technical: string;
      send: string;
    };
  };
  chatbot: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    thinking: string;
    restart: string;
    questions: {
      career: string;
      courses: string;
      skills: string;
      jobs: string;
    };
  };
  footer: {
    rights: string;
    madeBy: string;
  };
  common: {
    loading: string;
    error: string;
    retry: string;
    close: string;
    back: string;
    next: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      courses: "Courses",
      companies: "Companies",
      about: "About",
      contact: "Contact",
      darkMode: "Dark Mode",
      language: "Language"
    },
    home: {
      title: "Tech Path Finder",
      subtitle: "Your Gateway to Tech Success",
      description: "Discover free courses, track hiring companies, and get AI-powered career guidance for Computer Science and Computer Engineering students.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      stats: {
        courses: "Free Courses",
        students: "Active Students",
        companies: "Partner Companies"
      },
      features: {
        courses: {
          title: "Free Courses",
          description: "Access hundreds of free courses from top universities and platforms"
        },
        companies: {
          title: "Job Opportunities",
          description: "Track the latest job openings from leading tech companies"
        },
        chatbot: {
          title: "AI Career Guide",
          description: "Get personalized career advice from our intelligent chatbot"
        }
      }
    },
    courses: {
      title: "Free Courses",
      subtitle: "Discover high-quality courses to advance your tech career",
      search: "Search courses...",
      filter: {
        all: "All Levels",
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced"
      },
      level: "Level",
      duration: "Duration",
      startCourse: "Start Course",
      continue: "Continue",
      courseInfo: "Course Info"
    },
    companies: {
      title: "Tech Companies Hiring",
      subtitle: "Track the latest opportunities from top tech companies across the globe",
      search: "Search companies...",
      filter: {
        all: "All Types",
        remote: "Remote",
        onsite: "On-site",
        hybrid: "Hybrid"
      },
      table: {
        company: "Company",
        roles: "Open Roles",
        location: "Location",
        type: "Work Type",
        posted: "Posted",
        actions: "Actions"
      },
      apply: "Apply",
      info: "Info"
    },
    about: {
      title: "About Tech Path Finder",
      subtitle: "Empowering the next generation of tech professionals",
      mission: "Our mission is to bridge the gap between academic learning and industry requirements by providing free resources, real-time job tracking, and personalized career guidance.",
      faq: {
        title: "Frequently Asked Questions",
        q1: {
          question: "Are all courses really free?",
          answer: "Yes! We curate courses from platforms like Coursera, edX, and Khan Academy that offer free access to their content."
        },
        q2: {
          question: "How often is job data updated?",
          answer: "Our job database is updated daily to ensure you have access to the latest opportunities."
        },
        q3: {
          question: "Can I get personalized career advice?",
          answer: "Absolutely! Our AI-powered chatbot provides personalized guidance based on your interests and career goals."
        }
      },
      fields: {
        title: "Tech Fields We Cover",
        web: "Web Development",
        mobile: "Mobile Development",
        ai: "Artificial Intelligence",
        data: "Data Science",
        security: "Cybersecurity",
        devops: "DevOps & Cloud"
      }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have questions or feedback? We'd love to hear from you!",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        type: "Inquiry Type",
        general: "General Inquiry",
        course: "Course Question",
        career: "Career Guidance",
        technical: "Technical Support",
        send: "Send Message"
      }
    },
    chatbot: {
      title: "AI Career Assistant",
      subtitle: "Get personalized guidance for your tech career",
      placeholder: "Ask me about your career path...",
      send: "Send",
      thinking: "Thinking...",
      restart: "Start New Conversation",
      questions: {
        career: "What career path should I choose?",
        courses: "Which courses should I take?",
        skills: "What skills are in demand?",
        jobs: "How do I find tech jobs?"
      }
    },
    footer: {
      rights: "© 2025 Tech Path Finder. All rights reserved.",
      madeBy: "Made with ❤️ Salah Mohamed for aspiring developers"
    },
    common: {
      loading: "Loading...",
      error: "Something went wrong",
      retry: "Try Again",
      close: "Close",
      back: "Back",
      next: "Next"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      courses: "الكورسات",
      companies: "الشركات",
      about: "حولنا",
      contact: "تواصل معنا",
      darkMode: "الوضع المظلم",
      language: "اللغة"
    },
    home: {
      title: "منصة التقنية المهنية",
      subtitle: "بوابتك لنجاح التقنية",
      description: "اكتشف كورسات مجانية، تتبع الشركات المُوظِفة، واحصل على إرشاد مهني مدعوم بالذكاء الاصطناعي لطلاب علوم الحاسوب وهندسة الحاسوب.",
      getStarted: "ابدأ الآن",
      learnMore: "اعرف أكثر",
      stats: {
        courses: "كورسات مجانية",
        students: "طلاب نشطون",
        companies: "شركات شريكة"
      },
      features: {
        courses: {
          title: "كورسات مجانية",
          description: "الوصول لمئات الكورسات المجانية من أفضل الجامعات والمنصات"
        },
        companies: {
          title: "فرص عمل",
          description: "تتبع أحدث الوظائف الشاغرة من الشركات التقنية الرائدة"
        },
        chatbot: {
          title: "مرشد مهني ذكي",
          description: "احصل على نصائح مهنية شخصية من روبوت الدردشة الذكي"
        }
      }
    },
    courses: {
      title: "كورسات مجانية",
      subtitle: "اكتشف كورسات عالية الجودة لتطوير مسيرتك التقنية",
      search: "ابحث عن الكورسات...",
      filter: {
        all: "جميع المستويات",
        beginner: "مبتدئ",
        intermediate: "متوسط",
        advanced: "متقدم"
      },
      level: "المستوى",
      duration: "المدة",
      startCourse: "ابدأ الكورس",
      continue: "تابع",
      courseInfo: "معلومات الكورس"
    },
    companies: {
      title: "شركات التقنية التي توظف",
      subtitle: "تتبع أحدث الفرص من أفضل شركات التقنية حول العالم",
      search: "ابحث عن الشركات...",
      filter: {
        all: "جميع الأنواع",
        remote: "عن بُعد",
        onsite: "في الموقع",
        hybrid: "مختلط"
      },
      table: {
        company: "الشركة",
        roles: "الوظائف المفتوحة",
        location: "الموقع",
        type: "نوع العمل",
        posted: "تاريخ النشر",
        actions: "الإجراءات"
      },
      apply: "تقدم",
      info: "معلومات"
    },
    about: {
      title: "حول منصة التقنية المهنية",
      subtitle: "تمكين الجيل القادم من المتخصصين في التقنية",
      mission: "مهمتنا هي سد الفجوة بين التعلم الأكاديمي ومتطلبات الصناعة من خلال توفير موارد مجانية، وتتبع الوظائف في الوقت الفعلي، والإرشاد المهني الشخصي.",
      faq: {
        title: "الأسئلة الشائعة",
        q1: {
          question: "هل جميع الكورسات مجانية حقاً؟",
          answer: "نعم! نحن نجمع كورسات من منصات مثل Coursera و edX و Khan Academy التي تقدم محتوى مجاني."
        },
        q2: {
          question: "كم مرة يتم تحديث بيانات الوظائف؟",
          answer: "قاعدة بيانات الوظائف لدينا يتم تحديثها يومياً لضمان وصولك لأحدث الفرص."
        },
        q3: {
          question: "هل يمكنني الحصول على نصائح مهنية شخصية؟",
          answer: "بالتأكيد! روبوت الدردشة المدعوم بالذكاء الاصطناعي يقدم إرشاداً شخصياً بناءً على اهتماماتك وأهدافك المهنية."
        }
      },
      fields: {
        title: "المجالات التقنية التي نغطيها",
        web: "تطوير الويب",
        mobile: "تطوير التطبيقات",
        ai: "الذكاء الاصطناعي",
        data: "علم البيانات",
        security: "الأمن السيبراني",
        devops: "DevOps والحوسبة السحابية"
      }
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "لديك أسئلة أو تعليقات؟ نحب أن نسمع منك!",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        type: "نوع الاستفسار",
        general: "استفسار عام",
        course: "سؤال عن كورس",
        career: "إرشاد مهني",
        technical: "دعم فني",
        send: "إرسال الرسالة"
      }
    },
    chatbot: {
      title: "المساعد المهني الذكي",
      subtitle: "احصل على إرشاد شخصي لمسيرتك التقنية",
      placeholder: "اسألني عن مسارك المهني...",
      send: "إرسال",
      thinking: "أفكر...",
      restart: "بدء محادثة جديدة",
      questions: {
        career: "ما المسار المهني الذي يجب أن أختاره؟",
        courses: "ما الكورسات التي يجب أن آخذها؟",
        skills: "ما المهارات المطلوبة في السوق؟",
        jobs: "كيف أجد وظائف في التقنية؟"
      }
    },
    footer: {
      rights: "© 2025 منصة التقنية المهنية. جميع الحقوق محفوظة.",
      madeBy: "صُنع بـ ❤️ صلاح محمد للمطورين الطموحين"
    },
    common: {
      loading: "جارٍ التحميل...",
      error: "حدث خطأ ما",
      retry: "حاول مرة أخرى",
      close: "إغلاق",
      back: "رجوع",
      next: "التالي"
    }
  }
};

export type Language = keyof typeof translations;