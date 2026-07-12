import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "./ui/Button";
import { useI18n, type Lang } from "../i18n/I18nContext";

const NAV_ITEMS = [
  { to: "/find-your-path", key: "findYourPath" },
  { to: "/about", key: "about" },
  { to: "/nutrition", key: "nutrition" },
  { to: "/research", key: "research" },
  { to: "/contact", key: "contact" },
] as const;

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div className={`flex items-center gap-0.5 text-xs font-semibold ${className}`}>
      {(["sk", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-md px-2 py-1 uppercase transition-colors ${
            lang === l ? "bg-ink text-cream" : "text-ink-soft hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          className="flex shrink-0 flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-xl font-bold tracking-tight text-ink">
            MPM<sup className="text-[0.5em]">™</sup>
          </span>
          <span className="mt-0.5 text-[9px] font-semibold tracking-[0.18em] text-ink-soft">
            MAX PERFORM METHOD
          </span>
        </NavLink>

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {NAV_ITEMS.map(({ to, key }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative whitespace-nowrap pb-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-ink after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:bg-gold"
                    : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {t.nav[key]}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink to="/rezervacia" className="!px-5 !py-2.5 whitespace-nowrap">
            {t.nav.bookAssessment}
          </ButtonLink>
          <LangToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            className="rounded-lg p-2 text-ink"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_ITEMS.map(({ to, key }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-2.5 text-sm font-medium ${
                    isActive ? "bg-ink/5 text-ink" : "text-ink-soft"
                  }`
                }
              >
                {t.nav[key]}
              </NavLink>
            ))}
          </nav>
          <ButtonLink
            to="/rezervacia"
            className="mt-3 w-full !py-2.5"
            onClick={() => setOpen(false)}
          >
            {t.nav.bookAssessment}
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
