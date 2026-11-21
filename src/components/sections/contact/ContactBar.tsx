import type { LucideIcon } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";

type ContactOption = {
  icon: LucideIcon;
  label: string;
  href: string;
};

type ContactBarProps = {
  tag: string;
  title: string;
  options: ContactOption[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const ContactOptionButton = ({ icon: Icon, label, href }: ContactOption) => {
  return (
    <a
      href={href}
      className="flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className="size-22 md:size-16 lg:size-24 xl:size-28 2xl:size-30 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
        <Icon className="size-4/10 text-primary-foreground" strokeWidth={1.5} />
      </div>
      <p className="text-sm md:text-base text-foreground/60 group-hover:text-foreground transition-colors">{label}</p>
    </a>
  );
};

const ContactBar = ({ tag, title, options, textAnimation }: ContactBarProps) => {
  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <AppearOnScroll variant="slide-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 card rounded p-6 md:p-10">
            <div className="flex flex-col gap-2 md:max-w-1/2">
              <AppearOnScroll variant="fade">
                <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                  <p>{tag}</p>
                </div>
              </AppearOnScroll>
              <WordByWordReveal
                text={title}
                variant={textAnimation}
                tag="h2"
                className="text-4xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance"
              />
            </div>
            <div className="flex items-center gap-6 md:gap-10">
              {options.map((opt) => (
                <ContactOptionButton key={opt.label} {...opt} />
              ))}
            </div>
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default ContactBar;
