import { SectionReveal } from "@/components/section-reveal";

const principles = [
  {
    title: "Move",
    description: "Football or running, movement brings us together.",
  },
  {
    title: "Support",
    description: "Shared effort makes every session more meaningful.",
  },
  {
    title: "Return",
    description: "The habit grows each time we show up for one another.",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate scroll-mt-20 overflow-hidden border-b border-border/70"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 640 640"
        className="pointer-events-none absolute -right-72 top-12 -z-10 w-[42rem] text-primary/15 sm:-right-60 lg:-right-32 lg:top-1/2 lg:w-[48rem] lg:-translate-y-1/2"
      >
        <path
          d="M 76 390 C 105 165, 330 65, 535 170 C 690 250, 650 485, 455 555"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--gutter-mobile)] py-[var(--section-space-mobile)] lg:px-[var(--gutter-desktop)] lg:py-[var(--section-space-desktop)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionReveal>
            <p className="mb-6 flex items-center gap-3 text-label uppercase text-primary">
              <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
              About Vortex
            </p>
            <h2
              id="about-heading"
              className="max-w-xl font-heading text-heading-lg uppercase tracking-[-0.035em]"
            >
              Built around showing up.
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.08} className="flex items-end lg:pb-2">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
              Vortex Academia is a Kuala Lumpur community where football and
              running give us reasons to come together. We meet in different
              places, but the purpose stays the same: move, support one another,
              and make healthier habits easier to keep.
            </p>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.14} className="mt-14 border-t border-border lg:mt-20">
          <div className="grid lg:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`py-7 lg:px-8 lg:py-8 ${
                  index === 0
                    ? "lg:pl-0"
                    : "border-t border-border lg:border-l lg:border-t-0"
                }`}
              >
                <h3 className="font-heading text-3xl font-bold uppercase tracking-[-0.02em]">
                  {principle.title}
                </h3>
                <p className="mt-2 max-w-sm text-base leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
