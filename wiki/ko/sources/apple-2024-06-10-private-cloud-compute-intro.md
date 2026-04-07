---
title: Apple PCC 소개
page_type: source-digest
system: apple-pcc
source_type: official-blog
date: 2024-06-10
trust_level: primary
raw_source: ../../../raw/apple/official/2024-06-10-private-cloud-compute-intro/source.md
status: seeded
---

# Apple PCC 소개

## 메타데이터

- 발행자: Apple Security Research
- 날짜: 2024-06-10
- URL: https://security.apple.com/blog/private-cloud-compute/
- 원본 출처: [source.md](../../../raw/apple/official/2024-06-10-private-cloud-compute-intro/source.md)

## 주요 주장

- Apple은 PCC를 네 가지 속성으로 정의한다: 무상태 연산(stateless computation), 특권 런타임 접근 불가(no privileged runtime access), 비표적성(non-targetability), 검증 가능한 투명성(verifiable transparency).
- 사용자 기기는 인가된 소프트웨어를 증명(attest)할 수 있는 PCC 노드에만 민감한 요청을 전송해야 한다.
- Apple은 요청 최소화, 블라인드 서명(blind signature) 방식의 인가, OHTTP 릴레이 사용 등 라우팅 프라이버시 조치를 제시한다.
- Apple은 검증 가능한 투명성(verifiable transparency)을 순수한 내부 통제가 아닌 공개 연구 요건으로 제시한다.

## 위키에 대한 영향

- Apple 시스템 메인 페이지의 기반이 된다.
- 검증 가능한 투명성(verifiable transparency), 무상태 추론(stateless inference), 비표적성(non-targetability), 특권 접근 불가(no privileged access)에 대한 개념 페이지의 기초를 제공한다.
- Google 및 Meta와의 비교를 위한 주요 기준선을 제공한다.

## 미해결 질문

- 문서 수준에서 가장 강력한 속성과 구현 수준에서 가장 강력한 속성은 각각 무엇인가?
- 추가 도구 없이 연구자가 독립적으로 검증할 수 있는 주장된 동작은 어느 정도인가?

## 관련 페이지

- [Apple Private Cloud Compute](../../ko/systems/apple-private-cloud-compute.md)
- [검증 가능한 투명성(Verifiable Transparency)](../../ko/concepts/verifiable-transparency.md)
- [무상태 추론(Stateless Inference)](../../ko/concepts/stateless-inference.md)
- [비표적성(Non-Targetability)](../../ko/concepts/non-targetability.md)
