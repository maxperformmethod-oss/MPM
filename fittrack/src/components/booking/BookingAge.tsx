import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { AGE_CATEGORIES, type AgeCategory } from "../../data/booking";
import { fadeUp, staggerContainer } from "../../lib/motion";

export function BookingAge({
  onChoose,
  onBack,
}: {
  onChoose: (age: AgeCategory) => void;
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
        {t.booking.ageTitle}
      </h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {AGE_CATEGORIES.map((age) => (
          <motion.button
            key={age}
            variants={fadeUp}
            onClick={() => onChoose(age)}
            whileHover={{ y: -4 }}
            className="flex items-center justify-center rounded-2xl border border-ink/10 bg-paper px-5 py-7 text-center shadow-sm transition-shadow hover:border-gold hover:shadow-md"
          >
            <p className="font-serif text-lg font-semibold text-ink">{t.booking.ages[age]}</p>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
