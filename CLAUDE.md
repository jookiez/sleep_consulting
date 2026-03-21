# Alexandra Sleep Consulting — Project Context

## What This Is
A Next.js website for a pediatric sleep consulting business called **Alexandra Sleep Consulting**. Hosted on **Vercel**. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Current State
The site is fully scaffolded and ready to run. Node.js needs to be installed (`nvm install --lts`), then `npm install` to get dependencies.

Run locally with: `npm run dev`

## Pages Built
- `/` — Home (hero, why choose us, services preview, testimonials preview, contact form)
- `/about` — About page with photo placeholder, credentials, philosophy
- `/services` — 4 service packages with pricing
- `/testimonials` — 6 client testimonials
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
- **Colors**:
  - Primary buttons: `bg-rose-300 text-stone-800` hover `bg-rose-400` — soft blush, not alarming
  - Active nav links / accents: `text-rose-500`
  - Section backgrounds alternate: white and `bg-stone-50`
  - Testimonials section: `bg-rose-50`
  - Hero gradient: `from-rose-50 to-white`
  - Footer: `bg-stone-800`
  - All text uses `stone-*` (warmer than `slate-*`)
- **Border radius**: `rounded-full` for buttons (pill shape), `rounded-2xl` for cards — deliberately soft and approachable
- **Vibe**: Warm, calm, nurturing. NOT corporate. NOT ad-like.

## Still TODO (owner to provide)
- [ ] Logo — placeholder text used in Navbar and Footer
- [ ] Alexandra's photo — placeholder box on About page (`bg-stone-100` div)
- [ ] Real social media links — currently `https://facebook.com/placeholder`, `https://instagram.com/placeholder`, `https://tiktok.com/@placeholder` in `components/Footer.tsx`
- [ ] Verify a sending domain in Resend and update `from` in `app/api/contact/route.ts`
- [ ] Real pricing (current prices are placeholder: $149 / $349 / $79)
- [ ] Real testimonials (current ones are placeholder copy)
- [ ] Real credentials/bio copy on About page

## Stored Assets
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
- Blue color palette was replaced with rose/stone — the owner found blue too corporate
- `rose-500` buttons were softened to `rose-300` — owner found them too red/alarming
- `slate-*` was replaced with `stone-*` throughout — stone reads warmer
- Social icons are inline SVGs (no icon library dependency)
