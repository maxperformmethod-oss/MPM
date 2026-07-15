import { CONTACT_EMAIL, CONTACT_FORM_ENDPOINT } from "../data/site";

// Single Formspree submission path for every form on the site (intake,
// pregnancy, booking request, weight program, contact widget). Fields are
// sent as a flat object; `_subject` sets the email subject Maxim receives.
// If the endpoint is unset it falls back to a mailto: draft so nothing is
// ever silently lost. All submissions land in maxperformmethod@gmail.com.
export type SubmitStatus = "idle" | "sending" | "sent" | "error";

export async function submitToFormspree(
  subject: string,
  fields: Record<string, string>,
): Promise<boolean> {
  if (!CONTACT_FORM_ENDPOINT) {
    const body = Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    return true;
  }

  try {
    const res = await fetch(CONTACT_FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...fields }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
