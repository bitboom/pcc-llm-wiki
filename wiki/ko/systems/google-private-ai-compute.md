---
title: Google Private AI Compute
page_type: system-page
system: google-private-ai-compute
status: seeded
sources:
  - ../../ko/sources/google-2025-11-11-private-ai-compute-blog.md
  - ../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../../ko/sources/google-2025-11-08-ncc-private-ai-compute-review.md
---

# Google 프라이빗 AI 컴퓨트(Private AI Compute)

## 개요

프라이빗 AI 컴퓨트(Private AI Compute)는 Google의 클라우드 지원 프라이빗 추론 아키텍처이다. 현재 공개 코퍼스에서 이 시스템은 데이터 노출을 제한하면서 Google이 더 강력한 AI를 제공할 수 있도록 설계된 기밀 컴퓨팅(confidential computing) 방식의 시스템으로 가장 잘 이해된다. 출처: [Google Private AI Compute 블로그](../../ko/sources/google-2025-11-11-private-ai-compute-blog.md), [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md).

## 명시된 프라이버시 목표

- 사용자 데이터를 일반적인 운영자 가시 서버 입력으로 전환하지 않으면서 유용한 클라우드 AI를 제공한다.
- 보호된 실행 및 외부 리뷰된 제어에 의존하여 요청 데이터를 관찰할 수 있는 주체를 축소한다. 출처: [Google Private AI Compute 블로그](../../ko/sources/google-2025-11-11-private-ai-compute-blog.md), [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md).

## 위협 모델

공개 프레이밍은 추론 과정에서의 운영자 및 인프라 노출에 대한 강한 우려를 시사하지만, 시드 코퍼스에서 현재 노출된 메커니즘 수준의 세부 사항은 Apple의 PCC 자료보다 적다. 따라서 이 페이지는 누락된 세부 사항을 보간하기보다 보수적으로 유지하고 미해결 질문을 표시해야 한다. 출처: [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md).

## 신뢰 컴퓨팅 기반(Trusted Computing Base)

- 보호된 실행 환경 또는 신뢰 실행 환경(TEE) 방식의 격리
- 하드웨어 및 플랫폼 증명(attestation) 가정
- 외부 감사를 신뢰 신호로 활용하는 Google 관리 클라우드 인프라. 출처: [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md), [NCC Group Google Private AI Compute 리뷰](../../ko/sources/google-2025-11-08-ncc-private-ai-compute-review.md).

## 요청 경로

공개 코퍼스는 사용자 요청이 보호된 클라우드 추론 경로로 진입한다는 상위 수준의 주장을 뒷받침하지만, 라우팅 또는 신원 최소화 세부 사항은 기술 브리프에서 직접 추출될 때까지 과도하게 명시하지 않아야 한다. 출처: [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md).

## 시행 메커니즘

- 신뢰 실행 환경(TEE) 또는 엔클레이브(enclave) 방식의 실행 기밀성
- 증명(attestation) 기반의 보호 환경 신뢰
- NCC Group을 통한 외부 리뷰. 출처: [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md), [NCC Group Google Private AI Compute 리뷰](../../ko/sources/google-2025-11-08-ncc-private-ai-compute-review.md).

## 감사 가능성 및 연구자 접근

Google의 현재 공개 태세는 기술 문서와 외부 리뷰를 포함하고 있어 일반적인 클라우드 불투명성보다 실질적으로 강하다. 그러나 시드 코퍼스에서 Apple 방식의 공개 투명성 로그(transparency log), VRE, 또는 소스 릴리스가 보이지 않아 Apple의 공개 연구 프로그램보다는 좁은 것으로 보인다. 출처: [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md), [NCC Group Google Private AI Compute 리뷰](../../ko/sources/google-2025-11-08-ncc-private-ai-compute-review.md), [Apple PCC 보안 연구](../../ko/sources/apple-2024-10-24-pcc-security-research.md).

## 미해결 질문

- 최종 사용자가 공개적으로 증명(attestation)할 수 있는 것과 감사자만 리뷰할 수 있는 것의 범위는 어떻게 되는가?
- 보호된 환경 외부에서 어느 정도의 요청 메타데이터가 가시적으로 남는가?

## 출처

- [Google Private AI Compute 블로그](../../ko/sources/google-2025-11-11-private-ai-compute-blog.md)
- [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md)
- [NCC Group Google Private AI Compute 리뷰](../../ko/sources/google-2025-11-08-ncc-private-ai-compute-review.md)
