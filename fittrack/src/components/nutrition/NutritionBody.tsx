import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { Button } from "../ui/Button";
import { HEIGHT_RANGE, WEIGHT_RANGE, inRange } from "../../lib/validate";
import type { NutritionFormData } from "./NutritionWizard";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none";

export function NutritionBody({
  data,
  onUpdate,
  onContinue,
  onBack,
}: {
  data: NutritionFormData;
  onUpdate: (patch: Partial<NutritionFormData>) => void;
  onContinue: () => void;
  onBack: () => void;
}) {
  const { t } = useI18n();
  const s = t.nutritionQuestionnaire.body;
  const [weightError, setWeightError] = useState<string | null>(null);
  const [heightError, setHeightError] = useState<string | null>(null);

  const canContinue =
    data.dob !== "" &&
    data.gender !== null &&
    data.weight.trim() !== "" &&
    data.height.trim() !== "" &&
    (data.calorieMode === "calculated" || data.calorieValue.trim() !== "");

  function handleContinue() {
    let ok = true;
    if (!inRange(data.weight, ...WEIGHT_RANGE)) {
      setWeightError(t.validation.weight);
      ok = false;
    }
    if (!inRange(data.height, ...HEIGHT_RANGE)) {
      setHeightError(t.validation.height);
      ok = false;
    }
    if (ok) onContinue();
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={15} />
        {t.nutritionQuestionnaire.back}
      </button>

      <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">{s.title}</h1>
      <p className="mt-2 text-sm text-ink-soft">{s.lead}</p>

      <div className="mt-8 flex flex-col gap-4">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {s.dob} *
          <input
            type="date"
            required
            value={data.dob}
            onChange={(e) => onUpdate({ dob: e.target.value })}
            className={inputClasses}
          />
        </label>

        <div>
          <p className="text-sm font-medium text-ink">{s.gender} *</p>
          <div className="mt-1.5 flex gap-3">
            {(
              [
                { value: "male" as const, label: s.genderMale },
                { value: "female" as const, label: s.genderFemale },
              ]
            ).map((opt) => (
              <button
                key={opt.value}
                onClick={() => onUpdate({ gender: opt.value })}
                aria-pressed={data.gender === opt.value}
                className={`rounded-xl border px-6 py-3 text-sm font-medium transition-colors ${
                  data.gender === opt.value
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-ink/10 bg-paper text-ink-soft hover:border-ink/25"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            {s.weight} *
            <input
              type="number"
              inputMode="decimal"
              required
              value={data.weight}
              onChange={(e) => {
                onUpdate({ weight: e.target.value });
                if (weightError) setWeightError(null);
              }}
              className={`${inputClasses} ${weightError ? "!border-terracotta" : ""}`}
            />
            {weightError && <span className="text-xs font-normal text-terracotta">{weightError}</span>}
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            {s.height} *
            <input
              type="number"
              inputMode="decimal"
              required
              value={data.height}
              onChange={(e) => {
                onUpdate({ height: e.target.value });
                if (heightError) setHeightError(null);
              }}
              className={`${inputClasses} ${heightError ? "!border-terracotta" : ""}`}
            />
            {heightError && <span className="text-xs font-normal text-terracotta">{heightError}</span>}
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            {s.bodyFat}
            <input
              type="number"
              inputMode="decimal"
              value={data.bodyFat}
              onChange={(e) => onUpdate({ bodyFat: e.target.value })}
              className={inputClasses}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            {s.waist}
            <input
              type="number"
              inputMode="decimal"
              value={data.waist}
              onChange={(e) => onUpdate({ waist: e.target.value })}
              className={inputClasses}
            />
          </label>
        </div>

        <div>
          <p className="text-sm font-medium text-ink">{s.calorieTitle}</p>
          <div className="mt-1.5 flex gap-0.5 rounded-xl border border-ink/10 bg-paper p-1">
            {(
              [
                { value: "manual" as const, label: s.calorieManual },
                { value: "calculated" as const, label: s.calorieCalculated },
              ]
            ).map((opt) => (
              <button
                key={opt.value}
                onClick={() => onUpdate({ calorieMode: opt.value })}
                aria-pressed={data.calorieMode === opt.value}
                className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  data.calorieMode === opt.value
                    ? "bg-ink text-cream"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {data.calorieMode === "manual" ? (
            <label className="mt-3 flex flex-col gap-1.5 text-sm font-medium text-ink">
              {s.calorieManualLabel}
              <input
                type="number"
                inputMode="numeric"
                value={data.calorieValue}
                onChange={(e) => onUpdate({ calorieValue: e.target.value })}
                className={inputClasses}
              />
            </label>
          ) : (
            <p className="mt-3 text-xs text-ink-soft">{s.calorieCalculatedNote}</p>
          )}
        </div>

        <Button onClick={handleContinue} disabled={!canContinue} className="mt-3">
          {s.continue}
        </Button>
      </div>
    </div>
  );
}
