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
- **Multilingual UI** — English, Traditional Chinese, and Simplified
  Chinese, with automatic browser-locale detection and a manual language
  switcher (`app/i18n.ts`).

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

### GitHub Pages (automatic)

`.github/workflows/deploy-pages.yml` builds the static export on every push
to `main` and deploys it to GitHub Pages under the `/healyoga` base path.

### Docker

```bash
docker compose up --build
```

This builds the static export and serves it via nginx on port `9711`
(see `Dockerfile`, `compose.yaml`, `nginx.conf`).

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

## Acknowledgements

Built by the CSC2101/CSC2102 student development team under the guidance of
Dr Peter CY Yau, with generous support from yoga instructor Ms Lim Li Peng,
who filmed and demonstrated every pose in the library.
