import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      <div
        className={`flex items-center gap-2 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold tracking-[0.18em] text-gold">
          {eyebrow}
        </span>
        {centered && <span className="h-px w-8 bg-gold" />}
      </div>
      <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-4 max-w-xl text-sm text-ink-soft sm:text-base ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}
