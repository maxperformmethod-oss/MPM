import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Mail, RotateCcw } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { Button } from "../ui/Button";
import { buildNutritionSubmission } from "../../lib/nutritionEmail";
import { submitToFormspree } from "../../lib/submitForm";
import type { NutritionFormData } from "./NutritionWizard";

export function NutritionPayment({
  data,
  onBack,
  onRestart,
}: {
  data: NutritionFormData;
  onBack: () => void;
  onRestart: () => void;
}) {
  const { t } = useI18n();
  const s = t.nutritionQuestionnaire.payment;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  // Sends via Formspree — never opens an external email app.
  async function handleSendToMaxim() {
    setSending(true);
    setError(false);
    const { subject, fields } = buildNutritionSubmission(data, t);
    const ok = await submitToFormspree(subject, fields);
    setSending(false);
    if (ok) setSent(true);
    else setError(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6"
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold"
        >
          <CheckCircle2 size={28} />
        </motion.div>
        <h1 className="mt-5 font-serif text-3xl font-bold text-ink sm:text-4xl">
          {s.confirmationTitle}
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-ink-soft">{s.confirmationBody}</p>
        <button
          onClick={onRestart}
          className="mx-auto mt-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
        >
          <RotateCcw size={14} />
          {t.nutritionQuestionnaire.startOver}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6"
    >
      <button
        onClick={onBack}
        className="mx-auto mb-6 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={15} />
        {t.nutritionQuestionnaire.back}
      </button>

      <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">{s.title}</h1>

      <div className="mx-auto mt-7 max-w-sm rounded-2xl border border-ink/10 bg-paper p-6 text-left shadow-sm">
        <p className="text-xs font-semibold tracking-[0.1em] text-gold">
          {s.summaryLabel.toUpperCase()}
        </p>
        <p className="mt-2 font-serif text-lg font-semibold text-ink">
          {data.firstName} {data.lastName}
        </p>
        <p className="mt-1 text-sm text-ink-soft">{data.email}</p>
        <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
          <span className="text-sm text-ink-soft">{s.priceLabel}</span>
          <span className="rounded-md border border-dashed border-ink/30 px-2 py-1 text-sm font-semibold text-ink-soft">
            {s.pricePlaceholder}
          </span>
        </div>
      </div>
      <p className="mx-auto mt-3 max-w-sm text-xs text-ink-soft">{s.priceNote}</p>

      <div className="mt-8">
        <Button disabled className="w-full sm:w-auto">
          {s.payCta}
        </Button>
        <p className="mx-auto mt-3 max-w-sm text-xs text-ink-soft">{s.comingSoonNote}</p>
      </div>

      <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-ink/10 bg-paper p-5">
        <p className="font-serif font-semibold text-ink">{s.interimTitle}</p>
        <p className="mt-1.5 text-sm text-ink-soft">{s.interimBody}</p>
        <button
          onClick={handleSendToMaxim}
          disabled={sending}
          className="mx-auto mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink/85 disabled:opacity-50"
        >
          {sending ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />
          ) : (
            <Mail size={16} />
          )}
          {s.interimCta}
        </button>
        {error && <p className="mt-3 text-xs text-terracotta">{t.payments.error}</p>}
      </div>

      <button
        onClick={onRestart}
        className="mx-auto mt-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <RotateCcw size={14} />
        {t.nutritionQuestionnaire.startOver}
      </button>
    </motion.div>
  );
}
