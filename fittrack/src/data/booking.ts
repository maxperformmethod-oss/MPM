export const BOOKING_AREAS = ["ankle", "knee", "hip", "shoulder"] as const;
export type BookingArea = (typeof BOOKING_AREAS)[number];

export const COACHING_SPORTS = ["hockey", "tennis", "football", "running", "other"] as const;
export type CoachingSport = (typeof COACHING_SPORTS)[number];

export const AGE_CATEGORIES = ["under-12", "12-15", "16-18", "adult"] as const;
export type AgeCategory = (typeof AGE_CATEGORIES)[number];

export const LTAD_STAGES = ["6-9", "9-12", "12-16", "16-plus"] as const;
export type LtadStage = (typeof LTAD_STAGES)[number];

export const BOOKING_FORMATS = ["online", "in-person"] as const;
export type BookingFormat = (typeof BOOKING_FORMATS)[number];

export const TIME_SINCE_OPTIONS = [
  "under-6-weeks",
  "6-12-weeks",
  "3-6-months",
  "over-6-months",
] as const;
export type TimeSinceOption = (typeof TIME_SINCE_OPTIONS)[number];

export function paymentLinkKey(
  pillarId: string,
  format: BookingFormat,
  area: BookingArea | null,
): string {
  return area ? `${pillarId}-${area}-${format}` : `${pillarId}-${format}`;
}

// TODO: once the Stripe account is set up (test mode), paste the Payment
// Link URL for each combination here. An empty string means payment isn't
// connected yet, and the booking page shows a "coming soon" state instead
// of a dead link.
export const PAYMENT_LINKS: Record<string, string> = {
  "performance-coaching-online": "",
  "performance-coaching-in-person": "",
  "ltad-online": "",
  "ltad-in-person": "",
  "return-to-sport-ankle-online": "",
  "return-to-sport-ankle-in-person": "",
  "return-to-sport-knee-online": "",
  "return-to-sport-knee-in-person": "",
  "return-to-sport-hip-online": "",
  "return-to-sport-hip-in-person": "",
  "return-to-sport-shoulder-online": "",
  "return-to-sport-shoulder-in-person": "",
};
