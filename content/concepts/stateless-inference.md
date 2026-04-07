---
title: Stateless Inference
page_type: concept-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-guide.md
  - ../sources/google-2025-11-11-private-ai-compute-technical-brief.md
---

# Stateless Inference

## Definition

Stateless inference means designing the system so that request contents and derived sensitive state are not retained beyond what is necessary to complete the current computation.

## Why it matters here

If the system does not retain request state, later compromise, operator access, and cross-request correlation all become less damaging.

## Apple

Apple makes stateless computation one of the named PCC design requirements. In the Apple corpus, this is a core design principle rather than an incidental implementation detail. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md).

## Google and Meta

The current seed corpus does not show the same degree of explicit branding around statelessness for Google or Meta. They may still minimize retained state, but that should not be assumed without stronger direct evidence. Sources: [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## Limits and caveats

- Statelessness reduces persistence risk but does not eliminate exposure during active processing.
- Infrastructure metadata can still leak information even when payload state is short-lived.

## Sources

- [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md)
- [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md)
