---
title: 검증 가능한 투명성(Verifiable Transparency)
page_type: concept-page
status: seeded
sources:
  - ../../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../../sources/apple-2024-10-24-pcc-security-research.md
  - ../../sources/google-2025-11-08-ncc-private-ai-compute-review.md
  - ../../sources/meta-2025-08-27-ncc-private-processing-audit.md
---

# 검증 가능한 투명성(Verifiable Transparency)

## 정의

이 위키에서 검증 가능한 투명성(verifiable transparency)이란, 시스템의 프로덕션 소프트웨어 아이덴티티가 외부 당사자가 독립적으로 검사하고 실제 실행 중인 것과 연관지을 수 있는 방식으로 노출되는 것을 의미한다.

## 이 주제가 중요한 이유

사용자가 공개되지 않은 서버 스택을 신뢰해야 한다면, 클라우드 추론에 대한 프라이버시 주장은 취약해진다. 투명성은 벤더가 실행 중이라고 말하는 것과 독립적으로 확인할 수 있는 것 사이의 격차를 줄이기 때문에 중요하다.

## Apple

Apple은 검증 가능한 투명성을 PCC의 명시적 속성으로 삼는다. 공개된 내용에는 소프트웨어 측정값(software measurements), 공개 소프트웨어 이미지, 인가된 릴리스에 대한 디바이스 측 적용, 그리고 VRE를 통한 연구 도구가 포함된다. 출처: [Apple PCC 소개](../../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 연구](../../sources/apple-2024-10-24-pcc-security-research.md), [Apple PCC 보안 가이드](../../sources/apple-2024-10-24-pcc-security-guide.md).

## Google 및 Meta

Google과 Meta 모두 외부 검토(external review)의 증거가 있지만, 시드 코퍼스는 현재 Apple 방식의 공개 릴리스 투명성보다는 감사 기반 신뢰(audit-backed trust)에 더 가깝다. 이들의 시스템이 여전히 안전할 수 있지만, 공개 검증 표면(public verification surface)은 더 좁은 것으로 보인다. 출처: [NCC Group의 Google Private AI Compute 검토](../../sources/google-2025-11-08-ncc-private-ai-compute-review.md), [NCC Group의 WhatsApp Private Processing 감사](../../sources/meta-2025-08-27-ncc-private-processing-audit.md).

## 한계와 주의사항

- 투명성은 완전한 보안과 동일하지 않다.
- 공개 바이너리와 소스 일부만으로는 운영상의 불확실성이 여전히 남는다.
- 제3자 감사는 유용하지만, 공개 검사 가능성(public inspectability)을 완전히 대체하지는 못한다.

## 출처

- [Apple PCC 소개](../../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC 보안 연구](../../sources/apple-2024-10-24-pcc-security-research.md)
- [NCC Group의 Google Private AI Compute 검토](../../sources/google-2025-11-08-ncc-private-ai-compute-review.md)
- [NCC Group의 WhatsApp Private Processing 감사](../../sources/meta-2025-08-27-ncc-private-processing-audit.md)
