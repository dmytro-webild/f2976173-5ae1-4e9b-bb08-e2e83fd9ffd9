import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useKitMotion } from "@/components/kit/kitMotion";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import JoesHeader from "@/components/kit/JoesHeader";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Plan = {
  title: string;
  price: string;
  period?: string;
  description?: string;
  features?: string[];
  imageSrc: string;
  imageAlt?: string;
  button?: { text: string; href?: string };
};

type PricingBeanClubProps = {
  tag?: string;
  title?: string;
  description?: string;
  items?: Plan[];
  ariaLabel?: string;
  className?: string;
};

const columns = (count: number) => {
  if (count <= 1) return "grid-cols-1 max-w-[26rem] mx-auto";
  if (count === 2) return "grid-cols-1 lg:grid-cols-2 max-w-[54rem] mx-auto";
  if (count === 4) return "grid-cols-1 lg:grid-cols-2 xl:grid-cols-4";
  return "grid-cols-1 lg:grid-cols-3";
};

const PlanCard = ({ plan, index, kit, reduce }: { plan: Plan; index: number; kit: ReturnType<typeof useKitMotion>; reduce: boolean | null }) => {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const speed = index % 2 === 0 ? 24 : 40;
  const drift = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const tilt = index % 2 === 0 ? -3 : 3;

  return (
    <li ref={ref} className="flex min-w-0">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 48, scale: 0.92, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: kit.slow, ease: kit.ease, delay: index * 0.06 }}
        className="kit-card flex w-full flex-col items-center px-[clamp(1.25rem,2vw,1.75rem)] pb-[clamp(1.25rem,2vw,1.75rem)] text-center"
      >
        <motion.div style={{ y: reduce ? 0 : drift, rotate: tilt }} className="kit-card -mt-[4.5rem] w-[9rem] p-1 will-change-transform lg:p-1.5">
          <ImageScrollParallax imageSrc={plan.imageSrc} imageAlt={plan.imageAlt ?? ""} strength={0.15} className="aspect-square rounded-[var(--radius-image)]" />
        </motion.div>
        <h3 className="mt-5 text-balance text-[length:var(--text-h3)] [overflow-wrap:anywhere]">{plan.title}</h3>
        <div className="mt-2 flex items-baseline justify-center gap-2">
          <p className="whitespace-nowrap text-[length:var(--text-h1)] leading-none [font-family:var(--font-heading)]">{plan.price}</p>
          {plan.period && <p className="whitespace-nowrap text-[length:var(--text-small)] text-muted-foreground">{plan.period}</p>}
        </div>
        {plan.description && <p className="mt-3 max-w-[22rem] text-balance text-[length:var(--text-body)] leading-[1.45] text-muted-foreground">{plan.description}</p>}
        {plan.features && plan.features.length > 0 && (
          <ul className="mt-5 flex w-full flex-col gap-2.5 border-t border-foreground/10 pt-5 text-left">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <div className="mt-[0.2em] flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </div>
                <p className="min-w-0 text-[length:var(--text-body)] leading-[1.45] [overflow-wrap:anywhere]">{feature}</p>
              </li>
            ))}
          </ul>
        )}
        {plan.button && (
          <div className="mt-auto w-full pt-7">
            <a href={plan.button.href ?? "#"} className="btn-primary w-full">
              <p className="btn-label">{plan.button.text}</p>
            </a>
          </div>
        )}
      </motion.div>
    </li>
  );
};

const PricingBeanClub = ({
  tag = "Bean club",
  title = "Fresh roasted beans at your door",
  description = "Pick a bag size, we roast on Monday and ship the same day. Pause or skip any month.",
  items = [
    {
      title: "Taster",
      price: "$18",
      period: "/ month",
      description: "One 12 oz bag of this month's single origin.",
      features: ["Roasted to order", "Tasting notes card", "Free local delivery"],
      imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Roasted coffee beans",
      button: { text: "Join Taster", href: "#contact" },
    },
    {
      title: "Regular",
      price: "$34",
      period: "/ month",
      description: "Two bags, our house blend plus a rotating origin.",
      features: ["Roasted to order", "Choose your grind", "10% off at the bar"],
      imageSrc: "https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Bag of coffee beans",
      button: { text: "Join Regular", href: "#contact" },
    },
    {
      title: "Roaster's pick",
      price: "$52",
      period: "/ month",
      description: "Three bags of small lots, picked by our head roaster.",
      features: ["Limited micro lots", "Brew guide for each", "Cupping night invite"],
      imageSrc: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageAlt: "Coffee beans in a roaster",
      button: { text: "Join Roaster's pick", href: "#contact" },
    },
  ],
  ariaLabel,
  className,
}: PricingBeanClubProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();

  return (
    <section aria-label={ariaLabel ?? title} className={cn("relative py-20", className)}>
      <div className="flex w-full max-w-6xl flex-col gap-8 px-6 mx-auto md:gap-10">
        <JoesHeader tag={tag} title={title} description={description} />
        <ul className={cn("mt-[4.5rem] grid gap-x-[var(--gap)] gap-y-[calc(4.5rem+var(--gap)+1rem)]", columns(items.length))}>
          {items.map((plan, index) => (
            <PlanCard key={index} plan={plan} index={index} kit={kit} reduce={reduce} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PricingBeanClub;
