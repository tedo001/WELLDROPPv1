import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "horizontal" | "vertical" | "mark"
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, variant = "horizontal", size = "md", ...props }: LogoProps) {
  const isVertical = variant === "vertical"
  const isMarkOnly = variant === "mark"

  // Image icon sizes
  const iconSizes = {
    sm: 40,
    md: 56,
    lg: 120,
  }

  const iconDim = iconSizes[size]

  // Text sizes - added responsive mapping
  const textClasses = {
    sm: "text-lg md:text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-4xl md:text-5xl",
  }

  const markContent = (
    <div
      className="relative flex items-center justify-center flex-shrink-0"
      style={{ width: "clamp(32px, 5vw, " + iconDim + "px)", height: "clamp(32px, 5vw, " + iconDim + "px)" }}
    >
      <Image
        src="/welldropp-mark.png"
        alt="WellDropp Logo Mark"
        fill
        className="object-contain"
        style={{
          filter: "drop-shadow(0 0 8px rgba(0, 230, 118, 0.2))",
        }}
        priority
      />
    </div>
  )

  if (isMarkOnly) {
    return (
      <div className={cn("flex flex-shrink-0", className)} {...props}>
        {markContent}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex flex-shrink-0",
        isVertical ? "flex-col items-center gap-4 text-center" : "items-center gap-2 md:gap-3",
        className
      )}
      {...props}
    >
      {markContent}

      <div className={cn(
        "font-headline font-black tracking-tighter shrink-0 select-none",
        textClasses[size]
      )}>
        <span className="text-foreground">Well</span><span className="text-primary">Dropp</span>
      </div>
    </div>
  )
}
