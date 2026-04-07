---
title: Meta Private Processing
page_type: system-page
system: meta-private-processing
status: seeded
sources:
  - ../../sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../../sources/meta-2025-04-29-private-processing-engineering.md
  - ../../sources/meta-2025-08-27-ncc-private-processing-audit.md
---

# Meta 프라이빗 프로세싱(Private Processing)

## 개요

프라이빗 프로세싱(Private Processing)은 메시지 중심 지원과 같은 WhatsApp AI 기능을 위한 Meta의 프라이버시 보존 클라우드 아키텍처이다. 시드 코퍼스에서 이 시스템은 프라이버시 보존 요청 라우팅 및 외부 리뷰와 결합된 엔클레이브(enclave) 지향 시스템으로 가장 잘 이해된다. 출처: [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Private Processing 엔지니어링](../../sources/meta-2025-04-29-private-processing-engineering.md).

## 명시된 프라이버시 목표

- WhatsApp 사용자가 일반 클라우드 처리 경로를 통해 메시지 내용을 노출하지 않으면서 클라우드 AI 기능에 접근할 수 있도록 한다.
- 사용자 신원, 네트워크 출처, 그리고 보호된 처리 컨텍스트 간의 연결 가능성(linkability)을 줄인다. 출처: [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Private Processing 엔지니어링](../../sources/meta-2025-04-29-private-processing-engineering.md).

## 위협 모델

공개 프레이밍은 서버 측 노출과 요청 연결 가능성 모두에 대한 우려를 시사한다. Meta의 시스템은 라우팅 프라이버시와 보호된 실행이 별도로 취급되지 않고 함께 구성되는 부분에서 특히 흥미롭다. 출처: [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Private Processing 엔지니어링](../../sources/meta-2025-04-29-private-processing-engineering.md).

## 신뢰 컴퓨팅 기반(Trusted Computing Base)

- 신뢰 실행 환경(TEE) 또는 엔클레이브(enclave) 방식의 처리 계층
- 릴레이(relay) 및 라우팅 프라이버시 컴포넌트
- 외부 감사를 신뢰 신호로 활용하는 Meta 관리 클라우드 운영. 출처: [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md), [NCC Group WhatsApp Private Processing 감사](../../sources/meta-2025-08-27-ncc-private-processing-audit.md).

## 요청 경로

Meta의 공개 설명은 사용자 대면 네트워크 신원을 보호된 처리 계층으로부터 분리하는 데 중점을 두며, Apple의 OHTTP 기반 분리와 정신적으로 유사하지만 다른 시스템 아키텍처에 내장된 릴레이 방식의 메커니즘을 사용할 가능성이 높다. 출처: [Meta Private Processing 엔지니어링](../../sources/meta-2025-04-29-private-processing-engineering.md), [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md).

## 시행 메커니즘

- 신뢰 실행 환경(TEE) 또는 엔클레이브(enclave) 방식의 격리
- 릴레이 기반 네트워크 프라이버시
- 백서로 문서화되고 외부 리뷰로 보완된 아키텍처. 출처: [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md), [Meta Private Processing 엔지니어링](../../sources/meta-2025-04-29-private-processing-engineering.md), [NCC Group WhatsApp Private Processing 감사](../../sources/meta-2025-08-27-ncc-private-processing-audit.md).

## 감사 가능성 및 연구자 접근

Meta의 공개 태세는 백서, 엔지니어링 설명, 외부 감사를 포함하고 있어 블랙박스 클라우드 서비스보다 강하다. 그러나 시드 코퍼스에 공개 VRE나 소스 릴리스에 해당하는 것이 포함되어 있지 않아 Apple PCC보다 공개 검사 가능성은 낮은 것으로 보인다. 출처: [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md), [NCC Group WhatsApp Private Processing 감사](../../sources/meta-2025-08-27-ncc-private-processing-audit.md), [Apple PCC 보안 연구](../../sources/apple-2024-10-24-pcc-security-research.md).

## 미해결 질문

- 외부 연구자가 Meta나 NCC 중개자에 의존하지 않고 독립적으로 검증할 수 있는 것은 무엇인가?
- Meta의 라우팅 프라이버시 메커니즘이 Apple의 비표적성(non-targetability) 목표와 얼마나 유사한가?

## 출처

- [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md)
- [Meta Private Processing 엔지니어링](../../sources/meta-2025-04-29-private-processing-engineering.md)
- [NCC Group WhatsApp Private Processing 감사](../../sources/meta-2025-08-27-ncc-private-processing-audit.md)
