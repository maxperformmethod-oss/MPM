import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { InstagramIcon } from "../components/ui/InstagramIcon";
import { CTABand } from "../components/CTABand";
import { Photo } from "../components/ui/Photo";
import { useI18n } from "../i18n/I18nContext";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/site";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

function TrustSeals() {
  const { t } = useI18n();
  const s = t.aboutPage.trustSeals;

  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold">{s.eyebrow}</p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-8"
        >
          <motion.img
            variants={fadeUp}
            src="/photos2/ministerstvo-sportu.webp"
            alt={s.ministryAlt}
            className="h-14 w-auto grayscale opacity-70 transition-opacity hover:opacity-100 sm:h-16"
            loading="lazy"
          />
          <motion.img
            variants={fadeUp}
            src="/photos2/ftvs-uk.webp"
            alt={s.ftvsAlt}
            className="h-14 w-auto grayscale opacity-70 transition-opacity hover:opacity-100 sm:h-16"
            loading="lazy"
          />
          <motion.div
            variants={fadeUp}
            role="img"
            aria-label={s.mpmAlt}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink/20 opacity-70 transition-opacity hover:opacity-100 sm:h-16 sm:w-16"
          >
            <span className="font-serif text-sm font-bold text-ink-soft">
              MPM<sup className="text-[0.5em]">™</sup>
            </span>
          </motion.div>
          <motion.div
            variants={fadeUp}
            role="img"
            aria-label={s.signatureAlt}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink/20 opacity-70 transition-opacity hover:opacity-100 sm:h-16 sm:w-16"
          >
            <svg viewBox="0 0 40 24" className="h-6 w-10 text-gold" fill="none">
              <path
                d="M2,12 L12,12 L16,3 L20,21 L24,12 L38,12"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useI18n();
  const s = t.aboutPage;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} />

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 flex flex-col gap-3"
            >
              {s.credentials.map((credential) => (
                <li
                  key={credential}
                  className="flex items-start gap-2.5 text-sm text-ink-soft"
                >
                  <BadgeCheck size={17} className="mt-0.5 shrink-0 text-gold" />
                  {credential}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 flex flex-col gap-4"
            >
              {s.story.map((paragraph) => (
                <p key={paragraph} className="text-sm text-ink-soft sm:text-base">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-8 rounded-2xl border border-gold/30 bg-gold/10 p-6"
            >
              <p className="font-serif font-semibold text-ink">{s.philosophyTitle}</p>
              <p className="mt-2 text-sm text-ink">{s.philosophy}</p>
            </motion.div>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <InstagramIcon size={16} className="text-gold" />
              {INSTAGRAM_HANDLE}
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-ink/10 shadow-sm"
          >
            <Photo
              name="about"
              alt="Maxim Malovec počas konzultácie s klientkou v tréningovom priestore MPM."
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 512px, 100vw"
            />
          </motion.div>
        </div>
      </section>

      <TrustSeals />

      <CTABand />
    </>
  );
}
