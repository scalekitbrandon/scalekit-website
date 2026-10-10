# Layout Blueprint — AI Receptionist for Plumbers

- **Target page:** `/services/ai-receptionist/plumbers/` (hub: `/services/ai-receptionist/`)
- **Reference (structure only):** https://www.paigeforagencies.com/ai-visibility
- **Captured:** 2026-10-08, Playwright full-page at 1440px and 390px, inspected visually
- **Colors, fonts, imagery, copy:** none carried over. Everything uses ScaleKit's `src/styles/tokens.css` (lime / black / bg) and the locked type system (Inter, max weight 800, buttons 600, letter-spacing in em).
- **Content inputs:** the competitor research (FieldCamp, Autocalls, Edison, Dapta), summarized per section under "ScaleKit content role."

---

## Phase 1 — Page-level overview

| Property | Reference |
|---|---|
| Max content width | ~1240px for full layouts. Reading sections narrow to ~860px; step/FAQ stacks to ~730px. |
| Horizontal padding | ~100px desktop, ~16–20px mobile |
| Section separation | Background shift: white ↔ pale tint, plus one dark full-bleed band (section 8) and a dark footer. No dividers. |
| Rhythm | Airy and structured. ~100–120px section padding, with centered eyebrow + H2 openers on most sections. |
| Grid unit | 8px |
| CTA cadence | **The same primary CTA plus a one-line reassurance microcopy appears at the end of almost every section (7×).** This is the main conversion mechanic and must be kept. |

---

## Phase 2 — Section-by-section

### S1 — Nav
- **Reference:** logo on the left, one primary CTA on the right, no menu links.
- **ScaleKit:** keep the site `Header.astro` with its full menus. The page needs those internal links for SEO, and the page should read as part of scalekit.io. Optional: make the header CTA label "Book a Demo" on this page.

### S2 — Hero (2-column, ~55/45, vertically centered)
| Order | Element | Notes |
|---|---|---|
| L1 | Pill eyebrow | Bold lead-in word plus short claim, inside one pill |
| L2 | H1 | 3 lines, largest type on the page. **The last word or phrase is in the accent color.** |
| L3 | Subheadline | ~4 lines, regular weight |
| L4 | Primary CTA | Large pill button |
| L5 | Microcopy | Small muted line: "X · Y · Z" |
| R1 | Media card | 16:9 video thumbnail, rounded, soft shadow, centered play button |
| R2 | Proof row | Centered under media: ★ rating · count · count, separated by dots |

- **Mobile:** stacks in the order eyebrow → H1 → subhead → CTA → microcopy → media → proof row.
- **Component:** extend `ScoutHero.astro`/`Hero.astro` (same pill eyebrow and accent-word language) with a right-column media slot, or create `ReceptionistHero.astro`.
- **ScaleKit content role:** H1 = primary keyword "AI Receptionist for Plumbers" + promise. Media = a **demo call recording** (audio with waveform or video). Proof row = 24/7 · picks up first ring · English & Spanish. No fake ratings.

### S3 — Trust bar (full-bleed tinted band)
- Small uppercase label ("As featured in"), a 6-logo row, then a centered stats sentence with bolded numbers.
- **Mobile:** logos wrap to 3×2 and the sentence wraps.
- **ScaleKit content role:** ScaleKit has no press logos. Swap to a **"Works with" integration row** (GoHighLevel, Google Calendar, plus only the field service tools ScaleKit can actually connect to). The stats sentence only goes in if the numbers are real. **New component:** `LogoStrip.astro` (or extend `TrustStrip.astro`).

### S4 — Problem / education (narrow ~860px column)
| Order | Element |
|---|---|
| 1 | Centered 2-line H2 |
| 2 | 2 left-aligned intro paragraphs |
| 3 | **2×2 card grid.** Each card has an icon, a bold title, and body copy ending in an *italic sentence saying how the product solves it* |
| 4 | 2 closing paragraphs. The first ends in a **bold one-line claim.** |
| 5 | Centered CTA + microcopy |

