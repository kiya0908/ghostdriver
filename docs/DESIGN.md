---
version: alpha
name: Ghost Driver Wiki
description: >-
  A high-octane Roblox gaming wiki with a neon-accented dark aesthetic, designed for rapid information lookup on codes,
  cars, and driving mechanics.
logo:
  src: https://ghostdriverwiki.wiki/favicon.svg
colors:
  surface: '#0a0e1a'
  surface-dim: '#060a14'
  surface-bright: '#141829'
  surface-container-lowest: '#050709'
  surface-container-low: '#101a2e'
  surface-container: '#1a2740'
  surface-container-high: '#223254'
  surface-container-highest: '#2a3a5e'
  on-surface: '#e8f0ff'
  on-surface-variant: '#a8b4cc'
  inverse-surface: '#e8f0ff'
  inverse-on-surface: '#0a0e1a'
  outline: '#5f6c88'
  outline-variant: '#3a4a72'
  surface-tint: '#ff3b4a'
  primary: '#ff3b4a'
  on-primary: '#ffffff'
  on-primary-container: '#ff3b4a'
  inverse-primary: '#ff3b4a'
  secondary: '#38bdf8'
  on-secondary: '#0a0e1a'
  on-secondary-container: '#38bdf8'
  tertiary: '#f0b030'
  on-tertiary: '#0a0e1a'
  on-tertiary-container: '#f0b030'
  error: '#dc2626'
  on-error: '#ffffff'
  on-error-container: '#dc2626'
  primary-fixed: '#ff3b4a'
  primary-fixed-dim: '#e63946'
  on-primary-fixed: '#ffffff'
  on-primary-fixed-variant: '#0a0e1a'
  secondary-fixed: '#38bdf8'
  secondary-fixed-dim: '#0ea5e9'
  on-secondary-fixed: '#0a0e1a'
  on-secondary-fixed-variant: '#ffffff'
  tertiary-fixed: '#f0b030'
  tertiary-fixed-dim: '#d98f1f'
  on-tertiary-fixed: '#0a0e1a'
  on-tertiary-fixed-variant: '#ffffff'
  background: '#0a0e1a'
  on-background: '#e8f0ff'
  surface-variant: '#2a3a5e'
typography:
  display:
    fontFamily: Bebas Neue, Bebas Neue Fallback, sans-serif
    fontSize: 60px
    fontWeight: '800'
    lineHeight: 68px
    letterSpacing: '-0.02em'
  headline-lg:
    fontFamily: Bebas Neue, Bebas Neue Fallback, sans-serif
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: '-0.01em'
  headline-md:
    fontFamily: Bebas Neue, Bebas Neue Fallback, sans-serif
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: 0em
  title-lg:
    fontFamily: Inter, Inter Fallback, sans-serif
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter, Inter Fallback, sans-serif
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter, Inter Fallback, sans-serif
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter, Inter Fallback, sans-serif
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter, Inter Fallback, sans-serif
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1280px
elevation:
  sm: 0 1px 2px rgba(0, 0, 0, 0.06)
  md: 0 3px 8px rgba(0, 0, 0, 0.15)
  lg: 0 8px 32px rgba(240, 176, 48, 0.14)
