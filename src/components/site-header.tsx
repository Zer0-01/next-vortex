import Image from "next/image";
import Link from "next/link";

import { InstagramIcon } from "@/components/brand-icons";

type SiteHeaderProps = {
  instagramHref?: string;
};

const instagramClassName =
  "inline-flex size-11 items-center justify-center rounded-md border border-border transition-colors duration-fast";

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
          className="inline-flex items-center gap-2.5 font-heading text-xl font-extrabold uppercase leading-none tracking-[-0.02em]"
        >
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={36}
            height={36}
            className="size-9 shrink-0 object-contain"
            priority
          />
          Vortex Academia
        </Link>

        {instagramHref ? (
          <a
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Vortex Academia on Instagram"
            className={`${instagramClassName} hover:border-primary hover:text-primary`}
          >
            <InstagramIcon aria-hidden="true" className="size-5" />
          </a>
        ) : (
          <span
            aria-label="Instagram link coming soon"
            className={`${instagramClassName} cursor-not-allowed text-muted-foreground`}
          >
            <InstagramIcon aria-hidden="true" className="size-5" />
          </span>
        )}
      </div>
    </header>
  );
}
