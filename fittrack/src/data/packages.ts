// Pricing data. IN-PERSON prices are CONFIRMED (Update 21). ONLINE tier
// prices are PROPOSALS pending Maxim's confirmation — each carries verify:true
// and the UI shows an [overiť] tag next to it. Do NOT remove the [overiť]
// tags until confirmed. The 8-week online "Pain" program (149 €) is confirmed.
//
// TODO (Stripe go-live): add a stripePriceId per row and swap the email
// enquiry CTA for real checkout.

export type InPersonPackage = {
  id: string;
  sessions: number;
  /** € per session (confirmed). */
  perSession: number;
  /** € total for the package (confirmed). */
  total: number;
  featured: boolean;
  freeNutrition: boolean;
};

// Reference single-session rate — used to show the strikethrough "full" price
// and the savings on multi-session packages.
export const BASE_PER_SESSION = 50;

export const IN_PERSON_PACKAGES: InPersonPackage[] = [
  { id: "single", sessions: 1, perSession: 50, total: 50, featured: false, freeNutrition: false },
  { id: "pack-5", sessions: 5, perSession: 45, total: 225, featured: false, freeNutrition: false },
  { id: "pack-10", sessions: 10, perSession: 40, total: 400, featured: true, freeNutrition: true },
  { id: "pack-20", sessions: 20, perSession: 38, total: 760, featured: false, freeNutrition: true },
];

export type OnlineTier = {
  id: string;
  /** € price. */
  price: number;
  /** true = proposal awaiting confirmation → UI shows [overiť]. */
  verify: boolean;
};

// Online coaching = time-based programs (1/2/3/6 months), not session packs.
// ⚠️ ALL [overiť] until confirmed. UI shows an "indicative prices" note.
export const ONLINE_TIERS: OnlineTier[] = [
  { id: "1m", price: 179, verify: true },
  { id: "2m", price: 329, verify: true },
  { id: "3m", price: 449, verify: true },
  { id: "6m", price: 799, verify: true },
];

// Dedicated online "Pain / Rehab" program — a standalone 8-week package.
// CONFIRMED "from 149 €".
export const ONLINE_PAIN = { weeks: 8, price: 149, verify: false } as const;

// Individual meal-plan add-on — free with the 10- and 20-session packs.
// CONFIRMED at ~50 € (deliberately approximate).
export const MEAL_PLAN_ADDON = {
  id: "meal-plan",
  priceApprox: "~50 €",
} as const;
