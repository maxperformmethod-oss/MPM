import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts";
import { useI18n } from "../i18n/I18nContext";

const SCORES = [38, 62, 81, 100];

export function DiagnosticsChart() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const data = t.home.assessmentHighlight.chartLabels.map((label, i) => ({
    label,
    score: SCORES[i],
  }));

  return (
    <div ref={ref} className="mx-auto mt-10 w-full max-w-md">
      <div className="h-28 text-gold">
        {inView && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
              <YAxis hide domain={[0, 110]} />
              <Line
                type="monotone"
                dataKey="score"
                stroke="currentColor"
                strokeWidth={3}
                dot={{ r: 4, fill: "currentColor", strokeWidth: 0 }}
                isAnimationActive={!reduceMotion}
                animationDuration={1200}
                animationEasing="ease-out"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-medium uppercase tracking-wide text-ink-soft">
        {data.map((d) => (
          <span key={d.label}>{d.label}</span>
        ))}
      </div>
    </div>
  );
}
