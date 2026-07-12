import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { isPillarId, type PillarId } from "../../data/pillars";
import type {
  BookingArea as BookingAreaId,
  BookingFormat as BookingFormatId,
  TimeSinceOption,
} from "../../data/booking";
import { useI18n } from "../../i18n/I18nContext";
import { WizardStart } from "./WizardStart";
import { BookingIntake } from "./BookingIntake";
import { BookingArea } from "./BookingArea";
import { BookingFormat } from "./BookingFormat";
import { BookingSummary } from "./BookingSummary";

type StepId = "start" | "intake" | "area" | "format" | "summary";

// Only "return-to-sport" collects pain/time-since/area details before
// moving to format & payment — the other two paths skip straight there.
// Steps and the stepper are always derived from this single source, so
// they can never drift out of sync with what's on screen.
function getSteps(pillarId: PillarId | null): StepId[] {
  if (pillarId === "return-to-sport") {
    return ["start", "intake", "area", "format", "summary"];
  }
  return ["start", "format", "summary"];
}

export function PathWizard() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();

  // Deep-link support: #/find-your-path?path=<pillar-id> skips step 1.
  const linkedPath = searchParams.get("path");
  const initialPillar = isPillarId(linkedPath) ? linkedPath : null;

  const [pillarId, setPillarId] = useState<PillarId | null>(initialPillar);
  const [stepId, setStepId] = useState<StepId>(
    initialPillar ? (initialPillar === "return-to-sport" ? "intake" : "format") : "start",
  );
  const [hasPain, setHasPain] = useState<boolean | null>(null);
  const [timeSince, setTimeSince] = useState<TimeSinceOption | null>(null);
  const [area, setArea] = useState<BookingAreaId | null>(null);
  const [format, setFormat] = useState<BookingFormatId | null>(null);

  const steps = getSteps(pillarId);
  const currentIndex = steps.indexOf(stepId);

  function reset() {
    setPillarId(null);
    setStepId("start");
    setHasPain(null);
    setTimeSince(null);
    setArea(null);
    setFormat(null);
  }

  function handleBack() {
    const idx = steps.indexOf(stepId);
    if (idx > 0) setStepId(steps[idx - 1]);
  }

  function handleChoosePillar(id: PillarId) {
    setPillarId(id);
    setStepId(id === "return-to-sport" ? "intake" : "format");
  }

  function handleIntakeContinue(pain: boolean, time: TimeSinceOption) {
    setHasPain(pain);
    setTimeSince(time);
    setStepId("area");
  }

  function handleChooseArea(id: BookingAreaId) {
    setArea(id);
    setStepId("format");
  }

  function handleSelectFormat(f: BookingFormatId) {
    setFormat(f);
    setStepId("summary");
  }

  return (
    <div className="bg-cream">
      <div className="mx-auto flex max-w-md items-center gap-3 px-4 pt-10 sm:px-6">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-3">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                i <= currentIndex ? "bg-ink text-cream" : "bg-ink/10 text-ink-soft"
              }`}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="h-px flex-1 bg-ink/10">
                <motion.div
                  className="h-px bg-ink"
                  initial={false}
                  animate={{ width: i < currentIndex ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-2 max-w-md px-4 text-center text-[11px] font-medium tracking-wide text-ink-soft sm:px-6">
        {t.wizard.stepLabels[stepId]}
      </p>

      <motion.div
        key={stepId}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {stepId === "start" && <WizardStart onChoose={handleChoosePillar} />}
        {stepId === "intake" && pillarId && (
          <BookingIntake onContinue={handleIntakeContinue} onBack={handleBack} />
        )}
        {stepId === "area" && pillarId && (
          <BookingArea onChoose={handleChooseArea} onBack={handleBack} />
        )}
        {stepId === "format" && pillarId && (
          <BookingFormat pillarId={pillarId} onSelect={handleSelectFormat} onBack={handleBack} />
        )}
        {stepId === "summary" && pillarId && format && (
          <BookingSummary
            pillarId={pillarId}
            hasPain={hasPain}
            timeSince={timeSince}
            area={area}
            format={format}
            onBack={handleBack}
            onRestart={reset}
          />
        )}
      </motion.div>
    </div>
  );
}
