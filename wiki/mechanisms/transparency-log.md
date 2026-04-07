---
title: Transparency Log
page_type: mechanism-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-research.md
  - ../sources/apple-2024-10-24-pcc-security-guide.md
---

# Transparency Log

## What it is

A transparency log is an append-only public record used to make release evidence visible and hard to alter without detection.

## Why it matters here

For private cloud inference, a transparency log helps answer whether the software identity attested by the platform maps to something the public can actually inspect.

## Apple

Apple makes the transparency log central to PCC’s public trust model. Devices are described as sending sensitive data only to nodes whose measurements match authorized releases reflected in the public record. Sources: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md), [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md).

## Google and Meta

The seed corpus does not yet show an Apple-style public transparency-log mechanism for Google or Meta. Their public trust models appear to lean more on protected execution plus audit. Sources: [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## Limits and caveats

- A transparency log does not guarantee that every operational detail is public.
- The value of the log depends on what artifacts it covers and how researchers can validate them.

## Sources

- [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md)
- [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md)
