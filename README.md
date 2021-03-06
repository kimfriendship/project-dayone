# 다이어리 앱 DAY ONE 클론 코딩

# Version 0.1

<br>

# 주제

기존의 저널링 어플리케이션 Day One을 React.js를 통하여 데스크탑 버전으로 새롭게 재설계

<br>

# 구성원

- PM: 김태진
- T1: 김우정
- T2: 이하은
- T3: 주한슬

<br>

# 프로젝트 핵심 목표

- Node Express Server를 구축하여 REST API 구현
- React를 이용한 컴포넌트 설계
- Router를 이용하여 SPA(Single-Page Application) 구현
- Context API + useReducer Hooks를 이용한 상태 관리
- CSS Module을 통하여 컴포넌트 스타일 클래스 이름의 중첩 현상 방지

<br>

# MVP(Minimum Viable Product, 최소 기능 구현)

## 기능별 목표

- 로그인 페이지
- 타임라인 페이지
- 캘린더 페이지
- 지도 페이지
- 일기 작성 및 수정 페이지
- 일기 보기 페이지
- 마이 페이지(Option)

<br>

## 기능별 1차 목표

- 로그인 페이지

  - 로그인 / 로그아웃 상태 관리
  - 아이디/ 패스워드 일치 확인

- 타임라인 페이지

  - 일기별 제목, 작성일, 썸네일이 포함된 목록 나열
  - 뷰 설정에 따라 일기 목록을 리스트/카드 형식으로 전환
  - 일기 클릭시 해당 일기 페이지로 이동

- 캘린더 페이지

  - 달력에 일기 작성 여부 표시
  - 일기 목록에 해당 날짜의 일기 나열
  - 해당 날짜의 일기 작성 페이지로 바로가기

- 지도 페이지

  - 지도 API를 활용하여 현재 위치 표시
  - 각 일기의 위치를 북마크로 표시
  - 일기 목록에 해당 위치의 일기 나열

- 일기 작성 및 수정 페이지

  - 일기 내용 저장
  - 일기 작성 날짜 설정
  - 일기 작성 위치 설정

- 일기 보기 페이지

  - 작성된 일기 뷰어

<br>

## 기능별 2차 목표(Option)

- 타임라인 페이지

  - 미디어 목록 형식의 뷰 설정 추가

- 캘린더 페이지

  - 일기의 개수에 따라 색상을 다르게 표시

- 지도 페이지

  - 일기의 개수에 따라 색상을 다르게 표시
  - 줌 인/아웃에 따른 북마크 표시

- 일기 작성 및 수정 페이지

  - 사진 및 영상 파일 첨부

- 일기 보기 페이지

  - 작성된 일기의 수정 버튼 기능 추가

    (일기 작성 및 수정 페이지로 이동)

- 마이 페이지

  - 사용자 정보 표시
  - 작성한 일기의 개수 표시
  - 북마크 일기 표시

<br>

# 사용 기술

- Slack
- Figma
- HTML
- JavaScript
- React
- SCSS
- Node Express

<br>

# 코딩 컨벤션

[코딩 컨벤션](/convention.md)
