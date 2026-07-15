import { motion } from "framer-motion";
import { Salad, HeartPulse, LineChart, ArrowRight, TriangleAlert } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { ButtonLink } from "../components/ui/Button";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const POINT_ICONS = [Salad, HeartPulse, LineChart];

// Weight-reduction program intro. The funnel reuses the existing nutrition
// questionnaire (incl. its GDPR health-data consent + payment step) — no
// duplicate form. Health disclaimer is mandatory on this page.
export function WeightLoss() {
  const { t } = useI18n();
  const s = t.weightLossPage;

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
          {s.points.map((point, i) => {
            const Icon = POINT_ICONS[i];
            return (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream-dark text-ink">
                  <Icon size={18} />
                </div>
                <p className="mt-3 font-serif font-semibold text-ink">{point.title}</p>
                <p className="mt-1.5 text-sm text-ink-soft">{point.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-terracotta/30 bg-terracotta/10 p-5"
        >
          <TriangleAlert size={18} className="mt-0.5 shrink-0 text-terracotta" />
          <p className="text-sm text-ink">{s.disclaimer}</p>
        </motion.div>

        <div className="mt-10 text-center">
          <ButtonLink to="/weight-questionnaire" className="!inline-flex">
            {s.cta}
            <ArrowRight size={15} />
          </ButtonLink>
          <p className="mx-auto mt-3 max-w-md text-xs text-ink-soft">{s.ctaNote}</p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
