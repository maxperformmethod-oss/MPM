import { motion } from "framer-motion";
import { HeartHandshake, Dumbbell, Repeat } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const POINT_ICONS = [HeartHandshake, Dumbbell, Repeat];

export function Nutrition() {
  const { t } = useI18n();
  const s = t.nutritionPage;

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
      </section>

      <CTABand />
    </>
  );
}
