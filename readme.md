# TODO_LIST

## Description

할 일을 기록하는 웹 앱입니다. 현재 모바일 웹을 기준으로 개발하고 있으며, 추후 기능과 함께 웹 버전이 추가될 예정입니다.

## Enviroment

- Node.js 18.12.1
- Yarn 1.22.19

```jsx
$ yarn install
$ yarn start
```

## Stack

- Bundler : Vite
- Base : Typescript, React
- API : axios, react-query
- State : recoil
- CSS : emotion
- Auth : Google OAuth

```
"dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@react-oauth/google": "^0.11.1",
    "axios": "^1.4.0",
    "date-fns": "^2.30.0",
    "immer": "^10.0.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-query": "^3.39.3",
    "react-router": "^6.15.0",
    "react-router-dom": "^6.15.0",
    "recoil": "^0.7.7"
  },
  "devDependencies": {
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/babel-preset-css-prop": "^11.11.0",
    "@types/node": "^20.5.4",
    "@types/react": "^18.2.14",
    "@types/react-dom": "^18.2.6",
    "@typescript-eslint/eslint-plugin": "^5.61.0",
    "@typescript-eslint/parser": "^5.61.0",
    "@vitejs/plugin-react": "^4.0.1",
    "eslint": "^8.44.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.1",
    "typescript": "^5.0.2",
    "vite": "^4.4.0",
    "vite-tsconfig-paths": "^4.2.0"
  }
```

## Folder Structure

- Main Design Pattern : Container-Presenter Pattern
- Folder Description
  - api : http 요청을 위한 기본 설정과 비지니스 로직에 필요한 api를 관리합니다.
  - assets : 아이콘, 이미지 등과 같은 정적 파일을 담고 있습니다.
  - atoms : recoil을 통해 전역변수를 관리합니다.
  - components : presenter에 해당하는 ui를 담당합니다.
  - containers : container 부분에 해당하며, ui 조합과 전반적인 로직을 담당합니다.
  - pages : 로직을 제외한 container 들의 조합을 관리합니다.
  - utils : 날짜 비교, 객체 비교 등과 같은 공통된 로직과 색상, 상수와 같은 공통된 값을 관리합니다.
  - App.tsx : 현재 React Router를 통해 SPA Routing을 관리합니다.
  - main.tsx : 앱 사용을 위한 모든 Provider를 설정합니다.

```jsx
src
  ├─api
  ├─assets
  ├─atoms
  ├─components
  │  ├─calendar
  │  ├─common
  │  ├─list
  │  └─nav
  ├─containers
  │  ├─alarm
  │  ├─calendar
  │  ├─common
  │  ├─form
  │  ├─list
  │  └─login
  ├─pages
  ├─utils
  ├─App.tsx
  └─main.tsx
```

## Current Progress

- Google OAuth API를 통한 Login을 제공하고 있습니다.
  - 권한 부여 승인 코드 방식(Authorization Code Grant)에 가깝게 구현했습니다.
  - access token의 경우 브라우저의 메모리(전역변수)에 저장하며, refresh token을 서버에서 Cookie로 전달하고 있습니다.
    → HttpOnly 설정을 할 예정이지만, 자동 로그인과 관련된 요청을 자동화하는 부분 리팩토링 필요
    \*\*\*\* → 전역변수로 Access Token이 관리되다 보니, 새로고침 시의 상황에 대한 부분 리팩토링 필요
- Calendar UI를 직접 구현하여 제공하고 있습니다.
  - Recoil을 통해 각각의 DatePicker나 Calendar가 상태를 관리할 수 있도록 하고 있습니다. (Atom Family 사용)
- Todo 에 대한 CRUD 기능을 제공하고 있습니다.
  - Todo Type(todo, complete, hold)에 따라 색상을 다르게 표현하고 있습니다. 이를 위해 Todo Type을 전역으로 관리하고 있습니다.
  - Todo를 통해 다양한 내용을 전달하고자 구성했습니다.
    → 장소, 카테고리 기능을 추가할 예정

## Next Progress

- 기능 추가
  - ~~장소 추가 기능(Google map api)~~
  - ~~장소 즐겨찾기 기능 추가~~
  - ~~개인별 할 일 카테고리 추가~~
  - ~~캘린더 할 일 통계 기능 추가~~
  - 알림 기능 추가 (socket.io)
  - ~~개인 페이지 추가~~
- 디자인
  - 로그인 페이지 디자인 변경 / 시간별 배경 변경
- 리팩토링
  - login 기능 리팩토링 / access token 저장 위치에 대한 고민 필요
