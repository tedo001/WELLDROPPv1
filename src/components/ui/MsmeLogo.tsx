import * as React from "react"
import { cn } from "@/lib/utils"

interface MsmeLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

export function MsmeLogo({ size = 48, className, ...props }: MsmeLogoProps) {
  return (
    <div className={cn("flex-shrink-0", className)} {...props}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MSME - Micro, Small & Medium Enterprises"
      >
        {/* Outer circle fill */}
        <circle cx="100" cy="100" r="98" fill="#6BB8E8" />

        {/* Inner border ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#1A4FA0" strokeWidth="3.5" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="#1A4FA0" strokeWidth="1.5" />

        {/* === Ashoka Lion Capital (simplified) === */}
        {/* Platform base */}
        <rect x="82" y="112" width="36" height="5" rx="2" fill="#1A4FA0" />
        {/* Wheel (chakra) */}
        <circle cx="100" cy="117" r="4" fill="none" stroke="#1A4FA0" strokeWidth="1.5" />
        <line x1="100" y1="113" x2="100" y2="121" stroke="#1A4FA0" strokeWidth="1" />
        <line x1="96" y1="117" x2="104" y2="117" stroke="#1A4FA0" strokeWidth="1" />
        {/* Column */}
        <rect x="96" y="82" width="8" height="30" rx="1.5" fill="#1A4FA0" />
        {/* Capital top */}
        <ellipse cx="100" cy="82" rx="12" ry="4" fill="#1A4FA0" />
        {/* Left lion body */}
        <ellipse cx="86" cy="75" rx="7" ry="5" fill="#1A4FA0" />
        <circle cx="82" cy="70" r="5" fill="#1A4FA0" />
        <ellipse cx="80" cy="69" rx="3" ry="2" fill="#1A4FA0" />
        {/* Left lion mane detail */}
        <circle cx="82" cy="70" r="3.5" fill="none" stroke="#6BB8E8" strokeWidth="0.8" />
        {/* Right lion body */}
        <ellipse cx="114" cy="75" rx="7" ry="5" fill="#1A4FA0" />
        <circle cx="118" cy="70" r="5" fill="#1A4FA0" />
        <ellipse cx="120" cy="69" rx="3" ry="2" fill="#1A4FA0" />
        <circle cx="118" cy="70" r="3.5" fill="none" stroke="#6BB8E8" strokeWidth="0.8" />

        {/* "सत्यमेव जयते" */}
        <text
          x="100"
          y="130"
          textAnchor="middle"
          fill="#1A4FA0"
          fontSize="7"
          fontFamily="serif"
          fontWeight="600"
        >
          सत्यमेव जयते
        </text>

        {/* "एमएसएमई" Hindi */}
        <text
          x="100"
          y="146"
          textAnchor="middle"
          fill="#1A4FA0"
          fontSize="9"
          fontFamily="serif"
          fontWeight="700"
        >
          एमएसएमई
        </text>

        {/* "MSME" Bold English */}
        <text
          x="100"
          y="161"
          textAnchor="middle"
          fill="#1A4FA0"
          fontSize="14"
          fontFamily="sans-serif"
          fontWeight="900"
          letterSpacing="3"
        >
          MSME
        </text>

        {/* Decorative lines under MSME */}
        <line x1="68" y1="164" x2="132" y2="164" stroke="#1A4FA0" strokeWidth="1.5" />
        <line x1="75" y1="167" x2="125" y2="167" stroke="#1A4FA0" strokeWidth="1" />

        {/* Top arc text: Hindi */}
        <path id="topArc" d="M 18 100 A 82 82 0 0 1 182 100" fill="none" />
        <text fill="#1A4FA0" fontSize="9" fontFamily="serif" fontWeight="600">
          <textPath href="#topArc" startOffset="8%">
            सूक्ष्म, लघु एवं मध्यम उद्यम
          </textPath>
        </text>

        {/* Bottom arc text: English */}
        <path id="bottomArc" d="M 14 108 A 86 86 0 0 0 186 108" fill="none" />
        <text fill="#1A4FA0" fontSize="8" fontFamily="sans-serif" fontWeight="700">
          <textPath href="#bottomArc" startOffset="4%">
            Micro, Small &amp; Medium Enterprises
          </textPath>
        </text>
      </svg>
    </div>
  )
}
