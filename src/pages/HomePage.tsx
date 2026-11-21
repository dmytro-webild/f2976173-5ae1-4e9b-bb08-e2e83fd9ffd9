import HeroBillboardBrandFloatingCards from "@/components/sections/hero/HeroBillboardBrandFloatingCards";
import FeaturesGridSplitLarge from "@/components/sections/features/FeaturesGridSplitLarge";
import FeaturesFilterGrid from "@/components/sections/features/FeaturesFilterGrid";
import PricingBeanClub from "@/components/sections/pricing/PricingBeanClub";
import MetricsCupCounters from "@/components/sections/metrics/MetricsCupCounters";
import FaqGlassRows from "@/components/sections/faq/FaqGlassRows";
import ContactBar from "@/components/sections/contact/ContactBar";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";
import LoaderSwirl from "@/components/loaders/LoaderSwirl";
import { Mail, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <AuroraBackground
        className="fixed"
      />

      <LoaderSwirl

      />

      <div id="hero" data-webild-section="HeroBillboardBrandFloatingCards" data-webild-section-id="HeroBillboardBrandFloatingCards-1" data-section="hero">
        <HeroBillboardBrandFloatingCards
          textAnimation="fade-blur"
          brand="Roast Haven"
          description="We source organic beans globally and roast them in small batches to order, bringing peak flavor straight to your door."
          primaryButton={{
            text: "Explore Blends",
            href: "#menu"
          }}
          secondaryButton={{
            text: "Subscriptions",
            href: "#pricing"
          }}
          videoSrc="https://videos.pexels.com/video-files/12998497/12998497-hd_1280_720_25fps.mp4"
          floatingCards={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/mockup-coffee-beans-form-word-coffee-cup-espresso-top-view_169016-53910.jpg",
              name: "Cold Brew"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/coffee-with-milk-glass_1203-1663.jpg",
              name: "Dark Roast"
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesGridSplitLarge" data-webild-section-id="FeaturesGridSplitLarge-1" data-section="services">
        <FeaturesGridSplitLarge
          textAnimation="fade"
          tag="Why Roast Haven"
          title="Precision at Every Step"
          description="From direct farm partnerships to final packaging, every stage preserves bean character."
          topItems={[
            {
              title: "Sustainable Sourcing",
              description: "We work directly with independent growers to pay above fair-trade prices for exceptional harvests.",
              imageSrc: "https://img.b2bpic.net/free-photo/closeup-agriculturist-hands-holding-fresh-arabica-coffee-berries-coffee-plantation-farmer-picking-coffee-bean-coffee-process-agriculture_1150-61448.jpg"
            },
            {
              title: "Precision Roasting",
              description: "Small-batch drum roasting calibrated precisely to highlight each micro-lot profile and floral aroma.",
              imageSrc: "https://img.b2bpic.net/free-photo/fresh-coffee-decoration_23-2147671443.jpg"
            }
          ]}
          bottomItem={{
            title: "Roasted to Order",
            description: "We craft each batch twice weekly and dispatch within 24 hours of cooling so coffee arrives at peak freshness.",
            imageSrc: "https://img.b2bpic.net/free-photo/seed-black-background-freshness-bean_1172-457.jpg",
            primaryButton: {
              text: "Explore Roasts",
              href: "#menu"
            }
          }}
        />
      </div>

      <div id="menu" data-webild-section="FeaturesFilterGrid" data-webild-section-id="FeaturesFilterGrid-1" data-section="menu">
        <FeaturesFilterGrid
          textAnimation="slide-up"
          tag="Signature Coffees"
          title="Pick Your Roast Profile"
          description="From light citrus notes to deep dark roasts, find your daily cup."
          categories={[
            "Light Roast",
            "Medium Roast",
            "Dark Roast",
            "Specialty"
          ]}
          items={[
            {
              name: "Ethiopian Heirloom",
              category: "Light Roast",
              imageSrc: "https://img.b2bpic.net/free-photo/coffee-bag-with-roasted-beans_23-2151965919.jpg"
            },
            {
              name: "Guatemalan Single",
              category: "Light Roast",
              imageSrc: "https://img.b2bpic.net/free-photo/burlap-sack-with-coffee-beans_23-2148255034.jpg"
            },
            {
              name: "Kenya AA Single",
              category: "Light Roast",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-coffee-beans-metal-spoon-dark-surface_176474-510.jpg"
            },
            {
              name: "Colombian Supremo",
              category: "Medium Roast",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-roasted-coffee-beans-cup_23-2148337148.jpg"
            },
            {
              name: "House Decaf",
              category: "Medium Roast",
              imageSrc: "https://img.b2bpic.net/free-photo/hot-cup-coffee-with-cinnamon-stick-coffee-beans-marble-background-high-quality-photo_114579-67945.jpg"
            },
            {
              name: "Costa Rica Honey",
              category: "Medium Roast",
              imageSrc: "https://img.b2bpic.net/free-photo/roasted-coffee-beans-mug_23-2148337599.jpg"
            },
            {
              name: "Sumatra Dark Roast",
              category: "Dark Roast",
              imageSrc: "https://img.b2bpic.net/free-photo/closeup-shot-lentils-scattered-wooden-surface-from-glass-jar_181624-34186.jpg"
            },
            {
              name: "Espresso Roast",
              category: "Dark Roast",
              imageSrc: "https://img.b2bpic.net/free-photo/cup-corn-rings-blue-background-high-quality-photo_114579-75547.jpg"
            },
            {
              name: "Cold Brew Artisan",
              category: "Specialty",
              imageSrc: "https://img.b2bpic.net/free-photo/delicious-coffee-cups-with-foam_23-2149514290.jpg"
            },
            {
              name: "Cascara Infusion",
              category: "Specialty",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-clean-peeled-peanuts-dark-blue-shell-peanut-color-cips-walnut-nut-snack_179666-43734.jpg"
            }
          ]}
          allLabel="All"
        />
      </div>

      <div id="pricing" data-webild-section="PricingBeanClub" data-webild-section-id="PricingBeanClub-1" data-section="pricing">
        <PricingBeanClub
          tag="Subscriptions"
          title="Fresh beans on your schedule"
          description="Never run out of freshly roasted beans again."
          items={[
            {
              title: "Essentials",
              price: "$18",
              period: "/ mo",
              description: "Perfect for one person's daily cup.",
              features: [
                "1 bag of signature roast monthly",
                "Free standard shipping included",
                "Cancel or pause anytime"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/kraft-paper-bag_187299-47329.jpg",
              imageAlt: "Kraft Paper Bag",
              button: {
                text: "Start subscription",
                href: "#contact"
              }
            },
            {
              title: "Connoisseur",
              price: "$32",
              period: "/ mo",
              description: "For coffee lovers and daily drinkers.",
              features: [
                "2 bags of premium beans monthly",
                "Priority shipping included",
                "Free 50g micro-lot sample bag",
                "Access to subscriber-only roasts"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-fresh-roasted-coffee-beans-burlap-bag-with-coffee-beans-isolated-red-background_141793-25509.jpg",
              imageAlt: "Top view of fresh roasted coffee beans on a burlap bag with coffee beans isolated on a red background",
              button: {
                text: "Start subscription",
                href: "#contact"
              }
            },
            {
              title: "Office",
              price: "$60",
              period: "/ mo",
              description: "Keep your whole team caffeinated.",
              features: [
                "4 bags of signature beans monthly",
                "Fast weekly delivery included",
                "Bulk roasting savings"
              ],
              imageSrc: "https://img.b2bpic.net/free-photo/coffee-bags-indoors-branding-concept_23-2151881018.jpg",
              imageAlt: "Coffee bags indoors branding concept",
              button: {
                text: "Start subscription",
                href: "#contact"
              }
            }
          ]}
        />
      </div>

      <div id="metrics" data-webild-section="MetricsCupCounters" data-webild-section-id="MetricsCupCounters-1" data-section="metrics">
        <MetricsCupCounters
          tag="By the numbers"
          title="Dedicated to the craft"
          imageSrc="https://img.b2bpic.net/free-photo/roasted-coffee-beans-coffee-bean-shaped-cookies_114579-6546.jpg"
          imageAlt="Roasted coffee beans and coffee bean shaped cookies"
          items={[
            {
              value: 15,
              suffix: "T",
              label: "Tonnes roasted"
            },
            {
              value: 10,
              suffix: "k+",
              label: "Happy drinkers"
            },
            {
              value: 50,
              suffix: "+",
              label: "Direct micro-lots"
            },
            {
              value: 4.9,
              label: "Average rating"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqGlassRows" data-webild-section-id="FaqGlassRows-1" data-section="faq">
        <FaqGlassRows
          tag="Questions"
          title="Before you order"
          description="Everything you need to know about our beans and roast schedules."
          imageSrc="https://img.b2bpic.net/free-photo/coffee-bags-indoors-branding-concept_23-2151881013.jpg"
          imageAlt="Coffee bags indoors branding concept"
          imageLabel="Batch roasted"
          items={[
            {
              title: "What does small-batch roasting mean?",
              description: "We roast in batches under 20kg to maintain exact temperature control and consistent flavor profiles."
            },
            {
              title: "How fresh is the coffee when it arrives?",
              description: "We roast twice every week and dispatch your package within 24 hours of roasting."
            },
            {
              title: "Where do you ship orders?",
              description: "We ship nationwide from Seattle. Orders are dispatched via standard or express courier with tracking."
            },
            {
              title: "Can I pause or cancel my subscription?",
              description: "Yes, you can alter, pause, or cancel your coffee subscription anytime directly from your account."
            },
            {
              title: "Which coffee varieties do you roast?",
              description: "We roast Ethiopian Heirloom, Colombian Supremo, Sumatra Dark Roast, Guatemalan Single, and House Decaf."
            },
            {
              title: "How should I store my roasted coffee beans?",
              description: "Keep your coffee in our sealed bag with a one-way valve at room temperature away from direct sunlight."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactBar" data-webild-section-id="ContactBar-1" data-section="contact">
        <ContactBar
          textAnimation="slide-up"
          tag="Get in touch"
          title="Ask about our fresh roasts"
          options={[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              href: "https://wa.me/"
            },
            {
              icon: Mail,
              label: "Email",
              href: "mailto:hello@roasthaven.com"
            }
          ]}
        />
      </div>
    </>
  );
}
