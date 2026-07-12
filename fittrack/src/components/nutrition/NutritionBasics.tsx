import { useI18n } from "../../i18n/I18nContext";
import { Button } from "../ui/Button";
import type { NutritionFormData } from "./NutritionWizard";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none";

export function NutritionBasics({
  data,
  onUpdate,
  onContinue,
}: {
  data: NutritionFormData;
  onUpdate: (patch: Partial<NutritionFormData>) => void;
  onContinue: () => void;
}) {
  const { t } = useI18n();
  const s = t.nutritionQuestionnaire.basics;

  const canContinue = data.firstName.trim() !== "" && data.email.trim() !== "";

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold tracking-[0.18em] text-gold">
          {t.nutritionQuestionnaire.eyebrow}
        </span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h1 className="text-center font-serif text-3xl font-bold text-ink sm:text-4xl">{s.title}</h1>
      <p className="mx-auto mt-3 max-w-md text-center text-sm text-ink-soft sm:text-base">
        {s.lead}
      </p>

      <div className="mx-auto mt-9 flex max-w-md flex-col gap-4">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {s.firstName} *
          <input
            required
            value={data.firstName}
            onChange={(e) => onUpdate({ firstName: e.target.value })}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {s.lastName}
          <input
            value={data.lastName}
            onChange={(e) => onUpdate({ lastName: e.target.value })}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {s.email} *
          <input
            type="email"
            required
            value={data.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {s.phone}
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => onUpdate({ phone: e.target.value })}
            className={inputClasses}
          />
        </label>

        <Button onClick={onContinue} disabled={!canContinue} className="mt-3">
          {s.continue}
        </Button>
      </div>
    </div>
  );
}
