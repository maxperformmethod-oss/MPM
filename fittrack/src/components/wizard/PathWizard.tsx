import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { isPillarId, type PillarId } from "../../data/pillars";
import type {
  AgeCategory,
  BookingArea as BookingAreaId,
  BookingFormat as BookingFormatId,
  CoachingSport,
  LtadStage,
  TimeSinceOption,
} from "../../data/booking";
import { useI18n } from "../../i18n/I18nContext";
import { WizardStart } from "./WizardStart";
import { BookingIntake } from "../booking/BookingIntake";
import { BookingArea } from "../booking/BookingArea";
import { BookingSport } from "../booking/BookingSport";
import { BookingAge } from "../booking/BookingAge";
import { BookingLtadStage } from "../booking/BookingLtadStage";
import { BookingFormat } from "../booking/BookingFormat";
import { BookingSummary } from "../booking/BookingSummary";

type StepId =
  | "start"
  | "intake"
  | "area"
  | "sport"
  | "age"
  | "ltadStage"
  | "format"
  | "summary";

// Each pillar has its own detail steps before format & payment:
// return-to-sport asks pain/time-since/area, performance coaching asks
// sport + age, LTAD asks for the age/development stage. Steps and the
// stepper are always derived from this single source, so they can never
// drift out of sync with what's on screen.
function getSteps(pillarId: PillarId | null): StepId[] {
  if (pillarId === "return-to-sport") {
    return ["start", "intake", "area", "format", "summary"];
  }
  if (pillarId === "performance-coaching") {
    return ["start", "sport", "age", "format", "summary"];
  }
  if (pillarId === "ltad") {
    return ["start", "ltadStage", "format", "summary"];
  }
  return ["start", "format", "summary"];
}

function firstStepAfterStart(pillarId: PillarId): StepId {
  return getSteps(pillarId)[1];
}

export function PathWizard() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();

  // Deep-link support: #/find-your-path?path=<pillar-id> skips step 1.
  const linkedPath = searchParams.get("path");
  const initialPillar = isPillarId(linkedPath) ? linkedPath : null;

  const [pillarId, setPillarId] = useState<PillarId | null>(initialPillar);
  const [stepId, setStepId] = useState<StepId>(
    initialPillar ? firstStepAfterStart(initialPillar) : "start",
  );
  const [hasPain, setHasPain] = useState<boolean | null>(null);
  const [timeSince, setTimeSince] = useState<TimeSinceOption | null>(null);
  const [area, setArea] = useState<BookingAreaId | null>(null);
  const [sport, setSport] = useState<CoachingSport | null>(null);
  const [ageCategory, setAgeCategory] = useState<AgeCategory | null>(null);
  const [ltadStage, setLtadStage] = useState<LtadStage | null>(null);
  const [format, setFormat] = useState<BookingFormatId | null>(null);

  const steps = getSteps(pillarId);
  const currentIndex = steps.indexOf(stepId);

  function reset() {
    setPillarId(null);
    setStepId("start");
    setHasPain(null);
    setTimeSince(null);
    setArea(null);
    setSport(null);
    setAgeCategory(null);
    setLtadStage(null);
    setFormat(null);
  }

  function handleBack() {
    const idx = steps.indexOf(stepId);
    if (idx > 0) setStepId(steps[idx - 1]);
  }

  function handleChoosePillar(id: PillarId) {
    setPillarId(id);
    setStepId(firstStepAfterStart(id));
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

  function handleChooseSport(id: CoachingSport) {
    setSport(id);
    setStepId("age");
  }

  function handleChooseAge(id: AgeCategory) {
    setAgeCategory(id);
    setStepId("format");
  }

  function handleChooseLtadStage(id: LtadStage) {
    setLtadStage(id);
    setStepId("format");
  }

  function handleSelectFormat(f: BookingFormatId) {
    setFormat(f);
    setStepId("summary");
  }

  return (
    <div className="overflow-x-clip bg-cream">
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
        {stepId === "sport" && pillarId && (
          <BookingSport onChoose={handleChooseSport} onBack={handleBack} />
        )}
        {stepId === "age" && pillarId && (
          <BookingAge onChoose={handleChooseAge} onBack={handleBack} />
        )}
        {stepId === "ltadStage" && pillarId && (
          <BookingLtadStage onChoose={handleChooseLtadStage} onBack={handleBack} />
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
            sport={sport}
            ageCategory={ageCategory}
            ltadStage={ltadStage}
            format={format}
            onBack={handleBack}
            onRestart={reset}
          />
        )}
      </motion.div>
    </div>
  );
}
