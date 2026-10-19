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
        <p className="mb-6 text-label text-primary">
          {eyebrow}
        </p>
        <h1 className="font-heading text-display font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Coming soon.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-secondary px-5 text-sm font-semibold transition-colors duration-fast hover:bg-surface-hover"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
