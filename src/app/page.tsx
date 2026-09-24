import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";

const heroImages = [
  {
    src: "/images/hero/football-community.jpg",
    alt: "A women's football team gathered in a huddle on an outdoor pitch",
    label: "Football",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/hero/running-community.jpg",
    alt: "A group of friends running together outdoors",
    label: "Running",
    objectPosition: "50% 45%",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
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
          communityHref="#about"
        />
        <AboutSection />
      </main>
    </div>
  );
}
