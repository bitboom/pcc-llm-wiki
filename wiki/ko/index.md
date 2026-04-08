# 색인

PCC LLM 위키의 한글 네비게이션 페이지입니다.

> [English version](../../index.md)

## 개요

- [프라이빗 AI 컴퓨트 지형도](overview/private-ai-compute-landscape.md): Apple PCC, Google Private AI Compute, Meta Private Processing의 전체 구조.
- [PCC 논제](overview/pcc-thesis.md): Apple PCC가 이 위키의 핵심 코퍼스인 이유에 대한 논제.

## 시스템

- [Apple Private Cloud Compute](systems/apple-private-cloud-compute.md): Apple의 클라우드 AI 추론 아키텍처, 신뢰 모델, 감사 가능성.
- [Google Private AI Compute](systems/google-private-ai-compute.md): Google의 프라이빗 클라우드 추론 설계.
- [Meta Private Processing](systems/meta-private-processing.md): Meta의 WhatsApp 중심 프라이빗 AI 처리 아키텍처.

## 개념

- [검증 가능한 투명성](concepts/verifiable-transparency.md): 프로덕션 소프트웨어와 릴리스 증거의 공개 검사 가능성.
- [증명](concepts/attestation.md): 디바이스가 코드 정체성과 실행 환경을 검증하는 방법.
- [무상태 추론](concepts/stateless-inference.md): 장기 요청 상태를 제한하는 설계 목표.
- [비표적성](concepts/non-targetability.md): 표적화된 요청 조작을 어렵게 만드는 통제.
- [특권 접근 없음](concepts/no-privileged-access.md): 운영자의 라이브 요청 데이터 접근 경로 제거.
- [기밀 컴퓨팅](concepts/confidential-computing.md): TEE와 기밀 실행에 대한 배경.
- [가상 연구 환경](concepts/virtual-research-environments.md): 공개 검증과 실험을 가능하게 하는 연구 도구.

## 메커니즘

- [OHTTP 릴레이](mechanisms/ohttp-relay.md): 프라이빗 요청 라우팅을 위한 릴레이 기반 소스 IP 분리.
- [블라인드 서명](mechanisms/blind-signatures.md): 사용자 신원 연결 없는 일회용 인가 자격 증명.
- [투명성 로그](mechanisms/transparency-log.md): 소프트웨어 정체성에 대한 추가 전용 릴리스 증거.
- [Secure Enclave 루트 증명](mechanisms/secure-enclave-rooted-attestation.md): PCC 노드를 위한 Apple의 하드웨어 루트 증명 체인.
- [TEE 기반 격리](mechanisms/tee-based-isolation.md): Google과 Meta가 사용하는 엔클레이브 방식 실행 경계.

## 비교

- [Apple vs Google vs Meta](comparisons/apple-vs-google-vs-meta.md): 시스템 목표와 속성의 고수준 비교.
- [감사 가능성 모델](comparisons/auditability-models.md): 외부 연구자가 실제 검사할 수 있는 범위 비교.
- [프라이버시 보장 영역](comparisons/privacy-guarantee-surfaces.md): 각 시스템이 프라이버시 보호를 주장하는 영역 비교.

## 출처 다이제스트

### Apple

- [Apple PCC 소개](sources/apple-2024-06-10-private-cloud-compute-intro.md): 도입 아키텍처 선언 및 핵심 보장.
- [Apple PCC 보안 연구](sources/apple-2024-10-24-pcc-security-research.md): 연구 프로그램, VRE, 소스 공개, 바운티 확대.
- [Apple PCC 보안 가이드](sources/apple-2024-10-24-pcc-security-guide.md): PCC 보안 세부사항의 정식 문서 허브.
- [Apple PCC VRE 문서](sources/apple-2024-10-24-pcc-vre.md): VRE 설정 및 연구 워크플로우 진입점.
- [Apple security-pcc 소스 공개](sources/apple-2024-10-24-security-pcc-repo.md): 검사 및 검증을 위해 공개된 소스 구성 요소.

### 외부 분석

- [Trail of Bits PCC 리뷰](sources/external-2024-06-14-trail-of-bits-pcc-review.md): Apple PCC에 대한 초기 비판적 리뷰.
- [HPI Apple PCC 보안 분석](sources/external-2024-security-analysis-of-apple-pcc.md): 설계에 대한 학술적 2차 분석.

### Google

- [Google Private AI Compute 블로그](sources/google-2025-11-11-private-ai-compute-blog.md): 공식 제품 및 아키텍처 프레이밍.
- [Google Private AI Compute 기술 브리프](sources/google-2025-11-11-private-ai-compute-technical-brief.md): 시스템의 기술 아키텍처 브리프.
- [NCC Group Google Private AI Compute 리뷰](sources/google-2025-11-08-ncc-private-ai-compute-review.md): 외부 감사 랜딩 페이지 및 보고서 참조.

### Meta

- [Meta Private Processing 백서](sources/meta-2025-04-29-private-processing-whitepaper.md): WhatsApp 프라이빗 처리에 대한 공식 백서.
- [Meta Private Processing 엔지니어링 포스트](sources/meta-2025-04-29-private-processing-engineering.md): 엔지니어링 아키텍처 개요.
- [NCC Group WhatsApp Private Processing 감사](sources/meta-2025-08-27-ncc-private-processing-audit.md): Meta 배포에 대한 외부 감사 참조.

### 배경

- [FPF 기밀 컴퓨팅과 프라이버시](sources/background-2025-04-confidential-computing-and-privacy.md): 기밀 컴퓨팅에 대한 배경 프레이밍.
- [Confidential Computing Consortium 참조](sources/background-2024-confidential-computing-consortium.md): 기준 정의 및 용어.

## 연구

- `wiki/ko/research/`는 향후 미해결 질문, 쿼리 결과, 구조화된 조사 노트를 위해 예약되어 있습니다.
