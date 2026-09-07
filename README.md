# Satellite Lab — Vercel playground

> **Ownership:** Owner Anvil (Forge family) · Lead Forge · CoS Nyborg · **Merge: Nye only**
>
> **Playground / Vercel — not the official Pages site.** Official public site: [NyeGuy/satellite-lab-site](https://github.com/NyeGuy/satellite-lab-site).
>
> Dev pipeline: **[PIPELINE.md](./PIPELINE.md)** · Agent rules: **[AGENTS.md](./AGENTS.md)** · Editable copy: **[`content/`](./content/)**

This repo is the **Vercel play deploy** of the STEC Satellite Lab site — a sandbox, not the official publication surface.

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

Requires Node.js 22 or newer (`package.json` → `engines.node`).

```bash
npm i
npm run dev
```

Dev server: [http://localhost:4321/](http://localhost:4321/)

This playground is hosted at the **site root** (`base: '/'`). There is no `/satellite-lab-site/` prefix here (the Pages sibling uses `/satellite-lab-site/`).

### npm scripts

These are the only scripts in `package.json`:

| Script | Runs | What it does |
| --- | --- | --- |
| `npm run dev` | `astro dev` | Local dev server at [http://localhost:4321/](http://localhost:4321/) |
| `npm run build` | `astro build` | Static production build → `dist/` |
| `npm run preview` | `astro preview` | Serve `dist/` locally to check the production build |

```bash
npm run build
npm run preview
```

## Edit copy (`content/`)

Same as the Pages repo. All visitor-facing text is under [`content/`](./content/). Edit those files; do not hard-code body copy in `src/` components.

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
