# Developer Portfolio

Next.js로 만든 원페이지 개발자 포트폴리오 웹사이트입니다. 데이터베이스 없이 정적 콘텐츠만으로 구성되어 있고, 소개, 강점, 프로젝트, 경험, 연락처 섹션을 한 페이지에 담았습니다.

## Tech Stack

- Next.js
- React
- TypeScript
- CSS

## Getting Started

아래 명령어로 로컬 개발 서버를 실행할 수 있습니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 으로 접속하면 됩니다.

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
package.json
tsconfig.json
next.config.ts
```

## Customizing Content

포트폴리오 문구와 프로젝트 정보는 [app/page.tsx](/Users/kimhyeonji/Documents/GitHub/portfolio0328/app/page.tsx) 에서 수정할 수 있습니다.

전체 스타일과 반응형 레이아웃은 [app/globals.css](/Users/kimhyeonji/Documents/GitHub/portfolio0328/app/globals.css) 에서 조정할 수 있습니다.

연락처 링크, 프로젝트 제목, 소개 문구를 본인 정보로 바꾸면 바로 사용할 수 있습니다.

## Scripts

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run start`: 빌드된 앱 실행
- `npm run lint`: 린트 실행
