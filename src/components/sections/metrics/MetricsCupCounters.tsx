import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import JoesHeader from "@/components/kit/JoesHeader";
import { useKitMotion } from "@/components/kit/kitMotion";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Metric = { value: number; prefix?: string; suffix?: string; label: string };

type MetricsCupCountersProps = {
  tag?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  items?: Metric[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: Metric[] = [
  { value: 12, label: "Single origins" },
  { value: 900, suffix: "+", label: "Cups a day" },
  { value: 11, label: "Years roasting" },
  { value: 4.9, label: "Average rating" },
];

const TILTS = [-2, 1.5, -1, 2];

const columns = (count: number) => {
  if (count <= 1) return "grid-cols-1";
  if (count === 3) return "grid-cols-2 lg:grid-cols-3";
  return "grid-cols-2 lg:grid-cols-4";
};

const Counter = ({ item, play, reduce, delay }: { item: Metric; play: boolean; reduce: boolean; delay: number }) => {
  const decimals = (String(item.value).split(".")[1] ?? "").length;
  const count = useMotionValue(reduce ? item.value : 0);
  const text = useTransform(count, (v) => `${item.prefix ?? ""}${v.toFixed(decimals)}${item.suffix ?? ""}`);

  useEffect(() => {
    if (reduce) {
      count.set(item.value);
      return;
    }
    if (!play) return;
    const controls = animate(count, item.value, { duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [play, reduce, item.value, delay, count]);

  return (
    <>
      <p className="sr-only">{String(item.value)}</p>
      <motion.p aria-hidden="true" className="whitespace-nowrap text-[length:min(var(--text-h1),24cqi)] leading-none tabular-nums [font-family:var(--font-heading)]">
        {text}
      </motion.p>
    </>
  );
};

const MetricsCupCounters = ({
  tag = "By the cup",
  title = "Small numbers, made by hand",
  imageSrc = "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1800",
  imageAlt = "",
  items = DEFAULT_ITEMS,
  ariaLabel,
  className,
}: MetricsCupCountersProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const reduce = Boolean(useReducedMotion());
  const kit = useKitMotion();
  const play = useInView(listRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "center center"] });
  const grow = useTransform(scrollYProgress, (p) => 0.84 + Math.min(1, Math.max(0, p)) * 0.16);
  const zoom = useTransform(scrollYProgress, (p) => 1.15 - Math.min(1, Math.max(0, p)) * 0.15);

  return (
    <section aria-label={ariaLabel ?? title ?? "Key figures"} className={cn("relative overflow-x-clip py-20 text-foreground", className)}>
      <div className="flex w-full max-w-6xl flex-col gap-8 px-6 mx-auto md:gap-10">
        {(tag || title) && <JoesHeader tag={tag} title={title} />}
        <div>
        <motion.div ref={frameRef} style={{ scale: reduce ? 1 : grow }} className="kit-card p-1 will-change-transform lg:p-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-image)] lg:aspect-[21/9]">
            <motion.div style={{ scale: reduce ? 1 : zoom }} className="absolute inset-0 will-change-transform">
              <ImageScrollParallax imageSrc={imageSrc} imageAlt={imageAlt} strength={0.12} className="aspect-auto h-full rounded-none" />
            </motion.div>
          </div>
        </motion.div>

        <ul ref={listRef} className={cn("relative z-10 mt-[var(--gap)] grid gap-[var(--gap)] lg:-mt-[clamp(3.5rem,7vw,6rem)] lg:px-[clamp(1.5rem,4vw,3.5rem)]", columns(items.length))}>
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={reduce ? false : { opacity: 0, y: 48, scale: 0.92, rotate: TILTS[index % TILTS.length] }}
              animate={play || reduce ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : undefined}
              transition={{ duration: kit.slow, ease: kit.ease, delay: index * 0.06 }}
              className="kit-card flex min-w-0 flex-col items-center gap-2 px-3 py-[clamp(1.25rem,2.4vw,2rem)] text-center [container-type:inline-size]"
            >
              <Counter item={item} play={play} reduce={reduce} delay={0.15 + index * 0.08} />
              <p className="text-balance text-[length:var(--text-small)] leading-[1.35] text-muted-foreground [overflow-wrap:anywhere]">{item.label}</p>
            </motion.li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
};

export default MetricsCupCounters;
