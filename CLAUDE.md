# CLAUDE.md — MPM™ (Max Perform Method)

Web pre športového kouča (rehabilitácia + výkon). React + Vite + TypeScript + Tailwind. Jazyk obsahu: SK (SK/EN prepínač cez `src/i18n/{sk,en}.ts`). Appka žije v podpriečinku `fittrack/`.

## Značka — NEMENIŤ

- Logo/skratka: **MPM™** (vždy ostáva) · plný názov: **Max Perform Method** (caps: MAX PERFORM METHOD)
- Osobné meno kouča: **Maxim Malovec** (nemeniť)
- Kontakt: maximmalovec8@gmail.com · Instagram: @maxim.malovec
- Kredencie: Mgr. FTVŠ UK · Registrovaný športový odborník — Ministerstvo cestovného ruchu a športu SR (vždy celý názov)

## Dizajn

- Paleta: cream `#F5F1E8`, walnut `#3A3A38`, brown `#5C4433`, gold `#CC9544` + terracotta `#C36F4E` (akcenty len CTA/highlight), sage `#7A7C4E`. NEPRIDÁVAŤ nové farby. Tokeny v `src/index.css` (`@theme`, Tailwind v4 CSS-first, žiadny tailwind.config.js).
- Serif display nadpisy, sans body. Estetika: prémiová, striedma (Apple/WHOOP/Technogym úroveň). ŽIADNE carousels, ťažký parallax, autoplay, particles.
- Vizuálny motív: „signature movement line" (animovaná SVG krivka).
- Animácie: jemné (300–600 ms, ease-out), `whileInView`; prefers-reduced-motion fallback POVINNÝ (globálne cez `MotionConfig reducedMotion="user"` v App.tsx).

## Štruktúra webu

- Top nav: Nájdi svoju cestu · Výživa · Čo pre teba funguje · O mne · Kontakt | CTA Rezervácia | SK/EN vpravo
- Footer: brand + pečate + kontakt vľavo, navigácia vpravo; kontakt = celý riadok klikateľný; ŽIADNE duplicity odkazov
- Booking wizard: žije pod „Nájdi svoju cestu" (`/find-your-path`): pilier → (Návrat k športu: bolesť/čas/lokalizácia) → forma → platba „Spustiť môj plán"
- Piliere: 1. Výkonnostný koučing · 2. Návrat k športu · 3. LTAD / Pohybová príprava
- Pečate dôvery (About + footer, cez `TrustSealsRow`): Ministerstvo + FTVŠ UK + MPM monogram. **WHO NIKDY ako logo/pečať** — len textová zmienka na Výžive.

## Pravdivosť obsahu — KRITICKÉ

- Žiadne vymyslené čísla, štúdie, DOI ani referencie. Nové číselné tvrdenia označ `[overiť]` a čakaj na potvrdenie.
- Potvrdené čísla: 5-krokový proces · kontrola každé 4 týždne · 10–15 meraných parametrov.
- Research/FAQ referencie: priame URL len pre nezávisle overené PMID/PMC; ostatné cez PubMed vyhľadávanie názvu.
- Zdravotný disclaimer ostáva (nie náhrada lekárskej starostlivosti). Zdravotné údaje v dotazníku = čl. 9 GDPR → GDPR súhlas povinný pred odoslaním.

## Platby

Stripe VŽDY TEST MODE, ceny placeholder. Neprepínať na produkčné kľúče bez výslovného pokynu.

## Git / deploy

- Remote: `maxperformmethod-oss/MPM`, commit email `maxperformmethod@gmail.com`.
- Vercel: Root Directory = `fittrack`, auto-deploy z main. Push = automatický deploy.
- Pred KAŽDÝM commitom: over, že `.env.local`/kľúče nie sú v stage. Ak áno → STOP.
- Nepushuj bez výslovného pokynu, ak zadanie hovorí „len lokálne".

## VERIFICATION PROTOKOL — po každej zmene, automaticky

Nepovažuj úlohu za hotovú bez tohto. Nečakaj na vyzvanie.

1. **Statika:** `npm run build` čisté · oxlint čisté (2 predexistujúce warningy OK: only-export-components v Button.tsx a I18nContext.tsx) · `tsc -b` (NIE `tsc --noEmit` — je no-op kvôli `"files": []`)
2. **Playwright** (reálny prehliadač — Chromium nainštalovaný v `%LOCALAPPDATA%\ms-playwright`; npm balík `playwright` inštalovať `--no-save` do `fittrack/`, skript musí bežať zvnútra `fittrack/` kvôli module resolution): over presne to, čoho sa zmena týka:
   - wizard/formulár → prejdi VŠETKY kroky, over prechody aj validáciu
   - odkazy → href + `rel="noopener noreferrer"` pri externých
   - obrázky → `naturalWidth > 0` (jsdom toto NEVIE — obrázky len Playwright alebo `sharp().metadata()`)
   - responzívnosť → 375 / 768 / 1280 px (`scrollWidth ≤ clientWidth`)
   - konzola → žiadne errory (pozor: konzola drží históriu — kontroluj časy správ)

Pamätaj: „build čisté" ≠ funkčné. Runtime chyby (provider/context, HMR artefakty, poškodené assety) build nechytí.

**Report (krátky, štruktúrovaný):** BUILD/LINT/TSC ✅/❌ · PLAYWRIGHT [čo overené] ✅/❌ · KONZOLA čistá/errory · ZMENENÉ SÚBORY · `[overiť]` nové čísla · NEISTÉ.

## Štýl práce

- Rob len požadovaný diff. Nemeniť nesúvisiace veci.
- Placeholder obsah (testimonials Klient A/B/C, ceny) neoznačovať za finálny.
- Dev server: pozor na zombie procesy a OneDrive lock na `dist/` — overovací build robiť do scratch adresára mimo OneDrive (`npx vite build --outDir <temp> --emptyOutDir`), potom temp zmazať. Nikdy nekillovať procesy bez opýtania.
- Token-efektívne: jeden plán, žiadne opakované re-analýzy tých istých súborov.

## Tech-debt (neblokujúce, na neskôr)

- Appka v podpriečinku `fittrack/` — zvážiť presun do koreňa repa (vyžaduje zmenu Vercel Root Directory + `vercel.json`). Riešiť až pri väčšej reštrukturalizácii (napr. pridanie backendu). Web funguje — nerefaktorovať bezdôvodne.
- `VITE_PREVIEW_KEY_HASH` nie je nastavený na Verceli — admin preview na produkcii vypnutý (bezpečný default). Doplniť, keď bude treba.
- Testimonials + reálne ceny + právna kontrola Terms/GDPR pred spustením naostro.
