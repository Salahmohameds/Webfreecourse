import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, RotateCcw, MessageCircle, User } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: number;
  type: 'user' | 'bot';
  content: string;
}

export default function ChatbotModal() {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const initializeChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: t.chatbot.subtitle
      }
    ]);
  };

  const openChatbot = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      initializeChat();
    }
  };

  const addMessage = (type: 'user' | 'bot', content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now(),
      type,
      content
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Career path questions
    if (lowerMessage.includes('career') || lowerMessage.includes('path') || lowerMessage.includes('مسار') || lowerMessage.includes('مهنة')) {
      return isRTL 
        ? "يمكنك اختيار من عدة مسارات مهنية في التقنية مثل تطوير الويب، تطوير التطبيقات، الذكاء الاصطناعي، علم البيانات، والأمن السيبراني. ما الذي يثير اهتمامك أكثر؟"
        : "You can choose from several tech career paths like web development, mobile app development, AI/ML, data science, and cybersecurity. What interests you most?";
    }
    
    // Course recommendations
    if (lowerMessage.includes('course') || lowerMessage.includes('learn') || lowerMessage.includes('كورس') || lowerMessage.includes('تعلم')) {
      return isRTL
        ? "أنصحك بالبدء بالأساسيات مثل HTML/CSS/JavaScript لتطوير الويب، أو Python للذكاء الاصطناعي وعلم البيانات. تحقق من قسم الكورسات لدينا للحصول على موارد مجانية!"
        : "I recommend starting with fundamentals like HTML/CSS/JavaScript for web development, or Python for AI and data science. Check out our courses section for free resources!";
    }
    
    // Skills in demand
    if (lowerMessage.includes('skill') || lowerMessage.includes('demand') || lowerMessage.includes('مهارة') || lowerMessage.includes('مطلوب')) {
      return isRTL
        ? "المهارات الأكثر طلباً حالياً تشمل: React/Next.js، Python، الحوسبة السحابية (AWS/Azure)، الذكاء الاصطناعي، وDevOps. التعلم المستمر مهم جداً في مجال التقنية!"
        : "The most in-demand skills currently include: React/Next.js, Python, cloud computing (AWS/Azure), AI/ML, and DevOps. Continuous learning is key in tech!";
    }
    
    // Job finding
    if (lowerMessage.includes('job') || lowerMessage.includes('find') || lowerMessage.includes('وظيفة') || lowerMessage.includes('عمل')) {
      return isRTL
        ? "لإيجاد وظائف في التقنية: 1) أنشئ ملف GitHub قوي 2) تدرب على مشاريع عملية 3) تواصل مع المجتمع التقني 4) تحقق من قسم الشركات لدينا للفرص المتاحة!"
        : "To find tech jobs: 1) Build a strong GitHub portfolio 2) Practice with real projects 3) Network with the tech community 4) Check our companies section for opportunities!";
    }

    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('مرحبا') || lowerMessage.includes('أهلا')) {
      return isRTL
        ? "مرحباً! أنا هنا لمساعدتك في مسيرتك التقنية. يمكنني الإجابة على أسئلة حول المسارات المهنية، الكورسات، أو المهارات المطلوبة. كيف يمكنني مساعدتك؟"
        : "Hello! I'm here to help with your tech journey. I can answer questions about career paths, courses, or in-demand skills. How can I assist you?";
    }
    
    // Default response
    return isRTL
      ? "شكراً لسؤالك! أنا هنا لمساعدتك في رحلتك التقنية. يمكنك سؤالي عن المسارات المهنية، الكورسات، المهارات المطلوبة، أو كيفية إيجاد وظائف في التقنية."
      : "Thanks for your question! I'm here to help with your tech journey. You can ask me about career paths, courses, in-demand skills, or how to find tech jobs.";
  };

  const handleQuickQuestion = (question: string) => {
    addMessage('user', question);
    setIsThinking(true);
    
    setTimeout(() => {
      const response = getAIResponse(question);
      addMessage('bot', response);
      setIsThinking(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue.trim();
    setInputValue("");
    addMessage('user', userMessage);
    setIsThinking(true);
    
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      addMessage('bot', response);
      setIsThinking(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([]);
    initializeChat();
    toast({
      title: t.common.loading,
      description: isRTL ? "تم بدء محادثة جديدة" : "New conversation started",
    });
  };

  const quickQuestions = [
    t.chatbot.questions.career,
    t.chatbot.questions.courses,
    t.chatbot.questions.skills,
    t.chatbot.questions.jobs
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={openChatbot}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className={`max-w-md h-[600px] flex flex-col ${isRTL ? 'font-arabic' : ''}`}>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              {t.chatbot.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex-1 flex flex-col">
            {/* Chat Messages */}
            <ScrollArea className="flex-1 mb-4">
              <div className="space-y-4 p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.type === 'bot' && <Bot className="h-4 w-4 mt-1 shrink-0" />}
                        <p className="text-sm">{message.content}</p>
                        {message.type === 'user' && <User className="h-4 w-4 mt-1 shrink-0" />}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isThinking && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-muted-foreground rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        <p className="text-sm">{t.chatbot.thinking}</p>
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-left justify-start text-xs h-auto py-2 px-3"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.chatbot.placeholder}
                className="flex-1"
                disabled={isThinking}
              />
              <Button 
                onClick={handleSendMessage} 
                size="icon"
                disabled={!inputValue.trim() || isThinking}
              >
                <Send className="h-4 w-4" />
              </Button>
              <Button 
                onClick={resetChat} 
                variant="outline" 
                size="icon"
                title={t.chatbot.restart}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}