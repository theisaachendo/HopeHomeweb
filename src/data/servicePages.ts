export type ServiceCategory =
  | 'additional'
  | 'commercial'
  | 'home'
  | 'mobile'
  | 'newConstruction'

export type ServiceCallout = {
  title?: string
  body: string
  secondaryButton?: { label: string; to: string }
}

export type ServicePageContent = {
  slug: string
  category: ServiceCategory
  title: string
  metaDescription: string
  heroEyebrow?: string
  intro: string[]
  /** Extra sections between intro and “why” — e.g. who it’s for, what’s included */
  supportingSections?: { title: string; paragraphs: string[] }[]
  whyHeading?: string
  whyBody?: string[]
  howHeading: string
  steps: { title: string; body: string }[]
  /** Short bullets for quick scanning */
  takeaways?: string[]
  callout?: ServiceCallout
  closing?: string
}

const categories: Record<ServiceCategory, { navLabel: string; groupTitle: string }> = {
  additional: { navLabel: 'Additional services', groupTitle: 'Additional services' },
  commercial: { navLabel: 'Commercial', groupTitle: 'Commercial' },
  home: { navLabel: 'Home inspection', groupTitle: 'Home inspection' },
  mobile: { navLabel: 'Mobile & manufactured', groupTitle: 'Mobile & manufactured homes' },
  newConstruction: { navLabel: 'New construction', groupTitle: 'New construction' },
}

export function getCategoryMeta(id: ServiceCategory) {
  return categories[id]
}

