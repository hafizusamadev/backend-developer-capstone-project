# Little Lemon Restaurant Web Application

A responsive React web application built for the Little Lemon restaurant in Chicago as part of the Meta Front-End Developer Capstone Project.

## Overview & Features
- **Semantic UX/UI**: Styled using Little Lemon brand colors (Primary Green `#495E57`, Lemon Yellow `#F4CE14`) and Google Fonts (*Markazi Text* and *Karla*).
- **Navigation & Landmarks**: Accessible header, navigation bar, hero banner, specials, testimonials, about section, and footer.
- **Table Reservation Flow**: Complete booking system featuring date selection, dynamic time slots, guest count (1–10), and occasion selection.
- **State Management**: Predictable state updates with React's `useReducer` and simulated asynchronous availability logic (`initializeTimes`, `updateTimes`).
- **Form Validation & Accessibility (a11y)**: HTML5 constraints paired with JavaScript validation, ARIA landmarks, `aria-required`, `aria-invalid`, `aria-describedby`, and accessible alert error feedback.
- **Confirmation Page**: Dedicated route displaying reservation details upon successful booking.
- **Unit Testing**: Comprehensive unit test suite with Vitest and React Testing Library verifying reducer logic, DOM rendering, form attributes, error states, and submission.

## Tech Stack
- **React 19** & **React Router 7**
- **Vite** (bundler and dev server)
- **Vitest** & **@testing-library/react** (unit test runner)
- **Vanilla CSS** with modular token design system

## Setup & Running Locally

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd backend-developer-capstone-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Run unit tests**:
   ```bash
   npm test
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## Coursera Peer-Review Rubric Alignment
| Rubric Criterion | Implementation Details |
| :--- | :--- |
| **UX/UI Design** | Clean Mediterranean visual theme, responsive layout, styled specials cards and testimonials |
| **Accessibility (a11y)** | Semantic HTML tags, ARIA roles, skip-to-content link, high contrast, accessible labels |
| **Form Functionality** | Client validation for date, time, and guest limits (1–10); disabled submit until valid |
| **State Management** | `useReducer` implementation with `initializeTimes` and `updateTimes` |
| **Unit Tests** | Tests for static headings, HTML5 attributes, edge-case validation, and reducer actions |
| **Git & Architecture** | Modular component structure (< 120 lines per source file), Git version control |
