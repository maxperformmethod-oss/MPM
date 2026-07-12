import { ArrowLeft } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { Button } from "../ui/Button";
import { FOOD_CATEGORIES } from "../../data/nutritionPreferences";
import { PreferenceToggle } from "./PreferenceToggle";
import type { NutritionFormData } from "./NutritionWizard";

export function NutritionPreferences({
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
  const s = t.nutritionQuestionnaire.preferences;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={15} />
        {t.nutritionQuestionnaire.back}
      </button>

      <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">{s.title}</h1>
      <p className="mt-2 text-sm text-ink-soft">{s.lead}</p>

      <div className="mt-8 flex flex-col gap-6">
        {FOOD_CATEGORIES.map((category) => (
          <div key={category.id} className="rounded-2xl border border-ink/10 bg-paper p-5">
            <p className="font-serif font-semibold text-ink">{s.categories[category.id]}</p>
            <div className="mt-3 flex flex-col gap-2.5">
              {category.items.map((item) => (
                <div key={item} className="flex items-center justify-between gap-3">
                  <span className="text-sm text-ink-soft">{s.items[item]}</span>
                  <PreferenceToggle
                    value={data.preferences[item]}
                    onChange={(value) =>
                      onUpdate({ preferences: { ...data.preferences, [item]: value } })
                    }
                    likeLabel={s.like}
                    neutralLabel={s.neutral}
                    dislikeLabel={s.dislike}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-ink/10 bg-paper p-5">
          <p className="font-serif font-semibold text-ink">{s.expensiveTitle}</p>
          <p className="mt-1 text-sm text-ink-soft">{s.expensiveLead}</p>
          <div className="mt-3 flex gap-3">
            {(
              [
                { value: true as const, label: s.expensiveAllow },
                { value: false as const, label: s.expensiveDisallow },
              ]
            ).map((opt) => (
              <button
                key={String(opt.value)}
                onClick={() => onUpdate({ allowExpensiveFoods: opt.value })}
                aria-pressed={data.allowExpensiveFoods === opt.value}
                className={`rounded-xl border px-6 py-3 text-sm font-medium transition-colors ${
                  data.allowExpensiveFoods === opt.value
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-ink/10 bg-paper text-ink-soft hover:border-ink/25"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <Button onClick={onContinue} className="mt-1">
          {s.continue}
        </Button>
      </div>
    </div>
  );
}
