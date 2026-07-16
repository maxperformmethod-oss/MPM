import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Salad, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { MEAL_PLAN_ADDON, TRAINING_PACKAGES } from "../data/packages";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

// Visual preview of the training packages. Prices are intentionally hidden
// ("Cena čoskoro") and there is NO checkout button yet — the CTA is a plain
// email enquiry. See src/data/packages.ts for the Stripe/pricing TODO.
export function PackagesSection() {
  const { t, lang } = useI18n();
  const s = t.packagesSection;

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TRAINING_PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeUp}
              className={`relative flex flex-col rounded-2xl border bg-cream p-6 shadow-sm ${
                pkg.featured ? "border-gold" : "border-ink/10"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-cream">
                  <Star size={11} className="fill-cream" />
                  {s.featured}
                </span>
              )}
              <p className="font-serif text-xl font-bold text-ink">{pkg.title[lang]}</p>
              <p className="mt-1 text-3xl font-bold text-gold">{pkg.sessions}×</p>
              <p className="mt-3 text-sm text-ink-soft">{pkg.description[lang]}</p>

              {/* Free-nutrition benefit — only on the 10- and 20-session packs. */}
              {pkg.freeNutrition && (
                <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-sage/15 px-2.5 py-1 text-xs font-semibold text-sage">
                  <Salad size={13} />
                  {s.freeNutrition}
                </p>
              )}

              <div className="flex-1" />

              {/* Price hidden until finalized (packages.ts price === null). */}
              <p className="mt-5 rounded-lg border border-dashed border-ink/25 py-2 text-center text-sm font-semibold text-ink-soft">
                {s.priceSoon}
              </p>

              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/85"
              >
                {s.interestCta}
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Meal-plan add-on — the only published price on the site (~50 €). */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-sage/30 bg-sage/10 p-6 text-center sm:flex-row sm:text-left"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage/15 text-sage">
            <Salad size={22} />
          </div>
          <div className="flex-1">
            <p className="font-serif text-lg font-bold text-ink">
              {s.addonTitle}{" "}
              <span className="whitespace-nowrap text-gold">{MEAL_PLAN_ADDON.priceApprox}</span>
            </p>
            <p className="mt-1 text-sm text-ink-soft">{s.addonBody}</p>
            <p className="mt-1 text-sm font-medium text-sage">{s.addonFreeNote}</p>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm font-medium text-ink-soft">
          {s.durationNote}
        </p>
        <p className="mx-auto mt-2 max-w-xl text-center text-xs text-ink-soft">{s.note}</p>
      </div>
    </section>
  );
}
