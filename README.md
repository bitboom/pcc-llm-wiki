# PCC LLM Wiki

An English, Apple-first LLM wiki for Private Cloud Compute, private AI inference, and adjacent confidential computing systems.

This repository follows the LLM wiki pattern described by Andrej Karpathy: immutable raw sources feed a maintained markdown wiki, and `AGENTS.md` defines how the agent ingests, updates, and cross-links the knowledge base over time.

## Purpose

The wiki is optimized for source-backed synthesis around:

- Private Cloud Compute (Apple) as the primary corpus
- Private AI Compute (Google) as a comparison track
- Private Processing (Meta/WhatsApp) as a comparison track
- Confidential computing and TEE primitives as background context

The goal is not generic AI summarization. The goal is to maintain a persistent research artifact about:

- threat models
- attestation and verification
- privacy and security enforcement
- external auditability
- cross-vendor similarities and differences

## Layout

```text
raw/         Immutable source registry and source metadata
wiki/        Maintained markdown knowledge base
templates/   Page templates for repeatable ingestion
diagrams/    Architecture diagrams and visual assets
summaries/   Working summaries or temporary synthesis outputs
index.md     Main wiki navigation surface
log.md       Chronological append-only activity log
AGENTS.md    Rules for ingestion, maintenance, and citation
```

## Current status

V1 bootstraps:

- repo structure
- source registry for Apple, Google, Meta, and background materials
- core wiki pages
- source digest pages for the seed corpus
- editorial and ingestion rules in `AGENTS.md`

The current source registry is metadata-first. Local binary or HTML captures can be added later inside the existing raw source folders without changing the wiki structure.

## Suggested workflow

1. Add a new source under `raw/`.
2. Create or update a source digest under `wiki/sources/`.
3. Update affected system, concept, mechanism, and comparison pages.
4. Refresh `index.md`.
5. Append an entry to `log.md`.

## Source quality policy

- Prefer official technical documents, white papers, source releases, and audits.
- Treat marketing summaries as secondary unless they contain unique technical detail.
- Mark open questions instead of inferring unstated guarantees.
- Preserve contradictions instead of flattening them.
