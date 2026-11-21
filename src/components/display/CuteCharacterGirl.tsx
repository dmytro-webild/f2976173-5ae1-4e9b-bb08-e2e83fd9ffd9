import { motion } from "motion/react";

interface CuteCharacterGirlProps {
  className?: string;
  bubbleText?: string;
}

export default function CuteCharacterGirl({
  className = "",
  bubbleText = "Why Little Leaf? Let me show you! ✨🍃",
}: CuteCharacterGirlProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col items-center justify-center p-4 ${className}`}
    >
      {/* Speech Bubble pointing to girl */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative mb-2 px-4 py-2 bg-accent text-accent-foreground rounded-2xl shadow-lg border border-primary/20 text-xs sm:text-sm font-semibold tracking-wide text-center max-w-[220px]"
      >
        <span>{bubbleText}</span>
        {/* Bubble arrow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-accent" />
      </motion.div>

      {/* Character SVG */}
      <svg
        viewBox="0 0 240 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 sm:w-56 md:w-64 h-auto drop-shadow-xl"
        aria-label="Cute character girl pointing at the features"
      >
        {/* Background Aura Glow */}
        <circle cx="120" cy="140" r="100" fill="currentColor" className="text-primary/10" />

        {/* Hair (Back) */}
        <path
          d="M60 110 C50 160 45 220 70 260 C75 240 80 200 85 160 C90 200 95 240 100 260 C125 220 120 160 110 110 Z"
          fill="#4A2A20"
        />
        <path
          d="M130 110 C120 160 115 220 140 260 C145 240 150 200 155 160 C160 200 165 240 170 260 C195 220 190 160 180 110 Z"
          fill="#3B2018"
        />

        {/* Body & Apron */}
        <path d="M80 170 C75 210 70 270 70 270 L170 270 C170 270 165 210 160 170 Z" fill="#6B2433" />
        {/* Shirt Collar */}
        <path d="M95 170 Q120 185 145 170 L140 160 Q120 170 100 160 Z" fill="#FAFAFA" />
        {/* Apron Bib */}
        <path d="M95 178 L145 178 L150 270 L90 270 Z" fill="#8B3A4A" />
        {/* Little Leaf Badge on Apron */}
        <circle cx="120" cy="205" r="14" fill="#3D6B4F" />
        <path d="M120 196 C114 200 112 212 120 214 C128 212 126 200 120 196 Z" fill="#A8E0B8" />
        <path d="M120 202 L120 212" stroke="#3D6B4F" strokeWidth="1.5" strokeLinecap="round" />

        {/* Head & Neck */}
        <rect x="110" y="145" width="20" height="20" rx="6" fill="#FCE2D4" />
        <ellipse cx="120" cy="115" rx="45" ry="42" fill="#FCE2D4" />

        {/* Cute Ears */}
        <ellipse cx="74" cy="118" rx="7" ry="9" fill="#FCE2D4" />
        <ellipse cx="166" cy="118" rx="7" ry="9" fill="#FCE2D4" />

        {/* Blushing Cheeks */}
        <ellipse cx="96" cy="125" rx="9" ry="5" fill="#FF9EAA" opacity="0.6" />
        <ellipse cx="144" cy="125" rx="9" ry="5" fill="#FF9EAA" opacity="0.6" />

        {/* Anime Eyes */}
        {/* Left Eye */}
        <ellipse cx="98" cy="112" rx="7" ry="10" fill="#3A1820" />
        <circle cx="96" cy="109" r="3" fill="#FFFFFF" />
        <circle cx="100" cy="115" r="1.5" fill="#FFFFFF" />
        <path d="M90 103 Q98 100 106 104" stroke="#3A1820" strokeWidth="2.5" strokeLinecap="round" />

        {/* Right Eye */}
        <ellipse cx="142" cy="112" rx="7" ry="10" fill="#3A1820" />
        <circle cx="140" cy="109" r="3" fill="#FFFFFF" />
        <circle cx="144" cy="115" r="1.5" fill="#FFFFFF" />
        <path d="M134 104 Q142 100 150 103" stroke="#3A1820" strokeWidth="2.5" strokeLinecap="round" />

        {/* Happy Eyebrows */}
        <path d="M91 97 Q98 92 105 96" stroke="#4A2A20" strokeWidth="2" strokeLinecap="round" />
        <path d="M135 96 Q142 92 149 97" stroke="#4A2A20" strokeWidth="2" strokeLinecap="round" />

        {/* Cheerful Nose & Mouth */}
        <circle cx="120" cy="120" r="1.5" fill="#D98A7B" />
        <path d="M113 128 Q120 136 127 128" stroke="#3A1820" strokeWidth="2.5" strokeLinecap="round" fill="#E86A78" />

        {/* Hair (Front & Bangs) */}
        <path
          d="M75 110 C75 75 95 65 120 65 C145 65 165 75 165 110 C165 85 155 72 120 72 C85 72 75 85 75 110 Z"
          fill="#5C3426"
        />
        {/* Cute Bangs */}
        <path d="M76 100 Q90 115 102 98 Q115 118 126 97 Q138 116 150 97 Q160 112 164 100 Q150 72 120 72 Q90 72 76 100 Z" fill="#4A2A20" />

        {/* Leaf Hair Clip */}
        <path d="M85 78 C78 72 75 60 85 58 C95 60 92 72 85 78 Z" fill="#4CAF50" />
        <path d="M85 78 C92 72 95 60 85 58 C75 60 78 72 85 78 Z" fill="#81C784" />
        <circle cx="85" cy="78" r="3" fill="#FFD54F" />

        {/* Left Arm (Holding Little Leaf Coffee Cup) */}
        <path d="M80 175 Q60 195 72 215" stroke="#FCE2D4" strokeWidth="12" strokeLinecap="round" />
        {/* Coffee Cup */}
        <rect x="58" y="205" width="22" height="26" rx="4" fill="#FFFFFF" stroke="#3A1820" strokeWidth="1.5" />
        <path d="M60 212 L78 212" stroke="#3D6B4F" strokeWidth="4" />
        {/* Steam */}
        <path d="M64 198 Q67 194 65 190" stroke="#CF8F98" strokeWidth="2" strokeLinecap="round" />
        <path d="M72 200 Q75 196 73 192" stroke="#CF8F98" strokeWidth="2" strokeLinecap="round" />

        {/* Right Arm (Extended POINTING Finger 👉 directly right!) */}
        <g>
          {/* Upper arm extending right */}
          <path d="M158 175 Q185 170 205 170" stroke="#FCE2D4" strokeWidth="14" strokeLinecap="round" />
          {/* Hand & Pointing Index Finger */}
          <ellipse cx="206" cy="170" rx="7" ry="7" fill="#FCE2D4" />
          {/* Index Finger pointing right */}
          <rect x="206" y="166" width="22" height="8" rx="4" fill="#FCE2D4" />
          {/* Thumb tucked up */}
          <ellipse cx="204" cy="164" rx="4" ry="4" fill="#FCE2D4" />

          {/* Sparkle Motion Lines at Finger Tip */}
          <path d="M232 170 L240 170" stroke="#FFD54F" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M230 162 L236 157" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round" />
          <path d="M230 178 L236 183" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round" />
          <circle cx="236" cy="170" r="2" fill="#FFD54F" />
        </g>
      </svg>
    </motion.div>
  );
}
