import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SeeMoreProps {
  text: string;
  maxLength?: number;
}

const SeeMore = ({ text, maxLength = 100 }: SeeMoreProps) => {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;

  return (
    <div>
      <p className="text-sm text-muted-foreground">
        {expanded || !shouldTruncate ? text : `${text.slice(0, maxLength)}...`}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-2 text-xs text-primary hover:text-accent transition-colors font-medium"
        >
          {expanded ? (
            <>See Less <ChevronUp size={14} /></>
          ) : (
            <>See More <ChevronDown size={14} /></>
          )}
        </button>
      )}
    </div>
  );
};

export default SeeMore;
