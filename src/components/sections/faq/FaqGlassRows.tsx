import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import JoesHeader from "@/components/kit/JoesHeader";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type FaqItem = { title: string; description: string };

type FaqGlassRowsProps = {
  tag?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLabel?: string;
  items?: FaqItem[];
  ariaLabel?: string;
  className?: string;
};

const FaqGlassRows = ({
  tag = "Questions",
  title = "Good to know before you visit",
  description = "Still curious? Ask the barista.",
  imageSrc = "https://images.pexels.com/photos/4349775/pexels-photo-4349775.jpeg?auto=compress&cs=tinysrgb&w=900",
  imageAlt = "Barista pouring milk into a latte",
  imageLabel = "Morning pour",
  items = [
    { title: "Do you have dairy free milk?", description: "Yes. Oat, almond and soy are always on the bar at no extra charge." },
    { title: "Can I book the shop for an event?", description: "We host private events for up to 40 guests after 5pm. Send us the date and we will put together a menu." },
    { title: "Do you cater offices?", description: "We bring a pop up espresso bar or brewed coffee boxes with pastries, anywhere in Portland." },
    { title: "How does the bean club work?", description: "Pick a plan, we roast on Monday and ship the same day. Pause or skip any month from your account." },
    { title: "Is there wifi and power?", description: "Free wifi and plenty of outlets along the window bar. We ask laptops to share tables at lunch." },
  ],
  ariaLabel,
  className,
}: FaqGlassRowsProps) => {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();
  const reduce = useReducedMotion();
  const kit = useKitMotion();

  return (
    <section aria-label={ariaLabel ?? title} className={cn("relative overflow-x-clip py-20", className)}>
      <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 w-full max-w-6xl px-6 mx-auto">
        <div className="flex flex-col items-start lg:sticky lg:top-[clamp(5rem,12svh,8rem)] lg:col-span-5 lg:self-start">
          <JoesHeader align="left" tag={tag} title={title} description={description} />
          {imageSrc && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 48, scale: 0.92, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: kit.slow, ease: kit.ease, delay: 0.2 }}
              className="kit-card mt-[clamp(1.5rem,3vw,2.5rem)] hidden w-[min(100%,20rem)] p-2 lg:block"
            >
              <div className="relative">
                <ImageScrollParallax imageSrc={imageSrc} imageAlt={imageAlt} strength={0.18} className="aspect-[4/5] rounded-[var(--radius-image)]" />
                {imageLabel && (
                  <div className="kit-card absolute inset-x-2 bottom-2 rounded-[calc(var(--radius-image)-0.375rem)] px-2 py-1">
                    <p className="truncate text-center text-[length:var(--text-h3)] [font-family:var(--font-heading)]">{imageLabel}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
        <ul className="flex flex-col gap-3 lg:col-span-7">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <motion.li
                key={index}
                initial={reduce ? false : { opacity: 0, y: 48, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{ duration: kit.slow, ease: kit.ease, delay: Math.min(index, 4) * 0.06 }}
                className="card rounded"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${uid}-${index}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-[clamp(1rem,2vw,1.5rem)] text-left"
                >
                  <p className="min-w-0 text-[length:var(--text-body-lg)] font-medium leading-[1.35] [overflow-wrap:anywhere]">{item.title}</p>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: kit.fast, ease: kit.ease }}
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
                  >
                    <Plus className="size-4" strokeWidth={2.5} aria-hidden="true" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${uid}-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : kit.base, ease: kit.ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[40rem] px-[clamp(1rem,2vw,1.5rem)] pb-[clamp(1rem,2vw,1.5rem)] text-[length:var(--text-body)] leading-[1.55] text-muted-foreground">{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FaqGlassRows;