- **Mobile:** cards go to 1 column.
- **ScaleKit content role:** the burst-pipe-at-11pm story (Dapta's hook). The 4 cards are the 4 moments plumbers miss calls: after-hours emergency, hands full on a job, two calls at once, weekends/holidays. Each card's italic line says what the receptionist does in that moment.
- **Component:** new `ProblemCards.astro`, or extend `Problem.astro` with a 2×2 card variant.

### S5 — Capability tile grid + pitch (tinted band, 2-column)
- **Left:** 3×3 grid of square tiles, each an icon above a short uppercase label.
- **Right:** H2 (3 lines), paragraph, **bold one-liner**, CTA + microcopy.
- **Mobile:** tiles stay 3-across (smaller), then the pitch stacks below.
- **ScaleKit content role:** 9 capabilities: Answers 24/7 · Emergency triage · Books jobs · Live transfer to on-call · Texts you a summary · Speaks Spanish · Quotes from your price list · Missed-call text back · Call recordings & transcripts. Pitch: "Meet your AI receptionist…" plus the done-for-you angle.
- **Component:** new `CapabilityTiles.astro`.

### S6 — Results carousel (white)
- Centered eyebrow + H2.
- **Slide = 2-column.** Left is a gradient stat card: small label, giant number, sub-label, divider, then 2 mini-stats side by side. Right is a category label, title (business, city), 2 paragraphs and a bold closing line.
- Circular arrows sit outside the slide on both sides, with dots below, then CTA + microcopy.
- **Mobile:** stat card stacks above the story.
- **ScaleKit content role:** there are no real receptionist case studies yet. **Recommended swap: a "Hear it handle real calls" carousel**, adapted from FieldCamp's strongest section.
  - Each slide is one call type: burst pipe emergency, water heater booking, price question.
  - Left card shows the outcome, e.g. "Transferred to on-call in 0:52" or "Booked Thu 9–11am."
  - Right side holds a transcript excerpt and an audio player.
  - Needs real recordings from Brandon's agent, or labels that clearly mark them as samples.
- **Interactivity:** carousel. Use a vanilla `<script>`, the same approach as `WebsiteThumbnailCarousel.astro`, with no framework hydration.
- **Component:** new `CallDemoCarousel.astro`.

### S7 — How it works (tinted band)
- Centered eyebrow + 3-line H2.
- A vertical stack of 3 wide cards (~730px). Each card has:
  - a numbered circle on the left, each in a different tint
  - a title and body
  - a small tinted tag pill (e.g. "~15 minutes")
- **Mobile:** same stack, full width.
- **ScaleKit content role:**
  1. Strategy call. We map how your shop takes calls. Tag: "30 min."
  2. We build and train it on your prices, service area and emergency rules. Tag: "We do it."
  3. Forward your missed calls and go live. You keep your number and still ring first (Edison's best objection-killer). Tag: "Live in X days."
- **Component:** `Process.astro`/`ProcessCircles.astro` may fit. Otherwise build a new `StepCards.astro`.

### S8 — Dark band: testimonials + offer card
- Full-bleed dark section with a centered white H2.
- **2-column.** Left is 3 stacked testimonial cards (stars, quote with a bolded phrase, avatar + name). Right is the offer card: small label, giant price, 5-item checklist, full-width CTA and microcopy. Under the card sit a small question line and a text link ("Contact us for custom pricing →").
- **Mobile:** testimonials stack, then the offer card.
- **ScaleKit content role:** this is where the **receptionist tiers** go, since it's the visual "decision" moment.
  - **Left column:** the 4 tier cards stacked (Answer & Capture → Answer & Book → Book & Dispatch → Custom), each with a short "includes everything above, plus…" list.
  - **Right column:** the offer card with "Every tier includes…" checklist + CTA + "Need something custom? Let's talk →".
  - Testimonials move to S10 once real ones exist.
- **Component:** new `TierStack.astro`. Reuse `PricingCard.astro` styling for the offer card.

### S9 — Comparison table (white)
- Centered eyebrow + H2.
- **Table:** a row-label column plus 2 alternative columns plus 1 **highlighted brand column** (tinted background, logo in the header). Each column header has a name and a small 3-word descriptor. Values are color-coded good/bad, and the last row is emphasized.
- Below the table: an italic one-line statement, then CTA + microcopy.
- ⚠️ **Reference flaw on mobile:** the table overflows and the highlighted column is cut off the screen. **Fix:** on ≤768px either make the row label + brand column sticky with the rest scrolling, or switch to one stacked card per row.
- **ScaleKit content role:** columns are Voicemail · Hire a receptionist · Answering service · **ScaleKit AI Receptionist**. Rows: hours covered, monthly cost, books the job, handles emergencies, calls at once, Spanish, knows your prices, setup time. Costs are shown as honest ranges.
- **Component:** new `ComparisonTable.astro`. It's reusable for every future industry page.

### S10 — Video testimonials carousel (tinted)
- Eyebrow, H2, an avatar stack + rating line, then a 16:9 video card with play button and outside arrows. Below the video: stars, name, role, and dots.
- **ScaleKit content role:** **leave this out until real receptionist testimonials exist.** Optional stand-in: the "Where a human still does it better" honesty block from FieldCamp (upset callers, big negotiated estimates, anyone who asks for a person, all of which transfer to your team).

### S11 — Pricing + stat cards (white)
- Centered 2-line H2 + a subhead with bolded/accent numbers.
- A single centered price card (~670px, accent gradient fill, white checklist, inverted white CTA). Under it, a custom-pricing link.
- Then a row of 3 stat cards (big number + label).
- **ScaleKit content role:** depends on Brandon's pricing decision.
  - **If the price is shown:** use this section.
  - **If "book a call":** fold it into S8 and replace this section with the existing `BookCall.astro` lead-form flow (the site's standard closing conversion).
  - The 3 stat cards only go in with real numbers.

### S12 — FAQ (tinted)
- Centered H2 + subhead with a contact line, then an accordion of ~730px white cards with a "+" toggle.
- **ScaleKit content role:**
  - The 5 core objections: sounds robotic, real emergencies, replaces my staff, keep my number, cost.
  - Plus: Spanish, which tools it works with, setup time, and what happens with calls it can't handle.
  - The questions use the secondary keywords naturally ("AI answering service for plumbers").
- **Component:** reuse `ScoutFaq.astro`/`PricingFaq.astro` accordion styling. FAQPage schema comes from `KeywordPage`'s existing pattern.

### S13 — Closing + footer
- **Reference:** a minimal dark footer.
- **ScaleKit:** site pattern of `RelatedLinks.astro` (hub, `/services/ai-agents/`, missed-call text back, lead follow-up) → `BookCall.astro` → `Footer.astro`.

---

## Phase 3 — Component inventory

| Component | Sections | Status |
|---|---|---|
| Header / Footer | S1, S13 | existing |
| Hero with media column | S2 | extend `ScoutHero`/`Hero` or new `ReceptionistHero` |
| Pill eyebrow / Badge | S2, S4–S9 | existing `Badge.astro` |
| Button + microcopy pair | S2, S4–S9, S11 | existing `Button.astro`. Add a `CtaWithNote` wrapper. |
| Logo strip | S3 | **new** `LogoStrip.astro` (or extend `TrustStrip`) |
| 2×2 problem cards | S4 | **new** `ProblemCards.astro` |
| Capability tiles + pitch | S5 | **new** `CapabilityTiles.astro` |
| Call demo carousel | S6 | **new** `CallDemoCarousel.astro` |
| Step cards | S7 | existing `Process`/`ProcessCircles` if it fits, else **new** `StepCards.astro` |
| Tier stack + offer card | S8 | **new** `TierStack.astro`, reusing `PricingCard` |
| Comparison table | S9 | **new** `ComparisonTable.astro` |
| FAQ accordion | S12 | existing (`ScoutFaq`/`PricingFaq` pattern) |
| Related links / BookCall | S13 | existing |

All new components take props, with no hard-coded plumbing copy, so the next industry (HVAC, electricians…) reuses them unchanged.

## Phase 4 — Build notes

- **Data-driven industry pages:** `src/pages/services/ai-receptionist/[industry].astro` + `getStaticPaths()` reading a `src/data/ai-receptionist/` data file (or Content Collection) with one entry per industry. Plumbers is the first entry. The sitemap picks up new industries automatically.
- **Hub:** `src/pages/services/ai-receptionist/index.astro` links to every industry entry and to `/services/ai-agents/`.
- **Schema:** Service + FAQPage + BreadcrumbList (Home → AI Receptionist → Plumbers), the same as `KeywordPage`.
- **Interactivity:** S6 carousel, S12 accordion, and an audio player in S2/S6. All are vanilla JS or native `<details>`, with no `client:*` islands.
- **Mobile:** S9 table needs the sticky-column or stacked-card fix noted above.
- **Placeholder discipline:** no invented stats, ratings, testimonials or logos. Any slot without real content is left out, not faked.

## Open inputs needed from Brandon
1. Demo call recordings (hero media + S6 carousel)
2. Which field service tools and tier-3 features ScaleKit can actually deliver
3. Price shown on the page, or book-a-call only
4. Any real results or testimonials (S3 stats, S10, S11 stat cards)

---

## HANDOFF → astro-content / astro-build
- Client: scalekit
- Output file: ~/Astro-Sites/scalekit/layout-blueprint-ai-receptionist.md
- Status: COMPLETE
- Sections identified: 13
- New components required: LogoStrip, ProblemCards, CapabilityTiles, CallDemoCarousel, StepCards (maybe), TierStack, ComparisonTable, ReceptionistHero (or Hero extension)
- Content collections implied: `ai-receptionist` industries (one entry per trade)
- Reminder: colors/fonts/copy are NOT taken from the reference. They come from ScaleKit's tokens and the copy step.
