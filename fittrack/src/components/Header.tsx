import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/approach", label: "The MPM Approach" },
  { to: "/find-your-path", label: "Find Your Path" },
  { to: "/nutrition", label: "Nutrition" },
  { to: "/research", label: "Research" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl font-bold tracking-tight text-ink">
            MPM<sup className="text-[0.5em]">™</sup>
          </span>
          <span className="mt-0.5 text-[9px] font-semibold tracking-[0.18em] text-ink-soft">
            MALOVEC PERFORMANCE METHOD
          </span>
        </NavLink>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative pb-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-ink after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:bg-gold"
                    : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button className="!rounded-lg !px-5 !py-2.5 text-sm">Book Assessment</Button>
        </div>

        <button
          className="rounded-lg p-2 text-ink lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_ITEMS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-2.5 text-sm font-medium ${
                    isActive ? "bg-ink/5 text-ink" : "text-ink-soft"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <Button className="mt-3 w-full !rounded-lg !py-2.5 text-sm">Book Assessment</Button>
        </div>
      )}
    </header>
  );
}
