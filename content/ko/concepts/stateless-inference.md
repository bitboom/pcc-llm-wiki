---
title: 무상태 추론(Stateless Inference)
page_type: concept-page
status: seeded
sources:
  - ../../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../../sources/apple-2024-10-24-pcc-security-guide.md
  - ../../sources/google-2025-11-11-private-ai-compute-technical-brief.md
---

# 무상태 추론(Stateless Inference)

## 정의

무상태 추론(stateless inference)이란 요청 내용과 파생된 민감 상태(sensitive state)가 현재 연산을 완료하는 데 필요한 범위를 넘어 보존되지 않도록 시스템을 설계하는 것을 의미한다.

## 이 주제가 중요한 이유

시스템이 요청 상태를 보존하지 않으면, 이후의 침해, 운영자 접근, 교차 요청 상관(cross-request correlation)이 모두 덜 위험해진다.

## Apple

Apple은 무상태 연산(stateless computation)을 PCC의 명시적 설계 요건 중 하나로 삼는다. Apple 코퍼스에서 이는 부수적인 구현 세부 사항이 아닌 핵심 설계 원칙이다. 출처: [Apple PCC 소개](../../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 가이드](../../sources/apple-2024-10-24-pcc-security-guide.md).

## Google 및 Meta

현재 시드 코퍼스는 Google이나 Meta에 대해 무상태성(statelessness)에 대한 동일한 수준의 명시적 브랜딩을 보여주지 않는다. 이들도 보존 상태를 최소화할 수 있지만, 더 강력한 직접적 증거 없이는 그렇다고 가정해서는 안 된다. 출처: [Google Private AI Compute 기술 브리프](../../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md).

## 한계와 주의사항

- 무상태성은 지속성 위험(persistence risk)을 줄이지만, 활성 처리 중의 노출을 제거하지는 않는다.
- 페이로드 상태가 단기간만 유지되더라도 인프라 메타데이터는 여전히 정보를 유출할 수 있다.

## 출처

- [Apple PCC 소개](../../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC 보안 가이드](../../sources/apple-2024-10-24-pcc-security-guide.md)
- [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md)
