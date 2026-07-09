import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-ink text-cream hover:bg-ink/85 active:bg-ink/90 font-semibold",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/40 hover:bg-ink/[0.03] font-semibold",
  ghost: "bg-transparent text-ink-soft hover:bg-ink/5",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", ...rest }: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-colors disabled:opacity-40 disabled:pointer-events-none ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    />
  );
}
