# Heal Yoga

Heal Yoga is an open-source, accessible yoga practice site built as a
higher-education initiative between the University of Glasgow (School of
Computing Science, and School of Medicine, Dentistry & Nursing) and the
Singapore Institute of Technology. It hosts a guided library of
instructor-led yoga demonstration videos aimed at students, older adults,
and anyone starting a wellness journey — plus interviews with clinical and
yoga professionals on accessible movement and healthy ageing.

Live site: https://drpeteryau.github.io/healyoga

## What's in the app

- **Practice library** (`app/page.tsx`) — 22 instructor-led pose videos
  (embedded from YouTube) covering Standing, Sitting, Intermediate, and
  Advanced categories, each with a searchable/filterable card grid and a
  featured player.
- **Interviews** — short video interviews with clinical and yoga
  professionals, plus a full written interview with A/Prof Kamala Devi
  (School of Medicine, Dentistry & Nursing) on the nursing perspective
  behind the project.
- **Credits** — the student development team, faculty advisor, supporting
  institutions, and special thanks to the project's yoga instructor.
- **Multilingual UI** — automatic browser-locale detection and a manual
  language switcher (`app/i18n.ts`), covering 5 languages:
  - English (`en`)
  - Traditional Chinese / 繁體中文 (`zh-Hant`)
  - Simplified Chinese / 简体中文 (`zh-Hans`)
  - Malay / Bahasa Melayu (`ms`)
  - Tamil / தமிழ் (`ta`)
- **First-visit disclaimer** — a pop-up shown on first load (Agree/Disagree,
  see [Disclaimer popup](#disclaimer-popup) below), localized into all 5
  languages above.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, static export) with React 19
- TypeScript, Tailwind CSS 4
- Statically exported (`output: "export"`) — no server runtime required
- Drizzle ORM configured but intentionally unused (`db/schema.ts` is empty;
  this is a static content site with no database)
- Docker + nginx for containerized self-hosting; GitHub Actions for
  automated deploys to GitHub Pages

## Prerequisites

- Node.js `>=22.13.0`

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start local development (via vinext)
- `npm run build` — vinext build (used for local/Cloudflare-style preview)
- `npm run build:pages` — static export build (`next build`, output in `out/`)
- `npm start` — serve the vinext build
- `npm test` — build the static export and verify the rendered HTML
- `npm run lint` — run ESLint
- `npm run db:generate` — generate Drizzle migrations (only needed if the
  optional D1/Drizzle example under `examples/d1/` is adopted)

## Deployment

This app ships to two independent targets from the same static export:

### Coolify (primary, Docker Compose)

`compose.yaml` builds `Dockerfile` (Next.js static export → nginx on port
`9711`) and is what Coolify's CI/CD pulls and runs.

```bash
docker compose up --build
```

### GitHub Pages (secondary, static mirror)

`.github/workflows/deploy-pages.yml` builds the static export on every push
to `main` and publishes `out/` to the `gh-pages` branch (via
[`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)).
Repo Settings → Pages → Build and deployment is set to **Deploy from a
branch** (`gh-pages` / root) — intentionally *not* the "GitHub Actions"
build type, since that mode ignores the `gh-pages` branch entirely and ends
up serving `README.md` as the homepage if nothing else is committed to the
configured branch/folder.

## Project structure

```
app/            Next.js App Router pages, layout, i18n strings, ChatGPT auth helpers
db/             Drizzle schema (empty by default)
drizzle/        Drizzle migration metadata
examples/d1/    Optional Cloudflare D1 + Drizzle example
worker/         Cloudflare Worker entry point (vinext runtime)
public/         Static assets (favicon, OG image, instructor/interview photos)
tests/          Rendered-HTML smoke test
.github/        GitHub Actions deploy workflow
```

## Disclaimer popup

On first visit, `app/page.tsx` shows a blocking pop-up (state/strings in
`app/i18n.ts`, e.g. `disclaimerTitle`/`disclaimerPoint1-4`) that the visitor
must accept before using the site. English text:

> **Before you begin**
>
> 1. This is a student learning and teaching project, created for
>    educational purposes.
> 2. We do our best to keep the content accurate, but we cannot guarantee
>    that all information is correct.
> 3. Languages other than English are machine-translated and may contain
>    errors.
> 4. Please be mindful of your own safety, and you are responsible for
>    yourself when following any content on this site.
>
> **[ I Agree, Continue ]**   **[ I Disagree ]**

The same four points are localized into Traditional Chinese, Simplified
Chinese, Malay, and Tamil alongside the rest of the UI strings.

## Acknowledgements

Built by the CSC2101/CSC2102 student development team under the guidance of
Dr Peter CY Yau, with generous support from yoga instructor Ms Lim Li Peng,
who filmed and demonstrated every pose in the library.
