---
name: Vortex Academia — Move Together
colors:
  primary: "#FF2E93"
  primary-foreground: "#0B0B0F"
  surface: "#0B0B0F"
  surface-raised: "#15151C"
  on-surface: "#F7F4F6"
  on-surface-muted: "#B9B6BE"
  border: "#38343F"
  accent-soft: "#FFE5F3"
  error: "#FF8B92"
typography:
  display:
    fontFamily: Barlow Condensed
    fontSize: "clamp(64px, 10vw, 160px)"
    fontWeight: 800
    lineHeight: 0.88
  heading-lg:
    fontFamily: Barlow Condensed
    fontSize: "clamp(40px, 5vw, 80px)"
    fontWeight: 700
    lineHeight: 0.95
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 700
    letterSpacing: 0.08em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
motion:
  fast: 180ms
  reveal: 650ms
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
---

# Vortex Academia — Website Design System

## Overview

Vortex Academia is a Kuala Lumpur based sports community built around **football, running, mutual support, and staying healthy together**. Sessions happen in different locations. The landing page introduces the community to members, local supporters, the wider public, and potential partners. Its main outcome is for visitors to want to follow what Vortex Academia does on Instagram.

The design is a **modern sports collective**: dark, energetic, confident, and human. A strong editorial layout and expressive movement give it the feel of sport, while real people and shared moments convey community. Football and running receive equal attention. The page should not read like a membership sales page or a football club site with running added as an afterthought.

This document adapts the earlier Vortex Academia brand palette for the website. That earlier concept also included a wolf crest and a tagline; neither is an approved website asset under the current brief. Use a typographic wordmark until a final logo is supplied. Do not present a slogan, founding year, membership count, results, partners, or event dates as fact without confirmation.

## Design Principles

1. **People move the story:** Lead with togetherness, shared effort, and actual participants. Performance and competition can appear, but should not dominate the tone.
2. **One community, two activities:** Give football and running equal visual scale, image quality, and editorial space.
3. **Bold with breathing room:** Use large type, decisive crops, and ample negative space. Keep secondary decoration restrained.
4. **Pink signals action:** Reserve hot pink for the main action, select headlines, active states, and small graphic accents.
5. **Timeless home, current Instagram:** Explain what the community does on the site; send visitors to Instagram for current sessions and announcements.
6. **Motion serves the content:** Animate transitions and visual rhythm without obscuring copy or blocking access to actions.

## Colour System

| Token | Value | Use |
| --- | --- | --- |
| Primary / Vortex Pink | `#FF2E93` | Main CTA, small accents, active states, select display words |
| Primary foreground | `#0B0B0F` | Text and icons on solid pink buttons |
| Surface / Academia Black | `#0B0B0F` | Main page canvas |
| Raised surface / Deep Charcoal | `#15151C` | Cards, navigation surface, grouped content |
| On surface / Warm White | `#F7F4F6` | Headlines and primary body copy |
| Muted text | `#B9B6BE` | Supporting copy and metadata on dark backgrounds |
| Border | `#38343F` | Dividers and card outlines |
| Soft Pink | `#FFE5F3` | Rare light contrast panel or small background accent |
| Error | `#FF8B92` | Form errors if a form is added later |

Use dark surfaces for the page rather than alternating whole sections to white. A pale panel may punctuate one moment, but should not become a competing theme. Avoid large uninterrupted pink backgrounds; the primary colour is most effective when it marks one focal point. Use dark text on solid pink controls. Verify WCAG AA contrast for text in the final implementation, including text placed over photographs; add a dark scrim behind image text when needed. Do not use colour alone to convey interaction state.

## Typography

- **Display and section headings:** Barlow Condensed, 700–800. Use uppercase for short, high impact headlines; keep line heights tight and allow deliberate line breaks. Fallback: `Arial Narrow`, then a bold system sans-serif.
- **Body and interface:** Inter, 400–600, with a system sans-serif fallback. Keep descriptive copy in sentence case. Body copy should generally be 16–18px with a comfortable 1.5–1.7 line height.
- **Eyebrows and metadata:** Inter 12–14px, medium or bold, with modest tracking. Uppercase labels are useful for `FOOTBALL`, `RUNNING`, and `KUALA LUMPUR`, but not for paragraphs.
- **Hierarchy:** Hero 64–160px fluid; section headings 40–80px fluid; card headings 28–40px; body 16–18px. Reduce sizes on narrow screens without shrinking the main message into ordinary paragraph scale.
- Avoid script, faux athletic stencil, and multiple competing display fonts. Do not use condensed type for long reading passages.

## Layout and Spacing

- Use an 8px spacing rhythm. Suggested values: 8, 16, 24, 32, 48, 64, 96, and 128px.
- Desktop content width: up to 1280px, with 48–64px outer gutters. Mobile gutters: 20–24px. Keep long text columns around 60–70 characters.
- Use asymmetric composition in the hero and editorial sections, but preserve clear reading order. A strong baseline grid should keep experimental crops and large type coherent.
- Major sections need generous vertical space: approximately 96–160px on desktop and 64–96px on mobile.
- Football and running should form a balanced pair on desktop, then become two equally prominent stacked stories on mobile.
- Design mobile first for the key experience: the headline, community definition, and Instagram action should be clear without relying on hover, horizontal scrolling, or animation.

