---
title: Apple security-pcc 소스 공개
page_type: source-digest
system: apple-pcc
source_type: source-code
date: 2024-10-24
trust_level: primary
status: seeded
---

# Apple security-pcc 소스 공개

## 메타데이터

- 발행자: Apple
- 날짜: 2024-10-24
- URL: https://github.com/apple/security-pcc
- 원본 출처: [source.md](../../../raw/apple/source-code/2024-10-24-security-pcc/source.md)

## 주요 주장

- Apple은 전체 소스가 아닌 선별된 PCC 소스 구성 요소를 공개했다.
- 공개된 프로젝트에는 증명(attestation), 클라이언트 측 PCC 적용, 로깅 제어, VRE 도구가 포함된다.
- 소스 공개는 바이너리 및 VRE와 결합될 때 검사 가능성(inspectability)을 실질적으로 향상시킨다.

## 위키에 대한 영향

- 감사 가능성(auditability), 증명(attestation), 로깅 제어, 연구 도구에 관한 페이지를 뒷받침한다.
- 감사 보고서나 백서에만 의존하는 시스템과 Apple 모델을 구별하는 데 도움이 된다.

## 미해결 질문

- 바이너리 전용이거나 미공개 상태로 남아 있는 핵심 구성 요소는 무엇인가?
- Apple의 프라이버시 논거 중 공개된 부분집합 외부의 구성 요소에 의존하는 부분은 어느 정도인가?

## 관련 페이지

- [Apple Private Cloud Compute](../../ko/systems/apple-private-cloud-compute.md)
- [감사 가능성 모델(Auditability Models)](../../ko/comparisons/auditability-models.md)
- [가상 연구 환경(Virtual Research Environments)](../../ko/concepts/virtual-research-environments.md)
