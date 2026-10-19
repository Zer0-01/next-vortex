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
      className="scroll-mt-20 bg-card"
    >
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--gutter-mobile)] py-[var(--section-space-mobile)] lg:px-[var(--gutter-desktop)] lg:py-[var(--section-space-desktop)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionReveal>
            <p className="mb-6 text-label text-primary">
              About Vortex
            </p>
            <h2
              id="about-heading"
              className="max-w-xl font-heading text-heading-lg"
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

        <SectionReveal delay={0.14} className="mt-14 lg:mt-20">
          <div className="grid gap-4 lg:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-lg bg-surface-raised p-6 lg:p-8"
              >
                <h3 className="font-heading text-3xl font-semibold">
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
