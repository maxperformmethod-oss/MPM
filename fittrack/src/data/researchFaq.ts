// Reference metadata for the 20 myth/fact research cards.
// Index-aligned with t.researchFaq.items in src/i18n/{sk,en}.ts — keep in sync.
//
// Citation honesty policy: direct URLs are used ONLY where the identifier was
// independently verified (PMC/PMID given in the project brief, or a stable
// institutional URL). All other links are PubMed *search* links on the exact
// paper title — they take the reader to the study without fabricating a
// DOI/PMID we could not verify. Citations without any reliable link carry
// no URL at all.

export type ResearchReference = {
  citation: string;
  url?: string;
};

export type ResearchFaqMeta = {
  verdict: "myth" | "fact";
  references: ResearchReference[];
};

const pubmedSearch = (title: string) =>
  `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(`"${title}"`)}`;

// Anchor references verified in the project brief (reused across cards).
const GRINDEM_2016: ResearchReference = {
  citation:
    "Grindem H, Snyder-Mackler L, Moksnes H, Engebretsen L, Risberg MA. Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study. Br J Sports Med. 2016;50(13):804-808.",
  url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4912389/",
};

const ARDERN_2014: ResearchReference = {
  citation:
    "Ardern CL, Taylor NF, Feller JA, Webster KE. Fifty-five per cent return to competitive sport following anterior cruciate ligament reconstruction surgery: an updated systematic review and meta-analysis. Br J Sports Med. 2014;48(21):1543-1552.",
  url: pubmedSearch(
    "Fifty-five per cent return to competitive sport following anterior cruciate ligament reconstruction surgery",
  ),
};

const BIOPSYCHOSOCIAL_2022: ResearchReference = {
  citation:
    "Management of Chronic Musculoskeletal Pain Through a Biopsychosocial Lens. J Athl Train. 2022.",
  url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9020600/",
};

const LIN_2020: ResearchReference = {
  citation:
    "Lin I, Wiles L, Waller R, et al. What does best practice care for musculoskeletal pain look like? Eleven consistent recommendations from high-quality clinical practice guidelines: systematic review. Br J Sports Med. 2020;54(2):79-86.",
  url: pubmedSearch(
    "What does best practice care for musculoskeletal pain look like",
  ),
};

