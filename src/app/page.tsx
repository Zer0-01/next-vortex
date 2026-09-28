import { AboutSection } from "@/components/about-section";
import { ActivitySection } from "@/components/activity-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const instagramHref = "https://www.instagram.com/vortexacademia_/";

const heroImages = [
  {
    src: "/images/hero/handshake.JPG",
    alt: "Two Vortex Academia football players walking hand in hand on the pitch",
    label: "Football",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/apiz-running.jpeg",
    alt: "Vortex Academia runners taking part in a road race",
    label: "Running",
    objectPosition: "50% 48%",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader instagramHref={instagramHref} />
      <main id="main-content">
        <HeroSection
          eyebrow="Kuala Lumpur · Football + Running"
          headline={{
            lead: "Move",
            emphasis: "Together.",
            close: "Go further.",
          }}
          description="A Kuala Lumpur community brought together by football, running, and the habit of showing up for one another."
          images={heroImages}
          instagramHref={instagramHref}
          communityHref="#about"
        />
        <AboutSection />
        <ActivitySection instagramHref={instagramHref} />
      </main>
      <SiteFooter instagramHref={instagramHref} />
    </div>
  );
}
