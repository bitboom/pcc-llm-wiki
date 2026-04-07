---
title: Apple Private Cloud Compute
page_type: system-page
system: apple-pcc
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-research.md
  - ../sources/apple-2024-10-24-pcc-security-guide.md
  - ../sources/apple-2024-10-24-security-pcc-repo.md
  - ../sources/external-2024-06-14-trail-of-bits-pcc-review.md
---

# Apple Private Cloud Compute

## What it is

Private Cloud Compute is Apple’s cloud execution environment for Apple Intelligence requests that exceed what the device can handle locally. Apple’s stated goal is to extend the device security model into the cloud rather than treat cloud inference as a conventional trusted server operation. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md).

## Stated privacy goal

- Keep personal request data inaccessible to Apple operators and ordinary cloud management paths.
- Make device-to-node trust depend on attested software identity.
- Make the software running in production publicly inspectable in a meaningful way. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md).

## Threat model

Apple frames PCC around both broad operational threats and more targeted attempts to steer or observe specific users’ requests. The public framing is notable because it treats privileged internal access and targeted request routing as first-class risks, not just generic compromise scenarios. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md).

## Trusted computing base

- Custom Apple silicon in the cloud
- Hardware-rooted attestation tied to device trust decisions
- PCC node software whose measurements are expected to match public release evidence
- Client-side enforcement on the user device via Apple software such as `privatecloudcomputed` and CloudAttestation-related components. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md).

## Request path

Apple describes a request path that minimizes identifying metadata, routes through an OHTTP relay, uses single-use authorization credentials, and limits decryption to a subset of likely-ready PCC nodes. This is designed to make targeted steering materially harder than in a normal load-balanced cloud service. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md).

## Enforcement mechanisms

- Attestation rooted in Apple hardware identity and release measurements
- Stateless computation as a design goal
- No privileged runtime access to live request data
- Target diffusion and limited routing metadata
- Transparency-log-backed release identity
- Public binaries, VRE support, and selected source release for research. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md), [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md).

## Auditability and researcher access

Apple has the strongest public auditability posture in this wiki’s seed corpus. The combination of public release evidence, downloadable software images, VRE tooling, selected source code, and bounty scope creates a research surface that is unusual for a cloud service. Sources: [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md), [Apple PCC VRE Docs](../sources/apple-2024-10-24-pcc-vre.md), [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md).

## Limits and caveats

- Apple does not publish the full platform source.
- Some guarantees still depend on deployment integrity and operational reality.
- External reviewers have treated PCC as a major step forward, but not as a finished answer to cloud AI trust. Sources: [Trail of Bits PCC Review](../sources/external-2024-06-14-trail-of-bits-pcc-review.md), [HPI Security Analysis of Apple PCC](../sources/external-2024-security-analysis-of-apple-pcc.md).

## Open questions

- Which trust properties remain weakest to validate independently?
- How much of the real production environment can the VRE stand in for?

## Sources

- [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md)
- [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md)
- [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md)
- [Trail of Bits PCC Review](../sources/external-2024-06-14-trail-of-bits-pcc-review.md)
