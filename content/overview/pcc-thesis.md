---
title: PCC Thesis
page_type: overview-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-research.md
  - ../sources/apple-2024-10-24-security-pcc-repo.md
  - ../sources/external-2024-06-14-trail-of-bits-pcc-review.md
---

# PCC Thesis

This wiki uses Apple PCC as the anchor corpus because Apple turned a cloud AI privacy claim into a research program.

## Working thesis

The strongest differentiator in Apple PCC is not that it promises privacy in the cloud. Google and Meta now make similar high-level promises. The differentiator is that Apple pairs those promises with a more explicit public verification story:

- public software measurements
- public binary inspection commitments
- a Virtual Research Environment
- selected source release
- device-side enforcement tied to attestation

Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md), [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md).

## Why that matters for an LLM wiki

An LLM wiki compounds best when the corpus has:

- stable primary documents
- named mechanisms
- public artifacts that can be cross-checked
- meaningful disagreement from outside reviewers

Apple PCC has all four. Sources: [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md), [Trail of Bits PCC Review](../sources/external-2024-06-14-trail-of-bits-pcc-review.md), [HPI Security Analysis of Apple PCC](../sources/external-2024-security-analysis-of-apple-pcc.md).

## Limits of the thesis

This is not a claim that Apple’s architecture is automatically strongest on every dimension. It is a claim that Apple currently offers the best raw material for a persistent research wiki because more of the system is publicly discussable and inspectable.

## Open questions

- Which Apple guarantees remain difficult to verify even with the VRE and source release?
- Could Google or Meta eventually close the auditability gap with new tooling or disclosures?