export const servicePages: ServicePageContent[] = [
  {
    slug: 'home-inspection',
    category: 'home',
    title: 'Home inspection',
    metaDescription:
      'Professional home inspections in Southwest Florida — major systems, clear reporting, and a complimentary infrared scan with every inspection.',
    heroEyebrow: 'Residential',
    intro: [
      'Whether you are buying a condo, villa, townhouse, or single-family home, a thorough inspection helps you understand condition, maintenance needs, and safety concerns before you close.',
      'Our licensed inspectors evaluate visible and accessible components of the home and explain findings in plain language — ideal for first-time buyers, relocating families, and busy agents who need reliable turnaround.',
      'We are a multi-inspector, family-owned company with full-time office support. That means easier scheduling during tight contingency windows — and a team that knows how Florida homes age in sun, humidity, and storms.',
    ],
    supportingSections: [
      {
        title: 'What you can expect on inspection day',
        paragraphs: [
          'We encourage you to attend so you can see what we see and ask questions in real time. If you cannot be there, your inspector can review major findings by phone and your report will still include photos and clear explanations.',
          'Inspections are non-invasive: we evaluate what is safely visible and accessible at the time of inspection. We do not move personal belongings, open walls, or predict future failures — we document present-day conditions and common red flags.',
        ],
      },
    ],
    whyHeading: 'Why schedule a home inspection?',
    whyBody: [
      'Homes often have hidden wear, prior repairs, or system issues that are easy to miss during a quick walkthrough. An inspection reduces surprises and gives you a clearer picture of what you are purchasing.',
      'In competitive markets, buyers sometimes feel rushed. A methodical inspection gives you a prioritized list: what is typical maintenance, what should be budgeted soon, and what may need contractor follow-up before closing — or as a post-closing plan.',
    ],
    takeaways: [
      'Licensed inspectors, detailed digital reports, and high-resolution photos',
      'Complimentary infrared scan included with standard home inspections',
      'Reports typically delivered within 24 hours or by the next business day',
      'Serving Sarasota, Bradenton, Lakewood Ranch, Venice, Tampa, St. Petersburg, and nearby areas',
    ],
    howHeading: 'What we review',
    steps: [
      {
        title: 'Structural & exterior',
        body: 'We look at the foundation and grading (as visible), roof covering and flashings from accessible points, exterior cladding, windows, exterior doors, decks/porches (as applicable), and other components that affect water management and structural performance.',
      },
      {
        title: 'Major systems',
        body: 'We evaluate the electrical service panel and representative outlets/switches, plumbing supply and drain fixtures (where accessible), water heating equipment, HVAC air handlers/condensers (as accessible), and built-in kitchen appliances.',
      },
      {
        title: 'Interiors & attic',
        body: 'We walk representative interior spaces for visible defects and safety concerns, review attic insulation and ventilation where accessible, and look for moisture staining, active leaks, and ventilation issues that are visible at the time of inspection.',
      },
      {
        title: 'Infrared & reporting',
        body: 'Every standard home inspection includes a complimentary infrared scan to help identify hidden moisture patterns, insulation gaps, and electrical hot spots that are not obvious to the naked eye. You receive a detailed digital report with photos — typically within 24 hours or by the next business day.',
      },
    ],
    closing:
      'Buying a home is a big decision. Our goal is to make the inspection straightforward: clear findings, practical context, and fast reporting. Ready to book? Use our online scheduler (Spectora) or call the office — we are here seven days a week.',
  },
  {
    slug: 'mobile-and-manufactured-homes',
    category: 'mobile',
    title: 'Mobile & manufactured homes',
    metaDescription:
      'Inspections for mobile and manufactured homes in Southwest Florida — specialized focus on structure, tie-downs, utilities, and common factory-built concerns.',
    heroEyebrow: 'Factory-built homes',
    intro: [
      'Mobile and manufactured homes have unique construction details and maintenance needs. Our inspectors understand how these homes perform in Florida’s climate and what to look for during purchase or listing.',
      'These properties can be excellent value — but the inspection priorities are different than a site-built home. Connections, roofing transitions, moisture management, and utility hookups deserve a trained eye.',
    ],
    supportingSections: [
      {
        title: 'Who this service is for',
        paragraphs: [
          'Buyers and sellers of manufactured housing in communities and on private land, refinances that require documentation, and agents who want a report that speaks clearly to “factory-built” realities — not a generic checklist.',
        ],
      },
    ],
    whyHeading: 'Why it matters',
    whyBody: [
      'From chassis and anchoring to roofing and utility connections, specialized knowledge helps you avoid costly oversights that differ from site-built homes.',
      'Florida’s heat, humidity, and storms also mean seals, roof penetrations, and exterior transitions can wear faster when details were missed during installation or past repairs.',
    ],
    takeaways: [
      'Focused evaluation of manufactured-home-specific risks and common failure points',
      'Photos and explanations you can share with lenders, insurers, or contractors',
      'Fast report turnaround to keep your transaction timeline on track',
    ],
    howHeading: 'What we focus on',
    steps: [
      {
        title: 'Structure & anchoring',
        body: 'We review visible structural components and safe access points, evaluate anchoring/tie-down concepts where visible, and look for moisture pathways that commonly affect factory-built homes.',
      },
      {
        title: 'Roofing & exterior',
        body: 'We assess roof coverings, penetrations, flashing, skirting, windows, and exterior doors — including transitions that often leak if flashing details are incomplete.',
      },
      {
        title: 'Systems',
        body: 'We evaluate electrical, plumbing, HVAC, and appliances for safe operation and common manufactured-home issues such as unsupported penetrations, corrosion, and accessibility concerns.',
      },
      {
        title: 'Reporting',
        body: 'You receive clear explanations, photos, and practical next-step guidance. If something needs a specialty contractor, we help you understand urgency and who to call next.',
      },
    ],
    closing:
      'If you are not sure whether this is the right inspection type for the property, call our office. We will help you pick the correct scope before you book.',
  },
  {
    slug: 'pre-drywall-inspection',
    category: 'newConstruction',
    title: 'Pre-drywall inspection',
    metaDescription:
      'Pre-drywall inspections for new construction in Southwest Florida — catch framing, MEP, and insulation concerns before walls close in.',
    heroEyebrow: 'New construction',
    intro: [
      'Before drywall hides the “bones” of a new home, a pre-drywall inspection documents visible framing, penetrations, and rough-ins while they are still accessible.',
      'This is one of the best times to catch issues that become expensive once insulation and wall coverings are installed — and it gives you a stronger paper trail for builder warranty conversations.',
    ],
    supportingSections: [
      {
        title: 'How this fits your build timeline',
        paragraphs: [
          'Most buyers schedule pre-drywall once framing and rough trades are in place and before insulation/drywall closes the cavities. If you are unsure about timing, ask your builder for the right window — then call us to coordinate quickly.',
        ],
      },
    ],
    whyHeading: 'Why buyers schedule pre-drywall',
    whyBody: [
      'Even quality builders can miss a strap, a penetration seal, or a routing detail. A third-party inspection is not about blame — it is about reducing risk while corrections are still easy.',
    ],
    howHeading: 'What we evaluate at pre-drywall',
    steps: [
      {
        title: 'Framing & structure',
        body: 'We review visible framing, load paths, penetrations, and common installation concerns while interior wall cavities are open — including bracing and obvious structural red flags.',
      },
      {
        title: 'Rough mechanicals',
        body: 'We evaluate visible portions of plumbing, electrical, and HVAC rough-in for routing, support, and obvious defects — noting items that should be corrected before cover-up.',
      },
      {
        title: 'Moisture management',
        body: 'We look at flashing concepts, penetrations, and details that affect long-term moisture performance — as visible at the time of inspection — including areas where Florida wind-driven rain is most punishing.',
      },
      {
        title: 'Documentation',
        body: 'You receive photos and notes to support builder discussions, follow-up walkthroughs, and your own records as the home progresses.',
      },
    ],
    closing:
      'Building a new home should feel exciting — not stressful. We help you document conditions at a critical milestone so you can move forward with confidence.',
  },
  {
    slug: 'final-walk-through-inspection',
    category: 'newConstruction',
    title: 'Final walk-through inspection',
    metaDescription:
      'Final walk-through inspections before closing on new construction — verify workmanship, systems, and punch-list items.',
    heroEyebrow: 'New construction',
    intro: [
      'Your final walk-through is the best opportunity to confirm the home is completed as expected — and to identify outstanding items before closing.',
      'This appointment is not a “quick look.” It is your chance to verify that agreed repairs were completed, systems operate as expected, and cosmetic issues are documented while the builder still has leverage to respond.',
    ],
    supportingSections: [
      {
        title: 'What to bring to the walk-through',
        paragraphs: [
          'Bring your repair addendum (if applicable), builder correspondence, and a charger/outlet tester if you want — we will guide the process and document findings with photos so nothing gets lost in translation.',
        ],
      },
    ],
    whyHeading: 'Why use a third-party inspector for the walk-through?',
    whyBody: [
      'Builders appreciate clarity too. A photo-driven punch list reduces back-and-forth and helps everyone agree on what remains — before you sign at the closing table.',
    ],
    howHeading: 'How we help',
    steps: [
      {
        title: 'System checks',
        body: 'We perform operational checks of accessible systems and components as appropriate at that stage — including HVAC modes, plumbing fixtures, and representative electrical devices.',
      },
      {
        title: 'Interior & exterior review',
        body: 'We document cosmetic and functional items buyers commonly miss: paint touch-ups, flooring issues, door adjustments, trim gaps, and exterior items that should be completed prior to closing.',
      },
      {
        title: 'Clear documentation',
        body: 'You receive a report you can share with your builder and agent to support timely corrections — with enough detail to prevent “he said / she said” disputes later.',
      },
    ],
    closing:
      'Closing day goes smoother when expectations are aligned. We help you walk in prepared — and walk away with documentation you can trust.',
  },
  {
    slug: 'builder-warranty-inspection',
    category: 'newConstruction',
    title: 'Builder warranty inspection',
    metaDescription:
      'Builder warranty inspections before coverage ends — document issues while they may still be covered under your builder warranty.',
    heroEyebrow: 'New construction',
    intro: [
      'Many builder warranties have a window of coverage. A warranty inspection helps identify defects and performance concerns while you still have leverage to request corrections.',
      'Homes “settle in” during the first year: humidity cycles, cabinet adjustments, caulking, and small cracks can appear. Some items are normal maintenance — others are warranty-worthy if documented properly and submitted on time.',
    ],
    supportingSections: [
      {
        title: 'When to schedule',
        paragraphs: [
          'Most homeowners schedule near the end of the first-year warranty window — but earlier is fine if you already notice issues. If you are unsure, call us with your warranty dates and we will recommend timing.',
        ],
      },
    ],
    whyHeading: 'Why warranty inspections save money',
    whyBody: [
      'Without documentation, minor issues can become major repairs later. A structured report helps you separate “watch list” maintenance from defects that should be addressed under warranty.',
    ],
    howHeading: 'What we document',
    steps: [
      {
        title: 'Whole-home review',
        body: 'We review visible defects, installation concerns, and maintenance items tied to common warranty categories — from roofing and flashing to interior finishes and mechanical systems (as accessible).',
      },
      {
        title: 'Evidence you can use',
        body: 'Photos and descriptions are organized for productive conversations with your builder — including locations and severity so follow-up trades know where to start.',
      },
      {
        title: 'Peace of mind',
        body: 'You will understand what is cosmetic versus what may warrant follow-up before your warranty period expires — and what to monitor afterward.',
      },
    ],
    closing:
      'Warranty periods sneak up fast. If your deadline is approaching, schedule now — our office can often accommodate short windows when inspectors are available.',
  },
  {
    slug: 'mold-air-quality-swab-sampling',
    category: 'additional',
    title: 'Mold air quality / swab sampling',
    metaDescription:
      'Mold air quality and swab sampling in Southwest Florida — infrared moisture scanning, ProLab analysis, and fast reporting.',
    heroEyebrow: 'Environmental testing',
    intro: [
      'Moisture is often the root cause of indoor air quality concerns. Our process is designed to identify hidden moisture pathways, collect appropriate samples, and provide lab-backed documentation so you can make informed decisions.',
      'Sampling is not a “pass/fail” test for every home — it is a tool. We combine infrared scanning, visual context, and lab analysis so you understand not just what showed up in a sample, but what it likely means for your next step.',
    ],
    supportingSections: [
      {
        title: 'Common reasons buyers and homeowners choose sampling',
        paragraphs: [
          'Musty odors, visible staining, recent leaks, allergy-like symptoms that track with time spent indoors, or a history of moisture intrusion after storms — these are all common triggers. If you are under contract, timing matters: ask your agent how this coordinates with inspection contingencies.',
        ],
      },
    ],
    whyHeading: 'Why mold sampling?',
    whyBody: [
      'Not every issue is visible. Sampling can help characterize what the air and surfaces may be showing — especially when occupants notice musty odors, allergy-like symptoms, or when moisture staining is present but the source is unclear.',
      'Florida humidity also means condensation and minor surface growth can occur without a major mold problem — lab context helps separate “cleanup and maintenance” from situations that need a structured remediation plan.',
    ],
    takeaways: [
      'Infrared moisture inspection included as part of the workflow',
      'Samples submitted to ProLab for professional laboratory analysis',
      'Turnaround commonly within 1–2 business days for lab reporting (varies by lab workload)',
      'Licensed mold assessors available when documentation and protocols are needed',
    ],
    howHeading: 'How our mold sampling works',
    steps: [
      {
        title: 'Infrared moisture inspection',
        body: 'We use infrared technology to help locate moisture sources and unusual temperature patterns that can indicate hidden issues — then we connect those clues to what is visible and accessible at the time of inspection.',
      },
      {
        title: 'Air and swab sample collection',
        body: 'Samples are collected following recognized protocols and submitted to ProLab, a leading environmental testing laboratory, for analysis. The number and type of samples depends on the concern, the layout of the home, and what will actually answer your question.',
      },
      {
        title: 'Fast, detailed lab reporting',
        body: 'You receive a lab report — typically within 1–2 business days — with clear context on what was detected. When appropriate, a remediation protocol may be included to guide next steps with a licensed remediation contractor.',
      },
    ],
    callout: {
      body: 'Hope Home Inspections LLC is **not** in the mold removal or mold remediation business. However, we are licensed mold assessors and can provide mold remediation protocols when applicable.',
      secondaryButton: { label: 'What is a mold assessor?', to: '/services/mold-assessment' },
    },
    closing:
      'If you are unsure whether you need air sampling, swab sampling, or a full mold assessment, call our office. We will help you pick the right scope — and coordinate timing with your inspection contingency when needed.',
  },
  {
    slug: 'mold-assessment',
    category: 'additional',
    title: 'Mold assessment',
    metaDescription:
      'Licensed mold assessments in Southwest Florida — evaluation, documentation, and protocols aligned with Florida requirements.',
    heroEyebrow: 'Environmental testing',
    intro: [
      'A mold assessment is a structured evaluation intended to document conditions, identify moisture concerns, and provide professional guidance — especially when remediation planning is needed.',
      'If you are navigating insurance questions, landlord/tenant concerns, or a real estate transaction with elevated stakes, documentation matters. Our goal is clarity: what we observed, what it suggests, and what a reasonable remediation plan looks like — performed by the correct licensed professionals.',
    ],
    supportingSections: [
      {
        title: 'Assessments vs. remediation',
        paragraphs: [
          'Assessments focus on investigation, documentation, and planning. Remediation is a separate trade: controlled containment, removal/cleaning, and clearance testing when required. Keeping those roles separate protects you and helps avoid conflicts of interest.',
        ],
      },
    ],
    whyHeading: 'What a mold assessor does',
    whyBody: [
      'Mold assessors are trained to evaluate building conditions and sampling results in context. We are not a remediation contractor — which helps avoid conflicts of interest when documentation and protocols are required.',
      'We also help you understand urgency: what should be handled immediately, what can be scheduled, and what is most likely normal Florida humidity behavior versus a moisture problem that will keep returning until the source is fixed.',
    ],
    takeaways: [
      'Licensed mold assessor services with clear written documentation',
      'Sampling recommendations when they add real value — not “sampling for sampling’s sake”',
      'Remediation protocols when applicable (completed by a separate remediation contractor)',
    ],
    howHeading: 'What to expect',
    steps: [
      {
        title: 'Inspection & documentation',
        body: 'We perform a visual evaluation of affected areas and relevant building systems, with photos and notes suitable for insurance or contractor discussions when applicable — including moisture pathways and conditions that promote microbial growth.',
      },
      {
        title: 'Sampling (when needed)',
        body: 'Air, surface, or other sampling may be recommended depending on the scenario, the question you are trying to answer, and whether lab data will change the next step.',
      },
      {
        title: 'Protocols & next steps',
        body: 'When applicable, we can provide remediation protocols and guidance — while remediation itself is performed by licensed remediation contractors who carry out the work under appropriate containment and cleaning standards.',
      },
    ],
    callout: {
      body: 'We are **not** a mold remediation company. If remediation is needed, you will work with a separate licensed remediation contractor to perform removal/cleaning.',
      secondaryButton: { label: 'Mold air quality & swab sampling', to: '/services/mold-air-quality-swab-sampling' },
    },
    closing:
      'Not sure whether you need sampling, an assessment, or both? Call our office — we will walk through your situation and recommend an efficient path.',
  },
  {
    slug: 'radon-testing',
    category: 'additional',
    title: 'Radon testing',
    metaDescription:
      'Radon testing for Florida homes — understand indoor radon levels with professional measurement and clear reporting.',
    heroEyebrow: 'Environmental testing',
    intro: [
      'Radon is a naturally occurring gas that can accumulate indoors. Testing is the only way to know what levels look like in the home you are buying or living in.',
      'While some areas are known hotspots, radon can vary home-to-home. Even if neighbors are low, your foundation, slab details, and HVAC behavior can affect results — which is why a real measurement beats a guess.',
    ],
    supportingSections: [
      {
        title: 'Who radon testing is for',
        paragraphs: [
          'Buyers who want baseline data for negotiation, homeowners who spend lots of time indoors, and anyone with a finished basement or lower-level living space where radon can concentrate more easily.',
        ],
      },
    ],
    whyHeading: 'Why radon matters',
    whyBody: [
      'Radon is a leading cause of lung cancer risk among non-smokers nationally. Testing is inexpensive compared to the uncertainty — and mitigation is common when levels are elevated.',
    ],
    takeaways: [
      'Professional measurement with proper closed-building conditions',
      'Clear reporting you can share with your agent or physician',
      'Guidance on mitigation options if elevated levels are found',
    ],
    howHeading: 'How testing works',
    steps: [
      {
        title: 'Placement & protocol',
        body: 'We deploy testing equipment following appropriate closed-building conditions and time windows for reliable results — including guidance on windows, fans, and other factors that can skew readings.',
      },
      {
        title: 'Laboratory analysis',
        body: 'Results are interpreted and presented in a straightforward report — with context so you understand what the number means and what typically happens next.',
      },
      {
        title: 'Next steps',
        body: 'If elevated levels are indicated, we can point you toward mitigation resources and common mitigation approaches used in Florida homes.',
      },
    ],
    closing:
      'Radon testing is easy to schedule alongside your home inspection. Ask our office about timing and the shortest path to get results before your contingency deadline.',
  },
  {
    slug: 'sewer-scope',
    category: 'additional',
    title: 'Sewer scope',
    metaDescription:
      'Sewer scope inspections in Southwest Florida — camera evaluation of accessible sewer lines to catch costly hidden issues.',
    heroEyebrow: 'Specialty inspections',
    intro: [
      'A sewer scope uses a camera to evaluate the condition of accessible sewer lines. It is one of the best ways to reduce surprise repairs after closing.',
      'Older neighborhoods, mature trees, and homes with older cast iron or clay lines can hide expensive problems underground. A scope does not guarantee the future — but it can reveal issues that a normal home inspection cannot see from the surface.',
    ],
    supportingSections: [
      {
        title: 'What a scope can (and cannot) do',
        paragraphs: [
          'We can scope accessible lines from typical entry points when it is safe and appropriate. Some blockages prevent full passage; some lines cannot be accessed without specialist equipment. We explain limitations in the report so you know what was verified.',
        ],
      },
    ],
    whyHeading: 'Why buyers schedule a sewer scope',
    whyBody: [
      'Sewer repairs can be disruptive and costly. If you are already investing in a home, a scope is a small add-on that can prevent a five-figure surprise.',
    ],
    takeaways: [
      'Video documentation of the line condition where accessible',
      'Clear findings you can share with a licensed plumber',
      'Helps prioritize repairs during negotiations when issues are found',
    ],
    howHeading: 'What we look for',
    steps: [
      {
        title: 'Camera inspection',
        body: 'We inspect accessible lines for offsets, breaks, roots, bellies, and other common failure modes — where the line can be accessed and scoped safely.',
      },
      {
        title: 'Video evidence',
        body: 'Documentation you can share with plumbers and sellers when negotiation is needed — including locations and descriptions of defects and obstructions.',
      },
      {
        title: 'Practical next steps',
        body: 'If we identify concerns, we help you understand what typically requires a plumbing contractor vs. what can be monitored — so you can act quickly without unnecessary panic.',
      },
    ],
    closing:
      'Ask our office about scheduling a sewer scope with your home inspection — we will coordinate timing and access points with you or your agent.',
  },
  {
    slug: 'water-testing',
    category: 'additional',
    title: 'Water testing',
    metaDescription:
      'Drinking water quality testing — helpful for wells and for peace of mind on potable water systems.',
    heroEyebrow: 'Environmental testing',
    intro: [
      'Water quality can affect taste, staining, and health-related concerns. Testing helps establish a baseline — especially for private wells and older plumbing systems.',
      'If you are purchasing a home with a well, testing is often one of the smartest checks you can run — because treatment can be straightforward when you know what you are treating.',
    ],
    supportingSections: [
      {
        title: 'Common reasons to test',
        paragraphs: [
          'New well purchase, noticeable odor or discoloration, older plumbing fixtures, or a home with a history of filtration equipment — testing turns “unknown” into a plan.',
        ],
      },
    ],
    whyHeading: 'Why test before you close?',
    whyBody: [
      'Water quality issues can affect financing timelines, insurance questions, and family health. If something needs attention, you want to know while you still have options — not after move-in.',
    ],
    howHeading: 'What we offer',
    steps: [
      {
        title: 'Sample collection',
        body: 'Samples are collected following lab requirements and chain-of-custody expectations — including proper flushing procedures so results reflect real-world use.',
      },
      {
        title: 'Laboratory reporting',
        body: 'Results are summarized in a clear report with context on what was tested, what exceeded common benchmarks, and what typically triggers follow-up filtration or treatment.',
      },
      {
        title: 'Next steps',
        body: 'If results are elevated, we help you understand what to ask a water treatment professional — and what questions to bring to your well contractor.',
      },
    ],
    closing:
      'Not sure which water test package fits your property? Call our office — we will align your goals with the right lab panel.',
  },
  {
    slug: 'well-inspection',
    category: 'additional',
    title: 'Well inspection',
    metaDescription:
      'Well inspections for properties on private water systems — evaluate accessible components and common failure points.',
    heroEyebrow: 'Specialty inspections',
    intro: [
      'If the property relies on a private well, understanding equipment condition and basic performance expectations can prevent expensive surprises.',
      'Well systems include pumps, pressure tanks, electrical controls, and piping — often located where issues are easy to miss during a quick showing. We focus on what is visible and accessible at the time of inspection and document what may need a well contractor.',
    ],
    supportingSections: [
      {
        title: 'Pair with water testing',
        paragraphs: [
          'A well inspection looks at equipment and basic performance clues; water testing evaluates what is coming out of the tap. Together, they give you a clearer picture of what you are buying.',
        ],
      },
    ],
    whyHeading: 'Why schedule a well inspection?',
    whyBody: [
      'Repairing or replacing well equipment can be expensive and time-sensitive. Documentation helps you negotiate, plan maintenance, and avoid move-in surprises.',
    ],
    howHeading: 'What we evaluate',
    steps: [
      {
        title: 'Visible components',
        body: 'Accessible well components, piping, pressure tank concepts, and common safety items as visible at inspection — including obvious leaks, corrosion, and support concerns.',
      },
      {
        title: 'Coordination with water testing',
        body: 'Water quality testing can be paired when you want a fuller picture of potable water — especially for bacteria, minerals, and other common Florida well concerns.',
      },
      {
        title: 'Reporting',
        body: 'You receive photos and notes to support follow-up with a licensed well contractor when deeper evaluation or repairs are needed.',
      },
    ],
    closing:
      'If you are buying a well property, ask our office about bundling inspection + water testing for the fastest turnaround.',
  },
  {
    slug: 'wind-mitigation-4-points',
    category: 'additional',
    title: 'Wind mitigation & 4-point inspections',
    metaDescription:
      'Wind mitigation and 4-point inspections for insurance documentation — photos, forms, and professional reporting.',
    heroEyebrow: 'Insurance inspections',
    intro: [
      'Insurance carriers often request wind mitigation and/or 4-point documentation. These inspections focus on specific building attributes and systems carriers care about most.',
      'These are not “full home inspections.” They are targeted evaluations meant to answer underwriting questions — which is why the report format and photos are different from a buyer’s inspection.',
    ],
    supportingSections: [
      {
        title: 'Wind mitigation vs. 4-point',
        paragraphs: [
          'Wind mitigation is about building features that may reduce wind damage risk (roof attachments, opening protection, etc.). A 4-point is typically about the age and condition of four major systems. Carriers may request one or both depending on the policy and property.',
        ],
      },
    ],
    whyHeading: 'Why timing matters',
    whyBody: [
      'If you are closing soon or renewing coverage, last-minute surprises can delay approvals. Scheduling early gives you time to obtain corrections or contractor letters if needed.',
    ],
    takeaways: [
      'Photos and documentation aligned with common carrier workflows',
      'Clear notes on what was visible vs. what requires a specialist',
      'Helpful for agents and homeowners navigating insurance renewals',
    ],
    howHeading: 'What is included',
    steps: [
      {
        title: 'Wind mitigation',
        body: 'We document roof covering, attachments, opening protection, and other wind-related features that may qualify for credits (carrier rules vary). We photograph key evidence and note what is visible at the time of inspection.',
      },
      {
        title: '4-point',
        body: 'We summarize key systems (typically roof, electrical, plumbing, HVAC) for underwriting purposes — focused on age, condition, and basic safety items carriers care about.',
      },
      {
        title: 'Reporting',
        body: 'You receive clear photos and completed documentation suitable for agent and carrier submission workflows — with enough detail to reduce back-and-forth.',
      },
    ],
    closing:
      'Carrier requirements change frequently. Bring your agent’s checklist or your insurance questionnaire — we will align the inspection to what you need submitted.',
  },
  {
    slug: 'wdo-termite',
    category: 'additional',
    title: 'WDO / termite',
    metaDescription:
      'Wood-destroying organism (WDO) inspections — termites and related organisms that can impact Florida homes.',
    heroEyebrow: 'Specialty inspections',
    intro: [
      'Florida’s climate is favorable to wood-destroying organisms. A WDO inspection helps identify evidence of activity, damage, and conditions conducive to infestation.',
      'Many transactions require WDO documentation for lender or contract reasons. Even when it is optional, it is one of the highest-value specialty checks you can add — because damage can be hidden behind finishes.',
    ],
    supportingSections: [
      {
        title: 'What you should know',
        paragraphs: [
          'WDO inspections are visual and limited to accessible areas. If evidence suggests hidden damage, we may recommend further evaluation by a licensed pest control contractor. Our goal is to document what is visible and help you understand risk.',
        ],
      },
    ],
    whyHeading: 'Why WDO matters in Florida',
    whyBody: [
      'Subterranean termites and other WDOs can cause structural damage over time. Early identification can save you money — and prevent closing delays from last-minute remediation.',
    ],
    takeaways: [
      'Focused evaluation for termites and other common WDOs',
      'Documentation suitable for real estate timelines',
      'Practical guidance when evidence requires a licensed pest professional',
    ],
    howHeading: 'What we look for',
    steps: [
      {
        title: 'Visible evidence',
        body: 'Accessible areas are reviewed for evidence of termites, other WDOs, and conducive conditions — including moisture, wood-to-ground contact, and common entry points.',
      },
      {
        title: 'Documentation',
        body: 'Findings are summarized in a report suitable for real estate timelines — with photos and clear language for agents and buyers.',
      },
      {
        title: 'Next steps',
        body: 'If treatment is needed, we help you understand what questions to ask a licensed pest control company — and what documentation to keep for closing.',
      },
    ],
    closing:
      'Ask our office about scheduling WDO alongside your home inspection — we will coordinate timing and access.',
  },
  {
    slug: 'voc-testing',
    category: 'additional',
    title: 'VOC testing',
    metaDescription:
      'Volatile organic compound (VOC) testing — evaluate indoor air chemistry when odors or sensitivities are a concern.',
    heroEyebrow: 'Environmental testing',
    intro: [
      'VOCs can come from building materials, cleaning products, and other sources. Testing can help characterize indoor air when occupants notice persistent odors or sensitivity symptoms.',
      'VOC testing is not a “one number tells the whole story” service — it is contextual. We combine your concerns, occupancy patterns, and the home’s materials and ventilation to interpret results responsibly.',
    ],
    supportingSections: [
      {
        title: 'When VOC testing is helpful',
        paragraphs: [
          'New renovations, new flooring or cabinetry, strong chemical odors, or symptoms that improve when you leave the home. If you are under contract, timing matters — ask us how to coordinate with your inspection window.',
        ],
      },
    ],
    whyHeading: 'Why not just “air out the house”?',
    whyBody: [
      'Ventilation helps, but some sources continue off-gassing until identified. Testing helps separate “temporary new-home smell” from issues that need a targeted fix.',
    ],
    howHeading: 'How it works',
    steps: [
      {
        title: 'Sampling plan',
        body: 'We select sampling approaches appropriate to your concern and the home’s layout — including rooms, occupancy patterns, and whether the issue is seasonal.',
      },
      {
        title: 'Laboratory analysis',
        body: 'Samples are analyzed and reported with practical context — what stands out, what is common, and what typically triggers follow-up with an HVAC or indoor air quality specialist.',
      },
      {
        title: 'Practical next steps',
        body: 'If results suggest a source, we help you understand what to verify next — without turning every concern into an expensive panic.',
      },
    ],
    closing:
      'If you are not sure whether VOC testing or mold sampling is the right next step, call our office — we will help you choose efficiently.',
  },
  {
    slug: 'maintenance-inspection',
    category: 'additional',
    title: 'Maintenance inspection',
    metaDescription:
      'Maintenance inspections for homeowners — catch small issues before they become expensive repairs.',
    heroEyebrow: 'Homeowner care',
    intro: [
      'You do not need to be buying or selling to benefit from an inspection. Maintenance inspections help homeowners prioritize repairs, plan budgets, and stay ahead of moisture and system wear.',
      'Think of it like a wellness check for your house: not a guarantee nothing will fail — but a clear plan for what to watch, what to fix soon, and what can wait.',
    ],
    supportingSections: [
      {
        title: 'Ideal timing',
        paragraphs: [
          'Many homeowners schedule annually or after major storms. If you are planning a renovation, a maintenance inspection can also help you avoid building on top of hidden moisture or system issues.',
        ],
      },
    ],
    whyHeading: 'Why homeowners schedule maintenance inspections',
    whyBody: [
      'Small issues become expensive when they are ignored. Catching roof penetrations, window seal failures, HVAC drainage problems, and moisture clues early saves money.',
    ],
    takeaways: [
      'Prioritized findings with photos — not a generic checklist',
      'Florida-specific guidance (humidity, storms, sun exposure)',
      'Great for planning budgets and contractor visits',
    ],
    howHeading: 'What we review',
    steps: [
      {
        title: 'Whole-home snapshot',
        body: 'Major systems and common maintenance items, explained with photos and practical priorities — so you know what is urgent vs. what can be scheduled.',
      },
      {
        title: 'Seasonal awareness',
        body: 'Florida-specific concerns like roof drainage, exterior sealants, and humidity management — including attic ventilation clues and moisture pathways.',
      },
      {
        title: 'Your next 90 days',
        body: 'We help you build a short list of what to handle first — what to DIY, what to hire, and what to monitor.',
      },
    ],
    closing:
      'Own a home in Southwest Florida? Call our office to schedule a maintenance inspection — we will help you pick the right scope for your home’s age and condition.',
  },
  {
    slug: 'complete-home-warranty',
    category: 'additional',
    title: 'Complete home warranty inspection',
    metaDescription:
      'Inspections aligned with home warranty timelines — document issues while coverage may still apply.',
    heroEyebrow: 'Homeowner care',
    intro: [
      'Home warranty plans often have limits and deadlines. An inspection can help you document eligible issues and communicate effectively with your warranty provider.',
      'Warranty coverage is a contract between you and the provider — not something we can guarantee. What we can do is document conditions clearly so you can submit claims with confidence and reduce back-and-forth.',
    ],
    supportingSections: [
      {
        title: 'Before you submit a claim',
        paragraphs: [
          'Gather your warranty plan, note any service fees, and review exclusions (like pre-existing conditions). We help you describe conditions accurately — but approval decisions belong to the warranty company.',
        ],
      },
    ],
    whyHeading: 'Why documentation wins',
    whyBody: [
      'Warranty claims are easier when issues are described with photos, locations, and severity. A structured report helps dispatch the right trade and reduces “we couldn’t verify” outcomes.',
    ],
    howHeading: 'What we provide',
    steps: [
      {
        title: 'Condition documentation',
        body: 'Photos and descriptions of defects and systems concerns suitable for warranty conversations — including appliance issues, electrical problems, plumbing leaks, and HVAC performance clues (as visible).',
      },
      {
        title: 'Clarity',
        body: 'Plain-language explanations so you know what to submit, what to expect next, and what may fall outside warranty coverage.',
      },
      {
        title: 'Follow-up support',
        body: 'If you need additional documentation after a vendor visit, we can discuss whether a re-inspection or addendum makes sense.',
      },
    ],
    closing:
      'Bring your warranty paperwork to the call — we will help you align the inspection scope with what you are trying to submit.',
  },
  {
    slug: 'commercial-building-inspections',
    category: 'commercial',
    title: 'Commercial building inspections',
    metaDescription:
      'Commercial property inspections in Southwest Florida — tailored scopes for investors, tenants, and owners.',
    heroEyebrow: 'Commercial',
    intro: [
      'Commercial buildings have different risks and systems than single-family homes. We tailor the inspection scope to the property type and your transaction goals.',
      'Retail, office, light industrial, and mixed-use properties each have different priorities — roof assets, parking drainage, electrical service capacity, and HVAC zoning are common focus areas depending on your lease and use case.',
    ],
    supportingSections: [
      {
        title: 'How we scope commercial work',
        paragraphs: [
          'Tell us what you are trying to learn: lease renewals, acquisition due diligence, lender requirements, or baseline maintenance planning. We align the inspection to the decision you are making — not a one-size-fits-all checklist.',
        ],
      },
    ],
    whyHeading: 'Why investors use third-party inspections',
    whyBody: [
      'Sellers highlight strengths; tenants have incentives too. A third-party report helps you negotiate from facts — photos, priorities, and realistic timelines for repairs.',
    ],
    takeaways: [
      'Tailored scope based on property type and your goals',
      'Prioritized findings with photos — not a wall of minor issues',
      'Coordination for specialty add-ons when needed',
    ],
    howHeading: 'Common focus areas',
    steps: [
      {
        title: 'Site & envelope',
        body: 'Roofing concepts, drainage, parking, exterior walls, and accessible common areas — including water intrusion paths and trip hazards that affect liability.',
      },
      {
        title: 'Building systems',
        body: 'Electrical, plumbing, HVAC, and life-safety items as agreed for the scope of work — including representative sampling of equipment rooms and common areas.',
      },
      {
        title: 'Reporting',
        body: 'Executive-friendly reporting with photos and prioritized findings — so you can brief partners, lenders, or contractors quickly.',
      },
    ],
    closing:
      'Commercial timelines vary. Call our office with the address and your goals — we will recommend scope and scheduling options.',
  },
  {
    slug: 'phase-1-environmental-assessment',
    category: 'commercial',
    title: 'Phase I environmental assessment',
    metaDescription:
      'Phase I environmental site assessments — identify recognized environmental conditions for commercial transactions.',
    heroEyebrow: 'Commercial',
    intro: [
      'A Phase I ESA is a common due diligence step in commercial real estate. It evaluates historical uses and site conditions to identify potential environmental concerns.',
      'Lenders, buyers, and partners often want a Phase I because it establishes a baseline: what is known, what is uncertain, and whether additional testing is warranted — before you commit capital.',
    ],
    supportingSections: [
      {
        title: 'What a Phase I is not',
        paragraphs: [
          'A Phase I is not soil sampling. It is a records-driven review and site visit aligned with recognized practice. If sampling is needed, that typically becomes a Phase II scope performed by appropriate specialists.',
        ],
      },
    ],
    whyHeading: 'Why Phase I reports matter',
    whyBody: [
      'Environmental liability can be expensive. A Phase I helps identify recognized environmental conditions (RECs) early — so you can negotiate, insure, or walk away with eyes open.',
    ],
    howHeading: 'What a Phase I typically includes',
    steps: [
      {
        title: 'Records review & site reconnaissance',
        body: 'Research, interviews (as applicable), and a site visit aligned with recognized industry practice — including adjacent property considerations and historical uses that affect risk.',
      },
      {
        title: 'Findings',
        body: 'Identification of recognized environmental conditions (RECs) or concerns for further evaluation — with clear language for stakeholders who are not environmental scientists.',
      },
      {
        title: 'Next steps',
        body: 'Guidance when additional testing (Phase II) or specialist follow-up is warranted — and what questions to ask environmental consultants next.',
      },
    ],
    closing:
      'Commercial deals move fast. Call our office with the property address and your timeline — we will discuss whether a Phase I fits your needs and what to expect next.',
  },
]

export function getServiceBySlug(slug: string | undefined): ServicePageContent | undefined {
  if (!slug) return undefined
  return servicePages.find((p) => p.slug === slug)
}

export function servicesGroupedForNav(): {
  category: ServiceCategory
  navLabel: string
  items: { slug: string; title: string }[]
}[] {
  const order: ServiceCategory[] = [
    'additional',
    'commercial',
    'home',
    'mobile',
    'newConstruction',
  ]
  return order.map((category) => ({
    category,
    navLabel: categories[category].navLabel,
    items: servicePages
      .filter((p) => p.category === category)
      .map((p) => ({ slug: p.slug, title: p.title })),
  }))
}
