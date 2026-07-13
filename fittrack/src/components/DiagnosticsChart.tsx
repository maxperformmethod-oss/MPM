import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../i18n/I18nContext";
import { viewportOnce } from "../lib/motion";

const SCORES = [38, 62, 81, 100];

function scoreToY(score: number) {
  return 100 - score;
}

const POINTS = SCORES.map((score, i) => ({
  x: (i / (SCORES.length - 1)) * 100,
  y: scoreToY(score),
}));

const PATH = `M${POINTS.map((p) => `${p.x},${p.y}`).join(" L")}`;

export function DiagnosticsChart() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const labels = t.home.assessmentHighlight.chartLabels;

  return (
    <div className="mx-auto mt-10 w-full max-w-md">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-28 w-full text-gold">
        <motion.path
          d={PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewportOnce}
          transition={{ duration: reduceMotion ? 0 : 1.2, ease: "easeOut" }}
        />
        {POINTS.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={2.2}
            fill="currentColor"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.9 + i * 0.1 }}
          />
        ))}
      </svg>
      <div className="mt-2 flex justify-between text-[10px] font-medium uppercase tracking-wide text-ink-soft">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
