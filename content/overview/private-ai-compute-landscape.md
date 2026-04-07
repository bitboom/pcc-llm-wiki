---
title: Private AI Compute Landscape
page_type: overview-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../sources/background-2025-04-confidential-computing-and-privacy.md
---

# Private AI Compute Landscape

Three major public designs now define the practical landscape for privacy-preserving cloud AI inference:

- Apple Private Cloud Compute
- Google Private AI Compute
- Meta Private Processing

They are solving a similar problem: how to let large models run off-device without turning cloud inference into ordinary server-side data exposure. The systems differ less in headline intent than in what they choose as the primary trust anchor. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Google Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## Core axes

### 1. What is trusted?

- Apple emphasizes attested software identity, device-side enforcement, and public release transparency.
- Google appears to lean more heavily on TEE or enclave-style confidentiality plus external review.
- Meta appears to combine enclave-style processing with privacy-preserving routing for WhatsApp use cases.

### 2. What is externally verifiable?

- Apple exposes the strongest public research surface through its Security Guide, VRE, public measurements, and selected source release.
- Google and Meta both have more visible external audit signals than ordinary cloud AI systems, but their public research surface appears narrower.

### 3. Where is privacy protected?

- Apple emphasizes end-to-end controls from request formation through attested execution and transparency-backed release identity.
- Google and Meta appear closer to a confidential-computing pattern where execution confidentiality inside a protected environment carries more of the burden. Sources: [FPF Confidential Computing and Privacy](../sources/background-2025-04-confidential-computing-and-privacy.md), [Google Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## Why the wiki is Apple-first

Apple has the richest public corpus for a sustained research wiki because the design is documented not only as a white paper claim set but as a verifiability program with tooling, release evidence, and source publication. That makes it a stronger base corpus for compounding synthesis over time. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md), [Trail of Bits PCC Review](../sources/external-2024-06-14-trail-of-bits-pcc-review.md).

## Open questions

- Will Google or Meta eventually expose research tooling comparable to Apple’s VRE?
- Which properties across the three systems are grounded in direct public evidence versus audit-mediated trust?

## Related pages

- [PCC Thesis](pcc-thesis.md)
- [Apple vs Google vs Meta](../comparisons/apple-vs-google-vs-meta.md)
- [Auditability Models](../comparisons/auditability-models.md)
