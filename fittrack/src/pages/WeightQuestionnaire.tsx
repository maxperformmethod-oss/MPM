import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  RotateCcw,
  TrendingDown,
  TrendingUp,
  Scale,
  TriangleAlert,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { useI18n } from "../i18n/I18nContext";
import { CONTACT_EMAIL } from "../data/site";

// Self-contained questionnaire for the body-composition program — deliberately
// NOT linked to the nutrition/meal-plan wizard. Collects goal + basics + health
// (Art. 9 GDPR → explicit consent) → payment/interim email. No invented numbers.

type Goal = "reduce" | "gain" | "maintain";
type Gender = "male" | "female";
type Activity = "low" | "medium" | "high";

type FormData = {
  goal: Goal | null;
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  gender: Gender | null;
  height: string;
  weight: string;
  activity: Activity | null;
  conditions: string;
  notes: string;
  gdprConsent: boolean;
};

const INITIAL: FormData = {
  goal: null,
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  gender: null,
  height: "",
  weight: "",
  activity: null,
  conditions: "",
  notes: "",
  gdprConsent: false,
};

const STEPS = ["goal", "basics", "health", "payment"] as const;
type StepId = (typeof STEPS)[number];

const GOAL_ICONS: Record<Goal, typeof Scale> = {
  reduce: TrendingDown,
  gain: TrendingUp,
  maintain: Scale,
};

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-gold focus:outline-none";

