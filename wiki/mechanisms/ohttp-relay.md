---
title: OHTTP Relay
page_type: mechanism-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/meta-2025-04-29-private-processing-engineering.md
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
---

# OHTTP Relay

## What it is

Oblivious HTTP is a relay-based pattern that separates the client’s network identity from the service that ultimately processes the request.

## Why it matters here

Protected execution alone does not hide the source IP or network linkage of a request. Relay-based separation matters because it reduces correlation risk outside the compute boundary.

## Apple

Apple explicitly describes OHTTP relay usage in PCC as part of its non-targetability story. The relay is intended to keep the source IP away from the PCC infrastructure itself. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md).

## Meta

Meta’s public materials appear to emphasize similar relay-based privacy goals in the WhatsApp private processing context, although the exact routing construction should be described from the whitepaper and engineering post rather than inferred from Apple terminology. Sources: [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md), [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## Limits and caveats

- Relay privacy helps with source unlinkability but does not by itself prove confidential execution.
- If other metadata channels remain visible, correlation risk can persist.

## Sources

- [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md)
- [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md)
