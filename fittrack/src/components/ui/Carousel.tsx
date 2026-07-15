import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Generic one-slide-at-a-time carousel: arrows + dot indicators + optional
// autoplay. Autoplay is disabled entirely under prefers-reduced-motion, and
// pauses on hover/focus and whenever `paused` is set by the parent (e.g. a
// card is expanded). Slide transition is a gentle horizontal fade; reduced
// motion collapses it to an instant swap.
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
  const [direction, setDirection] = useState(1);
  const [hovered, setHovered] = useState(false);
  const count = slides.length;

  const onIndexChangeRef = useRef(onIndexChange);
  onIndexChangeRef.current = onIndexChange;
  useEffect(() => {
    onIndexChangeRef.current?.(index);
  }, [index]);

  const go = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex(((next % count) + count) % count);
    },
    [count, index],
  );

  // Auto-advance is NOT gated by reduced motion — cycling content is a content
  // update, not "motion". Reduced motion instead collapses the slide transition
  // to an instant swap (see variants below), so reduced-motion users still get
  // auto-play, just without the sliding animation. Hover / arrows / dots pause
  // it, satisfying WCAG 2.2.2 (a mechanism to pause auto-updating content).
  const autoActive = autoPlayMs > 0 && !paused && !hovered && count > 1;

  // Keep the timer keyed off the current index so each slide gets a full dwell.
  const indexRef = useRef(index);
  indexRef.current = index;
  useEffect(() => {
    if (!autoActive) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % count);
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoActive, autoPlayMs, count]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: reduceMotion ? 0 : dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: reduceMotion ? 0 : dir * -40 }),
  };

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
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeInOut" }}
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Predchádzajúca"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft size={18} />
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