export function WeightQuestionnaire() {
  const { t } = useI18n();
  const s = t.weightQuestionnaire;
  const [stepId, setStepId] = useState<StepId>("goal");
  const [data, setData] = useState<FormData>(INITIAL);
  const [consentError, setConsentError] = useState(false);
  const [sent, setSent] = useState(false);

  const currentIndex = STEPS.indexOf(stepId);

  function update(patch: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...patch }));
  }
  function reset() {
    setStepId("goal");
    setData(INITIAL);
    setConsentError(false);
    setSent(false);
  }
  function back() {
    if (currentIndex > 0) setStepId(STEPS[currentIndex - 1]);
  }

  function chooseGoal(goal: Goal) {
    update({ goal });
    setStepId("basics");
  }
  function submitBasics(e: FormEvent) {
    e.preventDefault();
    setStepId("health");
  }
  function submitHealth(e: FormEvent) {
    e.preventDefault();
    if (!data.gdprConsent) {
      setConsentError(true);
      return;
    }
    setStepId("payment");
  }

  function sendToMaxim() {
    const goalLabel = data.goal ? s.goal[data.goal] : "";
    const lines = [
      `${s.payment.goalLabel}: ${goalLabel}`,
      `${s.basics.firstName}: ${data.firstName} ${data.lastName}`,
      `${s.basics.email}: ${data.email}`,
      `${s.basics.age}: ${data.age}`,
      `${s.basics.gender}: ${data.gender ?? ""}`,
      `${s.basics.height}: ${data.height}`,
      `${s.basics.weight}: ${data.weight}`,
      `${s.basics.activity}: ${data.activity ?? ""}`,
      `${s.health.conditions}: ${data.conditions}`,
      `${s.health.notes}: ${data.notes}`,
    ];
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      s.payment.mailSubject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  return (
    <div className="bg-cream">
      <div className="mx-auto flex max-w-md items-center gap-3 px-4 pt-10 sm:px-6">
        {STEPS.map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-3">
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
        {s.stepLabels[stepId]}
      </p>

      <motion.div
        key={sent ? "sent" : stepId}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* ---- GOAL ---- */}
        {stepId === "goal" && !sent && (
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
            <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">{s.goal.title}</h1>
            <p className="mx-auto mt-3 max-w-lg text-sm text-ink-soft sm:text-base">{s.goal.lead}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {(["reduce", "gain", "maintain"] as Goal[]).map((goal) => {
                const Icon = GOAL_ICONS[goal];
                return (
                  <button
                    key={goal}
                    onClick={() => chooseGoal(goal)}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-paper p-6 text-center shadow-sm transition-shadow hover:border-gold hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
                      <Icon size={20} />
                    </div>
                    <p className="font-serif font-semibold text-ink">{s.goal[goal]}</p>
                    <p className="text-xs text-ink-soft">{s.goal[`${goal}Note`]}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ---- BASICS ---- */}
        {stepId === "basics" && !sent && (
          <form onSubmit={submitBasics} className="mx-auto max-w-xl px-4 py-14 sm:px-6">
            <BackButton onClick={back} label={s.back} />
            <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">{s.basics.title}</h1>
            <p className="mt-3 text-sm text-ink-soft sm:text-base">{s.basics.lead}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Field label={s.basics.firstName}>
                <input required value={data.firstName} onChange={(e) => update({ firstName: e.target.value })} className={inputClasses} />
              </Field>
              <Field label={s.basics.lastName}>
                <input required value={data.lastName} onChange={(e) => update({ lastName: e.target.value })} className={inputClasses} />
              </Field>
              <Field label={s.basics.email} full>
                <input required type="email" value={data.email} onChange={(e) => update({ email: e.target.value })} className={inputClasses} />
              </Field>
              <Field label={s.basics.age}>
                <input required inputMode="numeric" value={data.age} onChange={(e) => update({ age: e.target.value })} className={inputClasses} />
              </Field>
              <Field label={s.basics.gender}>
                <div className="flex gap-2">
                  {(["male", "female"] as Gender[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => update({ gender: g })}
                      className={`flex-1 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                        data.gender === g
                          ? "border-gold bg-gold/10 text-ink"
                          : "border-ink/15 bg-paper text-ink-soft hover:border-gold"
                      }`}
                    >
                      {g === "male" ? s.basics.genderMale : s.basics.genderFemale}
                    </button>
                  ))}
                </div>
              </Field>
              <Field label={s.basics.height}>
                <input required inputMode="numeric" value={data.height} onChange={(e) => update({ height: e.target.value })} className={inputClasses} />
              </Field>
              <Field label={s.basics.weight}>
                <input required inputMode="numeric" value={data.weight} onChange={(e) => update({ weight: e.target.value })} className={inputClasses} />
              </Field>
              <Field label={s.basics.activity} full>
                <div className="grid gap-2 sm:grid-cols-3">
                  {(["low", "medium", "high"] as Activity[]).map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => update({ activity: a })}
                      className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-colors ${
                        data.activity === a
                          ? "border-gold bg-gold/10 text-ink"
                          : "border-ink/15 bg-paper text-ink-soft hover:border-gold"
                      }`}
                    >
                      {a === "low" ? s.basics.activityLow : a === "medium" ? s.basics.activityMedium : s.basics.activityHigh}
                    </button>
                  ))}
                </div>
              </Field>
            </div>
            <Button type="submit" className="mt-8 w-full sm:w-auto" disabled={!data.gender || !data.activity}>
              {s.basics.continue}
            </Button>
          </form>
        )}

        {/* ---- HEALTH ---- */}
        {stepId === "health" && !sent && (
          <form onSubmit={submitHealth} className="mx-auto max-w-xl px-4 py-14 sm:px-6">
            <BackButton onClick={back} label={s.back} />
            <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">{s.health.title}</h1>
            <p className="mt-3 text-sm text-ink-soft sm:text-base">{s.health.lead}</p>

            <div className="mt-8 flex flex-col gap-4">
              <Field label={s.health.conditions} full>
                <textarea
                  rows={3}
                  value={data.conditions}
                  onChange={(e) => update({ conditions: e.target.value })}
                  placeholder={s.health.conditionsPlaceholder}
                  className={`${inputClasses} resize-none`}
                />
              </Field>
              <Field label={s.health.notes} full>
                <textarea
                  rows={2}
                  value={data.notes}
                  onChange={(e) => update({ notes: e.target.value })}
                  placeholder={s.health.notesPlaceholder}
                  className={`${inputClasses} resize-none`}
                />
              </Field>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-terracotta/30 bg-terracotta/10 p-5">
              <TriangleAlert size={18} className="mt-0.5 shrink-0 text-terracotta" />
              <p className="text-sm text-ink">{s.health.disclaimer}</p>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm text-ink-soft">
              <input
                type="checkbox"
                checked={data.gdprConsent}
                onChange={(e) => {
                  update({ gdprConsent: e.target.checked });
                  if (e.target.checked) setConsentError(false);
                }}
                className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
              />
              <span>{s.health.consentLabel}</span>
            </label>
            {consentError && <p className="mt-2 text-xs text-terracotta">{s.health.consentRequired}</p>}

            <Button type="submit" className="mt-8 w-full sm:w-auto">
              {s.health.continue}
            </Button>
          </form>
        )}

        {/* ---- PAYMENT ---- */}
        {stepId === "payment" && !sent && (
          <div className="mx-auto max-w-xl px-4 py-14 text-center sm:px-6">
            <BackButton onClick={back} label={s.back} center />
            <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">{s.payment.title}</h1>

            <div className="mx-auto mt-7 max-w-sm rounded-2xl border border-ink/10 bg-paper p-6 text-left shadow-sm">
              <p className="text-xs font-semibold tracking-[0.1em] text-gold">
                {s.payment.summaryLabel.toUpperCase()}
              </p>
              <p className="mt-2 font-serif text-lg font-semibold text-ink">
                {data.firstName} {data.lastName}
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                {s.payment.goalLabel}: {data.goal ? s.goal[data.goal] : ""}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="text-sm text-ink-soft">{s.payment.priceLabel}</span>
                <span className="rounded-md border border-dashed border-ink/30 px-2 py-1 text-sm font-semibold text-ink-soft">
                  {s.payment.pricePlaceholder}
                </span>
              </div>
            </div>
            <p className="mx-auto mt-3 max-w-sm text-xs text-ink-soft">{s.payment.priceNote}</p>

            <div className="mt-8">
              <Button disabled className="w-full sm:w-auto">
                {s.payment.payCta}
              </Button>
              <p className="mx-auto mt-3 max-w-sm text-xs text-ink-soft">{s.payment.comingSoonNote}</p>
            </div>

            <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-ink/10 bg-paper p-5">
              <p className="font-serif font-semibold text-ink">{s.payment.interimTitle}</p>
              <p className="mt-1.5 text-sm text-ink-soft">{s.payment.interimBody}</p>
              <button
                onClick={sendToMaxim}
                className="mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink/85"
              >
                <Mail size={16} />
                {s.payment.interimCta}
              </button>
            </div>

            <RestartButton onClick={reset} label={s.startOver} />
          </div>
        )}

        {/* ---- CONFIRMATION ---- */}
        {sent && (
          <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
              <CheckCircle2 size={28} />
            </div>
            <h1 className="mt-5 font-serif text-3xl font-bold text-ink sm:text-4xl">
              {s.payment.confirmationTitle}
            </h1>
            <p className="mx-auto mt-3 max-w-sm text-sm text-ink-soft">{s.payment.confirmationBody}</p>
            <RestartButton onClick={reset} label={s.startOver} />
          </div>
        )}
      </motion.div>
    </div>
  );
}

function Field({ label, full, children }: { label: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm font-medium text-ink ${full ? "sm:col-span-2" : ""}`}>
      {label}
      {children}
    </label>
  );
}

function BackButton({ onClick, label, center }: { onClick: () => void; label: string; center?: boolean }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`mb-6 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink ${center ? "mx-auto" : ""}`}
    >
      <ArrowLeft size={15} />
      {label}
    </button>
  );
}

function RestartButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="mx-auto mt-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
    >
      <RotateCcw size={14} />
      {label}
    </button>
  );
}
