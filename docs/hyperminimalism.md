# Hyperminimalism Design Style

A design philosophy that emphasizes extreme simplicity, abundant whitespace, and precision through mathematical alignment and grid systems.

## Core Principles

### 1. Maximum Whitespace
- **Negative Space**: At least 60% of the viewport should be empty
- **Breathing Room**: Use 32px, 64px, 96px, and 128px generously for spacing
- **Focus**: One primary element per section
- **Margins**: Minimum 64px on desktop, 32px on mobile

### 2. Perfect Alignment
- **Grid System**: Strict adherence to 12-column grid
- **Baseline Grid**: 8px baseline for all vertical alignment
- **Invisible Lines**: Create invisible connections between elements
- **Center Alignment**: Use center alignment sparingly, only for maximum impact
- **Left Alignment**: Default for all text content

### 3. Typography Focus
- **Font Choice**: Single clean sans-serif family throughout
- **Font Weights**: Maximum 2 weights (regular and one bold)
- **Size Hierarchy**: Dramatic size differences (16px body, 48px+ headers)
- **Letter Spacing**: Increased tracking for headers (1-2%)
- **Color**: Monochromatic - single color with opacity variations

### 4. Minimal Color Palette
- **Colors**: Maximum 2 colors
  - Primary: Almost black (#000000) or off-white (#FFFFFF)
  - Accent: Single color used sparingly (less than 5% of design)
- **Gradients**: Avoid unless extremely subtle (1-2% opacity change)
- **Opacity**: Use transparency for depth (0.1, 0.2, 0.3)

## Implementation Rules

### Layout Structure
```
Header: Logo + Navigation (centered)
Hero: Single headline + one CTA
Content: One element per section
Footer: Minimal links (3-4 max)
```

### Spacing Guidelines
- **Section Spacing**: 128px minimum
- **Element Spacing**: 64px minimum
- **Text Line Height**: 1.6 for body, 1.1 for headers
- **Paragraph Width**: 60-70 characters max

### Interactive Elements
- **Buttons**: Outline style with subtle hover
- **Links**: Underline on hover only
- **Transitions**: 300ms ease, subtle transform (translateY(-2px))
- **States**: Clear but minimal visual feedback

### Content Strategy
- **Text**: Short, impactful statements
- **Images**: Single large image per section
- **Icons**: Simple line icons, maximum 2px stroke
- **Data**: Clean graphs with minimal labels

## When to Use Hyperminimalism

### Perfect For:
- Portfolio websites
- Product landing pages
- Luxury brands
- Consulting firms
- Creative agencies
- Apps with complex functionality

### Avoid When:
- Content-heavy sites (news, blogs)
- E-commerce with many products
- Educational platforms
- Government/utility sites

## Technical Specifications

### CSS Guidelines
```css
/* Base spacing using 8px grid */
:root {
  --space-1: 0.5rem;   /* 8px */
  --space-2: 1rem;     /* 16px */
  --space-4: 2rem;     /* 32px */
  --space-8: 4rem;     /* 64px */
  --space-12: 6rem;    /* 96px */
  --space-16: 8rem;    /* 128px */
}

/* Typography scale */
h1 { font-size: 3rem; }      /* 48px */
h2 { font-size: 2.5rem; }    /* 40px */
h3 { font-size: 2rem; }      /* 32px */
p  { font-size: 1rem; }      /* 16px */


Remember: In hyperminimalism, every element must justify its existence. If you can remove it without losing functionality, remove it.