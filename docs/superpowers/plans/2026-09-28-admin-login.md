# Admin Login Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive, accessible, Vortex-branded administrator login page at `/admin/login` with local-only TanStack Form and Zod behavior.

**Architecture:** Keep the document, fonts, and global styles in the root layout; move the public shell into a `(site)` route group so `/admin/login` can use a standalone admin shell without changing public URLs. Keep the route page server-rendered and isolate interactive form state in a colocated client component.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Base UI, TanStack Form, Zod, Lucide React, Node test runner

**Spec:** `docs/superpowers/specs/2026-09-28-admin-login-design.md`

## Global Constraints

- Follow `AGENTS.md` and `DESIGN.md`.
- Preserve `/`, `/football`, `/running`, and `/gallery` and their shared public header and footer.
- Do not modify generated primitives in `src/components/ui/`; compose them from the route-specific component.
- Use TanStack Form for form logic and Zod for validation.
- Make no authentication request and do not log, store, or transmit the entered credentials.
- Do not add forgot-password, registration, social-login, session, redirect, or protected-route behavior.
- Validate a properly formatted, non-empty email and a non-empty password; do not impose a password-length policy.
- Use `public/images/team-photo-5.jpeg` for the desktop image panel and hide that panel below `lg`.
- Keep all interactive targets at least 44px and preserve visible keyboard focus and reduced-motion behavior.

## Review Focus

- Public-route regression after the route-group move: `/`, `/football`, `/running`, and `/gallery` must retain exactly one shared header and footer; Task 1 extends the integration assertions for these URLs.
- Admin-shell leakage: `/admin/login` must render no public header or footer; Task 1 pins this with route-level integration assertions.
- Empty and malformed credentials: empty email, malformed email, and empty password must produce their exact field messages; Task 2 covers these schema cases.
- Unknown future password policy: a one-character non-empty password must remain schema-valid; Task 2 includes this boundary case.
- Accessible initial form markup: visible labels, autocomplete values, password-toggle naming, live status semantics, and a submit control must survive server rendering; Task 3 adds integration assertions for each attribute.

---

### Task 1: Isolate the Public and Admin Route Shells

**Files:**
- Modify: `src/app/home.integration.test.mjs`
- Modify: `src/app/layout.tsx`
- Create: `src/app/(site)/layout.tsx`
- Move: `src/app/page.tsx` → `src/app/(site)/page.tsx`
- Move: `src/app/football/page.tsx` → `src/app/(site)/football/page.tsx`
- Move: `src/app/gallery/page.tsx` → `src/app/(site)/gallery/page.tsx`
- Move: `src/app/running/page.tsx` → `src/app/(site)/running/page.tsx`
- Create: `src/app/admin/layout.tsx`
- Create: `src/app/admin/login/page.tsx`

**Interfaces:**
- Consumes: Existing `SiteHeader`, `SiteFooter`, shared fonts, root metadata, and public route components.
- Produces: Unchanged public URLs wrapped by `(site)/layout.tsx`; standalone `/admin/*` routes; a stable `<main id="main-content" data-page="admin-login">` hook for later tasks and integration tests.

- [ ] **Step 1: Write the failing route-isolation assertions**

Extend `home.integration.test.mjs` so its existing server lifecycle also fetches `/admin/login` and asserts status `200`, a main element with `data-page="admin-login"`, zero `<header>` elements, and zero `<footer>` elements. Retain the existing assertions that every public route has one header and one footer.

- [ ] **Step 2: Run the integration test to verify it fails**

Run: `npm test`

Expected: FAIL because `/admin/login` returns `404` or lacks the admin page marker.

- [ ] **Step 3: Split the shared layouts and move the public routes**

Keep `src/app/layout.tsx` responsible only for `<html>`, font variables, global metadata, `<body>`, and `children`. Implement `(site)/layout.tsx` as the flex column that renders `SiteHeader`, a flexing content wrapper, and `SiteFooter`. Implement `admin/layout.tsx` as a minimal `min-h-svh` dark shell with no public chrome. Move all four public pages into `(site)` without changing their contents.

- [ ] **Step 4: Add the minimal admin login route**

Create a server-rendered `page.tsx` with `<main id="main-content" data-page="admin-login">`. Use temporary semantic text only; Task 4 supplies final page composition and metadata.

- [ ] **Step 5: Run route regression tests**

Run: `npm test`

Expected: PASS, including unchanged public route URLs and isolated admin chrome.

- [ ] **Step 6: Commit the route architecture**

```bash
git add src/app
git commit -m "refactor: isolate admin route shell"
```

