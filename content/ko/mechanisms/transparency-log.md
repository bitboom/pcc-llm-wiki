---
title: 투명성 로그(Transparency Log)
page_type: mechanism-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-research.md
  - ../sources/apple-2024-10-24-pcc-security-guide.md
---

# 투명성 로그(Transparency Log)

## 정의

투명성 로그(transparency log)는 릴리스 증거를 가시화하고, 탐지 없이 변조하기 어렵게 만드는 데 사용되는 추가 전용(append-only) 공개 기록이다.

## 이 맥락에서 중요한 이유

프라이빗 클라우드 추론(private cloud inference)에서 투명성 로그(transparency log)는 플랫폼이 증명(attest)하는 소프트웨어 신원이 실제로 대중이 검사할 수 있는 대상과 일치하는지 여부를 확인하는 데 도움이 된다.

## Apple

Apple은 투명성 로그(transparency log)를 PCC의 공개 신뢰 모델(public trust model)의 핵심으로 삼고 있다. 디바이스는 공개 기록에 반영된 인가된 릴리스의 측정값(measurements)과 일치하는 노드에만 민감한 데이터를 전송하는 것으로 기술된다. 출처: [Apple PCC 소개](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 연구](../sources/apple-2024-10-24-pcc-security-research.md), [Apple PCC 보안 가이드](../sources/apple-2024-10-24-pcc-security-guide.md).

## Google 및 Meta

현재 자료에서는 Google이나 Meta에 대해 Apple과 같은 공개 투명성 로그(transparency log) 메커니즘이 확인되지 않는다. 이들의 공개 신뢰 모델은 보호된 실행(protected execution)과 감사(audit)에 더 의존하는 것으로 보인다. 출처: [Google 프라이빗 AI 컴퓨트 기술 브리프](../sources/google-2025-11-11-private-ai-compute-technical-brief.md), [Meta 프라이빗 프로세싱 백서](../sources/meta-2025-04-29-private-processing-whitepaper.md).

## 한계 및 유의 사항

- 투명성 로그(transparency log)가 모든 운영 세부 사항이 공개됨을 보장하지는 않는다.
- 로그의 가치는 어떤 산출물(artifacts)을 다루는지, 그리고 연구자들이 이를 어떻게 검증할 수 있는지에 달려 있다.

## 출처

- [Apple PCC 소개](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC 보안 연구](../sources/apple-2024-10-24-pcc-security-research.md)
- [Apple PCC 보안 가이드](../sources/apple-2024-10-24-pcc-security-guide.md)
