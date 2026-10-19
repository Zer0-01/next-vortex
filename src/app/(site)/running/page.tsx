import type { Metadata } from "next";

import squad from "./squad.json";

export const metadata: Metadata = {
  title: "Running squad | Vortex Academia",
  description: "Meet the Vortex Academia running squad.",
};

export default function RunningPage() {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-[var(--content-max)] flex-1 px-[var(--gutter-mobile)] py-[var(--section-space-mobile)] lg:px-[var(--gutter-desktop)] lg:py-[var(--section-space-desktop)]"
    >
      <div className="mb-10 sm:mb-14">
        <p className="mb-5 text-label text-primary">Squad</p>
        <h1 className="font-heading text-display font-bold">Running</h1>
        <p className="mt-4 text-muted-foreground">
          {squad.runners.length} runners.
        </p>
      </div>

      <div className="rounded-lg bg-card p-2 sm:p-4">
        <ul
          aria-label="Running squad"
          className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-track-line bg-track"
        >
          {squad.runners.map((runner) => (
            <li
              key={runner}
              className="flex min-h-24 items-center justify-center border-b border-track-line px-5 py-5 last:border-b-0 sm:min-h-28"
            >
              <span className="min-w-36 rounded-md bg-card px-6 py-3 text-center font-heading text-2xl font-semibold sm:min-w-44 sm:text-3xl">
                {runner}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
