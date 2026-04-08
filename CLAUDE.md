# CLAUDE.md

## Project overview

This is a Quartz-powered research wiki about Private Cloud Compute (PCC) and adjacent private AI compute systems. It follows an LLM-wiki pattern: immutable raw sources feed a maintained markdown wiki with strict provenance rules. See `AGENTS.md` for the full editorial and ingestion policy.

Published site: https://bitboom.github.io/pcc-llm-wiki/

## Repository layout

```
raw/           Immutable source registry (Apple, Google, Meta, audits, background)
wiki/          Authoritative markdown knowledge base (the source of truth)
content/       Generated publish layer for Quartz (do NOT edit manually)
quartz/        Quartz SSG runtime, components, and rendering logic
scripts/       Build helpers (sync-content.mjs)
templates/     Page templates (system-page, concept-page, source-digest)
diagrams/      Architecture diagrams and visual assets
summaries/     Working summaries before they migrate into wiki/
public/        Build artifact (gitignored, do not commit)
index.md       Main wiki navigation surface
log.md         Chronological append-only activity log
AGENTS.md      Editorial rules for ingestion, maintenance, and citation
```

### Key directories under wiki/

- `wiki/overview/` - PCC thesis and private AI landscape
- `wiki/systems/` - Vendor system pages (Apple PCC, Google, Meta)
- `wiki/concepts/` - Cross-cutting ideas (attestation, confidential computing, etc.)
- `wiki/mechanisms/` - Implementation primitives (blind signatures, OHTTP, TEE, etc.)
- `wiki/comparisons/` - Cross-vendor comparisons
- `wiki/sources/` - Source digest pages (one per ingested source)

## Tech stack

- **Runtime**: Node.js >= 22 (pinned to v22.16.0 in `.node-version`)
- **SSG**: Quartz v4.5.2 (custom fork in `quartz/`)
- **Language**: TypeScript (strict mode, Preact JSX)
- **Formatting**: Prettier
- **CI/CD**: GitHub Actions deploys to GitHub Pages on push to `main`

## Common commands

```bash
npm ci                  # Install dependencies (use ci, not install)
npm run dev             # Sync content + serve locally with hot reload
npm run build           # Sync content + full Quartz build (output: public/)
npm run sync:content    # Regenerate content/ from wiki/ and index.md
npm run check           # TypeScript type check + Prettier format check
npm run format          # Auto-format with Prettier
npm run test            # Run tests with tsx --test
npm run clean           # Remove content/, public/, .quartz-cache/
```

## Build pipeline

1. `scripts/sync-content.mjs` copies `wiki/` into `content/`, applying transforms:
   - Strips `raw_source:` frontmatter and `date: undated` lines
   - Rewrites raw source links to generic repository references
   - Renames `README.md` files to `index.md`
   - Adds homepage frontmatter to root `index.md`
2. Quartz reads `content/` and builds static HTML into `public/`

## Content editing rules

- **Edit `wiki/`, never `content/`** for normal content work. `content/` is regenerated.
- **Do not edit `public/`** - it is a build artifact.
- **`raw/` is immutable** - add new source folders but do not modify existing ones.
- **`log.md` is append-only** - always add entries at the end.
- After changing `wiki/`, run `npm run sync:content` or `npm run build` to keep `content/` aligned.

## Ingestion workflow (new sources)

1. Add source folder under `raw/<vendor>/<category>/<date-slug>/` with `source.md`
2. Create source digest under `wiki/sources/`
3. Update affected system, concept, mechanism, and comparison pages
4. Update `index.md` navigation
5. Append entry to `log.md`
6. Regenerate content: `npm run sync:content`

## Citation conventions

- Every nontrivial claim must cite a source digest in `wiki/sources/`
- Source digests link back to raw metadata in `raw/`
- Inline citation format: `Sources: [Title](wiki/sources/slug.md)`
- When evidence is incomplete, add an `Open questions` section

## Page types

Use these consistently (defined in templates/):
- `system-page` - one vendor or system
- `concept-page` - cross-cutting idea
- `mechanism-page` - implementation primitive
- `comparison-page` - vendor or design comparison
- `source-digest` - structured digest of one source
- `overview-page` - top-level synthesis

## Writing style

- Concise technical prose in English
- Separate claims from enforcement mechanisms
- Prefer short sections with explicit headings
- Mark stubs and weakly supported pages clearly
- Preserve contradictions between sources rather than flattening them

## Quality checklist (before finishing work)

- [ ] Changed pages cite sources
- [ ] New pages are linked from `index.md`
- [ ] Source digests link to raw metadata
- [ ] Comparison pages separate claims from evidence
- [ ] `npm run build` succeeds
- [ ] `content/` was regenerated (not hand-edited)
