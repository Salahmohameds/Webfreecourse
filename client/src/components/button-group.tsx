import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonGroupOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface ButtonGroupProps {
  options: ButtonGroupOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function ButtonGroup({ options, value, onChange, className }: ButtonGroupProps) {
  return (
    <div className={cn("inline-flex rounded-lg border border-border", className)} role="group">
      {options.map((option, index) => (
        <Button
          key={option.value}
          variant={value === option.value ? "default" : "ghost"}
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-none border-0",
            index === 0 && "rounded-l-lg",
            index === options.length - 1 && "rounded-r-lg",
            index > 0 && "border-l border-border"
          )}
        >
          {option.icon && <span className="mr-2">{option.icon}</span>}
          {option.label}
        </Button>
      ))}
    </div>
  );
}