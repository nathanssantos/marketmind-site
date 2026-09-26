# MarketMind landing page

Marketing site for [MarketMind](https://github.com/nathanssantos/marketmind), an open-source desktop trading workstation for Binance. Live at [marketmind-app.vercel.app](https://marketmind-app.vercel.app).

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · next-intl (en, pt, es, fr) · next-themes · lucide-react · Vitest.

## Scripts

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve the production build
pnpm test         # vitest, run once
pnpm lint         # eslint, zero warnings allowed
pnpm type-check   # tsc --noEmit
```

## Where things live

- `src/messages/{en,pt,es,fr}.json` — all copy. The four files must have the same keys (`__tests__/translations.test.ts` enforces it). Write English first, then translate.
- `src/config/site.ts` — URLs, navigation, the numbers shown in the Stats section and the MCP server tool counts. Every number here is counted from the MarketMind repository at release time, not estimated.
- `src/components/sections/` — one component per page section, in the order used by `src/app/[locale]/page.tsx`.
- `public/images/screenshot-*.png` — captured from the app by `scripts/visual/marketing-screenshots.mjs` in the MarketMind repository. Regenerate them on every release that changes the UI (see `docs/RELEASE_PROCESS.md` there).
- `src/app/[locale]/opengraph-image.tsx` — the social preview image, rendered from the hero copy.

## Release checklist

1. Bump `siteConfig.stats.version` in `src/config/site.ts`.
2. Regenerate the screenshots from the MarketMind repository.
3. Update any stat that changed (strategies, indicators, MCP tools, tests).
4. `pnpm test && pnpm lint && pnpm type-check && pnpm build`, then push to `main`. Vercel deploys automatically.

## License

MIT.
