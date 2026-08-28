# Garitas Property Care

This repository is the cleaned Next.js foundation for the Garitas Property Care website. It is intentionally **not** the final landing-page implementation yet: the cleanup phase removes template/demo behavior, preserves reusable UI patterns, and establishes clear content and media boundaries without inventing business information.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Vercel-compatible deployment

The repository currently remains on its existing framework versions. Dependency upgrades are a separate maintenance task and should not be mixed into the Garitas design implementation.

## Local development

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

## Repository boundaries

### Presentation

Reusable layout and section presentation lives under `components/`. The retained Benefits, Features, Services, Membership/Pricing, Team, Testimonial, and Footer patterns should be adapted during the approved landing implementation rather than replaced without reason.

### Content

Future business content lives under `content/`:

- `content/memberships.ts`
- `content/services.ts`
- `content/team.ts`
- `content/testimonials.ts`
- `content/media.ts`

These collections are intentionally empty until approved Garitas copy and media are supplied. Components should not embed demo names, testimonials, prices, contact details, or remote stock imagery.

### Public site configuration

`config/site.ts` holds small public-site settings. Public phone and WhatsApp values remain `null` until the real numbers are supplied. Do not invent contact details or construct a production WhatsApp CTA before then.

### Media

Real Garitas assets should be stored locally under `public/` and referenced through `content/media.ts`. Prefer `next/image`, explicit image dimensions or stable aspect ratios, appropriate `sizes`, and `priority` only for the eventual LCP image. Demo and placeholder media should not be added.

### Animation

There is no animation framework in the cleanup foundation. Future seasonal/environmental effects belong in isolated progressive-enhancement boundaries and must remain separate from global theme state. Start with CSS and browser APIs where sufficient, honor `prefers-reduced-motion`, and only add an animation dependency after a specific approved interaction requires it.

## Deployment

The project preserves the standard GitHub-to-Vercel workflow. No `vercel.json` is required for the current Next.js foundation. When the repository is connected to Vercel, branch and pull-request deployments can be used for review before production changes are merged.

## Content required before final landing implementation

The next implementation phase still needs approved Garitas copy, membership details and pricing decisions, service data, team information, testimonials/client proof, real media, production locale, production domain, and the real public contact/WhatsApp number. A real Garitas favicon/brand asset is also required before replacing the existing favicon.
