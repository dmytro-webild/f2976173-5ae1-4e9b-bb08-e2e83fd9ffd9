import WordByWordReveal from "@/components/animation/WordByWordReveal";
import ParallaxImage from "@/components/animation/ParallaxImage";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import AvatarGroup from "@/components/display/AvatarGroup";

type FeatureItem = {
  title: string;
  description: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

type BottomFeatureItem = FeatureItem & {
  primaryButton: { text: string; href: string };
  avatarsSrc?: string[];
  avatarsLabel?: string;
};

type FeaturesGridSplitLargeProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  topItems: [FeatureItem, FeatureItem];
  bottomItem: BottomFeatureItem;
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const FeaturesGridSplitLarge = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  topItems,
  bottomItem,
  textAnimation,
}: FeaturesGridSplitLargeProps) => {
  return (
    <section aria-label="Features section" className="flex flex-col gap-8 md:gap-10 py-20">
      <div className="flex flex-col items-center w-full max-w-6xl px-6 mx-auto gap-2">
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

        {(primaryButton || secondaryButton) && (
          <AppearOnScroll variant="slide-up" delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{primaryButton.text}</a>}
              {secondaryButton && <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground">{secondaryButton.text}</a>}
            </div>
          </AppearOnScroll>
        )}
      </div>

      <div className="w-full max-w-6xl px-6 mx-auto flex flex-col gap-3 xl:gap-3.5 2xl:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-3.5 2xl:gap-4">
          {topItems.map((item, index) => (
            <AppearOnScroll key={item.title} variant="slide-up" delay={index * 0.08} className="h-full">
              <div className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 h-full card rounded">
                <div className="relative aspect-square rounded overflow-hidden bg-foreground/5">
                  <ParallaxImage src={item.imageSrc} videoSrc={item.videoSrc} />
                </div>
                <div className="flex flex-col gap-2 p-3 xl:p-3.5 2xl:p-4">
                  <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-tight text-balance">{item.title}</h3>
                  <p className="text-base md:text-lg 2xl:text-xl leading-snug text-balance">{item.description}</p>
                </div>
              </div>
            </AppearOnScroll>
          ))}
        </div>

        <AppearOnScroll variant="slide-up">
          <div className="flex flex-col md:flex-row gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 card rounded">
            <div className="flex flex-col gap-2 justify-center md:w-1/2 p-3 xl:p-3.5 2xl:p-4">
              <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-tight text-balance">{bottomItem.title}</h3>
              <p className="text-base md:text-lg 2xl:text-xl leading-snug text-balance">{bottomItem.description}</p>
              <div className="flex flex-wrap items-center gap-3 mt-2 md:mt-3">
                <a href={bottomItem.primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{bottomItem.primaryButton.text}</a>
                {bottomItem.avatarsSrc && bottomItem.avatarsSrc.length > 0 && (
                  <AvatarGroup avatarsSrc={bottomItem.avatarsSrc} size="md" label={bottomItem.avatarsLabel} />
                )}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:w-1/2 rounded overflow-hidden bg-foreground/5">
              <ParallaxImage src={bottomItem.imageSrc} videoSrc={bottomItem.videoSrc} />
            </div>
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default FeaturesGridSplitLarge;
