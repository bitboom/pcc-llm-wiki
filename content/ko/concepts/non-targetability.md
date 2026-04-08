---
title: 비표적성(Non-Targetability)
page_type: concept-page
status: seeded
sources:
  - ../../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../../sources/meta-2025-04-29-private-processing-engineering.md
  - ../../sources/meta-2025-04-29-private-processing-whitepaper.md
---

# 비표적성(Non-Targetability)

## 정의

비표적성(non-targetability)이란 공격자가 특정 사용자의 요청을 특정 노드나 특권 관측 지점으로 유도하거나, 특정하거나, 상관시키기 어렵게 만드는 것을 의미한다.

## 이 주제가 중요한 이유

시스템이 전반적으로 안전하더라도, 표적 라우팅이나 상관 분석은 선택적 공격을 훨씬 더 실현 가능하게 만든다. 이는 특히 고가치 사용자나 민감한 요청에 중요하다.

## Apple

Apple은 PCC에서 비표적성을 명시적으로 제시한다. 공개된 설명에는 최소화된 요청 메타데이터, 제3자 OHTTP 릴레이 사용, 블라인드 서명(blind signature) 기반 인가, 부분집합 기반 노드 복호화를 통한 유도 가능성(steerability) 및 연결 가능성(linkability) 감소가 포함된다. 출처: [Apple PCC 소개](../../sources/apple-2024-06-10-private-cloud-compute-intro.md).

## Google 및 Meta

Meta의 공개 자료는 라우팅 프라이버시(routing privacy) 측면에서 현재 공개된 Google 코퍼스보다 Apple에 더 가까운 것으로 보인다. Meta는 익명 또는 릴레이 기반 요청 처리를 강조하는 반면, Google의 공개 시드 코퍼스는 이 부분에서 덜 명시적이다. 출처: [Meta Private Processing 엔지니어링](../../sources/meta-2025-04-29-private-processing-engineering.md), [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md), [Google Private AI Compute 기술 브리프](../../sources/google-2025-11-11-private-ai-compute-technical-brief.md).

## 한계와 주의사항

- 릴레이 기반 프라이버시와 노드 부분집합 선택은 표적 위험을 줄이지만, 모든 계층에서 표적을 불가능하게 만드는 것은 아니다.
- 신뢰 경계 외부의 운영 텔레메트리(operational telemetry)는 여전히 잠재적인 압력 지점(pressure point)이다.

## 출처

- [Apple PCC 소개](../../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Meta Private Processing 엔지니어링](../../sources/meta-2025-04-29-private-processing-engineering.md)
- [Meta Private Processing 백서](../../sources/meta-2025-04-29-private-processing-whitepaper.md)
