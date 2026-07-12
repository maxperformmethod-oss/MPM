import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";
import type { PillarId } from "../../data/pillars";
import { useI18n } from "../../i18n/I18nContext";
import { ButtonLink } from "../ui/Button";

export function WizardResult({
  pillarId,
  option,
  onRestart,
}: {
  pillarId: PillarId;
  option: string;
  onRestart: () => void;
}) {
  const { t } = useI18n();
  const result = t.wizard.paths[pillarId].result;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6"
    >
      <p className="text-xs font-semibold tracking-[0.14em] text-ink-soft">
        {t.wizard.step3Tag}
      </p>

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold"
      >
        <CheckCircle2 size={28} />
      </motion.div>

      <h1 className="mt-5 font-serif text-3xl font-bold text-ink sm:text-4xl">
        {result.heading}
      </h1>
      <p className="mx-auto mt-2 text-sm text-ink-soft">
        {t.wizard.basedOn}: {t.pillars[pillarId].title} → {option}
      </p>
      <p className="mx-auto mt-5 max-w-lg text-base text-ink-soft">{result.body}</p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink to={`/contact?service=${pillarId}`}>{result.cta}</ButtonLink>
        <ButtonLink to="/approach" variant="secondary">
          {t.wizard.exploreApproach}
        </ButtonLink>
      </div>

      <button
        onClick={onRestart}
        className="mx-auto mt-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <RotateCcw size={14} />
        {t.wizard.startOver}
      </button>
    </motion.div>
  );
}
