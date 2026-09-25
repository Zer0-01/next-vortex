import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { InstagramIcon } from "@/components/brand-icons";
import { SectionReveal } from "@/components/section-reveal";

type SiteFooterProps = {
  instagramHref: string;
};

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
] as const;

export function SiteFooter({ instagramHref }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="scroll-mt-20 overflow-hidden bg-card">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--gutter-mobile)] lg:px-[var(--gutter-desktop)]">
        <SectionReveal className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16 lg:py-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-label uppercase text-primary">
              <span aria-hidden="true" className="size-2 rounded-full bg-primary" />
              Stay in the loop
            </p>
            <h2 className="max-w-3xl font-heading text-[clamp(3rem,6vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.035em]">
              See where we&apos;re{" "}
              <span className="block text-primary">moving next.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Follow Vortex Academia for current sessions, announcements, and
              moments from the community.
            </p>
          </div>

          <a
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-between gap-6 rounded-md bg-primary px-5 font-bold text-primary-foreground transition-colors duration-fast hover:bg-primary/90 sm:w-fit"
          >
            <span className="flex items-center gap-3">
              <InstagramIcon className="size-5" />
              Follow on Instagram
            </span>
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
          </a>
        </SectionReveal>

        <div className="border-t border-border">
          <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:items-center lg:gap-14">
            <div>
              <Link
                href="/"
                aria-label="Vortex Academia home"
                className="inline-flex min-h-11 items-center gap-3 font-heading text-2xl font-extrabold uppercase leading-none tracking-[-0.02em] transition-colors duration-fast hover:text-primary"
              >
                <Image
                  src="/images/logo-dark.png"
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 shrink-0"
                />
                Vortex Academia
              </Link>
            </div>

            <p className="text-label uppercase text-muted-foreground">
              Kuala Lumpur
            </p>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm font-semibold transition-colors duration-fast hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={instagramHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 text-sm font-semibold transition-colors duration-fast hover:text-primary"
                  >
                    Instagram
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} Vortex Academia</p>
            <p>
              Created by{" "}
              <a
                href="https://lakarsoft.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors duration-fast hover:text-primary hover:decoration-primary"
              >
                lakarsoft.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
