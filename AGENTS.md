# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router project. Routes, layouts, and global styles live in `src/app/`; shared utilities in `src/lib/`; and static assets in `public/`. Keep route-specific components near their route and reusable components in `src/components/`.

## UI & Implementation Standards

Use Tailwind CSS as the default styling system, shadcn/ui as the default component library, and Motion as the default animation library. Treat `DESIGN.md` as the authoritative visual and interaction guideline. Use the CSS variables in `src/app/globals.css` as design tokens; extend them there rather than scattering literal colors, spacing, or radii through components.

Do not directly modify generated shadcn primitives in `src/components/ui/`. Compose, wrap, or specialize them outside that directory. Keep additions scalable, readable, maintainable, consistent, and aligned with established industry practices. Avoid “AI slop”: generic template sections, excessive gradients or decoration, unnecessary abstractions, repetitive copy, fabricated content, and styling that conflicts with the design system. Do not assume requirements, data, assets, APIs, or behavior. Inspect the repository first and ask when a material decision is unresolved.

## Build, Test, and Development Commands

- `npm ci` installs the exact dependency versions recorded in `package-lock.json`.
- `npm run dev` starts the local development server at `http://localhost:3000`.
- `npm run lint` runs the Next.js and TypeScript ESLint rules.
- `npm run build` creates the production build and checks type and rendering errors.
- `npm start` serves the completed production build.

## Coding Style & Naming Conventions

Use two-space indentation, double quotes, semicolons, and functional React components. Name components with PascalCase, variables and functions with camelCase, and hooks with a `use` prefix. Follow App Router file names such as `page.tsx` and `layout.tsx`. Prefer server components; add `"use client"` only when necessary. Import from `src` through `@/*` and use `cn` from `@/lib/utils` for conditional classes.

## Testing Guidelines

No automated test framework or coverage threshold is configured. Run `npm run lint` and `npm run build`, then manually verify affected pages at desktop and mobile widths. Name future tests `*.test.ts` or `*.test.tsx` and colocate them with their subject.

## Commit & Pull Request Guidelines

Use short Conventional Commit-style subjects, matching history: `feat: add activity cards`, `fix: preserve mobile focus state`, or `docs: update contributor guide`.

Pull requests should explain the outcome and implementation choices, link issues, and report verification. Include screenshots or recordings for visual or motion changes.
