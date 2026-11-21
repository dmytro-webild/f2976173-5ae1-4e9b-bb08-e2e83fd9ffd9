import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import ParallaxImage from "@/components/animation/ParallaxImage";
import AutoFillText from "@/components/animation/AutoFillText";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FloatingCard = {
  name: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const CARD_CONFIG = [
  { position: "left", bottom: "30%", aspect: "aspect-3/4", movement: "-100%" },
  { position: "right", bottom: "14%", aspect: "aspect-square", movement: "-75%" },
] as const;

type HeroBillboardBrandFloatingCardsProps = {
  brand: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  floatingCards: [FloatingCard, FloatingCard];
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroBillboardBrandFloatingCards = ({
  brand,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  floatingCards,
  textAnimation,
}: HeroBillboardBrandFloatingCardsProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const leftCardY = useTransform(scrollYProgress, [0, 1], ["0%", CARD_CONFIG[0].movement]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], ["0%", CARD_CONFIG[1].movement]);
  const cardYTransforms = [leftCardY, rightCardY];

  return (
    <section ref={heroRef} aria-label="Hero section" className="relative overflow-x-clip pt-25 pb-20 md:pt-30">
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          style={{ y: cardYTransforms[i], bottom: CARD_CONFIG[i].bottom }}
          className={cn(
            "absolute z-10 w-28 xl:w-48 2xl:w-52 p-1 xl:p-2 2xl:p-3 card rounded overflow-hidden shadow-xl",
            CARD_CONFIG[i].position === "left"
              ? "left-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] translate-x-1/4 lg:translate-x-0 lg:left-[max(5rem,calc((100%-72rem)/2-2rem))] xl:left-[max(7.5rem,calc((100%-72rem)/2-4.5rem))] 2xl:left-[max(8rem,calc((100%-72rem)/2-5rem))]"
              : "right-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] -translate-x-1/4 lg:translate-x-0 lg:right-[max(5rem,calc((100%-72rem)/2-2rem))] xl:right-[max(7.5rem,calc((100%-72rem)/2-4.5rem))] 2xl:right-[max(8rem,calc((100%-72rem)/2-5rem))]"
          )}
        >
          <div className="relative">
            <Media src={card.imageSrc} alt="" className={cn("w-full object-cover rounded", CARD_CONFIG[i].aspect)} />
            <div className="absolute bottom-1 xl:bottom-2 2xl:bottom-3 inset-x-1 xl:inset-x-2 2xl:inset-x-3 card rounded p-1 xl:p-2 2xl:p-3">
              <h3 className="text-xl md:text-2xl 2xl:text-3xl text-center truncate">{card.name}</h3>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="flex flex-col gap-10 md:gap-12 w-full max-w-6xl px-6 mx-auto">
        <div className="flex flex-col items-end gap-5">
          <AutoFillText className="w-full font-semibold" paddingY="">{brand}</AutoFillText>

          <WordByWordReveal
            text={description}
            variant={textAnimation}
            tag="p"
            className="w-full md:w-1/2 text-base md:text-lg 2xl:text-xl leading-snug text-balance text-right"
          />

          <AppearOnScroll variant="slide-up" delay={0.15}>
            <div className="flex flex-wrap justify-end gap-3 mt-1 md:mt-2">
              <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{primaryButton.text}</a>
              <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground">{secondaryButton.text}</a>
            </div>
          </AppearOnScroll>
        </div>

        <AppearOnScroll variant="slide-up" delay={0.2} className="relative w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden">
          <div className="relative w-full h-full aspect-4/5 md:aspect-video overflow-hidden rounded">
            <ParallaxImage priority src={imageSrc} videoSrc={videoSrc} />
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default HeroBillboardBrandFloatingCards;