export const RESEARCH_FAQ_META: ResearchFaqMeta[] = [
  // 1 — pain = tissue damage?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Raja SN, Carr DB, Cohen M, et al. The revised International Association for the Study of Pain definition of pain: concepts, challenges, and compromises. Pain. 2020;161(9):1976-1982.",
        url: pubmedSearch(
          "The revised International Association for the Study of Pain definition of pain",
        ),
      },
      {
        citation:
          "Moseley GL, Butler DS. Fifteen years of Explaining Pain: the past, present, and future. J Pain. 2015;16(9):807-813.",
        url: pubmedSearch("Fifteen years of explaining pain"),
      },
      BIOPSYCHOSOCIAL_2022,
    ],
  },
  // 2 — MRI always finds the cause?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Brinjikji W, Luetmer PH, Comstock B, et al. Systematic literature review of imaging features of spinal degeneration in asymptomatic populations. AJNR Am J Neuroradiol. 2015;36(4):811-816.",
        url: pubmedSearch(
          "Systematic literature review of imaging features of spinal degeneration in asymptomatic populations",
        ),
      },
      {
        citation:
          "Culvenor AG, Øiestad BE, Hart HF, et al. Prevalence of knee osteoarthritis features on magnetic resonance imaging in asymptomatic uninjured adults: a systematic review and meta-analysis. Br J Sports Med. 2019;53(20):1268-1278.",
        url: pubmedSearch(
          "Prevalence of knee osteoarthritis features on magnetic resonance imaging in asymptomatic uninjured adults",
        ),
      },
    ],
  },
  // 3 — stop exercising when it hurts?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Smith BE, Hendrick P, Smith TO, et al. Should exercises be painful in the management of chronic musculoskeletal pain? A systematic review and meta-analysis. Br J Sports Med. 2017;51(23):1679-1687.",
        url: pubmedSearch(
          "Should exercises be painful in the management of chronic musculoskeletal pain",
        ),
      },
      LIN_2020,
    ],
  },
  // 4 — rest better than movement?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Dahm KT, Brurberg KG, Jamtvedt G, Hagen KB. Advice to rest in bed versus advice to stay active for acute low-back pain and sciatica. Cochrane Database Syst Rev. 2010;(6):CD007612.",
        url: pubmedSearch(
          "Advice to rest in bed versus advice to stay active for acute low-back pain and sciatica",
        ),
      },
      LIN_2020,
    ],
  },
  // 5 — pain-free = ready for sport?
  {
    verdict: "myth",
    references: [ARDERN_2014, GRINDEM_2016],
  },
  // 6 — time alone after ACL?
  {
    verdict: "myth",
    references: [
      GRINDEM_2016,
      {
        citation:
          "Beischer S, Gustavsson L, Senorski EH, et al. Young athletes who return to sport before 9 months after anterior cruciate ligament reconstruction have a rate of new injury 7 times that of those who delay return. J Orthop Sports Phys Ther. 2020;50(2):83-90.",
        url: pubmedSearch(
          "Young athletes who return to sport before 9 months after anterior cruciate ligament reconstruction",
        ),
      },
      ARDERN_2014,
    ],
  },
  // 7 — RTS should be test-based (FACT)
  {
    verdict: "fact",
    references: [
      GRINDEM_2016,
      {
        citation:
          "Kyritsis P, Bahr R, Landreau P, Miladi R, Witvrouw E. Likelihood of ACL graft rupture: not meeting six clinical discharge criteria before return to sport is associated with a four times greater risk of rupture. Br J Sports Med. 2016;50(15):946-951.",
        url: pubmedSearch(
          "Likelihood of ACL graft rupture: not meeting six clinical discharge criteria",
        ),
      },
      {
        citation:
          "Ardern CL, Glasgow P, Schneiders A, et al. 2016 Consensus statement on return to sport from the First World Congress in Sports Physical Therapy, Bern. Br J Sports Med. 2016;50(14):853-864.",
        url: pubmedSearch(
          "2016 Consensus statement on return to sport from the First World Congress in Sports Physical Therapy",
        ),
      },
    ],
  },
  // 8 — one perfect technique?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Saraceni N, Kent P, Ng L, Campbell A, Straker L, O'Sullivan P. To flex or not to flex? Is there a relationship between lumbar spine flexion during lifting and low back pain? A systematic review with meta-analysis. J Orthop Sports Phys Ther. 2020;50(3):121-130.",
        url: pubmedSearch(
          "To flex or not to flex? Is there a relationship between lumbar spine flexion during lifting and low back pain",
        ),
      },
      {
        citation:
          "Swain CTV, Pan F, Owen PJ, Schmidt H, Belavy DL. No consensus on causality of spine postures or physical exposure and low back pain: a systematic review of systematic reviews. J Biomech. 2020;102:109312.",
        url: pubmedSearch(
          "No consensus on causality of spine postures or physical exposure and low back pain",
        ),
      },
    ],
  },
  // 9 — deep squats bad for knees?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Hartmann H, Wirth K, Klusemann M. Analysis of the load on the knee joint and vertebral column with changes in squatting depth and weight load. Sports Med. 2013;43(10):993-1008.",
        url: pubmedSearch(
          "Analysis of the load on the knee joint and vertebral column with changes in squatting depth",
        ),
      },
      {
        citation:
          "Schoenfeld BJ. Squatting kinematics and kinetics and their application to exercise performance. J Strength Cond Res. 2010;24(12):3497-3506.",
        url: pubmedSearch(
          "Squatting kinematics and kinetics and their application to exercise performance",
        ),
      },
    ],
  },
  // 10 — running bad for knees?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Alentorn-Geli E, Samuelsson K, Musahl V, Green CL, Bhandari M, Karlsson J. The association of recreational and competitive running with hip and knee osteoarthritis: a systematic review and meta-analysis. J Orthop Sports Phys Ther. 2017;47(6):373-390.",
        url: pubmedSearch(
          "The association of recreational and competitive running with hip and knee osteoarthritis",
        ),
      },
      {
        citation:
          "Timmins KA, Leech RD, Batt ME, Edwards KL. Running and knee osteoarthritis: a systematic review and meta-analysis. Am J Sports Med. 2017;45(6):1447-1457.",
        url: pubmedSearch(
          "Running and knee osteoarthritis: a systematic review and meta-analysis",
        ),
      },
    ],
  },
  // 11 — strength training dangerous for kids?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Lloyd RS, Faigenbaum AD, Stone MH, et al. Position statement on youth resistance training: the 2014 International Consensus. Br J Sports Med. 2014;48(7):498-505.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24055781/",
      },
      {
        citation:
          "Faigenbaum AD, Kraemer WJ, Blimkie CJR, et al. Youth resistance training: updated position statement paper from the National Strength and Conditioning Association. J Strength Cond Res. 2009;23(5 Suppl):S60-S79.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19620931/",
      },
    ],
  },
  // 12 — strength training dangerous for older adults?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Fragala MS, Cadore EL, Dorgo S, et al. Resistance training for older adults: position statement from the National Strength and Conditioning Association. J Strength Cond Res. 2019;33(8):2019-2052.",
        url: pubmedSearch(
          "Resistance training for older adults: position statement from the National Strength and Conditioning Association",
        ),
      },
      {
        citation:
          "Liu CJ, Latham NK. Progressive resistance strength training for improving physical function in older adults. Cochrane Database Syst Rev. 2009;(3):CD002759.",
        url: pubmedSearch(
          "Progressive resistance strength training for improving physical function in older adults",
        ),
      },
    ],
  },
  // 13 — weak core main cause of back pain?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Saragiotto BT, Maher CG, Yamato TP, et al. Motor control exercise for chronic non-specific low-back pain. Cochrane Database Syst Rev. 2016;(1):CD012004.",
        url: pubmedSearch(
          "Motor control exercise for chronic non-specific low-back pain",
        ),
      },
      {
        citation:
          "Lederman E. The myth of core stability. J Bodyw Mov Ther. 2010;14(1):84-98.",
        url: pubmedSearch("The myth of core stability"),
      },
      BIOPSYCHOSOCIAL_2022,
    ],
  },
  // 14 — perfect posture prevents pain?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Slater D, Korakakis V, O'Sullivan P, Nolan D, O'Sullivan K. \"Sit up straight\": time to re-evaluate. J Orthop Sports Phys Ther. 2019;49(8):562-564.",
        url: pubmedSearch("Sit up straight: time to re-evaluate"),
      },
      {
        citation:
          "Swain CTV, Pan F, Owen PJ, Schmidt H, Belavy DL. No consensus on causality of spine postures or physical exposure and low back pain: a systematic review of systematic reviews. J Biomech. 2020;102:109312.",
        url: pubmedSearch(
          "No consensus on causality of spine postures or physical exposure and low back pain",
        ),
      },
    ],
  },
  // 15 — stretching prevents injury?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. Br J Sports Med. 2014;48(11):871-877.",
        url: pubmedSearch(
          "The effectiveness of exercise interventions to prevent sports injuries",
        ),
      },
      {
        citation:
          "Thacker SB, Gilchrist J, Stroup DF, Kimsey CD. The impact of stretching on sports injury risk: a systematic review of the literature. Med Sci Sports Exerc. 2004;36(3):371-378.",
        url: pubmedSearch(
          "The impact of stretching on sports injury risk: a systematic review",
        ),
      },
    ],
  },
  // 16 — foam rolling breaks fascia?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Chaudhry H, Schleip R, Ji Z, Bukiet B, Maney M, Findley T. Three-dimensional mathematical model for deformation of human fasciae in manual therapy. J Am Osteopath Assoc. 2008;108(8):379-390.",
        url: pubmedSearch(
          "Three-dimensional mathematical model for deformation of human fasciae in manual therapy",
        ),
      },
      {
        citation:
          "Behm DG, Wilke J. Do self-myofascial release devices release myofascia? Rolling mechanisms: a narrative review. Sports Med. 2019;49(8):1173-1181.",
        url: pubmedSearch(
          "Do self-myofascial release devices release myofascia",
        ),
      },
      {
        citation:
          "Wiewelhove T, Döweling A, Schneider C, et al. A meta-analysis of the effects of foam rolling on performance and recovery. Front Physiol. 2019;10:376.",
        url: pubmedSearch(
          "A meta-analysis of the effects of foam rolling on performance and recovery",
        ),
      },
    ],
  },
  // 17 — muscle imbalances always a problem?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Bishop C, Turner A, Read P. Effects of inter-limb asymmetries on physical and sports performance: a systematic review. J Sports Sci. 2018;36(10):1135-1144.",
        url: pubmedSearch(
          "Effects of inter-limb asymmetries on physical and sports performance",
        ),
      },
      {
        citation:
          "Maloney SJ. The relationship between asymmetry and athletic performance: a critical review. J Strength Cond Res. 2019;33(9):2579-2593.",
        url: pubmedSearch(
          "The relationship between asymmetry and athletic performance",
        ),
      },
    ],
  },
  // 18 — joint cracking = damage?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Kawchuk GN, Fryer J, Jaremko JL, Zeng H, Rowe L, Thompson R. Real-time visualization of joint cavitation. PLoS One. 2015;10(4):e0119470.",
        url: pubmedSearch("Real-time visualization of joint cavitation"),
      },
      {
        citation:
          "Deweber K, Olszewski M, Ortolano R. Knuckle cracking and hand osteoarthritis. J Am Board Fam Med. 2011;24(2):169-174.",
        url: pubmedSearch("Knuckle cracking and hand osteoarthritis"),
      },
      {
        citation:
          "Unger DL. Does knuckle cracking lead to arthritis of the fingers? Arthritis Rheum. 1998;41(5):949-950.",
        url: pubmedSearch(
          "Does knuckle cracking lead to arthritis of the fingers",
        ),
      },
    ],
  },
  // 19 — passive therapies necessary?
  {
    verdict: "myth",
    references: [
      LIN_2020,
      {
        citation:
          "National Institute for Health and Care Excellence (NICE). Low back pain and sciatica in over 16s: assessment and management. NICE guideline NG59. 2016.",
        url: "https://www.nice.org.uk/guidance/ng59",
      },
    ],
  },
  // 20 — rehab done when pain gone?
  {
    verdict: "myth",
    references: [
      {
        citation:
          "Ardern CL, Glasgow P, Schneiders A, et al. 2016 Consensus statement on return to sport from the First World Congress in Sports Physical Therapy, Bern. Br J Sports Med. 2016;50(14):853-864.",
        url: pubmedSearch(
          "2016 Consensus statement on return to sport from the First World Congress in Sports Physical Therapy",
        ),
      },
      GRINDEM_2016,
      {
        citation:
          "Buckthorpe M. Optimising the late-stage rehabilitation and return-to-sport training and testing process after ACL reconstruction. Sports Med. 2019;49(7):1043-1058.",
        url: pubmedSearch(
          "Optimising the late-stage rehabilitation and return-to-sport training and testing process after ACL reconstruction",
        ),
      },
    ],
  },
];
