import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Media from "@/components/kit/Media";
import LazyVideo from "@/components/kit/LazyVideo";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }
  }
};

type FilterItem = {
  name: string;
  category: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

type FeaturesFilterGridProps = {
  tag: string;
  title: string;
  description: string;
  categories: string[];
  items: FilterItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
  allLabel?: string;
};

const FeaturesFilterGrid = ({
  tag,
  title,
  description,
  categories,
  items,
  textAnimation,
  allLabel = "All",
}: FeaturesFilterGridProps) => {
  const allCategories = [allLabel, ...categories];
  const [activeFilter, setActiveFilter] = useState<string>(allLabel);

  const filteredItems = items.filter(item =>
    activeFilter === allLabel || item.category === activeFilter
  );

  const handleFilter = (category: string) => {
    if (category === activeFilter) return;
    setActiveFilter(category);
  };

  return (
    <section aria-label="Features section" className="py-20">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-2 w-full max-w-6xl px-6 mx-auto">
          <AppearOnScroll variant="fade">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>
          </AppearOnScroll>

          <WordByWordReveal
            text={title}
            variant={textAnimation}
            tag="h2"
            className="md:max-w-8/10 text-4xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <WordByWordReveal
            text={description}
            variant={textAnimation}
            tag="p"
            className="md:max-w-7/10 text-base md:text-lg 2xl:text-xl leading-snug text-center text-balance"
          />

          <AppearOnScroll variant="slide-up" delay={0.15}>
            <div role="group" className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {allCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={activeFilter === category}
                  onClick={() => handleFilter(category)}
                  className="relative flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer card overflow-hidden"
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-primary rounded-lg transition-opacity duration-300",
                      activeFilter === category ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span className={cn(
                    "relative z-10 transition-colors duration-300",
                    activeFilter === category ? "text-primary-foreground" : ""
                  )}>
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </AppearOnScroll>
        </div>

        <div className="w-full max-w-6xl px-6 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-live="polite"
              role="list"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-4 2xl:gap-5"
            >
              {filteredItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants} role="listitem">
                  <div className="p-1 xl:p-2 2xl:p-3 card rounded overflow-hidden shadow-xl">
                    <div className="relative">
                      {item.videoSrc ? (
                        <LazyVideo src={item.videoSrc} className="w-full aspect-3/4 object-cover rounded" />
                      ) : (
                        <Media src={item.imageSrc} alt="" loading="lazy" decoding="async" className="w-full aspect-3/4 object-cover rounded" />
                      )}
                      <div className="absolute bottom-1 xl:bottom-2 2xl:bottom-3 inset-x-1 xl:inset-x-2 2xl:inset-x-3 card rounded p-1 xl:p-2 2xl:p-3">
                        <h4 className="text-xl md:text-2xl 2xl:text-3xl text-center truncate">{item.name}</h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturesFilterGrid;
