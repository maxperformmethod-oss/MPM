import { motion } from "framer-motion";
import { ClipboardCheck, Search, Map, Users, RefreshCcw } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { PackagesSection } from "../components/PackagesSection";
import { Photo } from "../components/ui/Photo";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const STEP_ICONS = [ClipboardCheck, Search, Map, Users, RefreshCcw];

export function Approach() {
  const { t } = useI18n();
  const s = t.approach;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-[2rem] border border-ink/10 shadow-sm"
        >
          <Photo
            name="approach"
            alt="Kouč vedie klienta cez pohybové cvičenie pri stene s piatimi krokmi MPM metódy."
            className="h-full w-full object-cover object-center"
            sizes="(min-width: 1024px) 896px, 100vw"
          />
        </motion.div>

        <div className="mt-12">
          <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />
        </div>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-14 flex max-w-3xl flex-col gap-6"
        >
          {s.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <motion.li
                key={step.title}
                variants={fadeUp}
                className="flex gap-5 rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
              >
                <span className="font-serif text-3xl font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-semibold text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
                </div>
                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cream-dark text-ink sm:flex">
                  <Icon size={20} />
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </section>

      <section className="bg-sage/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.18em] text-gold">
              {s.bridge.eyebrow}
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">
            {s.bridge.title}
          </h2>
          <p className="mt-5 text-sm text-ink-soft sm:text-base">{s.bridge.body}</p>
        </motion.div>
      </section>

      <PackagesSection />

      <CTABand />
    </>
  );
}
