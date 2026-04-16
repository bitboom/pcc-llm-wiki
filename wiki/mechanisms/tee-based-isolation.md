---
title: TEE-Based Isolation
page_type: mechanism-page
status: seeded
sources:
  - ../sources/background-2025-04-confidential-computing-and-privacy.md
  - ../sources/background-2024-confidential-computing-consortium.md
  - ../sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../sources/intel-ita-tokens-and-claims.md
---

# TEE-Based Isolation

## What it is

TEE-based isolation confines computation and plaintext exposure to a protected execution environment that is intended to resist observation or tampering by the wider host system.

## Why it matters here

TEE-style isolation is the clearest common denominator across non-Apple private cloud AI systems in the current corpus.

## Google

Google Private AI Compute appears to rely on this pattern as a core trust primitive. The technical brief should be treated as the main source for exact mechanism claims. Sources: [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md).

## Meta

Meta Private Processing also appears to center protected execution, but couples it more visibly with relay-based routing privacy in the public materials. Sources: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md).

## Apple

Apple PCC should not be flattened into this category. It may share some confidential-computing instincts, but the public corpus foregrounds transparency, device-side trust enforcement, and routing privacy more than generic enclave language. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md).

## Intel

Intel provides the hardware foundation (SGX and TDX) that many TEE-based isolation designs build on, and operates Intel Trust Authority as a cloud attestation service for verifying these environments. ITA does not itself provide workload isolation — the TEE hardware does — but it provides the verification layer that confirms a workload is running inside a genuine Intel TEE. This makes ITA a complementary infrastructure component rather than a competing private compute system. Sources: [ITA Tokens and Claims](../sources/intel-ita-tokens-and-claims.md), [ITA REST API Reference](../sources/intel-ita-rest-api.md).

## Limits and caveats

- TEE-based isolation protects execution confidentiality but says less about metadata, routing, and public verifiability.
- Auditability varies dramatically even when two systems both use enclave-style language.

## Sources

- [FPF Confidential Computing and Privacy](../sources/background-2025-04-confidential-computing-and-privacy.md)
- [Confidential Computing Consortium Reference](../sources/background-2024-confidential-computing-consortium.md)
- [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md)
- [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md)
- [ITA Tokens and Claims](../sources/intel-ita-tokens-and-claims.md)
- [ITA REST API Reference](../sources/intel-ita-rest-api.md)
