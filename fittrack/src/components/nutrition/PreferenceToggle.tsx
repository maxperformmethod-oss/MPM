import { ThumbsUp, Minus, ThumbsDown } from "lucide-react";
import type { PreferenceValue } from "../../data/nutritionPreferences";

export function PreferenceToggle({
  value,
  onChange,
  likeLabel,
  neutralLabel,
  dislikeLabel,
}: {
  value: PreferenceValue | undefined;
  onChange: (value: PreferenceValue) => void;
  likeLabel: string;
  neutralLabel: string;
  dislikeLabel: string;
}) {
  const options: { value: PreferenceValue; icon: typeof ThumbsUp; label: string }[] = [
    { value: "like", icon: ThumbsUp, label: likeLabel },
    { value: "neutral", icon: Minus, label: neutralLabel },
    { value: "dislike", icon: ThumbsDown, label: dislikeLabel },
  ];

  return (
    <div className="flex shrink-0 gap-1">
      {options.map(({ value: optValue, icon: Icon, label }) => (
        <button
          key={optValue}
          onClick={() => onChange(optValue)}
          aria-pressed={value === optValue}
          aria-label={label}
          title={label}
          className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
            value === optValue
              ? optValue === "dislike"
                ? "border-terracotta bg-terracotta/10 text-terracotta"
                : "border-gold bg-gold/10 text-gold"
              : "border-ink/10 bg-paper text-ink-soft hover:border-ink/25"
          }`}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
