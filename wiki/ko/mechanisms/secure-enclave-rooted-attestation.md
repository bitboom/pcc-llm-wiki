---
title: 시큐어 엔클레이브 기반 증명(Secure Enclave Rooted Attestation)
page_type: mechanism-page
status: seeded
sources:
  - ../sources/apple-2024-06-10-private-cloud-compute-intro.md
  - ../sources/apple-2024-10-24-pcc-security-guide.md
  - ../sources/apple-2024-10-24-security-pcc-repo.md
---

# 시큐어 엔클레이브 기반 증명(Secure Enclave Rooted Attestation)

## 정의

이 위키에서 시큐어 엔클레이브 기반 증명(Secure Enclave rooted attestation)은 Apple이 하드웨어에 뿌리를 둔 신원(hardware-rooted identity)과 인증서 발급(certificate issuance)을 사용하여 PCC 노드의 신원 및 인가된 상태를 증명하는 방식을 가리킨다.

## 이 맥락에서 중요한 이유

Apple의 클라우드 신뢰(cloud trust) 모델은 디바이스가 "PCC"라는 서비스 이름을 맹목적으로 신뢰하는 것이 아니라, 특정 노드의 신원과 릴리스 상태에 대한 신뢰를 적용할 수 있을 때 가장 강력하다.

## Apple

Apple은 PCC 노드에 대해 시큐어 엔클레이브(Secure Enclave) 신원에 기반한 인증서 발급과, 요청 전송 전 디바이스 측 검증(device-side validation)을 기술하고 있다. 공개된 소스 코드에서도 CloudAttestation과 클라이언트 측 적용(client-side enforcement)이 검사 가능한 구성 요소로 강조되어 있다. 출처: [Apple PCC 소개](../sources/apple-2024-06-10-private-cloud-compute-intro.md), [Apple PCC 보안 가이드](../sources/apple-2024-10-24-pcc-security-guide.md), [Apple security-pcc 소스 공개](../sources/apple-2024-10-24-security-pcc-repo.md).

## 한계 및 유의 사항

- 하드웨어 기반 증명(hardware-rooted attestation)은 좁지만 중요한 사실들을 증명한다. 그러나 주변의 모든 네트워크 및 운영 문제를 해결하지는 않는다.
- 공개 자료에서는 일부 증명(attestation) 구현 세부 사항이 실행 가능한 증거가 아닌 문서 수준에 머물러 있다.

## 출처

- [Apple PCC 소개](../sources/apple-2024-06-10-private-cloud-compute-intro.md)
- [Apple PCC 보안 가이드](../sources/apple-2024-10-24-pcc-security-guide.md)
- [Apple security-pcc 소스 공개](../sources/apple-2024-10-24-security-pcc-repo.md)
