---
title: Auditability Models
page_type: comparison-page
status: seeded
sources:
  - ../sources/apple-2024-10-24-pcc-security-research.md
  - ../sources/apple-2024-10-24-pcc-vre.md
  - ../sources/apple-2024-10-24-security-pcc-repo.md
  - ../sources/google-2025-11-08-ncc-private-ai-compute-review.md
  - ../sources/meta-2025-08-27-ncc-private-processing-audit.md
---

# 감사 가능성 모델(Auditability Models)

## 핵심 구분

시드 코퍼스에서 벤더 간 가장 중요한 차이는 외부 검토의 존재 여부가 아니다. 공개 검증(public verification)이 직접적인지 아니면 매개된(mediated) 것인지가 핵심이다.

## Apple

Apple의 모델은 비교적 직접적이다:

- 공개 측정값(public measurements)과 릴리스 아이덴티티(release identity)
- 공개된 소프트웨어 이미지
- VRE 도구
- 일부 소스 코드 공개
- 공개 연구에 대한 바운티(bounty) 인센티브

출처: [Apple PCC Security Research](../sources/apple-2024-10-24-pcc-security-research.md), [Apple PCC VRE Docs](../sources/apple-2024-10-24-pcc-vre.md), [Apple security-pcc Source Release](../sources/apple-2024-10-24-security-pcc-repo.md).

## Google

현재 수집된 자료 기준으로, Google의 공개 입장은 기술 문서와 제3자 검토를 통해 더 매개된(mediated) 형태로 나타난다. 이는 의미 있는 접근이지만, Apple의 도구 중심 모델에 비해 외부 연구자에게 직접적인 검증 수단을 덜 제공한다. 출처: [Google Private AI Compute Technical Brief](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [NCC Group Review of Google Private AI Compute](../sources/google-2025-11-08-ncc-private-ai-compute-review.md).

## Meta

Meta의 모델도 백서(whitepaper), 엔지니어링 설명, 외부 감사(external audit)에 의존하는 더 매개된 형태로 보인다. 이는 일반적인 불투명성보다는 강력하지만, Apple의 공개 재현 가능성(public reproducibility) 입장과는 여전히 구별된다. 출처: [Meta Private Processing Whitepaper](../sources/meta-2025-04-29-private-processing-whitepaper.md), [NCC Group Audit of WhatsApp Private Processing](../sources/meta-2025-08-27-ncc-private-processing-audit.md).

## 실무적 시사점

현재 코퍼스는 다음과 같은 실질적 구분을 뒷받침한다:

- Apple: 검사 가능한(inspectable) 공개 검증 프로그램
- Google: 기술 브리프와 감사자 매개 신뢰(auditor-mediated trust)
- Meta: 백서와 감사자 매개 신뢰(auditor-mediated trust)

## 미해결 질문

- Google이나 Meta가 이 격차를 좁히는 공개 연구 도구를 제공하게 될 것인가?
- 전체 감사 보고서에는 공개 랜딩 페이지 대비 얼마나 많은 세부 정보가 포함되어 있는가?
