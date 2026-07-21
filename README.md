# socially
[![Next.js](https://img.shields.io/badge/Next.js-12%2B-blue)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-blue)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-0A2E7F)](https://www.prisma.io)

## Introduction
socially is a modern web application built with Next.js, React, Tailwind CSS, and Prisma. It delivers a fast, accessible, and scalable social platform with a responsive UI and a robust database layer. Leveraging Next.js App Router for routing, Tailwind CSS for styling, and Prisma for data access, the project emphasizes developer experience, performance, and clean separation of concerns between frontend components and backend data operations.

## features
- Server-rendered and client-driven UI using Next.js and React
- Tailwind CSS-based responsive, accessible styling
- Prisma ORM for type-safe database access and migrations
- Lightweight API routes and server components for clean data access patterns
- Modular, extensible component architecture suitable for rapid feature development
- Solid developer experience with hot reloading and fast feedback loops

## installation
### Prerequisites
- Node.js 16.x or newer
- npm 6.x or newer (or yarn)
- Git

### Quick start
```
git clone https://example.com/your/repo.git
cd socially
npm install
```

### Tailwind CSS setup (if not already configured)
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Prisma setup (if using Prisma)
```
npx prisma generate
npx prisma migrate dev --name init
```

### Start development server
```
npm run dev
```

### Production build
```
npm run build
npm run start
```

## usage
### Run locally
```
npm run dev
```
Then open http://localhost:3000 in your browser.

### Build and run in production
```
npm run build
npm run start
```

### Environment variables (example)
| Variable | Purpose | Example |
|---|---|---|
| DATABASE_URL | Database connection string used by Prisma | postgres://USER:PASSWORD@HOST:PORT/DATABASE |
| NEXT_PUBLIC_API_BASE_URL | Base URL for any client-side API requests | http://localhost:3000 |