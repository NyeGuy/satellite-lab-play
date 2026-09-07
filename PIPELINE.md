# Satellite Lab play — Dev Pipeline

Dev pipeline for **[NyeGuy/satellite-lab-play](https://github.com/NyeGuy/satellite-lab-play)** — the Vercel playground (play/sandbox) of the STEC Satellite Lab site. This is **not** the official public Pages site.

## Ownership

| Role | Who |
| --- | --- |
| Owner | **Anvil** (Forge family) |
| Lead | Forge |
| CoS | Nyborg |
| Merge | **Nye only** |

Agents and other contributors open PRs. They do not merge.

## GitHub

| | |
| --- | --- |
| Remote | https://github.com/NyeGuy/satellite-lab-play |
| Default branch | `main` |
| Sibling (official Pages) | https://github.com/NyeGuy/satellite-lab-site |

**PR rules**

- Work on **feature branches only**. Never commit or push to `main`.
- Open a pull request against `main`. Do not merge it. **Nye merges.**
- Do not force-push shared branches you did not create.
- `main` started as a README-only stub. The Astro playground that matches the live Vercel preview lives on [PR #2](https://github.com/NyeGuy/satellite-lab-play/pull/2) (`cursor/satellite-lab-play-98f1`). After Nye merges, `main` is the source of truth.

## Local

**Node.js:** `>=22` (`package.json` → `engines.node`). There is no `.nvmrc`.

```bash
npm i
npm run dev      # astro dev — http://localhost:4321/
npm run build    # astro build — static files in dist/
npm run preview  # astro preview — serves dist/ locally
```

| Script | Command | What it does |
| --- | --- | --- |
| `dev` | `astro dev` | Local dev server at the site root |
| `build` | `astro build` | Static production build → `dist/` |
| `preview` | `astro preview` | Serve the `dist/` build locally |

Those three are the **only** npm scripts. There is no lint, test, or deploy script.

**Base path:** this playground uses Astro `base: '/'` (see `astro.config.mjs`). Local and Vercel URLs have **no** repo prefix.

The official Pages site in `NyeGuy/satellite-lab-site` uses `base: '/satellite-lab-site'` and is served at `https://nyeguy.github.io/satellite-lab-site/`. Do not copy that prefix here, and do not drop it there.

## Deploy

**Host:** [Vercel](https://vercel.com) — **not** GitHub Pages. There is no Pages workflow in this repo. Do not add one.

**Config:** `vercel.json` sets `framework: "astro"`, `buildCommand: "npm run build"`, `outputDirectory: "dist"`. Astro is `output: 'static'` with `base: '/'`. `astro.config.mjs` sets `site` from `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL` when those exist.

**How preview URLs work**

- Each Vercel deployment gets its own `*.vercel.app` URL.
- Current public play preview (matches PR #2): https://temporary-express-willow-lgf681z.vercel.app
- After this repo is imported and connected to Git, pushes and pull requests get new preview URLs automatically. Production follows `main` once Nye merges and the Vercel project is pointed at this GitHub remote.

**This is the play/sandbox deploy, not the official public site.** Visitors and partners should not treat a `*.vercel.app` URL here as the STEC publication surface. Official Pages remains [`NyeGuy/satellite-lab-site`](https://github.com/NyeGuy/satellite-lab-site).

## Cursor

**Open the repo**

1. Clone `https://github.com/NyeGuy/satellite-lab-play.git` (or open the GitHub repo in Cursor).
2. Open the project folder. Use a branch — never `main`.
3. `npm i` then `npm run dev` if you need the site locally.

**Cloud-agent expectations**

- Create a feature branch. Make the change. Open a PR. **Do not merge.** Nye merges.
- Docs and copy edits belong here when they are for the *playground*. Official Pages copy belongs in `satellite-lab-site`.
- Do not invent deploy targets, Pages workflows, or production domains.

**Editable content** lives in [`content/`](./content/) — not in `src/` components. Components read those files.

| Path | Holds |
| --- | --- |
| `content/site.json` | Name, headline, mission, mantra, location, nav, SCAD link, footer POC disclaimer |
| `content/tracks.json` | The three research tracks |
| `content/people.json` | Director, graduate residents, dean |
| `content/partners.json` | Engagement models and closing note |
| `content/news/*.md` | News items (one file each; Astro collection via `src/content.config.ts`) |

Layout, sections, and styles stay under `src/`. Do not restyle or rewrite copy in components when `content/` can hold it.

## Out of scope / do NOT touch

Leave these alone. They are other tracks or the official publication path:

- **Protostar** — Vercel team / claim / project settings. Do not reconfigure, claim, or rename deploys.
- **lab-thrust**
- **baseball / lab-hitting**
- **Official Pages site** — sibling repo [`NyeGuy/satellite-lab-site`](https://github.com/NyeGuy/satellite-lab-site). That is the public GitHub Pages path (`base: '/satellite-lab-site'`). Do not add Pages here, and do not treat this playground as that site.
