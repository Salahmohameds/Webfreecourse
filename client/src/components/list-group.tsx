import { cn } from "@/lib/utils";

interface ListGroupItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

interface ListGroupProps {
  items: ListGroupItem[];
  className?: string;
}

export default function ListGroup({ items, className }: ListGroupProps) {
  return (
    <div className={cn("border border-border rounded-lg overflow-hidden", className)}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "flex items-center justify-between p-4 border-b border-border last:border-b-0 transition-colors",
            item.active && "bg-primary/10 border-primary",
            item.disabled && "opacity-50 cursor-not-allowed",
            !item.disabled && "hover:bg-muted/50 cursor-pointer"
          )}
          onClick={!item.disabled ? item.onClick : undefined}
        >
          <div className="flex items-center space-x-3">
            {item.icon && (
              <div className={cn("flex-shrink-0", item.active && "text-primary")}>
                {item.icon}
              </div>
            )}
            <div>
              <h6 className={cn("font-medium", item.active && "text-primary")}>
                {item.label}
              </h6>
              {item.description && (
                <p className="text-sm text-muted-foreground">{item.description}</p>
              )}
            </div>
          </div>
          
          {item.badge && (
            <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {item.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}