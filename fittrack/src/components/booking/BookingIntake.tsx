import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";
import { useI18n } from "../../i18n/I18nContext";
import { TIME_SINCE_OPTIONS, type TimeSinceOption } from "../../data/booking";

export function BookingIntake({
  onContinue,
  onBack,
}: {
  onContinue: (hasPain: boolean, timeSince: TimeSinceOption) => void;
  onBack: () => void;
}) {
  const { t } = useI18n();
  const s = t.intake;
  const [hasPain, setHasPain] = useState<boolean | null>(null);
  const [timeSince, setTimeSince] = useState<TimeSinceOption | null>(null);

  const canContinue = hasPain !== null && timeSince !== null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={15} />
        {t.wizard.back}
      </button>

      <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">{s.title}</h1>

      <div className="mt-8">
        <p className="text-sm font-semibold text-ink">{s.painQuestion}</p>
        <div className="mt-3 flex gap-3">
          {[
            { value: true, label: s.painYes },
            { value: false, label: s.painNo },
          ].map((opt) => (
            <button
              key={String(opt.value)}
              onClick={() => setHasPain(opt.value)}
              aria-pressed={hasPain === opt.value}
              className={`rounded-xl border px-6 py-3 text-sm font-medium transition-colors ${
                hasPain === opt.value
                  ? "border-gold bg-gold/10 text-ink"
                  : "border-ink/10 bg-paper text-ink-soft hover:border-ink/25"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold text-ink">{s.timeQuestion}</p>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {TIME_SINCE_OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => setTimeSince(option)}
              aria-pressed={timeSince === option}
              className={`rounded-xl border px-5 py-3 text-left text-sm font-medium transition-colors ${
                timeSince === option
                  ? "border-gold bg-gold/10 text-ink"
                  : "border-ink/10 bg-paper text-ink-soft hover:border-ink/25"
              }`}
            >
              {s.timeOptions[option]}
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={() => hasPain !== null && timeSince !== null && onContinue(hasPain, timeSince)}
        disabled={!canContinue}
        className="mt-9"
      >
        {s.continue}
      </Button>
    </div>
  );
}
