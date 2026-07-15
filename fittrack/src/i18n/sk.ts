import type { Dict } from "./en";

export const sk: Dict = {
  nav: {
    about: "O mne",
    approach: "Ako to funguje",
    findYourPath: "Trénuj s nami",
    assessment: "Diagnostika",
    results: "Výsledky",
    research: "Čo pre teba funguje",
    nutrition: "Výživa",
    contact: "Kontakt",
    bookAssessment: "Rezervácia",
  },

  hero: {
    eyebrow: "MPM™ — MAX PERFORM METHOD",
    titleLines: ["Hýb sa lepšie.", "Podávaj výkon.", "Zostaň v hre."],
    lead: "MPM™ pomáha športovcom a aktívnym ľuďom hýbať sa bez bolesti, znovu vybudovať silu a vrátiť sa k výkonu — cez koučing postavený na diagnostike.",
    checklist: [
      "Koučing založený na dôkazoch",
      "Mgr. FTVŠ UK",
      "Registrovaný športový odborník",
      "Výkon & rehabilitácia",
    ],
    badges: [
      "Pohybová diagnostika",
      "Výkonnostné testovanie",
      "Založené na dôkazoch",
      "Individuálny plán",
    ],
    ctaPrimary: "Rezervácia",
  },

  home: {
    credentialsStrip: [
      "Mgr. FTVŠ UK",
      "Registrovaný športový odborník",
      "Športová veda",
      "Evidence-Based",
      "Výkon & rehabilitácia",
    ],
    whoFor: {
      eyebrow: "PRE KOHO TO JE",
      title: "Pre ľudí, ktorí to so svojím telom myslia vážne.",
      forTitle: "MPM™ je pre teba, ak",
      forItems: [
        "Vraciaš sa k športu po zranení alebo operácii",
        "Chceš tvrdo trénovať bez opakujúcej sa bolesti",
        "Očakávaš rozhodnutia založené na dátach, nie na odhadoch",
      ],
      notForTitle: "Pravdepodobne to nie je pre teba, ak",
      notForItems: [
        "Hľadáš rýchle riešenie bez aktívnej práce",
        "Chceš generický plán namiesto individuálneho procesu",
      ],
    },
    pillars: {
      eyebrow: "TRÉNUJ S NAMI",
      title: "Tri cesty. Jedna metóda.",
      lead: "Každá cesta začína rovnakou objektívnou diagnostikou — a pokračuje procesom, ktorý tvoja situácia potrebuje.",
      choose: "Preskúmať túto cestu",
    },
    method: {
      eyebrow: "MPM METÓDA",
      title: "Proces, nie sľub.",
      lead: "Päť krokov, ktoré premenia diagnostiku na návrat — merané, koučované a pretestované, kým nie si späť tam, kam patríš.",
      cta: "Preskúmať celú metódu",
    },
    assessmentHighlight: {
      eyebrow: "OBJEKTÍVNA DIAGNOSTIKA",
      title: "Rozhodnutia postavené na dátach.",
      lead: "Každý plán začína štruktúrovanou pohybovou a výkonnostnou diagnostikou — pokrok sa meria, nepredpokladá.",
      cta: "O diagnostike",
      metrics: [
        { text: "30–60 min diagnostika s konzultáciou", pending: false },
        { text: "Kontrola každé 4 týždne", pending: false },
        { text: "10–15 meraných parametrov", pending: false },
        { text: "Vstupné · kontrolné · výstupné testovanie", pending: false },
        { text: "Prehľadný písomný report", pending: false },
      ],
      stepCount: { value: 5, suffix: "", label: "krokov MPM metódy" },
      chartLabels: ["Vstup", "4. týždeň", "8. týždeň", "Pretest"],
      chartCaption: "Ilustračný priebeh skóre pripravenosti",
    },
    testimonials: {
      eyebrow: "RECENZIE",
      title: "Čo hovoria klienti.",
      cta: "Všetky výsledky",
    },
  },

  pillars: {
    "performance-coaching": {
      title: "Výkonnostný koučing",
      short: "Trénuj so štruktúrou. Napreduj s dátami.",
      description:
        "Individuálny silový a výkonnostný koučing postavený na dátach z diagnostiky — pre športovcov a aktívnych ľudí, ktorí chcú merateľný pokrok. Špecificky pre hokej a tenis: explozivita, zmena smeru a rotačná sila — nie generický silový tréning.",
    },
    "return-to-sport": {
      title: "Bolesť",
      short: "Vráť sa po zranení alebo operácii s istotou, nie s odhadmi.",
      description:
        "Štruktúrovaný proces návratu k športu po zranení alebo operácii — od pohybu bez bolesti, cez progresívnu rehabilitáciu, až po plnú tréningovú záťaž, vedený objektívnym pretestovaním. Vrátane návratu po rekonštrukcii ACL — najčastejšie u hokejistov a tenistov, kde je návrat na plnú rýchlosť a explozivitu bez kompromisu nutnosťou.",
    },
    ltad: {
      title: "Rozvoj mladých športovcov",
      short: "Buduj pohybové základy systematicky, nie náhodne.",
      description:
        "Dlhodobý, štruktúrovaný rozvoj pohybových základov — sila, koordinácia, rýchlosť a stabilita budované systematicky, nie náhodne. Postavené na LTAD modeli dlhodobého rozvoja športovca.",
    },
  },

  wizard: {
    eyebrow: "TRÉNUJ S NAMI",
    title: "Povedz nám, čo riešiš.",
    lead: "Vyber cestu najbližšiu tvojej situácii. MPM™ ťa nasmeruje k správnej diagnostike a koučingovému procesu.",
    choose: "Vybrať",
    back: "Späť",
    startOver: "Začať odznova",
    exploreApproach: "Preskúmať MPM Metódu",
    stepLabels: {
      start: "Cesta",
      intake: "O tebe",
      area: "Oblasť",
      sport: "Šport",
      age: "Vek",
      ltadStage: "Veková kategória",
      format: "Forma",
      summary: "Zhrnutie",
    },
  },

  intake: {
    title: "Ešte pár otázok.",
    painQuestion: "Máš aktuálne bolesť?",
    painYes: "Áno",
    painNo: "Nie",
    timeQuestion: "Ako dávno je zranenie alebo operácia?",
    timeOptions: {
      "under-6-weeks": "Menej ako 6 týždňov",
      "6-12-weeks": "6 – 12 týždňov",
      "3-6-months": "3 – 6 mesiacov",
      "over-6-months": "Viac ako 6 mesiacov",
    },
    continue: "Pokračovať",
    areaTitle: "Kde je problém lokalizovaný?",
  },

  booking: {
    areas: {
      ankle: "Členok",
      knee: "Koleno",
      hip: "Bedro",
      shoulder: "Rameno",
    },
    sportTitle: "Ktorý šport robíš?",
    sports: {
      hockey: "Hokej",
      tennis: "Tenis",
      football: "Futbal",
      running: "Beh",
      other: "Iný šport",
    },
    ageTitle: "Vyber vekovú kategóriu.",
    ages: {
      "under-12": "do 12 rokov",
      "12-15": "12 – 15 rokov",
      "16-18": "16 – 18 rokov",
      adult: "18+",
    },
    ltadTitle: "Vyber vekovú kategóriu.",
    ltadLead:
      "Každý vek má svoje citlivé obdobia rozvoja — tréning sa prispôsobuje tomu, na čo je telo práve najlepšie nastavené.",
    ltadStages: {
      "6-9": {
        range: "~6 – 9 rokov",
        title: "Pohybová gramotnosť",
        desc: "Základná pohybová gramotnosť — koordinácia, rovnováha, priestorové vnímanie a radosť z pohybu.",
      },
      "9-12": {
        range: "~9 – 12 rokov",
        title: "Zlatý vek učenia",
        desc: "Najcitlivejšie obdobie motorického učenia — rýchlosť, obratnosť, reakčná rýchlosť a technika nových pohybov.",
      },
      "12-16": {
        range: "~12 – 16 rokov",
        title: "Budovanie kapacity",
        desc: "Rozvoj sily a vytrvalosti v súlade s rastovým špurtom, postupná špecializácia pohybu.",
      },
      "16-plus": {
        range: "16+ rokov",
        title: "Výkonnostná príprava",
        desc: "Individualizovaná výkonnostná príprava — sila, výkon a špecifické nároky športu.",
      },
    },
    formatTitle: "Ako chceš trénovať?",
    formats: {
      online: "Online tréning",
      "in-person": "Individuálny tréning (osobne)",
    },
    summaryTitle: "Skontroluj výber a spusti plán.",
    summaryLabel: "Vybrané",
    priceLabel: "Orientačná cena",
    pricePlaceholder: "DOPLNIŤ",
    priceNote: "Cena je zatiaľ len orientačná — finálna suma bude potvrdená pred platbou.",
    payCta: "Spustiť môj plán",
    testModeNote: "Platba prebieha cez Stripe (testovací režim), kým nie je spustená ostrá prevádzka.",
    comingSoonNote:
      "Platobná brána sa ešte pripravuje — táto možnosť bude aktívna čoskoro. Napíš mi cez kontaktný formulár a dohodneme sa priamo.",
  },

  approach: {
    eyebrow: "MPM METÓDA",
    title: "Metóda, ktorá stojí za výsledkami.",
    lead: "MPM™ je opakovateľný proces založený na dôkazoch — nie zbierka náhodných tréningov. Každý klient prechádza rovnakými piatimi krokmi.",
    steps: [
      {
        title: "Diagnostika",
        body: "Štruktúrovaná pohybová a výkonnostná diagnostika stanoví tvoje objektívne východisko — mobilitu, silu, asymetrie a nároky tvojho športu.",
      },
      {
        title: "Analýza",
        body: "Dáta interpretujeme v kontexte tvojej histórie, športu a cieľov, aby sme našli, čo ťa skutočne limituje — nie len to, kde ťa to bolí.",
      },
      {
        title: "Plán",
        body: "Dostaneš individuálny fázovaný plán s jasnými míľnikmi — čo budujeme, v akom poradí a podľa čoho spoznáme, že to funguje.",
      },
      {
        title: "Koučing",
        body: "Vedené tréningy s technickou spätnou väzbou a progresívnym zaťažovaním — upravované týždeň po týždni podľa toho, ako reaguješ.",
      },
      {
        title: "Pretest & návrat",
        body: "Pravidelné pretestovanie ťa porovnáva s tvojím východiskom aj s nárokmi tvojho športu — rozhodnutia o návrate tak stoja na dátach, nie na pocitoch.",
      },
    ],
    bridge: {
      eyebrow: "MOST",
      title: "Medzi fyzioterapiou a výkonom.",
      body: "Väčšina ľudí uviazne v medzere medzi ukončením fyzioterapie a skutočnou pripravenosťou podávať výkon. MPM™ žije presne v tejto medzere: rehabilitačné myslenie spojené s praxou silového a kondičného tréningu — aby si nebol len bez bolesti, ale odolný.",
    },
  },

  assessmentPage: {
    eyebrow: "DIAGNOSTIKA & TESTOVANIE",
    title: "Vedz presne, kde stojíš.",
    lead: "Každá MPM™ cesta začína štruktúrovanou diagnostikou. Odstraňuje odhady z tréningu aj z rozhodnutí o návrate k športu.",
    includedTitle: "Čo diagnostika obsahuje",
    comingSoonBadge: "Čoskoro",
    included: [
      {
        title: "Pohybový skríning",
        body: "Štruktúrovaný pohľad na to, ako sa hýbeš — mobilita, kontrola a kompenzačné vzorce v základných pozíciách.",
        comingSoon: false,
      },
      {
        title: "Testovanie sily a asymetrií",
        body: "Objektívne meranie sily s porovnaním strán — nerovnováhy sa kvantifikujú, nie odhadujú.",
        comingSoon: false,
      },
      {
        title: "Športovo-špecifické východiská",
        body: "Testy vybrané podľa nárokov tvojho športu a cieľov — výbušnosť, kapacita a tolerancia tam, kde na tom záleží.",
        comingSoon: false,
      },
      {
        title: "Písomný report",
        body: "Odchádzaš s prehľadným písomným zhrnutím: čo sa meralo, čo to znamená a aký je plán.",
        comingSoon: false,
      },
      {
        title: "Pretestovanie",
        body: "Rovnaké testy sa opakujú v kľúčových míľnikoch — pokrok aj rozhodnutia o návrate stoja na tvojich vlastných dátach.",
        comingSoon: false,
      },
      {
        title: "Testovanie asymetrie s dynamometrickými platňami",
        body: "Presné meranie silovej asymetrie medzi končatinami na dynamometrických platniach — pre ešte presnejšie dáta o rozložení sily a záťaži.",
        comingSoon: true,
      },
    ],
    dataNote:
      "Dáta z testovania sú podpora rozhodovania, nie verdikt prešiel/neprešiel. Rozhodnutia o návrate k športu sú vždy multifaktoriálne — čísla rozhodnutie informujú, tvoj kontext ho dopĺňa.",
    faqTitle: "Časté otázky",
    faq: [
      {
        q: "Potrebujem odporúčanie od lekára?",
        a: "Nie. Diagnostiku si môžeš rezervovať priamo — odporúčanie od lekára ani fyzioterapeuta nie je potrebné.",
      },
      {
        q: "Ako skoro po zranení alebo operácii môžem prísť?",
        a: "Hneď, ako ti lekár alebo chirurg povolí aktívnu rehabilitáciu. Ak si nie si istý/á správnym načasovaním, napíš mi cez kontaktný formulár a poradíme sa spolu.",
      },
      {
        q: "Čo si mám priniesť?",
        a: "Tréningové oblečenie, obuv do interiéru a relevantné lekárske správy alebo snímky, ak ich máš. Po operácii prines aj pooperačný protokol, ak ti bol vydaný.",
      },
      {
        q: "Čo nasleduje po diagnostike?",
        a: "Dostaneš písomný report a návrh plánu. Ak budeme pokračovať spolu, plán sa stane tvojím individuálnym programom — koučovaným, progresívnym a pretestovaným.",
      },
    ],
  },

  resultsPage: {
    eyebrow: "VÝSLEDKY",
    title: "Skutoční ľudia. Meraný pokrok.",
    lead: "Výsledky MPM™ procesu — konkrétne, so súhlasom klientov a úprimné v tom, ako práca naozaj vyzerala.",
    caseStudies: [
      {
        name: "Klient A",
        sport: "Tenis",
        situation: "Návrat po rekonštrukcii ACL",
        outcome: "Návrat na turnajovú úroveň so symetrickými silovými hodnotami a plnou rýchlosťou pri zmene smeru.",
        quote:
          "Prvýkrát som presne vedel, kde stojím — každá fáza mala za sebou čísla, nie len pocity.",
      },
      {
        name: "Klient B",
        sport: "Hokej",
        situation: "Príprava na sezónu — explozivita a rýchlosť korčuľovania",
        outcome: "Zlepšenie výbušnosti a zmeny smeru bez poklesu výkonu počas celej sezóny.",
        quote: "Trénoval som podľa čísel, nie podľa pocitu — bolo to cítiť už na prvých zápasoch.",
      },
      {
        name: "Klient C",
        sport: "Rekreačný beh",
        situation: "Opakovaná bolesť kolena pri zvýšení tréningového objemu",
        outcome: "Polmaratónsky blok dokončený bez bolesti po 12-týždňovom progresívnom pláne.",
        quote: "Diagnostika našla to, čo tri mesiace hádania nie.",
      },
    ],
    disclaimer:
      "Prípadové štúdie zdieľame so súhlasom klientov. Individuálne výsledky závisia od východiska, konzistentnosti a kontextu.",
  },

  aboutPage: {
    eyebrow: "O MNE",
    title: "Maxim Malovec",
    lead: "Kouč, ktorý ťa nevráti len do hry — vráti ťa tam silnejšieho, ako si bol pred zranením.",
    credentials: [
      "Tréner V. kvalifikačného stupňa — najvyššia trénerská kvalifikácia na Slovensku",
      "Mgr. — Fakulta telesnej výchovy a športu, Univerzita Komenského (FTVŠ UK)",
      "Registrovaný športový odborník — Ministerstvo cestovného ruchu a športu SR",
      "3 roky praxe priamo so športovcami — hokej, tenis, návrat po zranení",
    ],
    story: [
      "Tri roky pracujem priamo v teréne so športovcami, ktorí si prešli tým najnáročnejším — rekonštrukciou ACL, dlhými rehabilitáciami, neistotou, či sa vôbec vrátia na pôvodnú úroveň. Najviac skúseností mám s hokejistami a tenistami, kde je návrat k plnému výkonu bez kompromisu na rýchlosti, sile a explozivite absolútna nutnosť — nie len „bez bolesti“.",
      "MPM™ vzniklo z jednoduchého pozorovania: príliš veľa športovcov uviazne v medzere medzi fyzioterapiou a skutočným výkonom. Prepustení, ale nie pripravení. Bez bolesti, ale bez istoty.",
      "Max Perform Method existuje preto, aby túto medzeru uzavrel — spája štruktúrovanú diagnostiku, rehabilitačné myslenie a prax silového a kondičného tréningu do jedného súvislého, merateľného procesu.",
    ],
    philosophyTitle: "Filozofia",
    philosophy:
      "Diagnostikovať úprimne, plánovať individuálne, koučovať zblízka — a nechať pretestovanie, nie názor, rozhodnúť, kedy si pripravený. Žiadne skratky, žiadne generické šablóny, žiadne hádanie.",
    trustSeals: {
      eyebrow: "PEČATE DÔVERY",
      ministryAlt: "Erb Ministerstva cestovného ruchu a športu SR",
      ftvsAlt: "Pečať Fakulty telesnej výchovy a športu Univerzity Komenského (FTVŠ UK)",
      mpmAlt: "Osobná pečať MPM™",
    },
  },

  researchPage: {
    eyebrow: "VÝSKUM",
    title: "Dôkazy, zrozumiteľne.",
    lead: "Praktické zhrnutia výskumu, ktorý formuje MPM™ proces — písané pre športovcov, nie pre akademikov.",
    comingSoon: "Článok už čoskoro",
    draftLabel: "DRAFT — len admin náhľad",
    draftTitle: "Rozpracované články",
    articles: [
      {
        title: "Návrat k športu po rekonštrukcii ACL: čo kritériá naozaj hovoria",
        tag: "Návrat k športu",
      },
      {
        title: "Pooperačné časové osi: prečo hojenie tkanív určuje podlahu, nie strop",
        tag: "Rehabilitácia",
      },
      {
        title: "Manažment záťaže: rozdiel medzi tvrdým tréningom a tréningom naslepo",
        tag: "Výkon",
      },
    ],
  },

  researchFaq: {
    title: "Mýty a fakty",
    lead: "20 najčastejších mýtov o bolesti, rehabilitácii a tréningu — a čo o nich naozaj hovorí výskum.",
    verdictMyth: "MÝTUS",
    verdictFact: "FAKT",
    evidenceTitle: "Čo hovorí výskum",
    takeawayTitle: "Praktický záver",
    referencesTitle: "Referencie",
    readCta: "Prečítať výskum",
    disclaimer:
      "Obsah tejto stránky má vzdelávací charakter a nenahrádza lekársku diagnostiku, liečbu ani individuálne poradenstvo. Pri zdravotných ťažkostiach sa poraď s lekárom.",
    items: [
      {
        question: "Znamená bolesť vždy poškodenie tkaniva?",
        short: "Nie. Bolesť je ochranný signál mozgu, nie presný merač poškodenia.",
        evidence:
          "Podľa modernej definície bolesti (IASP) je bolesť komplexný zážitok ovplyvnený biologickými, psychologickými aj sociálnymi faktormi. Intenzita bolesti často nekorešponduje s rozsahom nálezu na tkanive — bolesť môže pretrvávať aj po zahojení a naopak.",
        takeaway:
          "Bolesť ber vážne, ale nerovná sa automaticky poškodeniu — dôležitý je kontext a postupná záťaž.",
      },
      {
        question: "Dokáže MRI vždy určiť príčinu bolesti?",
        short: "Nie. „Nálezy“ na MRI sú bežné aj u ľudí bez akejkoľvek bolesti.",
        evidence:
          "Systematické review ukázalo degeneratívne zmeny platničiek u 37 % bezpríznakových dvadsiatnikov a až 96 % osemdesiatnikov. Podobné nálezy (meniskus, chrupavka) sú časté aj v kolenách ľudí, ktorých nič nebolí.",
        takeaway:
          "MRI nález vyhodnocuj vždy spolu s klinickým vyšetrením — obraz sám o sebe nie je diagnóza.",
      },
      {
        question: "Máš prestať cvičiť, keď niečo bolí?",
        short: "Väčšinou nie. Tolerovateľná bolesť pri cvičení nie je prekážkou zotavenia.",
        evidence:
          "Meta-analýza ukázala, že cvičenie s tolerovateľnou bolesťou prinášalo pri chronických muskuloskeletálnych ťažkostiach krátkodobo lepšie výsledky než cvičenie striktne bez bolesti.",
        takeaway:
          "Pracuj s pravidlom tolerovateľnej bolesti (napr. do 3–4/10, ktorá do rána odznie) namiesto úplného vyhýbania sa pohybu.",
      },
      {
        question: "Je odpočinok lepší než pohyb?",
        short: "Pri väčšine bolestí pohybového aparátu nie — aktivita zotavenie urýchľuje.",
        evidence:
          "Cochrane review pri akútnej bolesti chrbta ukázalo, že rada „zostať aktívny“ vedie k lepším výsledkom než pokoj na lôžku. Moderné klinické odporúčania konzistentne stavajú na aktívnom prístupe ako prvej voľbe.",
        takeaway:
          "Uprav záťaž, nevynuluj ju — relatívny odpočinok a postupný návrat fungujú lepšie ako pasívne čakanie.",
      },
      {
        question: "Znamená „žiadna bolesť“, že si pripravený na šport?",
        short: "Nie. Absencia bolesti nehovorí nič o sile, výbušnosti ani kontrole pohybu.",
        evidence:
          "Len 55 % športovcov po rekonštrukcii ACL sa vráti k súťažnému športu — a mnohí sa vracajú bez splnenia objektívnych kritérií, s výrazne vyšším rizikom opätovného zranenia.",
        takeaway: "Pripravenosť sa meria testami (sila, symetria, výkon), nie len pocitom.",
      },
      {
        question: "Stačí čas po rekonštrukcii ACL?",
        short: "Nie. Kalendár nie je kritérium — rozhoduje splnenie objektívnych parametrov.",
        evidence:
          "V Delaware-Oslo kohorte malo 38,2 % športovcov, ktorí nesplnili kritériá návratu, opätovné zranenie — oproti 5,6 % u tých, ktorí kritériá splnili. Návrat pred 9. mesiacom bol navyše spojený s približne 7× vyšším rizikom nového zranenia.",
        takeaway: "Čas je nutná, nie postačujúca podmienka — testuj, netipuj.",
      },
      {
        question: "Má byť návrat k športu založený na testovaní?",
        short: "Áno. Objektívne kritériá preukázateľne znižujú riziko opätovného zranenia.",
        evidence:
          "Splnenie jednoduchých kritérií (sila, hop testy, čas) znížilo v Delaware-Oslo štúdii riziko opätovného zranenia o 84 %. Nesplnenie šiestich kritérií pred návratom bolo v ďalšej kohorte spojené so 4× vyšším rizikom ruptúry štepu.",
        takeaway: "Presne toto je jadro MPM prístupu — pretestovanie rozhoduje, nie pocit.",
      },
      {
        question: "Existuje jedna dokonalá technika cvičenia?",
        short: "Nie. Telo je adaptabilné a „ideálna“ technika sa líši podľa človeka a cieľa.",
        evidence:
          "Systematické review nenašlo jasný vzťah medzi flexiou chrbtice pri dvíhaní a bolesťou chrbta — „vždy rovný chrbát“ nie je magická ochrana. Variabilita pohybu je normálna a často žiaduca.",
        takeaway: "Techniku prispôsob štruktúre, cieľu a záťaži — a toleranciu buduj postupne.",
      },
      {
        question: "Sú hlboké drepy zlé pre kolená?",
        short: "Nie. Pri postupnej adaptácii sú hlboké drepy bezpečné a efektívne.",
        evidence:
          "Prehľad biomechanických štúdií nepotvrdil, že hlboký drep poškodzuje zdravé kolená — obavy o väzy a chrupavku sa pri rozumnej progresii záťaže nepotvrdili.",
        takeaway: "Rozhoduje dávkovanie a progresia, nie hĺbka sama o sebe.",
      },
      {
        question: "Je beh zlý pre kolená?",
        short: "Nie. Rekreačný beh je spájaný s nižším výskytom artrózy než sedavý život.",
        evidence:
          "Meta-analýza ukázala artrózu bedra/kolena u 3,5 % rekreačných bežcov oproti 10,2 % u nebežcov; riziko rástlo len pri extrémnych súťažných objemoch.",
        takeaway: "Beh v rozumnom objeme kolená skôr chráni — kľúčom je postupné budovanie záťaže.",
      },
      {
        question: "Je silový tréning nebezpečný pre deti?",
        short: "Nie. Pod odborným dohľadom je bezpečný a odporúčaný medzinárodným konsenzom.",
        evidence:
          "Medzinárodný konsenzus (2014) aj pozičný dokument NSCA potvrdzujú, že správne vedený silový tréning u detí a mládeže zlepšuje silu, zdravie kostí a znižuje riziko zranení — poškodenie rastových platničiek pri odbornom vedení nebolo potvrdené.",
        takeaway:
          "Odborne vedený silový tréning je pre mladých športovcov prínos, nie riziko — presne na tom stojí LTAD pilier.",
      },
      {
        question: "Je silový tréning nebezpečný pre starších?",
        short: "Nie. Je jednou z najúčinnejších intervencií proti strate svalov a funkcie.",
        evidence:
          "Pozičný dokument NSCA pre starších dospelých aj Cochrane review potvrdzujú, že progresívny silový tréning zlepšuje silu, fyzickú funkciu a kvalitu života aj vo vysokom veku.",
        takeaway: "Vek nie je kontraindikácia — je to dôvod začať.",
      },
      {
        question: "Je slabý core hlavná príčina bolesti chrbta?",
        short: "Nie. Bolesť chrbta je multifaktoriálna a „slabý core“ ju nevysvetľuje.",
        evidence:
          "Cochrane review ukázalo, že špecifické „motor control“ cvičenia nie sú účinnejšie než iné formy cvičenia. Kritické prehľady koncept core stability ako hlavnej príčiny bolesti spochybnili.",
        takeaway:
          "Cvič core, ak chceš byť silnejší — ale bolesť chrbta rieš komplexne (záťaž, spánok, stres, kondícia).",
      },
      {
        question: "Zabráni dokonalé držanie tela bolesti?",
        short: "Nie. Neexistuje jedna „správna“ postura, ktorá by chránila pred bolesťou.",
        evidence:
          "Systematický prehľad prehľadov nenašiel konzistentný kauzálny vzťah medzi posturou a bolesťou chrbta. Pohodlná, variabilná pozícia a pravidelný pohyb sú dôležitejšie než „vojenské“ držanie.",
        takeaway: "Najlepšia postura je tá ďalšia — meň pozície a hýb sa.",
      },
      {
        question: "Zabráni strečing zraneniam?",
        short: "Sám o sebe nie. Na prevenciu zranení má strečing minimálny efekt.",
        evidence:
          "Meta-analýza randomizovaných štúdií ukázala, že silový tréning výrazne znížil riziko zranení (preťaženia takmer o polovicu až dve tretiny), zatiaľ čo strečing preventívny efekt nepreukázal.",
        takeaway: "Prevenciu stavaj na sile a rozumnom dávkovaní — strečing má iné využitie.",
      },
      {
        question: "Rozbíja foam rolling fasciu?",
        short: "Nie. Mechanická „prestavba“ fascie valcom je prakticky nemožná.",
        evidence:
          "Matematické modely ukazujú, že na deformáciu hustej fascie by boli potrebné sily ďaleko presahujúce manuálny tlak. Efekty rollingu sú krátkodobé a pravdepodobne neurofyziologické (vnímanie, tolerancia), nie štrukturálne.",
        takeaway: "Roller pokojne používaj na krátkodobú úľavu — ale neočakávaj zmenu tkaniva.",
      },
      {
        question: "Sú svalové dysbalancie vždy problém?",
        short: "Nie. Určitá asymetria je normálna — najmä v asymetrických športoch.",
        evidence:
          "Prehľady vzťahu medzi asymetriami a výkonom či zraneniami ukazujú nekonzistentné výsledky; mnohí zdraví aj elitní športovci majú merateľné asymetrie bez ťažkostí.",
        takeaway:
          "Meraj a sleduj trend — zasahuj, keď asymetria súvisí s výkonom alebo návratom po zranení, nie pri každom rozdiele.",
      },
      {
        question: "Znamená pukanie kĺbov poškodenie?",
        short: "Nie. Pukanie je kavitácia plynu v kĺbovej tekutine, nie deštrukcia.",
        evidence:
          "Zobrazovanie v reálnom čase ukázalo, že zvuk vzniká tvorbou bubliny v synoviálnej tekutine. Dlhodobé sledovania nezistili u „pukačov“ vyšší výskyt artrózy — vrátane slávneho 60-ročného sebaexperimentu.",
        takeaway: "Bezbolestné pukanie je neškodné — rieš ho, len ak ho sprevádza bolesť či opuch.",
      },
      {
        question: "Sú pasívne terapie nutné?",
        short: "Nie sú základ. Kvalitné klinické odporúčania stavajú na aktívnom prístupe.",
        evidence:
          "Systematický prehľad kvalitných klinických guidelines pre muskuloskeletálnu bolesť konzistentne odporúča edukáciu, aktivitu a cvičenie ako prvú líniu; pasívne procedúry majú nanajvýš doplnkovú úlohu.",
        takeaway: "Masáž či prístroje môžu uľaviť — ale výsledok stavia aktívna práca.",
      },
      {
        question: "Je rehabilitácia skončená, keď zmizne bolesť?",
        short: "Nie. „Bez bolesti“ ešte neznamená „pripravený na záťaž“.",
        evidence:
          "Konsenzus o návrate k športu (Bern 2016) definuje návrat ako kontinuum riadené kritériami, nie symptómami. Kohortové dáta ukazujú, že práve po odznení bolesti bez splnenia kritérií je riziko opätovného zranenia najvyššie.",
        takeaway:
          "Rehabilitácia končí, keď zvládneš nároky svojho športu — potvrdené pretestom. Presne túto medzeru MPM™ zapĺňa.",
      },
    ],
  },

  nutritionPage: {
    eyebrow: "VÝŽIVA",
    title: "Palivo pre proces.",
    lead: "Výživa je v MPM™ podporný pilier — praktické vedenie v službách tvojich rehabilitačných a výkonnostných cieľov, nie samostatný diétny program.",
    whoNote:
      "Jedálničky zostavené v súlade s odporúčaniami a klasifikáciami Svetovej zdravotníckej organizácie (WHO).",
    points: [
      {
        title: "Najprv regenerácia",
        body: "Základy, ktoré podporujú hojenie tkanív a adaptáciu — bielkoviny, dostupnosť energie a konzistentnosť pred suplementmi.",
      },
      {
        title: "Postavené okolo tréningu",
        body: "Jednoduché stratégie dopĺňania energie prispôsobené tvojim tréningovým fázam — žiadne generické jedálničky.",
      },
      {
        title: "Udržateľné",
        body: "Návyky, ktoré udržíš počas celej sezóny — nie 30-dňová výzva, ktorú opustíš.",
      },
    ],
  },

  nutritionQuestionnaire: {
    eyebrow: "VÝŽIVA",
    cardTitle: "Výživa",
    cardShort: "Osobný jedálniček prispôsobený tvojim cieľom a chutiam.",
    startCta: "Vyplniť dotazník",
    stepLabels: {
      basics: "Základ",
      body: "Telo a cieľ",
      preferences: "Chute",
      health: "Zdravie",
      payment: "Platba",
    },
    back: "Späť",
    startOver: "Začať odznova",

    basics: {
      title: "Poď na to.",
      lead: "Pár otázok a nastavíme jedálniček presne na teba.",
      firstName: "Meno",
      lastName: "Priezvisko",
      email: "E-mail",
      phone: "Telefónne číslo",
      continue: "Pokračovať",
    },

    body: {
      title: "Telo a cieľ.",
      lead: "Tieto údaje sú základ pre výpočet tvojho energetického príjmu.",
      dob: "Dátum narodenia",
      gender: "Pohlavie",
      genderMale: "Muž",
      genderFemale: "Žena",
      weight: "Hmotnosť (kg)",
      height: "Výška (cm)",
      bodyFat: "Telesný tuk (%)",
      waist: "Obvod pása (cm)",
      calorieTitle: "Cieľový energetický príjem",
      calorieManual: "Zadať priamo",
      calorieCalculated: "Nechať vypočítať",
      calorieManualLabel: "Energetický príjem (kcal/24h)",
      calorieCalculatedNote: "Vypočítame ho za teba na základe zadaných údajov.",
      continue: "Pokračovať",
    },

    preferences: {
      title: "Chuťové preferencie.",
      lead: "Označ, čo máš rád, čo nie, a čo ti je jedno — pomôže nám to postaviť jedálniček, ktorý naozaj zješ.",
      categories: {
        meat: "Mäso",
        sides: "Prílohy",
        dairy: "Mlieko a mliečne produkty",
        fruitVeg: "Ovocie a zelenina",
        grains: "Obilniny, vločky",
        fats: "Oleje, maslá, masti",
        plantDrinks: "Rastlinné nápoje",
        bread: "Pečivo",
        other: "Ostatné",
      },
      items: {
        poultry: "Hydina",
        pork: "Bravčové",
        beef: "Hovädzie",
        veal: "Teľacie",
        game: "Divina",
        lamb: "Jahňacie",
        fish: "Ryby",
        seafood: "Morské plody",
        potatoes: "Zemiaky",
        rice: "Ryža",
        pasta: "Cestoviny",
        buckwheat: "Pohánka",
        quinoa: "Quinoa",
        couscous: "Kuskus",
        dumplings: "Knedle",
        yogurt: "Jogurty",
        cheese: "Syry",
        cowMilk: "Kravské mlieko",
        acidophilusMilk: "Acidofilné mlieko",
        subtropicalFruit: "Subtropické ovocie",
        temperateFruit: "Ovocie mierneho pásma",
        rootVeg: "Koreňová zelenina",
        leafyVeg: "Listová zelenina",
        fruitingVeg: "Plodová zelenina (paradajka...)",
        spinach: "Špenát",
        lentils: "Šošovica",
        barleyFlakes: "Jačmenné vločky",
        oatFlakes: "Ovsené vločky",
        cornFlakes: "Kukuričné vločky",
        buckwheatFlakes: "Pohánkové vločky",
        speltFlakes: "Špaldové vločky",
        ryeFlakes: "Ražné vločky",
        margarine: "Margarín",
        animalButter: "Živočíšne maslo",
        oliveOil: "Olivový olej",
        rapeseedOil: "Repkový olej",
        sunflowerOil: "Slnečnicový olej",
        lard: "Bravčová masť",
        soyMilk: "Sójové mlieko",
        almondMilk: "Mandľové mlieko",
        coconutMilk: "Kokosové mlieko",
        riceMilk: "Ryžové mlieko",
        speltMilk: "Špaldové mlieko",
        oatMilk: "Ovsené mlieko",
        buckwheatBread: "Pohánkové pečivo",
        wholegrainWheatBread: "Celozrnné pšeničné pečivo",
        wholegrainRyeBread: "Celozrnné ražné pečivo",
        whiteBread: "Biele pečivo",
        nuts: "Orechy",
        legumes: "Strukoviny",
        eggs: "Vajcia",
        mushrooms: "Hríby",
      },
      like: "Mám rád",
      neutral: "Je mi to jedno",
      dislike: "Nemám rád",
      expensiveTitle: "Nákladnejšie potraviny",
      expensiveLead: "Napríklad avokádo a podobné suroviny.",
      expensiveAllow: "Povoliť",
      expensiveDisallow: "Nepovoliť",
      continue: "Pokračovať",
    },

    health: {
      title: "Zdravotné údaje.",
      lead: "Posledný krok pred zostavením plánu — tieto údaje vidí len Maxim.",
      allergensTitle: "Alergény",
      allergensNote: "Ak tu nevidíš svoju alergiu, napíš ju do poznámok nižšie.",
      allergens: {
        pineapple: "Ananás",
        peanuts: "Arašidy",
        eggplant: "Baklažán",
        bananas: "Banány",
        whiteBread: "Biele pečivo",
        cowMilkProtein: "Bielkovina kravského mlieka",
        garlic: "Cesnak",
        citrus: "Citrusové plody",
        sugar: "Cukor",
        chickpeas: "Cícer",
        yeast: "Droždie",
        beans: "Fazuľa",
        grapefruit: "Grapefruit",
        peas: "Hrach",
        beef: "Hovädzie mäso",
        pears: "Hrušky",
        mushrooms: "Huby",
        apples: "Jablká",
        strawberries: "Jahody",
        cocoa: "Kakao",
        kiwi: "Kivi",
        corn: "Kukurica",
        chicken: "Kuracie mäso",
        lactose: "Laktóza",
        gluten: "Lepok (glutén)",
        poppySeed: "Mak",
        almonds: "Mandle",
        honey: "Med",
        melon: "Melón",
        carrot: "Mrkva",
        nuts: "Orechy",
        tomatoes: "Paradajky",
        bellPepper: "Paprika",
        parsley: "Petržlen",
        fish: "Ryby",
        sesame: "Sezam",
        sunflowerSeeds: "Slnečnicové semienka",
        soy: "Sója",
        eggs: "Vajcia",
        celery: "Zeler",
        rye: "Žito",
      },
      diagnoses: "Diagnózy",
      medications: "Lieky",
      notes: "Ďalšie poznámky",
      consentLabel:
        "Súhlasím so spracovaním zdravotných údajov v súlade s Ochranou osobných údajov a Obchodnými podmienkami.",
      consentRequired: "Pred odoslaním je potrebný súhlas so spracovaním zdravotných údajov.",
      continue: "Pokračovať",
    },

    payment: {
      title: "Skontroluj a spusti plán.",
      summaryLabel: "Zhrnutie",
      priceLabel: "Orientačná cena",
      pricePlaceholder: "DOPLNIŤ",
      priceNote: "Cena je zatiaľ len orientačná — finálna suma bude potvrdená pred platbou.",
      payCta: "Spustiť môj plán",
      testModeNote:
        "Platba prebieha cez Stripe (testovací režim), kým nie je spustená ostrá prevádzka.",
      comingSoonNote: "Platobná brána sa ešte pripravuje — táto možnosť bude aktívna čoskoro.",
      interimTitle: "Zatiaľ bez online platby",
      interimBody:
        "Kým nie je platobná brána pripojená, odošli dotazník priamo Maximovi e-mailom — pošle ti podrobný jedálniček ručne.",
      interimCta: "Odoslať dotazník Maximovi",
      confirmationTitle: "Ďakujeme!",
      confirmationBody:
        "Skontroluj si e-mailového klienta a odošli pripravenú správu. Maxim sa ti ozve do 48 hodín s ďalším postupom.",
    },
  },

  contactPage: {
    eyebrow: "KONTAKT",
    title: "Máš otázku?",
    lead: "Napíš mi — odpoviem do 24 hodín. Rezerváciu diagnostiky nájdeš na stránke Nájdi svoju cestu.",
    form: {
      name: "Meno",
      contact: "E-mail alebo telefón",
      message: "Správa",
      submit: "Odoslať správu",
      note: "Odpoviem do 24 hodín na e-mail alebo telefón, ktorý uvedieš.",
    },
    mailSubject: "Otázka cez web MPM™",
  },

  ctaBand: {
    title: "Chceš vedieť, kde stojíš?",
    lead: "Rezervuj si diagnostiku a zisti, či je MPM™ pre teba.",
    primary: "Rezervácia",
  },

  footer: {
    navTitle: "Navigácia",
    contactTitle: "Kontakt",
    credentials: "Mgr. FTVŠ UK · Registrovaný športový odborník",
    rights: "Všetky práva vyhradené.",
    termsLink: "Obchodné podmienky",
    privacyLink: "Ochrana osobných údajov",
  },
};
