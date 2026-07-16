# Local AI Research

A static SvelteKit publication for versioned local-AI market research.

## Features

- SvelteKit static export
- Markdown-backed editions via mdsvex
- Pagefind full-text search
- Sortable comparison matrices and benchmark tables
- Swiss-inspired light and dark themes
- Print/PDF stylesheet
- Versioned edition routes
- GitHub Pages deployment through GitHub Actions

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

The production build generates the static site in `build/` and creates a Pagefind index in `build/pagefind/`.

## Publishing a new edition

1. Copy `src/routes/editions/2026-07` to a new date-based route.
2. Update the report and data modules.
3. Add the edition metadata to `src/lib/content/editions.ts`.
4. Push to `main`; GitHub Actions builds and deploys the site.

## GitHub Pages

The workflow supplies `BASE_PATH=/${repository-name}` so SvelteKit emits correct URLs for project Pages.
