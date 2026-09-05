# Satellite Lab (Vercel play)

Vercel playground for the **SCAD STEC Satellite Lab** site so Nye can iterate against a live URL.

This repo is **not** the GitHub Pages source. The public Pages deploy stays on [satellite-lab-site](https://github.com/NyeGuy/satellite-lab-site). Do not add a Pages workflow here.

Copy matches the Pages site (grey palette, content rules below). The only hosting difference: Astro `base` is `/` (Vercel root), not `/satellite-lab-site/`.

**Proof of concept — internal draft, not for publication.** Content pending review under STEC data classification.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Dev server: [http://localhost:4321/](http://localhost:4321/)

```bash
npm run build      # writes static files to dist/
npm run preview    # serves dist/ locally
```

## Edit copy

All visitor-facing text is under `content/`. Components read those files; they do not hard-code body copy.

| File | What it holds |
| --- | --- |
| `content/site.json` | Name, headline, mission, mantra, location, nav, SCAD link, footer disclaimer |
| `content/tracks.json` | The three research tracks (kicker, body, tone) |
| `content/people.json` | Director, graduate residents, dean |
| `content/partners.json` | Engagement models and closing note |
| `content/news/*.md` | News items (one file each) |

### Add a news item

1. Create `content/news/your-slug.md`:

```md
---
title: Short headline
date: 2026-11-01
dateLabel: 1 November 2026
summary: One or two sentences. No percentages. Named partners only if already approved.
---

Optional longer body for a future article page.
```

2. `date` sorts the list (newest first). `dateLabel` is what visitors see (use it for “Fall 2026”).
3. Rebuild or refresh the dev server.

### Swap the logo

`src/components/Logo.astro` is the only mark. The hero watermark “S” is in `src/sections/Hero.astro` (`.hero__watermark`). Replace both when the real SVG lands:

1. Drop the file in `public/logo.svg` (or inline the SVG in `Logo.astro`).
2. Keep the same outer size so the sticky header does not jump.
3. `public/favicon.svg` is a matching square-S; update it in the same pass.

### Add a headshot

Put the image in `public/portraits/` and set `image` on that person in `content/people.json`:

```json
"image": "portraits/matt-akers.jpg"
```

Leave `image` as `""` to keep the grey initials placeholder. Do not invent names for graduate residents — keep **Appointment forthcoming** until an appointment is real.

## Section components (future routes)

The site is one page with anchor nav: **Tracks · People · News · Partners**. Each block is a self-contained section in `src/sections/` so it can become its own route later (`src/pages/tracks.astro`, and so on) without rewriting markup. Pass the same JSON/collection data in as props.

## Content rules

- No revenue, enrollment, or growth percentages.
- Company names only: Marriott International, Booster (K1), Johnson & Johnson MedTech, SCAD.
- Named people only: Matt Akers, Nye Warburton. Residents stay “Appointment forthcoming”.
- Students **train** robots. They never “build” robots.
- Keep the footer disclaimer exactly as in `content/site.json`.
- Grey palette only (no accent color). System fonts only. No analytics, CDNs, or webfonts.

## Stack

- Astro, `output: 'static'`
- System stacks: Georgia (headings), Helvetica Neue / Arial (body, nav, labels)
- Zero runtime dependencies
