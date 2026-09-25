import Image from "next/image";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";

import { SectionReveal } from "@/components/section-reveal";

type ActivitySectionProps = {
  instagramHref: string;
};

const activities = [
  {
    number: "01",
    name: "Football",
    headline: "A social game, played with focus.",
    description:
      "We gather casually, arrange the teams, and turn our attention to the game when play begins. The session is organised and focused, with time to connect before kickoff and over food afterward.",
    image: {
      src: "/images/hero/football-community.jpg",
      alt: "A women's football team gathered in a huddle on an outdoor pitch",
      objectPosition: "50% 50%",
    },
    contact: {
      href: "https://wa.me/60179289440",
    },
  },
  {
    number: "02",
    name: "Running",
    headline: "A pace made for conversation.",
    description:
      "We stay together, adapt to different paces, and keep the run easy-going enough to talk along the way. After the miles, we make time for food, group photos, and the people beside us.",
    image: {
      src: "/images/hero/running-community.jpg",
      alt: "A group of friends running together outdoors",
      objectPosition: "50% 45%",
    },
    contact: {
      href: "https://wa.me/601163952301",
    },
  },
] as const;

const sharedRhythm = ["Gather", "Move", "Eat", "Remember"] as const;

const rhythmBorderClassNames = [
  "",
  "border-t border-border sm:border-l sm:border-t-0",
  "border-t border-border sm:border-t lg:border-l lg:border-t-0",
  "border-t border-border sm:border-l sm:border-t lg:border-t-0",
] as const;

export function ActivitySection({ instagramHref }: ActivitySectionProps) {
  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="scroll-mt-20 overflow-hidden border-b border-border/70"
    >
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--gutter-mobile)] py-[var(--section-space-mobile)] lg:px-[var(--gutter-desktop)] lg:py-[var(--section-space-desktop)]">
        <SectionReveal className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <div>
            <p className="mb-6 flex items-center gap-3 text-label uppercase text-primary">
              <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
              What we do
            </p>
            <h2
              id="activities-heading"
              className="max-w-2xl font-heading text-heading-lg uppercase tracking-[-0.035em]"
            >
              Two ways to move. One community.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
            Football brings focus to the pitch. Running leaves room for
            conversation. Both give us more reasons to gather, move, and spend
            time together.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {activities.map((activity, index) => (
            <SectionReveal key={activity.name} delay={0.08 + index * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card">
                <figure className="relative aspect-[4/3] overflow-hidden border-b border-border bg-background">
                  <Image
                    src={activity.image.src}
                    alt={activity.image.alt}
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 40px), 42vw"
                    style={{ objectPosition: activity.image.objectPosition }}
                    className="object-cover transition-transform duration-reveal ease-vortex group-hover:scale-[1.015]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/85 to-transparent" />
                  <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-6 sm:inset-x-6 sm:bottom-6">
                    <span className="text-label uppercase text-white">
                      {activity.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-heading text-6xl font-extrabold leading-none text-white/90 sm:text-7xl"
                    >
                      {activity.number}
                    </span>
                  </figcaption>
                </figure>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="max-w-lg font-heading text-4xl font-bold uppercase leading-[0.95] tracking-[-0.025em] sm:text-5xl">
                    {activity.headline}
                  </h3>
                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                    {activity.description}
                  </p>

                  <div className="mt-8 border-t border-border pt-6 sm:mt-10">
                    <a
                      href={activity.contact.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Contact us about ${activity.name} on WhatsApp`}
                      className="inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-md bg-primary px-5 font-bold text-primary-foreground transition-colors duration-fast hover:bg-primary/90 sm:w-auto"
                    >
                      <span className="flex items-center gap-3">
                        <MessageCircle aria-hidden="true" className="size-5" />
                        Contact us
                      </span>
                      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
                    </a>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.14} className="mt-6 rounded-lg border border-border">
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
            {sharedRhythm.map((step, index) => (
              <li
                key={step}
                className={`flex min-h-28 items-center justify-between gap-5 p-6 ${rhythmBorderClassNames[index]}`}
              >
                <div>
                  <span className="text-label text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-heading text-3xl font-bold uppercase leading-none">
                    {step}
                  </p>
                </div>
                {index < sharedRhythm.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 text-muted-foreground lg:hidden xl:block"
                  />
                ) : null}
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-5 border-t border-border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-2xl text-lg leading-relaxed">
              New here? Choose an activity and say hello, or follow us to see
              what&apos;s happening next.
            </p>
            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-border bg-secondary px-5 text-sm font-bold transition-colors duration-fast hover:border-primary hover:text-primary"
            >
              @vortexacademia_
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
