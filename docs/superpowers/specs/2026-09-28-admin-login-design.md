# Admin Login Design

## Intent

Create a polished, responsive administrator sign-in page at `/admin/login`. The page should be visually inspired by shadcn's `login-02` block while using the established Vortex Academia design system. It is an entry point for administrators, not a public registration flow.

Authentication is not integrated in this iteration. The page must validate locally, make no network request, and tell the user that authentication is not connected and their details were not sent.

## Scope

This change includes:

- A standalone admin route shell without the public site header or footer.
- An email-and-password login form.
- Client-side form state through TanStack Form.
- Client-side validation through Zod.
- A show/hide password control.
- A link back to the public website.
- Responsive Vortex-branded presentation using the selected team image at `public/images/team-photo-5.jpeg`.
- Repository guidance documenting TanStack Form and Zod as the required form and validation tools.

This change does not include:

- An authentication API, server action, session, cookie, redirect, or protected route.
- Password recovery.
- Account registration.
- Social or third-party login.
- A minimum password-length policy.

## Application Structure

The shared root layout remains responsible for the HTML document, fonts, global metadata baseline, and global body styling. Public route chrome moves into a `(site)` route group:

```text
src/app/
  layout.tsx
  (site)/
    layout.tsx
    page.tsx
    football/page.tsx
    gallery/page.tsx
    running/page.tsx
  admin/
    layout.tsx
    login/
      page.tsx
      admin-login-form.tsx
```

The route group does not alter public URLs. Its layout renders `SiteHeader` and `SiteFooter`, while the admin layout provides a standalone shell. The login page remains a server component for metadata and composition; the colocated form component is a client component because TanStack Form and the password visibility control require client state.

Generated shadcn primitives in `src/components/ui/` remain unmodified. Login-specific composition and styling live with the route.

## Visual Design

At the desktop breakpoint, the page uses a full-height two-column layout inspired by `login-02`:

- The form panel contains the current Vortex mark and wordmark, an `ADMIN ACCESS` eyebrow, a condensed `Welcome back` heading, concise supporting text, the form, submission status, and a restrained link back to the website.
- The image panel uses `public/images/team-photo-5.jpeg` with a deliberate cover crop. A dark scrim and restrained pink accent treatment connect the photograph to the Vortex palette without obscuring the people in it.

Below the desktop breakpoint, the image panel is hidden. The form becomes a focused, single-column screen with mobile gutters and vertically centered content.

All styling uses the existing design tokens from `globals.css`: dark background and raised surfaces, warm-white primary text, muted supporting text, visible borders, pink focus rings, and a solid pink submit button with dark text. Interactive targets are at least 44px. A short entrance transition may use Motion and must respect reduced-motion preferences.

## Form Content and Behavior

The form contains:

- An email field with `type="email"` and `autocomplete="email"`.
- A password field with `autocomplete="current-password"`.
- An accessible show/hide password button that preserves the field's value and focus.
- A `Sign in` submit button.

The Zod schema requires a valid, non-empty email address and a non-empty password. It intentionally applies no password-length rule because the future authentication policy is unknown.

TanStack Form owns field state, touched state, submission, and validation integration. Field errors appear concisely after blur and on submission, are programmatically associated with their inputs, and set invalid accessibility state when present.

A valid submission performs no network request. It displays an accessible neutral status message:

> Authentication isn't connected yet. Your details were not sent.

Editing either field after a valid submission clears this status. The page includes no forgot-password or registration link. `Back to website` navigates to `/`.

## Accessibility and Error Handling

- Each input has a persistent visible label.
- Validation messages are connected with `aria-describedby` and invalid fields expose `aria-invalid`.
- Submission feedback uses an appropriate live status region without stealing focus.
- The visibility toggle has an explicit accessible name that reflects its action.
- Keyboard users can reach every interactive element in a logical order and receive the global high-contrast focus treatment.
- The image has descriptive alternative text when semantically rendered; purely decorative overlays are hidden from assistive technology.
- No user data is logged, stored, or transmitted.

## Dependencies and Repository Guidance

Add `@tanstack/react-form` and `zod` as runtime dependencies. Add explicit guidance to `AGENTS.md` requiring TanStack Form for form logic and Zod for validation.

Use existing shadcn primitives where available. Any newly generated primitive must be added through the shadcn workflow and left unmodified; route-specific styling composes around it.

## Verification

Development follows test-driven implementation. Extend the existing integration coverage before implementation to verify that:

- `/admin/login` returns a successful response.
- The login route renders the selected team image and expected login content.
- The login route does not render the public site header or footer.
- Existing public routes still render their shared header and footer at unchanged URLs.

After implementation:

- Run `npm test`.
- Run `npm run lint`.
- Run `npm run build`.
- Manually verify desktop and mobile layouts, invalid and valid submissions, status clearing, password visibility, keyboard navigation, and focus behavior.

## Success Criteria

The feature is complete when `/admin/login` is a responsive, accessible, Vortex-branded standalone page; the form uses TanStack Form and Zod; a valid submission clearly reports that authentication is unavailable without transmitting details; existing public URLs and chrome remain intact; the new repository conventions are documented; and all verification commands pass.
