import type { Metadata } from "next";

import squad from "./squad.json";

const positionGroups = squad.positions;
const playerCount = positionGroups.reduce(
  (total, group) => total + group.players.length,
  0,
);

export const metadata: Metadata = {
  title: "Football squad | Vortex Academia",
  description: "Meet the Vortex Academia football squad by position.",
};

export default function FootballPage() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-[var(--content-max)] flex-1 px-[var(--gutter-mobile)] py-[var(--section-space-mobile)] lg:px-[var(--gutter-desktop)] lg:py-[var(--section-space-desktop)]"
    >
      <div className="mb-10 sm:mb-14">
        <p className="mb-5 text-label text-primary">Squad</p>
        <h1 className="font-heading text-display font-bold">Football</h1>
        <p className="mt-4 text-muted-foreground">
          {playerCount} players, {positionGroups.length} positions.
        </p>
      </div>

      <div className="rounded-lg bg-card p-2 sm:p-4">
        <div className="relative overflow-hidden rounded-md bg-pitch px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-sm border border-pitch-line sm:inset-5" />
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-3 h-12 w-2/5 -translate-x-1/2 border border-t-0 border-pitch-line sm:top-5 sm:h-16" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-3 left-1/2 h-12 w-2/5 -translate-x-1/2 border border-b-0 border-pitch-line sm:bottom-5 sm:h-16" />

          <div className="relative z-10 grid gap-12 sm:gap-16">
            {positionGroups.map((group, index) => {
              const headingId = `position-${index}`;

              return (
                <section key={group.label} aria-labelledby={headingId}>
                  <h2
                    id={headingId}
                    className="mb-5 text-center font-heading text-2xl font-semibold sm:text-3xl"
                  >
                    {group.label}
                  </h2>
                  <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
                    {group.players.map((player) => (
                      <li
                        key={player}
                        className="flex min-h-14 w-[calc((100%-0.75rem)/2)] flex-col items-center justify-center rounded-sm bg-pitch-player px-2 py-2 text-center sm:w-[calc((100%-1.5rem)/3)] lg:w-[calc((100%-3rem)/5)]"
                      >
                        <span className="text-sm font-semibold leading-snug text-foreground sm:text-base">
                          {player}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {index === Math.floor((positionGroups.length - 1) / 2) && (
                    <div aria-hidden="true" className="pointer-events-none relative -mx-1 mt-12 border-t border-pitch-line sm:-mx-3 sm:mt-16 lg:-mx-7">
                      <div className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pitch-line sm:size-20" />
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
