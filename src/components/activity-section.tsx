import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { SectionReveal } from "@/components/section-reveal";

type ActivitySectionProps = {
  instagramHref: string;
};

const activities = [
  {
    name: "Football",
    headline: "A social game, played with focus.",
    description:
      "We gather casually, arrange the teams, and turn our attention to the game when play begins. The session is organised and focused, with time to connect before kickoff and over food afterward.",
    image: {
      src: "/images/team-photo-6.jpeg",
      alt: "Vortex Academia football players gathered for a team photo on the pitch",
      objectPosition: "50% 58%",
      loading: "lazy",
    },
    contact: {
      href: "https://wa.me/60179289440",
    },
  },
  {
    name: "Running",
    headline: "A pace made for conversation.",
    description:
      "We stay together, adapt to different paces, and keep the run easy-going enough to talk along the way. After the miles, we make time for food, group photos, and the people beside us.",
    image: {
      src: "/images/apiz-running.jpeg",
      alt: "Vortex Academia runners taking part in a road race",
      objectPosition: "50% 43%",
      loading: "eager",
    },
    contact: {
      href: "https://wa.me/601163952301",
    },
  },
] as const;

const sharedRhythm = ["Gather", "Move", "Eat", "Remember"] as const;

export function ActivitySection({ instagramHref }: ActivitySectionProps) {
  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--gutter-mobile)] py-[var(--section-space-mobile)] lg:px-[var(--gutter-desktop)] lg:py-[var(--section-space-desktop)]">
        <SectionReveal className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <div>
            <p className="mb-6 text-label text-primary">
              What we do
            </p>
            <h2
              id="activities-heading"
              className="max-w-2xl font-heading text-heading-lg"
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
              <article className="flex h-full flex-col overflow-hidden rounded-lg bg-card">
                <figure className="relative aspect-[4/3] overflow-hidden bg-background">
                  <Image
                    src={activity.image.src}
                    alt={activity.image.alt}
                    fill
                    loading={activity.image.loading}
                    sizes="(max-width: 1023px) calc(100vw - 40px), 42vw"
                    style={{ objectPosition: activity.image.objectPosition }}
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-5 left-5 rounded-sm bg-background px-3 py-2 sm:bottom-6 sm:left-6">
                    <span className="text-label text-foreground">
                      {activity.name}
                    </span>
                  </figcaption>
                </figure>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="max-w-lg font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                    {activity.headline}
                  </h3>
                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                    {activity.description}
                  </p>

                  <div className="mt-auto pt-8 sm:pt-10">
                    <a
                      href={activity.contact.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Contact us about ${activity.name} on WhatsApp`}
                      className="inline-flex min-h-12 w-full items-center justify-between gap-4 rounded-md bg-primary px-5 font-semibold text-primary-foreground transition-colors duration-fast hover:bg-primary-hover sm:w-auto"
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

        <SectionReveal delay={0.14} className="mt-6 rounded-lg bg-card">
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
            {sharedRhythm.map((step, index) => (
              <li
                key={step}
                className="flex min-h-28 items-center gap-5 p-6"
              >
                <div>
                  <span className="text-label text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-heading text-3xl font-semibold leading-tight">
                    {step}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p className="max-w-2xl text-lg leading-relaxed">
              New here? Choose an activity and say hello, or follow us to see
              what&apos;s happening next.
            </p>
            <a
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-secondary px-5 text-sm font-semibold transition-colors duration-fast hover:bg-surface-hover"
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
