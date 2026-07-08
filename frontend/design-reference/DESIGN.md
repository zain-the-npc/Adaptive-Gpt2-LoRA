---
name: Technical Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626262'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
This design system is built on the principles of **high-density minimalism and technical rigor**. It is designed for environments where information clarity and structural integrity are paramount, such as developer tools, financial terminals, or engineering dashboards. 

The aesthetic is "Low-Entropy UI"—removing all decorative flourishes (shadows, gradients, roundedness) to focus entirely on content and hierarchy. The emotional response should be one of absolute reliability, precision, and quiet authority. The style leverages a **Modern-Brutalist** framework, utilizing sharp edges, thin hairlines, and a constrained monochromatic palette to create a "printed document" feel in a digital space.

## Colors
The palette is intentionally austere to prioritize legibility.
- **Surface:** The foundation is an off-white (#fcfcfc), reducing the harsh eye strain of pure #ffffff while maintaining a clean, paper-like quality.
- **Ink:** All primary text and iconography use a near-black (#1a1a1a) for maximum contrast.
- **Borders:** A muted hierarchy of grays (#e5e5e5 and #d1d1d1) is used for structural definition.
- **Accents:** Muted colors are reserved strictly for functional status indicators (e.g., a 1px solid line for a focused state or system alert) rather than decorative fills.

## Typography
The typography utilizes **Inter** for its neutral, highly legible geometric-humanist qualities. To reinforce the technical nature of the design system, **JetBrains Mono** is introduced for labels, metadata, and secondary data points.

All headlines use tight tracking and high weights to anchor sections. Body text maintains a generous line height for long-form readability. Labels are consistently uppercase with slight letter spacing to differentiate them from interactive text.

## Layout & Spacing
The layout follows a **rigorous 4px grid system**. Everything is aligned to these increments to ensure mathematical consistency.

- **Grid:** A 12-column fixed-width grid for desktop (centered), transitioning to a fluid layout on tablet and mobile.
- **Density:** High information density is encouraged. Use narrow gutters (16px) to allow for complex data views.
- **Padding:** Internal component padding should be tight (8px or 12px) to maintain the "technical tool" aesthetic.
- **Alignment:** Prefer left-aligned content and hard-edged containers. Whitespace is used as a functional separator rather than a decorative one.

## Elevation & Depth
This design system **completely avoids shadows, blurs, and depth effects**. 

Hierarchy is established through **Layered Outlines**:
1. **Level 0 (Base):** The #fcfcfc background.
2. **Level 1 (Cards/Sections):** Defined by a 1px solid #e5e5e5 border. No background change.
3. **Level 2 (Modals/Overlays):** Defined by a 1px solid #1a1a1a border with a sharp, high-contrast separation.

Depth is communicated via "inking"—elements that are active or "on top" are defined by heavier border weights or a shift in background color to a very light gray (#f5f5f5), never through elevation.

## Shapes
Shapes are defined by **sharp, geometric precision**. A minimal 4px radius is applied to primary UI elements (buttons, inputs) to prevent a "hostile" aesthetic while remaining decidedly non-rounded. Cards and larger layout sections should remain strictly at 0px or 4px. Never use pills or circular buttons unless for 1:1 ratio icon containers.

## Components
- **Buttons:** 1px solid #1a1a1a border. Square corners. Primary buttons use a solid #1a1a1a fill with #fcfcfc text. Secondary buttons use a transparent fill with a 1px #d1d1d1 border.
- **Inputs:** 1px solid #d1d1d1 border. On focus, the border becomes 1px solid #1a1a1a. Label text sits directly above the input in JetBrains Mono.
- **Cards:** Flat containers with a 1px #e5e5e5 border. No shadow. Headers within cards are separated by a 1px horizontal line.
- **Chips/Tags:** Small square-edged boxes. #f5f5f5 background, no border, 10px JetBrains Mono text.
- **Icons:** 16px or 20px monochrome line icons (1px stroke weight). In specific navigation contexts, use initials inside a 24px square with a 1px border.
- **Lists:** Data rows separated by 1px #e5e5e5 horizontal rules. Hover states are indicated by a subtle background shift to #f5f5f5.