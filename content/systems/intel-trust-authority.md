---
title: Intel Trust Authority
page_type: system-page
system: intel-trust-authority
status: seeded
sources:
  - ../sources/intel-ita-portal.md
  - ../sources/intel-ita-go-client.md
  - ../sources/intel-ita-cli.md
  - ../sources/intel-ita-rest-api.md
  - ../sources/intel-ita-tokens-and-claims.md
  - ../sources/intel-ita-custom-policies.md
  - ../sources/intel-ita-api-keys-and-user-roles.md
---

# Intel Trust Authority

## What it is

Intel Trust Authority (ITA) is Intel's cloud-based attestation service for verifying the trustworthiness of TEE (Trusted Execution Environment) workloads running on Intel SGX and TDX hardware. Unlike Apple PCC, Google Private AI Compute, or Meta Private Processing — which are end-to-end private inference systems — ITA is an attestation infrastructure service: it verifies that a given execution environment is genuine and meets policy requirements, and issues signed attestation tokens as evidence. Sources: [ITA REST API Reference](../sources/intel-ita-rest-api.md), [ITA Tokens and Claims](../sources/intel-ita-tokens-and-claims.md).

## Stated privacy goal

- Provide independent, cloud-hosted verification that TEE workloads are running in a genuine Intel SGX or TDX environment.
- Issue attestation tokens with structured claims that relying parties can use to make trust decisions.
- Enable tenants to define custom attestation policies tailored to their security requirements. Sources: [ITA Tokens and Claims](../sources/intel-ita-tokens-and-claims.md), [ITA Custom Policies](../sources/intel-ita-custom-policies.md).

## Threat model

Intel Trust Authority is designed to address scenarios where a workload operator or cloud provider cannot be fully trusted. By offloading attestation verification to an independent Intel-operated service, the system reduces reliance on the infrastructure provider for trust decisions. The threat model centers on verifying TEE integrity rather than protecting request-level privacy or preventing operator access to data at rest.

## Trusted computing base

- Intel SGX and TDX hardware as the root of trust for quote generation.
- Intel-operated cloud attestation service for quote verification and token issuance.
- Client-side integration via the Go client library or CLI for quote generation and submission. Sources: [ITA Go Client](../sources/intel-ita-go-client.md), [ITA CLI](../sources/intel-ita-cli.md).

## Request path

A workload running in an SGX enclave or TDX trust domain generates a hardware quote. The quote is submitted to the Intel Trust Authority service (via the REST API, Go client, or CLI) for verification. ITA validates the quote against Intel's root of trust and any applicable custom policies, then returns a signed attestation token containing claims about the verified environment. Relying parties use this token to make trust decisions. Sources: [ITA REST API Reference](../sources/intel-ita-rest-api.md), [ITA Tokens and Claims](../sources/intel-ita-tokens-and-claims.md).

## Enforcement mechanisms

- Hardware-rooted quote generation in SGX enclaves and TDX trust domains.
- Cloud-based quote verification against Intel's root of trust.
- Signed attestation tokens with structured claims (enclave measurements, TCB status, security versions).
- Custom attestation policies using OPA/Rego for tenant-specific verification rules.
- API key authentication and role-based access control for service administration. Sources: [ITA Tokens and Claims](../sources/intel-ita-tokens-and-claims.md), [ITA Custom Policies](../sources/intel-ita-custom-policies.md), [ITA API Keys and User Roles](../sources/intel-ita-api-keys-and-user-roles.md).

## Auditability and researcher access

- The Go client library and CLI are published as open-source on GitHub.
- REST API documentation is publicly available.
- The attestation service itself is operated by Intel; its internal implementation is not publicly auditable.
- Custom policy definitions are tenant-managed and can be reviewed by the tenant. Sources: [ITA Go Client](../sources/intel-ita-go-client.md), [ITA CLI](../sources/intel-ita-cli.md), [ITA REST API Reference](../sources/intel-ita-rest-api.md).

## Limits and caveats

- ITA is an attestation service, not a complete private compute system. It verifies TEE integrity but does not itself enforce data privacy, routing privacy, or stateless computation.
- The attestation service is centrally operated by Intel, creating a dependency on Intel as a trusted third party for verification.
- Public auditability is limited to client-side tooling; the server-side verification logic is opaque.
- ITA is specific to Intel hardware (SGX, TDX) and does not cover other TEE implementations.

## Open questions

- How does ITA's attestation token model compare in depth to Apple's device-side attestation verification?
- What SLAs and availability guarantees does Intel provide for the attestation service?
- Can ITA be used as a building block within a broader private compute system (e.g., integrated with a system like Google Private AI Compute or Meta Private Processing)?
- What happens if Intel's attestation service is compromised or unavailable?

## Sources

- [ITA Portal](../sources/intel-ita-portal.md)
- [ITA Go Client](../sources/intel-ita-go-client.md)
- [ITA CLI](../sources/intel-ita-cli.md)
- [ITA REST API Reference](../sources/intel-ita-rest-api.md)
- [ITA Tokens and Claims](../sources/intel-ita-tokens-and-claims.md)
- [ITA Custom Policies](../sources/intel-ita-custom-policies.md)
- [ITA API Keys and User Roles](../sources/intel-ita-api-keys-and-user-roles.md)
