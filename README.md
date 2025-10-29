# Accordion FAQ App

A simple, accessible, and responsive Accordion component built with **React + TypeScript**, inspired by GitHub’s FAQ section.

## Features

- ✅ Expand/collapse behavior
- ✅ Supports one or multiple open items
- ✅ Custom animation for toggle icon
- ✅ Fully tested with Vitest + React Testing Library
- ✅ Styled to match GitHub’s clean UI

## Tech Stack

- React + TypeScript
- Vite
- Vitest + React Testing Library
- CSS for animation + transitions

## Demo

Click on any question to toggle the answer. You can configure it to allow one or multiple sections open at once.

## Run Tests

```bash
npm install
npx vitest
```

## Folder Structure

```
src/
├── components/
│   └── Accordion/
│       ├── Accordion.tsx
│       ├── AccordionItem.tsx
│       ├── Accordion.css
│       └── Accordion.test.tsx
├── data/
│   └── faq.ts
├── App.tsx
├── main.tsx
└── index.css
```