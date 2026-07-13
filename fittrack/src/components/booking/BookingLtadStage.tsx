import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { LTAD_STAGES, type LtadStage } from "../../data/booking";
import { fadeUp, staggerContainer } from "../../lib/motion";

export function BookingLtadStage({
  onChoose,
  onBack,
}: {
  onChoose: (stage: LtadStage) => void;
  onBack: () => void;
}) {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={15} />
        {t.wizard.back}
      </button>

      <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
        {t.booking.ltadTitle}
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-sm text-ink-soft">{t.booking.ltadLead}</p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2"
      >
        {LTAD_STAGES.map((stage) => {
          const s = t.booking.ltadStages[stage];
          return (
            <motion.button
              key={stage}
              variants={fadeUp}
              onClick={() => onChoose(stage)}
              whileHover={{ y: -4 }}
              className="flex flex-col items-start gap-1.5 rounded-2xl border border-ink/10 bg-paper p-5 text-left shadow-sm transition-shadow hover:border-gold hover:shadow-md"
            >
              <p className="font-serif text-lg font-bold text-gold">{s.range}</p>
              <p className="font-semibold text-ink">{s.title}</p>
              <p className="text-sm text-ink-soft">{s.desc}</p>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
