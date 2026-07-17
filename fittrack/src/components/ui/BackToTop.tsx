import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";

// Floating "back to top" control that appears once the visitor has scrolled
// down. Clicking scrolls smoothly to the top (instant under reduced motion).
// Sits above the contact widget FAB in the bottom-right corner.
export function BackToTop() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label={t.footer.backToTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          className="fixed bottom-24 right-4 z-40 flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-3 text-sm font-semibold text-ink shadow-lg transition-colors hover:border-gold hover:text-gold"
        >
          <ArrowUp size={16} />
          <span className="hidden sm:inline">{t.footer.backToTop}</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
