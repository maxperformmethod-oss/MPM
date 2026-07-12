import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer } from "../lib/motion";
import { ButtonLink } from "./ui/Button";

const BADGE_POSITIONS = [
  "left-0 bottom-24 sm:bottom-28",
  "right-0 bottom-24 sm:bottom-28",
  "left-4 bottom-4 sm:left-8",
  "right-4 bottom-4 sm:right-8",
];

export function Hero() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-12 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:items-center lg:gap-10">
      <motion.div variants={staggerContainer} initial="hidden" animate="show">
        <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2">
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-semibold tracking-[0.18em] text-gold">
            {t.hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-[3.4rem]"
        >
          {t.hero.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-md text-base text-ink-soft">
          {t.hero.lead}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
          {t.hero.checklist.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check size={16} className="shrink-0 text-gold" />
              <span className="text-sm text-ink-soft">{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
          <ButtonLink to="/find-your-path">{t.hero.ctaPrimary}</ButtonLink>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="relative"
      >
        {/* TODO: replace gradient placeholder with real coaching photography */}
        <div className="animate-float-slow relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border-4 border-ink bg-gradient-to-br from-ink via-sage to-gold shadow-2xl">
          <svg
            viewBox="0 0 300 375"
            className="absolute inset-0 h-full w-full text-cream"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <motion.path
              d="M0,220 L55,220 L80,110 L105,300 L135,220 L170,220 Q195,180 220,220 T300,200"
              stroke="currentColor"
              strokeWidth={5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.85 : 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: reduceMotion ? 0 : 1.6, ease: "easeInOut", delay: 0.3 }}
            />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>

        {t.hero.badges.map((badge, i) => (
          <motion.div
            key={badge}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.12, ease: "easeOut" }}
            className={`absolute z-10 flex items-center gap-1.5 rounded-full bg-paper px-3.5 py-2 text-xs font-medium text-ink shadow-lg ${BADGE_POSITIONS[i]}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {badge}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
