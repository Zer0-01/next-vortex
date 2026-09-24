# Vortex Academia Hero Section Design

## Purpose

Create the first landing-page hero for Vortex Academia. The hero must introduce a Kuala Lumpur community where football and running have equal importance, communicate shared effort and mutual support, and make following the community on Instagram the eventual primary action.

Success means a first-time visitor can understand what Vortex Academia is, where it is based, and what to do next without relying on animation or prior brand knowledge. The result should feel like a modern sports collective rather than a professional club, recruitment page, or fitness-product funnel.

## Scope

This work covers the hero and the compact navigation treatment immediately above it. It does not build the later community, activities, gallery, or closing Instagram sections.

The current implementation will use temporary licensed stock photography because authentic Vortex photography and the final Instagram URL are not available. The imagery must not be presented as actual Vortex members. Source, creator, license, and replacement notes will be recorded alongside the assets.

## Content

- Eyebrow: `KUALA LUMPUR · FOOTBALL + RUNNING`
- Headline: `MOVE TOGETHER. GO FURTHER.`
- Supporting copy: `A Kuala Lumpur community brought together by football, running, and the habit of showing up for one another.`
- Primary action label: `Follow on Instagram`
- Secondary action label: `Explore the community`

The headline is draft website copy, not an adopted brand slogan.

Until destinations exist, both actions use disabled button semantics and a concise visible note that links are coming soon. They must not use fake `#` destinations. When destinations become available, the primary action becomes an external link and the secondary action becomes an in-page anchor without requiring a visual redesign.

## Composition

Use the approved “Community Window” composition. The hero occupies approximately 85–90% of the initial viewport so the following page area can eventually peek into view.

On desktop, an asymmetric two-column layout places the content on the left and two overlapping photo frames on the right. One photo represents communal football and one represents group running. The frames receive equal visual area and image quality so neither activity appears secondary.

A single thin pink arc crosses behind the images as a restrained reference to motion and the Vortex name. It is decorative, not a logo. The photographs use editorial crops, subtle charcoal borders, modest rounding, and no heavy shadow or pink color grade.

On mobile, the complete message and actions appear before the imagery. The images stack at equal sizes and use independent focal positions to keep people and movement visible. Tablet layouts reduce overlap before switching to the mobile stack.

## Visual Treatment

Use the tokens and typography already defined in `DESIGN.md` and `src/app/globals.css`:

- Near-black page canvas
- Warm-white primary type
- Barlow Condensed for the headline
- Inter for supporting and interface copy
- Hot pink only for `TOGETHER.`, the eventual primary action, focus states, and the arc
- Raised charcoal and border tokens for image frames and navigation surfaces

The compact navigation uses the typographic `VORTEX ACADEMIA` wordmark. It must not introduce a temporary crest, tagline, partner, date, or unverified fact.

## Motion

Use Motion for a controlled one-time entrance:

- Headline lines rise into place with a short stagger.
- The two photographs reveal through simple vertical masks.
- The arc draws once and then remains still.
- Hover-capable devices receive only slight image scale and directional icon feedback.

Content remains readable and controls remain available during the animation. Under `prefers-reduced-motion`, render the final state immediately without transforms, masks, or stagger. Nothing floats, loops, or scroll-hijacks.

## Component Boundaries

- `src/app/page.tsx` composes the page and supplies hero content.
- `src/components/site-header.tsx` renders the compact server-rendered navigation treatment.
- `src/components/hero-section.tsx` owns the server-rendered semantic structure, responsive layout, actions, imagery, and decorative arc.
- `src/components/hero-motion.tsx` is the client-only Motion boundary for entrance and hover effects.
- Temporary image files live under `public/images/hero/` with a nearby credit and replacement record.

Avoid changing generated primitives under `src/components/ui/`. No new component abstraction is required unless it represents a clear, reusable boundary.

## Accessibility and Failure Handling

- Preserve logical reading order: identity, headline, description, actions, then imagery.
- Give informative image alternative text based on visible content without claiming the people are Vortex members.
- Hide the decorative arc from assistive technology.
- Maintain at least 44×44px touch targets and visible focus styles.
- Keep text off photographs so contrast does not depend on a scrim.
- Store temporary images locally so the hero does not depend on a remote image host at runtime.
- Use explicit disabled semantics while CTA destinations are unavailable.
- Ensure the layout remains coherent if motion does not run or JavaScript is unavailable.

## Verification

- Run `npm run lint`.
- Run `npm run build`.
- Manually inspect desktop and mobile widths for hierarchy, equal sport prominence, crop quality, focus visibility, and overflow.
- Verify keyboard behavior and disabled-action semantics.
- Verify the reduced-motion presentation.
- Confirm stock-image credits and replacement notes match the selected local files.

## Out of Scope

- Final logo or crest design
- Authentic Vortex photography
- Choosing or publishing the Instagram profile URL
- Community, activities, gallery, and closing CTA sections
- Event schedules, testimonials, membership claims, partner claims, or other unverified content
