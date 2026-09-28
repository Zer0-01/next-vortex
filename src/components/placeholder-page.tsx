import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
};

export function PlaceholderPage({ eyebrow, title }: PlaceholderPageProps) {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[var(--content-max)] flex-1 items-center px-[var(--gutter-mobile)] py-[var(--section-space-mobile)] lg:px-[var(--gutter-desktop)] lg:py-[var(--section-space-desktop)]"
    >
      <div className="max-w-4xl">
        <p className="mb-6 flex items-center gap-3 text-label uppercase text-primary">
          <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
          {eyebrow}
        </p>
        <h1 className="font-heading text-[clamp(4rem,10vw,9rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.045em]">
          {title}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Coming soon.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-secondary px-5 text-sm font-bold transition-colors duration-fast hover:border-primary hover:text-primary"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
