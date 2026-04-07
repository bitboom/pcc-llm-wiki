---
title: Blind Signatures
page_type: mechanism-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
---

# Blind Signatures

## What it is

Blind signatures allow a service to authorize a request without directly learning the underlying credential contents that will later be presented.

## Why it matters here

This mechanism helps separate "is this request authorized?" from "which user is making it?" That is especially valuable for private cloud inference systems that want anti-abuse controls without user-level linkability.

## Apple

Apple explicitly states that PCC uses a single-use credential based on RSA blind signatures to authorize valid requests without tying them to a specific user. This is one of the most concrete public routing-privacy details in the Apple corpus. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md).

## Limits and caveats

- Blind signatures solve one part of linkability, not the whole request path.
- They are most meaningful when combined with minimized metadata and relay-based transport privacy.

## Sources

- [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
