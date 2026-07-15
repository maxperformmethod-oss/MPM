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
            ? "Tento text je pracovný návrh vychádzajúci z bežnej praxe pre EU/SK online služby. Pred spustením ostrej prevádzky a prijímaním platieb ho musí skontrolovať slovenský právnik. Polia označené [DOPLNIŤ] musia byť vyplnené reálnymi údajmi pred zverejnením."
            : "This text is a working draft based on common practice for EU/SK online services. It must be reviewed by a Slovak lawyer before going live and accepting real payments. Fields marked [DOPLNIŤ] (to be added) must be filled in with real data before publishing."}
        </p>
      </div>
    </div>
  );
}

export function Terms() {
  const { lang } = useI18n();
  const isSk = lang === "sk";

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
      <SectionHeading
        eyebrow={isSk ? "PRÁVNE INFORMÁCIE" : "LEGAL"}
        title={isSk ? "Obchodné podmienky" : "Terms & Conditions"}
        align="center"
      />

      <DraftNotice isSk={isSk} />

      <div className="prose-legal mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-ink-soft [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:font-serif [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink [&_p]:mt-2">
        {isSk ? (
          <>
            <h2>1. Prevádzkovateľ</h2>
            <p>
              Max Perform Method (MPM™), Maxim Malovec, IČO: [DOPLNIŤ], sídlo/miesto podnikania:
              [DOPLNIŤ], kontakt: maxperformmethod@gmail.com. [DOPLNIŤ — či je platca DPH]
            </p>

            <h2>2. Objednávka a uzavretie zmluvy</h2>
            <p>
              Objednávka sa uskutočňuje výberom oblasti, formy tréningu a potvrdením platby cez
              platobnú bránu Stripe. Zmluva je uzavretá momentom úspešného spracovania platby.
            </p>

            <h2>3. Cena a platba</h2>
            <p>
              Všetky ceny sú uvedené v EUR vrátane príslušných daní (ak je prevádzkovateľ platcom
              DPH). Platba prebieha výhradne cez Stripe (platobná karta). [DOPLNIŤ presné ceny,
              keď budú finálne]
            </p>

            <h2>4. Dodanie služby</h2>
            <p>
              Služba (tréningový plán, protokoly, cvičenia) je doručovaná e-mailom po potvrdení
              platby, v lehote [DOPLNIŤ — napr. 2-3 pracovné dni]. Služba nie je poskytovaná
              okamžite pri platbe — ide o individuálne pripravovaný obsah.
            </p>

            <h2>5. Právo na odstúpenie od zmluvy</h2>
            <p>
              V súlade so zákonom č. 102/2014 Z. z. má spotrebiteľ právo odstúpiť od zmluvy do 14
              dní od jej uzavretia bez uvedenia dôvodu. Výnimka: keďže ide o digitálnu
              službu/obsah na mieru, prevádzkovateľ požiada klienta o výslovný súhlas so začatím
              plnenia pred uplynutím lehoty na odstúpenie — klient berie na vedomie, že udelením
              súhlasu stráca právo na odstúpenie od zmluvy po úplnom poskytnutí služby.
            </p>
            <p className="italic">
              Toto je právne citlivý bod — nechaj overiť právnikom, presné znenie súhlasu musí byť
              správne, inak riskuješ neplatnosť vylúčenia práva na odstúpenie.
            </p>

            <h2>6. Zdravotné upozornenie (disclaimer)</h2>
            <p>
              Služby poskytované cez MPM™ sú tréningové a kondičné poradenstvo, nie sú náhradou
              lekárskej starostlivosti, diagnostiky ani liečby. Klient je povinný pred začatím
              akéhokoľvek cvičebného programu konzultovať svoj zdravotný stav s lekárom, najmä ak
              sa zotavuje z operácie alebo vážneho zranenia. Prevádzkovateľ nezodpovedá za
              zranenia vzniknuté nedodržaním pokynov alebo nesprávnym vykonávaním cvičení bez
              dohľadu.
            </p>

            <h2>7. Reklamácie</h2>
            <p>[DOPLNIŤ — reklamačný postup, kontaktný email na reklamácie]</p>

            <h2>8. Záverečné ustanovenia</h2>
            <p>
              Tieto podmienky sa riadia právnym poriadkom Slovenskej republiky. Prevádzkovateľ si
              vyhradzuje právo tieto podmienky meniť; aktuálne znenie je vždy dostupné na webe.
            </p>
          </>
        ) : (
          <>
            <h2>1. Operator</h2>
            <p>
              Max Perform Method (MPM™), Maxim Malovec, Business ID: [TO BE ADDED], registered
              address/place of business: [TO BE ADDED], contact: maxperformmethod@gmail.com. [TO BE
              ADDED — whether VAT-registered]
            </p>

            <h2>2. Order and conclusion of contract</h2>
            <p>
              An order is placed by selecting the area, training format, and confirming payment
              via the Stripe payment gateway. The contract is concluded at the moment of
              successful payment processing.
            </p>

            <h2>3. Price and payment</h2>
            <p>
              All prices are shown in EUR, including applicable taxes (if the operator is
              VAT-registered). Payment is processed exclusively via Stripe (card payment). [TO BE
              ADDED: final prices once confirmed]
            </p>

            <h2>4. Delivery of the service</h2>
            <p>
              The service (training plan, protocols, exercises) is delivered by email after
              payment is confirmed, within [TO BE ADDED — e.g. 2-3 business days]. The service is
              not provided instantly upon payment — it is individually prepared content.
            </p>

            <h2>5. Right of withdrawal</h2>
            <p>
              Under Slovak Act No. 102/2014 Coll., a consumer has the right to withdraw from the
              contract within 14 days of its conclusion without giving a reason. Exception: since
              this is a digital service/custom content, the operator will request the client's
              explicit consent to begin performance before the withdrawal period expires — the
              client acknowledges that giving this consent means losing the right of withdrawal
              once the service has been fully provided.
            </p>
            <p className="italic">
              This is a legally sensitive point — have it reviewed by a lawyer; the exact wording
              of the consent must be correct, otherwise the exclusion of the right of withdrawal
              risks being invalid.
            </p>

            <h2>6. Health disclaimer</h2>
            <p>
              Services provided through MPM™ are training and conditioning guidance — they are
              not a substitute for medical care, diagnosis, or treatment. Before starting any
              exercise program, the client must consult their health condition with a doctor,
              especially if recovering from surgery or a serious injury. The operator is not
              liable for injuries resulting from failure to follow instructions or incorrect,
              unsupervised performance of exercises.
            </p>

            <h2>7. Complaints</h2>
            <p>[TO BE ADDED — complaints procedure, contact email for complaints]</p>

            <h2>8. Final provisions</h2>
            <p>
              These terms are governed by the law of the Slovak Republic. The operator reserves
              the right to amend these terms; the current version is always available on the
              website.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