## Landing Page Structure

1. **Navigation:** Text wordmark `VORTEX ACADEMIA`, links to About, Activities, Community, and an Instagram action. Keep the mobile menu compact and accessible.
2. **Hero — people first:** Short, original headline about moving together; one sentence identifying a KL community for football and running; primary `Follow on Instagram` CTA and secondary `Explore the community` anchor. Use expressive type and a simple arc or motion motif. Do not assume a hero photo exists.
3. **Community introduction:** Explain the purpose in human terms: show up, support one another, play or run, and build healthier habits together. Mention Kuala Lumpur and changing session locations without naming an unconfirmed permanent venue.
4. **Activities:** Two equal editorial features, Football and Running. Focus on the experience and people rather than invented schedules or skill requirements. Each can later accommodate a candid photograph.
5. **Community moments:** A small set of authentic highlights when real material exists. Before that, use concise text-led moments or omit the gallery rather than fabricate event photos or testimonials.
6. **Stay in the loop:** One prominent closing section that directs visitors to Instagram for the latest sessions, announcements, and moments. Do not build an empty upcoming-events calendar or a stale date feed.
7. **Footer:** Wordmark, Kuala Lumpur, Instagram link, and any verified contact or partner information supplied later.

This is a section order, not a requirement to fill every section with equal length. Avoid duplicating Instagram content on the page unless it adds context and can be maintained reliably.

## Imagery and Graphic Language

- Prioritise authentic Vortex Academia photos when available: mixed football and running scenes, arrivals, effort, encouragement, team celebrations, recovery, and candid group moments. Represent the actual community rather than generic professional athletes.
- Seek images with room for typography, natural expressions, and varied framing. Balance dynamic action shots with quieter social moments. Keep skin tones natural and avoid heavy pink colour grading.
- Until real photos exist, use large typography, outlined frames, cropped numerals or labels, and a restrained arc motif. Do not imply generated or stock images depict Vortex members.
- Use circles and sweeping arcs as a subtle reference to the name “Vortex” and motion. A diagonal cut may add pace in one feature section. Avoid placing every element on a slant or using dense textures, flames, and competing sport icons.
- Use simple outline icons only when they improve comprehension. The wordmark may be typeset as text; do not invent a wolf crest or substitute a temporary symbol as an official logo.

## Components

- **Primary button:** Solid Vortex Pink, near black label, 8px radius, clear verb such as `Follow on Instagram`. Include an external-link indicator when appropriate.
- **Secondary button:** Transparent or raised dark fill, 1px visible border, warm white label. Use for on-page navigation rather than a second competing social CTA.
- **Links:** Visible underline or directional cue on hover and focus. Never rely on pink colour alone.
- **Cards:** Raised charcoal or transparent dark surface with a subtle border, 8–16px radius. Use scale and cropping to create energy instead of heavy shadows.
- **Navigation:** Legible against the hero; it may become a raised dark surface on scroll. Retain keyboard access and visible focus.
- **Activity labels:** Compact uppercase identifiers for Football and Running, using the same treatment and prominence for both.
- **Focus:** 2px or thicker high contrast outline with an offset, visible on every interactive control.
- **Touch targets:** At least 44×44px for links, menu controls, and buttons.

## Motion and Interaction

The motion character is expressive and athletic, with controlled entrances rather than constant activity.

- Hero type may enter in staggered lines; arcs may sweep once; photographs may reveal through a mask as they enter view. Keep the primary message readable immediately and the Instagram CTA usable without waiting for an animation.
- Use approximately 180–250ms for hover and press feedback and 500–800ms for major reveals. Stagger related elements by about 70–120ms.
- Scroll movement may add depth in one or two focal sections. Avoid aggressive parallax, continuous marquee text, scroll hijacking, and repeated full screen transitions.
- Do not autoplay sound. Avoid motion that makes text hard to track, especially on mobile.
- Respect `prefers-reduced-motion`: remove transforms, parallax, and staggered entrances while preserving content and state changes.

## Voice and Content

Write in English. Sound confident, direct, encouraging, and collective. Use `we` and `together` naturally, but avoid generic motivational slogans and forced competitive claims. Describe the community accurately: football and running in Kuala Lumpur, shared support, and healthier habits. Do not promise coaching, weekly sessions, open registration, competitions, sponsorships, or fixed locations unless confirmed. Instagram is the source for current activity details; the website tells the enduring story.

Sample hero direction for tone only: **“Move together. Go further.”** This is draft website copy, not an adopted slogan. Final copy should be approved before publication.

## Do's and Don'ts

- **Do** make the primary Instagram action visible early and repeat it at the close.
- **Do** treat football and running as peers and show the shared community around both.
- **Do** use the established hot pink `#FF2E93` against the dark palette.
- **Do** make the design credible before real photos or a final logo exist.
- **Do** preserve readable contrast, keyboard focus, and reduced motion support.
- **Don't** present the older wolf crest or tagline as approved website identity without a new decision.
- **Don't** fabricate photos, dates, testimonials, membership numbers, or social proof.
- **Don't** make the page feel like a professional team recruitment pitch or a fitness product funnel.
- **Don't** use pink for every headline, button, border, and background at once.
