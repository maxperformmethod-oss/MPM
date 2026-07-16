import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Check, Send } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useI18n } from "../i18n/I18nContext";
import { submitToFormspree } from "../lib/submitForm";
import { AGE_RANGE, inRange, isEmail, isPhone } from "../lib/validate";
import { fadeUp, staggerContainer } from "../lib/motion";

// Standalone Instagram-bio / ad landing at /start — works on its own, no nav
// needed. Multi-step intake form; submits every field to Formspree
// (maxperformmethod@gmail.com). Deliberately warm, natural wording.

type FieldKey =
  | "name" | "email" | "phone" | "age"
  | "goal" | "struggles" | "experience"
  | "workType" | "workDays" | "workHours" | "sitting" | "sleep" | "stress"
  | "availability" | "expectations" | "anythingElse";

type StepId = "about" | "goal" | "life" | "training";

const STEPS: { id: StepId; fields: { key: FieldKey; area?: boolean; half?: boolean }[] }[] = [
  {
    id: "about",
    fields: [
      { key: "name", half: true },
      { key: "email", half: true },
      { key: "phone", half: true },
      { key: "age", half: true },
    ],
  },
  {
    id: "goal",
    fields: [
      { key: "goal", area: true },
      { key: "struggles", area: true },
      { key: "experience", area: true },
    ],
  },
  {
    id: "life",
    fields: [
      { key: "workType", half: true },
      { key: "workDays", half: true },
      { key: "workHours", half: true },
      { key: "sitting", area: true },
      { key: "sleep", half: true },
      { key: "stress", half: true },
    ],
  },
  {
    id: "training",
    fields: [
      { key: "availability", area: true },
      { key: "expectations", area: true },
      { key: "anythingElse", area: true },
    ],
  },
];

const REQUIRED: FieldKey[] = ["name", "email", "goal"];
const EMPTY = Object.fromEntries(
  STEPS.flatMap((s) => s.fields.map((f) => [f.key, ""])),
) as Record<FieldKey, string>;

export function Start() {
  const { t } = useI18n();
  const s = t.startPage;
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<Record<FieldKey, string>>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;

  // Format/range checks on top of native `required` — invalid values block
  // the step. Optional fields are only validated when filled in.
  function validateStep(): boolean {
    const next: Partial<Record<FieldKey, string>> = {};
    for (const { key } of step.fields) {
      const value = data[key].trim();
      if (key === "email" && value && !isEmail(value)) next[key] = t.validation.email;
      if (key === "phone" && value && !isPhone(value)) next[key] = t.validation.phone;
      if (key === "age" && value && !inRange(value, ...AGE_RANGE)) next[key] = t.validation.age;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const inputClasses =
    "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 focus:border-gold focus:outline-none";

  function set(key: FieldKey, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateStep()) return;
    if (!isLast) {
      setStepIndex((i) => i + 1);
      return;
    }
    setStatus("sending");
    const fields = Object.fromEntries(
      STEPS.flatMap((st) => st.fields.map((f) => [s.fields[f.key], data[f.key]])),
    ) as Record<string, string>;
    const ok = await submitToFormspree(s.mailSubject, fields);
    setStatus(ok ? "sent" : "error");
  }

  function scrollToForm() {
    document.getElementById("intake-form")?.scrollIntoView({ behavior: "smooth" });
  }

  if (status === "sent") {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 size={32} />
        </div>
        <h1 className="mt-6 font-serif text-4xl font-bold text-ink sm:text-5xl">{s.successTitle}</h1>
        <p className="mx-auto mt-4 max-w-sm text-base text-ink-soft">{s.successBody}</p>
      </div>
    );
  }

  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6 sm:pt-24">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.18em] text-gold">{s.eyebrow}</span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl font-bold leading-[1.05] text-ink sm:text-6xl"
          >
            {s.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-base text-ink-soft sm:text-lg">
            {s.lead}
          </motion.p>
          <motion.ul variants={fadeUp} className="mt-7 flex flex-col items-center gap-2.5">
            {s.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-ink">
                <Check size={16} className="shrink-0 text-gold" />
                {b}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} className="mt-9">
            <Button onClick={scrollToForm}>{s.cta}</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Multi-step form */}
      <section id="intake-form" className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-2 flex items-center gap-3">
          {STEPS.map((st, i) => (
            <div key={st.id} className="flex flex-1 items-center gap-3">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                  i <= stepIndex ? "bg-ink text-cream" : "bg-ink/10 text-ink-soft"
                }`}
              >
                {i + 1}
              </div>
              {i < STEPS.length - 1 && (
                <div className="h-px flex-1 bg-ink/10">
                  <motion.div
                    className="h-px bg-ink"
                    initial={false}
                    animate={{ width: i < stepIndex ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mb-8 text-center text-[11px] font-medium tracking-wide text-ink-soft">
          {s.stepLabels[step.id]}
        </p>

        <motion.form
          key={step.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onSubmit={onSubmit}
          className="grid gap-4 sm:grid-cols-2"
        >
          {step.fields.map((f) => (
            <label
              key={f.key}
              className={`flex flex-col gap-1.5 text-[0.95rem] font-medium text-ink ${
                f.half ? "" : "sm:col-span-2"
              }`}
            >
              {s.fields[f.key]}
              {f.area ? (
                <textarea
                  required={REQUIRED.includes(f.key)}
                  rows={3}
                  value={data[f.key]}
                  onChange={(e) => set(f.key, e.target.value)}
                  placeholder={s.fields[`${f.key}Placeholder` as keyof typeof s.fields]}
                  className={`${inputClasses} resize-none`}
                />
              ) : (
                <input
                  required={REQUIRED.includes(f.key)}
                  type="text"
                  inputMode={
                    f.key === "age" ? "numeric" : f.key === "phone" ? "tel" : f.key === "email" ? "email" : undefined
                  }
                  autoComplete={
                    f.key === "email" ? "email" : f.key === "phone" ? "tel" : f.key === "name" ? "name" : undefined
                  }
                  value={data[f.key]}
                  onChange={(e) => set(f.key, e.target.value)}
                  className={`${inputClasses} ${errors[f.key] ? "!border-terracotta" : ""}`}
                />
              )}
              {errors[f.key] && (
                <span className="text-xs font-normal text-terracotta">{errors[f.key]}</span>
              )}
            </label>
          ))}

          <div className="mt-4 flex items-center justify-between gap-3 sm:col-span-2">
            {stepIndex > 0 ? (
              <button
                type="button"
                onClick={() => setStepIndex((i) => i - 1)}
                className="flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
              >
                <ArrowLeft size={15} />
                {s.back}
              </button>
            ) : (
              <span />
            )}

            <Button type="submit" disabled={status === "sending"}>
              {isLast ? (
                <>
                  {status === "sending" ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />
                  ) : (
                    <Send size={15} />
                  )}
                  {status === "sending" ? s.sending : s.submit}
                </>
              ) : (
                <>
                  {s.continue}
                  <ArrowRight size={15} />
                </>
              )}
            </Button>
          </div>

          {status === "error" && (
            <p className="text-center text-xs text-terracotta sm:col-span-2">{s.error}</p>
          )}
        </motion.form>
      </section>
    </div>
  );
}
