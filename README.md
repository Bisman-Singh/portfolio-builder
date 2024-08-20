# Portfolio Builder

A drag-and-drop portfolio website builder built with React, Vite, and React Router.

## Features

- **Form-Based Editor** — Input name, title, bio, skills, projects, and social links
- **Live Preview** — See your portfolio update in real-time as you edit
- **3 Templates** — Minimal (serif, light), Modern (dark, cards), Creative (monospace, bold)
- **Theme Color Picker** — Customize the accent color across the entire portfolio
- **Export to HTML** — Download a complete standalone HTML file with inline CSS
- **Save/Load** — Configurations persist in localStorage
- **React Router** — `/edit` (editor) and `/preview` (full-screen preview)

## Tech Stack

- React 19 + Vite
- React Router DOM
- Custom hook: `usePortfolio()`

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Routes

- `/edit` — Editor with side-by-side preview
- `/preview` — Full-screen portfolio preview
