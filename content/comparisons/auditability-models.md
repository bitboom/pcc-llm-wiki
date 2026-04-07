---
title: Auditability Models
page_type: comparison-page
status: seeded
sources:
  - ../sources/apple-2024-10-24-pcc-security-research.md
  - ../sources/apple-2024-10-24-pcc-vre.md
  - ../sources/apple-2024-10-24-security-pcc-repo.md
  - ../sources/google-2025-11-08-ncc-private-ai-compute-review.md
  - ../sources/meta-2025-08-27-ncc-private-processing-audit.md
---

# Auditability Models

## Main distinction

The most important cross-vendor distinction in the seed corpus is not whether external review exists. It is whether public verification is direct or mediated.

## Apple

Apple’s model is comparatively direct:

- public measurements and release identity
- published software images
- VRE tooling
- selected source code
- bounty incentives for public research

Sources: [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md), [Apple PCC VRE Docs](../sources/apple-2024-10-24-pcc-vre.md), [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md).

## Google

Google’s public posture, as currently captured here, appears more mediated through technical documentation and third-party review. That is meaningful, but it gives outside researchers less direct leverage than Apple’s tooling-centered model. Sources: [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [NCC Group Review of Google Private AI Compute](../sources/google-2025-11-08-ncc-private-ai-compute-review.md).

## Meta

Meta’s model also appears more mediated, relying on a whitepaper, engineering explanation, and external audit. This is stronger than ordinary opacity, but still distinct from Apple’s public reproducibility posture. Sources: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [NCC Group Audit of WhatsApp Private Processing](../sources/meta-2025-08-27-ncc-private-processing-audit.md).

## Practical takeaway

The current corpus supports a strong working distinction:

- Apple: inspectable public verification program
- Google: technical brief plus auditor-mediated trust
- Meta: whitepaper plus auditor-mediated trust

## Open questions

- Will Google or Meta expose public research tooling that narrows this gap?
- How much detail is contained in the full audit reports versus public landing pages?
