// Training-session packages — structure prepared for future online payments.
//
// ⚠️ Prices and Stripe checkout are intentionally NOT live yet. Until then:
//   - `price` stays null → the UI shows "Čoskoro" instead of a number
//   - the CTA is "Mám záujem" → sends an email enquiry (no payment)
//
// TODO (when going live with Stripe):
//   1. Fill `price` (in EUR) + `pricePerSession` for each package.
//   2. Add a `stripePriceId` / Payment Link field per package here.
//   3. Swap the "Mám záujem" enquiry CTA for a real checkout button that
//      opens the Stripe Payment Link / Checkout session.
//   4. Optionally add `discountNote` for bundle savings.
export type TrainingPackage = {
  id: string;
  sessions: number;
  /** null until pricing is finalized — UI must render "Čoskoro" while null. */
  price: number | null;
  /** true = show a subtle "best value" highlight. */
  featured: boolean;
  title: { sk: string; en: string };
  description: { sk: string; en: string };
  // TODO: stripePriceId?: string;  // fill when Stripe is connected
};

export const TRAINING_PACKAGES: TrainingPackage[] = [
  {
    id: "single",
    sessions: 1,
    price: null,
    featured: false,
    title: { sk: "Jednorazový tréning", en: "Single session" },
    description: {
      sk: "Ideálne na vyskúšanie prístupu alebo jednorazovú konzultáciu.",
      en: "Ideal for trying the approach or a one-off consultation.",
    },
  },
  {
    id: "pack-10",
    sessions: 10,
    price: null,
    featured: true,
    title: { sk: "Balík 10 tréningov", en: "10-session package" },
    description: {
      sk: "Zvýhodnený balík na rozbehnutie procesu s pravidelnou kontrolou.",
      en: "A discounted bundle to get the process going with regular check-ins.",
    },
  },
  {
    id: "pack-20",
    sessions: 20,
    price: null,
    featured: false,
    title: { sk: "Balík 20 tréningov", en: "20-session package" },
    description: {
      sk: "Pre dlhodobú spoluprácu a najlepšiu cenu za tréning.",
      en: "For long-term work and the best per-session value.",
    },
  },
];
