# CLAUDE.md

Návod pre Claude Code pri práci v tomto repe.

## Projekt

MPM™ (Max Perform Method) — dvojjazyčný (SK/EN) web športového kouča. Celá appka je v podpriečinku `fittrack/` (React 19 + Vite + TypeScript + Tailwind CSS v4 + framer-motion, HashRouter). Deploy: GitHub → Vercel (Root Directory = `fittrack`).

## Príkazy (spúšťať v `fittrack/`)

- `npm run dev` — dev server
- `npm run build` — `tsc -b && vite build`
- `npm run lint` — oxlint (2 známe neškodné warningy: only-export-components v Button.tsx a I18nContext.tsx)

## Známe úskalia

- **OneDrive lock:** `npm run build` lokálne často padá s EPERM na `dist/` (OneDrive sync). Overovací build robiť do scratch adresára: `npx tsc -b && npx vite build --outDir <temp> --emptyOutDir`, potom temp zmazať. Nikdy nekillovať procesy kvôli `dist/` bez opýtania.
- **Case-sensitivity:** Windows FS maskuje rozdiely veľkých/malých písmen v cestách — na Verceli (Linux) sa prejavia. Cesty k assetom písať presne.
- Žiadny test framework v repe — pri potrebe runtime overenia dočasne nainštalovať vitest+jsdom (`npm install --no-save`), po overení odinštalovať a zmazať testovacie súbory.

## Konvencie

- **Všetky texty** cez i18n slovníky `src/i18n/sk.ts` + `en.ts` (`Dict = typeof en` — oba súbory musia mať zhodnú štruktúru). Žiadne hardcodované texty v komponentoch.
- Tailwind v4 CSS-first: dizajnové tokeny v `src/index.css` (`@theme`) — cream/paper/ink/gold/terracotta/sage. Žiadny tailwind.config.js.
- Animácie: framer-motion, `MotionConfig reducedMotion="user"` je globálne v App.tsx; nové animácie musia mať reduced-motion fallback.
- Fotky: WebP v `public/photos/` (responzívne cez komponent `Photo`), pečate/erby v `public/photos2/`.
- `src/data/researchFaq.ts` a Research obsah: prísna citačná politika — žiadne vymyslené štúdie/DOI/URL; neisté referencie radšej vynechať.
- Commity/push len na explicitné vyžiadanie, jednoducho (jeden čistý commit, žiadne premenovávanie súborov navyše). Pred commitom overiť, že `.env.local`/kľúče nie sú v stage.

## TODO (tech-debt, neblokujúce)

Presun appky z `fittrack/` do koreňa repa — viď README.
