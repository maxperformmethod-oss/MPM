import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

export function Research() {
  const { t } = useI18n();
  const s = t.researchPage;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3"
        >
          {s.articles.map((article) => (
            <motion.article
              key={article.title}
              variants={fadeUp}
              className="flex h-full flex-col gap-4 rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream-dark text-ink">
                <BookOpen size={18} />
              </div>
              <p className="text-xs font-semibold tracking-[0.1em] text-gold">
                {article.tag.toUpperCase()}
              </p>
              <h2 className="flex-1 font-serif text-lg font-semibold leading-snug text-ink">
                {article.title}
              </h2>
              <p className="text-xs font-medium text-ink-soft">{s.comingSoon}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <CTABand />
    </>
  );
}
