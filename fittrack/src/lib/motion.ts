import type { Variants } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} satisfies Variants;

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
} satisfies Variants;

export const viewportOnce = { once: true, margin: "-80px" } as const;
