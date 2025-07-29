import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { 
  SpinnerBorder,
  SuccessAlert,
  InfoAlert,
  WarningAlert
} from "@/components/bootstrap-components";
import Breadcrumb from "@/components/breadcrumb";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  User,
  Building,
  Globe,
  Clock,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: string;
}

export default function ContactPage() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const breadcrumbItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.contact, href: "/contact" }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: isRTL ? "البريد الإلكتروني" : "Email",
      value: "hello@techpathfinder.com",
      description: isRTL ? "نرد خلال 24 ساعة" : "We respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: isRTL ? "الهاتف" : "Phone",
      value: "+1 (555) 123-4567",
      description: isRTL ? "متاح من 9ص إلى 5م" : "Available 9 AM - 5 PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: isRTL ? "العنوان" : "Address",
      value: isRTL ? "سان فرانسيسكو، كاليفورنيا" : "San Francisco, CA",
      description: isRTL ? "الولايات المتحدة الأمريكية" : "United States"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: isRTL ? "استفسار عام" : "General Inquiry" },
    { value: "course", label: isRTL ? "سؤال عن الكورسات" : "Course Question" },
    { value: "career", label: isRTL ? "إرشاد مهني" : "Career Guidance" },
    { value: "partnership", label: isRTL ? "شراكة" : "Partnership" },
    { value: "bug", label: isRTL ? "مشكلة تقنية" : "Technical Issue" },
    { value: "other", label: isRTL ? "أخرى" : "Other" }
  ];

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      toast({
        title: isRTL ? "تم إرسال الرسالة" : "Message Sent",
        description: isRTL 
          ? "شكراً لتواصلك معنا، سنرد عليك قريباً"
          : "Thank you for contacting us, we'll get back to you soon"
      });
      
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 2000);
  };

  const faqItems = [
    {
      question: isRTL ? "كيف يمكنني التسجيل في الكورسات؟" : "How can I enroll in courses?",
      answer: isRTL 
        ? "جميع الكورسات مجانية، ما عليك سوى النقر على 'ابدأ الآن' في صفحة الكورسات."
        : "All courses are free, just click 'Start Now' on any course page."
    },
    {
      question: isRTL ? "هل تقدمون شهادات؟" : "Do you provide certificates?",
      answer: isRTL
        ? "نعم، تحصل على شهادة إتمام مجانية عند إنهاء أي كورس بنجاح."
        : "Yes, you receive a free completion certificate when you successfully finish any course."
    },
    {
      question: isRTL ? "كيف يمكنني إيجاد وظيفة؟" : "How can I find a job?",
      answer: isRTL
        ? "تحقق من قسم الشركات لدينا للعثور على الفرص المتاحة وتقدم مباشرة."
        : "Check our companies section to find available opportunities and apply directly."
    }
  ];

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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Alert Section */}
      {submitStatus === 'success' && (
        <section className="py-6 bg-background">
          <div className="container mx-auto px-4">
            <SuccessAlert 
              message={isRTL 
                ? "✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً." 
                : "✅ Your message has been sent successfully! We'll contact you soon."
              } 
            />
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {isRTL ? "معلومات التواصل" : "Contact Information"}
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-primary font-medium mb-1">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {isRTL ? "ساعات العمل" : "Office Hours"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>{isRTL ? "الإثنين - الجمعة" : "Monday - Friday"}</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{isRTL ? "السبت" : "Saturday"}</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{isRTL ? "الأحد" : "Sunday"}</span>
                      <span className="text-muted-foreground">{isRTL ? "مغلق" : "Closed"}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info Alert */}
              <InfoAlert 
                message={isRTL 
                  ? "💡 لديك سؤال سريع؟ جرب مساعدنا الذكي أولاً!" 
                  : "💡 Have a quick question? Try our AI assistant first!"
                } 
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="h-6 w-6" />
                  {isRTL ? "أرسل لنا رسالة" : "Send us a Message"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Form Validation Alert */}
                  {Object.keys(errors).length > 0 && (
                    <WarningAlert 
                      message={isRTL 
                        ? "يرجى تصحيح الأخطاء في النموذج أدناه"
                        : "Please correct the errors in the form below"
                      } 
                    />
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4" />
                        {isRTL ? "الاسم الكامل" : "Full Name"}
                        <Badge variant="destructive" className="text-xs">
                          {isRTL ? "مطلوب" : "Required"}
                        </Badge>
                      </Label>
                      <Input
                        id="name"
                        placeholder={isRTL ? "أدخل اسمك الكامل" : "Enter your full name"}
                        {...register("name", { 
                          required: isRTL ? "الاسم مطلوب" : "Name is required",
                          minLength: { value: 2, message: isRTL ? "الاسم قصير جداً" : "Name is too short" }
                        })}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                        <Mail className="h-4 w-4" />
                        {isRTL ? "البريد الإلكتروني" : "Email Address"}
                        <Badge variant="destructive" className="text-xs">
                          {isRTL ? "مطلوب" : "Required"}
                        </Badge>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={isRTL ? "name@example.com" : "name@example.com"}
                        {...register("email", { 
                          required: isRTL ? "البريد الإلكتروني مطلوب" : "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: isRTL ? "بريد إلكتروني غير صحيح" : "Invalid email address"
                          }
                        })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Inquiry Type */}
                    <div>
                      <Label htmlFor="type" className="flex items-center gap-2 mb-2">
                        <Building className="h-4 w-4" />
                        {isRTL ? "نوع الاستفسار" : "Inquiry Type"}
                      </Label>
                      <select
                        id="type"
                        {...register("type")}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject" className="flex items-center gap-2 mb-2">
                        <Info className="h-4 w-4" />
                        {isRTL ? "الموضوع" : "Subject"}
                        <Badge variant="destructive" className="text-xs">
                          {isRTL ? "مطلوب" : "Required"}
                        </Badge>
                      </Label>
                      <Input
                        id="subject"
                        placeholder={isRTL ? "ما هو موضوع رسالتك؟" : "What's your message about?"}
                        {...register("subject", { 
                          required: isRTL ? "الموضوع مطلوب" : "Subject is required"
                        })}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="flex items-center gap-2 mb-2">
                      <MessageCircle className="h-4 w-4" />
                      {isRTL ? "الرسالة" : "Message"}
                      <Badge variant="destructive" className="text-xs">
                        {isRTL ? "مطلوب" : "Required"}
                      </Badge>
                    </Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder={isRTL 
                        ? "اكتب رسالتك هنا... كن مفصلاً قدر الإمكان لنتمكن من مساعدتك بشكل أفضل"
                        : "Write your message here... Be as detailed as possible so we can better assist you"
                      }
                      {...register("message", { 
                        required: isRTL ? "الرسالة مطلوبة" : "Message is required",
                        minLength: { value: 10, message: isRTL ? "الرسالة قصيرة جداً" : "Message is too short" }
                      })}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <SpinnerBorder size="sm" />
                          <span className="ml-2">
                            {isRTL ? "جاري الإرسال..." : "Sending..."}
                          </span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {isRTL ? "إرسال الرسالة" : "Send Message"}
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">
                {isRTL ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}