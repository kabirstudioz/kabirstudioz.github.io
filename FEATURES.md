# Portfolio Features & Apple Design Animations

## Apple-Inspired Design System

### Animation Philosophy
All animations follow Apple's design principles:
- **Purposeful Motion** — Every animation guides user attention
- **Smooth Easing** — Cubic-bezier curves (0.25, 0.46, 0.45, 0.94) throughout
- **Responsive Timing** — 0.8s for scroll reveals, 0.3s for interactions, 0.4s for modals
- **Accessibility First** — Respects `prefers-reduced-motion` preference

### Core Animations Implemented

#### 1. **Scroll Reveal Animation**
```css
animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```
- Elements fade in while translating upward by 24px
- Staggered delays (0ms, 100ms, 200ms, etc.) for sequential reveals
- Used on all major sections and page headings

**Where to see it:**
- Home page hero section
- All page headings
- Section content on scroll
- Index links in Shot List

#### 2. **Menu Bar Animations**
**Desktop Navigation:**
- Navigation links have underline animation on hover
- Links slide down from top on page load
- Active link highlighted with primary color
- Menu bar blur increases on scroll

**Mobile Navigation:**
- Hamburger menu icon smoothly rotates
- Menu slides down with fade-in animation
- Menu items have staggered fadeInUp animation
- Each item animates in sequence

**Where to see it:**
- Top sticky navigation on all pages
- Try hovering over nav links
- Toggle mobile menu at viewport width < 768px

#### 3. **Modal Animations**
```css
animation: fadeInScale 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```
- Modals scale from 0.95 → 1.0 (small scale up)
- Backdrop blur animates simultaneously
- Modal shadow changes based on state
- Close with smooth fade-out

**Modals in Portfolio:**

**a) Start Project Modal**
- Triggered by "START A PROJECT" button
- Shows 5 service options (Video Editing, Color Grading, 3D, Motion Design, AI Tools)
- Checkbox selection with primary color highlight
- "Continue to Contact" button links to contact page with selected services

**Where to see it:**
- Click "START A PROJECT" button in header
- Or in hero section
- Or throughout the site

**b) Video Preview Modals**
- Triggered by hovering over video cards in Showreel
- Shows centered floating video with 3D perspective
- Click outside modal or video card to close
- Accent line appears at top of hovered card

**Where to see it:**
- Navigate to /showreel
- Hover over any of the 4 video cards:
  - Short-Form Retention Edits
  - Long-Form Storytelling
  - Documentary-Style Sequences
  - Color Grading Breakdowns

