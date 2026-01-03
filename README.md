<div align="center">

<img src="./public/bannerX.svg" alt="Demon Host Hub" width="100%" />

<p><b>Demon Host Hub</b> is a modern, animated landing page UI for a VPS/RDP hosting brand — built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui (Radix UI).</p>

<p>
<img src="https://img.shields.io/badge/Vite-5.x-1f2937?style=for-the-badge&logo=vite&logoColor=ffd369&colorA=020617" />
<img src="https://img.shields.io/badge/React-18-1f2937?style=for-the-badge&logo=react&logoColor=61dafb&colorA=020617" />
<img src="https://img.shields.io/badge/TypeScript-5.x-1f2937?style=for-the-badge&logo=typescript&logoColor=4fa3ff&colorA=020617" />
<img src="https://img.shields.io/badge/Tailwind-3.x-1f2937?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8&colorA=020617" />
	
</p>
</div>

---

## Highlights

- Animated hero + background (Framer Motion)
- Product sections: providers gallery, trust badges, pricing cards, OS selector
- Component-driven UI using shadcn/ui + Radix primitives
- Fast dev server via Vite (configured to run on port `8080`)

---

## Preview

> Add a short demo GIF to make this README pop.

<div align="center">

<img src="./public/preview.gif" alt="Demo preview" width="100%" />
</div>

### How to create `public/preview.gif`

- Record a quick screen capture of the homepage (10–20 seconds).
- Export as a GIF named `preview.gif` and put it in `public/`.
- Keep it lightweight (recommended: 6–12 FPS, ~900–1200px width).

---

## Quick Start

### Prerequisites

- Node.js 18+ (recommended)
- npm (or pnpm/yarn — adjust commands accordingly)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will start on:

- `http://localhost:8080`

---

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run build:dev` — build using development mode
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

---

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS + tailwindcss-animate
- shadcn/ui + Radix UI
- Framer Motion (animations)
- React Router (routing)

---

## Project Structure

```text
src/
	components/       Reusable UI sections (Hero, Navbar, PricingCards, etc.)
	components/ui/    shadcn/ui primitives
	context/          App state (OrderContext)
	pages/            Route pages (Index, NotFound)
	lib/              Utilities
```

---

## Notes

- The main landing page is composed in `src/pages/Index.tsx` using sections like `Hero`, `PricingCards`, and `OSSelector`.
- If you want the README badges to reflect your GitHub repo (stars, license, deploy), tell me your repo URL and I’ll switch them to repo-specific badges.

---

## License

No license file is currently included. If you want, I can add a `LICENSE` (MIT/Apache-2.0/GPL-3.0/etc.) and update this section.
