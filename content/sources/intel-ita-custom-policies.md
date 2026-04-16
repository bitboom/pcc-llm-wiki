---
title: Intel Trust Authority Custom Policies
page_type: source-digest
system: intel-trust-authority
source_type: official-doc
trust_level: primary
status: seeded
---

# Intel Trust Authority Custom Policies

## Metadata

- Publisher: Intel
- Date: undated
- URL: https://docs.trustauthority.intel.com/main/articles/howto-author-custom-policy.html
- Raw source metadata: tracked in the repository under `raw/`.
## Key claims

- Intel Trust Authority supports custom attestation policies authored using OPA (Open Policy Agent) and Rego policy language.
- Custom policies allow tenants to define their own verification rules beyond the default attestation checks.
- This enables tailored trust decisions based on specific enclave measurements, TCB levels, or other claim properties.

## Impact on the wiki

- Relevant to understanding ITA's policy flexibility compared to other attestation systems.
- Adds a policy-as-code dimension to the attestation concept.

## Open questions

- What is the default policy when no custom policy is defined?
- How are policies versioned and audited?
- Can policies be shared or composed across tenants?

## Related pages

- [Intel Trust Authority](../systems/intel-trust-authority.md)
- [ITA Tokens and Claims](intel-ita-tokens-and-claims.md)
- [Attestation](../concepts/attestation.md)
