---
name: Pink Noir
colors:
  primary: "#F52D83"
  primary-hover: "#FF5299"
  on-primary: "#0A0A0A"
  background: "#000000"
  surface: "#121212"
  surface-raised: "#1C1C1C"
  surface-hover: "#242424"
  on-surface: "#F5F5F5"
  on-surface-muted: "#B0B0B0"
  disabled: "#777777"
  error: "#FF6B7A"
typography:
  heading:
    fontFamily: "Barlow Condensed"
    fontWeight: 600
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
rounded:
  sm: 8px
  md: 12px
  lg: 16px
---

# Design System

## Overview
A dark-only, pink-accented visual language that feels considered, modern, and distinctly human. Black is the canvas; solid near-black surfaces create hierarchy through tonal contrast rather than borders, shadows, blur, or decorative effects. The interface is clean, flat, and restrained, with comfortable spacing and softly rounded corners.

This is a visual and editorial system, not a feature specification. Apply it consistently regardless of page content.

## Design Principles
- **Dark only:** No light theme, theme toggle, or light-mode variants.
- **Borderless by default:** Distinguish elements using solid background values, spacing, alignment, scale, and typography—not visible strokes or dividers.
- **Flat means flat:** No gradients, glassmorphism, backdrop blur, glow, skeuomorphism, or ornamental shadows.
- **Pink with purpose:** Use the accent for clear actions, selected states, and small points of emphasis. Do not flood the interface with pink.
- **Clear hierarchy:** Every element should earn its visual weight. Prefer fewer, better-defined layers over nested boxes.
- **Human, not generated:** Avoid overly polished template patterns, generic marketing phrases, filler labels, and decorative clutter.

## Colors

| Token | Hex | Usage |
| --- | --- | --- |
| **Primary** | `#F52D83` | Primary actions, active states, focused accents, selective emphasis |
| **Primary hover** | `#FF5299` | Hover state for primary interactive elements |
| **On primary** | `#0A0A0A` | Text/icons on solid pink backgrounds |
| **Background** | `#000000` | Page and app canvas |
| **Surface** | `#121212` | Cards, sections, controls, and foreground components |
| **Surface raised** | `#1C1C1C` | Nested controls, elevated-by-tone components, menus |
| **Surface hover** | `#242424` | Hover or pressed surfaces where more contrast is needed |
| **On surface** | `#F5F5F5` | Main text and headings |
| **On surface muted** | `#B0B0B0` | Supporting text and secondary labels |
| **Disabled** | `#777777` | Noninteractive content, only when paired with clear disabled styling |
| **Error** | `#FF6B7A` | Errors and destructive states |

### Color Usage
- Keep the overall composition predominantly black and near-black.
- Differentiate `#000000` from `#121212` by using clear solid surface blocks and intentional space around them.
- Use `#1C1C1C` sparingly for elements nested inside `#121212`; avoid stacking too many dark layers.
- Avoid visible borders, separator lines, white outlines, translucent panels, and semi-transparent overlays as a design language.
- Use dark text (`#0A0A0A`), **not white text**, on filled primary-pink controls for readability.
- Target at least **4.5:1** contrast for normal text and **3:1** for large text and meaningful non-text UI indicators. Validate color combinations in their actual state.
- Do not introduce other accent colors without a semantic need.

## Typography
- **Headings:** Barlow Condensed, weight 600–700. Compact, confident, and expressive; use normal sentence case unless there is an editorial reason for uppercase.
- **Body:** Inter, weight 400, typically 14–16px, with 1.5–1.65 line-height.
- **Labels and controls:** Inter, weight 500–600, typically 12–14px. Favor clarity over forced uppercase or excessive tracking.
- **Text colors:** Main content `#F5F5F5`; supporting text `#B0B0B0`.
- **Alignment:** Prefer left-aligned content. Center-align only where the composition clearly benefits.
- **Hierarchy:** Create distinction through size, weight, line-height, and spacing—not decorative text effects.

### Suggested Type Scale
| Style | Font | Size | Weight | Line height |
| --- | --- | --- | --- | --- |
| Display | Barlow Condensed | 52–64px | 700 | 1.0–1.1 |
| H1 | Barlow Condensed | 40–48px | 700 | 1.1 |
| H2 | Barlow Condensed | 30–36px | 600 | 1.15 |
| H3 | Barlow Condensed | 24–28px | 600 | 1.2 |
| Body | Inter | 16px | 400 | 1.6 |
| Body small | Inter | 14px | 400 | 1.5 |
| Label | Inter | 12–14px | 500–600 | 1.4 |

