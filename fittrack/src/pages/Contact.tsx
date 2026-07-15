import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { InstagramIcon } from "../components/ui/InstagramIcon";
import { Button } from "../components/ui/Button";
import { Photo } from "../components/ui/Photo";
import { useI18n } from "../i18n/I18nContext";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../data/site";
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

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto mt-10 flex max-w-md flex-col gap-3"
      >
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-gold"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-dark text-ink transition-colors group-hover:text-gold">
            <Mail size={16} />
          </span>
          {CONTACT_EMAIL}
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-gold"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-dark text-ink transition-colors group-hover:text-gold">
            <Phone size={16} />
          </span>
          <span aria-hidden="true" className="text-base leading-none">🇸🇰</span>
          {PHONE_DISPLAY}
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-gold"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-dark text-ink transition-colors group-hover:text-gold">
            <InstagramIcon size={16} />
          </span>
          {INSTAGRAM_HANDLE}
        </a>
      </motion.div>

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
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-2 flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <InstagramIcon size={16} className="text-gold" />
            {INSTAGRAM_HANDLE}
          </a>
        </motion.form>
      </div>
    </section>
  );
}
