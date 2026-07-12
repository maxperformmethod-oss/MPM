import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { fadeUp } from "../lib/motion";

export function PillarCard({
  icon: Icon,
  title,
  description,
  linkLabel,
  to,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  linkLabel: string;
  to: string;
}) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -4 }} className="h-full">
      <Link
        to={to}
        className="group flex h-full flex-col items-start gap-3 rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
          <Icon size={20} />
        </div>
        <p className="font-serif text-lg font-semibold text-ink">{title}</p>
        <p className="flex-1 text-sm text-ink-soft">{description}</p>
        <span className="flex items-center gap-1 text-sm font-medium text-gold">
          {linkLabel}
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </Link>
    </motion.div>
  );
}
