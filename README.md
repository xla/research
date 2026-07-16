# Local AI Research

Public, versioned research publication site for local AI systems.

Public URL: `https://xla.github.io/research/`

## Technology

- SvelteKit with TypeScript
- `@sveltejs/adapter-static`
- mdsvex for report prose
- Pagefind for static full-text search
- Vitest for utility tests
- ESLint and Prettier
- GitHub Actions for validation and GitHub Pages deployment

## Local Setup

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm format:check
pnpm lint
pnpm check
pnpm test
pnpm build
```

`pnpm build` runs the SvelteKit static build and then creates the Pagefind index in `build/pagefind/`.

## Production Build

```bash
BASE_PATH=/research pnpm build
```

The static site is emitted to `build/`. Generated build output is not committed.

## Content Structure

Research content and presentation are separate:

- `src/lib/content/editions/` contains mdsvex prose.
- `src/lib/data/editions.ts` contains immutable edition metadata.
- `src/lib/data/local-ai-2026/` contains structured model, runtime, tooling, hardware, score and source data.
- `src/lib/components/` contains reusable report UI components.
- `src/routes/editions/[slug]/` renders versioned report routes.

## Adding a New Edition

1. Add a new metadata entry in `src/lib/data/editions.ts`.
2. Add a new content directory under `src/lib/content/editions/`.
3. Add edition-specific structured data under `src/lib/data/`.
4. Add the new slug to `entries()` in `src/routes/editions/[slug]/+page.ts`.
5. Render the edition route without mutating old edition URLs.

## Updating a Draft Edition

Draft editions can be edited in place until published. Published edition URLs should remain immutable. Corrections should use `revisedAt` metadata and a visible revision note when the change affects interpretation.

## Search Indexing

Pagefind indexes the rendered static HTML after SvelteKit builds:

```bash
pnpm build
```

Navigation and repeated controls use `data-pagefind-ignore`. The report article uses `data-pagefind-body`.

## Scoring Methodology

Scores use eight typed dimensions:

- Capability
- Hardware fit
- Operational quality
- Security
- Ecosystem
- Interoperability
- Total cost of ownership
- Cross-device viability

The scoring utility validates score ranges and weight totals. Workload-specific weights can override defaults. Tests cover weight validation, range validation, composite score calculation and stable ranking.

## Citation Expectations

Use primary sources where possible: official model cards, repositories, release notes, technical reports, documentation and licence files. Mark claims as independent measured, community reproduced, vendor reported, hardware estimate or inferred. Do not use internal citation tokens in public content.

## Accessibility

The site uses semantic headings, a skip link, keyboard-accessible controls, visible focus states, text labels for status badges, a keyboard-search dialog and print-friendly styles. Target: WCAG 2.2 AA where practical.

## Print and PDF

Use the visible `Print / Save PDF` control on the report page. Print CSS removes navigation, forces a light paper theme, preserves source references and keeps table headers repeatable where browser support permits.

## GitHub Pages Setup

The deployment workflow uses GitHub Pages Actions. Repository settings must use:

1. Settings
2. Pages
3. Build and deployment
4. Source: GitHub Actions

The workflow sets `BASE_PATH=/${{ github.event.repository.name }}` so project Pages URLs work under `/research`.

## Custom Domain

For a custom domain, configure GitHub Pages in repository settings and add the required DNS records. Then update canonical URLs, sitemap URLs and any Open Graph URLs from `https://xla.github.io/research/` to the custom domain.

## Publishing Workflow

1. Open a pull request.
2. Wait for `check.yml`.
3. Merge to `main`.
4. `deploy-pages.yml` builds and deploys `build/`.
5. Verify the public URL responds.

## Licence

Application source code is MIT licensed. Research prose and structured research data may require separate attribution. Third-party names and trademarks remain with their owners. Linked source material is not redistributed.
