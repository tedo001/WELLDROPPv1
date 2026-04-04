import * as React from "react"
import { cn } from "@/lib/utils"

interface MsmeLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

export function MsmeLogo({ size = 48, className, ...props }: MsmeLogoProps) {
  return (
    <div 
      className={cn("flex-shrink-0 relative overflow-hidden rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.08)] bg-white", className)} 
      style={{ width: size, height: size }} 
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MSME - Micro, Small & Medium Enterprises"
      >
        <defs>
          <clipPath id="circle-clip">
            <circle cx="50" cy="50" r="50" />
          </clipPath>
        </defs>

        {/* Pixel-perfect rendering of the exact MSME crest, clipped into a flawless transparent logo */}
        <image 
          href="/msme-logo.png" 
          x="-1.5" 
          y="-1.5" 
          width="103" 
          height="103" 
          clipPath="url(#circle-clip)" 
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Crisp vector ring to seal the logo edge smoothly */}
        <circle cx="50" cy="50" r="49.5" fill="none" stroke="#003585" strokeWidth="1.5" strokeOpacity="0.8" />
      </svg>
    </div>
  )
}
