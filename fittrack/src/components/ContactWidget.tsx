import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle, Send, X } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { CONTACT_EMAIL, CONTACT_FORM_ENDPOINT } from "../data/site";

// Floating contact widget — a chat-styled FORM, deliberately not an AI bot.
// With CONTACT_FORM_ENDPOINT set (Formspree) it submits asynchronously;
// otherwise it falls back to mailto: (zero-cost, no backend).
export function ContactWidget() {
  const { t } = useI18n();
  const s = t.contactWidget;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const quickLinks = [
    { to: "/find-your-path", label: s.quickDiagnostics },
    { to: "/approach", label: s.quickHow },
  ];

  async function submit(event: FormEvent) {
    event.preventDefault();

    if (!CONTACT_FORM_ENDPOINT) {
      const body = [`${s.name}: ${name}`, `${s.email}: ${email}`, "", message].join("\n");
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        s.mailSubject,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-ink/15 bg-cream px-3 py-2 text-sm text-ink placeholder:text-ink-soft/50 focus:border-gold focus:outline-none";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-4 z-50 flex max-h-[calc(100dvh-7.5rem)] w-[min(21rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-2xl"
            role="dialog"
            aria-label={s.title}
          >
            <div className="bg-ink px-5 py-4">
              <p className="font-serif text-lg font-bold text-cream">
                MPM<sup className="text-[0.5em]">™</sup>
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-cream/80">{s.welcome}</p>
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto p-5">
              <div className="flex flex-col gap-2">
                {quickLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg border border-ink/10 bg-cream px-3.5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-gold"
                  >
                    {label}
                    <ArrowRight size={14} className="text-gold" />
                  </Link>
                ))}
              </div>

              {status === "sent" ? (
                <div className="rounded-xl border border-gold/30 bg-gold/10 p-4 text-center">
                  <p className="font-serif font-semibold text-ink">{s.successTitle}</p>
                  <p className="mt-1 text-sm text-ink-soft">{s.success}</p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-2.5">
                  <p className="text-xs font-semibold tracking-[0.14em] text-gold">
                    {s.formTitle.toUpperCase()}
                  </p>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={s.name}
                    aria-label={s.name}
                    className={inputClasses}
                  />
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={s.email}
                    aria-label={s.email}
                    className={inputClasses}
                  />
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={s.message}
                    aria-label={s.message}
                    className={`${inputClasses} resize-none`}
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/85 disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />
                    ) : (
                      <Send size={14} />
                    )}
                    {status === "sending" ? s.sending : s.send}
                  </button>
                  {status === "error" && (
                    <p className="text-xs text-terracotta">{s.error}</p>
                  )}
                  {!CONTACT_FORM_ENDPOINT && (
                    <p className="text-center text-[11px] text-ink-soft/70">{s.mailtoNote}</p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={s.buttonLabel}
        aria-expanded={open}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-gold shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
