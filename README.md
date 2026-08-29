# Garitas Property Care

This repository contains the Next.js foundation for the Garitas Property Care landing page. Phase 1 establishes the complete landing-page structure and content boundaries without inventing business copy, pricing, services, testimonials, contact details, or media.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Vercel-compatible deployment

The project intentionally remains on its existing framework versions. Dependency upgrades are a separate maintenance task and should not be mixed into landing-page implementation.

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

## Landing structure

`app/page.tsx` composes the landing in this order:

1. Hero
2. Seasonal Experience
3. Memberships
4. Property Care / Services
5. Member Service Credits
6. Service Priority
7. About Us
8. The Team
9. Real Work / Proof
10. Testimonials
11. Commercial / Priority
12. Snow
13. Final CTA / WhatsApp

Each major section has its own component under `components/layout/sections/`. Existing reusable presentation patterns such as Benefits and Features remain available and are composed by the Garitas-specific section wrappers rather than duplicated.

## Content boundary

Business content lives under `content/`, separate from JSX presentation. Phase 1 intentionally leaves unavailable content as `null` or empty collections. Sections return `null` until their corresponding approved data exists, so the branch does not ship demo or invented marketing content.

Shared section-copy and action types live in `content/types.ts`. Memberships, services, team members, testimonials, seasonal content, proof media, and other section-specific data can be replaced independently without rewriting `app/page.tsx`.

## Media boundary

`content/media.ts` is the central mapping between content records and real media assets. Each asset is classified by landing section. Real files should be added under `public/garitas/<section>/` when supplied and referenced through the media map; no placeholder assets should be committed.

Use `next/image`, stable dimensions/aspect ratios and appropriate `sizes`. Reserve `priority` for the eventual hero/LCP asset.

## Configuration and WhatsApp

Public site configuration lives in `config/site.ts`. The real phone and WhatsApp numbers remain `null` until supplied. `lib/whatsapp.ts` returns no URL when the number is unavailable, so the final CTA cannot accidentally create a fake WhatsApp destination.

Navigation remains configuration-driven and empty until real section destinations are approved. The responsive Sheet foundation is preserved without dead links.

## Animation boundary

Phase 1 does not implement seasonal animation or add an animation dependency. Future motion should remain progressive enhancement, isolated from content components and independent from global theme state. When Phase 2 defines actual interactions, animation utilities/components can be introduced only where they are required and must honor `prefers-reduced-motion`.

## Deployment

The standard GitHub-to-Vercel workflow remains unchanged. Use branch and pull-request previews for review before any production merge. Do not merge implementation work directly to `main`.

## Inputs still required

Phase 2 still requires approved Garitas copy, membership details and pricing decisions, service data, member-credit/service-priority details, Alex and Raimundo content, team information, real-work proof, testimonials, commercial and snow content, real media/brand assets, production locale/domain, and the real public contact/WhatsApp number.
