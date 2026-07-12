import { motion, useReducedMotion } from "framer-motion";
import { viewportOnce } from "../lib/motion";

export function SectionDivider() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6" aria-hidden="true">
      <svg
        viewBox="0 0 400 20"
        className="h-4 w-full text-gold/50"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,10 L160,10 L180,3 L200,17 L220,10 L400,10"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduceMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewportOnce}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
