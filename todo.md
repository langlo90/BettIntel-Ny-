# BettIntel.com - Casino Affiliation Website Development Plan

## Design Guidelines

### Design References (Primary Inspiration)
- **Betway.com**: Professional casino listings, clean card layouts
- **Casino.org**: Trust-focused design, clear rating systems
- **Style**: Modern Professional + Dark Theme + Trust & Credibility

### Color Palette
- Primary: #0F172A (Slate Dark - background)
- Secondary: #1E293B (Slate Gray - cards/sections)
- Accent: #10B981 (Emerald Green - CTAs and trust indicators)
- Warning: #F59E0B (Amber - highlights)
- Text: #F1F5F9 (Light Slate), #94A3B8 (Slate Gray - secondary)

### Typography
- Heading1: Inter font-weight 700 (42px)
- Heading2: Inter font-weight 600 (32px)
- Heading3: Inter font-weight 600 (24px)
- Body/Normal: Inter font-weight 400 (16px)
- Body/Emphasize: Inter font-weight 600 (16px)
- Navigation: Inter font-weight 600 (14px)

### Key Component Styles
- **Buttons**: Primary - Emerald background (#10B981), white text, 8px rounded, hover: brighten 10%
- **Cards**: Dark slate (#1E293B), 1px border (#334155), 12px rounded, hover: lift 4px with glow
- **Star Ratings**: Gold (#FBBF24) filled, gray (#64748B) empty, 20px size
- **Forms**: Dark inputs with subtle border, focus: emerald accent

### Layout & Spacing
- Hero section: 60vh height with gradient overlay
- Casino grid: 3 columns desktop, 2 tablet, 1 mobile, 24px gaps
- Section padding: 60px vertical
- Card hover: Lift 4px with emerald glow, 300ms transition

### Images to Generate
1. **hero-casino-chips.jpg** - Casino chips and cards on dark felt table, professional lighting (Style: photorealistic, dark mood)
2. **casino-placeholder-1.jpg** - Modern casino interior with slot machines, premium atmosphere (Style: photorealistic)
3. **casino-placeholder-2.jpg** - Roulette wheel close-up, elegant and luxurious (Style: photorealistic)
4. **casino-placeholder-3.jpg** - Poker table with cards and chips, professional setting (Style: photorealistic)
5. **logo-bettintel.png** - BettIntel logo with shield/trust emblem, modern design (Style: vector-style, transparent background)
6. **admin-dashboard-bg.jpg** - Abstract tech pattern, dark theme (Style: minimalist, geometric)

---

## Development Tasks

### Phase 1: Backend Setup
1. **Database Schema** - Create tables for casinos, reviews, admin users
2. **Mock Data** - Generate sample casino listings with ratings

### Phase 2: Frontend Core
3. **Generate Images** - Create all 6 images using ImageCreator.generate_images
4. **Homepage** - Hero section, casino listings grid with filters
5. **Casino Card Component** - Image, star rating, two buttons (visit + review)
6. **Navigation** - Header with logo, navigation links

### Phase 3: Admin System
7. **Admin Login** - Secure authentication page
8. **Admin Dashboard** - Casino management interface (CRUD operations)
9. **Image Upload** - Admin can upload casino images
10. **Link Management** - Admin can manage casino URLs

### Phase 4: Review System
11. **Review Page** - Display all reviews for a casino
12. **Review Submission** - Form for users to submit ratings and comments
13. **Rating Calculation** - Average star ratings display

### Phase 5: Polish
14. **Responsive Design** - Mobile optimization
15. **Loading States** - Spinners and skeleton screens
16. **Error Handling** - User-friendly error messages
17. **Final Testing** - Cross-browser testing and bug fixes