---
title: 증명(Attestation)
page_type: concept-page
status: seeded
sources:
  - ../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../../ko/sources/apple-2024-10-24-pcc-security-guide.md
  - ../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md
---

# 증명(Attestation)

## 정의

증명(attestation)은 어떤 소프트웨어 또는 실행 환경이 동작 중인지를 상대방에게 입증하는 과정으로, 일반적으로 하드웨어 신뢰 루트(hardware root of trust)에 기반한다.

## 이 주제가 중요한 이유

프라이빗 클라우드 추론(private cloud inference)은 사용자 데이터가 인가된 실행 환경에만 전송된다는 보장에 의존한다. 증명이 없으면 프라이버시 주장은 단순한 운영자 신뢰로 귀결된다.

## Apple

Apple은 증명을 PCC의 핵심으로 삼는다. 디바이스는 인가된 릴리스와 일치하는 증명된 측정값(attested measurements)을 가진 노드에만 민감한 요청을 전송하도록 설계되어 있다. Apple은 이를 공개 투명성(public transparency) 체계와 결합하여, 외부자에게도 증명의 의미를 강화한다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 가이드](../../ko/sources/apple-2024-10-24-pcc-security-guide.md), [Apple security-pcc 소스 릴리스](../../ko/sources/apple-2024-10-24-security-pcc-repo.md).

## Google 및 Meta

Google과 Meta는 모두 보다 넓은 기밀 컴퓨팅(confidential computing) 맥락에서 증명에 의존하는 것으로 보이지만, 시드 코퍼스(seed corpus)에서는 최종 사용자에게 가시적인 증명이나 공개 릴리스 매칭에 대해 Apple 자료만큼 명시적이지 않다. 출처: [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Private Processing 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md).

## 한계와 주의사항

- 증명은 "무엇이 실행 중인가"에 대해서는 잘 답하지만, "그 주변의 부수 효과를 누가 관찰할 수 있는가"에 대해서는 그렇지 않다.
- 공개 증명은 검사 가능한 릴리스 및 안정적인 신뢰 루트와 결합될 때 가장 강력하다.

## 출처

- [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC 보안 가이드](../../ko/sources/apple-2024-10-24-pcc-security-guide.md)
- [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md)
- [Meta Private Processing 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md)
