CareerVerve Phase Roadmap

PHASE 0: Skeleton + Test Automation \& CI Pipeline
Goal: Implement and setup all techs for FE, BE, APIs, and Git, Full test suite with Jest (unit), Supertest (API), Cypress (fast feedback in dev), Playwright (cross-browser E2E CI), implement health page and detailed logging (Issue tracing).
Deliverables: Full setup for everything.
Acceptance: System should be up, running and tested.

PHASE 1: UI Shell Bootstrapping
Goal: Render perfect Home Page with header (site name, logo, menu), footer (plain, links), global style/theme config, light/dark mode support, sample copyright, privacy policy and terms \& conditions.
Deliverables: index page, Header.tsx, Footer.tsx, basic theming (colors/tokens).
Acceptance: Pixel-perfect UI in Chrome, Firefox, Safari, Edge (manual and Playwright/Cypress tests), 100 Lighthouse UI score, semantic HTML.

PHASE 2: Navigation \& Routing
Goal: Configure SSR/SSG Next.js routing, add About, Resume Builder, Login/Register, Contact pages to menu.
Deliverables: Pages for each nav item; update Header with NavMenu
Acceptance: All pages route with no errors, nav state highlights active, passes cross-browser tests.

PHASE 3: Auth Foundation
Goal: Build backend /api/auth endpoints (register, login, logout, me), connect to MongoDB Atlas, secure password handling (bcrypt).
Deliverables: Auth Controller, User model/schema, JWT generation, registration/login/signup forms (basic, no email yet).
Acceptance: 100% Jest/Supertest unit coverage for backend, fails gracefully, respects API contract.

PHASE 4: Brevo Email Integration
Goal: Implement Brevo email for signup verification and password reset.
Deliverables: Email service class, verification email template, password reset workflow; .env setup for API keys.
Acceptance: Email sent/received on signup and password reset; user flow tested on web client and mobile browsers.

PHASE 5: Profile Dashboard Skeleton
Goal: Authenticated profile/dashboard page, responsive sidebar menu.
Deliverables: ProfilePage, sidebar component, protected route middleware, auth state persistence (localStorage/cookie).
Acceptance: Protected pages unaccessible without login, logout kills session, 100% test pass on auth guards.

PHASE 6: Resume Builder Canvas
Goal: Main resume builder UI: add/edit/delete sections (Personal, Education, Experience, Skills).
Deliverables: ResumeBuilder.tsx, controlled form components, client state, backend save/load endpoints.
Acceptance: State is preserved on tab reload, real-time feedback shown, unit and integration tests (Jest/Playwright).

PHASE 7: Live Preview Integration
Goal: Implement real-time live resume preview beside edit pane, live updates as user types.
Deliverables: LivePreview.tsx, layout split (desktop/tablet/mobile), diff highlighting for new/changed content.
Acceptance: Sub-500ms preview update, perfect on all viewports, passes Playwright E2E live update test.

PHASE 8: ATS Scoring Logic
Goal: TF-IDF + cosine similarity analysis for resume-vs-JD parsing; raw ATS ≥ 90.
Deliverables: atsScore backend util, /api/ats/score endpoint, UI with score + actionable tips.
Acceptance: Every generated resume scores ≥ 90 with sample JD, score updates on edit, Playwright API/extreme edge-case tests pass.

PHASE 9: Multi-Template Support
Goal: Offer selectable resume templates (design/theme, professional, modern etc), auto-switch preview.
Deliverables: At least three unique template JSX/TSX files, template selector, live preview adapts instantly.
Acceptance: All templates perfect on desktop/tablet/mobile, renders in Chrome/Safari/Edge/Firefox, template switch ≤ 1s.

PHASE 10: Country Rule Localization
Goal: Integrate country-specific resume requirements (e.g., photo for Germany, not for US); admin UI for CRUD rules.
Deliverables: CountryRules schema, admin dashboard, flag icons, photo uploader.
Acceptance: Changing country updates builder fields/rules instantly, admin can update schema live, >95% Jest/Playwright coverage for country logic.

PHASE 11: Data Persistence
Goal: Users can save unlimited resume drafts, load/revise any, version rollback.
Deliverables: Resume CRUD API, version history display, Mongo template.
Acceptance: Data persists across sessions/devices, resume load is instant, all edge cases tested.

PHASE 12: Resume-JD Scanner, Keyword Assistant
Goal: Paste/copy job description, highlight missing/matching keywords in resume live preview.
Deliverables: JD parser util, UI highlight system, suggestions panel for keywords.
Acceptance: Gap analysis instant (<2s), suggestions ranked, cross-browser verified.

PHASE 13: Cover Letter Builder \& Export
Goal: Guided cover letter builder; pulls info from resume \& JD.
Deliverables: CoverLetterBuilder.tsx, templates, live preview, PDF export.
Acceptance: Exported cover letter well formatted, error-free, cross-platform tested.

PHASE 14: SEO, Accessibility, and Web Vitals Foundation
Goal: Full on-page SEO optimization, accessibility (WCAG 2.1 AA/2.2), Core Web Vitals tuning.
Deliverables: SEO meta data, robots.txt, sitemaps, ARIA roles, alt text, color contrast, lazy load images.
Acceptance: Lighthouse score >90 (all), aXe/Deque tests pass, structured data valid in Google's Rich Results Test.

PHASE 15: Ad Integration \& GDPR/EU Consent
Goal: Google AdSense in best-perform locations; add Consent Mode v2 for EU.
Deliverables: Ad components, GDPR consent banner, AdSense/Ad script inclusions.
Acceptance: Ads visible, no layout shift, consent works on EU IPs, non-blocking loading, mobile responsive.

PHASE 16: Final QA, Docs, and Launch Prep
Goal: Final user/UAT, performance under load (using Playwright/Cypress), full docs and support content.
Deliverables: End-user guide, developer setup docs, admin ops manual, launch announcement assets.
Acceptance: All acceptance criteria retested, 99.5% uptime \& <3s TTFB on Render, mobile PWA support.

