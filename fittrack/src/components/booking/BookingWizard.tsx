import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "../../i18n/I18nContext";
import type { BookingArea as BookingAreaId, BookingFormat as BookingFormatId } from "../../data/booking";
import { BookingArea } from "./BookingArea";
import { BookingFormat } from "./BookingFormat";
import { BookingSummary } from "./BookingSummary";

type Step = 1 | 2 | 3;

export function BookingWizard() {
  const { t } = useI18n();
  const [step, setStep] = useState<Step>(1);
  const [area, setArea] = useState<BookingAreaId | null>(null);
  const [format, setFormat] = useState<BookingFormatId | null>(null);

  function reset() {
    setStep(1);
    setArea(null);
    setFormat(null);
  }

  function handleChooseArea(id: BookingAreaId) {
    setArea(id);
    setStep(2);
  }

  function handleSelectFormat(f: BookingFormatId) {
    setFormat(f);
    setStep(3);
  }

  return (
    <div className="bg-cream">
      <div className="mx-auto flex max-w-md items-center gap-3 px-4 pt-10 sm:px-6">
        {([1, 2, 3] as Step[]).map((s) => (
          <div key={s} className="flex flex-1 items-center gap-3">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                s <= step ? "bg-ink text-cream" : "bg-ink/10 text-ink-soft"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div className="h-px flex-1 bg-ink/10">
                <motion.div
                  className="h-px bg-ink"
                  initial={false}
                  animate={{ width: s < step ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-2 max-w-md px-4 text-center text-[11px] font-medium tracking-wide text-ink-soft sm:px-6">
        {t.booking.stepLabels[step - 1]}
      </p>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="area"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <BookingArea onChoose={handleChooseArea} />
          </motion.div>
        )}
        {step === 2 && area && (
          <motion.div
            key="format"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <BookingFormat area={area} onSelect={handleSelectFormat} onBack={() => setStep(1)} />
          </motion.div>
        )}
        {step === 3 && area && format && (
          <motion.div
            key="summary"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <BookingSummary area={area} format={format} onBack={() => setStep(2)} onRestart={reset} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
