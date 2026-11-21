import { motion } from "motion/react";
import Media from "@/components/kit/Media";

interface CuteCharacterGirlProps {
  className?: string;
  bubbleText?: string;
  imageSrc?: string;
}

export default function CuteCharacterGirl({
  className = "",
  bubbleText = "Why Little Leaf? Look right here! ✨🍃",
  imageSrc = "https://storage.googleapis.com/webild/users/user_3LVkA0HszNibY6F0jzfi6VGGzRq/uploaded-1795293720922-6nun86nm.jpg",
}: CuteCharacterGirlProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col items-center justify-center p-4 ${className}`}
    >
      {/* Speech Bubble pointing right to section details */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative mb-3 px-4 py-2 bg-accent text-accent-foreground rounded-2xl shadow-lg border border-primary/20 text-xs sm:text-sm font-semibold tracking-wide text-center max-w-[240px] z-10"
      >
        <span>{bubbleText}</span>
        {/* Bubble arrow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-accent" />
      </motion.div>

      {/* Character Image Container with aura & badge */}
      <div className="relative group">
        {/* Background Aura Glow */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-accent/30 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Character Card Frame */}
        <div className="relative p-2 card rounded-3xl overflow-hidden shadow-xl border border-primary/20 bg-card/90 backdrop-blur-md">
          <div className="relative w-48 sm:w-56 md:w-64 aspect-3/4 rounded-2xl overflow-hidden bg-foreground/5">
            <Media
              src={imageSrc}
              alt="Little Leaf Character"
              className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Leaf Badge overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-background/90 backdrop-blur-md border border-primary/20 rounded-full shadow-md flex items-center gap-1.5 text-xs font-medium text-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Little Leaf</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
