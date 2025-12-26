# Kylva Agency Website - Product Requirements Document

## Project Overview
**Agency Name:** Kylva  
**Website URL:** kylva.com  
**Project Type:** Agency portfolio website  
**Timeline:** 1 week  
**Goal:** Attract international clients and generate leads through email/social media outreach

---

## Technical Stack
- **Framework:** Nuxt 4
- **Styling:** Tailwind CSS
- **Backend:** Nuxt Nitro
- **Database:** PostgreSQL (AWS RDS)
- **ORM:** Prisma or node-postgres
- **Hosting:** AWS Amplify (Frontend + Backend)
- **Storage:** AWS S3 (images/assets)
- **Email:** Amazon SES
- **CDN:** CloudFront (automatic with Amplify)
- **Language:** JavaScript (No TypeScript)

---

## Site Structure

### Pages (5 Total)
1. **Home** (`/`)
2. **About** (`/about`)
3. **Services** (`/services`)
4. **Portfolio** (`/portfolio`)
5. **Contact** (`/contact`)

### Navigation
- Fixed/sticky header on all pages
- Mobile-responsive hamburger menu
- Navigation items: Home | About | Services | Portfolio | Contact
- CTA button in header: "Get Started" or "Work With Us"

---

## Design System

### Color Palette

**Light Mode (Default):**
- Background: `#F8F8F8` (Soft gray - makes gold pop)
- Surface/Cards: `#FFFFFF` (White)
- Text Primary: `#0A0A0A` (Soft Black)
- Text Secondary: `#6B7280` (Gray)
- Accent Gold: `#D4AF37` (Rich Gold)
- Accent Gold Bright: `#FFD700` (Hover/highlights - glittering effect)
- Border/Divider: `#E5E7EB` (Light Gray)

**Dark Mode:**
- Background: `#0A0A0A` (Soft Black)
- Surface/Cards: `#1A1A1A` (Charcoal)
- Text Primary: `#FFFFFF` (White)
- Text Secondary: `#9CA3AF` (Light Gray)
- Accent Gold: `#FFD700` (Bright Gold - pops on dark)
- Accent Gold Hover: `#FFC700` (Extra bright for hover)
- Border/Divider: `#262626` (Dark Gray)

### Typography

**Primary Font:** Space Grotesk
- Usage: Headings (H1, H2, H3, H4, H5, H6)
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

**Secondary Font:** Poppins
- Usage: Body text, paragraphs, captions, buttons
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)

**Font Sizes (Tailwind classes):**
- H1: `text-5xl md:text-6xl lg:text-7xl` (Hero headings)
- H2: `text-4xl md:text-5xl` (Section headings)
- H3: `text-3xl md:text-4xl` (Sub-section headings)
- H4: `text-2xl md:text-3xl`
- Body Large: `text-lg md:text-xl`
- Body Regular: `text-base`
- Body Small: `text-sm`
- Caption: `text-xs`

### Spacing & Layout

**Container:**
- Max width: `max-w-7xl` (1280px)
- Padding: `px-4 md:px-6 lg:px-8`
- Margin: `mx-auto`

**Section Spacing:**
- Top/Bottom padding: `py-16 md:py-24 lg:py-32`
- Between elements: `space-y-8 md:space-y-12`

**Grid System:**
- Portfolio grid: 2 columns (mobile), 3 columns (desktop)
- Services grid: 1 column (mobile), 2-3 columns (desktop)

---

## Component Specifications

### 1. Header/Navigation
**Requirements:**
- Sticky positioned (`sticky top-0`)
- Backdrop blur effect: `backdrop-blur-md bg-white/80 dark:bg-slate-900/80`
- Logo (left): Text "Kylva" in Space Grotesk, bold
- Nav links (center/right): Home, About, Services, Portfolio, Contact
- CTA button (right): Primary blue button
- Dark mode toggle button (icon)
- Mobile: Hamburger menu with slide-in drawer
- Z-index: `z-50`

### 2. Footer
**Requirements:**
- Dark background in both modes
- 3-4 column layout (desktop), stacked (mobile)
- Columns: About Kylva, Quick Links, Services, Contact Info
- Social media icons (styled in blue accent color)
- Copyright text: "© 2024 Kylva. All rights reserved."
- Links hover effect: Blue accent color

### 3. Hero Section (Home Page)
**Requirements:**
- Full viewport height or near full: `min-h-screen` or `min-h-[80vh]`
- Large heading with gradient or emphasis
- Subheading/tagline
- Two CTAs: Primary ("Get Started") + Secondary ("View Our Work")
- Optional: Animated background elements or subtle patterns
- Scroll indicator (optional)

### 4. Services Cards
**Requirements:**
- Card layout with hover effects
- Each card contains:
  - Icon (can use lucide-react icons)
  - Service title
  - Brief description
  - "Learn More" link
- Hover: Lift effect (`transform hover:-translate-y-2`)
- Border or subtle shadow
- Transition: `transition-all duration-300`

