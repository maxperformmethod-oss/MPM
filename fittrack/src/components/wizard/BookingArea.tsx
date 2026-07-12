import { motion } from "framer-motion";
import { ArrowLeft, Footprints, Bone, Move, Dumbbell } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { BOOKING_AREAS, type BookingArea as BookingAreaId } from "../../data/booking";
import { fadeUp, staggerContainer } from "../../lib/motion";

const AREA_ICONS: Record<BookingAreaId, typeof Footprints> = {
  ankle: Footprints,
  knee: Bone,
  hip: Move,
  shoulder: Dumbbell,
};

export function BookingArea({
  onChoose,
  onBack,
}: {
  onChoose: (area: BookingAreaId) => void;
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
        {t.intake.areaTitle}
      </h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {BOOKING_AREAS.map((area) => {
          const Icon = AREA_ICONS[area];
          return (
            <motion.button
              key={area}
              variants={fadeUp}
              onClick={() => onChoose(area)}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-paper p-5 text-center shadow-sm transition-shadow hover:border-gold hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
                <Icon size={20} />
              </div>
              <p className="font-serif font-semibold text-ink">{t.booking.areas[area]}</p>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
