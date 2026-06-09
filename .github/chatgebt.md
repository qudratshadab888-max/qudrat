# chatgebt — Agent instructions

Purpose: Short instructions for the `chatgebt` customization (a small helper agent).

When to invoke:
- Use `chatgebt` for interactive code suggestions, small refactors, and generating concise PR-ready patches.

Scope and rules:
- Keep changes focused (single-file or small refactors). For larger tasks, produce a plan and request confirmation.
- Always run or reference existing npm scripts for build/dev steps rather than inventing commands.
- Prefer edits that preserve existing styling and conventions.

Quick checklist for `chatgebt` runs:
1. Read `AGENTS.md` and `README.md`.
2. Run `npm run dev` locally to reproduce UI issues (human confirms when needed).
3. Propose a minimal patch and summarize changes.

Notes:
- This file is intentionally minimal. For broader automation (tests, CI), create separate agent instruction files under `.github/`.
