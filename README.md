# Galleria slideshow site solution

## Table of contents

- [Galleria slideshow site solution](#galleria-slideshow-site-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Built with](#built-with)
  - [essentials](#essentials)
      - [Setup](#setup)
    - [Development Server](#development-server)
    - [Production](#production)
    - [GitHub Pages 배포](#github-pages-배포)
      - [배포 방법](#배포-방법)
      - [주의사항](#주의사항)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slideshow and view each painting in a lightbox

### Screenshot

![Galleria Slideshow site image](image.png)(./screenshot.jpg)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Tailwindcss](https://tailwindcss.com/) - For styles
- [Vue.js](https://vuejs.org/) - Javascript framework
- [Vite.js](https://vitejs.dev) - Development environment

## essentials

#### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

### GitHub Pages 배포

이 프로젝트는 GitHub Pages에 자동으로 배포되도록 설정되어 있습니다.

#### 배포 방법

1. **GitHub 리포지토리 생성**
   - GitHub에서 새 리포지토리를 생성합니다
   - 리포지토리 이름이 `galleria-slideshow`가 아닌 경우, `vite.config.ts`의 `base` 경로를 수정해야 합니다

2. **리포지토리에 코드 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **GitHub Pages 설정**
   - GitHub 리포지토리 페이지로 이동
   - Settings → Pages 메뉴로 이동
   - Source를 "GitHub Actions"로 선택
   - 저장 후 자동으로 배포가 시작됩니다

4. **배포 확인**
   - Actions 탭에서 배포 진행 상황을 확인할 수 있습니다
   - 배포가 완료되면 `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`에서 사이트를 확인할 수 있습니다

#### 주의사항

- 리포지토리 이름이 `galleria-slideshow`가 아닌 경우, `vite.config.ts` 파일의 `base` 값을 리포지토리 이름에 맞게 수정해야 합니다
- 예: 리포지토리 이름이 `my-gallery`인 경우 → `base: '/my-gallery/'`
