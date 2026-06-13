# Christine Flores — Portfolio (Next.js)

Next.js 15 (App Router) + React 19 + TypeScript conversion of the original
static `portfolio-webiste` repo. Design and markup preserved 1:1; structure
componentized and content moved to data so it's easy to extend.

GSAP animations will be layered on top in a later pass (the current scroll
reveal uses an `IntersectionObserver` in `src/components/ScrollReveal.tsx`,
which is the natural seam to replace with GSAP ScrollTrigger).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
src/
  app/
    layout.tsx        # fonts (Bebas Neue + Inter via next/font), metadata
    page.tsx          # composes the sections
    globals.css       # original styles.css (font-family wired to next/font vars)
  components/
    Navbar.tsx Hero.tsx Experience.tsx Projects.tsx Footer.tsx
    Icons.tsx         # all inline SVG icons
    ScrollReveal.tsx  # client IntersectionObserver → adds `is-visible`
  data/
    portfolio.ts      # experience + projects content (typed)
public/assets/        # images (copied from original repo)
```

## Next steps (GSAP)

- Replace `ScrollReveal` with GSAP + ScrollTrigger for richer entrance/parallax.
- Hero text/image already have keyframe entrances in CSS — port these to GSAP
  timelines for finer control.
