import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { submitToFormspree } from "../lib/submitForm";

// Unified "payments are off" block used everywhere a checkout would go
// (booking summary, weight program, …). Shows "Online platba už čoskoro" and,
// instead of a dead pay button, emails the order details to Maxim via Formspree.
//
// TODO (Stripe go-live): replace this component's button with a real checkout
// (Payment Link / Stripe Checkout). The `subject`/`fields` payload already
// captures everything needed for an order.
export function PaymentPlaceholder({
  subject,
  fields,
}: {
  subject: string;
  fields: Record<string, string>;
}) {
  const { t } = useI18n();
  const s = t.payments;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function send() {
    setStatus("sending");
    const ok = await submitToFormspree(subject, fields);
    setStatus(ok ? "sent" : "error");
  }

  if (status === "sent") {
    return (
      <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-gold/30 bg-gold/10 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold">
          <CheckCircle2 size={24} />
        </div>
        <p className="mt-3 font-serif font-semibold text-ink">{s.sentTitle}</p>
        <p className="mt-1 text-sm text-ink-soft">{s.sentBody}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-md rounded-3xl border border-ink/10 bg-paper px-6 py-8 text-center shadow-sm sm:px-10">
      <h3 className="font-serif text-2xl font-bold text-ink sm:text-3xl">{s.comingSoon}</h3>
      <p className="mt-3 text-base font-medium text-ink">{s.priceNote}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.comingSoonNote}</p>
      <button
        onClick={send}
        disabled={status === "sending"}
        className="mx-auto mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-ink px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-ink/85 disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />
        ) : (
          <Send size={17} />
        )}
        {status === "sending" ? s.sending : s.sendRequest}
      </button>
      {status === "error" && <p className="mt-3 text-sm text-terracotta">{s.error}</p>}
    </div>
  );
}
