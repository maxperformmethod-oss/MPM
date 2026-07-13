import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { Photo } from "../components/ui/Photo";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, viewportOnce } from "../lib/motion";

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

      <CTABand />
    </>
  );
}
