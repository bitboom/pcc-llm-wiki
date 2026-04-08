---
title: Apple Private Cloud Compute
page_type: system-page
system: apple-pcc
status: seeded
sources:
  - ../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../../ko/sources/apple-2024-10-24-pcc-security-research.md
  - ../../ko/sources/apple-2024-10-24-pcc-security-guide.md
  - ../../ko/sources/apple-2024-10-24-security-pcc-repo.md
  - ../../ko/sources/external-2024-06-14-trail-of-bits-pcc-review.md
---

# Apple 프라이빗 클라우드 컴퓨트(Private Cloud Compute)

## 개요

프라이빗 클라우드 컴퓨트(Private Cloud Compute)는 기기에서 로컬로 처리할 수 없는 Apple Intelligence 요청을 처리하기 위한 Apple의 클라우드 실행 환경이다. Apple이 명시한 목표는 클라우드 추론을 일반적인 신뢰 서버 운영으로 취급하는 대신, 기기 보안 모델을 클라우드까지 확장하는 것이다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 가이드](../../ko/sources/apple-2024-10-24-pcc-security-guide.md).

## 명시된 프라이버시 목표

- 개인 요청 데이터를 Apple 운영자 및 일반 클라우드 관리 경로가 접근할 수 없도록 유지한다.
- 기기-노드 간 신뢰가 증명(attestation)된 소프트웨어 신원에 의존하도록 한다.
- 프로덕션 환경에서 실행되는 소프트웨어를 의미 있는 방식으로 공개적으로 검사할 수 있도록 한다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 연구](../../ko/sources/apple-2024-10-24-pcc-security-research.md).

## 위협 모델

Apple은 PCC를 광범위한 운영 위협과 특정 사용자의 요청을 조종하거나 관찰하려는 보다 표적화된 시도 모두를 대상으로 설계했다. 공개 프레이밍에서 주목할 점은 권한 있는 내부 접근과 표적 요청 라우팅을 일반적 침해 시나리오뿐 아니라 1급 위험으로 취급한다는 것이다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 가이드](../../ko/sources/apple-2024-10-24-pcc-security-guide.md).

## 신뢰 컴퓨팅 기반(Trusted Computing Base)

- 클라우드에 배치된 Apple 자체 설계 실리콘
- 기기 신뢰 결정에 연결된 하드웨어 기반 증명(attestation)
- 공개 릴리스 증거와 일치해야 하는 측정값을 가진 PCC 노드 소프트웨어
- `privatecloudcomputed` 및 CloudAttestation 관련 컴포넌트 등 Apple 소프트웨어를 통한 클라이언트 측 시행. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple security-pcc 소스 릴리스](../../ko/sources/apple-2024-10-24-security-pcc-repo.md).

## 요청 경로

Apple은 식별 메타데이터를 최소화하고, OHTTP 릴레이(relay)를 통해 라우팅하며, 일회용 인가 자격 증명을 사용하고, 복호화를 준비 완료 상태의 PCC 노드 일부로 제한하는 요청 경로를 설명한다. 이는 일반적인 로드 밸런싱 클라우드 서비스보다 표적 조종을 실질적으로 어렵게 만들도록 설계되었다. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md).

## 시행 메커니즘

- Apple 하드웨어 신원 및 릴리스 측정값에 기반한 증명(attestation)
- 설계 목표로서의 상태 비저장(stateless) 연산
- 실시간 요청 데이터에 대한 권한 있는 런타임 접근 불가
- 대상 분산(target diffusion) 및 제한된 라우팅 메타데이터
- 투명성 로그(transparency log) 기반의 릴리스 신원
- 공개 바이너리, VRE 지원 및 연구용 선별적 소스 공개. 출처: [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 연구](../../ko/sources/apple-2024-10-24-pcc-security-research.md), [Apple security-pcc 소스 릴리스](../../ko/sources/apple-2024-10-24-security-pcc-repo.md).

## 감사 가능성 및 연구자 접근

Apple은 이 위키의 시드 코퍼스에서 가장 강력한 공개 감사 가능성 태세를 갖추고 있다. 공개 릴리스 증거, 다운로드 가능한 소프트웨어 이미지, VRE 도구, 선별된 소스 코드, 그리고 바운티 범위의 조합은 클라우드 서비스로서는 이례적인 연구 표면을 만들어낸다. 출처: [Apple PCC 보안 연구](../../ko/sources/apple-2024-10-24-pcc-security-research.md), [Apple PCC VRE 문서](../../ko/sources/apple-2024-10-24-pcc-vre.md), [Apple security-pcc 소스 릴리스](../../ko/sources/apple-2024-10-24-security-pcc-repo.md).

## 한계 및 주의사항

- Apple은 전체 플랫폼 소스를 공개하지 않는다.
- 일부 보증은 여전히 배포 무결성과 운영 현실에 의존한다.
- 외부 리뷰어들은 PCC를 중대한 진전으로 평가했지만, 클라우드 AI 신뢰에 대한 완성된 답으로 보지는 않았다. 출처: [Trail of Bits PCC 리뷰](../../ko/sources/external-2024-06-14-trail-of-bits-pcc-review.md), [HPI Apple PCC 보안 분석](../../ko/sources/external-2024-security-analysis-of-apple-pcc.md).

## 미해결 질문

- 독립적으로 검증하기 가장 어려운 신뢰 속성은 무엇인가?
- VRE가 실제 프로덕션 환경을 얼마나 대체할 수 있는가?

## 출처

- [Apple PCC 소개](../../ko/sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC 보안 연구](../../ko/sources/apple-2024-10-24-pcc-security-research.md)
- [Apple PCC 보안 가이드](../../ko/sources/apple-2024-10-24-pcc-security-guide.md)
- [Apple security-pcc 소스 릴리스](../../ko/sources/apple-2024-10-24-security-pcc-repo.md)
- [Trail of Bits PCC 리뷰](../../ko/sources/external-2024-06-14-trail-of-bits-pcc-review.md)
