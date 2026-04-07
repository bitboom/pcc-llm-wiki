# AGENTS.md

This repository is a persistent LLM-maintained research wiki. The agent is expected to read raw sources, update wiki pages, preserve provenance, and keep the knowledge base internally consistent over time.

## Primary objective

Maintain a source-backed markdown wiki for Private Cloud Compute and adjacent private AI compute systems.

The wiki should optimize for:

- technical clarity
- explicit provenance
- durable cross-links
- tracked open questions
- visible differences between claims, mechanisms, and verifiable evidence

It should not optimize for:

- marketing language
- speculative conclusions without evidence
- one-off chat answers that are not filed back into the wiki

## Repository model

There are five relevant layers:

1. `raw/`
   Immutable source registry. Each source lives in its own folder with metadata in `source.md`. Additional local artifacts such as PDFs, HTML captures, images, or notes can be added inside the same folder.
2. `wiki/`
   The maintained knowledge layer and the source of truth for authored research content. This is where the agent writes summaries, concept pages, comparisons, and source digests.
3. `content/`
   The generated publish layer for Quartz. It is derived from `wiki/` and root navigation files by `scripts/sync-content.mjs`. Do not manually edit `content/` unless the task is specifically about the generation pipeline itself.
4. `quartz/`
   Quartz runtime, components, and site rendering logic.
5. `templates/`
   Reusable page templates for consistent ingestion.

`public/` is a build artifact emitted by Quartz and must not be treated as authored content.

## Scope and priorities

- Apple PCC is the primary corpus and should have the deepest coverage.
- Google Private AI Compute and Meta Private Processing are comparison tracks.
- Background pages should support interpretation, not dominate the wiki.
- If comparison sources are weak or incomplete, state that explicitly.

## Evidence order

When multiple sources cover the same claim, prioritize them in this order:

1. official technical documentation, white papers, source code, and security guides
2. third-party audits and security reviews
3. academic analyses
4. high-quality secondary summaries
5. media coverage

If a higher-trust source conflicts with a lower-trust source, preserve both and state the conflict.

## Citation policy

- Every nontrivial technical or security claim must cite at least one source digest in `wiki/sources/`.
- Source digests must link back to the corresponding raw source metadata in `raw/`.
- If a page contains a claim that has not yet been digested, cite the raw source metadata directly and mark the page for follow-up.
- Prefer short in-line source callouts of the form:
  `Sources: [Apple PCC intro](wiki/sources/apple-2024-06-10-private-cloud-compute-intro.md)`

## Page types

Use these page types consistently:

- `system-page`: one vendor or system
- `concept-page`: cross-cutting idea or property
- `mechanism-page`: concrete implementation primitive
- `comparison-page`: vendor or design comparison
- `source-digest`: structured digest of one source
- `overview-page`: top-level synthesis or framing page

## Writing conventions

- Write in English.
- Use concise technical prose.
- Separate what a system claims from how it enforces the claim.
- Distinguish between trusted computing base, routing layer, and external verification layer.
- Prefer short sections and explicit headings over long narrative blocks.
- When evidence is incomplete, create an `Open questions` section instead of guessing.

## Publish model

- The public site is built with Quartz and deployed to GitHub Pages.
- Public URL target: `https://bitboom.github.io/pcc-llm-wiki/`
- Quartz configuration lives in `quartz.config.ts` and `quartz.layout.ts`.
- `scripts/sync-content.mjs` regenerates `content/` from `wiki/` and root navigation files.
- The deployment workflow is `.github/workflows/deploy.yml`.

## Editing rules for published content

- Edit `wiki/`, not `content/`, for normal content updates.
- Treat `content/` as generated output that should be refreshed, not hand-maintained.
- If a change affects public navigation or rendering, update the authored source first, then regenerate `content/`.
- Do not add public-facing links that depend on repo-only browsing of `raw/`.
- Public pages may mention that raw metadata exists in the repository, but should not rely on `raw/.../source.md` as the main reading path.

## Ingestion workflow

For each new source:

1. Add or update a source folder under `raw/`.
2. Fill `source.md` metadata.
3. Create or update a source digest under `wiki/sources/`.
4. Extract claims into four buckets:
   - architecture
   - threat model
   - enforcement mechanisms
   - auditability and verification
5. Update affected system pages.
6. Update affected concept or mechanism pages.
7. Update comparison pages if conclusions change.
8. Refresh `index.md`.
9. Append an entry to `log.md`.
10. Regenerate the publish layer with `npm run sync:content` or `npm run build` if the change affects the site.

## Maintenance rules

- Do not delete old claims silently when a new source disagrees. Replace or qualify them with explicit citations.
- Preserve chronological evidence when a newer source supersedes an older source.
- Keep `log.md` append-only.
- Keep `index.md` content-oriented and stable.
- Mark stubs and weakly supported pages clearly.
- Keep `wiki/` and `content/` aligned. If `wiki/` changes but `content/` is stale, refresh it before concluding work.
- Do not hand-edit build artifacts in `public/`.

## Quality checks

Before concluding a substantive update:

- confirm that changed pages cite sources
- confirm that new pages are linked from `index.md`
- confirm that source digests link to raw metadata
- confirm that comparison pages clearly separate claims from evidence
- confirm that open questions remain open unless a source actually resolves them
- if content changed, confirm `npm run build` succeeds
- if the publish layer changed, confirm `content/` was regenerated from source rather than manually edited
