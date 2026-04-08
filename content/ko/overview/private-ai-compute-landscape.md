---
title: 프라이빗 AI 컴퓨트 환경
page_type: overview-page
status: seeded
sources:
  - ../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md
  - ../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../../ko/sources/background-2025-04-confidential-computing-and-privacy.md
---

# 프라이빗 AI 컴퓨트 환경

현재 세 가지 주요 공개 설계가 프라이버시 보존 클라우드 AI 추론(privacy-preserving cloud AI inference)의 실질적인 환경을 정의하고 있다:

- Apple Private Cloud Compute
- Google Private AI Compute
- Meta Private Processing

이들은 유사한 문제를 해결하고 있다: 대규모 모델을 디바이스 외부에서 실행하면서도 클라우드 추론이 일반적인 서버 측 데이터 노출이 되지 않도록 하는 것이다. 시스템 간 차이는 표면적인 목표보다는 주요 신뢰 앵커(trust anchor)로 무엇을 선택하느냐에 있다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Google 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md).

## 핵심 축

### 1. 무엇을 신뢰하는가?

- Apple은 증명된 소프트웨어 신원(attested software identity), 디바이스 측 집행(device-side enforcement), 공개 릴리스 투명성(public release transparency)을 강조한다.
- Google은 신뢰 실행 환경(TEE) 또는 엔클레이브(enclave) 방식의 기밀성과 외부 검토에 더 의존하는 것으로 보인다.
- Meta는 엔클레이브 방식 처리와 WhatsApp 사용 사례를 위한 프라이버시 보존 라우팅(privacy-preserving routing)을 결합하는 것으로 보인다.

### 2. 무엇을 외부에서 검증할 수 있는가?

- Apple은 보안 가이드(Security Guide), VRE, 공개 측정값, 선별적 소스 공개를 통해 가장 강력한 공개 연구 표면(public research surface)을 제공한다.
- Google과 Meta는 일반적인 클라우드 AI 시스템보다 외부 감사 신호가 많지만, 공개 연구 표면은 더 좁은 것으로 보인다.

### 3. 프라이버시는 어디에서 보호되는가?

- Apple은 요청 생성부터 증명된 실행(attested execution), 투명성 기반 릴리스 신원(transparency-backed release identity)까지 종단간 제어(end-to-end controls)를 강조한다.
- Google과 Meta는 보호된 환경 내부의 실행 기밀성(execution confidentiality)이 더 많은 부담을 지는 기밀 컴퓨팅(confidential computing) 패턴에 더 가까운 것으로 보인다. 출처: [FPF 기밀 컴퓨팅과 프라이버시](../../ko/sources/background-2025-04-confidential-computing-and-privacy.md), [Google 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md).

## 위키가 Apple 우선인 이유

Apple은 지속적인 연구 위키를 위한 가장 풍부한 공개 코퍼스를 보유하고 있다. Apple의 설계는 백서 수준의 주장 모음뿐 아니라 도구, 릴리스 증거, 소스 공개를 갖춘 검증 가능성 프로그램(verifiability program)으로 문서화되어 있기 때문이다. 이는 시간에 걸친 누적 종합(compounding synthesis)을 위한 더 강력한 기반 코퍼스가 된다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 연구](../../ko/sources/apple-2024-10-24-pcc-security-research.md), [Trail of Bits PCC 리뷰](../../ko/sources/external-2024-06-14-trail-of-bits-pcc-review.md).

## 미해결 질문

- Google이나 Meta가 결국 Apple의 VRE에 필적하는 연구 도구를 공개할 것인가?
- 세 시스템 중 어떤 속성이 직접적인 공개 증거에 기반하고, 어떤 속성이 감사 매개 신뢰(audit-mediated trust)에 기반하는가?

## 관련 페이지

- [PCC 논제](../../ko/overview/pcc-thesis.md)
- [Apple vs Google vs Meta](../../ko/comparisons/apple-vs-google-vs-meta.md)
- [감사 가능성 모델](../../ko/comparisons/auditability-models.md)
