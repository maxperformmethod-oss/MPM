import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { ReviewsCarousel } from "../components/ReviewsCarousel";
import { Photo } from "../components/ui/Photo";
import { useI18n } from "../i18n/I18nContext";
import { viewportOnce } from "../lib/motion";

export function Results() {
  const { t } = useI18n();
  const s = t.resultsPage;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-10 aspect-[21/9] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-ink/10 shadow-sm"
        >
          <Photo
            name="results"
            alt="Mladý športovec počas drepu s koučom v tréningovom priestore MPM."
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 768px, 100vw"
          />
        </motion.div>

        {/* ⚠️ Reviews are placeholder — see src/data/reviews.ts. Replace with
            real, consented client stories before going live. */}
        <div className="mx-auto mt-14 max-w-3xl">
          <ReviewsCarousel ariaLabel={s.title} />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-soft">
          {s.disclaimer}
        </p>
      </section>

      <CTABand />
    </>
  );
}
