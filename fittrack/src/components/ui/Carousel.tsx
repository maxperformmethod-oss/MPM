import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// % of container width one slide takes + gap between slides. The active
// slide is centered, so ~5.5% of the previous and next cards stays visible
// at the edges (premium "peek" style).
const SLIDE_W = 86;
const GAP = 3;

// Generic one-slide-at-a-time carousel with partial prev/next slides
// visible, arrows + dot indicators + optional autoplay. Autoplay pauses on
// hover/focus and while `paused` is set by the parent (e.g. a card is
// expanded); auto-advance itself is NOT gated by prefers-reduced-motion
// (content updates aren't "motion" — WCAG 2.2.2 pause control = hover/arrows),
// but the slide transition collapses to an instant swap for those users.
export function Carousel({
  slides,
  ariaLabel,
  autoPlayMs = 0,
  paused = false,
  onIndexChange,
}: {
  slides: ReactNode[];
  ariaLabel: string;
  autoPlayMs?: number;
  paused?: boolean;
  onIndexChange?: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const count = slides.length;

  const onIndexChangeRef = useRef(onIndexChange);
  onIndexChangeRef.current = onIndexChange;
  useEffect(() => {
    onIndexChangeRef.current?.(index);
  }, [index]);

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  const autoActive = autoPlayMs > 0 && !paused && !hovered && count > 1;
  useEffect(() => {
    if (!autoActive) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoActive, autoPlayMs, count]);

  // Track is exactly as wide as the container, slides overflow it — so a
  // translateX in % of the track equals % of the container.
  const x = `${(100 - SLIDE_W) / 2 - index * (SLIDE_W + GAP)}%`;

  return (
    <div
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      <div className="overflow-hidden">
        <motion.div
          className="flex w-full items-stretch"
          animate={{ x }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              className={`shrink-0 basis-[86%] ${i === index ? "" : "pointer-events-none"}`}
              style={{ marginRight: `${GAP}%` }}
              animate={{ opacity: i === index ? 1 : 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeInOut" }}
              aria-hidden={i !== index}
            >
              {slide}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {count > 1 && (
        <div className="mt-7 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Predchádzajúca"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft size={19} />
          </button>

          <div className="flex max-w-[60%] flex-wrap items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Ďalšia"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      )}
    </div>
  );
}
