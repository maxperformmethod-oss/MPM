import { Outlet, Link, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { Eye, Mail, Phone } from "lucide-react";
import { Header } from "./Header";
import { ContactWidget } from "./ContactWidget";
import { InstagramIcon } from "./ui/InstagramIcon";
import { TrustSealsRow } from "./ui/TrustSealsRow";
import { useI18n } from "../i18n/I18nContext";
import { usePreview } from "../lib/usePreview";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../data/site";

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-cream">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-gold" />
    </div>
  );
}

const FOOTER_LINKS = [
  { to: "/find-your-path", key: "findYourPath" },
  { to: "/approach", key: "approach" },
  { to: "/assessment", key: "assessment" },
  { to: "/results", key: "results" },
  { to: "/nutrition", key: "nutrition" },
  { to: "/about", key: "about" },
  { to: "/research", key: "research" },
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

      <footer className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          {/* Top: navigation (left) + contacts (right). */}
          <div className="flex flex-col gap-12 sm:flex-row sm:justify-between sm:gap-10">
            <nav aria-label={t.footer.navTitle}>
              <p className="text-[11px] font-semibold tracking-[0.18em] text-cream/40">
                {t.footer.navTitle.toUpperCase()}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {FOOTER_LINKS.map(({ to, key }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {t.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="sm:text-right">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-cream/40">
                {t.footer.contactTitle.toUpperCase()}
              </p>
              <div className="mt-4 flex flex-col gap-2.5 sm:items-end">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-gold group-hover:text-gold">
                    <Mail size={15} />
                  </span>
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="group flex items-center gap-3 text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-gold group-hover:text-gold">
                    <Phone size={15} />
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span aria-hidden="true" className="text-base leading-none">🇸🇰</span>
                    {PHONE_DISPLAY}
                  </span>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/15 transition-colors group-hover:border-gold group-hover:text-gold">
                    <InstagramIcon size={15} />
                  </span>
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: partner seals (left) + MPM brand (right). */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <TrustSealsRow compact />
            </div>
            <div className="sm:text-right">
              <p className="font-serif text-2xl font-bold text-cream">
                MPM<sup className="text-[0.5em]">™</sup>
              </p>
              <p className="mt-1.5 text-[10px] font-semibold tracking-[0.22em] text-gold">
                MAX PERFORM METHOD
              </p>
              <p className="mt-3 text-xs leading-relaxed text-cream/40">
                {t.footer.credentials}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-cream/40 sm:flex-row sm:px-6">
            <p>
              © {new Date().getFullYear()} MPM™ — Max Perform Method. {t.footer.rights}
            </p>
            <p className="flex items-center gap-5">
              <Link to="/terms" className="transition-colors hover:text-cream">
                {t.footer.termsLink}
              </Link>
              <Link to="/privacy" className="transition-colors hover:text-cream">
                {t.footer.privacyLink}
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <ContactWidget />

      {preview && (
        <div className="fixed bottom-4 left-4 z-50 flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[11px] font-semibold tracking-wide text-cream shadow-lg">
          <Eye size={13} className="text-gold" />
          ADMIN PREVIEW
        </div>
      )}
    </div>
  );
}
