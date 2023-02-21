# Architect Design

## Purpose

To show the list and user info that fetch from [backend](https://github.com/justcodebryan/jianshu-server), the frontend can refresh the data and get the info by axios and render the data on the screen.

## Solution

Using React.js to build up the whole frontend application.

Divide the pages and services via domain.

## Folder Structure

```
├── public
└── src
    ├── api
    ├── assets
    ├── components
    ├── hooks
    ├── pages
    ├── routes
    ├── services
    ├── styles
    ├── types
    └── utils
```

This application uses [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design) to build up the folder structure.

- public -> store static files, like icon, etc.
- src/api -> request layer using axios.
- src/assets -> include some static files.
- src/components -> has some common components inside.
- src/hooks -> some common hooks.
- src/pages -> each pages.
- src/routes -> the routes of the pages.
- src/services -> the services of each page.
- src/styles -> global style and some scss and css variables.
- src/types -> the definition of types from each page.
- src/utils -> common utils function used in the project.

Each page will have corresponding files in `pages/`, `services/` and `types/`.

When there is a bug that is not related to the common components, utils or hooks, you need to search the files mentioned above to find the bug and fix it.

# Tech Stack

## Main Package

- [React.js](https://reactjs.org/)
- [Vite.js](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [axios](https://axios-http.com/)

## Dev Dependencies

- [pnpm](https://pnpm.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [StyleLint](https://stylelint.io/)
- [CommitLint](https://commitlint.js.org/)
- [Husky](https://typicode.github.io/husky/)

# Startup

1. Install Dependencies

```bash
pnpm install
# alias: pnpm i
```

2. Config dot environment file

```bash
cp ./.env ./.env.dev.local
```

3. Start development server

```bash
pnpm dev
# pnpm run dev
```
