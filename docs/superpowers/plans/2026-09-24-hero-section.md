# Hero Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive, accessible, motion-enhanced Vortex Academia hero that presents football and running equally and uses clearly documented temporary stock photography.

**Architecture:** `page.tsx` supplies all hero content and optional destinations to focused server components. `SiteHeader` and `HeroSection` render semantic, JavaScript-independent markup; a small `HeroMotion` client boundary progressively enhances selected wrappers and the decorative arc after hydration. Local Pexels assets remove runtime image-host dependencies.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Motion 13, `next/image`, Lucide React

**Spec:** `docs/superpowers/specs/2026-09-24-hero-section-design.md`

## Global Constraints

- Follow `DESIGN.md` as the visual and interaction authority.
- Use two-space indentation, double quotes, semicolons, PascalCase components, and `@/*` imports.
- Keep generated shadcn primitives in `src/components/ui/` unchanged.
- Keep the headline exactly `MOVE TOGETHER. GO FURTHER.` and treat it as draft website copy, not an adopted brand slogan.
- Keep football and running equal in image area, label treatment, and editorial prominence.
- Do not claim the stock-photo subjects are Vortex members.
- Do not add a crest, tagline, event date, membership count, partner, schedule, or unverified claim.
- Keep temporary images local and document source, creator, license, and replacement status.
- Use native disabled semantics while the Instagram and community destinations are unavailable; never introduce `href="#"`.
- Respect `prefers-reduced-motion` and leave all content visible when JavaScript is unavailable.
- Do not add a test framework. This repository's required verification is lint, production build, and manual desktop/mobile inspection.

## Review Focus

- Missing CTA destinations: both actions remain visibly unavailable with native disabled semantics and no fake anchors; verify in Task 2.
- JavaScript disabled or hydration delayed: headline, copy, actions, and photographs remain visible in server HTML; verify in Task 3.
- Reduced-motion preference: entrance transforms, masking, and arc drawing do not run; verify in Task 3.
- Narrow viewport and long translated browser UI: the 320px layout has no horizontal overflow and keeps both image cards equally sized; verify in Task 3.
- Stock-image identity: visible copy, alternative text, and credits never imply the photographed people belong to Vortex Academia; verify in Tasks 1 and 2.

---

### Task 1: Add and Document Temporary Hero Photography

**Files:**
- Create: `public/images/hero/football-community.jpg`
- Create: `public/images/hero/running-community.jpg`
- Create: `public/images/hero/CREDITS.md`

**Interfaces:**
- Consumes: Pexels photo `9438086`, Pexels photo `8381747`, and the Pexels license at `https://www.pexels.com/license/`.
- Produces: Stable local image paths `/images/hero/football-community.jpg` and `/images/hero/running-community.jpg` for `HeroSection`.

- [ ] **Step 1: Download bounded local copies**

Ask for network permission, then run:

```bash
mkdir -p public/images/hero
curl -L "https://images.pexels.com/photos/9438086/pexels-photo-9438086.jpeg?auto=compress&cs=tinysrgb&w=1800" -o public/images/hero/football-community.jpg
curl -L "https://images.pexels.com/photos/8381747/pexels-photo-8381747.jpeg?auto=compress&cs=tinysrgb&w=1800" -o public/images/hero/running-community.jpg
```

- [ ] **Step 2: Verify both downloads are real JPEG images**

Run:

```bash
file public/images/hero/football-community.jpg public/images/hero/running-community.jpg
sips -g pixelWidth -g pixelHeight public/images/hero/football-community.jpg public/images/hero/running-community.jpg
```

Expected: both files report JPEG image data, both have non-zero dimensions, and neither width exceeds 1800px.

- [ ] **Step 3: Record credits and replacement status**

Create `public/images/hero/CREDITS.md` with:

```markdown
# Temporary Hero Image Credits

These licensed stock photographs are temporary layout assets. The people shown are not presented as Vortex Academia members. Replace both files with approved, authentic community photography before treating the hero as final brand material.

- `football-community.jpg` — “Women's football team huddles on a city field, emphasizing teamwork and sportsmanship.” by Anastasia Shuraeva. Source: https://www.pexels.com/photo/group-of-people-huddling-on-green-grass-field-9438086/
- `running-community.jpg` — “A group of diverse friends jogging outdoors together in Portugal, promoting fitness.” by Kampus Production. Source: https://www.pexels.com/photo/group-of-people-running-together-8381747/
- License for both images: https://www.pexels.com/license/
```

