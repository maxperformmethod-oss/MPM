import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export function Results() {
  const { t } = useI18n();
  const s = t.resultsPage;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />

        {/* TODO: replace placeholder case studies with real, consented client stories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 flex max-w-3xl flex-col gap-6"
        >
          {s.caseStudies.map((cs) => (
            <motion.article
              key={cs.name}
              variants={fadeUp}
              className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-serif text-xl font-semibold text-ink">{cs.name}</h2>
                <span className="text-sm text-ink-soft">· {cs.sport}</span>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-[0.1em] text-gold">
                {cs.situation.toUpperCase()}
              </p>
              <p className="mt-4 text-sm text-ink sm:text-base">{cs.outcome}</p>
              <blockquote className="mt-4 border-l-2 border-gold pl-4 text-sm italic text-ink-soft">
                "{cs.quote}"
              </blockquote>
            </motion.article>
          ))}
        </motion.div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-soft">
          {s.disclaimer}
        </p>
      </section>

      <CTABand />
    </>
  );
}
