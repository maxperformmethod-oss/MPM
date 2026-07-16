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
import { isEmailOrPhone } from "../lib/validate";
import { fadeUp, viewportOnce } from "../lib/motion";

export function Contact() {
  const { t } = useI18n();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [contactError, setContactError] = useState<string | null>(null);

  // Isolated on purpose — swap this function for an API call or Calendly later.
  function submitMessage(event: FormEvent) {
    event.preventDefault();
    if (!isEmailOrPhone(contact)) {
      setContactError(t.validation.emailOrPhone);
      return;
    }
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
    "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none";

  const contactCard =
    "group flex items-center gap-3 rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-gold";
  const contactIcon =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-dark text-ink transition-colors group-hover:text-gold";

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <SectionHeading
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        lead={t.contactPage.lead}
        align="center"
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        {/* Left: photo + direct-contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
            <Photo
              name="results"
              alt="Kouč Maxim Malovec vedie klienta pri tréningu v priestore MPM."
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>

          <p className="text-[11px] font-semibold tracking-[0.16em] text-gold">
            {t.contactPage.directTitle.toUpperCase()}
          </p>
          <div className="flex flex-col gap-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className={contactCard}>
              <span className={contactIcon}>
                <Mail size={16} />
              </span>
              {CONTACT_EMAIL}
            </a>
            <a href={`tel:${PHONE_TEL}`} className={contactCard}>
              <span className={contactIcon}>
                <Phone size={16} />
              </span>
              <span aria-hidden="true" className="text-base leading-none">🇸🇰</span>
              {PHONE_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={contactCard}>
              <span className={contactIcon}>
                <InstagramIcon size={16} />
              </span>
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </motion.div>

        {/* Right: message form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          onSubmit={submitMessage}
          className="flex flex-col gap-4 rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm sm:p-8"
        >
          <label className="flex flex-col gap-1.5 text-[0.95rem] font-medium text-ink">
            {t.contactPage.form.name}
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClasses}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-[0.95rem] font-medium text-ink">
            {t.contactPage.form.contact}
            <input
              required
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                if (contactError) setContactError(null);
              }}
              className={`${inputClasses} ${contactError ? "!border-terracotta" : ""}`}
            />
            {contactError && (
              <span className="text-xs font-normal text-terracotta">{contactError}</span>
            )}
          </label>
          <label className="flex flex-col gap-1.5 text-[0.95rem] font-medium text-ink">
            {t.contactPage.form.message}
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClasses} resize-none`}
            />
          </label>
          <Button type="submit" className="mt-2 w-full">
            {t.contactPage.form.submit}
          </Button>
          <p className="text-center text-xs text-ink-soft">{t.contactPage.form.note}</p>
        </motion.form>
      </div>
    </section>
  );
}
