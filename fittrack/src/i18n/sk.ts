import type { Dict } from "./en";

export const sk: Dict = {
  nav: {
    about: "O mne",
    approach: "MPM Metóda",
    findYourPath: "Nájdi svoju cestu",
    assessment: "Diagnostika",
    results: "Výsledky",
    research: "Výskum",
    nutrition: "Výživa",
    contact: "Kontakt",
    bookAssessment: "Rezervovať diagnostiku",
  },

  hero: {
    eyebrow: "MPM™ — MALOVEC PERFORMANCE METHOD",
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
    ctaPrimary: "Rezervovať diagnostiku",
    ctaSecondary: "15-min hovor zadarmo",
  },

  home: {
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
      eyebrow: "NÁJDI SVOJU CESTU",
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
      stats: [
        { value: 20, suffix: "+", label: "metrík sledovaných v diagnostike" },
        { value: 5, suffix: "", label: "krokov MPM metódy" },
        { value: 2, suffix: "×", label: "testovanie — vstupné a kontrolné" },
        { value: 1, suffix: "", label: "prehľadný písomný report" },
      ],
    },
    testimonials: {
      eyebrow: "VÝSLEDKY",
      title: "Čo hovoria klienti.",
      cta: "Všetky výsledky",
    },
  },

  pillars: {
    "return-to-sport": {
      title: "Návrat k športu",
      short: "Vráť sa po zranení s istotou, nie s odhadmi.",
      description:
        "Štruktúrovaný proces návratu k športu po zranení — od pohybu bez bolesti až po plnú tréningovú záťaž, vedený objektívnym pretestovaním.",
    },
    "post-op-rehab": {
      title: "Pooperačná rehabilitácia",
      short: "Znovu sa vybuduj po operácii s jasným plánom.",
      description:
        "Progresívna rehabilitácia po operácii, ktorá preklenie medzeru medzi ukončením fyzioterapie a skutočným výkonom.",
    },
    "performance-coaching": {
      title: "Výkonnostný koučing",
      short: "Trénuj so štruktúrou. Napreduj s dátami.",
      description:
        "Individuálny silový a výkonnostný koučing postavený na dátach z diagnostiky — pre športovcov a aktívnych ľudí, ktorí chcú merateľný pokrok.",
    },
  },

  wizard: {
    eyebrow: "NÁJDI SVOJU CESTU",
    title: "Povedz nám, čo riešiš.",
    lead: "Vyber cestu najbližšiu tvojej situácii. MPM™ ťa nasmeruje k správnej diagnostike a koučingovému procesu.",
    stepLabels: ["Východisko", "Detaily", "Tvoja cesta"],
    step1Tag: "KROK 1 — VYBER SVOJE VÝCHODISKO",
    step2Tag: "KROK 2",
    step3Tag: "KROK 3 — ODPORÚČANÁ CESTA",
    choose: "Vybrať",
    back: "Späť",
    startOver: "Začať odznova",
    basedOn: "Na základe",
    exploreApproach: "Preskúmať MPM Metódu",
    paths: {
      "return-to-sport": {
        question: "Kde sa v návrate práve nachádzaš?",
        options: [
          "Stále ma to bolí aj v bežnom živote",
          "Bez bolesti, ale ešte netrénujem",
          "Trénujem, ale nie naplno",
          "Mám povolené športovať, ale zraneniu neverím",
        ],
        result: {
          heading: "Diagnostika návratu k športu",
          body: "Začneme kompletnou pohybovou a silovou diagnostikou, aby sme presne videli, kde tvoj návrat stojí — a postavíme fázovaný plán od aktuálnej úrovne späť k plnému športu, overený pretestovaním.",
          cta: "Rezervovať diagnostiku",
        },
      },
      "post-op-rehab": {
        question: "Ako dávno si bol/a na operácii?",
        options: [
          "Menej ako 6 týždňov",
          "6 týždňov – 3 mesiace",
          "3 – 6 mesiacov",
          "Viac ako 6 mesiacov",
        ],
        result: {
          heading: "Plán pooperačnej rehabilitácie",
          body: "Zhodnotíme tvoj aktuálny rozsah, silu a kvalitu pohybu vzhľadom na čas od operácie — a postavíme progresívny plán, ktorý preklenie fyzioterapiu a plný výkon.",
          cta: "Rezervovať diagnostiku",
        },
      },
      "performance-coaching": {
        question: "Čo najlepšie vystihuje tvoj aktuálny tréning?",
        options: [
          "Len začínam",
          "Trénujem, ale pokrok sa zastavil",
          "Súťažný športovec v sezóne",
          "Pripravujem sa na sezónu alebo pretek",
        ],
        result: {
          heading: "Výkonnostné testovanie & programovanie",
          body: "Výkonnostné testovanie stanoví tvoje východiská v sile, výbušnosti a pohybe — a premietne sa priamo do individuálneho programu s jasnou, merateľnou progresiou.",
          cta: "Rezervovať diagnostiku",
        },
      },
    },
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
    included: [
      {
        title: "Pohybový skríning",
        body: "Štruktúrovaný pohľad na to, ako sa hýbeš — mobilita, kontrola a kompenzačné vzorce v základných pozíciách.",
      },
      {
        title: "Testovanie sily a asymetrií",
        body: "Objektívne meranie sily s porovnaním strán — nerovnováhy sa kvantifikujú, nie odhadujú.",
      },
      {
        title: "Športovo-špecifické východiská",
        body: "Testy vybrané podľa nárokov tvojho športu a cieľov — výbušnosť, kapacita a tolerancia tam, kde na tom záleží.",
      },
      {
        title: "Písomný report",
        body: "Odchádzaš s prehľadným písomným zhrnutím: čo sa meralo, čo to znamená a aký je plán.",
      },
      {
        title: "Pretestovanie",
        body: "Rovnaké testy sa opakujú v kľúčových míľnikoch — pokrok aj rozhodnutia o návrate stoja na tvojich vlastných dátach.",
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
        a: "Hneď, ako ti lekár alebo chirurg povolí aktívnu rehabilitáciu. Ak si nie si istý/á, začni 15-minútovým hovorom zadarmo a správne načasovanie vyriešime spolu.",
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
        sport: "Futbal",
        situation: "Návrat po rekonštrukcii ACL",
        outcome: "Návrat do plného tímového tréningu so symetrickými silovými hodnotami pri preteste.",
        quote:
          "Prvýkrát som presne vedel, kde stojím — každá fáza mala za sebou čísla, nie len pocity.",
      },
      {
        name: "Klient B",
        sport: "Rekreačný beh",
        situation: "Opakovaná bolesť kolena pri zvýšení tréningového objemu",
        outcome: "Polmaratónsky blok dokončený bez bolesti po 12-týždňovom progresívnom pláne.",
        quote: "Diagnostika našla to, čo tri mesiace hádania nie.",
      },
      {
        name: "Klient C",
        sport: "Hokej",
        situation: "Pooperačná rehabilitácia ramena",
        outcome: "Progres od ukončenia fyzioterapie späť ku kontaktnej hre, overený pretestovaním.",
        quote: "Most medzi rehabilitáciou a skutočným tréningom je presne to, čo mi chýbalo.",
      },
    ],
    disclaimer:
      "Prípadové štúdie zdieľame so súhlasom klientov. Individuálne výsledky závisia od východiska, konzistentnosti a kontextu.",
  },

  aboutPage: {
    eyebrow: "O MNE",
    title: "Maxim Malovec",
    lead: "Kouč a športový odborník prepájajúci rehabilitáciu a výkon.",
    credentials: [
      "Mgr. — Fakulta telesnej výchovy a športu, Univerzita Komenského (FTVŠ UK)",
      "Registrovaný športový odborník",
      "Prax založená na dôkazoch vo výkone & rehabilitácii",
    ],
    story: [
      "MPM™ vzniklo z jednoduchého pozorovania: príliš veľa športovcov uviazne v medzere medzi fyzioterapiou a skutočným výkonom. Prepustení, ale nie pripravení. Bez bolesti, ale bez istoty.",
      "Malovec Performance Method existuje preto, aby túto medzeru uzavrel — spája štruktúrovanú diagnostiku, rehabilitačné myslenie a prax silového a kondičného tréningu do jedného súvislého, merateľného procesu.",
    ],
    philosophyTitle: "Filozofia",
    philosophy:
      "Diagnostikovať úprimne, plánovať individuálne, koučovať zblízka — a nechať pretestovanie, nie názor, rozhodnúť, kedy si pripravený. Žiadne skratky, žiadne generické šablóny, žiadne hádanie.",
    photoNote: "Fotografia už čoskoro",
  },

  researchPage: {
    eyebrow: "VÝSKUM",
    title: "Dôkazy, zrozumiteľne.",
    lead: "Praktické zhrnutia výskumu, ktorý formuje MPM™ proces — písané pre športovcov, nie pre akademikov.",
    comingSoon: "Článok už čoskoro",
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

  nutritionPage: {
    eyebrow: "VÝŽIVA",
    title: "Palivo pre proces.",
    lead: "Výživa je v MPM™ podporný pilier — praktické vedenie v službách tvojich rehabilitačných a výkonnostných cieľov, nie samostatný diétny program.",
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

  contactPage: {
    eyebrow: "KONTAKT & REZERVÁCIA",
    title: "Začni jedným krátkym krokom.",
    lead: "Vyber si, ako chceš začať. Odpoveď dostaneš do 24 hodín — podrobný vstupný formulár príde až po potvrdení rezervácie.",
    typeAssessment: {
      title: "Rezervovať diagnostiku",
      body: "Kompletná štruktúrovaná diagnostika — pohyb, sila a športovo-špecifické testovanie, s písomným reportom.",
    },
    typeCall: {
      title: "15-min hovor zadarmo",
      body: "Krátky úvodný hovor, aby sme zistili, či je MPM™ pre tvoju situáciu to pravé. Bez záväzkov.",
    },
    serviceLabel: "Vybraná cesta",
    form: {
      name: "Meno",
      contact: "E-mail alebo telefón",
      message: "Čo riešiš? (nepovinné)",
      submit: "Odoslať žiadosť",
      note: "Zámerne rýchle a stručné — podrobný vstupný formulár príde po potvrdení a platbe.",
    },
    mailSubjectAssessment: "Žiadosť o rezerváciu diagnostiky",
    mailSubjectCall: "Žiadosť o 15-min hovor zadarmo",
  },

  ctaBand: {
    title: "Chceš vedieť, kde stojíš?",
    lead: "Rezervuj si diagnostiku, alebo začni 15-minútovým hovorom zadarmo a zisti, či je MPM™ pre teba.",
    primary: "Rezervovať diagnostiku",
    secondary: "15-min hovor zadarmo",
  },

  footer: {
    tagline: "Koučing založený na diagnostike — pre rehabilitáciu a výkon.",
    navTitle: "Navigácia",
    contactTitle: "Kontakt",
    credentials: "Mgr. FTVŠ UK · Registrovaný športový odborník",
    rights: "Všetky práva vyhradené.",
  },
};
