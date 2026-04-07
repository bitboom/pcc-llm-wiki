---
title: Privacy Guarantee Surfaces
page_type: comparison-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../sources/meta-2025-04-29-private-processing-engineering.md
---

# Privacy Guarantee Surfaces

## What this page compares

Each system promises privacy, but the surface where that promise is supposed to hold is different.

## Apple PCC

Apple distributes the privacy guarantee across multiple layers:

- request metadata minimization
- relay-based source IP separation
- single-use anonymous authorization
- subset-based node decryption
- attested node identity
- transparency-backed release verification

Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md).

## Google Private AI Compute

Google’s guarantee surface appears more concentrated in the protected execution environment and its surrounding attestation and audit story. In the current corpus, there is less public emphasis on Apple-style routing privacy or transparency-log-backed release identity. Sources: [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [NCC Group Review of Google Private AI Compute](../sources/google-2025-11-08-ncc-private-ai-compute-review.md).

## Meta Private Processing

Meta’s guarantee surface appears split between protected execution and routing privacy. This makes it more comparable to Apple on network unlinkability, while still looking more like Google on enclave-centered execution. Sources: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md).

## Working conclusion

Apple’s design spreads trust across more explicit layers and exposes more of those layers publicly. Google concentrates more trust in the protected compute boundary. Meta occupies a middle position, combining protected compute with more visible relay-oriented privacy mechanisms.

## Open questions

- Which of these surfaces are strongest under active attack, not just nominal design assumptions?
- Which layers are directly inspectable by outside researchers in each system?
