---
title: Apple PCC Intro
page_type: source-digest
system: apple-pcc
source_type: official-blog
date: 2024-06-10
trust_level: primary
status: seeded
---

# Apple PCC Intro

## Metadata

- Publisher: Apple Security Research
- Date: 2024-06-10
- URL: https://security.apple.com/blog/private-cloud-compute/
- Raw source metadata: tracked in the repository under `raw/`.

## Key claims

- Apple defines PCC around four properties: stateless computation, no privileged runtime access, non-targetability, and verifiable transparency.
- User devices should only send sensitive requests to PCC nodes that can attest to authorized software.
- Apple presents routing privacy measures including request minimization, blind-signature-style authorization, and OHTTP relay usage.
- Apple frames verifiable transparency as a public research requirement rather than a purely internal control.

## Impact on the wiki

- Anchors the main Apple system page.
- Seeds concept pages for verifiable transparency, stateless inference, non-targetability, and no privileged access.
- Provides the main baseline for comparison against Google and Meta.

## Open questions

- Which properties are strongest at the documentation level versus the implementation level?
- How much of the claimed behavior can researchers verify independently without additional tooling?

## Related pages

- [Apple Private Cloud Compute](../systems/apple-private-cloud-compute.md)
- [Verifiable Transparency](../concepts/verifiable-transparency.md)
- [Stateless Inference](../concepts/stateless-inference.md)
- [Non-Targetability](../concepts/non-targetability.md)
