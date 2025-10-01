# CertSpire Design Guidelines - Apple-Inspired Premium Certification Platform

## Design Approach
**Reference-Based: Apple Human Interface Guidelines**
Drawing inspiration from Apple.com's minimalist sophistication, we'll create a premium certification training platform that emphasizes clarity, generous whitespace, and subtle elegance. The design focuses on content hierarchy through typography and spacing rather than decorative elements.

**Core Principles:**
- Clarity through simplicity
- Deference to content
- Depth through subtle layering
- Large, bold typography as visual anchor
- Generous breathing room between elements

## Color Palette

**Light Mode:**
- Background: 0 0% 100% (pure white)
- Surface: 0 0% 98% (soft gray for cards)
- Primary Text: 0 0% 13% (near black)
- Secondary Text: 0 0% 45% (medium gray)
- Accent: 221 83% 53% (Apple blue for CTAs)
- Success: 142 71% 45% (certification badges)
- Border: 0 0% 90% (subtle dividers)

**Dark Mode:**
- Background: 0 0% 7% (deep charcoal)
- Surface: 0 0% 11% (elevated cards)
- Primary Text: 0 0% 98% (off-white)
- Secondary Text: 0 0% 70% (light gray)
- Accent: 221 83% 58% (brighter blue)
- Border: 0 0% 20% (subtle dividers)

## Typography
**Font Stack:** -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif

**Scale:**
- Hero Headline: 72px/1.05, weight 700, tracking -0.02em
- Section Headline: 48px/1.1, weight 600, tracking -0.01em
- Subsection: 32px/1.2, weight 600
- Body Large: 21px/1.4, weight 400
- Body: 17px/1.5, weight 400
- Caption: 14px/1.4, weight 400

## Layout System
**Spacing Units:** Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32

**Container Strategy:**
- Maximum width: 1280px (max-w-7xl)
- Hero sections: Full-width with inner constraint
- Content sections: max-w-6xl centered
- Text blocks: max-w-3xl for readability

**Section Padding:**
- Desktop: py-24 to py-32
- Mobile: py-16 to py-20

## Component Library

### Navigation
- Fixed transparent header with backdrop blur (blur-xl)
- Height: 64px with horizontal padding px-8
- Logo left-aligned, navigation center, CTA right
- Smooth scroll behavior with 80px offset
- Shadow appears on scroll: shadow-sm

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Large hero image: Abstract professional/education imagery with gradient overlay
- Headline + subheadline + dual CTA buttons
- Buttons on images: backdrop-blur-md with white/10 background
- Scroll indicator at bottom

### Feature Cards
- 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Card style: Subtle background (surface color), rounded-2xl, p-8
- Icon area: 56x56px, subtle background circle
- Title: 24px weight 600
- Description: 17px secondary text
- Hover: Subtle lift (translate-y-1) and shadow increase

### Course Cards
- 2-column grid for featured courses
- Thumbnail image: 16:9 aspect ratio, rounded-xl
- Progress bar: Thin (h-1), rounded-full, accent color
- Metadata: Completion %, hours, difficulty badge

### Practice Interface Mockup
- Split layout: Question left (60%), feedback right (40%)
- Card-based question display with rounded-xl borders
- Confidence slider: Custom styled with accent color
- AI feedback: Soft background panel with icon

### Call-to-Action Sections
- Full-width with gradient background (subtle blue-to-purple)
- Centered content with max-w-4xl
- Large headline + supporting text + primary button
- Button: Accent color, rounded-xl, px-8 py-4, weight 600

### Statistics Section
- 4-column grid showing key metrics
- Large numbers: 56px weight 700, accent color
- Labels: 17px secondary text below
- Subtle dividers between columns on desktop

### Footer
- Three-column layout on desktop
- Links organized by category
- Social icons: 24x24px with hover state
- Copyright and legal links at bottom
- Subtle top border divider

## Images

**Hero Image:**
Large, high-quality image showing professionals in modern workspace or abstract geometric patterns representing learning pathways. Apply gradient overlay (from transparent to background color) for text legibility. Dimensions: 1920x1080px minimum.

**Feature Section Icons:**
Clean, minimalist line icons (not photos) for AI Practice, Progress Tracking, Spaced Repetition, and Confidence Scoring. Use icon library like Heroicons in 48px size.

**Course Thumbnails:**
Professional photography or illustrations representing each certification type (PMP, CAPM, Agile). Dimensions: 640x360px, maintain consistent style.

**Practice Interface:**
Screenshot or illustration showing the AI-powered practice session with clean, modern UI elements.

## Animations
Use sparingly for polish, not distraction:
- Fade-in on scroll for section reveals (0.6s ease-out)
- Subtle hover lifts on interactive cards (0.2s ease)
- Smooth scroll behavior for anchor navigation
- Page load: Stagger hero elements with 0.1s delay between each

## Layout Sections (in order)
1. Navigation (fixed)
2. Hero with large image and CTAs
3. Feature highlights (4 cards: AI Practice, Progress Tracking, Spaced Repetition, Confidence Scoring)
4. Statistics bar (users, pass rate, practice questions, certifications)
5. Course showcase (2-3 featured certifications with thumbnails)
6. Practice interface preview (visual mockup)
7. Testimonials (2-column with photos)
8. Final CTA section with gradient background
9. Footer (comprehensive)