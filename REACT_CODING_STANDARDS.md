# React Coding Standards & Project Context

This document provides essential context and coding standards for this project. The AI assistant should refer to this document on every prompt to ensure consistency, high code quality, and alignment with the project's architectural decisions.

## 1. Project Information & Architecture

- **Project Name:** My Resume App
- **Objective:** Modern, interactive web-based resume for Aravind Sridhar.
- **Tech Stack:**
  - **Core:** React 19, TypeScript
  - **Build Tool:** Vite
  - **Styling:** Vanilla CSS (App.css, index.css) with modern aesthetics (Glassmorphism, Animations, Gradients). *Tailwind CSS is NOT used.*
  - **Deployment / Analytics:** Vercel Analytics (`@vercel/analytics`).
- **State Management:** Native React Hooks (`useState`, `useEffect`, etc.).
- **Data Flow:** Currently simple local state, plus remote form submissions using the `web3forms` API for the "Hire Me" contact modal.

## 2. React Coding Standards

### Components
- **Functional Components:** Use functional components exclusively. Do not use class components.
- **Modularity:** If a component grows too large (e.g., `App.tsx` exceeding a few hundred lines), abstract distinct UI sections (like Modals, Hero, Sections) into separate, reusable components within a `src/components/` directory.
- **Semantic HTML:** Keep the HTML semantic (`<main>`, `<section>`, `<header>`, `<nav>`, `<aside>`, etc.) for accessibility and SEO.

### State and Hooks
- **Hooks:** Ensure `useState`, `useEffect`, and other hooks are used at the top level of the component.
- **Side Effects:** Keep `useEffect` dependencies accurate to prevent re-renders or stale closures. Clean up any timeouts or listeners when necessary.

### Event Handling & Asynchronous Code
- Use `async/await` for asynchronous operations (like `fetch`).
- Always wrap API calls in `try/catch` blocks to gracefully handle errors, and ensure UI reflects loading, success, or error states accordingly.
- Explicitly prevent default behaviors and stop event propagation where needed (`e.preventDefault()`, `e.stopPropagation()`).

## 3. TypeScript Guidelines

- **Strict Typing:** Avoid using `any`. Use specific interfaces or types for component props, state objects, and API responses.
- **Event Typing:** Properly type UI events. For example, use `React.FormEvent<HTMLFormElement>` for form submissions and `React.MouseEvent<HTMLButtonElement>` for button clicks.
- **Null Checks:** Use optional chaining (`?.`) and nullish coalescing (`??`) to handle potentially undefined/null properties.

## 4. UI / UX Styling Strategy

- **Design Aesthetic:** The application targets a high-end, premium aesthetic referred to as "Sunset Frost / Glassmorphism". This implies:
  - Smooth gradients, translucent glass panels (`backdrop-filter`), and soft shadows.
  - Fluid, micro-interactive hover states (`neumorphic-hover`) and animated entry transitions.
- **Vanilla CSS:** Write clean, modular CSS. Use CSS variables for theming (colors, spacing, radii) in `index.css`/`App.css` instead of hardcoding values everywhere.
- **Icons & Assets:** Material Icons Round are broadly used.

## 5. Clean Code & Best Practices

- **Self-Documenting Code:** Write clear, descriptive variable and function names. Comments should explain *why* something is done, not *what*.
- **Magic Strings/Numbers:** Avoid magic strings/numbers. Define them as constants outside the component or in a dedicated constants file.
- **Accessibility (a11y):** Ensure interactive elements have visual feedback (e.focus/hover), input fields have labels, and images feature descriptive `alt` tags.

---
**Note to LLM:** Do not start creating complex folders or massive refactoring blindly. Follow step-by-step instructions from the user, but adhere to the syntax, styles, and architectures described above.
