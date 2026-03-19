# Satyaprakash — Digital Marketing Portfolio

A premium, production-grade 3D portfolio website for Satyaprakash, Digital Marketing Strategist at AirDesk. Built with React 18, TypeScript, Vite, GSAP animations, and Three.js/R3F for immersive 3D experiences.

**🔗 Live:** [satyaprakash-portfolio.vercel.app](https://satyaprakash-portfolio.vercel.app)

---

## ✨ Features

- **Premium Design System:** Dark mode, glassmorphism effects, vibrant gradients
- **3D Scenes:** React Three Fiber canvas components (Hero room, contact globe, particle effects)
- **Smooth Animations:** GSAP ScrollTrigger, character stagger, section reveals
- **Responsive Design:** Mobile-first, works perfectly on 375px → 1920px screens
- **Performance Optimized:** Lazy loading, code splitting, optimized chunks
- **SEO Ready:** Proper meta tags, structured data, fast Core Web Vitals
- **Contact Form:** Integration-ready for EmailJS (configure environment variables)

---

## 🏗️ Project Structure

```
satyaprakash-portfolio/
├── public/
│   ├── images/           (Project screenshots, testimonial avatars)
│   ├── models/           (3D .glb files for Room, Earth scenes)
│   └── resume/           (PDF resume)
├── src/
│   ├── components/
│   │   ├── canvas/       (R3F scenes: HeroExperience, ContactExperience, etc.)
│   │   ├── common/       (Reusable UI: Button, GlowCard, AnimatedCounter)
│   │   └── layout/       (NavBar, Footer)
│   ├── sections/         (Full page sections)
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── TechStack.tsx
│   │   └── ...
│   ├── constants/index.ts (All portfolio content: navLinks, skills, projects, etc.)
│   ├── hooks/            (useGSAPContext, useMediaQuery utilities)
│   ├── utils/            (animations.ts with reusable GSAP patterns)
│   ├── styles/globals.css (Design system, CSS variables, Tailwind)
│   ├── App.tsx           (Main app shell with all sections)
│   └── main.tsx          (Vite entry point)
├── index.html            (Meta tags, font preconnects)
├── package.json          (Dependencies, scripts)
├── vite.config.ts        (Build config, code splitting)
├── tailwind.config.ts    (Tailwind config, theme colors)
├── tsconfig.json         (TypeScript config)
├── tailwind.config.ts
├── vercel.json           (Vercel deployment config)
├── DEPLOYMENT.md         (Exact deployment steps)
└── README.md             (This file)
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([download](https://nodejs.org))
- Git
- npm (comes with Node.js)

### Installation

```bash
# Clone repository (or use your own fork)
git clone https://github.com/yourusername/satyaprakash-portfolio.git
cd satyaprakash-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
npm run build        # Creates dist/ folder
npm run preview      # Preview production build locally
```

---

## 📝 Content Management

All portfolio content is stored in `src/constants/index.ts`:

```typescript
// Update these objects to customize your portfolio:

navLinks              // Navigation menu items
heroContent          // Hero headline, subheadline, CTA buttons
skills               // TechStack section (12 platforms/tools)
caseStudies          // 6 featured projects with metrics
experience           // Work history timeline (3 roles)
stats                // Animated counters (campaigns, ROAS, traffic)
testimonials         // Client/colleague quotes (3 testimonials)
logoShowcase         // Brand logos/platforms worked with (8 logos)
featureCards         // Value propositions (4 cards)
contactInfo          // Contact heading, email, CTA
socialLinks          // LinkedIn, Twitter, Instagram, GitHub
aboutContent         // About section copy
```

### Example: Update a Testimonial

```typescript
// src/constants/index.ts
export const testimonials = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "Head of Growth, AirDesk",
    quote: "...",
    avatar: "/images/testimonials/rohan.png",
    rating: 5,
  },
  // Add more testimonials here
];
```

---

## 🎨 Design System

### Colors (CSS Variables)

Edit `src/styles/globals.css` or `tailwind.config.ts`:

```css
--color-bg: #0a0a0f           /* Background */
--color-primary: #6366f1      /* Indigo accent */
--color-accent: #a855f7       /* Purple accent */
--color-text: #f1f5f9         /* Foreground text */
```

### Typography

- **Font:** Inter (loaded from Google Fonts)
- **Weights:** 300–900
- **Breakpoints:** 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

### Components

```typescript
// Button
<Button variant="primary" size="lg">Action</Button>

// GlowCard (glassmorphism with glow on hover)
<GlowCard>Content</GlowCard>

// AnimatedCounter (GSAP-driven number animation)
<AnimatedCounter value={50} suffix="+" label="Campaigns" />

