# Fresh Next.js Stack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current application with a blank, current Next.js foundation configured with Tailwind CSS, shadcn/ui, and Motion while preserving Git history.

**Architecture:** Build the official Next.js scaffold in a temporary directory, validate it, then replace every repository-root item except `.git`. Initialize shadcn/ui and Motion on the new foundation, reduce the generated home route to a blank page, and verify the full toolchain from the repository root.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui, Motion for React, ESLint, npm

**Spec:** `docs/superpowers/specs/2026-09-24-fresh-next-stack-design.md`

## Global Constraints

- Preserve `/Users/user/Desktop/Anas/Development/next-vortex/.git` and its complete history.
- Remove all other pre-rebuild files, including previous routes, components, assets, configuration, and the temporary design/plan documents.
- Use npm and resolve releases from `create-next-app@latest`, `shadcn@latest`, and `motion@latest` at execution time.
- Require Node.js 20.9 or newer.
- Configure TypeScript, ESLint, Tailwind CSS, App Router, `src/`, Turbopack, and the `@/*` import alias.
- Do not migrate any existing application behavior or content.
- Do not push commits or create a pull request unless separately requested.

## Review Focus

- Repository-boundary error: cleanup must abort unless both `pwd` and `git rev-parse --show-toplevel` resolve to the exact intended repository path; tested in Task 1, Step 4.
- Git metadata loss: `.git` must remain readable and the pre-rebuild commit must still resolve; tested in Task 1, Step 7 and Task 2, Step 8.
- Partial or stale dependency resolution: direct framework dependencies must resolve without npm errors; tested in Task 2, Step 5.
- Broken shadcn/ui integration: the CLI must recognize the generated project configuration; tested in Task 2, Step 6.
- Invalid generated application: both lint and production compilation must succeed; tested in Task 1, Step 3 and Task 2, Step 7.

---

### Task 1: Replace the Existing Tree with the Official Next.js Scaffold

