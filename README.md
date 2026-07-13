# MPM — Max Perform Method

Web pre športového kouča Maxima Malovca (MPM™ — Max Perform Method): diagnostika, návrat k športu po zranení, výkonnostný koučing a výživa. Dvojjazyčný obsah (SK/EN).

## Tech stack

React 19 + Vite + TypeScript + Tailwind CSS v4 (framer-motion pre animácie, react-router HashRouter).

## Spustenie

```bash
cd fittrack
npm install
npm run dev
```

Produkčný build: `npm run build` · lint: `npm run lint`

## Štruktúra

Celá aplikácia žije v podpriečinku [`fittrack/`](fittrack/) — zdrojový kód v `fittrack/src/`, obsah/texty v `fittrack/src/i18n/` (sk.ts / en.ts), obrázky v `fittrack/public/`. Deploy beží cez Vercel (Root Directory = `fittrack`).

## TODO (tech-debt, neblokujúce)

Appka žije v podpriečinku `fittrack/`. Do budúcna zvážiť presun do koreňa repa pre čistejšiu štruktúru (vyžaduje úpravu Vercel Root Directory + `vercel.json`). Neriešiť, kým web funguje — spraviť pri väčšej reštrukturalizácii (napr. ak pribudne backend).
