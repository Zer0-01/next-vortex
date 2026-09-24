import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type SiteHeaderProps = {
  instagramHref?: string;
};

const instagramClassName =
  "inline-flex min-h-11 items-center gap-2 rounded-md border border-border px-4 text-label uppercase tracking-[0.08em] transition-colors duration-fast";

export function SiteHeader({ instagramHref }: SiteHeaderProps) {
  return (
    <header className="relative z-20 border-b border-border/70">
      <a
        href="#main-content"
        className="sr-only rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground focus:not-sr-only focus:absolute focus:left-6 focus:top-4"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 w-full max-w-[var(--content-max)] items-center justify-between px-[var(--gutter-mobile)] lg:px-[var(--gutter-desktop)]">
        <Link
          href="/"
          aria-label="Vortex Academia home"
          className="font-heading text-xl font-extrabold uppercase leading-none tracking-[-0.02em]"
        >
          Vortex Academia
        </Link>

        {instagramHref ? (
          <a
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            className={`${instagramClassName} hover:border-primary hover:text-primary`}
          >
            Instagram
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        ) : (
          <span
            aria-label="Instagram link coming soon"
            className={`${instagramClassName} cursor-not-allowed text-muted-foreground`}
          >
            Instagram soon
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </span>
        )}
      </div>
    </header>
  );
}