**Files:**
- Delete: every current repository item except `.git`
- Create: `.gitignore`
- Create: `README.md`
- Create: `eslint.config.mjs`
- Create: `next.config.ts`
- Create: `package.json`
- Create: `package-lock.json`
- Create: `postcss.config.mjs`
- Create: `tsconfig.json`
- Create: `public/*` generated starter assets
- Create: `src/app/favicon.ico`
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`

**Interfaces:**
- Consumes: Node.js 20.9+, npm, the official `create-next-app@latest` package, and the existing repository at `/Users/user/Desktop/Anas/Development/next-vortex`
- Produces: a buildable npm-based Next.js App Router project with Tailwind CSS and the `@/*` alias

- [ ] **Step 1: Capture the repository identity and create a staging directory**

Run:

```bash
pwd
git rev-parse --show-toplevel
git rev-parse HEAD
node --version
mktemp -d /private/tmp/next-vortex-fresh.XXXXXX
```

Expected: both path commands print `/Users/user/Desktop/Anas/Development/next-vortex`, `git rev-parse HEAD` prints the current commit, Node.js is at least 20.9, and `mktemp` prints a unique directory. Record the commit and temporary path for later steps.

- [ ] **Step 2: Generate the replacement in the staging directory**

Run, replacing `<staging-directory>` with the exact path returned in Step 1:

```bash
npx create-next-app@latest <staging-directory>/app --typescript --eslint --tailwind --app --src-dir --use-npm --import-alias "@/*" --yes
```

Expected: Create Next App exits successfully and creates `<staging-directory>/app/package.json` plus `<staging-directory>/app/src/app/page.tsx`.

- [ ] **Step 3: Validate the staged scaffold before deleting anything**

Run:

```bash
npm run lint --prefix <staging-directory>/app
npm run build --prefix <staging-directory>/app
```

Expected: both commands exit with status 0.

- [ ] **Step 4: Re-check the exact destructive boundary**

Run:

```bash
test "$(pwd -P)" = "/Users/user/Desktop/Anas/Development/next-vortex"
test "$(git rev-parse --show-toplevel)" = "/Users/user/Desktop/Anas/Development/next-vortex"
test -d "/Users/user/Desktop/Anas/Development/next-vortex/.git"
test -f "<staging-directory>/app/package.json"
```

Expected: every command exits with status 0. Stop without deleting anything if any check fails.

- [ ] **Step 5: Remove the old working tree without touching `.git`**

Run only after Step 4 passes:

```bash
find /Users/user/Desktop/Anas/Development/next-vortex -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf -- {} +
```

Expected: `/Users/user/Desktop/Anas/Development/next-vortex/.git` remains and no other root entry remains.

- [ ] **Step 6: Copy the validated scaffold into the repository**

Run:

```bash
rsync -a --exclude=.git <staging-directory>/app/ /Users/user/Desktop/Anas/Development/next-vortex/
```

Expected: the repository root contains the generated Next.js files and `.git`. The staging app's independently generated `.git` directory, if any, is not copied.

- [ ] **Step 7: Verify the replacement and preserved history**

Run:

```bash
git rev-parse HEAD
test "$(git rev-parse HEAD)" = "<commit-recorded-in-step-1>"
npm run lint
npm run build
git status --short
```

Expected: the original commit still resolves, both npm scripts pass, and Git shows a deliberate full-tree replacement without `.git` errors.

- [ ] **Step 8: Commit the Next.js foundation**

Run:

```bash
git add -A
git commit -m "chore: rebuild Next.js foundation"
```

Expected: Git creates one commit containing the clean replacement scaffold.

---

### Task 2: Initialize shadcn/ui, Install Motion, and Blank the Starter Page

**Files:**
- Create: `components.json`
- Create: `src/lib/utils.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/page.tsx`
- Modify: `package.json`
- Modify: `package-lock.json`

**Interfaces:**
- Consumes: the npm-based Next.js/Tailwind project produced by Task 1
- Produces: a blank application foundation with configured shadcn/ui imports and Motion available from `motion/react`

- [ ] **Step 1: Initialize shadcn/ui using the current official CLI**

Run:

```bash
npx shadcn@latest init --defaults
```

Expected: the CLI exits successfully, writes `components.json`, creates `src/lib/utils.ts`, updates global styles and dependencies, and does not add a UI component.

- [ ] **Step 2: Install the current Motion release**

Run:

```bash
npm install motion@latest
```

Expected: npm exits successfully and records `motion` in `dependencies` and `package-lock.json`.

- [ ] **Step 3: Replace generated promotional content with a blank route**

Replace `src/app/page.tsx` with:

```tsx
export default function Home() {
  return <main className="min-h-screen" />
}
```

Expected: the root route renders an intentionally blank, full-height page with no migrated or promotional content.

- [ ] **Step 4: Check configuration and dependency declarations**

Run:

```bash
node -e 'const p=require("./package.json"); for (const name of ["next","react","react-dom","motion"]) if (!p.dependencies?.[name]) throw new Error(`missing ${name}`)'
test -f components.json
test -f src/lib/utils.ts
rg '"@/\*"' tsconfig.json
rg '@import "tailwindcss"' src/app/globals.css
```

Expected: all commands exit with status 0.

- [ ] **Step 5: Verify exact installed dependency resolution**

Run:

```bash
npm ls next react react-dom tailwindcss @tailwindcss/postcss motion
```

Expected: npm exits with status 0 and prints one resolved version for each requested dependency without invalid, missing, or extraneous errors.

- [ ] **Step 6: Verify the shadcn/ui project configuration**

Run:

```bash
npx shadcn@latest info
```

Expected: the CLI recognizes the Next.js project and prints its shadcn/ui configuration without errors. If the current CLI renamed this read-only command, use its documented project-information equivalent and record that substitution.

- [ ] **Step 7: Run final static and production checks**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit with status 0.

- [ ] **Step 8: Verify Git preservation and review the final diff**

Run:

```bash
git log -3 --oneline
git status --short
git diff --check
git diff --stat
```

Expected: history includes the pre-rebuild commits and the Task 1 foundation commit; the working tree shows only shadcn/ui, Motion, lockfile, CSS, and blank-page changes; `git diff --check` exits with status 0.

- [ ] **Step 9: Commit the completed stack setup**

Run:

```bash
git add package.json package-lock.json components.json src/app/globals.css src/app/page.tsx src/lib/utils.ts
git commit -m "chore: configure shadcn and Motion"
```

Expected: Git creates the final local commit and `git status --short` is empty.