layout:
  containerMaxWidth: 1280px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.lg}'
    padding: 12px 24px
    height: 48px
    fontWeight: '600'
    background: 'linear-gradient(135deg, #f0b030, #a060a0)'
    boxShadow: 0 4px 20px rgba(240, 176, 48, 0.4)
  button-primary-hover:
    transform: translateY(-2px)
    boxShadow: 0 8px 32px rgba(240, 176, 48, 0.5)
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.lg}'
    padding: 12px 24px
    height: 48px
    border: 1px solid {colors.outline-variant}
    fontWeight: '600'
  button-secondary-hover:
    borderColor: '{colors.primary}'
    textColor: '{colors.primary}'
    boxShadow: 0 0 20px rgba(255, 59, 74, 0.3)
  card:
    backgroundColor: '{colors.surface-container}'
    rounded: '{rounded.xl}'
    padding: '{spacing.md}'
    border: 1px solid {colors.outline-variant}
    boxShadow: '{elevation.md}'
  card-hover:
    backgroundColor: '{colors.surface-container-high}'
    borderColor: '{colors.primary}'
    transform: translateY(-2px)
    boxShadow: 0 8px 32px rgba(240, 176, 48, 0.2)
  input-field:
    backgroundColor: '{colors.surface-container-low}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: '{spacing.sm}'
    border: 1px solid {colors.outline-variant}
  badge:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.primary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 10px
    border: 1px solid rgba(255, 59, 74, 0.3)
  badge-tier-s:
    backgroundColor: rgba(245, 158, 11, 0.15)
    textColor: '#f59e0b'
    border: 1px solid rgba(245, 158, 11, 0.3)
  badge-tier-a:
    backgroundColor: rgba(34, 197, 94, 0.15)
    textColor: '#22c55e'
    border: 1px solid rgba(34, 197, 94, 0.3)
  badge-tier-b:
    backgroundColor: rgba(59, 130, 246, 0.15)
    textColor: '#3b82f6'
    border: 1px solid rgba(59, 130, 246, 0.3)
  list-item:
    backgroundColor: transparent
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
    typography: '{typography.body-md}'
  list-item-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
---

## Overview

