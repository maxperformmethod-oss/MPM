import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/ui/Button";
import { Photo } from "../components/ui/Photo";
import { useI18n } from "../i18n/I18nContext";
import { CONTACT_EMAIL } from "../data/site";
import { fadeUp, viewportOnce } from "../lib/motion";

export function Contact() {
  const { t } = useI18n();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  // Isolated on purpose — swap this function for an API call or Calendly later.
  function submitMessage(event: FormEvent) {
    event.preventDefault();
    const lines = [
      `${t.contactPage.form.name}: ${name}`,
      `${t.contactPage.form.contact}: ${contact}`,
      message ? `${t.contactPage.form.message}: ${message}` : null,
    ].filter(Boolean);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      t.contactPage.mailSubject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

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

      <div className="mx-auto mt-12 grid max-w-4xl gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-ink/10 shadow-sm"
        >
          <Photo
            name="contact"
            alt="Kouč vedie klienta pri chôdzi s kettlebellom v tréningovom priestore MPM."
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 400px, 100vw"
          />
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          onSubmit={submitMessage}
          className="flex flex-col gap-4"
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
              rows={4}
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
      </div>
    </section>
  );
}
