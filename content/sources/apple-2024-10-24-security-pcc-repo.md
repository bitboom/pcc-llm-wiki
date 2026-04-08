---
title: Apple security-pcc Source Release
page_type: source-digest
system: apple-pcc
source_type: source-code
date: 2024-10-24
trust_level: primary
status: seeded
---

# Apple security-pcc Source Release

## Metadata

- Publisher: Apple
- Date: 2024-10-24
- URL: https://github.com/apple/security-pcc
- Raw source metadata: tracked in the repository under `raw/`.
## Key claims

- Apple released selected PCC source components rather than a full source drop.
- The published projects include attestation, client-side PCC enforcement, logging controls, and VRE tooling.
- The source release materially improves inspectability, especially when paired with binaries and the VRE.

## Impact on the wiki

- Supports pages on auditability, attestation, logging controls, and research tooling.
- Helps distinguish Apple’s model from systems that rely only on audit reports or white papers.

## Open questions

- Which critical components remain binary-only or otherwise unpublished?
- How much of Apple’s privacy story depends on components outside the released subset?

## Related pages

- [Apple Private Cloud Compute](../systems/apple-private-cloud-compute.md)
- [Auditability Models](../comparisons/auditability-models.md)
- [Virtual Research Environments](../concepts/virtual-research-environments.md)
