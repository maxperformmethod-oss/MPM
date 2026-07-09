import { motion, type Variants } from "framer-motion";
import { Check, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

const CHECKLIST = [
  "Evidence-Based Coaching",
  "Mgr. FTVŠ UK",
  "Registered Sports Specialist",
  "Performance & Rehabilitation",
];

const BADGES = [
  { label: "Movement Assessment", className: "left-0 bottom-24 sm:bottom-28" },
  { label: "Performance Testing", className: "right-0 bottom-24 sm:bottom-28" },
  { label: "Evidence-Informed", className: "left-4 bottom-4 sm:left-8" },
  { label: "Individual Plan", className: "right-4 bottom-4 sm:right-8" },
];

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} satisfies Variants;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} satisfies Variants;

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-12 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:items-center lg:gap-10">
      <motion.div variants={textContainer} initial="hidden" animate="show">
        <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2">
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-semibold tracking-[0.18em] text-gold">
            MPM™ — MALOVEC PERFORMANCE METHOD
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]"
        >
          Move Better.
          <br />
          Perform Better.
          <br />
          Stay in the Game.
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-md text-base text-ink-soft">
          MPM™ helps athletes and active people move with less pain, rebuild
          strength and return to performance through assessment-based
          coaching.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
          {CHECKLIST.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check size={16} className="shrink-0 text-gold" />
              <span className="text-sm text-ink-soft">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
          <Link to="/find-your-path">
            <Button className="!rounded-lg">Find Your Path</Button>
          </Link>
          <Button variant="secondary" className="!rounded-lg">
            Book Assessment
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="relative"
      >
        <div className="animate-float-slow relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border-4 border-ink bg-gradient-to-br from-ink via-ink-soft to-gold shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <Activity size={140} className="text-cream" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>

        {BADGES.map((badge, i) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.12, ease: "easeOut" }}
            className={`absolute z-10 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-ink shadow-lg ${badge.className}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {badge.label}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
