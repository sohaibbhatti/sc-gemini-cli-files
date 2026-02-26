# GEMINI.md - TechStack Conference 2026

## Project Overview
This project is a modern, high-performance website for the **TechStack Conference 2026**, a fictitious AI and technology event. It is built as a Single Page Application (SPA) with a focus on visual appeal, interactive elements, and performance.

### Main Technologies
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4 (with PostCSS), Lucide React (Icons), Framer Motion (Animations)
- **Routing:** React Router 7
- **Testing:** Vitest, React Testing Library, JSDOM
- **Code Splitting:** custom lazy loading utility for all page components.

### Architecture
- **Pages:** Individual page components located in `src/pages/`.
- **Components:** Reusable UI elements in `src/components/`, including a global `Layout`.
- **Data Driven:** Event data (sessions, features) is stored in `src/data/` for easy updates.
- **Lazy Loading:** All routes are lazy-loaded via `src/lazyLoad.ts` to minimize initial bundle size.

## Building and Running

### Development
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Testing
Run the test suite using Vitest:
```bash
npm run test
```

### Linting
Check for code style and potential errors:
```bash
npm run lint
```

### Production Build
Build the application for production:
```bash
npm run build
```

### Pre-deployment Check
Run a full suite of checks including linting, testing, and building:
```bash
npm run preflight
```

## Development Conventions

### Styling
- Use **Tailwind CSS 4** for all styling.
- Prefer utility classes over custom CSS where possible.
- Animations should be implemented using **Framer Motion** for consistency.

### Component Structure
- Functional components with TypeScript interfaces for props.
- Use the `Layout` component to wrap all page content.
- Ensure new pages are added to `src/lazyLoad.ts` and correctly routed in `src/App.tsx`.

### State Management
- Use React hooks (`useState`, `useEffect`) for local state.
- For global configuration (like theme), follow the pattern established in `src/components/Layout.tsx`.

### Testing
- Every new component or page should have a corresponding `.test.tsx` file.
- Focus on user-centric testing using React Testing Library.

### Data
- Update `src/data/sessions.ts` and `src/data/features.ts` to change the site content without modifying UI logic.
