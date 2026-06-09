# AGENTS.md — AI coding agent instructions

Purpose: Provide concise, actionable guidance to AI coding agents working on this Nuxt project.

- **Project type:** Nuxt 3 application (see `nuxt.config.ts`).
- **Language:** TypeScript support enabled (`tsconfig.json`).
- **Key folders:**
  - `app/` — entry point and layouts (`app.vue`, `components/`, `pages/`).
  - `assets/` — build-time assets.
  - `public/` — static files served as-is (`images/`, `robots.txt`).
  - `styles/` — global CSS.

Quick actions:
- Install deps: `npm install` (or `pnpm install`, `yarn install`).
- Dev server: `npm run dev` (serves at http://localhost:3000).
- Build: `npm run build`.
- Preview production: `npm run preview`.

What agents should know:
- Prefer minimal, reversible changes. Open a PR-level patch for non-trivial edits.
- Preserve existing component structure in `app/components` and `app/pages`.
- Use `nuxt` CLI scripts from `package.json` for builds/tests.
- Link to existing docs instead of copying them. See [README.md](README.md) for setup.

Conventions & common pitfalls:
- CSS lives in `styles/main.css`; avoid duplicating global styles in components.
- Static assets: add to `public/images` to avoid bundling issues.
- Tailwind may be configured; ensure postinstall (`nuxt prepare`) runs after installs.

When adding automation or agents:
- Add short, targeted agent instructions to `AGENTS.md` or separate files under `.github/`.
- For any long-running or environment-specific steps, document required environment variables and OS-specific notes.

Contact: Use repository issues to discuss larger design changes.
