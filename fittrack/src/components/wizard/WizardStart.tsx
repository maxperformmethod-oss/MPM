import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Baby, MessageCircle, Salad, Scale } from "lucide-react";
import { PILLARS, type PillarId } from "../../data/pillars";
import { useI18n } from "../../i18n/I18nContext";
import { fadeUp, staggerContainer } from "../../lib/motion";

// Small unobtrusive "Have a question?" affordance, bottom-right of each program
// card. It's a sibling of the (clickable) card — positioned on top — so it
// navigates to the contact section instead of triggering the card, and never
// opens an email app. Kept out of the card's own <button>/<Link> to avoid
// nesting interactive elements.
function QuestionLink() {
  const { t } = useI18n();
  return (
    <Link
      to="/contact"
      className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1 text-xs font-medium text-ink-soft/70 transition-colors hover:text-gold"
    >
      <MessageCircle size={13} />
      {t.packagesSection.questionCta}
    </Link>
  );
}

const cardClasses =
  "group flex h-full flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-paper p-5 pb-10 text-left shadow-sm transition-shadow hover:shadow-md";

export function WizardStart({ onChoose }: { onChoose: (id: PillarId) => void }) {
  const { t } = useI18n();

  const linkCards = [
    { to: "/pregnancy", icon: Baby, title: t.pregnancyPage.cardTitle, short: t.pregnancyPage.cardShort },
    { to: "/weight-loss", icon: Scale, title: t.weightLossPage.cardTitle, short: t.weightLossPage.cardShort },
    {
      to: "/nutrition-questionnaire",
      icon: Salad,
      title: t.nutritionQuestionnaire.cardTitle,
      short: t.nutritionQuestionnaire.cardShort,
    },
  ];

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
        className="mt-6 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3"
      >
        {PILLARS.map(({ id, icon: Icon }) => (
          <motion.div key={id} variants={fadeUp} className="relative">
            <button onClick={() => onChoose(id)} className={`${cardClasses} w-full hover:-translate-y-1`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
                <Icon size={20} />
              </div>
              <div>
                <p className="font-serif font-semibold text-ink">{t.pillars[id].title}</p>
                <p className="mt-1 text-sm text-ink-soft">{t.pillars[id].short}</p>
              </div>
              <span className="mt-1 flex items-center gap-1 text-sm font-medium text-gold">
                {t.wizard.choose}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <QuestionLink />
          </motion.div>
        ))}

        {linkCards.map(({ to, icon: Icon, title, short }) => (
          <motion.div key={to} variants={fadeUp} className="relative">
            <Link to={to} className={cardClasses}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
                <Icon size={20} />
              </div>
              <div>
                <p className="font-serif font-semibold text-ink">{title}</p>
                <p className="mt-1 text-sm text-ink-soft">{short}</p>
              </div>
              <span className="mt-1 flex items-center gap-1 text-sm font-medium text-gold">
                {t.wizard.choose}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <QuestionLink />
          </motion.div>
        ))}
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
