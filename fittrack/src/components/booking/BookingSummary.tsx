import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "../ui/Button";
import { useI18n } from "../../i18n/I18nContext";
import {
  PAYMENT_LINKS,
  type BookingArea as BookingAreaId,
  type BookingFormat as BookingFormatId,
} from "../../data/booking";

export function BookingSummary({
  area,
  format,
  onBack,
  onRestart,
}: {
  area: BookingAreaId;
  format: BookingFormatId;
  onBack: () => void;
  onRestart: () => void;
}) {
  const { t } = useI18n();
  const s = t.booking;
  const paymentLink = PAYMENT_LINKS[`${area}-${format}`];
  const isConnected = Boolean(paymentLink);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6"
    >
      <p className="text-xs font-semibold tracking-[0.14em] text-ink-soft">{s.step3Tag}</p>

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold"
      >
        <CheckCircle2 size={28} />
      </motion.div>

      <h1 className="mt-5 font-serif text-3xl font-bold text-ink sm:text-4xl">
        {s.step3Title}
      </h1>

      <div className="mx-auto mt-7 max-w-sm rounded-2xl border border-ink/10 bg-paper p-6 text-left shadow-sm">
        <p className="text-xs font-semibold tracking-[0.1em] text-gold">
          {s.summaryLabel.toUpperCase()}
        </p>
        <p className="mt-2 font-serif text-lg font-semibold text-ink">
          {s.areas[area]} · {s.formats[format]}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
          <span className="text-sm text-ink-soft">{s.priceLabel}</span>
          <span className="rounded-md border border-dashed border-ink/30 px-2 py-1 text-sm font-semibold text-ink-soft">
            {s.pricePlaceholder}
          </span>
        </div>
      </div>
      <p className="mx-auto mt-3 max-w-sm text-xs text-ink-soft">{s.priceNote}</p>

      <div className="mt-8">
        {isConnected ? (
          <>
            <a
              href={paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink/85"
            >
              {s.payCta}
            </a>
            <p className="mx-auto mt-3 max-w-sm text-xs text-ink-soft">{s.testModeNote}</p>
          </>
        ) : (
          <>
            <Button disabled className="w-full sm:w-auto">
              {s.payCta}
            </Button>
            <p className="mx-auto mt-3 max-w-sm text-xs text-ink-soft">{s.comingSoonNote}</p>
          </>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button onClick={onBack} className="text-sm font-medium text-ink-soft hover:text-ink">
          {s.back}
        </button>
        <button
          onClick={onRestart}
          className="flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
        >
          <RotateCcw size={14} />
          {s.startOver}
        </button>
      </div>
    </motion.div>
  );
}
