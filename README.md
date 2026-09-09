# Satellite Lab — Vercel playground

This repo is the **Vercel play deploy** of the STEC Satellite Lab site.

GitHub Pages stays on **[NyeGuy/satellite-lab-site](https://github.com/NyeGuy/satellite-lab-site)** (`https://nyeguy.github.io/satellite-lab-site/` after Pages is enabled on `main`). Do not treat this repo as the Pages source. Do not change the Pages setup there.

**Proof of concept — internal draft, not for publication.** Content pending review under STEC data classification.

## Playable URL

Open this first (public, no Vercel login):

**https://temporary-express-willow-lgf681z.vercel.app**

That is a claimable Vercel deploy of this Astro site (`base: '/'`). Claim it onto the Protostar team so it does not expire:

**https://vercel.com/claim-deployment?code=d23064df-a3d8-4928-9101-ad6070ae3a28**

Protostar team preview (Vercel Authentication — log in as a Protostar member):

**https://satlab-play-root-protostar1.vercel.app**

Inspector: https://vercel.com/protostar1/satlab-play-root/B4JYSsq9jUHPwv4Zq3yhzNPLYFAd

After this PR is merged, import **NyeGuy/satellite-lab-play** in the Protostar Vercel dashboard so git on `main` rebuilds the Astro project. Do not import until `main` has this site (empty `main` would deploy the README only).

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

## Edit copy

Same as the Pages repo. All visitor-facing text is under `content/`.

| File | What it holds |
| --- | --- |
| `content/site.json` | Name, headline, mission, mantra, location, nav, SCAD link, footer disclaimer |
| `content/tracks.json` | The three research tracks (kicker, body, tone) |
| `content/people.json` | Director and graduate residents |
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

### Add a track picture

Put the image in `public/tracks/` and set `image` on that track in `content/tracks.json`:

```json
"image": "tracks/spatial-intelligence.jpg"
```

Leave `image` as `""` to keep the grey picture slot. Do not invent photos.

## Content rules

Identical to the Pages repo:

- No revenue, enrollment, or growth percentages.
- Company names only: Booster (K1), Johnson & Johnson MedTech, SCAD.
- Named people only: Matt Akers. Residents stay “Appointment forthcoming”.
- Students **train** robots. They never “build” robots.
- Keep the footer disclaimer exactly as in `content/site.json`.
- Grey tonal system (g-88 → g-78 → g-28) with a restrained gallery ochre (`#c9a84b` / `#806618`) on rules, focus rings, kickers, and the mantra. No neon yellow. System fonts only. No analytics, CDNs, or webfonts.

## Stack

- Astro, `output: 'static'`, `base: '/'`
- System stacks: Georgia (headings), Helvetica Neue / Arial (body, nav, labels)
- Zero runtime dependencies