- [ ] **Step 4: Verify repository size and credit accuracy**

Run:

```bash
du -h public/images/hero/football-community.jpg public/images/hero/running-community.jpg
rg -n "not presented as Vortex|Anastasia Shuraeva|Kampus Production|pexels.com/license" public/images/hero/CREDITS.md
git diff --check
```

Expected: each image is a practical web asset rather than an original-resolution multi-megabyte download; all four credit checks match; `git diff --check` reports no errors.

- [ ] **Step 5: Commit the asset unit**

```bash
git add public/images/hero
git commit -m "assets: add temporary hero photography"
```

---

### Task 2: Build the Static Header and Hero

**Files:**
- Create: `src/components/site-header.tsx`
- Create: `src/components/hero-section.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: local image paths from Task 1 and existing tokens from `src/app/globals.css`.
- Produces: `SiteHeader({ instagramHref?: string })`, `HeroSection(props: HeroSectionProps)`, `HeroImage`, and `HeroSectionProps`. Task 3 wraps selected hero regions without changing these public props.

- [ ] **Step 1: Create the compact header**

Create `src/components/site-header.tsx`:

```tsx
import { ArrowUpRight } from "lucide-react";

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
        <a
          href="/"
          aria-label="Vortex Academia home"
          className="font-heading text-xl font-extrabold uppercase leading-none tracking-[-0.02em]"
        >
          Vortex Academia
        </a>

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
```

- [ ] **Step 2: Create the server-rendered hero component**

Create `src/components/hero-section.tsx`:

```tsx
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Instagram } from "lucide-react";

export type HeroImage = {
  src: string;
  alt: string;
  label: "Football" | "Running";
  objectPosition: string;
};

export type HeroSectionProps = {
  eyebrow: string;
  headline: {
    lead: string;
    emphasis: string;
    close: string;
  };
  description: string;
  images: readonly [HeroImage, HeroImage];
  instagramHref?: string;
  communityHref?: string;
};

const actionClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold transition duration-fast disabled:cursor-not-allowed disabled:opacity-60";

