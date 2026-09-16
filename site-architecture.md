# Site Architecture — ScaleKit (Astro Port)

**Scope:** Homepage only, this pass. Nav references Capabilities, Case Studies, Pricing, and About as future pages — not routed yet, left as placeholder links until those pages are built.

---

## STEP 1: ROUTE MAP

```
src/pages/
└── index.astro     (static — the full homepage, built section-by-section)
```

Single static route for this pass. No dynamic/collection-backed routes yet — `testimonials` and `caseStudies` collections are consumed as *data sources embedded within* `index.astro` (e.g. a testimonial pulled into Section 9, a case-study grid in Section 8), not as their own listing pages, since those pages don't exist in scope.

Future (not built now, noted for continuity):
```
src/pages/
├── index.astro
├── capabilities.astro
├── case-studies/
│   ├── index.astro
│   └── [...slug].astro     (backed by `caseStudies` collection)
├── pricing.astro
└── about.astro
```

## STEP 2: LAYOUT ASSIGNMENT

- `index.astro` → `BaseLayout` (starter kit's existing layout is sufficient — single marketing page, no blog/docs chrome needed). No new layout required.

## STEP 3: CONTENT COLLECTIONS SCHEMA (DRAFT)

Starter kit already scaffolds both collections we need, and their existing shape matches this project's needs closely. Recommended adjustments below.

```ts
// src/content/config.ts (draft — astro-content finalizes)
import { defineCollection, z } from 'astro:content';

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    quote: z.string(),
    avatar: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    result: z.string().optional(),
    publishDate: z.date(),
  }),
});

export const collections = { testimonials, caseStudies };
```

**Notes:**
- `blog` collection from the starter kit is **not used** in this scope — no blog page exists yet. Leave it in `config.ts` (per starter-kit convention, unused collections are fine to keep scaffolded) or remove if `astro-content` prefers a clean slate; flag for that skill to decide.
- `testimonials`: schema as-is fits Section 9 ("What Changes + Testimonial") directly. `astro-content` should author at least one real entry from client-provided quotes — copy.md doesn't yet contain an approved testimonial, so this is a **blocker to flag** before Section 9 can be built with real content (placeholder acceptable for now).
- `caseStudies`: schema as-is fits Section 8 ("Proof / See It In Action"), but per `copy.md`, this section is an **honest placeholder** — "no fabricated case studies." Recommend the collection stay **empty** (zero entries) until real client results exist, and Section 8's component render an empty-state ("Case studies coming soon" or similar) rather than dummy data. This is a build-time decision to flag for `astro-build`.

## STEP 4: NAVIGATION

**Primary nav (Section 1, per copy.md):**
- Home → `/` (current page)
- Capabilities → anchor `#capabilities` on homepage for now (real `/capabilities` page not in scope) — recommend using an in-page anchor link since Section 3 *is* "Capabilities" content, until a dedicated page exists
- Case Studies → same treatment: anchor `#proof` (Section 8) for now, or omit from nav until real content exists — **flag for user decision**
- Pricing → not in scope this pass; **flag: omit from nav, or link to contact/booking CTA instead?**
- About → not in scope this pass; **flag: omit from nav for now**
- CTA button: "Book Your Free Strategy Call" → external booking link (URL TBD — not yet in brief; flag for `astro-content`/client)

**Footer:**
- Starter kit's `Footer.astro` already includes the mandatory "Website by ScaleKit.io" credit line — per department standard, this stays even on ScaleKit's *own* site (no exception carved out; confirm with user if that's actually desired for the agency's own homepage, since crediting itself is a slightly unusual case worth a quick sanity check).
- No other footer link groups specified yet in copy.md — homepage-only scope means minimal footer (copyright line + the ScaleKit.io credit) is sufficient for now.

**In-page section anchors** (all within `index.astro`, matching copy.md order):
`#hero` · `#vsl` · `#problem` · `#capabilities` · `#operating-system` · `#growth-journey` · `#built-for` · `#trust-strip` · `#proof` · `#what-changes` · `#process`

---

## OPEN FLAGS FOR YOU (before astro-build starts on nav-dependent sections)

1. Nav links for Capabilities/Case Studies: in-page anchors, or omit until real pages exist?
2. Pricing/About nav items: omit entirely from this pass, or stub as disabled/"coming soon"?
3. "Book Your Free Strategy Call" CTA — what URL does it point to?
4. Section 9 testimonial: is there a real client quote to use, or does this section build with a clearly-marked placeholder for now?
5. Footer "Website by ScaleKit.io" credit on ScaleKit's own site — keep as-is per standard, or does the agency's own homepage skip it?
