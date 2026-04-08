# Index

Main navigation surface for the PCC LLM wiki.

## Overview

- [Private AI Compute Landscape](wiki/overview/private-ai-compute-landscape.md): Top-level map of Apple PCC, Google Private AI Compute, and Meta Private Processing.
- [PCC Thesis](wiki/overview/pcc-thesis.md): Working thesis for why Apple PCC is the anchor corpus for this wiki.

## Systems

- [Apple Private Cloud Compute](wiki/systems/apple-private-cloud-compute.md): Apple’s cloud AI inference architecture, trust model, and auditability posture.
- [Google Private AI Compute](wiki/systems/google-private-ai-compute.md): Google’s private cloud inference design as currently documented.
- [Meta Private Processing](wiki/systems/meta-private-processing.md): Meta’s WhatsApp-centered private AI processing architecture.

## Concepts

- [Verifiable Transparency](wiki/concepts/verifiable-transparency.md): Public inspectability of production software and release evidence.
- [Attestation](wiki/concepts/attestation.md): How devices verify code identity and execution environment.
- [Stateless Inference](wiki/concepts/stateless-inference.md): Design goal of limiting long-lived request state.
- [Non-Targetability](wiki/concepts/non-targetability.md): Controls that make targeted request steering harder.
- [No Privileged Access](wiki/concepts/no-privileged-access.md): Removing operator access paths to live request data.
- [Confidential Computing](wiki/concepts/confidential-computing.md): Broader background on TEEs and confidential execution.
- [Virtual Research Environments](wiki/concepts/virtual-research-environments.md): Research tooling that enables public verification and experimentation.

## Mechanisms

- [OHTTP Relay](wiki/mechanisms/ohttp-relay.md): Relay-based source IP separation for private request routing.
- [Blind Signatures](wiki/mechanisms/blind-signatures.md): Single-use authorization credentials without user identity linkage.
- [Transparency Log](wiki/mechanisms/transparency-log.md): Append-only release evidence for software identity.
- [Secure Enclave Rooted Attestation](wiki/mechanisms/secure-enclave-rooted-attestation.md): Apple’s hardware-rooted attestation chain for PCC nodes.
- [TEE-Based Isolation](wiki/mechanisms/tee-based-isolation.md): Enclave-style execution boundaries used by Google and Meta.

## Comparisons

- [Apple vs Google vs Meta](wiki/comparisons/apple-vs-google-vs-meta.md): High-level comparison of system goals and properties.
- [Auditability Models](wiki/comparisons/auditability-models.md): Comparison of what outside researchers can actually inspect.
- [Privacy Guarantee Surfaces](wiki/comparisons/privacy-guarantee-surfaces.md): Comparison of where each system claims privacy protection.

## Source Digests

### Apple

- [Apple PCC Intro](wiki/sources/apple-2024-06-10-private-cloud-compute-intro.md): Introductory architecture statement and core guarantees.
- [Apple PCC Security Research](wiki/sources/apple-2024-10-24-pcc-security-research.md): Research program, VRE, source release, and bounty expansion.
- [Apple PCC Security Guide](wiki/sources/apple-2024-10-24-pcc-security-guide.md): Canonical documentation hub for PCC security details.
- [Apple PCC VRE Docs](wiki/sources/apple-2024-10-24-pcc-vre.md): VRE setup and research workflow entry point.
- [Apple security-pcc Source Release](wiki/sources/apple-2024-10-24-security-pcc-repo.md): Published source components for inspection and validation.

### External analysis

- [Trail of Bits PCC Review](wiki/sources/external-2024-06-14-trail-of-bits-pcc-review.md): Early critical review of Apple PCC.
- [HPI Security Analysis of Apple PCC](wiki/sources/external-2024-security-analysis-of-apple-pcc.md): Academic secondary analysis of the design.

### Google

- [Google Private AI Compute Blog](wiki/sources/google-2025-11-11-private-ai-compute-blog.md): Official product and architecture framing.
- [Google Private AI Compute Technical Brief](wiki/sources/google-2025-11-11-private-ai-compute-technical-brief.md): Technical architecture brief for the system.
- [NCC Group Review of Google Private AI Compute](wiki/sources/google-2025-11-08-ncc-private-ai-compute-review.md): External audit landing page and report reference.

### Meta

- [Meta Private Processing Whitepaper](wiki/sources/meta-2025-04-29-private-processing-whitepaper.md): Official white paper for WhatsApp private processing.
- [Meta Engineering Post on Private Processing](wiki/sources/meta-2025-04-29-private-processing-engineering.md): Engineering architecture overview.
- [NCC Group Audit of WhatsApp Private Processing](wiki/sources/meta-2025-08-27-ncc-private-processing-audit.md): External audit reference for Meta’s deployment.

### Background

- [FPF Confidential Computing and Privacy](wiki/sources/background-2025-04-confidential-computing-and-privacy.md): Background framing for confidential computing.
- [Confidential Computing Consortium Reference](wiki/sources/background-2024-confidential-computing-consortium.md): Baseline definitions and terminology.

## Research

- `wiki/research/` is reserved for future open questions, query outputs, and structured investigation notes.

## 한국어 (Korean)

- [한글 위키 색인](wiki/ko/index.md): 전체 위키의 한글 번역 네비게이션 페이지.
