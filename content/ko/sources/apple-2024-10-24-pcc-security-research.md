---
title: Apple PCC 보안 연구
page_type: source-digest
system: apple-pcc
source_type: official-blog
date: 2024-10-24
trust_level: primary
status: seeded
---

# Apple PCC 보안 연구

## 메타데이터

- 발행자: Apple Security Research
- 날짜: 2024-10-24
- URL: https://security.apple.com/blog/pcc-security-research/
- 원본 출처: [source.md](../../../raw/apple/official/2024-10-24-pcc-security-research/source.md)

## 주요 주장

- Apple은 PCC 보안 가이드, 가상 연구 환경(VRE), 선별된 PCC 소스 구성 요소, 전용 바운티 범위를 공개했다.
- VRE는 연구자들이 릴리스를 검사하고, 로그 일관성을 검증하며, PCC 소프트웨어를 부팅하고, 로컬에서 시연 추론을 실행할 수 있도록 설계되었다.
- Apple은 전체 플랫폼이 아닌 선별된 구성 요소의 소스를 공개한다.
- 감사 가능성(auditability)은 일급 설계 목표이며 Apple의 PCC에 대한 공개 신뢰 논거의 일부이다.

## 위키에 대한 영향

- 아키텍처 주장을 넘어 Apple의 감사 가능성 모델을 강화한다.
- 가상 연구 환경(VRE), 투명성, 소스 공개에 관한 페이지에 기여한다.
- Apple이 표준 클라우드 서비스의 불투명성과 어떻게 다른지 설명하는 데 도움이 된다.

## 미해결 질문

- VRE와 소스 공개 이후에도 공개 연구 범위 밖에 남아 있는 것은 무엇인가?
- VRE에서 프로덕션 환경을 의미 있게 근사할 수 있는 범위는 어느 정도인가?

## 관련 페이지

- [Apple Private Cloud Compute](../../ko/systems/apple-private-cloud-compute.md)
- [가상 연구 환경(Virtual Research Environments)](../../ko/concepts/virtual-research-environments.md)
- [감사 가능성 모델(Auditability Models)](../../ko/comparisons/auditability-models.md)
