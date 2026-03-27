import * as React from "react"
import { cn } from "@/lib/utils"

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "horizontal" | "vertical" | "mark"
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, variant = "horizontal", size = "md", ...props }: LogoProps) {
  const iconSizes = {
    sm: 32,
    md: 48,
    lg: 120
  }

  const iconDim = iconSizes[size]

  return (
    <div 
      className={cn(
        "flex", 
        variant === "vertical" ? "flex-col items-center gap-4" : "items-center gap-3",
        className
      )}
      {...props}
    >
      <svg
        width={iconDim}
        height={iconDim}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* The D shape (Primary / Lime Green) */}
        <path
          d="M 30 10 H 60 C 85 10 95 30 95 50 C 95 70 85 90 60 90 H 40 L 55 75 H 60 C 75 75 80 65 80 50 C 80 35 75 25 60 25 H 45 L 30 10 Z"
          className="fill-primary"
        />
        
        {/* The W shape (Foreground / Black) */}
        <path
          d="M 12 10 V 90 L 45 55 L 75 85 L 90 70 L 45 25 L 28 42 V 10 Z"
          className="fill-foreground drop-shadow-md"
        />
      </svg>
      
      {variant !== "mark" && (
        <div className={cn(
          "font-headline font-black tracking-tighter shrink-0",
          size === "sm" ? "text-xl" : size === "lg" ? "text-5xl" : "text-3xl"
        )}>
          <span className="text-foreground">Well</span><span className="text-primary">Dropp</span>
        </div>
      )}
    </div>
  )
}
