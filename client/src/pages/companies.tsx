import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { 
  SpinnerBorder,
  ButtonGroup,
  InfoAlert,
  SuccessAlert
} from "@/components/bootstrap-components";
import Breadcrumb from "@/components/breadcrumb";
import { 
  Search, 
  MapPin, 
  Calendar, 
  DollarSign,
  ExternalLink,
  Building,
  Users,
  Briefcase,
  Clock,
  Globe,
  Home,
  Laptop,
  Star,
  TrendingUp,
  Filter
} from "lucide-react";

export default function CompaniesPage() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const breadcrumbItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.companies, href: "/companies" }
  ];

  const workTypes = [
    { value: "all", label: isRTL ? "جميع الأنواع" : "All Types", icon: <Filter className="h-4 w-4" /> },
    { value: "remote", label: isRTL ? "عن بُعد" : "Remote", icon: <Home className="h-4 w-4" /> },
    { value: "onsite", label: isRTL ? "في المكتب" : "On-site", icon: <Building className="h-4 w-4" /> },
    { value: "hybrid", label: isRTL ? "مختلط" : "Hybrid", icon: <Laptop className="h-4 w-4" /> }
  ];

  const companies = [
    {
      id: "1",
      name: "Advansys",
      logo: "🏢",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.5,
      employees: "100+",
      industry: "Consulting Services, Software House",
      description: "Leading technology consulting and software development company",
      linkedin: "https://www.linkedin.com/company/advansys-esc/",
      careers: ""
    },
    {
      id: "2",
      name: "Al Ahly Momkn",
      logo: "🏦",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "200+",
      industry: "Finance / Banking",
      description: "Digital payment and financial services company",
      linkedin: "https://www.linkedin.com/company/alahlymomknfore-payments/",
      careers: "https://alahlymomkn.zohorecruit.com/jobs/Careers"
    },
    {
      id: "3",
      name: "Algoriza",
      logo: "💻",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "50+",
      industry: "Consulting Services, Software House",
      description: "Software development and consulting services",
      linkedin: "https://www.linkedin.com/company/algoriza/",
      careers: ""
    },
    {
      id: "4",
      name: "AMAN Holding",
      logo: "🏛️",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Science",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "500+",
      industry: "Finance / Banking",
      description: "Financial services and investment holding company",
      linkedin: "https://www.linkedin.com/company/aman-holding-for-financials/",
      careers: ""
    },
    {
      id: "5",
      name: "Aramex",
      logo: "📦",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "1000+",
      industry: "Transportation",
      description: "Global logistics and transportation company",
      linkedin: "https://www.linkedin.com/company/aramex/",
      careers: "https://www.aramex.com/eg/ar/join-the-aramex-family"
    },
    {
      id: "6",
      name: "Atos",
      logo: "🌐",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Science",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.0,
      employees: "2000+",
      industry: "Consulting Services, Software House",
      description: "Global digital transformation and IT services",
      linkedin: "https://www.linkedin.com/company/atos/",
      careers: "https://atos.net/advancing-what-matters/en/join-us"
    },
    {
      id: "7",
      name: "b_labs",
      logo: "🔬",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Science",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.6,
      employees: "100+",
      industry: "Software House",
      description: "Innovative software development and technology solutions",
      linkedin: "https://www.linkedin.com/company/wearablabs/posts/?feedView=all",
      careers: ""
    },
    {
      id: "8",
      name: "BARQ Systems",
      logo: "🛡️",
      location: "Egypt, KSA, UAE",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "150+",
      industry: "Consulting Services, Cyber Security services, Software House",
      description: "Cybersecurity and software development solutions",
      linkedin: "https://www.linkedin.com/company/barqsystems/",
      careers: ""
    },
    {
      id: "9",
      name: "BBI",
      logo: "🤖",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Science",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "80+",
      industry: "Consulting Services, Software House",
      description: "AI and data analytics consulting services",
      linkedin: "https://www.linkedin.com/company/bbiai/",
      careers: ""
    },
    {
      id: "10",
      name: "Beinex",
      logo: "📊",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "120+",
      industry: "Consulting Services, Software House",
      description: "Data analytics and consulting services",
      linkedin: "https://www.linkedin.com/company/beinex-consulting/",
      careers: "https://www.beinex.com/careers"
    },
    {
      id: "11",
      name: "BI-Technologies",
      logo: "💻",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "80+",
      industry: "Software House",
      description: "Software development and technology solutions",
      linkedin: "https://www.linkedin.com/company/bi-technologiesnet/",
      careers: "https://www.bi-technologies.net/index.php/pages/pages_details/5"
    },
    {
      id: "12",
      name: "Bizimply",
      logo: "🏢",
      location: "Remote",
      type: "remote",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "EURO",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Testing",
          department: "Quality Assurance",
          salary: "EURO",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "50+",
      industry: "HR Management",
      description: "HR management and workforce solutions",
      linkedin: "https://www.linkedin.com/company/bizimply/",
      careers: "https://www.bizimply.com/jobs/"
    },
    {
      id: "13",
      name: "BMB",
      logo: "🛡️",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "100+",
      industry: "Consulting Services, Cyber Security services, Software House",
      description: "Cybersecurity and consulting services",
      linkedin: "https://www.linkedin.com/company/bmb/",
      careers: "https://bmbgroup.com/jobs/"
    },
    {
      id: "14",
      name: "Bosta",
      logo: "🚚",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.5,
      employees: "200+",
      industry: "E-commerce, Software House",
      description: "E-commerce and logistics solutions",
      linkedin: "https://www.linkedin.com/company/bostaapp/",
      careers: "https://jobs.lever.co/Bosta"
    },
    {
      id: "15",
      name: "Breadfast",
      logo: "🥖",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "150+",
      industry: "E-commerce",
      description: "Food delivery and e-commerce platform",
      linkedin: "https://www.linkedin.com/company/breadfast/",
      careers: "https://www.breadfast.com/careers/"
    },
    {
      id: "16",
      name: "Buguard",
      logo: "🛡️",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "80+",
      industry: "Cyber Security services",
      description: "Cybersecurity and digital protection services",
      linkedin: "https://www.linkedin.com/company/buguard/",
      careers: ""
    },
    {
      id: "17",
      name: "Careem",
      logo: "🚗",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.6,
      employees: "500+",
      industry: "Transportation",
      description: "Ride-hailing and transportation services",
      linkedin: "https://www.linkedin.com/company/careem/about/",
      careers: "https://www.careem.com/en-AE/careers"
    },
    {
      id: "18",
      name: "Cartona",
      logo: "🛒",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "100+",
      industry: "E-commerce",
      description: "E-commerce and retail technology platform",
      linkedin: "https://www.linkedin.com/company/cartona-egypt/",
      careers: ""
    },
    {
      id: "19",
      name: "Cashcall",
      logo: "💰",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "150+",
      industry: "Finance / Banking",
      description: "Digital payment and financial services",
      linkedin: "https://www.linkedin.com/company/cashcallegypt/",
      careers: ""
    },
    {
      id: "20",
      name: "Cegedim Egypt",
      logo: "🏥",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.0,
      employees: "200+",
      industry: "Software House",
      description: "Healthcare software and technology solutions",
      linkedin: "https://www.linkedin.com/company/cegedim-egypt/",
      careers: "https://careers.cegedim.com/en/annonces"
    },
    {
      id: "21",
      name: "Chefaa",
      logo: "💊",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Science",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "120+",
      industry: "Healthcare / Medical, Supply Chain",
      description: "Healthcare and pharmaceutical delivery platform",
      linkedin: "https://www.linkedin.com/company/getchefaa/",
      careers: ""
    },
    {
      id: "22",
      name: "Cybertalents",
      logo: "🔒",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "80+",
      industry: "Cyber Security services, Staffing and Recruiting",
      description: "Cybersecurity training and talent platform",
      linkedin: "https://www.linkedin.com/company/cybertalent/",
      careers: "https://cybertalents.com/jobs/browse"
    },
    {
      id: "23",
      name: "Cyshield",
      logo: "🛡️",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.5,
      employees: "150+",
      industry: "Cyber Security services, Software House",
      description: "Comprehensive cybersecurity and software solutions",
      linkedin: "https://www.linkedin.com/company/cyshield/",
      careers: "https://careers.cyshield.com/"
    },
    {
      id: "24",
      name: "Datain",
      logo: "📊",
      location: "Egypt, KSA",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Engineering",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "100+",
      industry: "Consulting Services, Data Infrastructure and Analytics",
      description: "Data infrastructure and analytics consulting",
      linkedin: "https://www.linkedin.com/company/datainsa/",
      careers: "https://datain.sa/#offerings"
    },
    {
      id: "25",
      name: "Dataplus",
      logo: "📈",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Engineering",
          department: "Data",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "80+",
      industry: "Consulting Services, Data Infrastructure and Analytics",
      description: "Data analytics and consulting services",
      linkedin: "",
      careers: ""
    },
    {
      id: "26",
      name: "Dayra",
      logo: "🏦",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.0,
      employees: "100+",
      industry: "Finance / Banking",
      description: "Digital banking and financial services",
      linkedin: "",
      careers: ""
    },
    {
      id: "27",
      name: "Dsquares",
      logo: "🎯",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "200+",
      industry: "Software House",
      description: "Loyalty and customer engagement platform",
      linkedin: "https://www.linkedin.com/company/dsquares/",
      careers: "https://www.dsquares.com/careers"
    },
    {
      id: "28",
      name: "DXC Technology",
      logo: "🌐",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "1000+",
      industry: "Consulting Services, Software House",
      description: "Global IT services and digital transformation",
      linkedin: "https://www.linkedin.com/company/dxctechnology/",
      careers: "https://careers.dxc.com/global/en"
    },
    {
      id: "29",
      name: "e-finance",
      logo: "💳",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "500+",
      industry: "Finance / Banking",
      description: "Digital payment and financial infrastructure",
      linkedin: "https://www.linkedin.com/company/e-finance/people/?facetCurrentFunction=13",
      careers: ""
    },
    {
      id: "30",
      name: "Eductly",
      logo: "🎓",
      location: "Remote",
      type: "remote",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "50+",
      industry: "Higher Education, Startup",
      description: "Educational technology and learning platform",
      linkedin: "https://www.linkedin.com/company/educatly",
      careers: "https://www.linkedin.com/company/educatly/jobs/"
    },
    {
      id: "31",
      name: "EG-CERT",
      logo: "🔐",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.5,
      employees: "100+",
      industry: "Telecommunication",
      description: "Egyptian Computer Emergency Response Team",
      linkedin: "https://www.linkedin.com/company/ntraeg/",
      careers: ""
    },
    {
      id: "32",
      name: "EJADA",
      logo: "💼",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "150+",
      industry: "Consulting Services, Software House",
      description: "IT consulting and software development services",
      linkedin: "https://www.linkedin.com/company/ejada/",
      careers: "https://career.ejada.com/"
    },
    {
      id: "33",
      name: "elmenus",
      logo: "🍽️",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "200+",
      industry: "Startup",
      description: "Food discovery and restaurant platform",
      linkedin: "https://www.linkedin.com/company/elmenus.com/",
      careers: "https://elmenus.recruitee.com/"
    },
    {
      id: "34",
      name: "Fixed Solutions",
      logo: "🔧",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "120+",
      industry: "Cyber Security services, Software House",
      description: "Cybersecurity and software development solutions",
      linkedin: "https://www.linkedin.com/company/fixed-solutions/",
      careers: "https://solutions.fixed.global/en/careers"
    },
    {
      id: "35",
      name: "Gameball",
      logo: "🎮",
      location: "Remote",
      type: "remote",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "80+",
      industry: "",
      description: "Gamification and customer engagement platform",
      linkedin: "https://www.linkedin.com/company/gameball/",
      careers: "https://www.gameball.co/careers"
    },
    {
      id: "36",
      name: "Geidea",
      logo: "💳",
      location: "Egypt, KSA",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "300+",
      industry: "Finance / Banking, Software House",
      description: "Digital payment and financial technology solutions",
      linkedin: "https://www.linkedin.com/company/geidea/",
      careers: ""
    },
    {
      id: "37",
      name: "Giza Systems",
      logo: "🏢",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "500+",
      industry: "Consulting Services, Software House",
      description: "IT consulting and systems integration",
      linkedin: "https://www.linkedin.com/company/giza-systems/people/?keywords=data",
      careers: "https://www.gizasystemscareers.com/"
    },
    {
      id: "38",
      name: "Halan",
      logo: "🚲",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "250+",
      industry: "Finance / Banking",
      description: "Micro-mobility and financial services platform",
      linkedin: "https://www.linkedin.com/company/halan/",
      careers: "https://jobs.halan.com/"
    },
    {
      id: "39",
      name: "Incorta",
      logo: "📊",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "150+",
      industry: "Software House",
      description: "Data analytics and business intelligence platform",
      linkedin: "https://www.linkedin.com/company/incorta/jobs/",
      careers: "https://www.incorta.com/careers#positions"
    },
    {
      id: "40",
      name: "INFORT",
      logo: "🛡️",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "100+",
      industry: "Consulting Services, Cyber Security services, Software House",
      description: "Cybersecurity and IT consulting services",
      linkedin: "https://www.linkedin.com/company/infort/",
      careers: "https://www.infort.co/careers/"
    },
    {
      id: "41",
      name: "Inovasys",
      logo: "🔒",
      location: "Egypt, KSA, UAE",
      type: "onsite",
      roles: [
        {
          title: "Business Analyst",
          department: "Business",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "120+",
      industry: "Consulting Services, Cyber Security services, Software House",
      description: "Cybersecurity and IT consulting services",
      linkedin: "https://www.linkedin.com/company/inovasys/",
      careers: "https://www.inovasys.com/careers"
    },
    {
      id: "42",
      name: "Instabug",
      logo: "🐛",
      location: "Egypt, Hybrid",
      type: "hybrid",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.5,
      employees: "150+",
      industry: "Software House",
      description: "Mobile app testing and bug reporting platform",
      linkedin: "https://www.linkedin.com/company/instabug/",
      careers: "https://www.instabug.com/careers#bamboohr"
    },
    {
      id: "43",
      name: "Integrant",
      logo: "💻",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "200+",
      industry: "Software House",
      description: "Software development and technology solutions",
      linkedin: "https://www.linkedin.com/company/integrant-inc/",
      careers: "https://apply.workable.com/integrant/"
    },
    {
      id: "44",
      name: "IP Protocol INC",
      logo: "🌐",
      location: "Egypt, UAE",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "80+",
      industry: "Cyber Security services, Software House",
      description: "Cybersecurity and network solutions",
      linkedin: "https://www.linkedin.com/company/ipprotocolinc/",
      careers: ""
    },
    {
      id: "45",
      name: "ITCAN",
      logo: "📱",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "UI/UX",
          department: "Design",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "100+",
      industry: "Marketing, Software House",
      description: "Digital marketing and technology solutions",
      linkedin: "https://www.linkedin.com/company/itcandigital/",
      careers: "https://fromitcanwith.teamtailor.com/jobs"
    },
    {
      id: "46",
      name: "ITWorx",
      logo: "🏢",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "300+",
      industry: "Software House",
      description: "Enterprise software and technology solutions",
      linkedin: "https://www.linkedin.com/company/itworx/",
      careers: "https://www.itworx.com/jobs/"
    },
    {
      id: "47",
      name: "Jadara Solutions",
      logo: "📊",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Science",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "80+",
      industry: "Consulting Services, Software House",
      description: "Data analytics and consulting services",
      linkedin: "https://www.linkedin.com/company/jadara-solutions/",
      careers: ""
    },
    {
      id: "48",
      name: "Jumia",
      logo: "🛒",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.6,
      employees: "1000+",
      industry: "E-commerce",
      description: "Leading e-commerce platform in Africa",
      linkedin: "https://www.linkedin.com/company/jumia-group/",
      careers: "https://boards.eu.greenhouse.io/jumia?t=fc26afd2teu"
    },
    {
      id: "49",
      name: "Khazna",
      logo: "🏦",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "200+",
      industry: "Finance / Banking",
      description: "Digital banking and financial services",
      linkedin: "https://www.linkedin.com/company/khazna/",
      careers: ""
    },
    {
      id: "50",
      name: "Klivr",
      logo: "💳",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Analytics",
          department: "Data",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "150+",
      industry: "Finance / Banking",
      description: "Digital payment and financial technology",
      linkedin: "https://www.linkedin.com/company/klivvr/",
      careers: "https://www.linkedin.com/jobs/search/?currentJobId=3843697224&f_C=77912846&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3843697224%2C3843696922%2C3843698378%2C3868438904%2C3843698452"
    },
    {
      id: "51",
      name: "Link Development",
      logo: "🔗",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "250+",
      industry: "Software House",
      description: "Software development and technology solutions",
      linkedin: "https://www.linkedin.com/company/link-development/",
      careers: "https://linkdevelopment.com/careers/opportunities/"
    },
    {
      id: "52",
      name: "Linux Plus",
      logo: "🐧",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "80+",
      industry: "Software House",
      description: "Linux and open-source software solutions",
      linkedin: "",
      careers: ""
    },
    {
      id: "53",
      name: "Liquid C2",
      logo: "🛡️",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "120+",
      industry: "Cyber Security services, Software House",
      description: "Cybersecurity and threat intelligence solutions",
      linkedin: "https://www.linkedin.com/company/liquidc2mena/",
      careers: "https://liquidc2.com/careers/"
    },
    {
      id: "54",
      name: "LyRise",
      logo: "🚀",
      location: "Egypt, Remote",
      type: "hybrid",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "100+",
      industry: "Consulting Services, Software House",
      description: "AI-powered software development and consulting",
      linkedin: "https://www.linkedin.com/company/lyriseai/",
      careers: "https://lyrise.ai/"
    },
    {
      id: "55",
      name: "MaxAB",
      logo: "📦",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.5,
      employees: "300+",
      industry: "Finance / Banking, Software House",
      description: "B2B e-commerce and supply chain platform",
      linkedin: "https://www.linkedin.com/company/maxab/",
      careers: "https://careers.maxab.io/?#positions"
    },
    {
      id: "56",
      name: "Misr Digital Innovation",
      logo: "🏛️",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "200+",
      industry: "Finance / Banking",
      description: "Digital innovation and financial technology",
      linkedin: "",
      careers: ""
    },
    {
      id: "57",
      name: "Money Fellows",
      logo: "💰",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "150+",
      industry: "Finance / Banking",
      description: "Digital savings and financial services platform",
      linkedin: "https://www.linkedin.com/company/moneyfellows/",
      careers: "https://apply.workable.com/money-fellows/"
    },
    {
      id: "58",
      name: "mylerz Co",
      logo: "🚚",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "200+",
      industry: "Supply Chain, Transportation",
      description: "E-commerce logistics and delivery services",
      linkedin: "https://www.linkedin.com/company/mylerz-co/",
      careers: "https://www.mylerz.com/career"
    },
    {
      id: "59",
      name: "Naqla",
      logo: "🚛",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "150+",
      industry: "Supply Chain, Transportation",
      description: "Trucking and logistics technology platform",
      linkedin: "https://www.linkedin.com/company/naqla/",
      careers: "https://careers.naqla.xyz/jobs/Careers"
    },
    {
      id: "60",
      name: "Nawy",
      logo: "🏠",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "120+",
      industry: "Real State",
      description: "Real estate technology and property platform",
      linkedin: "https://www.linkedin.com/company/nawyestate/",
      careers: "https://apply.workable.com/nawy-real-estate/"
    },
    {
      id: "61",
      name: "NOMO Fintech",
      logo: "🏦",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "USD",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "USD",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "150+",
      industry: "Finance / Banking",
      description: "Digital banking and financial technology",
      linkedin: "https://www.linkedin.com/company/nomo-fintech/",
      careers: "https://jobs.lever.co/bb2bank"
    },
    {
      id: "62",
      name: "Noon",
      logo: "🛒",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "UI/UX",
          department: "Design",
          salary: "EGP",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.5,
      employees: "500+",
      industry: "E-commerce",
      description: "Leading e-commerce platform in the Middle East",
      linkedin: "https://www.linkedin.com/company/nooncom/",
      careers: "https://www.linkedin.com/jobs/search/?currentJobId=3866043028&f_C=18045372&originToLandingJobPostings=3866043028%2C3846772843%2C3870422467"
    },
    {
      id: "63",
      name: "Paymob",
      logo: "💳",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "200+",
      industry: "Finance / Banking",
      description: "Digital payment and financial technology platform",
      linkedin: "https://www.linkedin.com/company/paymobcompany/",
      careers: "https://www.paymob.com/en/careers"
    },
    {
      id: "64",
      name: "Rabbit",
      logo: "🐰",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "150+",
      industry: "E-commerce",
      description: "Quick commerce and grocery delivery platform",
      linkedin: "https://www.linkedin.com/company/rabbitmart/",
      careers: "https://www.rabbitmart.com/careers/"
    },
    {
      id: "65",
      name: "Rasan",
      logo: "💳",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "USD",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "USD",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "100+",
      industry: "E-commerce, FinTech",
      description: "Digital payment and e-commerce solutions",
      linkedin: "https://www.linkedin.com/company/rasan-information-technology/",
      careers: "https://www.linkedin.com/jobs/search/?currentJobId=3861049164&f_C=71925387&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=3861049164%2C3860769893%2C3874623369%2C3874614738%2C3869571835%2C3874619465%2C3861929634%2C3869575607%2C3852915587"
    },
    {
      id: "66",
      name: "Rubikal",
      logo: "💻",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "120+",
      industry: "Software House",
      description: "Software development and technology solutions",
      linkedin: "https://www.linkedin.com/company/rubikal_llc/",
      careers: "https://apply.workable.com/rubikal/"
    },
    {
      id: "67",
      name: "Secure Networks",
      logo: "🛡️",
      location: "Egypt, UAE",
      type: "onsite",
      roles: [
        {
          title: "Business Analyst",
          department: "Business",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "100+",
      industry: "Consulting Services, Cyber Security services",
      description: "Cybersecurity and network security solutions",
      linkedin: "https://www.linkedin.com/company/secure-networksco/",
      careers: "https://secure-networksco.com/careers/"
    },
    {
      id: "68",
      name: "Shahry",
      logo: "🏦",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "150+",
      industry: "Finance / Banking",
      description: "Digital banking and financial services platform",
      linkedin: "https://www.linkedin.com/company/shahry/",
      careers: "https://shahry.app/careers"
    },
    {
      id: "69",
      name: "StatsBomb",
      logo: "⚽",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Science",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "80+",
      industry: "Sports",
      description: "Football analytics and sports data platform",
      linkedin: "https://www.linkedin.com/company/statsbomb/",
      careers: "https://statsbomb.bamboohr.com/careers"
    },
    {
      id: "70",
      name: "Sumerge",
      logo: "📊",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Engineering",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "120+",
      industry: "Software House",
      description: "Data analytics and business intelligence solutions",
      linkedin: "https://www.linkedin.com/company/sumerge/",
      careers: "https://www.sumerge.com/careers/"
    },
    {
      id: "71",
      name: "Taager",
      logo: "📦",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "200+",
      industry: "E-commerce",
      description: "Social commerce and e-commerce platform",
      linkedin: "https://www.linkedin.com/company/taagercom/",
      careers: "https://taager.bamboohr.com/careers"
    },
    {
      id: "72",
      name: "Talabat",
      logo: "🍕",
      location: "Egypt, UAE",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.5,
      employees: "500+",
      industry: "E-commerce, Food Delivery",
      description: "Food delivery and e-commerce platform",
      linkedin: "https://www.linkedin.com/company/talabat-com/mycompany/",
      careers: "https://careers.deliveryhero.com/jobs?options=252,243&page=1"
    },
    {
      id: "73",
      name: "Tanmeyah",
      logo: "🏦",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "150+",
      industry: "Finance / Banking",
      description: "Digital banking and financial services",
      linkedin: "https://www.linkedin.com/company/tanmeyah/",
      careers: "https://tanmeyah.com/careers/"
    },
    {
      id: "74",
      name: "THIQAH",
      logo: "💼",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "USD",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "QA",
          department: "Quality Assurance",
          salary: "USD",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "100+",
      industry: "Software House",
      description: "Software development and technology solutions",
      linkedin: "https://www.linkedin.com/company/thiqah-sa/",
      careers: "https://careers.thiqah.sa/"
    },
    {
      id: "75",
      name: "Thndr",
      logo: "📈",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "120+",
      industry: "Finance / Banking",
      description: "Investment and trading platform",
      linkedin: "https://www.linkedin.com/company/thndrapp/people/?facetGeoRegion=106155005",
      careers: "https://thndr-talent.freshteam.com/jobs"
    },
    {
      id: "76",
      name: "Trella",
      logo: "🚛",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "150+",
      industry: "Supply Chain, Transportation",
      description: "Trucking and logistics technology platform",
      linkedin: "https://www.linkedin.com/company/trellaapp/",
      careers: "https://www.trella.app/careers"
    },
    {
      id: "77",
      name: "Trufla",
      logo: "🛡️",
      location: "Egypt, Hybrid",
      type: "hybrid",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "100+",
      industry: "Insurance",
      description: "Insurance technology and digital solutions",
      linkedin: "https://www.linkedin.com/company/truflatech/",
      careers: "https://trufla.applytojobs.ca/"
    },
    {
      id: "78",
      name: "TwentyToo",
      logo: "🤖",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.1,
      employees: "80+",
      industry: "Software House",
      description: "AI-powered software development solutions",
      linkedin: "https://www.linkedin.com/company/twentytooai/",
      careers: ""
    },
    {
      id: "79",
      name: "Valu",
      logo: "💳",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Data Analytics",
          department: "Data",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Testing",
          department: "Quality Assurance",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "120+",
      industry: "Finance / Banking",
      description: "Digital payment and financial services",
      linkedin: "https://www.linkedin.com/company/valuegypt/",
      careers: ""
    },
    {
      id: "80",
      name: "Vezeeta",
      logo: "🏥",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.4,
      employees: "300+",
      industry: "Healthcare / Medical",
      description: "Healthcare booking and medical services platform",
      linkedin: "https://www.linkedin.com/company/vezeeta/",
      careers: "https://careers.vezeeta.com/"
    },
    {
      id: "81",
      name: "Wuzzuf",
      logo: "💼",
      location: "Egypt",
      type: "onsite",
      roles: [
        {
          title: "Back-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Front-End Developer",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.3,
      employees: "200+",
      industry: "Staffing and Recruiting",
      description: "Job search and recruitment platform",
      linkedin: "",
      careers: ""
    },
    {
      id: "82",
      name: "ZINAD IT",
      logo: "🛡️",
      location: "Egypt, UAE",
      type: "onsite",
      roles: [
        {
          title: "Cyber Security",
          department: "Security",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        },
        {
          title: "Software Engineering",
          department: "Engineering",
          salary: "Competitive",
          posted: "Recently",
          isNew: true,
          isUrgent: false
        }
      ],
      rating: 4.2,
      employees: "120+",
      industry: "Consulting Services, Cyber Security services, Software House",
      description: "Cybersecurity and software development services",
      linkedin: "https://www.linkedin.com/company/zinad-security-and-software-services/",
      careers: "https://www.zinad.net/careers.html"
    }
  ];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.roles.some(role => role.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "all" || company.type === selectedType;
    return matchesSearch && matchesType;
  });

  const applyToJob = (companyName: string, jobTitle: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isRTL ? "تم التقديم" : "Application Submitted",
        description: isRTL 
          ? `تم إرسال طلبك لوظيفة ${jobTitle} في ${companyName}`
          : `Your application for ${jobTitle} at ${companyName} has been submitted`
      });
    }, 2000);
  };

  return (
    <div className={`min-h-screen ${isRTL ? 'font-arabic' : ''}`}>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.companies.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t.companies.subtitle}</p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t.companies.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <SuccessAlert 
            message={isRTL 
              ? "🚀 100+ فرصة عمل جديدة متاحة هذا الأسبوع!" 
              : "🚀 100+ new job opportunities available this week!"
            } 
          />
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                {isRTL ? "تصفية حسب نوع العمل" : "Filter by Work Type"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ButtonGroup 
                options={workTypes}
                selected={selectedType}
                onSelect={setSelectedType}
              />
            </CardContent>
          </Card>
        </div>

        {/* Companies Grid */}
        <div className="grid gap-8">
          {filteredCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{company.logo}</div>
                    <div>
                      <h2 className="text-2xl font-bold">{company.name}</h2>
                      <p className="text-muted-foreground">{company.industry}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{company.location}</span>
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {company.type === "remote" ? (isRTL ? "عن بُعد" : "Remote") :
                           company.type === "onsite" ? (isRTL ? "في المكتب" : "On-site") :
                           (isRTL ? "مختلط" : "Hybrid")}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{company.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{company.employees}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{company.description}</p>
                
                {/* Company Links */}
                {(company.linkedin || company.careers) && (
                  <div className="flex gap-2 mt-4">
                    {company.linkedin && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(company.linkedin, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            LinkedIn
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {isRTL ? "زيارة صفحة LinkedIn" : "Visit LinkedIn page"}
                        </TooltipContent>
                      </Tooltip>
                    )}
                    {company.careers && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(company.careers, '_blank')}
                          >
                            <Briefcase className="h-4 w-4 mr-1" />
                            Careers
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {isRTL ? "زيارة صفحة الوظائف" : "Visit careers page"}
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {/* Jobs Table */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    {isRTL ? "الوظائف المتاحة" : "Available Positions"}
                  </h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{t.companies.table.roles}</TableHead>
                          <TableHead>{isRTL ? "القسم" : "Department"}</TableHead>
                          <TableHead>{isRTL ? "الراتب" : "Salary"}</TableHead>
                          <TableHead>{t.companies.table.posted}</TableHead>
                          <TableHead>{t.companies.table.actions}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {company.roles.map((role, roleIndex) => (
                          <TableRow key={roleIndex}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{role.title}</span>
                                <div className="flex gap-1">
                                  {role.isNew && (
                                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                                      {isRTL ? "جديد" : "New"}
                                    </Badge>
                                  )}
                                  {role.isUrgent && (
                                    <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
                                      {isRTL ? "عاجل" : "Urgent"}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{role.department}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4 text-green-600" />
                                <span className="font-medium">{role.salary}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">{role.posted}</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      size="sm"
                                      onClick={() => applyToJob(company.name, role.title)}
                                      disabled={isLoading}
                                    >
                                      {isLoading ? <SpinnerBorder size="sm" /> : <ExternalLink className="h-4 w-4" />}
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    {isRTL ? "التقديم للوظيفة" : "Apply for job"}
                                  </TooltipContent>
                                </Tooltip>
                                
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button variant="outline" size="sm">
                                      <Globe className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    {isRTL ? "زيارة موقع الشركة" : "Visit company website"}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <Building className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">
              {isRTL ? "لا توجد شركات مطابقة" : "No companies found"}
            </h3>
            <p className="text-muted-foreground">
              {isRTL ? "جرب تغيير معايير البحث" : "Try adjusting your search criteria"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}