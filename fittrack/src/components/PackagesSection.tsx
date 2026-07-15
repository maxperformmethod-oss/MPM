import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TRAINING_PACKAGES } from "../data/packages";
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
          className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3"
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
              <p className="mt-3 flex-1 text-sm text-ink-soft">{pkg.description[lang]}</p>

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

        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-ink-soft">{s.note}</p>
      </div>
    </section>
  );
}
