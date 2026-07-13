import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";
import { useI18n } from "../i18n/I18nContext";
import { ButtonLink } from "./ui/Button";
import { Photo } from "./ui/Photo";

export function CTABand() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-ink">
      <Photo
        name="ctaband"
        alt="Tréningový priestor MPM na pozadí."
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6"
      >
        <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl">
          {t.ctaBand.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-cream/70 sm:text-base">
          {t.ctaBand.lead}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink to="/find-your-path" variant="inverse">
            {t.ctaBand.primary}
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  );
}
