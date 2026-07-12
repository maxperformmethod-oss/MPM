import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ClipboardCheck, Phone } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/ui/Button";
import { useI18n } from "../i18n/I18nContext";
import { isPillarId } from "../data/pillars";
import { CONTACT_EMAIL } from "../data/site";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

type BookingType = "assessment" | "call";

export function Contact() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();

  // Deep-links: /contact?type=call preselects the free call,
  // /contact?service=<pillar-id> carries the wizard result into the request.
  const serviceParam = searchParams.get("service");
  const service = isPillarId(serviceParam) ? serviceParam : null;
  const [type, setType] = useState<BookingType>(
    searchParams.get("type") === "call" ? "call" : "assessment",
  );

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  // Isolated on purpose — swap this function for an API call or Calendly later.
  function submitBooking(event: FormEvent) {
    event.preventDefault();
    const subject =
      type === "call" ? t.contactPage.mailSubjectCall : t.contactPage.mailSubjectAssessment;
    const lines = [
      `${t.contactPage.form.name}: ${name}`,
      `${t.contactPage.form.contact}: ${contact}`,
      service ? `${t.contactPage.serviceLabel}: ${t.pillars[service].title}` : null,
      message ? `${t.contactPage.form.message} ${message}` : null,
    ].filter(Boolean);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  const types: { id: BookingType; icon: typeof Phone; title: string; body: string }[] = [
    {
      id: "assessment",
      icon: ClipboardCheck,
      title: t.contactPage.typeAssessment.title,
      body: t.contactPage.typeAssessment.body,
    },
    {
      id: "call",
      icon: Phone,
      title: t.contactPage.typeCall.title,
      body: t.contactPage.typeCall.body,
    },
  ];

  const inputClasses =
    "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none";

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <SectionHeading
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        lead={t.contactPage.lead}
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2"
      >
        {types.map(({ id, icon: Icon, title, body }) => (
          <motion.button
            key={id}
            variants={fadeUp}
            onClick={() => setType(id)}
            aria-pressed={type === id}
            className={`rounded-2xl border p-5 text-left shadow-sm transition-colors ${
              type === id
                ? "border-gold bg-gold/10"
                : "border-ink/10 bg-paper hover:border-ink/25"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                type === id ? "bg-gold/20 text-gold" : "bg-cream-dark text-ink"
              }`}
            >
              <Icon size={18} />
            </div>
            <p className="mt-3 font-serif font-semibold text-ink">{title}</p>
            <p className="mt-1.5 text-sm text-ink-soft">{body}</p>
          </motion.button>
        ))}
      </motion.div>

      {service && (
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink-soft">
          {t.contactPage.serviceLabel}:{" "}
          <span className="font-semibold text-ink">{t.pillars[service].title}</span>
        </p>
      )}

      <motion.form
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        onSubmit={submitBooking}
        className="mx-auto mt-8 flex max-w-2xl flex-col gap-4"
      >
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {t.contactPage.form.name}
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {t.contactPage.form.contact}
          <input
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {t.contactPage.form.message}
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputClasses} resize-none`}
          />
        </label>
        <Button type="submit" className="mt-2">
          {t.contactPage.form.submit}
        </Button>
        <p className="text-center text-xs text-ink-soft">{t.contactPage.form.note}</p>
      </motion.form>
    </section>
  );
}
