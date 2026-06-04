const reagentData = [



// Oxidizing reagents

  {
    id: "oxidation",
    topic: "Oxidation Reagents",
    icon: "🔥",
    reagents: [
      {
        name: "KMnO₄ (Potassium Permanganate)",
        hint: "Strong oxidising agent",
        uses: [
          "Oxidises alkenes to acids",
          "Oxidises primary alcohols to acids",
          "Oxidises alkenes to diketones or acids (hot/conc.)",
          "Secondary alcohols to ketones"
        ],
        notes: "Hot, concentrated KMnO₄ cleaves double bonds. Cold, dilute KMnO₄ gives diols (Baeyer's reagent test — purple → colourless).",
        examples: [
          "CH₂=CH₂ + KMnO₄ (cold, dil.) → HOCH₂CH₂OH",
          "RCH=CH₂ + KMnO₄ (hot, conc.) → RCOOH + CO₂"
        ]
      },

      {
        name: "K₂Cr₂O₇ (Potassium Dichromate)",
        hint: "Acidic oxidising agent",
        uses: [
          "Oxidises primary alcohols to aldehydes or acids",
          "Oxidises secondary alcohols to ketones",
          "Does not oxidise tertiary alcohols"
        ],
        notes: "Used in acidic medium (H₂SO₄). Orange solution turns green (Cr³⁺) upon oxidation. Selective — tertiary alcohols are unaffected.",
        examples: [
          "RCH₂OH → RCHO (aldehyde) with controlled conditions",
          "R₂CHOH → R₂C=O (ketone)"
        ]
      },


      {
        name: "CrO₃ (Chromium Trioxide)",
        hint: "Jones Reagent",
        uses: [
          "Similar action to K₂Cr₂O₇",
          "Oxidises primary alcohols to aldehydes (via PCC — pyridinium chlorochromate)",
          "Oxidises secondary alcohols to ketones",
          "Epoxidation of alkenes"
        ],
        notes: "PCC (CrO₃·HCl·Pyridine) stops at aldehyde stage — it does not over-oxidise to carboxylic acid, which is its key advantage.",
        examples: [
          "RCH₂OH + PCC → RCHO (does not go further to RCOOH i.e. carboxylic acid)",
          "R₂CHOH + CrO₃/H₂SO₄ → R₂C=O"
        ]
      },

      {
        name: "PDC (Pyridinium Dichromate)",
        hint: "Mild Cr(VI) oxidant in CH₂Cl₂",
        uses: [
          "Oxidises primary alcohols to aldehydes",
          "Aldehyde formation without over-oxidation"
        ],
        notes: "Milder than Jones reagent. Works in non-aqueous medium. Does not oxidise aldehydes to carboxylic acids.",
        examples: [
          "RCH₂OH + PDC → RCHO"
        ]
      },
      
      {
        name: "Collins Reagent (CrO₃·2Py)",
        hint: "Selective primary→aldehyde",
        uses: [
          "Converts primary alcohols to aldehydes",
          "Milder than CrO₃ alone"
        ],
        notes: "CrO₃ complexed with pyridine. Selective oxidation without over-oxidation.",
        examples: [
          "RCH₂OH + Collins → RCHO"
        ]
      },
      {
        name: "Tollens Reagent (AgNO₃/KOH)",
        hint: "Silver mirror test",
        uses: [
          "Distinguishes aldehydes from ketones",
          "Oxidises aldehydes to carboxylate; Ag⁺ → Ag (silver mirror)"
        ],
        notes: "Only aldehydes give a positive silver mirror test. Ketones do NOT react. Tollen's is [Ag(NH₃)₂]⁺ in solution.",
        examples: [
          "RCHO + 2[Ag(NH₃)₂]⁺ → RCOO⁻ + 2Ag↓ (silver mirror)"
        ]
      },
      {
        name: "SeO₂ (Selenium Dioxide)",
        hint: "Allylic / Riley oxidation",
        uses: [
          "Allylic or benzylic oxidation of C–H bonds",
          "Converts alkenes to enols/aldehydes",
          "Riley oxidation of active methylene groups"
        ],
        notes: "SeO₂ selectively oxidises the position α to a carbonyl or allylic position.",
        examples: [
          "CH₃CHO → OHCCHO (glyoxal) via SeO₂"
        ]
      },
      {
        name: "H₂O₂ (Hydrogen Peroxide)",
        hint: "Mild oxidant / peroxidation",
        uses: [
          "Epoxidation of alkenes in presence of a base",
          "Baeyer-Villiger oxidation (with peracid form)",
          "Converts -CH=CH- to diol or epoxide"
        ],
        notes: "Often used with a metal catalyst (e.g. OsO₄/H₂O₂) for dihydroxylation.",
        examples: [
          "R₂C=CR₂ + H₂O₂/RCO₃H → epoxide"
        ]
      },
      {
        name: "Conc. HNO₃ (Nitric Acid)",
        hint: "Strong acid oxidant",
        uses: [
          "Oxidises aldehydes to carboxylic acids",
          "Used in electrophilic aromatic nitration with H₂SO₄"
        ],
        notes: "Concentrated HNO₃ is a powerful oxidising agent. In aromatic nitration, HNO₃ + H₂SO₄ generates NO₂⁺ (nitronium ion).",
        examples: [
          "RCHO + HNO₃ → RCOOH",
          "C₆H₆ + HNO₃/H₂SO₄ → C₆H₅NO₂ (nitrobenzene)"
        ]
      },
      {
        name: "m-CPBA (meta-Chloroperoxybenzoic acid)",
        hint: "Epoxidation & Baeyer-Villiger",
        uses: [
          "Epoxidation of alkenes (syn addition of oxygen)",
          "Baeyer-Villiger oxidation: ketones → esters or lactones"
        ],
        notes: "A peracid. In Baeyer-Villiger, the more substituted carbon migrates. Ketone → ester; cyclic ketone → lactone.",
        examples: [
          "Cyclohexanone + m-CPBA → ε-caprolactone (7-membered lactone)",
          "CH₂=CH₂ + m-CPBA → ethylene oxide (epoxide)"
        ]
      }
    ]
  },

  
  // Reducing reagents


  {
    id: "reduction",
    topic: "Reduction Reagents",
    icon: "⬇️",
    reagents: [
      {
        name: "LiAlH₄ (Lithium Aluminium Hydride)",
        hint: "Powerful reducing agent",
        uses: [
          "Reduces aldehydes to primary alcohols",
          "Reduces ketones to secondary alcohols",
          "Reduces carboxylic acids & esters to primary alcohols",
          "Reduces amides to amines",
          "Reduces nitro groups to amines",
          "Does NOT reduce isolated C=C double bonds"
        ],
        notes: "Used in dry ether. Highly reactive (reacts violently with water and alcohols). Cannot be used in protic solvents.",
        examples: [
          "RCHO → RCH₂OH",
          "RCOOH → RCH₂OH",
          "RNO₂ → RNH₂"
        ]
      },
      {
        name: "NaBH₄ (Sodium Borohydride)",
        hint: "Selective mild reducer",
        uses: [
          "Reduces aldehydes to primary alcohols",
          "Reduces ketones to secondary alcohols",
          "Does NOT reduce carboxylic acids, esters, amides, or nitro groups",
          "Does NOT reduce C=C double bonds"
        ],
        notes: "Mild and selective. Can be used in protic solvents (water, methanol). Much gentler than LiAlH₄.",
        examples: [
          "RCOR' + NaBH₄ → RCHOHR'",
          "RCHO + NaBH₄ → RCH₂OH"
        ]
      },
      {
        name: "H₂/Ni, Pd or Pt (Catalytic Hydrogenation)",
        hint: "Add H₂ across double bonds",
        uses: [
          "Reduces alkenes to alkanes (syn addition)",
          "Reduces alkynes to alkenes or alkanes",
          "Reduces aldehydes and ketones to alcohols",
          "Converts nitro groups to amines"
        ],
        notes: "Syn addition of hydrogen. Ni catalyst (Raney Ni) used at higher temperatures. Pd/C or PtO₂ for milder conditions.",
        examples: [
          "CH₂=CH₂ + H₂ / Ni → CH₃CH₃",
          "RNO₂ + 3H₂ → RNH₂ + 2H₂O"
        ]
      },
      {
        name: "Zn/Hg – HCl (Clemmensen Reduction)",
        hint: "C=O → CH₂ (acidic medium)",
        uses: [
          "Reduces carbonyl group (C=O) to methylene (CH₂) in ketones and aldehydes",
          "Works in acidic medium"
        ],
        notes: "Cannot be used with acid-sensitive compounds. Useful for reducing aryl ketones to methylene.",
        examples: [
          "R-CO-R' + Zn/Hg, HCl → R-CH₂-R'",
          "Acetophenone → Ethylbenzene"
        ]
      },
      {
        name: "NH₂-NH₂ / KOH (Wolff-Kishner Reduction)",
        hint: "C=O → CH₂ (basic medium)",
        uses: [
          "Reduces carbonyl group (C=O) to methylene (CH₂)",
          "Works in strongly basic medium (KOH/ethylene glycol, high temp)"
        ],
        notes: "Complementary to Clemmensen. Used for acid-sensitive substrates. Mechanism involves hydrazone intermediate.",
        examples: [
          "RCOR' + NH₂NH₂/KOH → RCH₂R' + N₂",
          "Cyclohexanone → Cyclohexane"
        ]
      },
      {
        name: "(Sn/Fe) / HCl ",
        hint: "Nitro → Amine reduction",
        uses: [
          "Reduces nitro (–NO₂) groups to primary amines (–NH₂)",
          "Classic industrial method for aniline synthesis"
        ],
        notes: "Classical method for reducing aromatic nitro compounds to amines in acidic conditions.",
        examples: [
          "C₆H₅NO₂ + Sn/HCl → C₆H₅NH₂ (aniline)"
        ]
      },
      {
        name: "Na / NH₃ (Birch Reduction)",
        hint: "Aromatic ring partial reduction",
        uses: [
          "Partial reduction of aromatic rings (1,4-diene product)",
          "Electron-donating groups — unsubstituted positions reduced",
          "Electron-withdrawing groups — substituted positions reduced"
        ],
        notes: "Uses Na or Li in liquid ammonia with an alcohol as proton source. The unconjugated diene is the product.",
        examples: [
          "Benzene + Na/NH₃/ROH → 1,4-cyclohexadiene",
          "Anisole + Na/NH₃ → 2,5-dihydroanisole"
        ]
      },
      {
        name: "DIBAL-H (Diisobutylaluminium Hydride)",
        hint: "Ester/nitrile → aldehyde",
        uses: [
          "Reduces esters to aldehydes at low temperature (−78°C)",
          "Reduces nitriles to aldehydes",
          "Reduces amides to aldehydes"
        ],
        notes: "At −78°C it stops at aldehyde stage; at room temperature gives alcohol. Key reagent for controlled partial reduction.",
        examples: [
          "RCOOR' + DIBAL-H (−78°C) → RCHO",
          "RCN + DIBAL-H → RCHO (after hydrolysis)"
        ]
      }
    ]
  },

//  Alkanes
  {
    id: "alkanes",
    topic: "Alkanes",
    icon: "🔗",
    reagents: [
      {
        name: "Cl₂ / hν (Free Radical Chlorination)",
        hint: "UV light — free radical substitution",
        uses: [
          "Free radical substitution of H by Cl",
          "Non-selective — produces mixture of mono and poly halogenated products"
        ],
        notes: "Initiation by UV light breaks Cl–Cl bond homolytically. Less selective than bromination. Follows free radical mechanism (NBS for allylic/benzylic).",
        examples: [
          "CH₄ + Cl₂ → CH₃Cl + HCl (UV light)",
          "CH₃Cl + Cl₂ → CH₂Cl₂ → CHCl₃ → CCl₄ (further halogenation)"
        ]
      },
      {
        name: "Br₂ / hν (Free Radical Bromination)",
        hint: "UV light — more selective than Cl",
        uses: [
          "Free radical substitution of H by Br",
          "More selective than chlorination — prefers 3° > 2° > 1° hydrogen"
        ],
        notes: "Bromine radical is less reactive but more selective. Tertiary C–H bonds are preferentially brominated.",
        examples: [
          "C₂H₆ + Br₂ → C₂H₅Br + HBr (UV light)"
        ]
      },
      {
        name: "Conc. HNO₃ / Heat",
        hint: "Nitration of alkanes",
        uses: [
          "Nitration of alkanes at high temperature to give nitroalkanes"
        ],
        notes: "High temperature vapour-phase reaction. Produces a mixture of products due to C–C bond cleavage.",
        examples: [
          "CH₃CH₃ + HNO₃ (conc, heat) → CH₃NO₂ + CH₃CH₂NO₂"
        ]
      },
      {
        name: "Al₂O₃ / Catalyst (Cracking)",
        hint: "Breaks long chain alkanes",
        uses: [
          "Thermal or catalytic cracking of long chain alkanes into smaller alkenes and alkanes",
          "Used in petroleum refining"
        ],
        notes: "Catalytic cracking uses Al₂O₃/SiO₂ at ~500°C. Thermal cracking needs higher temperatures (~700°C). Produces alkenes and alkanes.",
        examples: [
          "C₁₀H₂₂ → C₅H₁₀ + C₅H₁₂ (cracking)"
        ]
      }
    ]
  },

  
//   Alkenes and Alkynes

  {
    id: "alkenes-alkynes",
    topic: "Alkenes & Alkynes",
    icon: "⚡",
    reagents: [
      {
        name: "Br₂ / CCl₄",
        hint: "Electrophilic addition, test for unsaturation",
        uses: [
          "Electrophilic addition to alkenes and alkynes",
          "Test for unsaturation — orange Br₂ decolourises",
          "Anti addition (trans dibromide product)"
        ],
        notes: "Bromine water (Br₂/H₂O) also works. The decolourisation of bromine water is the test for C=C or C≡C. Anti addition gives trans product.",
        examples: [
          "CH₂=CH₂ + Br₂/CCl₄ → CH₂Br–CH₂Br (1,2-dibromoethane)",
          "HC≡CH + 2Br₂ → CHBr₂–CHBr₂"
        ]
      },
      {
        name: "HBr / HCl (dry)",
        hint: "Markovnikov addition",
        uses: [
          "Electrophilic addition of HX to alkenes (Markovnikov's rule)",
          "H adds to carbon with more H atoms; X goes to more substituted carbon"
        ],
        notes: "Markovnikov's rule: H attaches to C with more H. Anti-Markovnikov: use peroxides (free radical mechanism) → H goes to more substituted C.",
        examples: [
          "CH₃–CH=CH₂ + HBr → CH₃–CHBr–CH₃ (Markovnikov)",
          "CH₃–CH=CH₂ + HBr/ROOR → CH₃–CH₂–CH₂Br (anti-Markovnikov)"
        ]
      },
      {
        name: "HBr (with peroxide)",
        hint: "Anti-Markovnikov / free radical",
        uses: [
          "Anti-Markovnikov addition of HBr to alkenes (free radical mechanism)",
          "Br adds to less substituted carbon"
        ],
        notes: "Only works with HBr (not HCl or HI). Peroxides generate Br• radical which adds to less hindered carbon.",
        examples: [
          "CH₂=CH₂ + HBr/ROOR → CH₃CH₂Br",
          "CH₃CH=CH₂ + HBr/ROOR → CH₃CH₂CH₂Br"
        ]
      },
      {
        name: "Hg(OAc)₂ / H₂O followed by NaBH₄",
        hint: "Oxymercuration-demercuration",
        uses: [
          "Hydration of alkenes (Markovnikov) without rearrangement",
          "Produces Markovnikov alcohol"
        ],
        notes: "Step 1: Hg(OAc)₂/H₂O — adds OH and HgOAc. Step 2: NaBH₄ removes Hg. No carbocation rearrangement occurs.",
        examples: [
          "CH₃CH=CH₂ → CH₃CH(OH)CH₃ (Markovnikov alcohol, no rearrangement)"
        ]
      },
      {
        name: "H₂SO₄ / HgSO₄ / H₂O",
        hint: "Hydration of alkynes (Markovnikov)",
        uses: [
          "Addition of water to alkynes to form ketones (Markovnikov)",
          "Terminal alkynes → methyl ketones",
          "Acetylene → acetaldehyde"
        ],
        notes: "Hg²⁺ acts as catalyst. Terminal alkynes give methyl ketones (Markovnikov). Acetylene (HC≡CH) gives acetaldehyde (CH₃CHO).",
        examples: [
          "RC≡CH + H₂O/H₂SO₄/HgSO₄ → RCOCH₃",
          "HC≡CH + H₂O → CH₃CHO (via vinyl alcohol)"
        ]
      },
      {
        name: "B₂H₆ / H₂O₂ (Hydroboration-Oxidation)",
        hint: "Anti-Markovnikov hydration",
        uses: [
          "Anti-Markovnikov addition of water to alkenes/alkynes",
          "Syn addition of BH₃; then oxidation with H₂O₂",
          "Alkynes → aldehydes (terminal) via enol"
        ],
        notes: "BH₃ adds to less substituted carbon (anti-Markovnikov). Syn addition. No rearrangement. Terminal alkyne → aldehyde.",
        examples: [
          "CH₃CH=CH₂ + B₂H₆ then H₂O₂ → CH₃CH₂CH₂OH",
          "RC≡CH + B₂H₆/H₂O₂ → RCHO (anti-Markovnikov aldehyde)"
        ]
      },
      {
        name: "[Six]LiBH / H₂O₂ / H₂O",
        hint: "Siamylborane — alkyne to aldehyde",
        uses: [
          "Anti-Markovnikov hydration of internal alkynes to give ketones",
          "Terminal alkynes → aldehydes"
        ],
        notes: "Bulky boranes add to less hindered position; oxidation gives aldehyde from terminal alkynes.",
        examples: [
          "Terminal alkyne + Sia₂BH → aldehyde (anti-Markovnikov product)"
        ]
      },
      {
        name: "CH₂ / Zn–Cu (Simmons-Smith Reaction)",
        hint: "Cyclopropanation of alkenes",
        uses: [
          "Converts alkenes to cyclopropanes",
          "Syn addition (stereospecific)"
        ],
        notes: "Zinc carbenoid (ICH₂ZnI) adds CH₂ across the double bond in a syn addition. No rearrangements.",
        examples: [
          "CH₂=CH₂ + CH₂I₂/Zn-Cu → cyclopropane",
          "Cis-alkene → cis-cyclopropane (stereospecific)"
        ]
      },
      {
        name: "NaNH₂",
        hint: "Strong base for alkynes",
        uses: [
          "Deprotonates terminal alkynes (pKa ~25)",
          "Forms acetylide ions for nucleophilic alkylation",
          "Used in elimination reactions to form alkynes"
        ],
        notes: "NaNH₂ (sodamide) is a very strong base. It deprotonates terminal alkynes to form RC≡C⁻ (acetylide), which is a good nucleophile.",
        examples: [
          "RC≡CH + NaNH₂ → RC≡C⁻Na⁺ + NH₃",
          "RC≡C⁻ + R'CH₂Br → RC≡C–CH₂R' (alkylation)"
        ]
      }
    ]
  },

//  Alkyl and Aryl Halides

  {
    id: "halides",
    topic: "Alkyl & Aryl Halides",
    icon: "🧪",
    reagents: [
      {
        name: "Aqueous KOH / NaOH",
        hint: "SN1/SN2 — gives alcohol",
        uses: [
          "Nucleophilic substitution (SN1 or SN2)",
          "Converts alkyl halides to alcohols"
        ],
        notes: "With primary halides: SN2 mechanism. With tertiary halides: SN1. Aqueous conditions favour substitution.",
        examples: [
          "CH₃CH₂Br + KOH(aq) → CH₃CH₂OH + KBr"
        ]
      },
      {
        name: "Alcoholic KOH / NaOH",
        hint: "E2 elimination — gives alkene",
        uses: [
          "Elimination reaction — produces alkene (Saytzeff's rule)",
          "Converts alkyl halides to alkenes"
        ],
        notes: "Alcoholic KOH causes elimination (E2), giving the more substituted alkene (Saytzeff product). Contrast with aqueous KOH (substitution).",
        examples: [
          "CH₃CH₂CH₂Br + KOH(alc) → CH₃CH=CH₂ + KBr + H₂O"
        ]
      },
      {
        name: "Na in Acetone",
        hint: "Williamson Ether Synthesis",
        uses: [
          "Converts alkyl halides to iodides (NaI in acetone —> Finkelstein reaction)",
          "Formation of carbocation (SN1)"
        ],
        notes: "NaI in acetone: Finkelstein reaction — replaces Cl or Br with I (since NaCl/NaBr precipitate from acetone). Thermodynamically driven.",
        examples: [
          "RCl + NaI (acetone) → RI + NaCl↓ (Finkelstein)"
        ]
      },
      {
        name: "AgNO₃ in Alcohol",
        hint: "Nucleophilic substitution + AgX ppt",
        uses: [
          "Nucleophilic substitution with NO₃⁻",
          "Identifies alkyl halides — precipitate of AgX forms"
        ],
        notes: "Rate: tertiary > secondary > primary (SN1). AgCl (white), AgBr (pale yellow), AgI (yellow) precipitates help identify halide.",
        examples: [
          "RBr + AgNO₃(alc) → RONO₂ + AgBr↓ (pale yellow ppt)"
        ]
      },
      {
        name: "NH₃ (excess)",
        hint: "Converts halide to primary amine",
        uses: [
          "Nucleophilic substitution with NH₃",
          "Converts alkyl halides to primary amines (with excess NH₃)"
        ],
        notes: "Excess NH₃ reduces over-alkylation. The reaction can give 1°, 2°, 3° amines and quaternary ammonium salts — difficult to control.",
        examples: [
          "CH₃Br + NH₃(xs) → CH₃NH₂ (methylamine) + HBr"
        ]
      },
      {
        name: "Na / Dry Ether",
        hint: "Wurtz Reaction",
        uses: [
          "Wurtz Reaction — couples two alkyl halides to form a higher alkane",
          "Used to make symmetrical alkanes"
        ],
        notes: "Only works with primary alkyl halides. Does not work well for mixed Wurtz (gives mixture). Na acts as electron donor.",
        examples: [
          "2 CH₃Br + 2Na → CH₃–CH₃ + 2NaBr",
          "2 C₂H₅Br + 2Na → C₄H₁₀ (butane)"
        ]
      },
      {
        name: "Alkyl halide + ArylHalide / Na",
        hint: "Wurtz-Fittig Reaction",
        uses: [
          "Couples aryl halide with alkyl halide using Na",
          "Forms alkylarenes (benzene ring with alkyl group)"
        ],
        notes: "Extension of Wurtz reaction. Na couples ArX with R–X to give Ar–R.",
        examples: [
          "C₆H₅Br + CH₃Br + 2Na → C₆H₅CH₃ (toluene) + 2NaBr"
        ]
      },
      {
        name: "Aryl halide + NaOH (700°C)",
        hint: "Nucleophilic aromatic substitution (high temp)",
        uses: [
          "Nucleophilic aromatic substitution at very high temperature and pressure",
          "Converts chlorobenzene to phenol (Dow process)"
        ],
        notes: "Requires harsh conditions (300°C, 300 atm). Benzyne intermediate mechanism or direct SN2 on aromatic ring with EWG present.",
        examples: [
          "C₆H₅Cl + NaOH(aq) → C₆H₅OH + NaCl (700°C, 300 atm)"
        ]
      },
      {
        name: "CuCN",
        hint: "Converts halide to nitrile (SN2)",
        uses: [
          "Nucleophilic substitution with CN⁻",
          "Converts alkyl halides to nitriles (increasing carbon chain by 1)"
        ],
        notes: "Chain lengthening reaction. CN⁻ is both a nucleophile and a base. Product (nitrile) can be hydrolysed to carboxylic acid.",
        examples: [
          "CH₃Br + KCN → CH₃CN (acetonitrile) + KBr"
        ]
      },
      {
        name: "KCN",
        hint: "Alkyl halide to nitrile",
        uses: [
          "Converts alkyl halides to nitriles by SN2",
          "Nitrile hydrolysis → carboxylic acid"
        ],
        notes: "KCN reacts through carbon (gives nitrile), while AgCN reacts through silver to give isocyanide. SN2 — primary halides work best.",
        examples: [
          "RX + KCN → RCN + KX",
          "RCN + H₂O/H⁺ → RCOOH (hydrolysis)"
        ]
      },
      {
        name: "AgCN",
        hint: "Alkyl halide to isocyanide",
        uses: [
          "Converts alkyl halides to isocyanides (R–NC)",
          "Ambident nucleophile — reacts through N (silver end)"
        ],
        notes: "AgCN gives isocyanide (R–NC) while KCN gives nitrile (R–CN). Isocyanides have very unpleasant odour.",
        examples: [
          "RX + AgCN → R–NC (isocyanide) + AgX"
        ]
      },
      {
        name: "NaNO₂ / HCl (cold)",
        hint: "Diazotisation",
        uses: [
          "Converts primary aromatic amines to diazonium salts at 0–5°C",
          "Starting point for azo dye synthesis and many aromatic substitutions"
        ],
        notes: "Must be done at 0–5°C — diazonium salts are unstable at higher temperatures and decompose to phenol. Important in Sandmeyer reaction.",
        examples: [
          "C₆H₅NH₂ + NaNO₂ + HCl (0–5°C) → C₆H₅N₂⁺Cl⁻ (benzenediazonium chloride)"
        ]
      },
      {
        name: "Sandmeyer Reactions (CuCl, CuBr, CuCN)",
        hint: "Diazonium ion → aryl halide/nitrile",
        uses: [
          "Converts diazonium salts to aryl chlorides (CuCl), bromides (CuBr), or nitriles (CuCN)",
          "Key transformation in aromatic synthesis"
        ],
        notes: "Replace N₂ group with Cl, Br, CN, or F (Balz-Schiemann for F). Cu(I) catalyst is necessary. Direct nucleophilic substitution on diazonium.",
        examples: [
          "C₆H₅N₂⁺ + CuCl → C₆H₅Cl + N₂",
          "C₆H₅N₂⁺ + CuCN → C₆H₅CN + N₂"
        ]
      }
    ]
  },

  // Alcohols, Phenols & Ethers

  {
    id: "alcohols",
    topic: "Alcohols, Phenols & Ethers",
    icon: "💧",
    reagents: [
      {
        name: "Conc. H₂SO₄ (170°C)",
        hint: "Dehydration to alkene",
        uses: [
          "Dehydration of alcohols to alkenes at 170°C",
          "Saytzeff product (more substituted alkene major product)"
        ],
        notes: "At 170°C: elimination to alkene. At 140°C: intermolecular dehydration to ether. Mechanism is E1 via carbocation.",
        examples: [
          "CH₃CH₂OH + H₂SO₄ (170°C) → CH₂=CH₂ + H₂O",
          "2 CH₃CH₂OH + H₂SO₄ (140°C) → CH₃CH₂OCH₂CH₃ + H₂O (Williamson)"
        ]
      },
      {
        name: "Conc. HCl / ZnCl₂",
        hint: "Lucas Reagent — tests alcohols",
        uses: [
          "Distinguishes 1°, 2°, 3° alcohols by reaction rate with HCl",
          "Converts alcohols to alkyl chlorides"
        ],
        notes: "Lucas test: 3° alcohol → immediate ppt; 2° alcohol → ppt in 5 min; 1° alcohol→ no reaction at room temperature.",
        examples: [
          "Tertiary ROH + HCl/ZnCl₂ → RCl (immediate turbidity)",
          "Secondary ROH → cloudiness after ~5 min",
          "Primary ROH → no reaction (room temp)"
        ]
      },
      {
        name: "PCl₅ / PCl₃ / PBr₃",
        hint: "Converts –OH to halide",
        uses: [
          "Converts alcohols to alkyl chlorides (PCl₅ or PCl₃)",
          "Converts alcohols to alkyl bromides (PBr₃)",
          "Better than HX for primary alcohols (less rearrangement)"
        ],
        notes: "PCl₅ gives alkyl chloride + POCl₃ + HCl. PBr₃ gives alkyl bromide + H₃PO₃. Proceeds with inversion of configuration (SN2).",
        examples: [
          "ROH + PCl₅ → RCl + POCl₃ + HCl",
          "ROH + PBr₃ → RBr + H₃PO₃"
        ]
      },
      {
        name: "NaOH",
        hint: "Phenol → sodium phenoxide",
        uses: [
          "Forms phenoxide ion from phenol (phenol is acidic enough to react with NaOH)",
          "Alcohols do NOT react with NaOH (too weakly acidic)"
        ],
        notes: "Distinguishes phenol from alcohol — phenol reacts with NaOH but alcohol does not. Phenoxide is used in Williamson ether synthesis.",
        examples: [
          "C₆H₅OH + NaOH → C₆H₅O⁻Na⁺ + H₂O",
          "Alcohol + NaOH → No reaction"
        ]
      },
      {
        name: "Br₂ / H₂O",
        hint: "Bromination of phenol (ortho/para)",
        uses: [
          "Electrophilic aromatic substitution — bromination of phenol at ortho and para positions",
          "White precipitate of 2,4,6-tribromophenol formed immediately"
        ],
        notes: "Phenol is highly activated — bromine water instantly gives white precipitate of 2,4,6-tribromophenol without a catalyst. This is a test for phenol.",
        examples: [
          "C₆H₅OH + 3Br₂(aq) → C₆H₂Br₃OH↓ (white ppt) + 3HBr"
        ]
      },
      {
        name: "Cl₂ / NaOH",
        hint: "Reimer-Tiemann Reaction",
        uses: [
          "Reimer-Tiemann reaction — introduces a –CHO group ortho to –OH in phenol",
          "Phenol + CHCl₃ + NaOH → salicylaldehyde (2-hydroxybenzaldehyde)"
        ],
        notes: "Mechanism involves dichlorocarbene (:CCl₂) as electrophile. Gives ortho product predominantly.",
        examples: [
          "C₆H₅OH + CHCl₃ + NaOH → 2-HOC₆H₄CHO (salicylaldehyde)"
        ]
      },
      {
        name: "Conc. HNO₃ / H₂SO₄",
        hint: "Nitration of aromatic ring",
        uses: [
          "Nitration of benzene ring with NO₂⁺ (nitronium ion)",
          "Phenol: nitration at ortho and para positions"
        ],
        notes: "The mixture of conc. HNO₃ + conc. H₂SO₄ generates NO₂⁺ which is the electrophile for EAS.",
        examples: [
          "C₆H₆ + HNO₃/H₂SO₄ → C₆H₅NO₂ + H₂O"
        ]
      },
      {
        name: "R–X + RO⁻ (Alkoxide) → Williamson Ether Synthesis",
        hint: "SN2 — makes unsymmetrical ethers",
        uses: [
          "Synthesis of ethers by SN2 reaction of alkoxide with alkyl halide",
          "Best for primary alkyl halides"
        ],
        notes: "R–O⁻ is the nucleophile (alkoxide). Works best with primary alkyl halides (SN2). Secondary or tertiary halides undergo elimination instead.",
        examples: [
          "CH₃O⁻ + CH₃CH₂Br → CH₃–O–CH₂CH₃ + Br⁻",
          "C₆H₅O⁻Na⁺ + CH₃I → C₆H₅OCH₃ (anisole)"
        ]
      }
    ]
  },

//  Aldehydes and Ketones

  {
    id: "aldehydes-ketones",
    topic: "Aldehydes & Ketones",
    icon: "🟡",
    reagents: [
      {
        name: "2,4-DNP (2,4-Dinitrophenylhydrazine)",
        hint: "Test for carbonyl compounds",
        uses: [
          "Test for carbonyl compounds (aldehydes AND ketones)",
          "Forms orange/yellow 2,4-DNP precipitate with C=O group"
        ],
        notes: "Forms an orange or yellow crystalline precipitate with aldehydes and ketones. Used to characterise the specific carbonyl compound by melting point of derivative.",
        examples: [
          "RCHO + 2,4-DNP → orange/yellow precipitate",
          "RCOR' + 2,4-DNP → orange/yellow precipitate"
        ]
      },
      {
        name: "NaHSO₃ (Sodium Bisulphite)",
        hint: "Distinguishes aldehydes from ketones",
        uses: [
          "Forms bisulphite addition compound with aldehydes and methyl ketones",
          "Does NOT react with sterically hindered ketones"
        ],
        notes: "Useful for separating aldehydes or methyl ketones from mixtures. Product is a crystalline solid, soluble in water.",
        examples: [
          "RCHO + NaHSO₃ → RCH(OH)SO₃Na (adduct)",
          "Bulky ketone → no reaction"
        ]
      },
      {
        name: "NH₂OH (Hydroxylamine)",
        hint: "Aldehyde/ketone → oxime",
        uses: [
          "Forms oximes from aldehydes and ketones",
          "Reacts with both aldehydes and ketones"
        ],
        notes: "Condensation reaction — loss of water. Oximes can be used to identify aldehydes and ketones. Beckmann rearrangement converts oximes to amides.",
        examples: [
          "RCHO + NH₂OH → RCH=NOH + H₂O (aldoxime)",
          "RCOR' + NH₂OH → RC(=NOH)R' + H₂O (ketoxime)"
        ]
      },
      {
        name: "NH₂-NH₂ (Hydrazine)",
        hint: "Aldehyde/ketone → hydrazone",
        uses: [
          "Forms hydrazones with aldehydes and ketones",
          "Precursor for Wolff-Kishner reduction"
        ],
        notes: "Hydrazone intermediate in Wolff-Kishner. Phenylhydrazine (C₆H₅NHNH₂) gives phenylhydrazones — used to identify carbonyls.",
        examples: [
          "RCHO + H₂N–NH₂ → RCH=N–NH₂ + H₂O (hydrazone)"
        ]
      },
      {
        name: "CH₃NH₂ (Primary Amine)",
        hint: "Carbonyl → imine (Schiff base)",
        uses: [
          "Forms imines (Schiff bases) with aldehydes and ketones",
          "Condensation reaction (dehydration)"
        ],
        notes: "Primary amines react with carbonyls to give imines (C=N). Mechanism: nucleophilic addition followed by dehydration. Imines are reduced to amines by NaBH₄ (reductive amination).",
        examples: [
          "RCHO + RNH₂ → RCH=NR' + H₂O (imine/Schiff base)"
        ]
      },
      {
        name: "NaOH + Heat (Aldol Condensation)",
        hint: "Aldehyde/ketone self-condensation",
        uses: [
          "Aldol condensation — forms β-hydroxy aldehyde (aldol) or α,β-unsaturated carbonyl",
          "Self condensation of aldehydes and ketones"
        ],
        notes: "Aldol addition: NaOH (cold) → β-hydroxy carbonyl. Aldol condensation: NaOH (heat) → α,β-unsaturated carbonyl (dehydration). Crossed aldol uses two different compounds.",
        examples: [
          "2 CH₃CHO + NaOH → CH₃CH(OH)CH₂CHO (aldol)",
          "Heat → CH₃CH=CHCHO (crotonaldehyde) + H₂O"
        ]
      },
      {
        name: "Aldehyde + Ketone + Base (Bl…)",
        hint: "Claisen-Schmidt Condensation",
        uses: [
          "Claisen-Schmidt condensation — aromatic aldehyde reacts with ketone under base",
          "Produces α,β-unsaturated ketone (chalcone)"
        ],
        notes: "Used in industry for chalcone synthesis. Aromatic aldehyde (no α-H) reacts with aliphatic ketone in presence of NaOH.",
        examples: [
          "C₆H₅CHO + CH₃COCH₃ + NaOH → C₆H₅CH=CHCOCH₃ (chalcone)"
        ]
      },
      {
        name: "NaOEt (Ethoxide)",
        hint: "Claisen Condensation",
        uses: [
          "Claisen condensation of esters with α-H to give β-ketoesters",
          "Used in synthesis of acetoacetic ester"
        ],
        notes: "Base (NaOEt) removes α-H; enolate attacks ester carbonyl; alkoxide leaves. Gives β-ketoester.",
        examples: [
          "2 CH₃COOC₂H₅ + NaOEt → CH₃COCH₂COOC₂H₅ (ethyl acetoacetate)"
        ]
      },
      {
        name: "PhNHNH₂ (Phenylhydrazine)",
        hint: "Forms osazone from sugars",
        uses: [
          "Forms phenylhydrazone with aldehydes and ketones",
          "Forms osazone with sugars (3 moles react) — used to identify sugars"
        ],
        notes: "Osazone formation: 3 moles of PhNHNH₂ react with reducing sugars. Different sugars give characteristic osazone crystals with different melting points.",
        examples: [
          "RCHO + C₆H₅NHNH₂ → RCH=N–NHPh (phenylhydrazone)",
          "Glucose + 3 PhNHNH₂ → glucose osazone (yellow crystals)"
        ]
      }
    ]
  },

//  Carboxylic Acids and Derivatives

  {
    id: "carboxylic",
    topic: "Carboxylic Acid Derivatives",
    icon: "🧬",
    reagents: [
      {
        name: "SOCl₂ (Thionyl Chloride)",
        hint: "Best reagent for acid → acid chloride",
        uses: [
          "Converts carboxylic acids to acid chlorides (acyl chlorides)",
          "Converts alcohols to alkyl chlorides",
          "By-products (SO₂, HCl) are gases — easy to remove"
        ],
        notes: "Preferred over PCl₅ for making acid chlorides because by-products (SO₂ and HCl) escape as gases, giving pure product.",
        examples: [
          "RCOOH + SOCl₂ → RCOCl + SO₂↑ + HCl↑",
          "ROH + SOCl₂ → RCl + SO₂ + HCl"
        ]
      },
      {
        name: "PCl₅ / PCl₃",
        hint: "Acid/alcohol → acid chloride",
        uses: [
          "Converts carboxylic acids to acid chlorides",
          "Converts –OH to –Cl in alcohols"
        ],
        notes: "PCl₅ gives POCl₃ and HCl as by-products which contaminate the product. Less preferred than SOCl₂ for acid chloride synthesis.",
        examples: [
          "RCOOH + PCl₅ → RCOCl + POCl₃ + HCl",
          "RCOOH + PCl₃ → 3 RCOCl + H₃PO₃"
        ]
      },
      {
        name: "HNu (Ammonia, ROH, RNH₂)",
        hint: "Nucleophilic acyl substitution",
        uses: [
          "Acid chlorides react rapidly with nucleophiles",
          "Acid chloride + NH₃ → amide",
          "Acid chloride + ROH → ester",
          "Acid chloride + RNH₂ → N-substituted amide"
        ],
        notes: "Acid chlorides are the most reactive carboxylic acid derivatives. Order of reactivity: acid chloride > anhydride > ester > amide.",
        examples: [
          "RCOCl + NH₃ → RCONH₂ + HCl",
          "RCOCl + ROH → RCOOR' + HCl"
        ]
      },
      {
        name: "NaOH / Heat (saponification)",
        hint: "Ester hydrolysis (basic)",
        uses: [
          "Alkaline hydrolysis of esters to carboxylate and alcohol",
          "Saponification of fats and oils to make soaps"
        ],
        notes: "Irreversible hydrolysis of ester. Gives sodium carboxylate salt (not the acid). Saponification of triglycerides gives glycerol + soap (sodium fatty acid salt).",
        examples: [
          "RCOOR' + NaOH → RCOONa + R'OH",
          "Triglyceride + 3NaOH → Glycerol + 3 RCOONa (soap)"
        ]
      },
      {
        name: "NaOR / Heat (transesterification)",
        hint: "Exchange of ester groups",
        uses: [
          "Transesterification — replaces alkoxy group in ester with another",
          "Used in biodiesel production"
        ],
        notes: "Acid or base catalysed. Biodiesel: triglyceride + methanol → fatty acid methyl ester (FAME) + glycerol.",
        examples: [
          "RCOOR' + R''OH (catalytic amount) → RCOOR'' + R'OH"
        ]
      },
      {
        name: "SO₃ / H₂SO₄ (Sulfonation)",
        hint: "Introduces –SO₃H group",
        uses: [
          "Sulfonation of aromatic ring — introduces sulfonic acid group",
          "EAS(Electrophilic Aromatic Substitution) reaction with SO₃ or fuming H₂SO₄"
        ],
        notes: "Reversible reaction — desulfonation can be done by steam. Used to block positions in synthesis.",
        examples: [
          "C₆H₆ + H₂SO₄/SO₃ → C₆H₅SO₃H (benzenesulfonic acid)"
        ]
      },
      {
        name: "CO₂ / H₂O",
        hint: "Carbonic acid equilibrium",
        uses: [
          "CO₂ dissolves in water to form carbonic acid (H₂CO₃)",
          "Used in explaining acidity "
        ],
        notes: "H₂CO₃ is a weak diprotic acid. Carboxylate ions revert to carboxylic acid upon addition of CO₂ + H₂O if pKa is appropriate.",
        examples: [
          "CO₂ + H₂O ⇌ H₂CO₃",
          "RCOONa + CO₂ + H₂O → RCOOH + NaHCO₃"
        ]
      }
    ]
  },

// Amines(Nitrogen containing compounds)

  {
    id: "amines",
    topic: "Amines & Nitrogen Compounds",
    icon: "🔵",
    reagents: [
      {
        name: "R–X + Excess NH₃ (Hofmann's Method)",
        hint: "Preparation of primary amines",
        uses: [
          "Nucleophilic substitution — alkyl halide with excess NH₃ gives primary amine",
          "Excess NH₃ reduces over-alkylation"
        ],
        notes: "Can give mixture of 1°, 2°, 3° amines and quaternary ammonium salt. Excess NH₃ shifts toward primary amine.",
        examples: [
          "CH₃Cl + NH₃(xs) → CH₃NH₂ (methylamine) predominantly"
        ]
      },
      {
        name: "Alkyl halide + NaN₃ / Heat → R–N₃ → Amine",
        hint: "Via azide reduction",
        uses: [
          "Primary amine via azide intermediate — avoids over-alkylation",
          "Clean synthesis of primary amines"
        ],
        notes: "Two steps: RX + NaN₃ → R–N₃ (alkyl azide); then R–N₃ + LiAlH₄ or H₂/Pd → R–NH₂. No over-alkylation.",
        examples: [
          "CH₃Br + NaN₃ → CH₃N₃; then CH₃N₃ + LiAlH₄ → CH₃NH₂"
        ]
      },
      {
        name: "Gabriel Phthalimide Reagent",
        hint: "Primary amine only — no over alkylation",
        uses: [
          "Synthesis of pure primary amines only",
          "Avoids polyalkylation completely"
        ],
        notes: "Phthalimide (NH) + KOH → potassium phthalimide; alkylation with R–X; then hydrazine hydrolysis gives always primary amine. ",
        examples: [
          "Phthalimide + KOH + RX → N-alkylphthalimide + H₂NNH₂ → RNH₂"
        ]
      },
      {
        name: "Hofmann Bromamide Reaction (Br₂ + KOH)",
        hint: "Amide → primary amine (chain shortened by 1C)",
        uses: [
          "Converts amides (RCONH₂) to primary amines (RNH₂)",
          "Carbon chain decreases by one: RCONH₂ → RNH₂"
        ],
        notes: "Mechanism involves nitrene intermediate or isocyanate. The product amine has one fewer carbon atom than the starting amide. Key reactions: RCONH₂ + Br₂ + 4KOH → RNH₂ + K₂CO₃ + 2KBr + 2H₂O.",
        examples: [
          "CH₃CH₂CONH₂ + Br₂/KOH → CH₃CH₂NH₂ (ethylamine)"
        ]
      },
      {
        name: "NaNO₂ + HCl (cold)",
        hint: "Diazotisation of aromatic amine",
        uses: [
          "Primary aromatic amines → diazonium salts (0–5°C)",
          "Key intermediate for Sandmeyer and azo-coupling reactions"
        ],
        notes: "Must be kept cold (0–5°C) — diazonium salt decomposes above this temperature. Aliphatic primary amines give unstable diazonium ions.",
        examples: [
          "C₆H₅NH₂ + NaNO₂ + HCl (0°C) → C₆H₅N₂⁺Cl⁻"
        ]
      },
      {
        name: "Sandmeyer Reagents (CuCl, CuBr, CuCN)",
        hint: "Diazonium salt to aryl halide",
        uses: [
          "Diazonium salt + CuCl → aryl chloride",
          "Diazonium salt + CuBr → aryl bromide",
          "Diazonium salt + CuCN → aryl nitrile"
        ],
        notes: "Cu(I) is the catalyst. N₂ is lost. Used for introducing Cl, Br, CN into aromatic ring at a position previously occupied by NH₂.",
        examples: [
          "C₆H₅N₂⁺ + CuCl → C₆H₅Cl + N₂",
          "C₆H₅N₂⁺ + CuCN → C₆H₅CN + N₂"
        ]
      },
      {
        name: "NaOH + HCl (cold) + β-naphthol",
        hint: "Azo coupling — forms bright azo dye",
        uses: [
          "Azo coupling reaction — diazonium ion reacts with activated aromatic compound",
          "Forms brightly coloured azo dyes"
        ],
        notes: "Electrophilic aromatic substitution. Diazonium ion (weak electrophile) reacts with highly activated arenes (phenol, aniline). β-naphthol gives brilliant scarlet dye.",
        examples: [
          "C₆H₅N₂⁺ + β-naphthol → orange/red azo dye",
          "Diazonium + aniline → yellow azo dye"
        ]
      },
      {
        name: "CH₃–I (Methyl Iodide) — Hofmann Exhaustive Methylation",
        hint: "Hofmann Elimination (quaternary → alkene)",
        uses: [
          "Excess methylation of amines → quaternary ammonium salt",
          "Hofmann elimination: quaternary salt + Ag₂O/H₂O/heat → least substituted alkene"
        ],
        notes: "Hofmann elimination gives the LESS substituted alkene (anti-Saytzeff). Used to determine structure of unknown amines.",
        examples: [
          "R₃N + 3CH₃I → R₃N⁺(CH₃)I⁻ (quaternary salt)",
          "Quaternary salt + AgOH/heat → alkene (less substituted)"
        ]
      },
      {
        name: "CHCl₃ / KOH (Carbylamine Test)",
        hint: "Test for primary amines",
        uses: [
          "Carbylamine test — primary amines + CHCl₃ + KOH → isocyanide (foul smell)",
          "Specific test for primary amines only"
        ],
        notes: "2° and 3° amines do NOT give this test. The isocyanide (carbylamine) has a very unpleasant smell. Confirms primary amine.",
        examples: [
          "RNH₂ + CHCl₃ + 3KOH → R–NC (isocyanide) + 3KCl + 3H₂O"
        ]
      },
      {
        name: "Aryl chloride (RCOCl)",
        hint: "Acylation of amines",
        uses: [
          "Acylation of amines with acid chlorides → amides",
          "Forms amide bonds — used in peptide/polymer synthesis"
        ],
        notes: "Useful for protection of amine group. Acylation reduces nucleophilicity and basicity of amine. Product is an amide.",
        examples: [
          "RNH₂ + R'COCl → RNHCOR' + HCl (amide formation)"
        ]
      }
    ]
  }

];

