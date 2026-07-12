import { FOOD_CATEGORIES } from "../data/nutritionPreferences";
import { CONTACT_EMAIL } from "../data/site";
import type { Dict } from "../i18n/en";
import type { NutritionFormData } from "../components/nutrition/NutritionWizard";

export function buildNutritionMailto(data: NutritionFormData, t: Dict): string {
  const q = t.nutritionQuestionnaire;
  const lines: string[] = [];

  lines.push(`${q.basics.firstName}: ${data.firstName}`);
  lines.push(`${q.basics.lastName}: ${data.lastName}`);
  lines.push(`${q.basics.email}: ${data.email}`);
  lines.push(`${q.basics.phone}: ${data.phone}`);
  lines.push("");
  lines.push(`${q.body.dob}: ${data.dob}`);
  lines.push(
    `${q.body.gender}: ${
      data.gender === "male" ? q.body.genderMale : data.gender === "female" ? q.body.genderFemale : "—"
    }`,
  );
  lines.push(`${q.body.weight}: ${data.weight}`);
  lines.push(`${q.body.height}: ${data.height}`);
  lines.push(`${q.body.bodyFat}: ${data.bodyFat || "—"}`);
  lines.push(`${q.body.waist}: ${data.waist || "—"}`);
  lines.push(
    `${q.body.calorieTitle}: ${
      data.calorieMode === "manual" ? `${data.calorieValue} kcal` : q.body.calorieCalculated
    }`,
  );
  lines.push("");
  lines.push(`${q.preferences.title}`);
  for (const category of FOOD_CATEGORIES) {
    const itemLines = category.items.map((item) => {
      const value = data.preferences[item];
      const valueLabel =
        value === "like" ? q.preferences.like : value === "dislike" ? q.preferences.dislike : q.preferences.neutral;
      return `${q.preferences.items[item]}: ${valueLabel}`;
    });
    lines.push(`${q.preferences.categories[category.id]} — ${itemLines.join(", ")}`);
  }
  lines.push(
    `${q.preferences.expensiveTitle}: ${
      data.allowExpensiveFoods === true
        ? q.preferences.expensiveAllow
        : data.allowExpensiveFoods === false
          ? q.preferences.expensiveDisallow
          : "—"
    }`,
  );
  lines.push("");
  lines.push(
    `${q.health.allergensTitle}: ${
      data.allergens.length ? data.allergens.map((a) => q.health.allergens[a]).join(", ") : "—"
    }`,
  );
  lines.push(`${q.health.diagnoses}: ${data.diagnoses || "—"}`);
  lines.push(`${q.health.medications}: ${data.medications || "—"}`);
  lines.push(`${q.health.notes}: ${data.notes || "—"}`);

  const subject = `${q.eyebrow} — ${data.firstName} ${data.lastName}`.trim();
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join("\n"),
  )}`;
}
