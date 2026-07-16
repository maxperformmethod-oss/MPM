// Shared, deliberately permissive client-side validators. Sensible UX
// bounds only (not medical limits) — the goal is catching typos, not
// policing people. Error copy lives in i18n under `validation`.

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

/** Accepts +421 944 346 008, 0944346008, (0)944/346-008 … 9–15 digits. */
export function isPhone(value: string): boolean {
  const digits = value.replace(/[\s()/.-]/g, "");
  return /^\+?\d{9,15}$/.test(digits);
}

export function isEmailOrPhone(value: string): boolean {
  return isEmail(value) || isPhone(value);
}

/** Numeric with range; accepts comma decimals ("72,5"). */
export function inRange(value: string, min: number, max: number): boolean {
  const n = Number(value.trim().replace(",", "."));
  return Number.isFinite(n) && n >= min && n <= max;
}

export const AGE_RANGE = [5, 100] as const;
export const HEIGHT_RANGE = [100, 230] as const;
export const WEIGHT_RANGE = [25, 250] as const;
