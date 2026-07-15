// ⚠️ PLACEHOLDER RECENZIE — NIE SÚ REÁLNE.
// Vymyslené ukážkové recenzie na odladenie dizajnu sekcie. Pred spustením
// naostro ich nahraď skutočnými (so súhlasom klientov). Mená sú fiktívne,
// avatary sú len iniciály — žiadne skutočné identifikovateľné osoby.
export type Review = {
  id: string;
  name: string;
  initials: string;
  /** Tailwind trieda pozadia avataru — len MPM paleta. */
  tone: string;
  rating: 1 | 2 | 3 | 4 | 5;
  context: { sk: string; en: string };
  text: { sk: string; en: string };
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Martin H.",
    initials: "MH",
    tone: "bg-gold",
    rating: 5,
    context: { sk: "Hokej · návrat po zranení", en: "Hockey · return from injury" },
    text: {
      sk: "Po operácii kolena som sa bál, či sa ešte vrátim na ľad. Vďaka testovaniu som presne vedel, kde som — a kedy som pripravený. Sezónu som dohral bez problémov.",
      en: "After knee surgery I wasn't sure I'd ever get back on the ice. Testing showed me exactly where I stood — and when I was ready. I finished the season without issues.",
    },
  },
  {
    id: "r2",
    name: "Lucia B.",
    initials: "LB",
    tone: "bg-sage",
    rating: 5,
    context: { sk: "Tenis · výkonnostný koučing", en: "Tennis · performance coaching" },
    text: {
      sk: "Prvý tréner, ktorý mi nedal generický plán. Všetko vychádzalo z mojich čísel a každý mesiac som videla posun čierne na bielom.",
      en: "The first coach who didn't hand me a generic plan. Everything came from my own numbers and I saw progress in black and white every month.",
    },
  },
  {
    id: "r3",
    name: "Peter K.",
    initials: "PK",
    tone: "bg-terracotta",
    rating: 5,
    context: { sk: "Rekreačný beh", en: "Recreational running" },
    text: {
      sk: "Roky ma pri behu bolelo koleno a nikto nevedel prečo. Diagnostika odhalila slabé miesta, plán bol jasný a po pár mesiacoch behám bez bolesti.",
      en: "My knee hurt when running for years and nobody knew why. The assessment found the weak links, the plan was clear, and a few months later I run pain-free.",
    },
  },
  {
    id: "r4",
    name: "Jana S.",
    initials: "JS",
    tone: "bg-ink-soft",
    rating: 5,
    context: { sk: "Mama mladého športovca", en: "Parent of a young athlete" },
    text: {
      sk: "Syn trénuje pod Maximom rok. Oceňujem, že tréning rešpektuje jeho vek a rast — vidno, že za tým je systém, nie náhodné cvičenia.",
      en: "My son has trained with Maxim for a year. I appreciate that training respects his age and growth — you can tell there's a system behind it, not random drills.",
    },
  },
  {
    id: "r5",
    name: "Tomáš V.",
    initials: "TV",
    tone: "bg-gold",
    rating: 4,
    context: { sk: "Futbal · silová príprava", en: "Football · strength training" },
    text: {
      sk: "Profesionálny prístup a poctivé testovanie. Ocenil by som viac termínov, ale kvalita tréningov je na inej úrovni než čokoľvek predtým.",
      en: "Professional approach and honest testing. I'd welcome more time slots, but the quality of the sessions is on another level compared to anything before.",
    },
  },
];
