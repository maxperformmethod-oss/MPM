import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PATHS, type Path } from "../../data/paths";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
} satisfies Variants;

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
} satisfies Variants;

export function WizardStart({ onChoose }: { onChoose: (path: Path) => void }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold tracking-[0.18em] text-gold">
          FIND YOUR PATH
        </span>
        <span className="h-px w-8 bg-gold" />
      </div>
      <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
        Tell us what you're dealing with.
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-sm text-ink-soft sm:text-base">
        Choose the option that feels closest to your situation. MPM™ will
        guide you toward the right assessment, program, or coaching path.
      </p>
      <p className="mt-8 text-xs font-semibold tracking-[0.14em] text-ink-soft">
        STEP 1 — CHOOSE YOUR STARTING POINT
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-6 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3"
      >
        {PATHS.map((path) => {
          const Icon = path.icon;
          return (
            <motion.button
              key={path.id}
              variants={item}
              onClick={() => onChoose(path)}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
                <Icon size={20} />
              </div>
              <div>
                <p className="font-semibold text-ink">{path.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{path.description}</p>
              </div>
              <span className="mt-1 flex items-center gap-1 text-sm font-medium text-gold">
                Choose
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
