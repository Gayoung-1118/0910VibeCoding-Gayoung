@AGENTS.md

# CLAUDE.md

이가영 자기소개 페이지 프로젝트. 이 파일은 Claude가 작업할 때 따라야 할 범위와 규칙을 정리한다.

## 프로젝트 개요

- 한 페이지짜리 자기소개 사이트 (페이지 라우팅 없음)
- 섹션 구성 (위에서 아래 순서):
  1. 소개 — 이름, 소속, 한 줄 소개, 링크
  2. 진행한 프로젝트
  3. 관심사 · 취미
  4. 다룰 줄 아는 것
  5. 이번 스터디에서 — 만들어보고 싶은 것, 끝났을 때 이루고 싶은 것
- 요청받지 않은 섹션은 늘리지 않는다

## 기술 스택

- **Next.js 16** (App Router) + React 19
- **TypeScript**
- **Tailwind CSS v4** — 색은 `app/globals.css`의 CSS 변수 토큰(`background`, `foreground`, `muted`, `quote`, `rule`, `rule-soft`)으로 관리한다
- 디자인: Claude Design의 "Profile Ivory" 시안을 따른다. 아이보리 배경의 단일 라이트 테마이고, 카드 없이 괘선으로 구분하는 에디토리얼 스타일이다
- 폰트 토큰 `font-sans` / `font-serif` / `font-display`:
  - 본문 Pretendard — Google Fonts에 없어서 `app/layout.tsx`에서 jsDelivr CDN 스타일시트로 불러온다
  - 제목·인용 Gowun Batang, 섹션 번호·이탤릭 라벨 Instrument Serif — `next/font/google`로 불러온다

## 명령어

```bash
npm run dev    # 개발 서버 (http://localhost:3000)
npm run build  # 프로덕션 빌드
npm run lint   # ESLint
```

## 파일 구조

```
data/profile.json      콘텐츠 전부 (유일한 콘텐츠 소스)
types/profile.ts       JSON 구조 타입
lib/profile.ts         getProfile() — 데이터 읽는 곳은 여기 하나
app/layout.tsx         html/body, 메타데이터, 폰트
app/page.tsx           섹션 배치
app/globals.css        Tailwind + 색·폰트 토큰
components/            Hero, Section, ProjectCard, Label
DESIGN.md              화면 구성·색·글꼴 설명 (코드 없이)
```

## 데이터

- 소개·프로젝트·관심사 같은 **콘텐츠는 `data/profile.json`에만** 둔다. 섹션 제목 같은 UI 라벨은 컴포넌트에 둬도 된다
- JSON 구조를 바꾸면 `types/profile.ts`도 같이 고친다
- 페이지·컴포넌트는 JSON을 직접 import하지 않고 `lib/profile.ts`의 `getProfile()`로 읽는다. 나중에 DB로 옮길 때 이 파일만 바꾸기 위해서다
- 없을 수도 있는 값(`badge`, `result`)은 JSON에서 키를 빼고, 화면에서는 없으면 그리지 않는다
- `items`가 빈 스킬 분류는 화면에서 숨긴다

## 지금 하지 않을 것

- **Vercel 배포** — 설정 파일 추가나 배포 명령 실행 금지
- **Supabase 연동** — 패키지 설치, 클라이언트 설정, 환경 변수 추가 금지
- DB, 인증, API 라우트 등 한 페이지 정적 소개에 필요 없는 기능
- 뽀모도로 타이머 기능 구현 (페이지에는 소개 문구만 있다)

위 항목이 필요해 보이면 직접 진행하지 말고 먼저 물어볼 것.

## 작업 원칙

- 단순하게 유지한다. 요청받지 않은 페이지, 기능, 라이브러리를 추가하지 않는다
- 새 의존성을 추가해야 하면 먼저 확인받는다
