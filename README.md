# City Compass Pro

**City Compass Pro** is a premium city exploration web app built with React + TypeScript + Vite. Discover verified global hubs (coworking, nightlife, art, cafes, hotels, fitness), search by categories, and navigate curated location pages in a modern, mobile-first experience.

## 🚀 Why this app is world-class

- Fast, responsive, accessible UI with Tailwind + shadcn components
- Interactive hero search, hub cards, category grid, and map explorer
- Data-driven hub detail pages with location, services, verified status, and live reviews
- Lightweight architecture optimized for rapid prototyping and production deployment

## ✨ Core features

- Global city hub discovery (142+ cities model)
- Search and filter by category directly from hero area
- Featured hub cards, rating, visitors, and distance
- Hub detail route (`/hub/:slug`) with full hub metadata
- Tailwind-based responsive layout with sleek modern design
- Toasts and command palette interactions

## 📦 Tech stack

- **Vite** (blazing-fast dev + production builds)
- **React** + **TypeScript**
- **React Router** for client-side navigation
- **Framer Motion** for subtle UI animations
- **shadcn/ui** components for design system consistency
- **Tailwind CSS** for style utilities
- **React Query** for scalable data state (already configured)
- **Soroban / Stellar** for future on-chain hub persistence and decentralized city state
- **Rust backend (Actix Web)** as API middleware and smart contract integration layer

## 🧭 Repository structure

- `src/main.tsx` — App entrypoint
- `src/App.tsx` — routing + provider setup
- `src/pages/Index.tsx` — home view with hero, stats, categories, map, featured hubs
- `src/pages/HubDetail.tsx` — single hub detail page
- `src/data/hubs.ts` — hub fixtures and structured hub data
- `src/components/` — reusable UI components (Navbar, HubCard, SearchBar, etc.)
- `src/components/ui/` — shadcn UI primitives and shared components
- `backend/` — Rust Actix Web API backend scaffold and integration layer
- `soroban-contract/` — Soroban smart contract scaffold for on-chain hub persistence

## ▶️ Quick start (local development)

```bash
cd city-compass-pro
npm install
npm run dev
```

Then open http://localhost:5173.

## ✅ Build for production

```bash
npm run build
npm run preview
```

## 🔧 Key conventions

- Use **absolute imports** from `@/...` (configured in `tsconfig.json`)
- Keep data in `src/data` and UI layout in `src/components`
- Add new routes in `src/App.tsx` before the catch-all `*` route

## 🧪 Tests

This project uses Vitest.

```bash
npm run test
```

## 🎨 Design system

The app uses shadcn UI with custom utilities in `src/components/ui/*` and consistent CSS variables through Tailwind.

## 📌 Deployment

Deploy to any static host (Vercel, Netlify, Cloudflare Pages). Build output is in `dist/`.

Example Vercel command:

```bash
vercel --prod
```

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/<name>`)
3. Code, lint, and test
4. Open a PR with summary and smoke-test steps

## 📝 Notes for maintainers

- Add new hubs to `src/data/hubs.ts` and they automatically show in the listing.
- For new detail pages, add a route in `src/App.tsx` and ensure slug mapping uses `hubs` dataset.

---

Built for rapid prototyping and production-grade city marketplace experiences.
