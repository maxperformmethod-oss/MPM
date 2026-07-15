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
  {
    id: "r6",
    name: "Adam R.",
    initials: "AR",
    tone: "bg-sage",
    rating: 5,
    context: { sk: "Hokej · návrat po ACL", en: "Hockey · ACL return" },
    text: {
      sk: "Rok po rekonštrukcii ACL som mal strach z korčuľovania na plný plyn. Maxim mal na každú fázu jasné kritériá — keď mi povedal, že som pripravený, naozaj som bol.",
      en: "A year after ACL reconstruction I was scared to skate at full speed. Maxim had clear criteria for every phase — when he said I was ready, I truly was.",
    },
  },
  {
    id: "r7",
    name: "Nina K.",
    initials: "NK",
    tone: "bg-terracotta",
    rating: 5,
    context: { sk: "Tenis · rotačná sila a rýchlosť", en: "Tennis · rotational power & speed" },
    text: {
      sk: "Servis a údery mám silnejšie a stabilnejšie než kedykoľvek predtým. Tréning bol presne šitý na tenis, nie generická posilka.",
      en: "My serve and groundstrokes are stronger and more stable than ever. Training was built specifically for tennis, not generic gym work.",
    },
  },
  {
    id: "r8",
    name: "Marek D.",
    initials: "MD",
    tone: "bg-ink-soft",
    rating: 5,
    context: { sk: "Hokej · rehabilitácia ramena", en: "Hockey · shoulder rehab" },
    text: {
      sk: "Po vykĺbenom ramene ma nikto nevedel dostať späť do plného kontaktu. Tu som prešiel od bolesti k plnej sile krok po kroku, s číslami po každej fáze.",
      en: "After a shoulder dislocation nobody could get me back to full contact. Here I went from pain to full strength step by step, with numbers after each phase.",
    },
  },
  {
    id: "r9",
    name: "Simona P.",
    initials: "SP",
    tone: "bg-gold",
    rating: 5,
    context: { sk: "Rehabilitácia · chronická bolesť chrbta", en: "Rehab · chronic back pain" },
    text: {
      sk: "Roky mi hovorili, že mám „slabý core“. Až tu sa niekto pozrel na celý obraz — bolesť je preč a konečne zase dvíham bez strachu.",
      en: "For years I was told I had a “weak core”. Here someone finally looked at the whole picture — the pain is gone and I lift without fear again.",
    },
  },
  {
    id: "r10",
    name: "Jakub M.",
    initials: "JM",
    tone: "bg-sage",
    rating: 5,
    context: { sk: "Hokej · príprava na sezónu", en: "Hockey · pre-season prep" },
    text: {
      sk: "Do sezóny som nastúpil rýchlejší a výbušnejší, a hlavne bez zranenia. Prvýkrát som mal prípravu postavenú na dátach, nie na pocitoch.",
      en: "I started the season faster and more explosive, and above all injury-free. For the first time my prep was built on data, not on feelings.",
    },
  },
];
