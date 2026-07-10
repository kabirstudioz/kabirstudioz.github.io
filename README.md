# Kabir Raj Singh — Portfolio

A premium cinematic portfolio website for Kabir Raj Singh, an 18-year-old video editor, colorist, and visual storyteller from India. Built with modern web technologies and Apple-inspired design patterns.

## Features

### Multi-Page Architecture
- **Home** (`/`) — Hero with site index and services overview
- **About** (`/about`) — Personal story and background
- **Showreel** (`/showreel`) — Video portfolio with popup preview modals for each skill
- **Skills** (`/skills`) — Technical expertise and tool proficiency
- **Services** (`/services`) — Service offerings and expertise areas
- **Contact** (`/contact`) — Contact form with service selection integration

### Apple-Inspired UI/UX
- **Smooth Animations** — Cubic-bezier easing curves (0.25, 0.46, 0.45, 0.94) throughout for premium feel
- **Scroll Reveals** — Elements fade in and translate smoothly as user scrolls
- **Menu Transitions** — Desktop and mobile menus with fluid backdrop blur effects
- **Modal Popups** — Video preview popups with scaled animations and backdrop blur
- **Hover Effects** — Subtle lift and shadow effects on interactive elements
- **Menu Bar** — Modern sticky navigation with Apple-style hover animations

### Video Portfolio Management
- **Hover Video Cards** — Video preview cards that display floating modal on hover/tap
- **Video Previews** — Centered floating modals with prime-time video previews
- **Responsive Grid** — 2-column grid on desktop, single column on mobile
- **Service Selection Modal** — "Start a Project" modal to select services before contacting

### Client Contact Flow
- **"Start a Project" Modal** — Service selection modal (Video Editing, Color Grading, 3D, Motion Design, AI Tools)
- **Contact Form** — Email-based form with pre-filled service selection
- **Direct Contact Links** — Email and phone available throughout site

### Design System
- **Dark Theme** — Soft charcoal background (oklch: 0.17 0.006 75) with off-white text
- **Warm Amber Accent** — Single primary color (oklch: 0.78 0.13 75) for all CTAs and highlights
- **Typography** — Archivo Sans for body, Instrument Serif for headings
- **Film Grain Overlay** — Subtle animated grain texture for cinematic feel
- **Responsive Layout** — Mobile-first design with fluid scaling

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui
- **Fonts**: Google Fonts (Archivo, Instrument Serif)
- **Animation**: CSS keyframes with Tailwind utilities
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Hosting**: Vercel

## Project Structure

```
app/
  ├── page.tsx              # Home page with hero and site index
  ├── layout.tsx            # Root layout with navigation and footer
  ├── globals.css           # Global styles + Apple animations
  ├── about/
  │   └── page.tsx          # About page
  ├── showreel/
  │   └── page.tsx          # Showreel page with video grid
  ├── skills/
  │   └── page.tsx          # Skills and tools page
  ├── services/
  │   └── page.tsx          # Services page
  └── contact/
      └── page.tsx          # Contact page with form

components/
  ├── site-nav.tsx          # Header navigation with Apple animations
  ├── site-footer.tsx       # Footer
  ├── hover-video-card.tsx  # Video card with popup modal
  ├── start-project-modal.tsx # Service selection modal
  ├── contact-form.tsx      # Email contact form
  ├── reveal.tsx            # Scroll reveal component
  └── ui/                   # shadcn/ui components

lib/
  ├── services.ts           # Service definitions
  └── utils.ts              # Utility functions

public/
  ├── apple-icon.png        # Apple touch icon
  ├── icon*.png             # Various favicons
  └── placeholder.*         # Placeholder images
```

## Animations & Interactions

### Global Animations
- `fadeInUp` — Elements slide up and fade in
- `fadeInDown` — Elements slide down and fade in
- `fadeInScale` — Elements scale up and fade in
- `slideInLeft` — Elements slide from left
- `slideInRight` — Elements slide from right
- `subtleScale` — Hover lift effect on buttons

### Menu Bar Interactions
- Navigation links with underline animation on hover/active
- Menu toggle button with smooth rotation
- Mobile menu with staggered fade-in animation
- Sticky header with backdrop blur on scroll

### Modal Interactions
- Video preview modals fade in with scale animation
- Backdrop blur animates along with modal
- Click outside to close with smooth fade-out
- Keyboard Escape to close

### Form Interactions
- Input fields with focus glow effect
- Smooth transitions on all interactive elements
- Button hover with subtle lift and shadow

## Apple Design Principles Applied

1. **Simplicity** — Clean layout, generous whitespace, minimal UI elements
2. **Motion** — Purposeful animations that guide user attention
3. **Precision** — Exact color palette, consistent typography scale
4. **Responsiveness** — Fluid design that adapts beautifully to all screen sizes
5. **Integration** — Seamless transitions between pages and modals
6. **Accessibility** — Full keyboard navigation, ARIA labels, reduced motion support

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Building for Production

```bash
# Build static site
pnpm build

# Start production server
pnpm start
```

## Environment Setup

No environment variables required for basic functionality. For analytics, ensure Vercel Analytics integration is enabled.

## Customization

### Color Scheme
Edit `app/globals.css` `:root` section to change:
- `--background` — Main background color
- `--foreground` — Main text color
- `--primary` — Accent color for CTAs and highlights
- `--card` — Card/modal background color

### Typography
Update font imports in `app/layout.tsx`:
- `Archivo` — Sans serif (body text)
- `Instrument_Serif` — Serif (headings)

### Animations
Customize animation timing in `app/globals.css`:
- Animation durations (currently 0.8s for scrolls, 0.3s for hovers)
- Cubic-bezier easing curves
- Stagger delays for sequential animations

## Performance

- **Prerendered** — Most pages are static and prerendered
- **Fast Paint** — Optimized images and CSS
- **Web Vitals** — Targeting LCP < 2.5s, CLS < 0.1

## Accessibility

- Full keyboard navigation support
- ARIA labels on all interactive elements
- Color contrast meets WCAG AA standards
- Respects `prefers-reduced-motion` preference
- Semantic HTML structure
- Screen reader optimized

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

Deploy to Vercel with one click:

```bash
# Deploy via Vercel CLI
vercel deploy
```

Or connect repository to Vercel dashboard for automatic deployments on push.

## Contact Information

- **Email**: kabirrajsinghmavi13@gmail.com
- **Phone**: +91 9988613229
- **Portfolio**: [yourdomain.com](https://yourdomain.com)

## License

© 2026 Kabir Raj Singh. All rights reserved.

---

Built with ❤️ using Next.js, React, and Tailwind CSS.
