---
title: 특권 접근 불가(No Privileged Access)
page_type: concept-page
status: seeded
sources:
  - ../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../../ko/sources/apple-2024-10-24-pcc-security-guide.md
  - ../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md
  - ../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md
---

# 특권 접근 불가(No Privileged Access)

## 정의

특권 접근 불가(no privileged access)란 일반적인 운영 권한 경로가 실시간 사용자 요청 데이터를 노출하거나 보호된 처리 경계(protected processing boundary) 내에서 임의 코드 실행을 허용하지 않도록 플랫폼을 설계하는 것을 의미한다.

## 이 주제가 중요한 이유

운영자 권한이 숨겨진 우회 경로로 남아 있을 때 클라우드 프라이버시 주장은 가장 취약해진다. 따라서 특권 접근을 제거하거나 제한하는 것은 프라이빗 추론 시스템에서 가장 중대한 신뢰 결정 중 하나이다.

## Apple

Apple은 이를 PCC의 명시적 속성으로 삼는다. 공개된 내용에 따르면, 일반적인 특권 운영 접근이 사용자 데이터에 대한 접근을 제공하거나 증명된 소프트웨어 경계(attested software boundary)의 우회를 허용해서는 안 된다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 가이드](../../ko/sources/apple-2024-10-24-pcc-security-guide.md).

## Google 및 Meta

Google과 Meta도 유사한 운영자 최소화(operator minimization)를 목표로 할 가능성이 높지만, 시드 코퍼스는 현재 Apple 자료만큼 명시적인 "특권 런타임 접근 불가" 프레이밍을 보여주지 않는다. 출처: [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta Private Processing 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md).

## 한계와 주의사항

- 특권 런타임 접근을 제한하더라도 안전한 배포, 로깅, 라우팅, 하드웨어 신뢰에 대한 의존성은 제거되지 않는다.
- 문서상의 더 강한 표현이 그 자체로 더 강한 운영 적용을 증명하는 것은 아니다.

## 출처

- [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC 보안 가이드](../../ko/sources/apple-2024-10-24-pcc-security-guide.md)
- [Google Private AI Compute 기술 브리프](../../ko/sources/google-2025-11-11-private-ai-compute-technical-brief.md)
- [Meta Private Processing 백서](../../ko/sources/meta-2025-04-29-private-processing-whitepaper.md)
