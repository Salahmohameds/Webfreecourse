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
      name: "Google",
      logo: "🔍",
      location: isRTL ? "ماウنتن فيو، كاليفورنيا" : "Mountain View, CA",
      type: "remote",
      roles: [
        {
          title: isRTL ? "مهندس برمجيات - متدرب" : "Software Engineer - Intern",
          department: isRTL ? "الهندسة" : "Engineering",
          salary: "$8,000/month",
          posted: "2 days ago",
          isNew: true,
          isUrgent: false
        },
        {
          title: isRTL ? "مطور Full Stack" : "Full Stack Developer",
          department: isRTL ? "المنتج" : "Product",
          salary: "$120K-150K",
          posted: "1 week ago",
          isNew: false,
          isUrgent: true
        }
      ],
      rating: 4.8,
      employees: "100K+",
      industry: isRTL ? "التقنية" : "Technology",
      description: isRTL 
        ? "شركة تقنية عالمية رائدة في محركات البحث والحوسبة السحابية"
        : "Leading global technology company in search engines and cloud computing"
    },
    {
      id: "2",
      name: "Microsoft",
      logo: "🖥️",
      location: isRTL ? "ريدموند، واشنطن" : "Redmond, WA",
      type: "hybrid",
      roles: [
        {
          title: isRTL ? "مطور Azure" : "Azure Developer",
          department: isRTL ? "الحوسبة السحابية" : "Cloud",
          salary: "$130K-160K",
          posted: "3 days ago",
          isNew: true,
          isUrgent: false
        },
        {
          title: isRTL ? "مهندس AI" : "AI Engineer",
          department: isRTL ? "الذكاء الاصطناعي" : "AI Research",
          salary: "$140K-170K",
          posted: "5 days ago",
          isNew: false,
          isUrgent: true
        }
      ],
      rating: 4.7,
      employees: "200K+",
      industry: isRTL ? "البرمجيات" : "Software",
      description: isRTL
        ? "شركة تقنية متعددة الجنسيات تركز على البرمجيات والخدمات"
        : "Multinational technology company focused on software and services"
    },
    {
      id: "3",
      name: "Meta",
      logo: "📘",
      location: isRTL ? "مينلو بارك، كاليفورنيا" : "Menlo Park, CA",
      type: "onsite",
      roles: [
        {
          title: isRTL ? "مهندس Frontend" : "Frontend Engineer",
          department: isRTL ? "المنتج" : "Product",
          salary: "$125K-155K",
          posted: "1 day ago",
          isNew: true,
          isUrgent: true
        },
        {
          title: isRTL ? "عالم بيانات" : "Data Scientist",
          department: isRTL ? "البيانات" : "Data",
          salary: "$135K-165K",
          posted: "4 days ago",
          isNew: false,
          isUrgent: false
        }
      ],
      rating: 4.6,
      employees: "80K+",
      industry: isRTL ? "وسائل التواصل" : "Social Media",
      description: isRTL
        ? "شركة وسائل تواصل اجتماعي وتقنيات الواقع الافتراضي"
        : "Social media and virtual reality technology company"
    },
    {
      id: "4",
      name: "Amazon",
      logo: "📦",
      location: isRTL ? "سياتل، واشنطن" : "Seattle, WA",
      type: "remote",
      roles: [
        {
          title: isRTL ? "مهندس DevOps" : "DevOps Engineer",
          department: isRTL ? "البنية التحتية" : "Infrastructure",
          salary: "$115K-145K",
          posted: "6 days ago",
          isNew: false,
          isUrgent: false
        },
        {
          title: isRTL ? "مطور Backend" : "Backend Developer",
          department: isRTL ? "الخدمات" : "Services",
          salary: "$120K-150K",
          posted: "2 days ago",
          isNew: true,
          isUrgent: true
        }
      ],
      rating: 4.5,
      employees: "1.5M+",
      industry: isRTL ? "التجارة الإلكترونية" : "E-commerce",
      description: isRTL
        ? "شركة تجارة إلكترونية وحوسبة سحابية عالمية"
        : "Global e-commerce and cloud computing company"
    },
    {
      id: "5",
      name: "Apple",
      logo: "🍎",
      location: isRTL ? "كوبرتينو، كاليفورنيا" : "Cupertino, CA",
      type: "onsite",
      roles: [
        {
          title: isRTL ? "مطور iOS" : "iOS Developer",
          department: isRTL ? "المنتج" : "Product",
          salary: "$130K-160K",
          posted: "3 days ago",
          isNew: true,
          isUrgent: false
        },
        {
          title: isRTL ? "مهندس أمن" : "Security Engineer",
          department: isRTL ? "الأمان" : "Security",
          salary: "$140K-170K",
          posted: "1 week ago",
          isNew: false,
          isUrgent: true
        }
      ],
      rating: 4.9,
      employees: "150K+",
      industry: isRTL ? "الإلكترونيات" : "Electronics",
      description: isRTL
        ? "شركة تقنية تصمم وتطور الإلكترونيات الاستهلاكية"
        : "Technology company that designs and develops consumer electronics"
    },
    {
      id: "6",
      name: "Netflix",
      logo: "🎬",
      location: isRTL ? "لوس جاتوس، كاليفورنيا" : "Los Gatos, CA",
      type: "hybrid",
      roles: [
        {
          title: isRTL ? "مهندس بيانات" : "Data Engineer",
          department: isRTL ? "التحليلات" : "Analytics",
          salary: "$125K-155K",
          posted: "4 days ago",
          isNew: false,
          isUrgent: false
        },
        {
          title: isRTL ? "مطور React" : "React Developer",
          department: isRTL ? "المنتج" : "Product",
          salary: "$115K-145K",
          posted: "2 days ago",
          isNew: true,
          isUrgent: true
        }
      ],
      rating: 4.4,
      employees: "12K+",
      industry: isRTL ? "الترفيه" : "Entertainment",
      description: isRTL
        ? "منصة بث وإنتاج محتوى رقمي عالمية"
        : "Global streaming and digital content production platform"
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