#### 4. **Button & Link Hover Effects**
```css
.menu-item:hover {
  transform: translateY(-2px);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

**Effects Applied:**
- Buttons lift up 2px on hover (translateY(-2px))
- Links get subtle color shift to primary
- Service cards lift 4px on hover
- Shadow depth increases
- All transitions smooth and snappy

**Where to see it:**
- All buttons throughout site
- Navigation links
- Service selection cards in modal
- Contact form inputs (glow effect)

#### 5. **Input Field Focus Animation**
```css
input:focus {
  box-shadow: inset 0 0 0 1px oklch(0.78 0.13 75), 
              0 0 12px oklch(0.78 0.13 75 / 0.2);
}
```
- Border color changes to primary on focus
- Subtle glowing shadow appears
- Smooth 300ms transition

**Where to see it:**
- Contact form on /contact page
- Name, email, subject, and message fields

#### 6. **Marquee-style Divider**
- Large typography divider animates across page
- Subtle color for visual interest without distraction
- Used between page sections

**Where to see it:**
- Home page between hero and site index
- Divides visual areas

#### 7. **Backdrop Blur Effects**
```css
backdrop-filter: blur(16px);
```
- Navigation bar has blur on scroll
- Modals have blur underneath them
- Creates depth and focus

**Where to see it:**
- Sticky header on all pages
- Behind any open modal
- Mobile menu blur

### Per-Page Animations

#### Home Page (`/`)
- Hero text reveals with stagger (100ms each)
- Site index links slide in with hover effect
- Service cards lift on hover
- Scroll indicator pulses
- Film grain overlay animated at 45% opacity

#### About Page (`/about`)
- Profile image fades in
- Bio text reveals in sequence
- Stats appear with scale animation

#### Showreel Page (`/showreel`)
- Main reel video frame has accent border animation
- Video cards have primary accent line that appears on hover
- Modal preview pops in with scale + fade

#### Skills Page (`/skills`)
- Tool categories fade in
- Skill bars animate with width transitions

#### Services Page (`/services`)
- Service cards lift on hover
- Numbers scale up slightly
- Descriptions fade in

#### Contact Page (`/contact`)
- Form elements reveal in sequence
- Contact info boxes have accent borders
- Input fields have focus glow

## Interactive Features

### 1. **Video Preview System**

Each video card in the Showreel has:
- Hover state detection (desktop) or tap (mobile)
- Floating modal with video player
- Accented border around modal
- Title bar with video name
- Close button in modal corner
- Play icon overlay if video fails to load

### 2. **Service Selection Modal**

"Start a Project" modal features:
- Multi-select checkboxes (can select multiple services)
- Selected services show with primary color highlight
- Service counter updates dynamically
- "Continue to Contact" button pre-fills form
- "Skip & Contact" option for unsure users
- Escape key closes modal

### 3. **Contact Form Integration**

Contact form includes:
- Pre-filled subject line if services selected
- Direct email integration (opens email client)
- Phone number quick call button
- Direct email display
- Smooth form validation

### 4. **Responsive Navigation**

Desktop (≥768px):
- Full horizontal menu
- Large spaced navigation
- Underline animation on hover

Mobile (<768px):
- Hamburger menu toggle
- Vertical menu dropdown
- Staggered animation
- Full-width touch targets

## Color & Visual System

### Color Palette

```
Dark Theme:
- Background: oklch(0.17 0.006 75)    # Soft charcoal
- Foreground: oklch(0.94 0.008 85)    # Off-white
- Primary: oklch(0.78 0.13 75)         # Warm amber/gold
- Card: oklch(0.21 0.007 75)           # Slightly lighter than background
- Muted: oklch(0.63 0.01 80)           # Gray text
```

### Film Grain Texture
- Subtle animated grain overlay
- Opacity: 4.5% (very subtle)
- Uses SVG turbulence for organic feel
- Fixed positioning across entire page

## Motion Preferences

Portfolio respects user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Users with `prefers-reduced-motion` enabled will:
- See no animations
- Have instant transitions
- Maintain full functionality

## Performance Optimizations for Animations

### CSS-based
- Hardware-accelerated transforms (translateY, scale)
- GPU-accelerated effects (backdrop-filter)
- Will-change hints on animated elements
- Optimized keyframe animations

### JavaScript
- Scroll reveal uses Intersection Observer API
- No scroll event listeners (efficient)
- Modal interactions use requestAnimationFrame
- Minimal DOM manipulation

### Accessibility
- No animations block interaction
- All animations are non-essential enhancements
- Keyboard navigation fully supported
- Screen reader text alternative

## Customizing Animations

### Edit Animation Timing
In `app/globals.css`, adjust:
```css
.reveal {
  transition: opacity 0.8s, transform 0.8s;
  /* Change 0.8s to desired duration */
}
```

### Change Easing Curve
```css
/* Current Apple-style easing */
cubic-bezier(0.25, 0.46, 0.45, 0.94)

/* Other popular easing options */
ease-in-out: cubic-bezier(0.42, 0, 0.58, 1)
ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94)
snappy: cubic-bezier(0.4, 0, 0.2, 1)
```

### Add New Animation
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.your-element {
  animation: slideUp 0.6s ease-out;
}
```

## Browser Compatibility

All animations use:
- Standard CSS animations (excellent support)
- CSS transforms (hardware accelerated)
- Backdrop filter (Safari 9+, Chrome 76+)
- Intersection Observer (IE 11+ with polyfill)

Tested on:
- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+
- Mobile Safari 17+
- Chrome Android latest

## Testing Animations

### Performance Testing
```bash
# Open DevTools in Chrome/Edge
# F12 → Performance tab → Record
# Scroll through page
# Check for frame rate (aim for 60fps)
```

### Accessibility Testing
```bash
# Test reduced motion
# DevTools → Rendering → Emulate CSS Media Feature prefers-reduced-motion
# Should see no animations
```

### Mobile Testing
```bash
# Test on actual device
# iOS: Accessibility → Reduce Motion (ON/OFF)
# Android: Accessibility → Remove Animations (ON/OFF)
```

---

All animations are designed to enhance rather than distract from the portfolio content. The focus remains on showcasing Kabir's exceptional editing and color grading work.
