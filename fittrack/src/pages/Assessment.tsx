import { motion } from "framer-motion";
import { ClipboardCheck, Scale, Target, FileText, RefreshCcw, Gauge, Info } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { FAQAccordion } from "../components/FAQAccordion";
import { CTABand } from "../components/CTABand";
import { Photo } from "../components/ui/Photo";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const INCLUDED_ICONS = [ClipboardCheck, Scale, Target, FileText, RefreshCcw, Gauge];

export function Assessment() {
  const { t } = useI18n();
  const s = t.assessmentPage;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-10 aspect-[21/9] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-ink/10 shadow-sm"
        >
          <Photo
            name="assessment"
            alt="Priestor MPM s pruhovým behúňom, kde prebieha pohybová diagnostika."
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 896px, 100vw"
          />
        </motion.div>

        <h2 className="mt-14 text-center font-serif text-2xl font-semibold text-ink">
          {s.includedTitle}
        </h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {s.included.map((item, i) => {
            const Icon = INCLUDED_ICONS[i];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="relative rounded-2xl border border-ink/10 bg-paper p-5 shadow-sm"
              >
                {item.comingSoon && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
                    {s.comingSoonBadge}
                  </span>
                )}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream-dark text-ink">
                  <Icon size={18} />
                </div>
                <p className="mt-3 font-semibold text-ink">{item.title}</p>
                <p className="mt-1.5 text-sm text-ink-soft">{item.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-5"
        >
          <Info size={18} className="mt-0.5 shrink-0 text-gold" />
          <p className="text-sm text-ink">{s.dataNote}</p>
        </motion.div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-serif text-2xl font-semibold text-ink">
            {s.faqTitle}
          </h2>
          <div className="mt-8">
            <FAQAccordion items={s.faq} />
          </div>
        </div>
      </section>

      <CTABand to="/start" label={t.startPage.cta} />
    </>
  );
}