// TitleHeader (section heading with optional overline)
<TitleHeader overline="About" title="My Approach" />
```

---

## 🎬 GSAP Animations

### Standard Reveal Pattern (in any section)

```typescript
useEffect(() => {
  gsap.fromTo(
    ".element",
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".element",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);
```

### Staggered Reveal (multiple elements)

```typescript
gsap.fromTo(
  ".cards",
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.12,  // 120ms between each element
    ease: "power3.out",
    scrollTrigger: { trigger: ".cards", start: "top 85%" },
  }
);
```

### Character Stagger (hero headline)

See `Hero.tsx` for example of splitting text into characters and animating each with a stagger.

---

## 🎥 3D Canvas Scenes

### Hero 3D Room (src/components/canvas/HeroExperience.tsx)

- **Components:** HeroLights, Particles, Room
- **Geometry:** Placeholder box + sphere + cylinder (replace with .glb model)
- **Animation:** Subtle floating via `useFrame`
- **Performance:** dpr=[1,2], performance.min=0.5

### Contact 3D Globe (src/components/canvas/ContactExperience.tsx)

- **Geometry:** Sphere + rotating torus rings
- **Lighting:** Ambient + directional + point lights
- **Color:** Indigo/purple with emissive glow

To add real 3D models:

```typescript
import { useGLTF } from "@react-three/drei";

const Room = () => {
  const { scene } = useGLTF("/models/room.glb");
  // Use scene...
};

useGLTF.preload("/models/room.glb"); // Preload at module level
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Device |
|---|---|---|
| Mobile | 375–639px | iPhone |
| Tablet | 640–1023px | iPad |
| Desktop | 1024–1279px | Laptop |
| Large | 1280px+ | 4K Monitor |

Test locally:
```bash
npm run dev
# Open DevTools (F12) → Toggle device toolbar → test each breakpoint
```

---

## ⚡ Performance Details

### Build Output (Production)

```
dist/index.html                  1.39 kB
dist/assets/index-*.css          2.28 kB (Tailwind + globals)
dist/assets/gsap-*.js           70 kB (GSAP library)
dist/assets/index-*.js          84 kB (App code)
dist/assets/vendor-*.js        134 kB (React + DOM)
dist/assets/three-*.js         828 kB (Three.js library)
```

### Code Splitting

Vite automatically splits:
- `vendor` → React, React-DOM
- `three` → Three.js, R3F, Drei
- `gsap` → GSAP library

### Optimizations Applied

✅ Lazy loading sections with Suspense  
✅ useCallback hooks on event handlers  
✅ useMemo for expensive computations  
✅ Animations use `transform` & `opacity` only  
✅ CSS animations support `prefers-reduced-motion`  
✅ Scrollbar custom styled  
✅ Images eager/lazy loading as needed  

---

## 🔧 Configuration

### Environment Variables (Optional — EmailJS)

Create `.env.local` in project root:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=public_key_xxxxxxxxx
```

Get from [emailjs.com](https://emailjs.com) after account signup.

Then in `src/sections/Contact.tsx`, uncomment EmailJS integration:

```typescript
import emailjs from "@emailjs/browser";

const sendEmail = async (formData) => {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    { from_name: formData.name, /* ... */ },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};
```

---

## 📦 Dependencies

### Core

- **react** 18.3.1 — UI library
- **react-dom** 18.3.1 — DOM rendering
- **typescript** 5.6.2 — Type safety

### 3D & Animation

- **three** 0.170.0 — 3D library
- **@react-three/fiber** 8.17.10 — React wrapper for Three.js
- **@react-three/drei** 9.115.0 — Useful utilities & components
- **gsap** 3.12.5 — Animation library
- **@gsap/react** 2.1.1 — React integration for GSAP

### Styling

- **tailwindcss** 4.0.0 — Utility-first CSS framework
- **postcss** 8.4.38 — CSS transformations
- **autoprefixer** 10.4.20 — Vendor prefixes

### Utilities

- **react-icons** 5.3.0 — Icon library
- **@emailjs/browser** 4.4.1 — Contact form emails (optional)

### Build Tools

- **vite** 6.0.1 — Build tool
- **@vitejs/plugin-react** 4.3.4 — React plugin for Vite

---

## 🐛 Troubleshooting

### Port 5173 Already in Use

```bash
# Find and kill process on port 5173
lsof -i :5173
kill -9 <PID>

# Or use different port
npm run dev -- --port 3000
```

### Git Not Initialized

```bash
git init
git add .
git commit -m "Initial commit"
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Tailwind Styles Not Appearing

Ensure `src/styles/globals.css` is imported in `src/main.tsx`:

```typescript
import "./styles/globals.css";
```

---

## 📚 Learning Resources

- **React:** https://react.dev
- **Three.js:** https://threejs.org/docs
- **R3F:** https://docs.pmnd.rs/react-three-fiber
- **GSAP:** https://gsap.com/docs/v3
- **Tailwind:** https://tailwindcss.com/docs
- **Vite:** https://vitejs.dev

---

## 🚢 Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for step-by-step instructions:
- Deploy to Vercel (recommended)
- Deploy to Render (backup)
- Custom domain setup
- Environment variables for EmailJS

---

## 📄 License

This portfolio is built for Satyaprakash. Adapt and customize freely for your own use.

---

## 👨‍💻 Credits

Built with ❤️ using:
- **Reference:** JavaScript Mastery 3D Portfolio Tutorial
- **Framework:** React 18 + TypeScript + Vite
- **Animation:** GSAP 3.12
- **3D:** Three.js + React Three Fiber
- **Styling:** TailwindCSS v4

---

**Questions?** Check DEPLOYMENT.md for detailed deployment steps or GitHub issues for support.

**Ready to deploy?** Follow [DEPLOYMENT.md](./DEPLOYMENT.md) → Push to GitHub → Vercel auto-deploys! 🚀