### Task 2: Add Form Dependencies, Validation, and Repository Rules

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `AGENTS.md`
- Create: `src/app/admin/login/admin-login-schema.ts`
- Create: `src/app/admin/login/admin-login-schema.test.ts`

**Interfaces:**
- Consumes: `zod` Standard Schema support provided directly by TanStack Form.
- Produces: `adminLoginSchema` and `AdminLoginValues = z.infer<typeof adminLoginSchema>` for Task 3. The schema accepts `{ email: string; password: string }` and uses `Enter your email address.`, `Enter a valid email address.`, and `Enter your password.` as its field messages.

- [ ] **Step 1: Install the runtime form dependencies**

Run: `npm install @tanstack/react-form zod`

Expected: `package.json` and `package-lock.json` contain both runtime dependencies.

- [ ] **Step 2: Configure the existing test command for colocated TypeScript tests**

Change `npm test` to invoke Node with `--experimental-strip-types`, retaining `--test` and `--test-force-exit`, and include both `src/app/*.test.mjs` and `src/app/admin/login/*.test.ts`.

- [ ] **Step 3: Write the failing schema unit test**

Create `admin-login-schema.test.ts` with Node test cases that assert:

- `{ email: "", password: "" }` reports `Enter your email address.` at `email` and `Enter your password.` at `password`.
- `{ email: "not-an-email", password: "secret" }` reports `Enter a valid email address.` at `email`.
- `{ email: "admin@example.com", password: "x" }` succeeds, proving no length policy was invented.

- [ ] **Step 4: Run the schema test to verify it fails**

Run: `npm test`

Expected: FAIL because `admin-login-schema.ts` does not exist.

- [ ] **Step 5: Implement the schema and exported value type**

In `admin-login-schema.ts`, export `adminLoginSchema` as a Zod object with `email` and `password` string fields and the exact messages above. Export `AdminLoginValues` from `z.infer`. Email may be trimmed for validation; password must not be trimmed or transformed.

- [ ] **Step 6: Document the required form stack**

Add these explicit conventions to the UI and implementation section of `AGENTS.md`: `Use TanStack Form for form logic.` and `Use Zod for validation.`

- [ ] **Step 7: Run the tests and type-aware checks**

Run: `npm test && npm run lint`

Expected: Both commands PASS.

- [ ] **Step 8: Commit form foundations**

```bash
git add AGENTS.md package.json package-lock.json src/app/admin/login/admin-login-schema.ts src/app/admin/login/admin-login-schema.test.ts
git commit -m "feat: add admin login validation"
```

### Task 3: Build the Accessible TanStack Login Form

**Files:**
- Modify: `src/app/home.integration.test.mjs`
- Create: `src/components/ui/input.tsx` (generated by shadcn)
- Create: `src/components/ui/field.tsx` (generated by shadcn)
- Create: `src/components/ui/label.tsx` (generated dependency of `field`)
- Create: `src/components/ui/separator.tsx` (generated dependency of `field`)
- Create: `src/app/admin/login/admin-login-form.tsx`

**Interfaces:**
- Consumes: `adminLoginSchema`, `AdminLoginValues`, shadcn `Button`, `Input`, and field primitives.
- Produces: `AdminLoginForm(): React.JSX.Element`, including email/password fields, password visibility, local submission feedback, and the `/` back link.

- [ ] **Step 1: Add failing server-rendered form assertions**

Extend the `/admin/login` integration assertions to require:

- a form with named `email` and `password` inputs;
- `autocomplete="email"` and `autocomplete="current-password"`;
- persistent `Email` and `Password` labels;
- a `type="button"` password toggle with accessible name `Show password`;
- a `Sign in` submit button;
- a live region with `role="status"` and `aria-live="polite"`;
- no `Forgot password` or `Create account` text.

- [ ] **Step 2: Run the integration test to verify it fails**

Run: `npm test`

Expected: FAIL because the minimal page does not render the form controls.

- [ ] **Step 3: Generate the shadcn field primitives**

Run: `npx shadcn@latest add input field`

Expected: New generated `input.tsx`, `field.tsx`, `label.tsx`, and `separator.tsx` primitives compatible with the repository's `base-nova` configuration. Review the generator diff, but do not hand-edit these generated files.

- [ ] **Step 4: Implement `AdminLoginForm` with TanStack Form**

Create a client component using `useForm` and `revalidateLogic({ mode: "blur", modeAfterSubmission: "change" })`, with `adminLoginSchema` supplied as the dynamic Standard Schema validator. Use `defaultValues` matching `AdminLoginValues`. The native form submit handler must prevent default navigation and call only `form.handleSubmit()`.

