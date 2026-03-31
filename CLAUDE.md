# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Free invoice generator web app (invoicegenerator.tax) — no sign-up required. Built with Next.js App Router, TypeScript, Tailwind CSS, and deployed on Vercel.

## Commands

- `npm run dev` — dev server with Turbo
- `npm run build` — production build with Turbo
- `npm run lint` — ESLint (next/core-web-vitals + TypeScript)
- `npm run format` — format staged files (pretty-quick)
- `npm run format:all` — format all files

## Code Style

- Prettier: single quotes, no semicolons, 120 char width, trailing commas
- Import order enforced by @trivago/prettier-plugin-sort-imports: next → react → third-party → @/components → @/app/lib → @/app/utils → @/app/constants → @/app/data → @/styles → relative
- Tailwind classes sorted by prettier-plugin-tailwindcss
- 2-space indentation, LF line endings
- Use Tailwind design tokens (spacing, colors) — avoid arbitrary values like `p-[13px]`

## Architecture

- `app/page.tsx` — main page with invoice form and live preview
- `app/api/generate-pdf/route.ts` — PDF generation via Puppeteer + Chromium
- `app/components/` — UI components (form inputs, preview, items table, theme switch)
- `app/components/context/` — React Context providers (currency, form state)
- `app/lib/utils.ts` — shared utilities
- `app/data/currency.json` — supported currencies
- Radix UI for accessible primitives (radio group), Lucide for icons
- next-themes for dark/light mode, Sonner for toasts

## Git Workflow

- Commits go directly to main
- Husky pre-commit hook auto-formats staged files via pretty-quick
