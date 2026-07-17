import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Check,
  ClipboardCheck,
  FileText,
  Gauge,
  RefreshCcw,
  X,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { SectionHeading } from "../components/SectionHeading";
import { PillarCard } from "../components/PillarCard";
import { StatCounter } from "../components/StatCounter";
import { SectionDivider } from "../components/SectionDivider";
import { DiagnosticsChart } from "../components/DiagnosticsChart";
import { ReviewsCarousel } from "../components/ReviewsCarousel";
import { Photo } from "../components/ui/Photo";
import { ButtonLink } from "../components/ui/Button";
import { PILLARS } from "../data/pillars";
import { useI18n } from "../i18n/I18nContext";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

function CredentialsStrip() {
  const { t } = useI18n();
  const items = t.home.credentialsStrip;

  return (
    <div className="border-y border-gold/15 bg-gold/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-2 px-4 py-5 sm:px-6">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-gold/50">·</span>}
            <span className="text-xs font-medium tracking-wide text-ink-soft sm:text-sm">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function WhoForSection() {
  const { t } = useI18n();
  const s = t.home.whoFor;

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} align="center" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-ink/10 bg-cream p-6"
          >
            <p className="font-serif font-semibold text-ink">{s.forTitle}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {s.forItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-ink/10 bg-cream p-6"
          >
            <p className="font-serif font-semibold text-ink">{s.notForTitle}</p>
            <ul className="mt-4 flex flex-col gap-3">
              {s.notForItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                  <X size={16} className="mt-0.5 shrink-0 text-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PillarsSection() {
  const { t } = useI18n();
  const s = t.home.pillars;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid gap-4 sm:grid-cols-3"
      >
        {PILLARS.map(({ id, icon }) => (
          <PillarCard
            key={id}
            icon={icon}
            title={t.pillars[id].title}
            description={t.pillars[id].description}
            linkLabel={s.choose}
            to={`/find-your-path?path=${id}`}
          />
        ))}
      </motion.div>
    </section>
  );
}

function MethodTeaserSection() {
  const { t } = useI18n();
  const s = t.home.method;

  return (
    <section className="bg-cream-dark/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-3"
          >
            {t.approach.steps.map((step, i) => (
              <motion.li
                key={step.title}
                variants={fadeUp}
                className="flex items-center gap-4 rounded-xl border border-ink/10 bg-cream px-5 py-3.5"
              >
                <span className="font-serif text-lg font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-ink">{step.title}</span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8"
        >
          <Link
            to="/approach"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-ink"
          >
            {s.cta}
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function MetricTile({
  icon: Icon,
  text,
  pending,
}: {
  icon: LucideIcon;
  text: string;
  pending?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-start gap-3 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-ink">
        <Icon size={20} />
      </div>
      <p className="font-serif text-base font-bold leading-snug text-ink sm:text-lg">
        {text}
        {pending && (
          <span className="ml-1 text-[9px] font-sans font-bold uppercase tracking-wide text-terracotta">
            [overiť]
          </span>
        )}
      </p>
    </div>
  );
}

function AssessmentHighlightSection() {
  const { t } = useI18n();
  const s = t.home.assessmentHighlight;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />
      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3">
        <MetricTile icon={ClipboardCheck} text={s.metrics[0].text} pending={s.metrics[0].pending} />
        <StatCounter
          value={s.stepCount.value}
          suffix={s.stepCount.suffix}
          label={s.stepCount.label}
        />
        <MetricTile icon={CalendarCheck} text={s.metrics[1].text} pending={s.metrics[1].pending} />
        <MetricTile icon={Gauge} text={s.metrics[2].text} pending={s.metrics[2].pending} />
        <MetricTile icon={RefreshCcw} text={s.metrics[3].text} pending={s.metrics[3].pending} />
        <MetricTile icon={FileText} text={s.metrics[4].text} pending={s.metrics[4].pending} />
      </div>
      <DiagnosticsChart />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink to="/start">{t.startPage.cta}</ButtonLink>
        <ButtonLink to="/assessment" variant="secondary">
          {s.cta}
        </ButtonLink>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { t } = useI18n();
  const s = t.home.testimonials;

  return (
    <section className="bg-sage/[0.07]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} align="center" />
        <div className="mt-12">
          <ReviewsCarousel ariaLabel={s.title} />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/results"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-ink"
          >
            {s.cta}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CoachContactSection() {
  const { t } = useI18n();
  const s = t.home.coach;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-4xl gap-8 rounded-3xl border border-gold/25 bg-gradient-to-br from-paper to-gold/[0.05] p-6 shadow-sm sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-ink/10 shadow-sm"
        >
          <Photo
            name="about"
            alt="Maxim Malovec, hlavný tréner a majiteľ MPM™."
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 320px, 100vw"
          />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.18em] text-gold">{s.eyebrow}</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl font-bold text-ink sm:text-4xl">Maxim Malovec</h2>
          <p className="mt-1 text-sm font-semibold tracking-wide text-gold">{s.role}</p>
          <p className="mt-4 max-w-md text-base text-ink-soft">{s.bio}</p>
          <p className="mt-3 max-w-md text-base text-ink-soft">{s.lead}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink to="/contact">{s.cta}</ButtonLink>
            <ButtonLink to="/about" variant="secondary">
              {s.moreCta}
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <CredentialsStrip />
      <SectionDivider />
      <WhoForSection />
      <SectionDivider />
      <PillarsSection />
      <SectionDivider />
      <MethodTeaserSection />
      <SectionDivider />
      <AssessmentHighlightSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <CoachContactSection />
    </>
  );
}
