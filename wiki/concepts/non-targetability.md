---
title: Non-Targetability
page_type: concept-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/meta-2025-04-29-private-processing-engineering.md
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
---

# Non-Targetability

## Definition

Non-targetability means making it difficult for an attacker to steer, single out, or correlate specific users’ requests with specific nodes or privileged vantage points.

## Why it matters here

Even if a system is generally secure, targeted routing or correlation can make selective attacks much more practical. This matters especially for high-value users or sensitive requests.

## Apple

Apple makes non-targetability explicit in PCC. The public description includes minimized request metadata, third-party OHTTP relay usage, blind-signature-based authorization, and subset-based node decryption to reduce steerability and linkability. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md).

## Google and Meta

Meta’s public materials appear closer to Apple on routing privacy than Google’s currently visible corpus does. Meta seems to emphasize anonymous or relay-based request handling, while Google’s public seed corpus is less explicit here. Sources: [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md), [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md).

## Limits and caveats

- Relay-based privacy and node subset selection reduce targeting risk but do not make targeting impossible in every layer.
- Operational telemetry outside the trust boundary remains a likely pressure point.

## Sources

- [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md)
- [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md)
