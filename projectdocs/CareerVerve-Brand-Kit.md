# CareerVerve Brand Kit
**Global Careers, Local Impact**

## Brand Identity

### Logo & Visual Identity
- **Brand Name**: CareerVerve
- **Tagline**: Global Careers, Local Impact
- **Logo**: Globe-based design with career trajectory/growth elements (orange dynamic lines)
- **Logo Colors**: Blue globe (#2563EB primary), Orange accent (#F97316), Green connection dots (#10B981)
- **Logo Usage**: 
  - Primary: Full logo with tagline for headers, marketing materials
  - Secondary: Logo mark only for favicons, social media avatars
  - Minimum size: 120px width for readability
  - Clear space: 1/2 logo height on all sides

### Brand Voice & Tone
- **Professional yet Approachable**: Expert guidance without intimidation
- **Globally Minded, Locally Aware**: Understanding cultural nuances in career building
- **Empowering**: Helping users take control of their career journey
- **Trustworthy**: Reliable tools and advice for important life decisions
- **Innovative**: Modern solutions for traditional career challenges

### Key Messaging
- **Primary Value Prop**: "Build resumes that work everywhere, optimized for anywhere"
- **Secondary Messages**:
  - "Country-specific CV requirements made simple"
  - "ATS-optimized resumes that score 90+"
  - "From local opportunities to global careers"
  - "Your career, your rules, our tools"

## Color Palette

### Primary Colors
```json
{
  "brand": {
    "primary": "#2563EB",        // Blue - Trust, professionalism, global reach
    "secondary": "#F97316",      // Orange - Energy, growth, career progression
    "accent": "#10B981"          // Green - Success, connection, opportunity
  }
}
```

### Extended Palette
```json
{
  "blue": {
    "50": "#EFF6FF",
    "100": "#DBEAFE", 
    "200": "#BFDBFE",
    "300": "#93C5FD",
    "400": "#60A5FA",
    "500": "#3B82F6",
    "600": "#2563EB",           // Primary Blue
    "700": "#1D4ED8",
    "800": "#1E40AF",
    "900": "#1E3A8A"
  },
  "orange": {
    "50": "#FFF7ED",
    "100": "#FFEDD5",
    "200": "#FED7AA", 
    "300": "#FDBA74",
    "400": "#FB923C",
    "500": "#F97316",           // Primary Orange
    "600": "#EA580C",
    "700": "#C2410C",
    "800": "#9A3412",
    "900": "#7C2D12"
  },
  "green": {
    "50": "#ECFDF5",
    "100": "#D1FAE5",
    "200": "#A7F3D0",
    "300": "#6EE7B7", 
    "400": "#34D399",
    "500": "#10B981",           // Accent Green
    "600": "#059669",
    "700": "#047857",
    "800": "#065F46",
    "900": "#064E3B"
  }
}
```

### Neutral Palette
```json
{
  "gray": {
    "50": "#F9FAFB",
    "100": "#F3F4F6",
    "200": "#E5E7EB",
    "300": "#D1D5DB",
    "400": "#9CA3AF",
    "500": "#6B7280",
    "600": "#4B5563",
    "700": "#374151",
    "800": "#1F2937",
    "900": "#111827"
  },
  "white": "#FFFFFF",
  "black": "#000000"
}
```

### State Colors
```json
{
  "success": "#10B981",
  "warning": "#F59E0B", 
  "error": "#EF4444",
  "info": "#3B82F6"
}
```

## Typography

### Font Stack
```json
{
  "fontFamily": {
    "sans": ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
    "mono": ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
    "display": ["Inter", "sans-serif"]
  }
}
```

### Font Weights & Sizes
```json
{
  "fontWeight": {
    "light": "300",
    "normal": "400", 
    "medium": "500",
    "semibold": "600",
    "bold": "700",
    "extrabold": "800"
  },
  "fontSize": {
    "xs": "0.75rem",      // 12px
    "sm": "0.875rem",     // 14px
    "base": "1rem",       // 16px
    "lg": "1.125rem",     // 18px
    "xl": "1.25rem",      // 20px
    "2xl": "1.5rem",      // 24px
    "3xl": "1.875rem",    // 30px
    "4xl": "2.25rem",     // 36px
    "5xl": "3rem",        // 48px
    "6xl": "3.75rem"      // 60px
  },
  "lineHeight": {
    "tight": "1.25",
    "snug": "1.375", 
    "normal": "1.5",
    "relaxed": "1.625",
    "loose": "2"
  }
}
```

### Typography Hierarchy
- **H1 Headings**: 3xl/4xl, font-bold, primary blue
- **H2 Headings**: 2xl/3xl, font-semibold, gray-900
- **H3 Headings**: xl/2xl, font-semibold, gray-800
- **Body Text**: base/lg, font-normal, gray-700
- **Small Text**: sm, font-normal, gray-600
- **Captions**: xs, font-medium, gray-500

## Spacing System

```json
{
  "spacing": {
    "0": "0",
    "1": "0.25rem",       // 4px
    "2": "0.5rem",        // 8px  
    "3": "0.75rem",       // 12px
    "4": "1rem",          // 16px
    "5": "1.25rem",       // 20px
    "6": "1.5rem",        // 24px
    "8": "2rem",          // 32px
    "10": "2.5rem",       // 40px
    "12": "3rem",         // 48px
    "16": "4rem",         // 64px
    "20": "5rem",         // 80px
    "24": "6rem",         // 96px
    "32": "8rem",         // 128px
    "40": "10rem",        // 160px
    "48": "12rem",        // 192px
    "56": "14rem",        // 224px
    "64": "16rem"         // 256px
  }
}
```

## Border Radius & Shadows

```json
{
  "borderRadius": {
    "none": "0",
    "sm": "0.125rem",     // 2px
    "base": "0.25rem",    // 4px
    "md": "0.375rem",     // 6px
    "lg": "0.5rem",       // 8px
    "xl": "0.75rem",      // 12px
    "2xl": "1rem",        // 16px
    "3xl": "1.5rem",      // 24px
    "full": "9999px"
  },
  "boxShadow": {
    "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "base": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  }
}
```

## UI Component Guidelines

### Buttons
- **Primary**: Blue background, white text, medium font-weight
- **Secondary**: White background, blue border, blue text
- **Accent**: Orange background, white text for CTAs
- **Border Radius**: md (6px)
- **Padding**: py-2 px-4 (small), py-3 px-6 (medium), py-4 px-8 (large)

### Cards
- **Background**: White with subtle shadow
- **Border**: None or light gray border
- **Border Radius**: lg (8px)
- **Padding**: p-6 (24px)

### Forms
- **Input Fields**: Gray-200 border, focus blue-500 border
- **Labels**: Font-medium, gray-700
- **Error States**: Red-500 border and text
- **Success States**: Green-500 border and text

### Navigation
- **Header Background**: White with subtle shadow
- **Active Links**: Primary blue color and underline
- **Hover States**: Blue-100 background

## Dark Mode Support

### Dark Theme Colors
```json
{
  "dark": {
    "bg": {
      "primary": "#111827",     // gray-900
      "secondary": "#1F2937",   // gray-800  
      "tertiary": "#374151"     // gray-700
    },
    "text": {
      "primary": "#F9FAFB",     // gray-50
      "secondary": "#E5E7EB",   // gray-200
      "tertiary": "#9CA3AF"     // gray-400
    },
    "border": "#374151"         // gray-700
  }
}
```

## Imagery & Icons

### Icon Style
- **Style**: Outline/stroke icons (Heroicons, Lucide)
- **Weight**: 1.5px stroke width
- **Size**: 16px (sm), 20px (base), 24px (lg)
- **Color**: Inherit from text color or use brand colors

### Photography Guidelines
- **Style**: Professional, diverse, authentic
- **Color Treatment**: Slightly desaturated to complement brand colors
- **Subject Matter**: Career-focused, global diversity, modern workplace

### Illustration Style
- **Style**: Minimal, geometric, professional
- **Colors**: Brand palette with plenty of white space
- **Usage**: Feature explanations, empty states, onboarding

## Content Guidelines

### Writing Style
- **Tone**: Professional but friendly
- **Voice**: Confident, knowledgeable, supportive
- **Clarity**: Short sentences, active voice
- **Inclusivity**: Gender-neutral language, cultural sensitivity

### Microcopy
- **Buttons**: Action-oriented ("Build My Resume", "Get ATS Score")
- **Forms**: Helpful, not demanding ("We'll send you a verification email")
- **Errors**: Constructive, solution-oriented
- **Empty States**: Encouraging, with clear next steps

## Brand Applications

### Website Header
- Logo with tagline on desktop
- Logo mark only on mobile
- Primary navigation with active states
- CTA button in orange for "Build Resume"

### Resume Templates
- Clean, professional layouts
- Brand colors used sparingly for accents
- Typography hierarchy maintained
- Country-specific adaptations

### Email Templates
- Consistent header with logo
- Brand colors in buttons and links
- Professional tone matching brand voice
- Clear CTAs with orange buttons

### Social Media
- Profile picture: Logo mark on brand blue background
- Cover images: Logo with tagline and career-focused imagery
- Post graphics: Brand color palette with plenty of white space

## Implementation Notes

### CSS Variables
```css
:root {
  /* Brand Colors */
  --color-primary: #2563EB;
  --color-secondary: #F97316; 
  --color-accent: #10B981;
  
  /* Typography */
  --font-sans: Inter, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Borders */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
}
```

### Tailwind CSS Integration
The color palette and spacing system are designed to work seamlessly with Tailwind CSS, allowing for rapid development while maintaining brand consistency.

### Accessibility Considerations
- All color combinations meet WCAG AA contrast requirements
- Focus states clearly visible with brand colors
- Text remains readable at all supported font sizes
- Dark mode provides sufficient contrast for all elements

This brand kit establishes CareerVerve as a professional, trustworthy, and globally-minded career platform while maintaining the flexibility needed for the various phases of development outlined in the roadmap.