Ghost Driver Wiki is a high-velocity gaming resource for the Roblox traffic-cutting simulation, serving competitive and casual players seeking codes, car tier rankings, upgrade strategies, and drift mechanics. The design language embraces **Neon-Accented Dark Minimalism**—a aesthetic that pairs a deep, near-black canvas (#0a0e1a) with vivid accent colors (primary red #ff3b4a, secondary cyan #38bdf8, tertiary gold #f0b030) to evoke the adrenaline and visual intensity of high-speed driving. The UI feels urgent yet navigable, with radial gradient overlays (background: radial-gradient(at 20%, #ff3b4a0d 0, #0000 50%)) creating subtle depth without visual noise. The emotional response is one of focused energy: users feel they're accessing insider knowledge in a sleek, gaming-native environment.

The brand voice is direct, casual, and achievement-oriented. Vocabulary leans into gaming vernacular ("tier," "grind," "cash farm," "drift") and avoids corporate formality. Tone is encouraging but matter-of-fact—no hype, just facts. Example sentence in brand voice: "S-tier cars dominate highway runs; pair with the turbo upgrade and you'll cut through traffic in 4.2 seconds flat."

## Colors

The color system is built on a **dark-first, accent-driven hierarchy**. The surface stack anchors the UI in deep navy-blacks: surface (#0a0e1a) is the page background, surface-container (#1a2740) is the card base, and surface-container-highest (#2a3a5e) is reserved for elevated modals or hover states. All text defaults to on-surface (#e8f0ff), a cool off-white that reads cleanly against the dark canvas with 16:1 contrast ratio.

Primary (#ff3b4a) is the brand's signature neon red—used exclusively on CTAs ("Start Beginner Guide" button), active links, and focus states. It commands attention without aggression, appearing in gradients (linear-gradient(135deg, #f0b030, #a060a0)) on hero buttons for visual warmth. Secondary (#38bdf8) is a bright cyan reserved for supporting accents and hover st

## Typography

The type system pairs **Bebas Neue** (display, headlines) with **Inter** (body, labels) to balance personality and legibility. Bebas Neue's condensed, geometric letterforms (fontWeight: 700–800, letterSpacing: -0.02em) convey speed and precision on headlines; Inter's humanist proportions (fontWeight: 400–600, lineHeight: 1.5–1.75) ensure body text remains scannable at 16px on mobile and 18px on desktop. Display text (60px, 800 weight, -0.02em tracking) is reserved for hero titles; headline-lg (40px, 800 weight) for section breaks; headline-md (28px, 700 weight) for card titles. Body-md (16px, 400 weight, 24px line-height) is the default paragraph size, with body-lg (18px, 28px line-height) used for introductory copy. Labels use Inter at 12–14px with 0.08em letter-spacing to create visual s

## Layout

The layout uses a **fluid 12-column grid** with a max-width of 1280px (container-max-width: 1280px) and a 24px gutter (spacing.gutter). On mobile (<768px), the grid collapses to 4 columns with 12px gutters; on tablet (768–1024px), 8 columns with 16px gutters; on desktop (1024px+), full 12 columns with 24px gutters. Section separation uses lg spacing (40px margin-bottom) between major content blocks (hero, featured guides, active codes). Card grids use md spacing (24px gap) for breathing room. The sidebar navigation (on desktop) is fixed at 160px (xl:ml-40 in Tailwind = 10rem = 160px), leaving the main content area fluid. White-space philosophy prioritizes clarity over density: cards have 24px padding (spacing.md), inputs have 12px padding (spacing.sm), and list items have 12px vertical pad

## Elevation & Depth

Depth is conveyed through **layered shadows and subtle backdrop effects** rather than color shifts. The elevation system defines three levels: Level 1 (base cards) uses elevation.md (0 3px 8px rgba(0, 0, 0, 0.15)), creating a soft separation from the background. Level 2 (hovered cards, modals) uses elevation.lg (0 8px 32px rgba(240, 176, 48, 0.14)), introducing the warm primary accent into the shadow for branded depth. Level 3 (floating elements, tooltips) uses a custom glow: box-shadow: 0 0 20px var(--color-accent-glow), inset 0 1px 0 var(--color-accent-glow), where --color-accent-glow is rgb

## Shapes

The shape language is **Geometric Precision with Soft Edges**—a balance between technical sharpness and approachability. Buttons use 12px border-radius (rounded.lg) to feel modern and clickable without excessive rounding; inputs use 8px (rounded.DEFAULT) for a tighter, more utilitarian feel. Cards use 16px (rounded.xl) to soften their presence and invite interaction. Badges and pills use 9999px (rounded.full) for a capsule aesthetic that signals secondary information. The rationale: larger radii (16px+) on primary containers create visual softness and reduce cognitive load; smaller radii (8–12

## Components

### Action Elements
Buttons are the primary interaction layer. **button-primary** uses a gradient background (linear-gradient(135deg, #f0b030, #a060a0)) with 12px padding, 48px height, and rounded.lg (12px) border-radius. On hover, apply transform: translateY(-2px) and box-shadow: 0 4px 20px rgba(240, 176, 48, 0.4) for tactile feedback. The transition duration is 300ms (transition: all 0.3s). **button-secondary** is transparent with a 1px border at outline-variant (#3a4a72), text color on-surface (#e8f0ff), and the same hover lift. On hover, the border becomes primary (#ff3b4a) and a subtle glow appears: box-shadow: 0 0 20px rgba(255, 59, 74, 0.3).

### Containers & Surfaces
**card** is the fundamental container: background surface-container (#1a2740), 1px border at outline-variant (#3a4a7

## Do's and Don'ts

**Do**
- Do use the primary accent (#ff3b4a) exclusively on CTAs and active states—never on passive text or backgrounds.
- Do apply the gradient background (linear-gradient(135deg, #f0b030, #a060a0)) to hero buttons and primary CTAs for visual warmth and brand recognition.
- Do maintain 24px gutter spacing between grid columns and 40px margin-bottom between major sections for breathing room.
- Do use Bebas Neue (800 weight, -0.02em tracking) for headlines to convey speed; reserve Inter (400 weight) for body text to ensure readability.
- Do apply elevation.lg shadow (0 8px 32px rgba(240, 176, 48, 0.14)) on hover to create tactile feedback and branded depth.
- Do use tier-specific badge colors (S: #f59e0b, A: #22c55e, B: #3b82f6) consistently across all tier rankings and car comparisons.

**Don't**
- Don't use secondary (#38bdf8) or tertiary (#f0b030) as primary CTAs—reserve them for supporting accents and tier badges only.
- Don't apply shadows without the warm accent tint; use rgba(240, 176, 48, 0.14) or rgba(255, 59, 74, 0.2) to maintain brand cohesion.
- Don't exceed 1280px container max-width; enforce this on desktop to maintain optimal line length and visual hierarchy.
- Don't round button corners beyond 12px (rounded.lg)—excessive rounding dilutes the technical, gaming-native aesthetic.
- Don't use on-surface-variant (#a8b4cc) for primary body text; reserve it for secondary labels and muted metadata only.
- Don't animate transitions faster than 200ms or slower than 400ms; maintain 300ms as the default for hover and focus states.
