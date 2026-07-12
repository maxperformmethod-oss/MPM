import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./Header";
import { useI18n } from "../i18n/I18nContext";
import { CONTACT_EMAIL } from "../data/site";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Outlet />
      </main>

      <footer className="border-t border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-bold text-ink">
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
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
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

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-gold">
              {t.footer.contactTitle.toUpperCase()}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 block text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="border-t border-ink/10 px-4 py-5 text-center text-xs text-ink-soft sm:px-6">
          © {new Date().getFullYear()} MPM™ — Max Perform Method.{" "}
          {t.footer.rights}
        </div>
      </footer>
    </div>
  );
}
