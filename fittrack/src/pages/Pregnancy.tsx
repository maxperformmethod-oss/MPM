import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, HeartHandshake, Send, Stethoscope, TriangleAlert } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { PackagesSection } from "../components/PackagesSection";
import { Button } from "../components/ui/Button";
import { useI18n } from "../i18n/I18nContext";
import { submitToFormspree } from "../lib/submitForm";
import { AGE_RANGE, inRange } from "../lib/validate";
import { fadeUp, viewportOnce } from "../lib/motion";

type Stage = "pregnant" | "postpartum";
type FieldKey =
  | "age" | "week" | "pregnancyNumber" | "dueOrSince"
  | "feelings" | "pains" | "limitations" | "complications" | "exercise" | "goal";

const TEXT_FIELDS: { key: FieldKey; area?: boolean; half?: boolean }[] = [
  { key: "age", half: true },
  { key: "pregnancyNumber", half: true },
  { key: "week", half: true },
  { key: "dueOrSince", half: true },
  { key: "feelings", area: true },
  { key: "pains", area: true },
  { key: "limitations", area: true },
  { key: "complications", area: true },
  { key: "exercise", area: true },
  { key: "goal", area: true },
];

// Pregnancy & postpartum program — a sensitive category. Collects health data
// (Art. 9 GDPR → explicit consent) and requires doctor's clearance. Leads to an
// email enquiry (Formspree → maxperformmethod@gmail.com), no payment.
export function Pregnancy() {
  const { t } = useI18n();
  const s = t.pregnancyPage;
  const [stage, setStage] = useState<Stage | null>(null);
  const [data, setData] = useState<Record<FieldKey, string>>(
    () => Object.fromEntries(TEXT_FIELDS.map((f) => [f.key, ""])) as Record<FieldKey, string>,
  );
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [ageError, setAgeError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const inputClasses =
    "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 focus:border-gold focus:outline-none";

  function set(key: FieldKey, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
    if (key === "age") setAgeError(null);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (data.age && !inRange(data.age, ...AGE_RANGE)) {
      setAgeError(t.validation.age);
      return;
    }
    if (!consent) {
      setConsentError(true);
      return;
    }
    setStatus("sending");
    const fields: Record<string, string> = {
      [s.fields.stage]: stage ? (stage === "pregnant" ? s.fields.stagePregnant : s.fields.stagePostpartum) : "",
      ...Object.fromEntries(TEXT_FIELDS.map((f) => [s.fields[f.key], data[f.key]])),
    };
    const ok = await submitToFormspree(s.mailSubject, fields);
    setStatus(ok ? "sent" : "error");
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
    <>
      <section className="mx-auto max-w-2xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />

      <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-ink-soft">
        <HeartHandshake size={18} className="text-gold" />
        <span className="text-sm">{s.cardShort}</span>
      </div>

      <motion.form
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        onSubmit={onSubmit}
        className="mt-10 grid gap-4 sm:grid-cols-2"
      >
        <div className="flex flex-col gap-1.5 text-sm font-medium text-ink sm:col-span-2">
          {s.fields.stage}
          <div className="flex gap-2">
            {(["pregnant", "postpartum"] as Stage[]).map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStage(st)}
                className={`flex-1 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                  stage === st
                    ? "border-gold bg-gold/10 text-ink"
                    : "border-ink/15 bg-paper text-ink-soft hover:border-gold"
                }`}
              >
                {st === "pregnant" ? s.fields.stagePregnant : s.fields.stagePostpartum}
              </button>
            ))}
          </div>
        </div>

        {TEXT_FIELDS.map((f) => (
          <label
            key={f.key}
            className={`flex flex-col gap-1.5 text-sm font-medium text-ink ${f.half ? "" : "sm:col-span-2"}`}
          >
            {s.fields[f.key]}
            {f.area ? (
              <textarea
                rows={2}
                value={data[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                placeholder={s.fields[`${f.key}Placeholder` as keyof typeof s.fields]}
                className={`${inputClasses} resize-none`}
              />
            ) : (
              <input
                inputMode={f.key === "age" ? "numeric" : undefined}
                value={data[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                placeholder={s.fields[`${f.key}Placeholder` as keyof typeof s.fields]}
                className={`${inputClasses} ${f.key === "age" && ageError ? "!border-terracotta" : ""}`}
              />
            )}
            {f.key === "age" && ageError && (
              <span className="text-xs font-normal text-terracotta">{ageError}</span>
            )}
          </label>
        ))}

        {/* Mandatory health disclaimer */}
        <div className="flex items-start gap-3 rounded-2xl border border-terracotta/30 bg-terracotta/10 p-5 sm:col-span-2">
          <TriangleAlert size={18} className="mt-0.5 shrink-0 text-terracotta" />
          <p className="text-sm text-ink">{s.disclaimer}</p>
        </div>

        {/* Doctor's clearance requirement */}
        <div className="flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-5 sm:col-span-2">
          <Stethoscope size={18} className="mt-0.5 shrink-0 text-gold" />
          <p className="text-sm text-ink">{s.doctorNote}</p>
        </div>

        <label className="flex items-start gap-3 text-sm text-ink-soft sm:col-span-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              if (e.target.checked) setConsentError(false);
            }}
            className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
          />
          <span>{s.consentLabel}</span>
        </label>
        {consentError && (
          <p className="-mt-2 text-xs text-terracotta sm:col-span-2">{s.consentRequired}</p>
        )}

        <div className="sm:col-span-2">
          <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
            {status === "sending" ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />
            ) : (
              <Send size={15} />
            )}
            {status === "sending" ? s.sending : s.submit}
          </Button>
          {status === "error" && <p className="mt-3 text-xs text-terracotta">{s.error}</p>}
        </div>
      </motion.form>
      </section>

      <PackagesSection />
    </>
  );
}