export function HeroSection({
  eyebrow,
  headline,
  description,
  images,
  instagramHref,
  communityHref,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-border/70"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[var(--content-max)] items-center gap-12 px-[var(--gutter-mobile)] py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(30rem,1.1fr)] lg:gap-16 lg:px-[var(--gutter-desktop)] lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 text-label uppercase text-muted-foreground">
            {eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="font-heading text-[clamp(4rem,10vw,10rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.045em]"
          >
            <span className="block">{headline.lead}</span>
            <span className="block text-primary">{headline.emphasis}</span>
            <span className="block">{headline.close}</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {instagramHref ? (
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className={`${actionClassName} bg-primary text-primary-foreground hover:bg-primary/90`}
              >
                <Instagram aria-hidden="true" className="size-4" />
                Follow on Instagram
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className={`${actionClassName} bg-primary text-primary-foreground`}
              >
                <Instagram aria-hidden="true" className="size-4" />
                Follow on Instagram
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </button>
            )}

            {communityHref ? (
              <a
                href={communityHref}
                className={`${actionClassName} border border-border bg-secondary text-secondary-foreground hover:border-foreground/60`}
              >
                Explore the community
                <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className={`${actionClassName} border border-border bg-secondary text-secondary-foreground`}
              >
                Explore the community
                <ArrowDown aria-hidden="true" className="size-4" />
              </button>
            )}
          </div>
          {!instagramHref || !communityHref ? (
            <p className="mt-3 text-xs text-muted-foreground">
              Instagram and community links are coming soon.
            </p>
          ) : null}
        </div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:block lg:h-[clamp(32rem,48vw,42rem)]">
          <svg
            aria-hidden="true"
            viewBox="0 0 640 640"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[130%] -translate-x-1/2 -translate-y-1/2 text-primary/80"
          >
            <path
              d="M 80 390 C 105 165, 330 65, 535 170 C 690 250, 650 485, 455 555"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {images.map((image, index) => (
            <figure
              key={image.label}
              className={`group relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card lg:absolute lg:w-[58%] ${
                index === 0
                  ? "lg:left-0 lg:top-0"
                  : "lg:bottom-0 lg:right-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 46vw, 30vw"
                style={{ objectPosition: image.objectPosition }}
                className="object-cover transition-transform duration-reveal ease-vortex group-hover:scale-[1.015]"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-sm border border-white/20 bg-background/85 px-3 py-2 text-label uppercase text-foreground backdrop-blur-sm">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Supply content from the page**

Replace `src/app/page.tsx` with:

```tsx
import { HeroSection } from "@/components/hero-section";
import { SiteHeader } from "@/components/site-header";

const heroImages = [
  {
    src: "/images/hero/football-community.jpg",
    alt: "A women's football team gathered in a huddle on an outdoor pitch",
    label: "Football",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/hero/running-community.jpg",
    alt: "A group of friends running together outdoors",
    label: "Running",
    objectPosition: "50% 45%",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content">
        <HeroSection
          eyebrow="Kuala Lumpur · Football + Running"
          headline={{
            lead: "Move",
            emphasis: "Together.",
            close: "Go further.",
          }}
          description="A Kuala Lumpur community brought together by football, running, and the habit of showing up for one another."
          images={heroImages}
        />
      </main>
    </div>
  );
}
```

- [ ] **Step 4: Verify static structure and the missing-destination state**

Run:

```bash
npm run lint
npm run build
rg -n 'href="#"|Vortex member|Vortex members' src/app/page.tsx src/components
rg -n 'disabled|href=\{instagramHref\}|href=\{communityHref\}' src/components/hero-section.tsx
```

Expected: lint and build pass. The first `rg` command returns no matches. The second finds both disabled button branches and both destination-backed link branches. The build output lists `/` as a successfully generated route.

- [ ] **Step 5: Commit the static hero**

```bash
git add src/app/page.tsx src/components/site-header.tsx src/components/hero-section.tsx
git commit -m "feat: add responsive hero structure"
```

---

### Task 3: Add Progressive Motion and Complete Visual Verification

**Files:**
- Create: `src/components/hero-motion.tsx`
- Modify: `src/components/hero-section.tsx`

**Interfaces:**
- Consumes: `HeroSectionProps` and the semantic hero markup from Task 2.
- Produces: `HeroMotion({ children, className?, delay?, variant? })` and `HeroArc()`; no public `HeroSection` prop changes.

- [ ] **Step 1: Create the client-only progressive motion boundary**

Create `src/components/hero-motion.tsx`:

```tsx
"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type HeroMotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "reveal";
};

const easeVortex = [0.22, 1, 0.36, 1] as const;

export function HeroMotion({
  children,
  className,
  delay = 0,
  variant = "rise",
}: HeroMotionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const shouldAnimate = isMounted && !reduceMotion;
  const animatedState =
    variant === "reveal"
      ? {
          opacity: [0, 1],
          clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
        }
      : { opacity: [0, 1], y: [24, 0] };

  return (
    <motion.div
      initial={false}
      animate={shouldAnimate ? animatedState : { opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: easeVortex }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroArc() {
  const [isMounted, setIsMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const shouldAnimate = isMounted && !reduceMotion;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 640"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[130%] -translate-x-1/2 -translate-y-1/2 text-primary/80"
    >
      <motion.path
        d="M 80 390 C 105 165, 330 65, 535 170 C 690 250, 650 485, 455 555"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={false}
        animate={
          shouldAnimate
            ? { opacity: [0, 1], pathLength: [0, 1] }
            : { opacity: 1, pathLength: 1 }
        }
        transition={{ duration: 0.8, delay: 0.2, ease: easeVortex }}
      />
    </svg>
  );
}
```

This component intentionally renders the final visible state on the server. After hydration, capable clients receive a one-time enhancement; without JavaScript or with reduced motion, no content is hidden.

- [ ] **Step 2: Wrap the approved hero regions**

Replace `src/components/hero-section.tsx` with the final motion-enhanced version:

```tsx
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Instagram } from "lucide-react";

import { HeroArc, HeroMotion } from "@/components/hero-motion";

export type HeroImage = {
  src: string;
  alt: string;
  label: "Football" | "Running";
  objectPosition: string;
};

export type HeroSectionProps = {
  eyebrow: string;
  headline: {
    lead: string;
    emphasis: string;
    close: string;
  };
  description: string;
  images: readonly [HeroImage, HeroImage];
  instagramHref?: string;
  communityHref?: string;
};

const actionClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold transition duration-fast disabled:cursor-not-allowed disabled:opacity-60";

export function HeroSection({
  eyebrow,
  headline,
  description,
  images,
  instagramHref,
  communityHref,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden border-b border-border/70"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[var(--content-max)] items-center gap-12 px-[var(--gutter-mobile)] py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(30rem,1.1fr)] lg:gap-16 lg:px-[var(--gutter-desktop)] lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <HeroMotion delay={0}>
            <p className="mb-6 text-label uppercase text-muted-foreground">
              {eyebrow}
            </p>
          </HeroMotion>
          <HeroMotion delay={0.08}>
            <h1
              id="hero-heading"
              className="font-heading text-[clamp(4rem,10vw,10rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.045em]"
            >
              <span className="block">{headline.lead}</span>
              <span className="block text-primary">{headline.emphasis}</span>
              <span className="block">{headline.close}</span>
            </h1>
          </HeroMotion>
          <HeroMotion delay={0.16}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </HeroMotion>

          <HeroMotion delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {instagramHref ? (
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`${actionClassName} bg-primary text-primary-foreground hover:bg-primary/90`}
                >
                  <Instagram aria-hidden="true" className="size-4" />
                  Follow on Instagram
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className={`${actionClassName} bg-primary text-primary-foreground`}
                >
                  <Instagram aria-hidden="true" className="size-4" />
                  Follow on Instagram
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </button>
              )}

              {communityHref ? (
                <a
                  href={communityHref}
                  className={`${actionClassName} border border-border bg-secondary text-secondary-foreground hover:border-foreground/60`}
                >
                  Explore the community
                  <ArrowDown aria-hidden="true" className="size-4" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className={`${actionClassName} border border-border bg-secondary text-secondary-foreground`}
                >
                  Explore the community
                  <ArrowDown aria-hidden="true" className="size-4" />
                </button>
              )}
            </div>
            {!instagramHref || !communityHref ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Instagram and community links are coming soon.
              </p>
            ) : null}
          </HeroMotion>
        </div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:block lg:h-[clamp(32rem,48vw,42rem)]">
          <HeroArc />

          {images.map((image, index) => (
            <HeroMotion
              key={image.label}
              delay={0.18 + index * 0.1}
              variant="reveal"
              className={`group relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card lg:absolute lg:w-[58%] ${
                index === 0
                  ? "lg:left-0 lg:top-0"
                  : "lg:bottom-0 lg:right-0"
              }`}
            >
              <figure className="relative size-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 46vw, 30vw"
                  style={{ objectPosition: image.objectPosition }}
                  className="object-cover transition-transform duration-reveal ease-vortex group-hover:scale-[1.015]"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-sm border border-white/20 bg-background/85 px-3 py-2 text-label uppercase text-foreground backdrop-blur-sm">
                  {image.label}
                </figcaption>
              </figure>
            </HeroMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify TypeScript, server output, and forbidden motion patterns**

Run:

```bash
npm run lint
npm run build
npm run dev
```

With the development server running, use a second terminal:

```bash
curl -s http://localhost:3000 | rg "Move|Together|Go further|Football|Running|Instagram and community links are coming soon"
rg -n "repeat:|Infinity|marquee|parallax" src/components/hero-motion.tsx src/components/hero-section.tsx
```

Expected: lint and build pass; server HTML contains every requested text fragment before client JavaScript runs; the forbidden-motion scan returns no matches.

- [ ] **Step 4: Perform responsive and accessibility inspection**

Open `http://localhost:3000` and inspect these exact cases:

1. At 1440×900, confirm the hero nearly fills the first viewport, content sits left, two equal-area photographs overlap right, and the arc remains behind the photographs.
2. At 768×1024, confirm both photos retain equal prominence and neither overlaps the copy.
3. At 390×844 and 320×568, confirm copy and actions precede the equally sized stacked photographs and no horizontal scrollbar appears.
4. Tab from the browser chrome and confirm the skip link appears first, the home wordmark receives a visible focus ring, and disabled actions do not become broken navigation targets.
5. Enable the operating system's reduced-motion preference, reload, and confirm the final layout appears without headline rise, image masks, or arc drawing.
6. Disable JavaScript, reload, and confirm the full headline, description, actions, labels, and photographs remain visible.
7. Confirm both image labels have identical typography and both cards have identical aspect ratios at every viewport.

If a check fails, correct only the responsible Tailwind class or motion state, then repeat all seven checks.

- [ ] **Step 5: Run final verification and commit**

Stop the development server, then run:

```bash
npm run lint
npm run build
git diff --check
git status --short
```

Expected: lint, build, and whitespace checks pass. Status lists only the intended motion and hero changes.

```bash
git add src/components/hero-motion.tsx src/components/hero-section.tsx
git commit -m "feat: animate hero entrance"
```
