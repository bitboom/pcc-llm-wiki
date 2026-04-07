---
title: Apple vs Google vs Meta
page_type: comparison-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-research.md
  - ../sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
---

# Apple vs Google vs Meta

## 개괄 비교

| 시스템                    | 주요 신뢰 모델                                                        | 가장 강력한 공개 차별점                                            | 현재 주요 격차                                                  |
| ------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------- |
| Apple PCC                 | 증명(attestation)되고 공개 검사 가능한 노드 소프트웨어에 대한 기기 기반 신뢰 | 검증 가능한 투명성(verifiable transparency) 및 VRE와 소스 공개     | 모든 플랫폼 구성 요소가 공개되지는 않음                         |
| Google Private AI Compute | 보호된 실행(protected execution)과 기술 브리프 및 외부 검토            | 감사(audit) 지원이 포함된 강력한 기밀 컴퓨팅(confidential computing) 프레이밍 | 현재 코퍼스 기준 Apple보다 좁은 공개 검사 범위                  |
| Meta Private Processing   | WhatsApp AI를 위한 보호된 실행과 프라이버시 보존 라우팅                | 엔클레이브(enclave) 방식 처리와 릴레이(relay) 기반 프라이버시의 결합 | 공개 검증 체계가 Apple보다 약해 보임                            |

출처: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md), [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## 주요 비대칭성

- Apple은 공개 검증 가능성(public verifiability)에 대해 가장 명시적이다.
- Google은 기밀 컴퓨팅(confidential computing) 용어 사용과 외부 검토 측면에서 가장 강해 보인다.
- Meta는 보호된 실행(protected execution)과 라우팅 프라이버시(routing privacy)를 함께 논의하는 부분에서 가장 강해 보인다.

## 단순화하지 말아야 할 점

- Apple의 설계는 단순한 엔클레이브(enclave) 방식이 아니다.
- Google과 Meta가 둘 다 TEE 중심 프레이밍에 부합한다고 해서 동일하게 취급해서는 안 된다.
- 외부 감사(outside audit)와 공개 투명성(public transparency)은 상호 교환 가능한 속성이 아니다.

## 관련 페이지

- [감사 가능성 모델(Auditability Models)](auditability-models.md)
- [프라이버시 보장 표면(Privacy Guarantee Surfaces)](privacy-guarantee-surfaces.md)
