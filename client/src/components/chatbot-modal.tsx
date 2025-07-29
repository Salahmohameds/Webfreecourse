import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, RotateCcw, GraduationCap, Code, Brain, Shield, BarChart3 } from "lucide-react";
import { 
  ChatMessage, 
  ChatStep, 
  UserInterests, 
  handleChatResponse, 
  handleSpecialization, 
  getCourseRecommendations 
} from "@/lib/chatbot-logic";
import { useToast } from "@/hooks/use-toast";

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatbotModal({ isOpen, onClose }: ChatbotModalProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm here to help you find the perfect tech career path. What interests you most?"
    }
  ]);
  const [currentStep, setCurrentStep] = useState<ChatStep>('initial');
  const [userInterests, setUserInterests] = useState<UserInterests>({});
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();

  const addMessage = (type: 'user' | 'bot', content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now(),
      type,
      content
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleInterestSelection = (interest: string) => {
    const response = handleChatResponse(interest);
    
    addMessage('user', `I'm interested in ${interest.replace('-', ' ')}`);
    
    setTimeout(() => {
      addMessage('bot', response.message);
      setCurrentStep('specialization');
      setUserInterests({ primary: interest });
    }, 1000);
  };

  const handleSpecializationSelection = (specialization: string) => {
    const updatedInterests = { ...userInterests, specialization };
    
    addMessage('user', specialization.replace('-', ' '));
    
    setTimeout(() => {
      const recommendations = getCourseRecommendations(userInterests.primary!, specialization);
      
      const recommendationMessage = `
        Perfect! Based on your interests in ${userInterests.primary?.replace('-', ' ')} and ${specialization.replace('-', ' ')}, here are my recommendations:

        **Recommended Courses:**
        ${recommendations.courses.map(course => `• ${course}`).join('\n')}

        **Career Path:** ${recommendations.career}

        **Next Steps:**
        ${recommendations.steps.map((step, index) => `${index + 1}. ${step}`).join('\n')}
      `;
      
      addMessage('bot', recommendationMessage);
      setCurrentStep('complete');
      setUserInterests(updatedInterests);
      
      toast({
        title: "Career guidance complete!",
        description: "Check out your personalized recommendations.",
      });
    }, 1500);
  };

  const sendCustomMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage('user', inputValue);
    
    setTimeout(() => {
      addMessage('bot', "Thank you for your question! For specific queries, please use the category buttons above for the best personalized recommendations. You can also reach out through our contact form for detailed assistance.");
    }, 1000);
    
    setInputValue("");
  };

  const restartChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: "Hi! I'm here to help you find the perfect tech career path. What interests you most?"
      }
    ]);
    setCurrentStep('initial');
    setUserInterests({});
  };

  const goToCourses = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('courses');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[600px] flex flex-col">
        <DialogHeader className="bg-primary text-primary-foreground p-4 -m-6 mb-4 rounded-t-lg">
          <DialogTitle className="flex items-center">
            <Bot className="mr-2 h-5 w-5" />
            AI Career Assistant
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'chat-message user ml-auto bg-primary text-primary-foreground' 
                    : 'chat-message bot bg-muted'
                }`}
              >
                <strong>{message.type === 'user' ? 'You' : 'AI Assistant'}:</strong>{' '}
                <span className="whitespace-pre-line">{message.content}</span>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="space-y-4 border-t pt-4">
          {currentStep === 'initial' && (
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => handleInterestSelection('web-development')}
                className="h-auto py-3"
              >
                <Code className="mr-2 h-4 w-4" />
                Web Development
              </Button>
              <Button
                variant="outline"
                onClick={() => handleInterestSelection('data-science')}
                className="h-auto py-3"
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Data Science
              </Button>
              <Button
                variant="outline"
                onClick={() => handleInterestSelection('ai-ml')}
                className="h-auto py-3"
              >
                <Brain className="mr-2 h-4 w-4" />
                AI & Machine Learning
              </Button>
              <Button
                variant="outline"
                onClick={() => handleInterestSelection('cybersecurity')}
                className="h-auto py-3"
              >
                <Shield className="mr-2 h-4 w-4" />
                Cybersecurity
              </Button>
            </div>
          )}

          {currentStep === 'specialization' && userInterests.primary === 'web-development' && (
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('frontend')}
                className="h-auto py-3"
              >
                Frontend Development
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('backend')}
                className="h-auto py-3"
              >
                Backend Development
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('fullstack')}
                className="h-auto py-3"
              >
                Full Stack
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('mobile')}
                className="h-auto py-3"
              >
                Mobile Development
              </Button>
            </div>
          )}

          {currentStep === 'specialization' && userInterests.primary === 'data-science' && (
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('analytics')}
                className="h-auto py-3"
              >
                Data Analytics
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('visualization')}
                className="h-auto py-3"
              >
                Data Visualization
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('statistics')}
                className="h-auto py-3"
              >
                Statistics & Research
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('business-intelligence')}
                className="h-auto py-3"
              >
                Business Intelligence
              </Button>
            </div>
          )}

          {currentStep === 'specialization' && userInterests.primary === 'ai-ml' && (
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('machine-learning')}
                className="h-auto py-3"
              >
                Machine Learning
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('deep-learning')}
                className="h-auto py-3"
              >
                Deep Learning
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('nlp')}
                className="h-auto py-3"
              >
                Natural Language Processing
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('computer-vision')}
                className="h-auto py-3"
              >
                Computer Vision
              </Button>
            </div>
          )}

          {currentStep === 'specialization' && userInterests.primary === 'cybersecurity' && (
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('ethical-hacking')}
                className="h-auto py-3"
              >
                Ethical Hacking
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('network-security')}
                className="h-auto py-3"
              >
                Network Security
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('incident-response')}
                className="h-auto py-3"
              >
                Incident Response
              </Button>
              <Button
                variant="outline"
                onClick={() => handleSpecializationSelection('compliance')}
                className="h-auto py-3"
              >
                Security Compliance
              </Button>
            </div>
          )}

          {currentStep === 'complete' && (
            <div className="flex justify-center space-x-4">
              <Button onClick={goToCourses}>
                <GraduationCap className="mr-2 h-4 w-4" />
                View Recommended Courses
              </Button>
              <Button variant="outline" onClick={restartChat}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Start Over
              </Button>
            </div>
          )}

          <div className="flex space-x-2">
            <Input
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendCustomMessage()}
            />
            <Button onClick={sendCustomMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
