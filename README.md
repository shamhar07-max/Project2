# DigitalBurj — Corporate Website

The `digitalburj.com` corporate homepage: company overview, the four-division
ecosystem (Academy, Studio, Business AI, Verified Talent), technology,
portfolio and get-started flows, per `docs/subdomain-structure.pdf`.

Built with React, React Router and Tailwind CSS on Vite.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

## Structure

- `src/pages` — one component per route (`Home`, `Ecosystem`, `Technology`, `Portfolio`, `GetStarted`, `Contact`, legal pages, and `company/*`).
- `src/components` — shared `Nav`, `Footer`, `Logo`, `PageHero`.
- `src/data/content.ts` — division, portfolio and industry content in one place.
- `public/brand` — logo assets (wordmark + DB icon).

## Brand

Colors and usage rules come from `docs/brand-guidelines.md`:

| Token | Hex |
|---|---|
| Navy | `#10273C` |
| Red | `#E31B23` |
| Ink | `#152536` |
| Slate | `#617184` |
| Cloud | `#F2F5F7` |

Tokens are wired into Tailwind via `@theme` in `src/index.css` (`bg-navy`, `text-red`, `bg-cloud`, etc.).

## Scope

This is the corporate HQ site only. The other 12 domains in the subdomain
structure (Academy, Studio, Business AI, Verified Talent, Jobs, Identity,
workspace, API, Admin, Support, Docs, Status) are separate builds; division
links here point at their intended subdomains per the architecture doc.
