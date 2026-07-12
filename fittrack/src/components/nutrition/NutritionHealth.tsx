import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "../../i18n/I18nContext";
import { Button } from "../ui/Button";
import { ALLERGENS } from "../../data/nutritionPreferences";
import type { NutritionFormData } from "./NutritionWizard";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-gold focus:outline-none";

export function NutritionHealth({
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
  const s = t.nutritionQuestionnaire.health;

  function toggleAllergen(id: (typeof ALLERGENS)[number]) {
    const isSelected = data.allergens.includes(id);
    onUpdate({
      allergens: isSelected
        ? data.allergens.filter((a) => a !== id)
        : [...data.allergens, id],
    });
  }

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
        <div>
          <p className="text-sm font-semibold text-ink">{s.allergensTitle}</p>
          <p className="mt-1 text-xs text-ink-soft">{s.allergensNote}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {ALLERGENS.map((id) => (
              <button
                key={id}
                onClick={() => toggleAllergen(id)}
                aria-pressed={data.allergens.includes(id)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  data.allergens.includes(id)
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-ink/10 bg-paper text-ink-soft hover:border-ink/25"
                }`}
              >
                {s.allergens[id]}
              </button>
            ))}
          </div>
        </div>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {s.diagnoses}
          <textarea
            rows={2}
            value={data.diagnoses}
            onChange={(e) => onUpdate({ diagnoses: e.target.value })}
            className={`${inputClasses} resize-none`}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {s.medications}
          <textarea
            rows={2}
            value={data.medications}
            onChange={(e) => onUpdate({ medications: e.target.value })}
            className={`${inputClasses} resize-none`}
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          {s.notes}
          <textarea
            rows={2}
            value={data.notes}
            onChange={(e) => onUpdate({ notes: e.target.value })}
            className={`${inputClasses} resize-none`}
          />
        </label>

        <label className="flex items-start gap-3 rounded-xl border border-ink/10 bg-paper p-4">
          <input
            type="checkbox"
            checked={data.gdprConsent}
            onChange={(e) => onUpdate({ gdprConsent: e.target.checked })}
            className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
          />
          <span className="text-sm text-ink-soft">
            {s.consentLabel}{" "}
            <Link to="/privacy" className="underline hover:text-ink">
              {t.footer.privacyLink}
            </Link>{" "}
            /{" "}
            <Link to="/terms" className="underline hover:text-ink">
              {t.footer.termsLink}
            </Link>
          </span>
        </label>
        {!data.gdprConsent && <p className="text-xs text-ink-soft">{s.consentRequired}</p>}

        <Button onClick={onContinue} disabled={!data.gdprConsent} className="mt-1">
          {s.continue}
        </Button>
      </div>
    </div>
  );
}
