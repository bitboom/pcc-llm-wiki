---
title: Privacy Guarantee Surfaces
page_type: comparison-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../sources/meta-2025-04-29-private-processing-engineering.md
---

# 프라이버시 보장 표면(Privacy Guarantee Surfaces)

## 이 페이지의 비교 대상

각 시스템은 프라이버시를 약속하지만, 그 약속이 유지되어야 하는 표면(surface)은 서로 다르다.

## Apple PCC

Apple은 프라이버시 보장을 여러 계층에 걸쳐 분산시킨다:

- 요청 메타데이터 최소화(request metadata minimization)
- 릴레이(relay) 기반 소스 IP 분리
- 일회용 익명 인가(single-use anonymous authorization)
- 부분 집합 기반 노드 복호화(subset-based node decryption)
- 증명된 노드 아이덴티티(attested node identity)
- 투명성(transparency) 기반 릴리스 검증

출처: [Apple PCC Intro](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC Security Guide](../sources/apple-2024-10-24-pcc-security-guide.md).

## Google Private AI Compute

Google의 보장 표면은 보호된 실행 환경(protected execution environment)과 그 주변의 증명(attestation) 및 감사(audit) 체계에 더 집중되어 있는 것으로 보인다. 현재 코퍼스에서는 Apple 방식의 라우팅 프라이버시(routing privacy)나 투명성 로그(transparency log) 기반 릴리스 아이덴티티에 대한 공개적 강조가 적다. 출처: [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [NCC Group Review of Google Private AI Compute](../sources/google-2025-11-08-ncc-private-ai-compute-review.md).

## Meta Private Processing

Meta의 보장 표면은 보호된 실행(protected execution)과 라우팅 프라이버시(routing privacy) 사이에 분산되어 있는 것으로 보인다. 이로 인해 네트워크 비연결성(network unlinkability) 측면에서는 Apple과 더 유사하면서도, 엔클레이브(enclave) 중심 실행 측면에서는 Google에 가까워 보인다. 출처: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Engineering on Private Processing](../sources/meta-2025-04-29-private-processing-engineering.md).

## 잠정적 결론

Apple의 설계는 더 많은 명시적 계층에 걸쳐 신뢰를 분산시키며, 이러한 계층의 더 많은 부분을 공개한다. Google은 보호된 컴퓨팅 경계(protected compute boundary)에 신뢰를 더 집중시킨다. Meta는 보호된 컴퓨팅과 보다 가시적인 릴레이 기반 프라이버시 메커니즘을 결합하는 중간 위치를 차지한다.

## 미해결 질문

- 이러한 표면 중 명목상의 설계 가정이 아닌 실제 공격 상황에서 가장 강력한 것은 무엇인가?
- 각 시스템에서 외부 연구자가 직접 검사할 수 있는 계층은 어느 것인가?
