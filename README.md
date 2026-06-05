# 786 Transport

A single-page marketing website for **786 Transport** — a premium private chauffeur / VTC service in Paris. Built with React + TypeScript + Vite.

Inspired by the structure of taxivtcparis18.com, rebuilt with an original dark-luxury UI (black / silver / red, matching the brand logo).

## Tech stack

- **React 19 + TypeScript**
- **Vite** (dev server + build)
- Hand-written CSS (no UI framework) — design tokens in `src/index.css`
- Inline SVG icon set (no icon library)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  assets/            logo + Mercedes photos
  components/        one component per page section
    Navbar, Hero, Stats, Services, Fleet, WhyUs,
    Coverage, Testimonials, Contact, CtaBand, Footer,
    FloatingActions, Icons
  data/content.ts    ALL site content & business details (single source of truth)
  hooks/useReveal.ts scroll-reveal IntersectionObserver
  index.css          global styles + design tokens + responsive rules
  App.tsx            composes the sections
```

## Editing content

All text, services, fleet, reviews, and **contact details** live in
`src/data/content.ts`. Update the `company` object there to change the phone,
email, address, WhatsApp number, etc. everywhere at once.

> ⚠️ The phone / email / address in `content.ts` are **placeholders** for the
> 786 Transport brand. Replace them with the real business details before going live.

## Features

- Fixed navbar with scroll state + mobile menu
- Full-screen hero with the brand fleet photo
- Services, premium fleet, "why us", coverage, and testimonials sections
- Booking form that compiles a quote request and opens it in **WhatsApp**
- Floating WhatsApp + call buttons
- Scroll-reveal animations, fully responsive down to mobile