### 5. Portfolio Grid
**Requirements:**
- Masonry or equal-height grid
- Each item contains:
  - Project image (aspect ratio 16:9 or 4:3)
  - Project title overlay on hover
  - Project category tag
  - Click to view project details (modal or separate page)
- Image lazy loading
- Hover: Image scale effect or overlay fade-in

### 6. Contact Form
**Requirements:**
- Fields: Name, Email, Phone (optional), Service Interest (dropdown), Message
- Validation: Client-side + server-side
- Submit button with loading state
- Success/error messages
- Accessible labels and error states
- API endpoint: `/api/contact` (Nuxt Nitro)
- Store submissions in MongoDB

### 7. CTA Sections
**Requirements:**
- Repeated throughout site
- Large heading + subtext
- Primary button
- High contrast background (blue gradient or solid)
- White text for visibility

---

## Functionality Requirements

### Dark Mode Toggle
- Toggle button in header (sun/moon icon)
- Store preference in localStorage
- Apply class to `<html>` tag: `class="dark"`
- Smooth transition between modes: `transition-colors duration-300`
- Default: Light mode

### Animations & Interactions
- Scroll animations: Fade-in, slide-up (use Intersection Observer or library)
- Smooth scrolling: `scroll-behavior: smooth`
- Button hover effects: Scale, gold glitter animation
- Link hover: Gold color brighten + underline animation
- Image hover: Scale or overlay
- **Gold Glitter Effect:** Bold shimmer animation on gold elements (buttons, CTAs, icons)
  - Use CSS animations with shine sweep effect
  - Multiple layered shadows for metallic depth
  - Transform + opacity changes for sparkle
- Keep animations performant (GPU-accelerated)

### Responsive Design
**Breakpoints (Tailwind):**
- Mobile: `< 640px`
- Tablet: `640px - 1024px` (sm, md)
- Desktop: `> 1024px` (lg, xl, 2xl)

**Key Responsive Changes:**
- Navigation: Full menu → Hamburger menu (mobile)
- Grid layouts: Single column → Multi-column
- Font sizes: Smaller → Larger
- Spacing: Reduced → Increased
- Images: Full width → Contained width

### Performance Optimization
- Image optimization: Use Nuxt Image module
- Lazy loading for images below fold
- Code splitting: Automatic with Nuxt
- Minify CSS/JS in production
- Font optimization: Use `font-display: swap`

### SEO Requirements
- Meta tags: Title, description, OG tags per page
- Semantic HTML: Proper heading hierarchy
- Alt text for all images
- Sitemap.xml
- robots.txt
- Fast load times (< 3s)

---

## Database Schema (PostgreSQL)

### Contact Form Submissions
```sql
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  service_interest VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Portfolio Projects
```sql
CREATE TABLE portfolio_projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url TEXT NOT NULL,
  project_url TEXT,
  technologies TEXT[],
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## API Endpoints (Nuxt Nitro)

### `/api/contact` (POST)
- Accepts: JSON body with form data
- Validates: Required fields, email format
- Action: Store in MongoDB
- Returns: Success/error message
- Optional: Send email notification to admin

### `/api/portfolio` (GET)
- Returns: List of portfolio projects
- Optional filters: category, featured
- Pagination: Limit 9-12 per page

---

## Assets Needed

### Images
- Logo: SVG or PNG (transparent background)
- Portfolio project images: High quality, optimized
- Team photos (for About page): Professional headshots
- Icons: Use lucide-react or heroicons

### Content Placeholders
- Hero tagline
- Service descriptions
- About company text
- Portfolio project details
- Contact information (email, phone, social links)

---

## Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile: iOS Safari, Chrome Android

---

## Accessibility (a11y)
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratios: 4.5:1 (normal text), 3:1 (large text)
- Focus indicators visible
- Skip to content link

---

## Testing Requirements
- Cross-browser testing
- Mobile responsiveness testing (various devices)
- Form validation testing
- Dark mode toggle testing
- Performance testing (Lighthouse score > 90)
- Accessibility testing (axe DevTools)

---

## Deployment Checklist
- [ ] AWS Account created with free tier
- [ ] RDS PostgreSQL instance created (db.t3.micro)
- [ ] Database tables created (run SQL migrations)
- [ ] S3 bucket created for images
- [ ] AWS Amplify app connected to GitHub repo
- [ ] Environment variables set in Amplify (DB connection string)
- [ ] Amazon SES configured for email notifications
- [ ] Domain DNS configured (kylva.com → Amplify)
- [ ] SSL certificate auto-configured by Amplify
- [ ] Contact form tested end-to-end
- [ ] Favicon added
- [ ] Social media meta tags configured
- [ ] 404 page designed

---

## Future Enhancements (Post-Launch)
- Blog section for content marketing
- Client testimonials section
- Case study detail pages
- Newsletter signup
- Live chat integration
- Multi-language support
- Admin dashboard for managing content