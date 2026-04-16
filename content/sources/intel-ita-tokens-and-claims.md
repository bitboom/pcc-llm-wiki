---
title: Intel Trust Authority Attestation Tokens and Claims
page_type: source-digest
system: intel-trust-authority
source_type: official-doc
trust_level: primary
status: seeded
---

# Intel Trust Authority Attestation Tokens and Claims

## Metadata

- Publisher: Intel
- Date: undated
- URL: https://docs.trustauthority.intel.com/main/articles/concept-attestation-tokens.html?tabs=sgx%2Csgx-token
- Raw source metadata: tracked in the repository under `raw/`.
## Key claims

- Intel Trust Authority issues attestation tokens containing structured claims about the verified environment.
- Tokens include claims specific to the TEE type: SGX enclaves and TDX trust domains have distinct claim sets.
- Claims cover properties such as enclave measurements, TCB status, and security version numbers.

## Impact on the wiki

- Directly relevant to the attestation concept page — ITA provides a concrete token-based attestation model.
- Important for comparing attestation evidence formats across vendors.

## Open questions

- How do ITA attestation token claims compare to Apple's attestation evidence structure?
- Are tokens signed by Intel or by a tenant-specific key?
- What token lifetime and refresh policies apply?

## Related pages

- [Intel Trust Authority](../systems/intel-trust-authority.md)
- [Attestation](../concepts/attestation.md)
- [ITA Custom Policies](intel-ita-custom-policies.md)
