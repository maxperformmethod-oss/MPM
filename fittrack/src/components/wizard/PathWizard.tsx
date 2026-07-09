import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Path } from "../../data/paths";
import { WizardStart } from "./WizardStart";
import { WizardDetails } from "./WizardDetails";
import { WizardResult } from "./WizardResult";

type Step = 1 | 2 | 3;

const STEP_LABELS: Record<Step, string> = {
  1: "Starting Point",
  2: "Details",
  3: "Your Path",
};

export function PathWizard() {
  const [step, setStep] = useState<Step>(1);
  const [path, setPath] = useState<Path | null>(null);
  const [option, setOption] = useState<string | null>(null);

  function reset() {
    setStep(1);
    setPath(null);
    setOption(null);
  }

  function handleChoosePath(chosen: Path) {
    setPath(chosen);
    setStep(2);
  }

  function handleSelectOption(chosenOption: string) {
    setOption(chosenOption);
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
        {STEP_LABELS[step]}
      </p>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="start"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <WizardStart onChoose={handleChoosePath} />
          </motion.div>
        )}
        {step === 2 && path && (
          <motion.div
            key="details"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <WizardDetails
              path={path}
              onSelect={handleSelectOption}
              onBack={() => setStep(1)}
            />
          </motion.div>
        )}
        {step === 3 && path && option && (
          <motion.div
            key="result"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <WizardResult path={path} option={option} onRestart={reset} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
