import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronDown, ExternalLink, Info, Search } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { CTABand } from "../components/CTABand";
import { useI18n } from "../i18n/I18nContext";
import { usePreview } from "../lib/usePreview";
import { RESEARCH_FAQ_META } from "../data/researchFaq";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

// Client-side fuzzy search over the 20 myth/fact cards — no AI, no API,
// no extra dependency. Diacritics-insensitive ("bolest" matches "bolesť"),
// fields weighted so question matches rank above body-text matches, and a
// 4-char prefix fallback covers Slovak inflection ("cvičení" → "cvičiť").
const STOPWORDS = new Set([
  // SK function words that would only add noise as substrings
  "pri", "ked", "ako", "aby", "ale", "cez", "mam", "mas", "moj", "moja", "aku", "aky", "aka", "pre", "bez", "este", "uz", "ci", "co", "sa", "so", "za", "na", "do", "od", "po", "je", "su", "to", "ta", "ten",
  // EN
  "the", "and", "for", "why", "how", "what", "does", "is", "are", "my", "when", "can", "should", "you", "your",
]);

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function scoreItem(
  query: string,
  item: { question: string; short: string; evidence: string; takeaway: string },
): number {
  const tokens = normalize(query)
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 3 && !STOPWORDS.has(token));
  if (tokens.length === 0) return 0;

  const fields: [string, number][] = [
    [normalize(item.question), 4],
    [normalize(item.short), 3],
    [normalize(item.takeaway), 2],
    [normalize(item.evidence), 1],
  ];

  let score = 0;
  for (const token of tokens) {
    const prefix = token.length > 4 ? token.slice(0, 4) : null;
    for (const [field, weight] of fields) {
      if (field.includes(token)) {
        score += weight;
      } else if (prefix && field.includes(prefix)) {
        score += weight * 0.6;
      }
    }
  }
  return score;
}

function MythCard({
  index,
  open,
  onToggle,
}: {
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const { t } = useI18n();
  const s = t.researchFaq;
  const item = s.items[index];
  const meta = RESEARCH_FAQ_META[index];
  const isFact = meta.verdict === "fact";

  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-sm"
    >
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="flex items-center gap-3">
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-[0.08em] ${
              isFact ? "bg-sage/15 text-sage" : "bg-terracotta/10 text-terracotta"
            }`}
          >
            {isFact ? s.verdictFact : s.verdictMyth}
          </span>
          <span className="text-sm font-semibold text-ink sm:text-base">
            {item.question}
          </span>
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-5 pb-5">
              <p className="text-sm font-medium text-ink">{item.short}</p>

              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-gold">
                  {s.evidenceTitle.toUpperCase()}
                </p>
                <p className="mt-1.5 text-sm text-ink-soft">{item.evidence}</p>
              </div>

              <div className="rounded-xl border border-gold/30 bg-gold/10 p-4">
                <p className="text-xs font-semibold tracking-[0.14em] text-gold">
                  {s.takeawayTitle.toUpperCase()}
                </p>
                <p className="mt-1.5 text-sm text-ink">{item.takeaway}</p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-ink-soft">
                  {s.referencesTitle.toUpperCase()}
                </p>
                <ul className="mt-2 flex flex-col gap-2.5">
                  {meta.references.map((ref) => (
                    <li key={ref.citation} className="text-xs leading-relaxed text-ink-soft">
                      {ref.citation}
                      {ref.url && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-0.5 flex w-fit items-center gap-1 font-medium text-gold transition-colors hover:text-ink"
                        >
                          {s.readCta}
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Research() {
  const { t } = useI18n();
  const s = t.researchPage;
  const faq = t.researchFaq;
  const preview = usePreview();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  const searching = query.trim().length >= 2;
  const visibleIndices = useMemo(() => {
    const all = faq.items.map((_, i) => i);
    if (!searching) return all;
    return all
      .map((i) => ({ i, score: scoreItem(query, faq.items[i]) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ i }) => i);
  }, [faq.items, query, searching]);

  // While searching, auto-open the best match so the answer + study links
  // are immediately visible without an extra click. A manual click still
  // wins: openIndex === null means "no manual choice yet" (-1 = explicitly
  // closed), anything else is the user's own selection.
  const effectiveOpen = searching
    ? openIndex === null
      ? (visibleIndices[0] ?? null)
      : openIndex === -1
        ? null
        : openIndex
    : openIndex === -1
      ? null
      : openIndex;

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} lead={s.lead} align="center" />

        <h2 className="mt-14 text-center font-serif text-2xl font-semibold text-ink">
          {faq.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-ink-soft">{faq.lead}</p>

        <div className="relative mx-auto mt-8 max-w-3xl">
          <Search
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft/60"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpenIndex(null);
            }}
            placeholder={faq.searchPlaceholder}
            aria-label={faq.searchPlaceholder}
            className="w-full rounded-xl border border-ink/15 bg-paper py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink-soft/50 focus:border-gold focus:outline-none"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-8 flex max-w-3xl flex-col gap-3"
        >
          {visibleIndices.map((i) => (
            <MythCard
              key={faq.items[i].question}
              index={i}
              open={effectiveOpen === i}
              onToggle={() => setOpenIndex(effectiveOpen === i ? -1 : i)}
            />
          ))}
          {searching && visibleIndices.length === 0 && (
            <p className="rounded-2xl border border-ink/10 bg-paper px-5 py-8 text-center text-sm text-ink-soft">
              {faq.searchNoResults}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-ink/10 bg-paper p-5"
        >
          <Info size={18} className="mt-0.5 shrink-0 text-gold" />
          <p className="text-xs text-ink-soft">{faq.disclaimer}</p>
        </motion.div>

        {preview && (
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="flex items-center justify-center gap-3">
              <span className="rounded-full bg-terracotta/10 px-3 py-1 text-[10px] font-bold tracking-[0.08em] text-terracotta">
                {s.draftLabel}
              </span>
              <h2 className="font-serif text-xl font-semibold text-ink">{s.draftTitle}</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {s.articles.map((article) => (
                <article
                  key={article.title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-dashed border-ink/20 bg-paper p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cream-dark text-ink">
                    <BookOpen size={18} />
                  </div>
                  <p className="text-xs font-semibold tracking-[0.1em] text-gold">
                    {article.tag.toUpperCase()}
                  </p>
                  <h3 className="flex-1 font-serif text-lg font-semibold leading-snug text-ink">
                    {article.title}
                  </h3>
                  <p className="text-xs font-medium text-ink-soft">{s.comingSoon}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <CTABand />
    </>
  );
}
