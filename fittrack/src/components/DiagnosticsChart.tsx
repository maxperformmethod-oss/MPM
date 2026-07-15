import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../i18n/I18nContext";
import { viewportOnce } from "../lib/motion";

// Illustrative readiness-score progression shown at each milestone.
// Values are an example curve, not real client data — the chart carries
// an explicit "illustrative" caption. Confirmed in Update 16b.
const SCORES = [38, 62, 81, 100];

const POINTS = SCORES.map((score, i) => ({
  x: (i / (SCORES.length - 1)) * 100,
  y: 100 - score,
  score,
}));

const PATH = `M${POINTS.map((p) => `${p.x},${p.y}`).join(" L")}`;

// One typographic style for every number and label on the chart.
const LABEL_CLASS = "text-[10px] font-semibold uppercase tracking-wide";

// Keep value labels inside the box: first sits right of its point,
// last sits below-left of the top-right point, middle ones sit above.
const VALUE_POSITIONS = [
  "translate(12%, -50%)",
  "translate(-50%, -160%)",
  "translate(-50%, -160%)",
  "translate(-112%, 30%)",
];

export function DiagnosticsChart() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const s = t.home.assessmentHighlight;

  return (
    <div className="mx-auto mt-10 w-full max-w-md">
      <div className="relative pt-4">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-28 w-full text-gold"
        >
          <motion.path
            d={PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: reduceMotion ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={viewportOnce}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeInOut" }}
          />
          {POINTS.map((p) => (
            <motion.circle
              key={p.x}
              cx={p.x}
              cy={p.y}
              r={1.8}
              fill="currentColor"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.8 }}
            />
          ))}
        </svg>

        {/* HTML value labels — SVG text would distort under preserveAspectRatio="none".
            One full-size fade wrapper: tiny absolutely-positioned spans are unreliable
            IntersectionObserver targets, and framer would clobber their static transform. */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.8 }}
        >
          {POINTS.map((p, i) => (
            <span
              key={p.x}
              className={`${LABEL_CLASS} absolute text-ink`}
              style={{
                left: `${p.x}%`,
                top: `calc(1rem + ${(p.y / 100) * 7}rem)`,
                transform: VALUE_POSITIONS[i],
              }}
            >
              {p.score}&nbsp;%
            </span>
          ))}
        </motion.div>
      </div>

      <div className={`${LABEL_CLASS} mt-2 flex justify-between text-ink-soft`}>
        {s.chartLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <p className={`${LABEL_CLASS} mt-4 text-center text-ink-soft/70`}>
        {s.chartCaption}
      </p>
    </div>
  );
}
