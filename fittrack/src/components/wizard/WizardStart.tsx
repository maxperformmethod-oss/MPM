import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Salad } from "lucide-react";
import { PILLARS, type PillarId } from "../../data/pillars";
import { useI18n } from "../../i18n/I18nContext";
import { fadeUp, staggerContainer } from "../../lib/motion";

export function WizardStart({ onChoose }: { onChoose: (id: PillarId) => void }) {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold tracking-[0.18em] text-gold">
          {t.wizard.eyebrow}
        </span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
        {t.wizard.title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-sm text-ink-soft sm:text-base">
        {t.wizard.lead}
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-6 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4"
      >
        {PILLARS.map(({ id, icon: Icon }) => (
          <motion.button
            key={id}
            variants={fadeUp}
            onClick={() => onChoose(id)}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-paper p-5 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
              <Icon size={20} />
            </div>
            <div>
              <p className="font-serif font-semibold text-ink">
                {t.pillars[id].title}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{t.pillars[id].short}</p>
            </div>
            <span className="mt-1 flex items-center gap-1 text-sm font-medium text-gold">
              {t.wizard.choose}
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </motion.button>
        ))}

        <motion.div variants={fadeUp}>
          <Link
            to="/nutrition-questionnaire"
            className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-paper p-5 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
              <Salad size={20} />
            </div>
            <div>
              <p className="font-serif font-semibold text-ink">
                {t.nutritionQuestionnaire.cardTitle}
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                {t.nutritionQuestionnaire.cardShort}
              </p>
            </div>
            <span className="mt-1 flex items-center gap-1 text-sm font-medium text-gold">
              {t.wizard.choose}
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <Link
        to="/approach"
        className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-ink"
      >
        {t.wizard.exploreApproach}
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}
