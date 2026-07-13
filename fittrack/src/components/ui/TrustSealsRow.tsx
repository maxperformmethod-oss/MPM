import { useI18n } from "../../i18n/I18nContext";

export function TrustSealsRow({ compact = false }: { compact?: boolean } = {}) {
  const { t } = useI18n();
  const s = t.aboutPage.trustSeals;

  const gap = compact ? "gap-4" : "gap-8";
  const cardPad = compact ? "px-2 py-1.5" : "px-3.5 py-2.5";
  const ministryImgH = compact ? "h-5" : "h-9 sm:h-10";
  const ftvsImgH = compact ? "h-9" : "h-16 sm:h-20";
  const monogramSize = compact ? "h-9 w-9" : "h-16 w-16 sm:h-20 sm:w-20";
  const monogramText = compact ? "text-xs" : "text-lg";

  return (
    <div className={`flex flex-wrap items-center ${gap}`}>
      <div className={`flex items-center rounded-lg bg-cream ${cardPad}`}>
        <img
          src="/photos2/ministerstvo-sportu.webp"
          alt={s.ministryAlt}
          className={`${ministryImgH} w-auto`}
          loading="lazy"
        />
      </div>
      <img
        src="/photos2/ftvs-uk.webp"
        alt={s.ftvsAlt}
        className={`${ftvsImgH} w-auto`}
        loading="lazy"
      />
      <div
        role="img"
        aria-label={s.mpmAlt}
        className={`flex ${monogramSize} shrink-0 items-center justify-center rounded-full border-2 border-gold bg-cream`}
      >
        <span className={`font-serif ${monogramText} font-bold text-ink`}>
          MPM<sup className="text-[0.5em]">™</sup>
        </span>
      </div>
    </div>
  );
}
