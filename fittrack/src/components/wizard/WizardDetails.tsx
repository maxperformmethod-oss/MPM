import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Path } from "../../data/paths";

export function WizardDetails({
  path,
  onSelect,
  onBack,
}: {
  path: Path;
  onSelect: (option: string) => void;
  onBack: () => void;
}) {
  const Icon = path.icon;

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ArrowLeft size={15} />
        Back
      </button>

      <p className="text-xs font-semibold tracking-[0.14em] text-ink-soft">
        STEP 2 — {path.title.toUpperCase()}
      </p>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
          <Icon size={20} />
        </div>
        <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
          {path.question}
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {path.options.map((option, i) => (
          <motion.button
            key={option}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
            whileHover={{ y: -2 }}
            onClick={() => onSelect(option)}
            className="rounded-xl border border-ink/10 bg-white px-5 py-4 text-left text-sm font-medium text-ink shadow-sm hover:border-gold hover:shadow-md"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