Render errors from each field's metadata through the generated field error primitive. Associate error IDs through `aria-describedby` and set `aria-invalid` from field validity. Keep the submit button available so an untouched invalid form can surface its errors; only its transient submitting state may disable it.

- [ ] **Step 5: Add local submission and password-visibility state**

The valid `onSubmit` callback sets exactly `Authentication isn't connected yet. Your details were not sent.` and performs no other action. Each field change clears that status before updating TanStack Form state. Toggle the password input between `password` and `text`; update the button label between `Show password` and `Hide password`, use Lucide `Eye`/`EyeOff` decoratively, and prevent pointer-down from needlessly moving focus out of the input.

Render `Back to website` as a Next.js `Link` to `/`. Keep the live status container mounted even when empty so its semantics are present in the initial server HTML.

- [ ] **Step 6: Compose the form into the route**

Replace the temporary content inside the stable admin `<main>` with `AdminLoginForm`. Preserve `id="main-content"` and `data-page="admin-login"`.

- [ ] **Step 7: Run tests, lint, and build**

Run: `npm test && npm run lint && npm run build`

Expected: All commands PASS; the build confirms TanStack Form, Zod, and generated primitives are type-compatible.

- [ ] **Step 8: Commit the functional form**

```bash
git add src/app/home.integration.test.mjs src/app/admin/login src/components/ui/input.tsx src/components/ui/field.tsx src/components/ui/label.tsx src/components/ui/separator.tsx
git commit -m "feat: add admin login form"
```

### Task 4: Apply the Vortex Login Presentation

**Files:**
- Modify: `src/app/home.integration.test.mjs`
- Modify: `src/app/admin/login/page.tsx`
- Modify: `src/app/admin/login/admin-login-form.tsx`

**Interfaces:**
- Consumes: The functional `AdminLoginForm`, shared design tokens, font variables, current logo asset, and `public/images/team-photo-5.jpeg`.
- Produces: Final desktop split layout, mobile form-only layout, route metadata, and Vortex-specific copy and imagery.

- [ ] **Step 1: Add failing branded-page assertions**

Extend the admin integration assertions to require `Vortex Academia`, `Admin Access`, `Welcome back`, a `/` back link, `/images/team-photo-5.jpeg`, and image alt text `Vortex Academia football squad gathered on the pitch after a match.`

- [ ] **Step 2: Run the integration test to verify it fails**

Run: `npm test`

Expected: FAIL on the branded copy or image assertions.

- [ ] **Step 3: Implement page metadata and the split layout**

Export page metadata with title `Admin Login | Vortex Academia` and a concise admin sign-in description. Build a `min-h-svh` grid that becomes two columns at `lg`. Keep the form panel usable on its own, render the current Vortex mark and wordmark, and place the selected image in a `relative hidden lg:block` panel using `next/image` with `fill`, responsive `sizes`, a deliberate cover position, and the exact alt text above.

Add a dark scrim and one restrained pink accent treatment over the image using existing tokens. Do not add literal palette values, extra gradients, fabricated claims, or decorative clutter.

- [ ] **Step 4: Finish route-specific form styling and copy**

Use the existing typography tokens for the `ADMIN ACCESS` eyebrow and condensed `Welcome back` heading. Keep the supporting copy direct and administrative. Ensure fields, visibility control, submit button, and back link meet 44px touch targets and use tokenized surfaces, borders, foregrounds, focus states, and primary color.

Keep the mobile form panel within the existing mobile gutter range and cap its reading width. Do not render the photograph below `lg`. Avoid entrance transforms so the primary form is immediately readable and reduced-motion behavior requires no special client branch.

- [ ] **Step 5: Run the complete automated verification**

Run: `npm test && npm run lint && npm run build`

Expected: All commands PASS with public routes intact and the admin page fully rendered.

- [ ] **Step 6: Manually verify the interaction and responsive states**

Run: `npm run dev`

Check `/admin/login` at approximately `390×844` and `1440×900`:

- Mobile shows no image and needs no horizontal scrolling.
- Desktop shows the full-height two-column composition and a deliberate team-photo crop.
- Empty submit and malformed email show the exact inline errors.
- A one-character password is accepted by validation.
- Show/hide preserves the password value and pointer focus behavior.
- A valid submit shows the neutral live message and makes no network request.
- Editing either field clears the message.
- Tab order, focus rings, labels, error associations, and touch targets are usable.
- The back link returns to `/`, whose public header and footer remain present.

- [ ] **Step 7: Commit the final presentation**

```bash
git add src/app/home.integration.test.mjs src/app/admin/login
git commit -m "feat: style admin login page"
```
