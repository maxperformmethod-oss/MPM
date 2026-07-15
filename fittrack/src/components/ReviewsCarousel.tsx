import { Star } from "lucide-react";
import { Carousel } from "./ui/Carousel";
import { REVIEWS, type Review } from "../data/reviews";
import { useI18n, type Lang } from "../i18n/I18nContext";

function ReviewStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-0.5" aria-label={`${rating}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={16}
          className={i <= rating ? "fill-gold text-gold" : "fill-ink/10 text-ink/10"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, lang }: { review: Review; lang: Lang }) {
  return (
    <article className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl border border-ink/10 bg-cream px-6 py-10 text-center shadow-sm sm:px-12 sm:py-12">
      <span
        aria-hidden="true"
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${review.tone} text-lg font-semibold text-cream`}
      >
        {review.initials}
      </span>
      <ReviewStars rating={review.rating} />
      <p className="font-serif text-lg leading-relaxed text-ink sm:text-xl">
        &ldquo;{review.text[lang]}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-ink">{review.name}</p>
        <p className="mt-0.5 text-xs text-ink-soft">{review.context[lang]}</p>
      </div>
    </article>
  );
}

// Shared reviews carousel (Google-style cards) used on Home and Results.
// ⚠️ Content is placeholder — see src/data/reviews.ts.
export function ReviewsCarousel({ ariaLabel }: { ariaLabel: string }) {
  const { lang } = useI18n();

  return (
    <Carousel
      ariaLabel={ariaLabel}
      autoPlayMs={6000}
      slides={REVIEWS.map((review) => (
        <ReviewCard key={review.id} review={review} lang={lang} />
      ))}
    />
  );
}
