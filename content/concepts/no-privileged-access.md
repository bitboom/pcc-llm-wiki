---
title: No Privileged Access
page_type: concept-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-guide.md
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../sources/google-2025-11-11-private-ai-compute-technical-brief.md
---

# No Privileged Access

## Definition

No privileged access means the platform is designed so that normal operational privilege paths do not expose live user request data or enable arbitrary code execution inside the protected processing boundary.

## Why it matters here

Cloud privacy claims are weakest when operator privilege remains a hidden override. Removing or constraining privileged access is therefore one of the most consequential trust decisions in private inference systems.

## Apple

Apple makes this a named PCC property. The public story is that ordinary privileged operational access should not provide access to user data or allow bypass of the attested software boundary. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md).

## Google and Meta

Google and Meta likely aim for similar operator minimization, but the seed corpus does not currently expose as explicit a "no privileged runtime access" framing as Apple’s materials do. Sources: [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## Limits and caveats

- Restricting privileged runtime access does not remove dependence on secure deployment, logging, routing, or hardware trust.
- Stronger wording in documentation does not by itself prove stronger operational enforcement.

## Sources

- [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md)
- [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md)
- [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md)
