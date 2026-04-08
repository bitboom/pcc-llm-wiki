---
title: TEE 기반 격리(TEE-Based Isolation)
page_type: mechanism-page
status: seeded
sources:
  - ../../ko/sources/background-2025-04-confidential-computing-and-privacy.md
  - ../../ko/sources/background-2024-confidential-computing-consortium.md
  - ../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md
---

# TEE 기반 격리(TEE-Based Isolation)

## 정의

TEE 기반 격리(TEE-based isolation)는 연산과 평문(plaintext) 노출을 보호된 실행 환경(protected execution environment) 내로 한정하여, 상위 호스트 시스템에 의한 관찰이나 변조에 저항하도록 설계된 방식이다.

## 이 맥락에서 중요한 이유

TEE 방식의 격리는 현재 자료에서 비(非)Apple 프라이빗 클라우드 AI 시스템 전반에 걸쳐 가장 명확한 공통 기반이다.

## Google

Google 프라이빗 AI 컴퓨트(Private AI Compute)는 핵심 신뢰 프리미티브(trust primitive)로 이 패턴에 의존하는 것으로 보인다. 정확한 메커니즘에 대한 주장은 기술 브리프(technical brief)를 주요 출처로 삼아야 한다. 출처: [Google 프라이빗 AI 컴퓨트 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md).

## Meta

Meta 프라이빗 프로세싱(Private Processing) 역시 보호된 실행(protected execution)을 중심에 두지만, 공개 자료에서는 릴레이(relay) 기반 라우팅 프라이버시(routing privacy)와 더 가시적으로 결합하고 있다. 출처: [Meta 프라이빗 프로세싱 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta 프라이빗 프로세싱 엔지니어링](../../ko/sources/meta-2025-04-29-private-processing-engineering.md).

## Apple

Apple PCC는 이 범주로 단순화해서는 안 된다. 기밀 컴퓨팅(confidential computing)과 일부 유사한 지향을 공유할 수 있지만, 공개 자료에서는 일반적인 엔클레이브(enclave) 용어보다 투명성(transparency), 디바이스 측 신뢰 적용(device-side trust enforcement), 라우팅 프라이버시(routing privacy)를 더 전면에 내세운다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 연구](../../ko/sources/apple-2024-10-24-pcc-security-research.md).

## 한계 및 유의 사항

- TEE 기반 격리(TEE-based isolation)는 실행 기밀성(execution confidentiality)을 보호하지만, 메타데이터, 라우팅, 공개 검증 가능성(public verifiability)에 대해서는 상대적으로 제한적이다.
- 두 시스템이 모두 엔클레이브(enclave) 방식의 용어를 사용하더라도, 감사 가능성(auditability)은 크게 다를 수 있다.

## 출처

- [FPF 기밀 컴퓨팅과 프라이버시](../../ko/sources/background-2025-04-confidential-computing-and-privacy.md)
- [기밀 컴퓨팅 컨소시엄 참고자료](../../ko/sources/background-2024-confidential-computing-consortium.md)
- [Google 프라이빗 AI 컴퓨트 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md)
- [Meta 프라이빗 프로세싱 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md)
