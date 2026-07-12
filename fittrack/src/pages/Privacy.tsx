import { AlertTriangle } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { useI18n } from "../i18n/I18nContext";

function DraftNotice({ isSk }: { isSk: boolean }) {
  return (
    <div className="mx-auto mt-10 flex max-w-3xl gap-3 rounded-2xl border border-terracotta/30 bg-terracotta/5 p-5">
      <AlertTriangle size={20} className="mt-0.5 shrink-0 text-terracotta" />
      <div className="text-sm text-ink-soft">
        <p className="font-semibold text-terracotta">
          {isSk ? "Pracovný návrh — nie právne overený text" : "Working draft — not verified legal advice"}
        </p>
        <p className="mt-1.5">
          {isSk
            ? "Tento text je pracovný návrh. Spracúvajú sa tu aj údaje o zdravotnom stave (osobitná kategória údajov podľa čl. 9 GDPR), ktoré majú prísnejšie pravidlá než bežné meno/email — pred spustením ostrej prevádzky ho musí skontrolovať slovenský právnik. Polia označené [DOPLNIŤ] musia byť vyplnené reálnymi údajmi pred zverejnením."
            : "This text is a working draft. It also covers health-related data (a special category of data under GDPR Art. 9), which is subject to stricter rules than ordinary name/email data — it must be reviewed by a Slovak lawyer before going live. Fields marked [DOPLNIŤ] (to be added) must be filled in with real data before publishing."}
        </p>
      </div>
    </div>
  );
}

export function Privacy() {
  const { lang } = useI18n();
  const isSk = lang === "sk";

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <SectionHeading
        eyebrow={isSk ? "PRÁVNE INFORMÁCIE" : "LEGAL"}
        title={isSk ? "Ochrana osobných údajov" : "Privacy Policy"}
        align="center"
      />

      <DraftNotice isSk={isSk} />

      <div className="prose-legal mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-ink-soft [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:font-serif [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink [&_p]:mt-2 [&_ul]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
        {isSk ? (
          <>
            <p>
              Prevádzkovateľ: Maxim Malovec, Max Perform Method, [DOPLNIŤ adresa],
              maximmalovec8@gmail.com
            </p>

            <h2>Aké údaje spracúvame</h2>
            <ul>
              <li>Identifikačné a kontaktné údaje (meno, e-mail)</li>
              <li>
                Platobné údaje — spracúva výhradne Stripe ako samostatný
                prevádzkovateľ/sprostredkovateľ, MPM™ čísla platobných kariet nikdy neukladá ani
                nevidí
              </li>
              <li>
                Údaje o zdravotnom stave/zranení súvisiace s objednanou oblasťou tréningu
                (osobitná kategória údajov podľa čl. 9 GDPR) — spracúvané len na základe
                výslovného súhlasu klienta a výlučne na účel prípravy tréningového/rehabilitačného
                plánu
              </li>
            </ul>

            <h2>Účel a právny základ</h2>
            <p>
              Plnenie zmluvy (čl. 6 ods. 1 písm. b GDPR) pre bežné údaje; výslovný súhlas (čl. 9
              ods. 2 písm. a GDPR) pre zdravotné údaje.
            </p>

            <h2>Doba uchovávania</h2>
            <p>
              [DOPLNIŤ — napr. po dobu trvania spolupráce + zákonná archivačná lehota pre účtovné
              doklady]
            </p>

            <h2>Príjemcovia údajov</h2>
            <p>Stripe (platby), poskytovateľ e-mailových služieb [DOPLNIŤ, ak používaš napr. Resend/SendGrid]</p>

            <h2>Práva dotknutej osoby</h2>
            <p>
              Právo na prístup, opravu, vymazanie, obmedzenie spracúvania, prenosnosť údajov,
              namietku, a právo podať sťažnosť na Úrad na ochranu osobných údajov SR.
            </p>

            <h2>Cookies</h2>
            <p>
              [DOPLNIŤ, ak web používa analytické/marketingové cookies — treba cookie banner s
              možnosťou odmietnutia]
            </p>
          </>
        ) : (
          <>
            <p>
              Operator: Maxim Malovec, Max Perform Method, [TO BE ADDED — address],
              maximmalovec8@gmail.com
            </p>

            <h2>What data we process</h2>
            <ul>
              <li>Identification and contact details (name, email)</li>
              <li>
                Payment data — processed exclusively by Stripe as an independent
                controller/processor; MPM™ never stores or sees payment card numbers
              </li>
              <li>
                Health/injury data related to the booked training area (a special category of
                data under GDPR Art. 9) — processed only on the basis of the client's explicit
                consent and solely for the purpose of preparing the training/rehabilitation plan
              </li>
            </ul>

            <h2>Purpose and legal basis</h2>
            <p>
              Performance of a contract (GDPR Art. 6(1)(b)) for ordinary data; explicit consent
              (GDPR Art. 9(2)(a)) for health data.
            </p>

            <h2>Retention period</h2>
            <p>
              [TO BE ADDED — e.g. for the duration of the cooperation plus the statutory
              retention period for accounting records]
            </p>

            <h2>Recipients of data</h2>
            <p>Stripe (payments), email service provider [TO BE ADDED, if using e.g. Resend/SendGrid]</p>

            <h2>Data subject rights</h2>
            <p>
              The right to access, rectification, erasure, restriction of processing, data
              portability, objection, and the right to lodge a complaint with the Slovak Data
              Protection Authority (Úrad na ochranu osobných údajov SR).
            </p>

            <h2>Cookies</h2>
            <p>
              [TO BE ADDED, if the site uses analytics/marketing cookies — a cookie banner with
              the option to decline is required]
            </p>
          </>
        )}
      </div>
    </section>
  );
}
