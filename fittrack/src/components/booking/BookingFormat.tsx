import { motion } from "framer-motion";
import { ArrowLeft, Video, MapPin } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { BOOKING_FORMATS, type BookingFormat as BookingFormatId } from "../../data/booking";
import type { PillarId } from "../../data/pillars";

const FORMAT_ICONS: Record<BookingFormatId, typeof Video> = {
  online: Video,
  "in-person": MapPin,
};

export function BookingFormat({
  pillarId,
  onSelect,
  onBack,
}: {
  pillarId: PillarId;
  onSelect: (format: BookingFormatId) => void;
  onBack: () => void;
}) {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={15} />
        {t.wizard.back}
      </button>

      <p className="text-xs font-semibold tracking-[0.14em] text-ink-soft">
        {t.pillars[pillarId].title.toUpperCase()}
      </p>
      <h1 className="mt-3 font-serif text-2xl font-bold text-ink sm:text-3xl">
        {t.booking.formatTitle}
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {BOOKING_FORMATS.map((format, i) => {
          const Icon = FORMAT_ICONS[format];
          return (
            <motion.button
              key={format}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ y: -2 }}
              onClick={() => onSelect(format)}
              className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper px-5 py-4 text-left shadow-sm hover:border-gold hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream-dark text-ink">
                <Icon size={18} />
              </div>
              <span className="text-sm font-medium text-ink">{t.booking.formats[format]}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
