# Kyle Hagel Web consulting Services React Phase 1

This is Phase 1 of converting the single-scroll Kyle Hagel Consulting website into a React application.

## What's included

- React + Vite app setup
- Componentized page sections
- Header with accessible mobile menu state
- Scroll section highlighting with `IntersectionObserver`
- SCSS styling
- Accessible skip link
- Mobile-ready layout

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Phase 1 note

Content is intentionally hardcoded inside components for now.

Recommended next phase:

- Move services into `src/data/services.js`
- Move resume items into `src/data/resume.js`
- Move nav links into `src/data/navLinks.js`
- Create reusable `ServiceCard`, `ResumeCard`, and `SectionHeader` components
