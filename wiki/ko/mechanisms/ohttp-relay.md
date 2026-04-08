---
title: OHTTP 릴레이(OHTTP Relay)
page_type: mechanism-page
status: seeded
sources:
  - ../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../../ko/sources/meta-2025-04-29-private-processing-engineering.md
  - ../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md
---

# OHTTP 릴레이(OHTTP Relay)

## 정의

OHTTP(Oblivious HTTP)는 릴레이(relay) 기반 패턴으로, 클라이언트의 네트워크 신원(network identity)과 최종적으로 요청을 처리하는 서비스를 분리한다.

## 이 맥락에서 중요한 이유

보호된 실행(protected execution)만으로는 요청의 출발지 IP나 네트워크 연결 정보를 숨길 수 없다. 릴레이(relay) 기반 분리는 컴퓨팅 경계 외부의 상관 분석(correlation) 위험을 줄이기 때문에 중요하다.

## Apple

Apple은 PCC에서 OHTTP 릴레이(OHTTP relay) 사용을 비표적성(non-targetability) 전략의 일환으로 명시적으로 기술하고 있다. 이 릴레이(relay)는 출발지 IP를 PCC 인프라 자체로부터 격리하기 위한 것이다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md).

## Meta

Meta의 공개 자료는 WhatsApp 프라이빗 프로세싱(private processing) 맥락에서 유사한 릴레이(relay) 기반 프라이버시 목표를 강조하는 것으로 보인다. 다만, 정확한 라우팅 구성은 Apple 용어로부터 유추하기보다 백서(whitepaper)와 엔지니어링 게시물(engineering post)을 기반으로 기술해야 한다. 출처: [Meta 프라이빗 프로세싱 엔지니어링](../../ko/sources/meta-2025-04-29-private-processing-engineering.md), [Meta 프라이빗 프로세싱 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md).

## 한계 및 유의 사항

- 릴레이(relay) 프라이버시는 출발지 비연결성(source unlinkability)에 도움이 되지만, 그 자체로 기밀 실행(confidential execution)을 증명하지는 않는다.
- 다른 메타데이터 채널이 여전히 노출되어 있다면 상관 분석(correlation) 위험은 지속될 수 있다.

## 출처

- [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Meta 프라이빗 프로세싱 엔지니어링](../../ko/sources/meta-2025-04-29-private-processing-engineering.md)
- [Meta 프라이빗 프로세싱 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md)
