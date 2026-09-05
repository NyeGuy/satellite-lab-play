# Satellite Lab — Vercel playground

This repo is the **Vercel play deploy** of the STEC Satellite Lab site.

GitHub Pages stays on **[NyeGuy/satellite-lab-site](https://github.com/NyeGuy/satellite-lab-site)** (`https://nyeguy.github.io/satellite-lab-site/` after Pages is enabled on `main`). Do not treat this repo as the Pages source.

**Proof of concept — internal draft, not for publication.** Content pending review under STEC data classification.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Dev server: [http://localhost:4321/](http://localhost:4321/)

This playground is hosted at the **site root** (`base: '/'`). There is no `/satellite-lab-site/` prefix here.

```bash
npm run build
npm run preview
```

## Vercel

Astro static, root hosting. After this branch is on GitHub, the Protostar team project `satellite-lab-play` deploys from git (once linked) and from the file/preview deploy noted in the PR.

Production-style URL (after first deploy): `https://satellite-lab-play.vercel.app`

## Edit copy

Same as the Pages repo. All visitor-facing text is under `content/`.

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

`src/components/Logo.astro` is the only mark. The hero watermark “S” is in `src/sections/Hero.astro`. Replace both when the real SVG lands. Update `public/favicon.svg` in the same pass.

### Add a headshot

Put the image in `public/portraits/` and set `image` on that person in `content/people.json`:

```json
"image": "portraits/matt-akers.jpg"
```

Leave `image` as `""` to keep the grey initials placeholder. Do not invent names for graduate residents — keep **Appointment forthcoming** until an appointment is real.

## Content rules

Identical to the Pages repo:

- No revenue, enrollment, or growth percentages.
- Company names only: Marriott International, Booster (K1), Johnson & Johnson MedTech, SCAD.
- Named people only: Matt Akers, Nye Warburton. Residents stay “Appointment forthcoming”.
- Students **train** robots. They never “build” robots.
- Keep the footer disclaimer exactly as in `content/site.json`.
- Grey palette only (no accent color). System fonts only. No analytics, CDNs, or webfonts.

## Stack

- Astro, `output: 'static'`, `base: '/'`
- System stacks: Georgia (headings), Helvetica Neue / Arial (body, nav, labels)
- Zero runtime dependencies