Scale down large headings sensibly on small screens; never let condensed type become crowded or unreadable.

## Layout and Spacing
- Use an **8px spacing rhythm**, with 4px adjustments only where needed.
- Favor generous breathing room and deliberate groupings rather than cramming content into cards.
- Align to a consistent grid with stable content widths and predictable gutters.
- Separate major regions through whitespace and tonal surface changes, not lines.
- Keep component padding proportional: approximately 12–16px for compact controls and 20–32px for larger surfaces.
- Preserve hierarchy on mobile with responsive spacing and typography; do not rely on hover for essential meaning.

## Shape and Depth
- **Corner radii:** 8px for compact elements, 12px as the default, 16px for larger containers.
- Use the same radius logic throughout the interface. Avoid mixing sharp rectangles, excessive pills, and unrelated rounded shapes.
- **No visible borders.** A component's edge should be defined by its fill against the surrounding surface.
- **No drop shadows, inner shadows, gradients, glows, or blur.** Depth comes from solid tonal contrast and layering.
- For keyboard accessibility, a clearly visible focus indicator is required. A focus-only outline is an accessibility exception, not a decorative border.

## Components
- **Primary buttons:** Solid `#F52D83` fill, dark `#0A0A0A` text, medium weight, 12px radius. Hover with `#FF5299`; disabled appearance must remain obvious.
- **Secondary buttons:** Solid `#1C1C1C` surface with light text. Avoid outlined button styles.
- **Text buttons:** Light or pink text without a surrounding shape when the action is intentionally low-emphasis.
- **Inputs:** Solid `#1C1C1C` background, light input text, muted placeholder text, no border. Distinguish focus using a visible accessible focus treatment; use inline validation copy for errors.
- **Cards and panels:** `#121212` fill against black, 12–16px corners, no border and no shadow. Distinguish nested content through spacing before adding another surface.
- **Menus and popovers:** Solid near-black fills, clear padding and selected states, no transparency or glass effects.
- **Navigation elements:** Use weight, spacing, and selective pink to indicate the current item; avoid decorative underlines and boxed borders.
- **Icons:** Simple, consistent stroke or solid style. Use only when they improve comprehension; do not decorate every label.
- **Motion:** Brief and restrained, primarily for state changes. Avoid bouncing entrances, scroll theatrics, looping decoration, and exaggerated easing. Respect reduced-motion preferences.

## Copywriting and Voice
Write as a thoughtful person speaking to another person—not as a brand-template generator.

- Be direct, specific, and conversational. Use ordinary words and short sentences when they help.
- Tell people what matters. Prefer concrete benefits, context, and actions over vague claims.
- Keep headlines concise and distinctive; a heading does not need a dramatic slogan.
- Make labels and buttons explicit about what happens next.
- Avoid inflated language such as “revolutionize,” “unlock your potential,” “seamless experience,” “next-level,” or “empower your journey” unless genuinely justified by the content.
- Avoid repetitive three-part taglines, artificial enthusiasm, excessive exclamation marks, emoji-as-decoration, and generic calls to action.
- Vary sentence rhythm naturally. Do not force every section into the same headline / paragraph / button formula.
- Prefer a calm, confident tone over hype. Do not invent testimonials, metrics, promises, or urgency.

## Do's and Don'ts

### Do
- Use black as the main canvas and clearly differentiated near-black fills for components.
- Keep pink selective and functional.
- Use Barlow Condensed for headings and Inter for everything else.
- Keep geometry soft and consistent.
- Let whitespace, scale, alignment, and type create the visual structure.
- Write useful, natural copy with specific meaning.
- Check contrast, keyboard focus, responsive behavior, and readability.

### Don't
- Add light mode, gradients, glass effects, blur, shadows, or glows.
- Add borders or hairline dividers to establish hierarchy.
- Make every component pink or visually loud.
- Use decorative blobs, floating shapes, fake dashboard imagery, unnecessary badges, or templated hero compositions merely to fill space.
- Rely on overly polished, generic AI-style marketing language.
- Combine unrelated corner radii or introduce inconsistent spacing.
- Sacrifice accessibility to preserve minimalism.

## Final Design Check
Before calling a screen complete, confirm that it is dark-only, visibly separates black and near-black surfaces, has no decorative borders/effects, uses pink sparingly, follows both font families and the radius/spacing scale, remains accessible, and reads like it was written by a real person.
