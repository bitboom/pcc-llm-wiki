---
title: Attestation
page_type: concept-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-guide.md
  - ../sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../sources/intel-ita-tokens-and-claims.md
  - ../sources/intel-ita-rest-api.md
---

# Attestation

## Definition

Attestation is the process of proving to another party which software or execution environment is running, usually rooted in hardware trust.

## Why it matters here

Private cloud inference depends on ensuring that user data is sent only to an authorized execution environment. Without attestation, privacy claims collapse into simple operator trust.

## Apple

Apple makes attestation central to PCC. Devices are expected to send sensitive requests only to nodes whose attested measurements match authorized releases. Apple also ties this to a public transparency story, which makes attestation more meaningful to outsiders. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md), [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md).

## Google and Meta

Google and Meta both appear to rely on attestation in a broader confidential-computing sense, but the seed corpus is less explicit about end-user-visible attestation and public release matching than Apple’s materials are. Sources: [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## Intel

Intel Trust Authority (ITA) provides attestation as a standalone cloud service rather than as a component of a larger private compute system. Workloads running in Intel SGX or TDX environments generate hardware quotes that are submitted to ITA for verification. ITA returns signed attestation tokens with structured claims about the enclave or trust domain. Tenants can define custom attestation policies using OPA/Rego to tailor verification rules. This decoupled model means ITA can serve as an attestation building block for other systems. Sources: [ITA Tokens and Claims](../sources/intel-ita-tokens-and-claims.md), [ITA REST API Reference](../sources/intel-ita-rest-api.md), [ITA Custom Policies](../sources/intel-ita-custom-policies.md).

## Limits and caveats

- Attestation answers "what is running" better than "who can observe side effects around it."
- Public attestation is strongest when paired with inspectable releases and stable trust roots.

## Sources

- [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md)
- [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md)
- [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md)
- [ITA Tokens and Claims](../sources/intel-ita-tokens-and-claims.md)
- [ITA REST API Reference](../sources/intel-ita-rest-api.md)
- [ITA Custom Policies](../sources/intel-ita-custom-policies.md)
