import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "../../i18n/I18nContext";
import type { AllergenId, FoodItemId, PreferenceValue } from "../../data/nutritionPreferences";
import { NutritionBasics } from "./NutritionBasics";
import { NutritionBody } from "./NutritionBody";
import { NutritionPreferences } from "./NutritionPreferences";
import { NutritionHealth } from "./NutritionHealth";
import { NutritionPayment } from "./NutritionPayment";

export type NutritionFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: "male" | "female" | null;
  weight: string;
  height: string;
  bodyFat: string;
  waist: string;
  calorieMode: "manual" | "calculated";
  calorieValue: string;
  preferences: Partial<Record<FoodItemId, PreferenceValue>>;
  allowExpensiveFoods: boolean | null;
  allergens: AllergenId[];
  diagnoses: string;
  medications: string;
  notes: string;
  gdprConsent: boolean;
};

const INITIAL_DATA: NutritionFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  gender: null,
  weight: "",
  height: "",
  bodyFat: "",
  waist: "",
  calorieMode: "calculated",
  calorieValue: "",
  preferences: {},
  allowExpensiveFoods: null,
  allergens: [],
  diagnoses: "",
  medications: "",
  notes: "",
  gdprConsent: false,
};

const STEPS = ["basics", "body", "preferences", "health", "payment"] as const;
type StepId = (typeof STEPS)[number];

export function NutritionWizard() {
  const { t } = useI18n();
  const [stepId, setStepId] = useState<StepId>("basics");
  const [data, setData] = useState<NutritionFormData>(INITIAL_DATA);

  const currentIndex = STEPS.indexOf(stepId);

  function update(patch: Partial<NutritionFormData>) {
    setData((prev) => ({ ...prev, ...patch }));
  }

  function reset() {
    setStepId("basics");
    setData(INITIAL_DATA);
  }

  function handleBack() {
    if (currentIndex > 0) setStepId(STEPS[currentIndex - 1]);
  }

  function handleContinue() {
    if (currentIndex < STEPS.length - 1) setStepId(STEPS[currentIndex + 1]);
  }

  return (
    <div className="bg-cream">
      <div className="mx-auto flex max-w-md items-center gap-3 px-4 pt-10 sm:px-6">
        {STEPS.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-3">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                i <= currentIndex ? "bg-ink text-cream" : "bg-ink/10 text-ink-soft"
              }`}
            >
              {i + 1}
            </div>
            {i < STEPS.length - 1 && (
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
        {t.nutritionQuestionnaire.stepLabels[stepId]}
      </p>

      <motion.div
        key={stepId}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {stepId === "basics" && (
          <NutritionBasics data={data} onUpdate={update} onContinue={handleContinue} />
        )}
        {stepId === "body" && (
          <NutritionBody
            data={data}
            onUpdate={update}
            onContinue={handleContinue}
            onBack={handleBack}
          />
        )}
        {stepId === "preferences" && (
          <NutritionPreferences
            data={data}
            onUpdate={update}
            onContinue={handleContinue}
            onBack={handleBack}
          />
        )}
        {stepId === "health" && (
          <NutritionHealth
            data={data}
            onUpdate={update}
            onContinue={handleContinue}
            onBack={handleBack}
          />
        )}
        {stepId === "payment" && (
          <NutritionPayment data={data} onBack={handleBack} onRestart={reset} />
        )}
      </motion.div>
    </div>
  );
}
