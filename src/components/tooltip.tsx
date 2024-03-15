import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  tooltip: string;
  className?: string;
}

export default function Tooltip({
  children,
  tooltip,
  className,
}: TooltipProps) {
  return (
    <div className={`relative group ${className}`}>
      {children}
      <div className="opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all z-10 transform -translate-x-1/2 absolute -top-8 left-1/2 bg-background text-white text-xs p-2 rounded-sm border-1.5 border-card-stroke">
        {tooltip}
      </div>
    </div>
  );
}
