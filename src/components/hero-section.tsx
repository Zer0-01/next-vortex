import Image from "next/image";
import { ArrowDown, ArrowUpRight, Camera } from "lucide-react";

export type HeroImage = {
  src: string;
  alt: string;
  label: "Football" | "Running";
  objectPosition: string;
};

export type HeroSectionProps = {
  eyebrow: string;
  headline: {
    lead: string;
    emphasis: string;
    close: string;
  };
  description: string;
  images: readonly [HeroImage, HeroImage];
  instagramHref?: string;
  communityHref?: string;
};

const actionClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold transition duration-fast disabled:cursor-not-allowed disabled:opacity-60";

export function HeroSection({
  eyebrow,
  headline,
  description,
  images,
  instagramHref,
  communityHref,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-border/70"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[var(--content-max)] items-center gap-12 px-[var(--gutter-mobile)] py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(30rem,1.1fr)] lg:gap-16 lg:px-[var(--gutter-desktop)] lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 text-label uppercase text-muted-foreground">
            {eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="font-heading text-[clamp(4rem,10vw,10rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.045em]"
          >
            <span className="block">{headline.lead}</span>
            <span className="block text-primary">{headline.emphasis}</span>
            <span className="block">{headline.close}</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {instagramHref ? (
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className={`${actionClassName} bg-primary text-primary-foreground hover:bg-primary/90`}
              >
                <Camera aria-hidden="true" className="size-4" />
                Follow on Instagram
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className={`${actionClassName} bg-primary text-primary-foreground`}
              >
                <Camera aria-hidden="true" className="size-4" />
                Follow on Instagram
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </button>
            )}

            {communityHref ? (
              <a
                href={communityHref}
                className={`${actionClassName} border border-border bg-secondary text-secondary-foreground hover:border-foreground/60`}
              >
                Explore the community
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className={`${actionClassName} border border-border bg-secondary text-secondary-foreground`}
              >
                Explore the community
                <ArrowDown aria-hidden="true" className="size-4" />
              </button>
            )}
          </div>
          {!instagramHref || !communityHref ? (
            <p className="mt-3 text-xs text-muted-foreground">
              Instagram and community links are coming soon.
            </p>
          ) : null}
        </div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:block lg:h-[clamp(32rem,48vw,42rem)]">
          <svg
            aria-hidden="true"
            viewBox="0 0 640 640"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[130%] -translate-x-1/2 -translate-y-1/2 text-primary/80"
          >
            <path
              d="M 80 390 C 105 165, 330 65, 535 170 C 690 250, 650 485, 455 555"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {images.map((image, index) => (
            <figure
              key={image.label}
              className={`group relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card lg:absolute lg:w-[58%] ${
                index === 0
                  ? "lg:left-0 lg:top-0"
                  : "lg:bottom-0 lg:right-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 46vw, 30vw"
                style={{ objectPosition: image.objectPosition }}
                className="object-cover transition-transform duration-reveal ease-vortex group-hover:scale-[1.015]"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-sm border border-white/20 bg-background/85 px-3 py-2 text-label uppercase text-foreground backdrop-blur-sm">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
