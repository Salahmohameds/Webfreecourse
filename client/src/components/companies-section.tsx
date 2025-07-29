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
  TableRow 
} from "@/components/ui/table";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Building, Search, Info, AlertCircle } from "lucide-react";
import { companies } from "@/lib/mock-data";
import Breadcrumb from "@/components/breadcrumb";

export default function CompaniesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.roles.some(role => role.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = !locationFilter || locationFilter === "all" || company.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesJobType = !jobTypeFilter || jobTypeFilter === "all" || company.levels.some(level => level.toLowerCase().includes(jobTypeFilter.toLowerCase()));
    
    return matchesSearch && matchesLocation && matchesJobType;
  });

  const getBadgeVariant = (type: string) => {
    switch (type.toLowerCase()) {
      case "remote": return "default";
      case "hybrid": return "secondary";
      case "on-site": return "outline";
      case "entry level": return "default";
      case "junior": return "secondary";
      case "mid-level": return "destructive";
      case "internship": return "outline";
      default: return "default";
    }
  };

  return (
    <section id="companies" className="py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 fade-in">
          <Breadcrumb 
            items={[
              { label: "Companies", href: "companies", active: true }
            ]} 
          />
        </div>

        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl font-bold mb-4">Tech Companies Hiring</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track the latest opportunities from top tech companies across the globe.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search companies or roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
            </SelectContent>
          </Select>

          <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Job Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Job Types</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
              <SelectItem value="entry">Entry Level</SelectItem>
              <SelectItem value="junior">Junior</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Companies Table */}
        <Card className="fade-in">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Open Roles</TableHead>
                    <TableHead>Experience Level</TableHead>
                    <TableHead>Posted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCompanies.map((company) => (
                    <TableRow key={company.id} className="fade-in">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <img 
                            src={company.logo} 
                            alt={`${company.name} logo`}
                            className="company-logo"
                          />
                          <div>
                            <h6 className="font-semibold">{company.name}</h6>
                            <p className="text-sm text-muted-foreground">{company.industry}</p>
                          </div>
                        </div>
                      </TableCell>
                      
                      <TableCell>
                        <Badge variant={getBadgeVariant(company.workType)} className="mb-1">
                          {company.workType}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{company.location}</p>
                      </TableCell>
                      
                      <TableCell>
                        <div className="space-y-1">
                          {company.roles.map((role, index) => (
                            <div key={index} className="text-sm">{role}</div>
                          ))}
                        </div>
                      </TableCell>
                      
                      <TableCell>
                        <div className="space-y-1">
                          {company.levels.map((level, index) => (
                            <Badge key={index} variant={getBadgeVariant(level)} className="mr-1 mb-1">
                              {level}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      
                      <TableCell>
                        <span className="text-sm text-muted-foreground">{company.posted}</span>
                      </TableCell>
                      
                      <TableCell>
                        <div className="flex space-x-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Info className="h-3 w-3" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="space-y-2">
                                <h4 className="font-medium">{company.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {company.industry} company with {company.roles.length} open positions.
                                </p>
                                <div className="text-xs">
                                  <strong>Work Type:</strong> {company.workType}
                                </div>
                                <div className="text-xs">
                                  <strong>Posted:</strong> {company.posted}
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                          
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button size="sm">Apply</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Click to apply for positions at {company.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {filteredCompanies.length === 0 && (
          <Alert className="max-w-md mx-auto mt-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              No companies found matching your search criteria. Try adjusting your filters.
            </AlertDescription>
          </Alert>
        )}

        {/* New Companies Alert */}
        <Alert className="mt-8 max-w-2xl mx-auto">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>New companies added!</strong> 5 new tech companies posted job openings this week.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}
