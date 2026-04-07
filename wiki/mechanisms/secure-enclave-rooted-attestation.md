---
title: Secure Enclave Rooted Attestation
page_type: mechanism-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-guide.md
  - ../sources/apple-2024-10-24-security-pcc-repo.md
---

# Secure Enclave Rooted Attestation

## What it is

In this wiki, Secure Enclave rooted attestation refers to Apple’s use of hardware-rooted identity and certificate issuance to prove the identity and authorized state of PCC nodes.

## Why it matters here

Apple’s cloud trust story is strongest where the device can enforce trust in a specific node identity and release state, rather than blindly trust the service name "PCC."

## Apple

Apple describes certificate issuance rooted in Secure Enclave identity for PCC nodes and device-side validation before requests are sent. The released source code also highlights CloudAttestation and client-side enforcement as inspectable components. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md), [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md).

## Limits and caveats

- Hardware-rooted attestation proves a narrow but important set of facts; it does not solve every surrounding network or operations problem.
- The public corpus still leaves some attestation implementation details in documentation rather than runnable proof.

## Sources

- [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md)
- [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md)
