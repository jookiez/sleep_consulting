# Alexandra Sleep Consulting — Project Context

## What This Is
A Next.js website for a pediatric sleep consulting business called **Alexandra Sleep Consulting**, run by **Caillie Alexandra Sheppard**. Hosted on **Vercel**. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Current State
The site is fully scaffolded and ready to run. Node.js needs to be installed (`nvm install --lts`), then `npm install` to get dependencies.

Run locally with: `npm run dev`

## Pages Built
- `/` — Home (hero, why choose us, services preview, testimonials preview, contact form)
- `/about` — About page with photo placeholder, credentials, philosophy
- `/services` — 3 service packages with real pricing (Foundations $150, Full Support $250, Overnight $25/hr)
- `/testimonials` — 1 real testimonial (Chelsea, twin mom) — more to come
- `/faq` — 8 FAQs using native `<details>`/`<summary>` accordion
- `/api/contact` — Serverless API route that sends form submissions via Resend

## Key Files
```
app/
  layout.tsx           ← root layout (Navbar + Footer wrapping all pages)
  globals.css          ← Tailwind imports
  page.tsx             ← Home page
  about/page.tsx
  services/page.tsx
  testimonials/page.tsx
  faq/page.tsx
  api/contact/route.ts ← serverless email handler (Resend)
components/
  Navbar.tsx           ← sticky, responsive, mobile hamburger menu
  Footer.tsx           ← 3-col: brand, quick links, social icons
  ContactForm.tsx      ← client component with form state + fetch
```

## Contact Form Fields
Name, Email, Phone (optional), Baby's Age, Message. Submissions go to `wagnerm@alumni.uoguelph.ca`.

## Email Setup (Resend)
- API key is already in `.env.local`
- The `from` address is currently `onboarding@resend.dev` (Resend's test sender)
- **TODO**: Once Alexandra has a domain, verify it in Resend and update the `from` field in `app/api/contact/route.ts`

## Design System
- **Font**: Lora (serif) for headings, Inter (sans) for body — loaded via `next/font/google`
- **Colors** (matched to the logo's lavender moon + sage leaf):
  - Primary buttons: `bg-purple-300 text-stone-800` hover `bg-purple-400` — soft lavender
  - Active nav links / accents: `text-purple-500`
  - Section backgrounds alternate: white and `bg-stone-50`
  - Testimonials section: `bg-purple-50`
  - Hero gradient: `from-purple-50 to-white`
  - Footer: `bg-stone-800`
  - All text uses `stone-*` (warmer than `slate-*`)
- **Border radius**: `rounded-full` for buttons (pill shape), `rounded-2xl` for cards — deliberately soft and approachable
- **Vibe**: Warm, calm, nurturing. NOT corporate. NOT ad-like.

## Still TODO (owner to provide)
- [x] Logo — Navbar uses `public/images/logo-white.jpg` (plain `<img>`), Footer uses styled text
- [ ] Caillie's photo — placeholder box still on About page (`bg-stone-100` div)
- [ ] Real social media links — currently `https://facebook.com/placeholder`, `https://instagram.com/placeholder`, `https://tiktok.com/@placeholder` in `components/Footer.tsx`
- [ ] Verify a sending domain in Resend and update `from` in `app/api/contact/route.ts`
- [x] Real pricing — Foundations $150, Full Support $250, Overnight $25/hr
- [x] Real testimonial from Chelsea (twin mom) — need more testimonials to fill out the page
- [x] Real credentials/bio copy on About page — includes certificate image (`public/images/certificate.jpeg`)

## Stored Assets
- **Logo (navbar)**: `public/images/logo-white.jpg` — trimmed logo with white background, served as plain `<img>` (not Next.js `<Image>`) to avoid optimization issues
- **Logo (original)**: `public/images/logo.png` — transparent PNG, has trimming applied but NOT used directly on the site (Gemini-generated "transparent" version had fake checkerboard baked in; original from image0.png is the clean source)
- **Banner**: `public/images/banner.png` — full branded banner with logo + sleeping baby illustration + tagline "Compassionate Support for Restful Nights" (not yet used on the site)
- **Certificate**: `public/images/certificate.jpeg` — Institute of Pediatric Sleep & Parenting certification for Caillie Sheppard (displayed on About page)
- **Sleeping baby stock photo** (baby feet in white blanket, Unsplash, free to use):
  `https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1600&q=80`
  Stored as a comment in `app/page.tsx`. Was previously used as background on the "Why Families Choose Alexandra" section — removed at owner's request but kept for future use.

## Deployment
Push to GitHub → connect repo in Vercel dashboard.
Add `RESEND_API_KEY` as an environment variable in Vercel project settings (do not commit `.env.local`).

**Gotchas already solved — do not revert:**
- `vercel.json` must exist with `{"framework":"nextjs"}` — Vercel does not auto-detect Next.js for this repo and will throw "No Output Directory named public" without it.
- The Resend client in `app/api/contact/route.ts` is instantiated *inside* the POST handler, not at module level. Module-level instantiation runs at build time when env vars aren't set yet, causing a build failure.
- The contact API route has in-memory rate limiting (5 submissions/IP/hour). This is intentional — if upgraded to persistent storage (e.g. Upstash Redis) in future, remove the in-memory `rateLimitMap` logic.

## Design Decisions Made (don't revert without asking)
- Buttons are pill-shaped (`rounded-full`) — intentional, softer feel
- Blue → rose → purple color palette evolution: blue was too corporate, rose was too red/alarming, purple matches the logo
- `slate-*` was replaced with `stone-*` throughout — stone reads warmer
- Social icons are inline SVGs (no icon library dependency)
- Navbar logo uses plain `<img>` tag, not Next.js `<Image>` — the optimization pipeline was causing issues with transparency
- Footer uses styled text for the brand name, not the logo image — invert filters didn't work well with the logo
