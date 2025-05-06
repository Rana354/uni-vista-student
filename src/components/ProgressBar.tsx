
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showPercentage?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ProgressBar = ({
  value,
  max,
  label,
  showPercentage = true,
  className,
  size = "md",
}: ProgressBarProps) => {
  const percentage = Math.round((value / max) * 100);
  
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={cn("w-full", className)}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1 text-sm">
          {label && <span>{label}</span>}
          {showPercentage && <span className="text-muted-foreground">{percentage}%</span>}
        </div>
      )}
      <Progress value={percentage} className={sizeClasses[size]} />
    </div>
  );
};

export default ProgressBar;
