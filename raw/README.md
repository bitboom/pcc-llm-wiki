# Raw Sources

`raw/` is the immutable source layer for this wiki.

## Rules

- One source per folder
- Metadata lives in `source.md`
- Do not rewrite source contents after ingestion except for metadata cleanup
- Add local artifacts such as PDF, HTML, images, or extracted text inside the same folder

## Current policy

The repository is currently seeded in a metadata-first state:

- canonical URL recorded
- trust level recorded
- related pages recorded
- local binary or HTML capture pending

This keeps the ingest structure stable while allowing future artifact capture without reorganizing the tree.
