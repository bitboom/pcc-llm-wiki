---
title: Meta Private Processing
page_type: system-page
system: meta-private-processing
status: seeded
sources:
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../sources/meta-2025-04-29-private-processing-engineering.md
  - ../sources/meta-2025-08-27-ncc-private-processing-audit.md
---

# Meta Private Processing

## What it is

Private Processing is Meta’s privacy-preserving cloud architecture for WhatsApp AI features such as message-centric assistance. In the seed corpus it is best understood as an enclave-oriented system paired with privacy-preserving request routing and external review. Sources: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md).

## Stated privacy goal

- Let WhatsApp users access cloud AI features without exposing message content through ordinary cloud handling paths.
- Reduce linkability between user identity, network origin, and protected processing context. Sources: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md).

## Threat model

The public framing suggests concern with both server-side exposure and request linkability. Meta’s system appears especially interesting where routing privacy and protected execution are composed together rather than treated separately. Sources: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md).

## Trusted computing base

- TEE or enclave-style processing layer
- Relay and routing privacy components
- Meta-controlled cloud operations with external audit as a confidence signal. Sources: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [NCC Group Audit of WhatsApp Private Processing](../sources/meta-2025-08-27-ncc-private-processing-audit.md).

## Request path

Meta’s public story centers on separating user-facing network identity from the protected processing layer, likely using relay-style mechanisms similar in spirit to Apple’s OHTTP-based separation but embedded in a different system architecture. Sources: [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md), [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## Enforcement mechanisms

- TEE or enclave-style isolation
- Relay-based network privacy
- Architecture documented in a whitepaper and supplemented by external review. Sources: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md), [NCC Group Audit of WhatsApp Private Processing](../sources/meta-2025-08-27-ncc-private-processing-audit.md).

## Auditability and researcher access

Meta’s public posture is stronger than a black-box cloud service because it includes a whitepaper, engineering explanation, and outside audit. It still appears less publicly inspectable than Apple PCC because the seed corpus does not include a public VRE or source release equivalent. Sources: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [NCC Group Audit of WhatsApp Private Processing](../sources/meta-2025-08-27-ncc-private-processing-audit.md), [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md).

## Open questions

- What can outside researchers independently verify without relying on Meta or NCC intermediaries?
- How closely do Meta’s routing privacy mechanisms match Apple’s non-targetability goals?

## Sources

- [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md)
- [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md)
- [NCC Group Audit of WhatsApp Private Processing](../sources/meta-2025-08-27-ncc-private-processing-audit.md)
