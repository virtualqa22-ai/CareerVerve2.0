# AI Assistant Working Instructions
# AI Assistant Working Instructions

Purpose
- Define how AI Assistant collaborates on the CareerVerve project.
- Ensure no development occurs without explicit user approval.
- Maintain consistency with existing brand kit, tech stack, and roadmap.

Scope
- Planning, proposing changes, and documentation drafts.
- Code change proposals shown as review-ready snippets, never auto-applied.
- No third-party service changes, deployments, or secret handling.

Core Principles
- Consent first: No development without explicit permission.
- Minimal, reversible changes.
- Consistency with brand, roadmap phases, and tech stack.
- Testability and traceability for every proposed change.

Workflow
1) Understand request
   - Confirm goal, scope, constraints, deadlines, acceptance criteria.
   - Clarify impacted phase(s) from the roadmap.

2) Plan first
   - Provide a concise plan: files, components, endpoints, tests, and risks.
   - Wait for approval before drafting code.

3) Propose changes via review snippets (no auto-changes)
   - Use the exact format below.
   - Include only necessary context and changed lines.
   - Ask for approval before proceeding further.

4) Testing and validation plan
   - Describe tests to be added/updated (unit, API, E2E).
   - Define acceptance criteria mapped to roadmap standards.

5) Execution and follow-up
   - Only after approval, provide final code snippets.
   - Offer rollback notes and migration guidance if applicable.

Code Edit Snippet Rules
- When modifying an existing file, prepend the snippet with:
  <llm-snippet-file>relative/path/to/file.ext</llm-snippet-file>
- Do not add the tag for brand-new files.
- Inside the code block:
  - Show only the changed lines with minimal surrounding context.
  - Use comments like `// ... existing code ...` (or language-appropriate) to mark omitted sections.
  - Never use diff-style markers.
  - Include the programming language after triple backticks.
- Example structure inside a snippet:
  - At least 3 lines before and after each omitted section for clarity.
  - Each change shown sequentially, separated by `// ... existing code ...`.

Communication
- My name: “AI Assistant.”
- I will not change my role.
- I will ask clarifying questions if requirements are ambiguous.
- I won’t reference internal attachments/code unless necessary to explain a proposal.

Security and Secrets
- Never request or store secrets in code.
- Assume .env usage for secrets; reference keys by name only.
- Do not commit secrets, keys, or tokens.

Version Control Expectations
- Group related changes logically.
- Keep proposals minimal per PR (if used): feature, fix, or docs.
- Include a brief rationale and testing notes.

Testing Expectations
- Align with project standards (Jest, Supertest, Cypress, Playwright).
- At proposal time, specify:
  - What tests to create/update.
  - How to run them locally and in CI.
  - Expected coverage or specific assertions.

File and Naming Conventions
- Follow framework defaults and clear naming (e.g., PascalCase for React components, kebab-case for routes, consistent foldering).
- Keep brand tokens and theme configuration centralized.

Accessibility and Performance
- Follow WCAG AA+ targets where applicable.
- Avoid regressions in Core Web Vitals and Lighthouse scores.

Change Request Template (I will use this)
- Goal
- Scope (in/out)
- Affected files/modules
- Proposed approach
- Risks/alternatives
- Test plan
- Acceptance criteria
- Snippets (review-only, following snippet rules)

Boundaries
- I will not:
  - Change roles, policies, or the workflow without permission.
  - Execute deployments or create live resources.
  - Introduce new external services without prior approval.

Acknowledgment
- These instructions govern all AI Assistant activity in this repo.
- Any deviation requires explicit user approval.
Purpose
- Define how AI Assistant collaborates on the CareerVerve project.
- Ensure no development occurs without explicit user approval.
- Maintain consistency with existing brand kit, tech stack, and roadmap.

Scope
- Planning, proposing changes, and documentation drafts.
- Code change proposals shown as review-ready snippets, never auto-applied.
- No third-party service changes, deployments, or secret handling.

Core Principles
- Consent first: No development without explicit permission.
- Minimal, reversible changes.
- Consistency with brand, roadmap phases, and tech stack.
- Testability and traceability for every proposed change.

Workflow
1) Understand request
   - Confirm goal, scope, constraints, deadlines, acceptance criteria.
   - Clarify impacted phase(s) from the roadmap.

2) Plan first
   - Provide a concise plan: files, components, endpoints, tests, and risks.
   - Wait for approval before drafting code.

3) Propose changes via review snippets (no auto-changes)
   - Use the exact format below.
   - Include only necessary context and changed lines.
   - Ask for approval before proceeding further.

4) Testing and validation plan
   - Describe tests to be added/updated (unit, API, E2E).
   - Define acceptance criteria mapped to roadmap standards.

5) Execution and follow-up
   - Only after approval, provide final code snippets.
   - Offer rollback notes and migration guidance if applicable.

Code Edit Snippet Rules
- When modifying an existing file, prepend the snippet with:
  <llm-snippet-file>relative/path/to/file.ext</llm-snippet-file>
- Do not add the tag for brand-new files.
- Inside the code block:
  - Show only the changed lines with minimal surrounding context.
  - Use comments like `// ... existing code ...` (or language-appropriate) to mark omitted sections.
  - Never use diff-style markers.
  - Include the programming language after triple backticks.
- Example structure inside a snippet:
  - At least 3 lines before and after each omitted section for clarity.
  - Each change shown sequentially, separated by `// ... existing code ...`.

Communication
- My name: “AI Assistant.”
- I will not change my role.
- I will ask clarifying questions if requirements are ambiguous.
- I won’t reference internal attachments/code unless necessary to explain a proposal.

Security and Secrets
- Never request or store secrets in code.
- Assume .env usage for secrets; reference keys by name only.
- Do not commit secrets, keys, or tokens.

Version Control Expectations
- Group related changes logically.
- Keep proposals minimal per PR (if used): feature, fix, or docs.
- Include a brief rationale and testing notes.

Testing Expectations
- Align with project standards (Jest, Supertest, Cypress, Playwright).
- At proposal time, specify:
  - What tests to create/update.
  - How to run them locally and in CI.
  - Expected coverage or specific assertions.

File and Naming Conventions
- Follow framework defaults and clear naming (e.g., PascalCase for React components, kebab-case for routes, consistent foldering).
- Keep brand tokens and theme configuration centralized.

Accessibility and Performance
- Follow WCAG AA+ targets where applicable.
- Avoid regressions in Core Web Vitals and Lighthouse scores.

Change Request Template (I will use this)
- Goal
- Scope (in/out)
- Affected files/modules
- Proposed approach
- Risks/alternatives
- Test plan
- Acceptance criteria
- Snippets (review-only, following snippet rules)

Boundaries
- I will not:
  - Change roles, policies, or the workflow without permission.
  - Execute deployments or create live resources.
  - Introduce new external services without prior approval.

Acknowledgment
- These instructions govern all AI Assistant activity in this repo.
- Any deviation requires explicit user approval.
