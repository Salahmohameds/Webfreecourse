import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import Breadcrumb from "@/components/breadcrumb";
import { 
  Download, 
  Loader2, 
  Search, 
  FileText, 
  Calendar, 
  Building,
  ExternalLink,
  Filter
} from "lucide-react";

interface Paper {
  id: string;
  title: string;
  abstract: string;
  authors: Array<{ name: string }>;
  downloadUrl?: string;
  year?: number;
  venue?: string;
  doi?: string;
}

export default function ResearchPage() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [query, setQuery] = useState("");
  const [pdfOnly, setPdfOnly] = useState(false);
  const [results, setResults] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  const breadcrumbItems = [
    { label: t.nav.home, href: "/" },
    { label: isRTL ? "الأبحاث" : "Research", href: "/research" }
  ];

  const handleSearch = async (e?: React.FormEvent, isLoadMore = false) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    
    // Limit pagination to prevent excessive requests
    const MAX_PAGES = 50; // Maximum 50 pages (500 results)
    if (page > MAX_PAGES) {
      setHasMore(false);
      toast({
        title: isRTL ? "تم الوصول للحد الأقصى" : "Maximum Results Reached",
        description: isRTL 
          ? "تم عرض الحد الأقصى من النتائج. يرجى تحسين البحث للحصول على نتائج أكثر تحديداً."
          : "Maximum results reached. Please refine your search for more specific results.",
      });
      return;
    }
    
    if (!isLoadMore) {
      setLoading(true);
      setError(null);
      setResults([]);
      setPage(1);
      setHasMore(true);
    }
    
    try {
      const params = new URLSearchParams({ 
        q: query, 
        pdfOnly: pdfOnly.toString(),
        page: page.toString()
      });
      
      // Add timeout to the fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 45000); // 45 second timeout
      
      const res = await fetch(`/search?${params.toString()}`, {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (res.status === 429) {
        const errorData = await res.json();
        throw new Error(`Rate limit exceeded. Please wait ${errorData.retryAfter || 60} seconds before trying again.`);
      }
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: "Failed to fetch results" }));
        throw new Error(errorData.details || errorData.error || "Failed to fetch results");
      }
      
      const data = await res.json();
      
      if (isLoadMore) {
        setResults(prev => [...prev, ...(data.core || [])]);
      } else {
        setResults(data.core || []);
        setTotalResults(data.total || 0);
      }
      
      setHasMore(data.hasMore || false);
      
      // Show success message for first search
      if (!isLoadMore && data.core && data.core.length > 0) {
        toast({
          title: isRTL ? "تم العثور على نتائج" : "Results Found",
          description: isRTL 
            ? `تم العثور على ${data.total} ورقة بحثية`
            : `Found ${data.total} research papers`,
        });
      }
      
    } catch (err: any) {
      let errorMessage = err.message || "Unknown error";
      
      if (err.name === 'AbortError') {
        errorMessage = isRTL 
          ? "استغرق البحث وقتاً طويلاً. يرجى المحاولة مرة أخرى."
          : "Search took too long. Please try again.";
      } else if (errorMessage.includes('Rate limit exceeded')) {
        errorMessage = isRTL 
          ? "تم تجاوز حد الطلبات. يرجى الانتظار قليلاً قبل المحاولة مرة أخرى."
          : errorMessage;
      }
      
      setError(errorMessage);
      toast({
        title: isRTL ? "خطأ في البحث" : "Search Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadAll = async () => {
    const pdfs = results.filter(p => p.downloadUrl);
    
    if (pdfs.length === 0) {
      toast({
        title: isRTL ? "لا توجد PDFs متاحة" : "No PDFs Available",
        description: isRTL ? "لا توجد أوراق بحثية تحتوي على PDFs للتحميل" : "No research papers have downloadable PDFs",
        variant: "destructive"
      });
      return;
    }
    
    setDownloading(true);
    try {
      // Download PDFs one by one
      for (const pdf of pdfs) {
        const link = document.createElement('a');
        link.href = pdf.downloadUrl!;
        link.download = `${pdf.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Small delay to prevent browser blocking
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      toast({
        title: isRTL ? "تم بدء التحميل" : "Download Started",
        description: isRTL ? `جاري تحميل ${pdfs.length} PDF` : `Downloading ${pdfs.length} PDFs...`
      });
    } catch (err) {
      toast({
        title: isRTL ? "خطأ في التحميل" : "Download Error",
        description: isRTL ? "فشل في تحميل PDFs" : "Failed to download PDFs",
        variant: "destructive"
      });
    } finally {
      setDownloading(false);
    }
  };

  // Infinite scroll setup
  useEffect(() => {
    if (loading || !hasMore) return;
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          // Add a delay before making the next request to prevent rate limiting
          setTimeout(() => {
            setPage(prev => prev + 1);
            handleSearch(undefined, true);
          }, 1500); // 1.5 second delay between infinite scroll requests
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, loading, page]);

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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {isRTL ? "البحث في الأوراق البحثية" : "Research Paper Search"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {isRTL 
              ? "ابحث في قاعدة بيانات CORE للأوراق البحثية الأكاديمية"
              : "Search CORE database for academic research papers"
            }
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  className="pl-10"
                  placeholder={isRTL ? "ابحث عن الأوراق البحثية..." : "Search for research papers..."}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={loading || !query.trim()}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : (isRTL ? "بحث" : "Search")}
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="rounded border-gray-300"
                type="checkbox"
                id="pdfOnly"
                checked={pdfOnly}
                onChange={e => setPdfOnly(e.target.checked)}
              />
              <label className="text-sm text-muted-foreground" htmlFor="pdfOnly">
                {isRTL ? "عرض الأوراق التي تحتوي على PDF فقط" : "Only show papers with PDFs"}
              </label>
            </div>
          </form>
          
          {loading && (
            <div className="max-w-2xl mx-auto mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                <div>
                  <p className="font-medium text-blue-800">
                    {isRTL ? "جاري البحث..." : "Searching..."}
                  </p>
                  <p className="text-sm text-blue-600">
                    {isRTL 
                      ? "قد يستغرق البحث بضع ثوانٍ للعثور على الأوراق البحثية"
                      : "Search may take a few seconds to find research papers"
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {error && (
            <div className="max-w-2xl mx-auto mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          )}
        </div>
      </section>

      {/* Results Summary */}
      {results.length > 0 && (
        <section className="py-4 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="font-medium">
                    {isRTL 
                      ? `تم العثور على ${totalResults} ورقة بحثية`
                      : `Found ${totalResults} research papers`
                    }
                  </span>
                </div>
                <Badge variant="secondary">
                  {isRTL ? `${results.length} معروض` : `${results.length} shown`}
                </Badge>
              </div>
              
              <Button 
                onClick={handleDownloadAll} 
                disabled={downloading}
                className="flex items-center gap-2"
              >
                {downloading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                {isRTL ? "تحميل جميع PDFs" : "Download All PDFs"}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          {results.length === 0 && !loading && !error && query && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                {isRTL ? "لا توجد نتائج" : "No results found"}
              </h3>
              <p className="text-muted-foreground">
                {isRTL 
                  ? "جرب تغيير كلمات البحث أو إزالة الفلاتر"
                  : "Try changing your search terms or removing filters"
                }
              </p>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {results.map((paper, idx) => (
              <Card key={paper.id || idx} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 leading-tight">
                    {paper.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-4 text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                    {paper.abstract}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {paper.authors && paper.authors.length > 0 && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">
                          {isRTL ? "المؤلفون:" : "Authors:"}
                        </span> {paper.authors.map(a => a.name).join(", ")}
                      </div>
                    )}
                    
                    {paper.year && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{paper.year}</span>
                      </div>
                    )}
                    
                    {paper.venue && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Building className="h-3 w-3" />
                        <span className="line-clamp-1">{paper.venue}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto flex gap-2">
                    {paper.downloadUrl && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(paper.downloadUrl, '_blank')}
                        className="flex items-center gap-1"
                      >
                        <Download className="h-3 w-3" />
                        {isRTL ? "PDF" : "PDF"}
                      </Button>
                    )}
                    
                    {paper.doi && (
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => window.open(`https://doi.org/${paper.doi}`, '_blank')}
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        DOI
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Infinite scroll loading indicator */}
          {hasMore && (
            <div ref={loadingRef} className="text-center py-8">
              {loading && <Loader2 className="h-6 w-6 animate-spin mx-auto" />}
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 