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
      chartLabels: ["Vstup", "4. týždeň", "8. týždeň", "Pretest"],
    },
    testimonials: {
      eyebrow: "VÝSLEDKY",
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
      title: "Návrat k športu",
      short: "Vráť sa po zranení alebo operácii s istotou, nie s odhadmi.",
      description:
        "Štruktúrovaný proces návratu k športu po zranení alebo operácii — od pohybu bez bolesti, cez progresívnu rehabilitáciu, až po plnú tréningovú záťaž, vedený objektívnym pretestovaním. Vrátane návratu po rekonštrukcii ACL — najčastejšie u hokejistov a tenistov, kde je návrat na plnú rýchlosť a explozivitu bez kompromisu nutnosťou.",
    },
    ltad: {
      title: "LTAD / Pohybová príprava",
      short: "Buduj pohybové základy systematicky, nie náhodne.",
      description:
        "Dlhodobý, štruktúrovaný rozvoj pohybových základov — sila, koordinácia, rýchlosť a stabilita budované systematicky, nie náhodne.",
    },
  },

  wizard: {
    eyebrow: "NÁJDI SVOJU CESTU",
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
      "Registrovaný športový odborník — Ministerstvo školstva, vedy, výskumu a športu SR",
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
    tagline: "Koučing založený na diagnostike — pre rehabilitáciu a výkon.",
    navTitle: "Navigácia",
    contactTitle: "Kontakt",
    credentials: "Mgr. FTVŠ UK · Registrovaný športový odborník",
    rights: "Všetky práva vyhradené.",
    termsLink: "Obchodné podmienky",
    privacyLink: "Ochrana osobných údajov",
  },
};
