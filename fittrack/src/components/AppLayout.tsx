import { Outlet, Link, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { Eye, Mail } from "lucide-react";
import { Header } from "./Header";
import { InstagramIcon } from "./ui/InstagramIcon";
import { useI18n } from "../i18n/I18nContext";
import { usePreview } from "../lib/usePreview";
import { CONTACT_EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "../data/site";

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-cream">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-gold" />
    </div>
  );
}

const FOOTER_LINKS = [
  { to: "/about", key: "about" },
  { to: "/approach", key: "approach" },
  { to: "/find-your-path", key: "findYourPath" },
  { to: "/assessment", key: "assessment" },
  { to: "/results", key: "results" },
  { to: "/research", key: "research" },
  { to: "/nutrition", key: "nutrition" },
  { to: "/contact", key: "contact" },
] as const;

export function AppLayout() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const preview = usePreview();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="border-t border-ink/10 bg-paper">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 text-center sm:px-6 sm:text-left md:grid-cols-3">
          <div className="flex flex-col items-center sm:items-start">
            <p className="font-serif text-xl font-bold text-ink">
              MPM<sup className="text-[0.5em]">™</sup>
            </p>
            <p className="mt-1 text-[9px] font-semibold tracking-[0.18em] text-ink-soft">
              MAX PERFORM METHOD
            </p>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">{t.footer.tagline}</p>
            <p className="mt-4 text-xs text-ink-soft">{t.footer.credentials}</p>
          </div>

          <nav aria-label={t.footer.navTitle}>
            <p className="text-xs font-semibold tracking-[0.14em] text-gold">
              {t.footer.navTitle.toUpperCase()}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:inline-grid">
              {FOOTER_LINKS.map(({ to, key }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center sm:items-start">
            <p className="text-xs font-semibold tracking-[0.14em] text-gold">
              {t.footer.contactTitle.toUpperCase()}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <Mail size={16} className="shrink-0 text-gold" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <InstagramIcon size={16} className="shrink-0 text-gold" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="border-t border-ink/10 px-4 py-5 text-center text-xs text-ink-soft sm:px-6">
          <p>
            © {new Date().getFullYear()} MPM™ — Max Perform Method.{" "}
            {t.footer.rights}
          </p>
          <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link to="/terms" className="transition-colors hover:text-ink">
              {t.footer.termsLink}
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-ink">
              {t.footer.privacyLink}
            </Link>
          </p>
        </div>
      </footer>

      {preview && (
        <div className="fixed bottom-4 left-4 z-50 flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[11px] font-semibold tracking-wide text-cream shadow-lg">
          <Eye size={13} className="text-gold" />
          ADMIN PREVIEW
        </div>
      )}
    </div>
  );
}
