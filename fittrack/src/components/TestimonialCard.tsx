import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { fadeUp } from "../lib/motion";

export function TestimonialCard({
  quote,
  name,
  sport,
}: {
  quote: string;
  name: string;
  sport: string;
}) {
  return (
    <motion.figure
      variants={fadeUp}
      className="flex h-full flex-col gap-4 rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
    >
      <Quote size={20} className="text-gold" />
      <blockquote className="flex-1 text-sm text-ink sm:text-base">
        "{quote}"
      </blockquote>
      <figcaption className="text-xs text-ink-soft">
        <span className="font-semibold text-ink">{name}</span> · {sport}
      </figcaption>
    </motion.figure>
  );
}
