---
title: 블라인드 서명(Blind Signatures)
page_type: mechanism-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
---

# 블라인드 서명(Blind Signatures)

## 정의

블라인드 서명(blind signatures)은 서비스가 요청을 인가하면서도, 이후 제시될 자격 증명의 실제 내용을 직접 알지 못하도록 하는 기법이다.

## 이 맥락에서 중요한 이유

이 메커니즘은 "이 요청이 인가되었는가?"와 "어떤 사용자가 요청했는가?"를 분리하는 데 도움을 준다. 이는 남용 방지 제어를 유지하면서도 사용자 수준의 연결 가능성(linkability)을 배제하고자 하는 프라이빗 클라우드 추론(private cloud inference) 시스템에 특히 유용하다.

## Apple

Apple은 PCC가 RSA 블라인드 서명(RSA blind signatures) 기반의 일회용 자격 증명(single-use credential)을 사용하여, 특정 사용자와 연결하지 않으면서 유효한 요청을 인가한다고 명시하고 있다. 이는 Apple 공개 자료 중 라우팅 프라이버시(routing privacy)에 관한 가장 구체적인 세부 사항 중 하나이다. 출처: [Apple PCC 소개](../sources/apple-2024-06-10-private-cloud-compute-intro.md).

## 한계 및 유의 사항

- 블라인드 서명(blind signatures)은 연결 가능성(linkability)의 일부만 해결하며, 요청 경로 전체를 보호하지는 않는다.
- 최소화된 메타데이터 및 릴레이(relay) 기반 전송 프라이버시와 결합될 때 가장 의미가 크다.

## 출처

- [Apple PCC 소개](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
