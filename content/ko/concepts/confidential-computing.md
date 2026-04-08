---
title: 기밀 컴퓨팅(Confidential Computing)
page_type: concept-page
status: seeded
sources:
  - ../../sources/background-2025-04-confidential-computing-and-privacy.md
  - ../../sources/background-2024-confidential-computing-consortium.md
  - ../../sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../../sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../../sources/apple-2024-06-10-private-cloud-compute-intro.md
---

# 기밀 컴퓨팅(Confidential Computing)

## 정의

기밀 컴퓨팅(confidential computing)은 하드웨어 기반의 보호된 환경으로 평문(plaintext) 노출을 제한함으로써 연산 중인 데이터를 보호하는 광범위한 패턴이다. 신뢰 실행 환경(TEE, Trusted Execution Environment)이 가장 일반적인 구현 방식이다. 출처: [FPF 기밀 컴퓨팅과 프라이버시](../../sources/background-2025-04-confidential-computing-and-privacy.md), [Confidential Computing Consortium 참조](../../sources/background-2024-confidential-computing-consortium.md).

## 이 주제가 중요한 이유

Google과 Meta는 기밀 컴퓨팅 관점에서 가장 자연스럽게 이해된다. Apple PCC는 동일한 문제 영역과 겹치지만, 그 위에 비정상적으로 강력한 투명성 및 공개 검증 계층을 추가한다.

## Apple

Apple PCC는 기밀 컴퓨팅에 인접하지만, 일반적인 TEE 이야기로 축소해서는 안 된다. Apple의 공개적 강조점은 디바이스 기반 신뢰(device-rooted trust), 공개 릴리스 투명성, 표적 요청 보호(targeted-request protections)에 있으며, 단순한 엔클레이브(enclave) 기밀성에만 국한되지 않는다. 출처: [Apple PCC 소개](../../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 연구](../../sources/apple-2024-10-24-pcc-security-research.md).

## Google 및 Meta

Google과 Meta는 공개 코퍼스가 보호된 실행(protected execution)과 외부 감사(external audit)를 중심으로 하고, Apple 방식의 공개 릴리스 검증 가능성에 대한 강조가 적기 때문에 기밀 컴퓨팅 프레임워크에 더 직접적으로 부합한다. 출처: [Google Private AI Compute 기술 브리프](../../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md).

## 한계와 주의사항

- 기밀 컴퓨팅은 실행 중 데이터 노출을 줄이지만, 메타데이터, 라우팅, 배포 투명성 문제를 자동으로 해결하지는 않는다.
- TEE 중심의 프레임은 시스템이 외부 연구자에게 증거를 노출하는 방식의 주요 차이를 가릴 수 있다.

## 출처

- [FPF 기밀 컴퓨팅과 프라이버시](../../sources/background-2025-04-confidential-computing-and-privacy.md)
- [Confidential Computing Consortium 참조](../../sources/background-2024-confidential-computing-consortium.md)
- [Google Private AI Compute 기술 브리프](../../sources/google-2025-11-11-private-ai-compute-technical-brief.md)
- [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md)
