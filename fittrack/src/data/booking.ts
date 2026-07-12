export const BOOKING_AREAS = ["ankle", "knee", "hip", "shoulder"] as const;
export type BookingArea = (typeof BOOKING_AREAS)[number];

export const BOOKING_FORMATS = ["online", "in-person"] as const;
export type BookingFormat = (typeof BOOKING_FORMATS)[number];

// TODO: once the Stripe account is set up (test mode), paste the Payment
// Link URL for each area/format combination here. An empty string means
// payment isn't connected yet, and the booking page shows a "coming soon"
// state instead of a dead link.
export const PAYMENT_LINKS: Record<`${BookingArea}-${BookingFormat}`, string> = {
  "ankle-online": "",
  "ankle-in-person": "",
  "knee-online": "",
  "knee-in-person": "",
  "hip-online": "",
  "hip-in-person": "",
  "shoulder-online": "",
  "shoulder-in-person": "",
};
