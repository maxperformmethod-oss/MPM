import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Info, MessageCircle, Salad, Star, User, Wifi } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import {
  BASE_PER_SESSION,
  IN_PERSON_PACKAGES,
  MEAL_PLAN_ADDON,
  ONLINE_PAIN,
  ONLINE_TIERS,
} from "../data/packages";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

function VerifyTag({ label }: { label: string }) {
  return (
    <span className="ml-1 align-middle text-[9px] font-bold uppercase tracking-wide text-terracotta">
      [{label}]
    </span>
  );
}

// Pricing comparison — in-person (confirmed) vs online ([overiť] tiers), side
// by side. Prices come from src/data/packages.ts. Payments are still off:
// the CTA registers interest (→ contact section), no checkout.
export function PackagesSection() {
  const { t } = useI18n();
  const s = t.packagesSection;

  return (
    <section className="bg-cream-dark/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2 lg:items-start"
        >
          {/* ---------- IN-PERSON ---------- */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col rounded-3xl border border-ink/10 bg-cream p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-cream">
                <User size={20} />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-ink">{s.inPersonTitle}</h3>
                <p className="text-sm text-ink-soft">{s.inPersonSubtitle}</p>
              </div>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {IN_PERSON_PACKAGES.map((pkg) => {
                const fullPrice = pkg.sessions * BASE_PER_SESSION;
                const saving = fullPrice - pkg.total;
                return (
                  <li
                    key={pkg.id}
                    className={`rounded-2xl border p-4 ${
                      pkg.featured ? "border-gold bg-gold/5" : "border-ink/10 bg-paper"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="min-w-0 font-semibold text-ink">
                        {pkg.sessions === 1 ? s.singleLabel : `${pkg.sessions} ${s.sessionsLabel}`}
                        {pkg.featured && (
                          <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-cream">
                            <Star size={9} className="fill-cream" />
                            {s.featured}
                          </span>
                        )}
                      </p>
                      <p className="shrink-0 text-right font-serif text-lg font-bold leading-tight text-ink">
                        {pkg.perSession} €
                        <span className="block text-[10px] font-normal text-ink-soft">
                          / {s.perSession}
                        </span>
                      </p>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-soft">
                      <span>
                        {s.totalLabel}:{" "}
                        {saving > 0 && (
                          <span className="text-ink-soft/60 line-through">{fullPrice} €</span>
                        )}{" "}
                        <span className="font-semibold text-ink">{pkg.total} €</span>
                      </span>
                      {saving > 0 && (
                        <span className="rounded-full bg-sage/15 px-2 py-0.5 font-semibold text-sage">
                          {s.saveLabel} {saving} €
                        </span>
                      )}
                      {pkg.freeNutrition && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-sage/15 px-2 py-0.5 font-semibold text-sage">
                          <Salad size={11} />
                          {s.freeNutrition}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* ---------- ONLINE ---------- */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col rounded-3xl border border-ink/10 bg-cream p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-cream">
                <Wifi size={20} />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-ink">{s.onlineTitle}</h3>
                <p className="text-sm text-ink-soft">{s.onlineSubtitle}</p>
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {ONLINE_TIERS.map((tier) => (
                <li key={tier.id} className="rounded-2xl border border-ink/10 bg-paper p-4 text-center">
                  <p className="text-sm font-medium text-ink-soft">
                    {s.onlineTiers[tier.id as keyof typeof s.onlineTiers]}
                  </p>
                  <p className="mt-1 font-serif text-xl font-bold text-ink">
                    {tier.price} €{tier.verify && <VerifyTag label={s.verifyTag} />}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-3 flex items-start gap-2 text-xs text-ink-soft">
              <Info size={13} className="mt-0.5 shrink-0 text-gold" />
              {s.onlineNote}
            </p>

            <div className="mt-3 rounded-2xl border border-gold/30 bg-gold/10 p-4">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-semibold text-ink">{s.onlinePainTitle}</p>
                <p className="whitespace-nowrap font-serif text-lg font-bold text-ink">
                  {s.fromLabel} {ONLINE_PAIN.price} €
                </p>
              </div>
              <p className="mt-1 text-xs text-ink-soft">{s.onlinePainDesc}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Meal-plan add-on + process explanation */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-6 max-w-4xl rounded-2xl border border-sage/30 bg-sage/10 p-6"
        >
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage/15 text-sage">
              <Salad size={22} />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-ink">
                {s.addonTitle}{" "}
                <span className="whitespace-nowrap text-gold">{MEAL_PLAN_ADDON.priceApprox}</span>
              </p>
              <p className="mt-1 text-sm text-ink-soft">{s.addonBody}</p>
              <p className="mt-1 text-sm font-medium text-sage">{s.addonFreeNote}</p>
            </div>
          </div>
          <p className="mt-4 border-t border-sage/20 pt-4 text-sm text-ink-soft">{s.addonProcess}</p>
        </motion.div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-ink px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-ink/85"
          >
            {s.interestCta}
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-gold"
          >
            <MessageCircle size={15} />
            {s.questionCta}
          </Link>
          <p className="mt-1 text-center text-xs text-ink-soft">{s.durationNote}</p>
          <p className="max-w-xl text-center text-xs text-ink-soft">{s.note}</p>
        </div>
      </div>
    </section>
  );
}
