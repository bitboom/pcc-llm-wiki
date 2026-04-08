---
title: PCC 논제
page_type: overview-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-research.md
  - ../sources/apple-2024-10-24-security-pcc-repo.md
  - ../sources/external-2024-06-14-trail-of-bits-pcc-review.md
---

# PCC 논제

이 위키는 Apple PCC를 핵심 코퍼스로 사용한다. Apple이 클라우드 AI 프라이버시 주장을 하나의 연구 프로그램으로 전환했기 때문이다.

## 핵심 논제

Apple PCC의 가장 강력한 차별점은 클라우드에서 프라이버시를 약속한다는 점이 아니다. Google과 Meta도 현재 유사한 고수준 약속을 내세우고 있다. 차별점은 Apple이 이러한 약속에 더 명시적인 공개 검증(public verification) 체계를 결합한다는 점이다:

- 공개 소프트웨어 측정값(public software measurements)
- 공개 바이너리 검사 약속(public binary inspection commitments)
- 가상 연구 환경(Virtual Research Environment, VRE)
- 선별적 소스 코드 공개(selected source release)
- 증명(attestation)에 연동된 디바이스 측 집행(device-side enforcement)

출처: [Apple PCC 소개](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 연구](../sources/apple-2024-10-24-pcc-security-research.md), [Apple security-pcc 소스 공개](../sources/apple-2024-10-24-security-pcc-repo.md).

## LLM 위키에 중요한 이유

LLM 위키는 코퍼스가 다음 조건을 갖출 때 가장 효과적으로 누적된다:

- 안정적인 1차 문서
- 명명된 메커니즘(named mechanisms)
- 교차 검증이 가능한 공개 산출물
- 외부 검토자의 실질적인 이견

Apple PCC는 이 네 가지를 모두 갖추고 있다. 출처: [Apple PCC 보안 가이드](../sources/apple-2024-10-24-pcc-security-guide.md), [Trail of Bits PCC 리뷰](../sources/external-2024-06-14-trail-of-bits-pcc-review.md), [HPI Apple PCC 보안 분석](../sources/external-2024-security-analysis-of-apple-pcc.md).

## 논제의 한계

이것은 Apple의 아키텍처가 모든 차원에서 자동으로 가장 강력하다는 주장이 아니다. 현재 Apple이 지속적인 연구 위키를 위한 최적의 원재료를 제공한다는 주장이다. 시스템의 더 많은 부분이 공개적으로 논의 및 검사 가능하기 때문이다.

## 미해결 질문

- VRE와 소스 공개가 있더라도 검증이 어려운 Apple의 보장 사항은 무엇인가?
- Google이나 Meta가 새로운 도구나 공개를 통해 감사 가능성(auditability) 격차를 결국 좁힐 수 있을까?
