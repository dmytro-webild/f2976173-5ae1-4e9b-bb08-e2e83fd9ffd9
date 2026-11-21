import { Outlet } from "react-router-dom";
import NavbarFullscreen from "@/components/navbars/NavbarFullscreen";
import FooterBrand from "@/components/sections/footer/FooterBrand";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarFullscreen
          logo="Roast Haven"
          navItems={[
            {
              name: "Our Roasts",
              href: "#menu"
            },
            {
              name: "Why Us",
              href: "#services"
            },
            {
              name: "Subscriptions",
              href: "#pricing"
            },
            {
              name: "FAQ",
              href: "#faq"
            }
          ]}
          ctaButton={{
            text: "Order Fresh Coffee",
            href: "#pricing"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="filled" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterBrand
          brand="Roast Haven"
          columns={[
            {
              items: [
                {
                  label: "Single Origin Beans",
                  href: "#menu"
                },
                {
                  label: "Roast Subscriptions",
                  href: "#pricing"
                },
                {
                  label: "Our Roasting Craft",
                  href: "#services"
                }
              ]
            },
            {
              items: [
                {
                  label: "Roastery Impact",
                  href: "#metrics"
                },
                {
                  label: "Frequently Asked",
                  href: "#faq"
                },
                {
                  label: "Reach Our Roasters",
                  href: "#contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Order Fresh Roasts",
                  href: "#menu"
                },
                {
                  label: "Flexible Coffee Plans",
                  href: "#pricing"
                },
                {
                  label: "Roastery Support",
                  href: "#contact"
                }
              ]
            }
          ]}
        />
      </footer>
    </div>
  );
}
