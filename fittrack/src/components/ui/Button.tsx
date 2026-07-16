import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "inverseOutline";

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-[0.9375rem] font-semibold transition-colors disabled:opacity-40 disabled:pointer-events-none";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-ink text-cream hover:bg-ink/85 active:bg-ink/90",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/40 hover:bg-ink/[0.03]",
  ghost: "bg-transparent text-ink-soft hover:bg-ink/5 font-medium",
  inverse: "bg-cream text-ink hover:bg-paper",
  inverseOutline:
    "bg-transparent text-cream border border-cream/30 hover:border-cream/60 hover:bg-cream/10",
};

export function buttonClasses(variant: Variant, className = ""): string {
  return `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", ...rest }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...rest} />;
}

export function ButtonLink({
  to,
  variant = "primary",
  className = "",
  onClick,
  children,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={buttonClasses(variant, className)} onClick={onClick}>
      {children}
    </Link>
  );
}
