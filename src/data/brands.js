export const brands = [
  {
    name: "3M",
    slug: "3m",
    category: "Major Manufacturers",
    description: "Global innovator offering Fasara decorative films, Scotchtint solar films, Scotchshield security films, and Thinsulate insulation films.",
    url: "https://www.3m.com",
    relatedFilms: ["decorative", "safety", "energy-saving"],
    specs: {
      heatRejection: "Up to 97% IR",
      uvProtection: "99.9% Blockage",
      warranty: "Limited Lifetime",
      tech: "Multi-layer Optical"
    },
    arizonaNote: "We specify 3M Prestige Series for Phoenix and Scottsdale residential installations where maintaining exterior appearance matters. The multi-layer optical construction delivers 97% IR rejection without the mirror look common in older films. For commercial projects, 3M Scotchshield Ultra Series meets GSA blast mitigation specifications.",
    bestFor: ["High-end residential", "Government facilities", "Dual-pane safe applications", "LEED documentation projects"],
    filmSeries: [
      { name: "3M Prestige Series", description: "Non-reflective ceramic. 97% IR rejection. Highest clarity residential solar film." },
      { name: "3M Scotchtint Series", description: "Commercial solar control. Multiple VLT options for large-perimeter installs." },
      { name: "3M Scotchshield Ultra", description: "12-mil safety film meeting GSA blast mitigation requirements." },
      { name: "3M Fasara Series", description: "Architectural decorative film. 100+ patterns including etched, frosted, and geometric." }
    ],
    faqs: [
      { question: "Is 3M window film safe for dual-pane windows?", answer: "Yes. 3M Prestige and Scotchtint series are engineered for dual-pane applications. We verify glass type and manufacturer specifications before every installation to ensure thermal compatibility." },
      { question: "What is the warranty on 3M window film?", answer: "3M offers a limited lifetime warranty on residential installations and a 10-year commercial warranty. Arizona House of Film backs every install with our own workmanship guarantee." },
      { question: "Does 3M film interfere with cell signals or GPS?", answer: "No. The 3M Prestige Series uses non-metallic multi-layer optical technology that does not interfere with GPS, cellular, or WiFi signals — unlike older metallic films." }
    ]
  },
  {
    name: "Eastman Chemical Company",
    slug: "eastman",
    category: "Major Manufacturers",
    description: "Producer of LLumar, Vista, and SunTek — high-performance solar, safety, and automotive window films.",
    url: "https://www.eastman.com",
    relatedFilms: ["safety", "energy-saving"],
    specs: {
      heatRejection: "Up to 95% IR",
      uvProtection: "99.9% Blockage",
      warranty: "Factory Backed",
      tech: "Advanced Sputtering"
    },
    arizonaNote: "Eastman supplies both our LLumar commercial line and Vista premium residential line. For large commercial perimeters requiring consistent SHGC performance across hundreds of windows, LLumar provides the specification consistency and NFRC documentation GCs require. Vista is our specification for residential clients prioritizing optical clarity.",
    bestFor: ["Large commercial perimeters", "GC and architect specs", "Premium residential clarity", "Multi-location consistency"],
    filmSeries: [
      { name: "LLumar Commercial Series", description: "Spectrally selective commercial solar control. Full NFRC documentation for COMcheck compliance." },
      { name: "Vista Premium Residential", description: "High-clarity ceramic residential. Low reflectivity for HOA-sensitive neighborhoods." },
      { name: "LLumar Safety Series", description: "8-mil and 12-mil security films for commercial smash-and-grab deterrence." }
    ],
    faqs: [
      { question: "What is the difference between LLumar and Vista film?", answer: "Both are made by Eastman Chemical Company. LLumar is our commercial line — optimized for large perimeters, SHGC compliance, and multi-location specification. Vista is our premium residential line, engineered for optical clarity and minimal exterior reflectivity in HOA-sensitive Arizona neighborhoods." },
      { question: "Does LLumar film qualify for SRP or APS rebates in Arizona?", answer: "Select LLumar commercial films with qualifying SHGC ratings meet SRP Business Solutions and APS energy efficiency rebate program requirements. We provide the NFRC-rated data sheets required for rebate applications during your free estimate." },
      { question: "How long does LLumar window film last in Arizona heat?", answer: "LLumar commercial and residential films carry factory-backed warranties and are engineered for high-heat climates. In Arizona conditions, properly installed LLumar ceramic films typically perform 15–20 years without delamination, bubbling, or significant fade." }
    ]
  },
  {
    name: "Saint-Gobain / Solar Gard",
    slug: "solar-gard",
    category: "Major Manufacturers",
    description: "Solar Gard and SunTek brands from Saint-Gobain, providing solar control, safety, and automotive window tinting films.",
    url: "https://www.solargard.com",
    relatedFilms: ["energy-saving", "safety"],
    specs: {
      heatRejection: "Up to 91% TSER",
      uvProtection: "99% +",
      warranty: "Residential Lifetime",
      tech: "Sustainable Solar"
    },
    arizonaNote: "Solar Gard is our primary specification for large commercial perimeters requiring LEED documentation and COMcheck compliance. Saint-Gobain backing means full NFRC certification across the product line — critical for GC and architect specifications on new Arizona construction.",
    bestFor: ["LEED projects", "Large commercial perimeters", "GC and architect specifications", "COMcheck compliance"],
    filmSeries: [
      { name: "Solar Gard Panorama Series", description: "Spectrally selective. High VLT with aggressive SHGC ratings for commercial compliance." },
      { name: "Solar Gard Quantum Series", description: "Nano-ceramic commercial. Designed for glass-heavy facades in high-solar-load climates." }
    ],
    bestFor: ["LEED documentation", "Large commercial perimeters", "COMcheck compliance", "GC and architect specifications", "New Arizona construction"],
    faqs: [
      { question: "Does Solar Gard film qualify for LEED credits?", answer: "Yes. Solar Gard films are NFRC-certified and Saint-Gobain provides full documentation for LEED daylight and energy credit submissions. We supply the required SHGC and VLT data sheets for GC and architect specifications on Arizona commercial projects." },
      { question: "What Solar Gard series do you install in Phoenix?", answer: "We primarily install the Solar Gard Panorama spectrally selective series for commercial perimeters and the Quantum nano-ceramic series for high-solar-load facades. Both carry full NFRC certification and qualify for COMcheck compliance documentation." },
      { question: "Is Solar Gard suitable for large commercial buildings in Arizona?", answer: "Yes — Solar Gard is our primary specification for large commercial perimeters requiring consistent SHGC performance across hundreds of windows. The Saint-Gobain backing means full NFRC certification across the product line, which is critical for general contractor and architect specifications on new Arizona construction." }
    ]
  },
  {
    name: "Avery Dennison / Hanita",
    slug: "avery-dennison",
    category: "Major Manufacturers",
    description: "Global materials science company with Hanita Coatings. Offers specialty, graphic, and architectural films.",
    url: "https://graphics.averydennison.com",
    relatedFilms: ["decorative", "films/specialty-films"],
    specs: {
      heatRejection: "Variable by SKU",
      uvProtection: "High UV Defense",
      warranty: "Manufacturer Bonded",
      tech: "Specialty Polyester"
    },
    arizonaNote: "Hanita safety films are our specification for blast mitigation and high-security government projects. Avery Dennison backing provides the supply chain stability and documentation required for government procurement. We deployed Hanita-specification films for State of Arizona facilities requiring documented safety performance.",
    bestFor: ["Government facilities", "Blast mitigation", "Documented safety compliance", "High-security commercial"],
    filmSeries: [
      { name: "Hanita Safety Shield Series", description: "8-mil and 12-mil safety films. Tested to blast mitigation specifications for government and institutional use." },
      { name: "Hanita Solar Series", description: "Commercial solar control with safety film hybrid options for dual-purpose installations." }
    ],
    faqs: [
      { question: "Are Hanita films GSA compliant?", answer: "Hanita safety films are tested to GSA and DOD blast mitigation specifications. We provide the full documentation package required for government procurement and facility compliance submissions." }
    ]
  },
  {
    name: "XPEL",
    slug: "xpel",
    category: "Major Manufacturers",
    description: "Leading brand known for paint protection film (PPF) and high-performance automotive tints.",
    url: "https://www.xpel.com",
    relatedFilms: ["safety"],
    specs: {
      heatRejection: "Up to 98% IR",
      uvProtection: "99.9% Blockage",
      warranty: "Transferable Lifetime",
      tech: "Nano-Ceramic"
    },
    arizonaNote: "XPEL ceramic films are our primary specification for high-performance automotive crossover installs and luxury residential where signal transparency is non-negotiable. The nano-ceramic construction handles Arizona UV index 11 conditions without signal interference on newer smart-home systems.",
    bestFor: ["Luxury residential", "Signal-transparent installs", "HOA appearance compliance", "New construction"],
    filmSeries: [
      { name: "XPEL PRIME Series", description: "Nano-ceramic residential. High clarity, non-reflective, lifetime warranty." },
      { name: "XPEL VISION Series", description: "Commercial solar control with NFRC documentation for compliance projects." }
    ],
    faqs: [
      { question: "Does XPEL film qualify for SRP or APS rebates?", answer: "Select XPEL VISION series films with qualifying SHGC ratings meet rebate program requirements. We provide the required NFRC data sheets during your free estimate." }
    ]
  },
  {
    name: "Madico",
    slug: "madico",
    category: "Major Manufacturers",
    description: "Established manufacturer with films for automotive, architectural, and safety applications.",
    url: "https://madico.com",
    relatedFilms: ["safety", "residential"],
    specs: {
      heatRejection: "Premium Solar Block",
      uvProtection: "99% Blockage",
      warranty: "Lifetime Residential",
      tech: "Sputtered Metal/Dielectric"
    },
    arizonaNote: "Madico supplies both our solar control and decorative film lines. The Sunscape ceramic series handles Arizona heat loads effectively, while the Madico decorative collection — including rice paper, rain glass, and geometric patterns — is what we specify for commercial tenant improvements and HIPAA-compliant medical privacy installations.",
    bestFor: ["Commercial solar control", "Medical and office privacy", "Tenant improvement projects", "Pattern-specific decorative installs"],
    filmSeries: [
      { name: "Madico Sunscape Series", description: "Commercial ceramic solar control. Multiple SHGC ratings for COMcheck compliance." },
      { name: "Madico Decorative Series", description: "Architectural privacy films. Rice paper, rain glass, geometric patterns for commercial interiors." }
    ],
    faqs: [
      { question: "Does Madico film qualify for SRP or APS rebates?", answer: "Select Madico Sunscape series films with qualifying SHGC ratings meet SRP Business Solutions and APS rebate program requirements. We provide the NFRC data sheets required for rebate applications during your free estimate." },
      { question: "What Madico films do you install in Phoenix and Scottsdale?", answer: "We install the Madico Sunscape ceramic series for commercial solar control and the Madico decorative series for tenant improvement and medical privacy applications. Both lines are available for residential and commercial projects across the Phoenix metro." },
      { question: "Is Madico window film durable in Arizona's extreme heat?", answer: "Yes. Madico uses sputtered metal and dielectric construction that handles Arizona's 115°F heat loads without delamination. The Sunscape ceramic series is specifically rated for high-solar-load climates and carries a lifetime residential warranty." }
    ]
  },
  {
    name: "Hüper Optik",
    slug: "huper-optik",
    category: "Automotive",
    description: "High-end multi-layer ceramic window films with excellent heat rejection and low reflectivity.",
    url: "https://www.huperoptikusa.com",
    relatedFilms: ["energy-saving"],
    specs: {
      heatRejection: "Up to 98% IR",
      uvProtection: "99.9% Blockage",
      warranty: "Residential Lifetime",
      tech: "Patented Multi-Ceramic"
    },
    arizonaNote: "Hüper Optik patented ceramic technology was developed specifically for high solar load climates. The multi-ceramic construction provides up to 98% IR rejection while maintaining exceptionally low interior reflectivity — critical for North Scottsdale and Paradise Valley properties where view preservation is non-negotiable.",
    bestFor: ["Luxury residential", "High-clarity applications", "North Scottsdale estates", "View-preservation priority"],
    filmSeries: [
      { name: "Hüper Optik Ceramic Series", description: "Patented multi-ceramic. 98% IR rejection. Near-invisible from exterior." },
      { name: "Hüper Optik Dual Reflective", description: "Daytime privacy with outward reflectivity. Maintains dark exterior appearance." }
    ],
    faqs: [
      { question: "What makes Hüper Optik different from other ceramic films?", answer: "Hüper Optik holds a patent on their multi-ceramic construction process, which layers ceramic particles at the molecular level rather than coating the surface. This delivers more consistent heat rejection and longer durability in extreme heat climates like Arizona." },
      { question: "Is Hüper Optik worth the premium cost in Arizona?", answer: "For south and west-facing windows in luxury homes, yes. The combination of 98% IR rejection and low interior reflectivity is unmatched in the residential market. Most Paradise Valley and North Scottsdale clients specify Hüper Optik after seeing the clarity difference." },
      { question: "Does Hüper Optik film work on dual-pane windows in Arizona?", answer: "Yes. We assess your glass type before installation and specify the correct Hüper Optik series for dual-pane applications. The multi-ceramic technology produces minimal thermal stress — critical for Arizona dual-pane windows exposed to extreme heat differentials." }
    ]
  },
  {
    name: "Johnson Window Films",
    slug: "johnson",
    category: "Automotive",
    description: "Veteran manufacturer offering films for both vehicles and buildings, including InsulatIR Nano Ceramic line.",
    url: "https://www.johnsonwindowfilms.com",
    relatedFilms: ["residential"],
    specs: {
      heatRejection: "Varies (InsulatIR High)",
      uvProtection: "99% Blockage",
      warranty: "Limited Lifetime",
      tech: "Ceramic / Dual-Ply"
    }
  },
  {
    name: "Geoshield",
    slug: "geoshield",
    category: "Automotive",
    description: "Known for its ceramic films like Apex Ultra series, offering high heat rejection and clarity.",
    url: "https://geoshieldusa.com",
    relatedFilms: ["energy-saving"],
    specs: {
      heatRejection: "Up to 96% IR",
      uvProtection: "99% Blockage",
      warranty: "Lifetime Performance",
      tech: "Apex Nano-Ceramic"
    }
  },
  {
    name: "Rayno",
    slug: "rayno",
    category: "Automotive",
    description: "Innovative brand using ceramic and sputter technology for advanced performance films.",
    url: "https://rayno.com",
    relatedFilms: ["films/specialty-films"],
    specs: {
      heatRejection: "Carbon-Ceramic Mix",
      uvProtection: "99.9% Blockage",
      warranty: "Lifetime",
      tech: "Phantom Nano-Carbon"
    },
    arizonaNote: "Rayno ceramic films have become a strong specification choice for residential projects where clients want the performance of premium brands at a more accessible price point. The Phantom series delivers competitive IR rejection for Arizona heat loads and is our recommendation for budget-conscious North Phoenix homeowners who still want ceramic technology.",
    bestFor: ["Budget-conscious ceramic", "North Phoenix residential", "Value performance ratio", "First-time film installs"],
    filmSeries: [
      { name: "Rayno Phantom Series", description: "Ceramic solar control. Competitive IR rejection at accessible price point." },
      { name: "Rayno S9 Series", description: "Premium ceramic residential. Near-clear with high heat rejection for HOA neighborhoods." }
    ],
    faqs: [
      { question: "How does Rayno compare to 3M or Hüper Optik?", answer: "Rayno delivers strong ceramic performance at a lower price point than premium brands. For most Arizona residential applications the difference in heat rejection is minimal. We recommend Rayno for homeowners prioritizing performance value, and 3M or Hüper Optik for luxury installs where the warranty and brand documentation carry additional value." }
    ]
  },
  {
    name: "Global Window Films",
    slug: "global",
    category: "Automotive",
    description: "Reliable and budget-friendly films for both installers and DIY consumers.",
    url: "https://globalwindowfilms.com",
    relatedFilms: ["residential"],
    specs: {
      heatRejection: "High Heat Rejection",
      uvProtection: "99% Blockage",
      warranty: "Limited Lifetime",
      tech: "Non-Reflective Dyed/Metal"
    },
    arizonaNote: "Global Window Films provides reliable solar control for mid-tier commercial and residential applications. We specify Global for projects where performance requirements are standard and budget efficiency is the primary driver.",
    bestFor: ["Mid-tier commercial", "Standard residential", "Budget-efficient installs"],
    filmSeries: [
      { name: "Global Solar Series", description: "Standard solar control films for commercial and residential applications." }
    ],
    faqs: []
  },
  {
    name: "TERMINAX",
    slug: "terminax",
    category: "Automotive",
    description: "Newer entrant offering cutting-edge ceramic window tint technology.",
    url: "#",
    relatedFilms: ["films/specialty-films"],
    arizonaNote: "TERMINAX films are specified for temperature-sensitive commercial environments where precise solar heat gain control is required — particularly relevant for Arizona cold storage facilities and temperature-controlled retail environments.",
    bestFor: ["Temperature-sensitive commercial", "Cold storage facilities", "Precise solar control"],
    filmSeries: [
      { name: "TERMINAX Solar Control Series", description: "Precision solar control for temperature-sensitive commercial environments." }
    ],
    faqs: []
  },
  {
    name: "Motoshield Pro",
    slug: "motoshield",
    category: "Automotive",
    description: "Specializes in nano-ceramic window tints for cars, SUVs, and trucks.",
    url: "https://motoshieldpro.com",
    relatedFilms: ["films/specialty-films"],
    arizonaNote: "Motoshield Pro ceramic films are specified for residential clients who want ceramic technology at a competitive price point. Reliable heat rejection for standard Phoenix residential installs.",
    bestFor: ["Competitive ceramic pricing", "Standard residential installs", "Value ceramic tier"],
    filmSeries: [
      { name: "Motoshield Pro Ceramic Series", description: "Ceramic residential film at competitive price point." }
    ],
    faqs: []
  },
  {
    name: "Gila",
    slug: "gila",
    category: "Architectural & Residential",
    description: "Popular DIY brand offering heat, glare, and privacy films for homes.",
    url: "https://gila.com",
    relatedFilms: ["residential", "decorative"],
    arizonaNote: "Gila films are specified for straightforward residential solar control applications where performance requirements are standard and budget is the primary consideration.",
    bestFor: ["Budget residential", "Standard solar control", "Entry-level installs"],
    filmSeries: [
      { name: "Gila Solar Series", description: "Entry-level solar control film for standard residential applications." }
    ],
    faqs: []
  },
  {
    name: "Artscape",
    slug: "artscape",
    category: "Architectural & Residential",
    description: "Decorative films that mimic etched and stained glass without adhesives.",
    url: "https://artscape-inc.com",
    relatedFilms: ["decorative"],
    arizonaNote: "Artscape decorative films are specified for residential bathroom and entryway applications where a stained-glass or specialty glass aesthetic is desired without custom glass cost. Popular with North Scottsdale and Paradise Valley homeowners renovating entryways and sidelights.",
    bestFor: ["Residential entryways", "Bathroom windows", "Stained glass aesthetics", "Sidelight privacy"],
    filmSeries: [
      { name: "Artscape Decorative Series", description: "Residential decorative film. Stained glass, etched, and specialty patterns for entryways and bathrooms." }
    ],
    faqs: []
  },
  {
    name: "EnerLogic",
    slug: "enerlogic",
    category: "Architectural & Residential",
    description: "EnerLogic window film is a dual-season low-e film engineered for year-round energy savings — blocking solar heat gain in summer and retaining interior heat in winter. The only window film technology that delivers measurable performance in both Arizona's 115°F summers and high-elevation winters.",
    url: "https://enerlogicwindowfilms.com",
    relatedFilms: ["energy-saving"],
    specs: {
      heatRejection: "Low-E Insulation",
      uvProtection: "99% Blockage",
      warranty: "Energy Performance Bond",
      tech: "Year-Round Low-E"
    },
    arizonaNote: "EnerLogic is our specification for Arizona properties where dual-season performance matters. For Phoenix and Scottsdale homes, EnerLogic 35 reduces summer cooling loads by blocking solar heat gain while the low-e coating retains interior heat on winter nights — when Phoenix temperatures drop to 35–45°F. For Flagstaff, Prescott, Sedona, and other high-elevation Arizona properties where heating costs are significant, EnerLogic delivers the strongest year-round ROI of any window film we install. Authorized Arizona installer — free estimate at (480) 788-1591.",
    bestFor: ["Year-round energy savings", "High-elevation Arizona — Flagstaff, Prescott, Sedona", "Phoenix homes with high heating bills", "Dual-season performance", "Low-e glass compatible installs", "SRP and APS rebate-qualifying projects"],
    filmSeries: [
      { name: "EnerLogic 35", description: "Dual-season low-e film with 35% VLT. Reduces solar heat gain in Arizona summers, retains interior heat in winter nights. Primary specification for Phoenix and Scottsdale residential." },
      { name: "EnerLogic 20", description: "Higher heat rejection version — 20% VLT. South and west-facing glass in extreme heat zones. Maximum summer performance with winter heat retention." },
      { name: "EnerLogic 40", description: "Higher clarity option — 40% VLT. Ideal for north-facing glass and properties prioritizing natural light alongside dual-season energy performance." }
    ],
    faqs: [
      { question: "Does EnerLogic film work in Arizona winters?", answer: "Yes — EnerLogic low-e technology reflects interior heat back into the room in winter, reducing heating costs. For Phoenix this benefit is meaningful on nights when temperatures drop to 35–45°F. For Flagstaff, Prescott, and Sedona where winter heating costs are significant, EnerLogic delivers measurable year-round ROI that standard solar films cannot match." },
      { question: "What is the difference between EnerLogic and standard solar film?", answer: "Standard solar films reject summer heat only — they have no winter performance benefit. EnerLogic's low-e coating provides dual-season performance: blocking solar heat gain in summer and reflecting interior heat back into the room in winter. For Arizona properties at elevation or with high heating bills, this dual-season benefit significantly improves the ROI calculation." },
      { question: "Does EnerLogic qualify for SRP or APS energy rebates in Arizona?", answer: "EnerLogic films may qualify for SRP Business Solutions and APS energy efficiency rebate programs depending on the specific film's SHGC rating and your property type. We review qualifying films and provide the NFRC data sheets needed for rebate applications during your free estimate. Call (480) 788-1591." },
      { question: "Is EnerLogic worth it for a Phoenix home?", answer: "Yes — especially for homes with high winter heating bills or west and south-facing glass. EnerLogic 35 blocks summer solar heat like a standard ceramic film while adding low-e winter performance. For most Phoenix homes the dual-season benefit adds 15–25% to the overall energy savings ROI compared to solar-only film." },
      { question: "Where is EnerLogic window film installed in Arizona?", answer: "Arizona House of Film installs EnerLogic window film throughout Phoenix, Scottsdale, Tempe, Chandler, Gilbert, and the full Arizona metro including high-elevation communities like Flagstaff, Prescott, and Sedona. Licensed ROC #314088. Free estimates — call (480) 788-1591." }
    ]
  },
  {
    name: "Concord Window Film",
    slug: "concord",
    category: "Architectural & Residential",
    description: "Direct-to-consumer brand offering ComforTech ceramic and solar control films.",
    url: "https://www.concordwindowfilm.com",
    relatedFilms: ["residential", "energy-saving"],
    arizonaNote: "Concord films provide reliable mid-tier solar control for residential and light commercial applications across the Phoenix metro.",
    bestFor: ["Mid-tier residential", "Light commercial", "Phoenix metro installs"],
    filmSeries: [
      { name: "Concord Solar Series", description: "Mid-tier solar control film for residential and light commercial." }
    ],
    faqs: []
  },
  {
    name: "BuyDecorativeFilm (BDF)",
    slug: "bdf",
    category: "Architectural & Residential",
    description: "Offers decorative films such as one-way privacy and sun control tints.",
    url: "https://www.buydecorativefilm.com",
    relatedFilms: ["decorative", "residential"],
    arizonaNote: "BDF films provide cost-effective decorative and privacy solutions for residential applications. We specify BDF for budget-conscious homeowners who need functional privacy without premium brand pricing.",
    bestFor: ["Budget residential privacy", "DIY-adjacent installs", "Cost-sensitive decorative projects"],
    filmSeries: [
      { name: "BDF Privacy Series", description: "Frosted and privacy films for residential bathroom and office applications." }
    ],
    faqs: []
  },
  {
    name: "Rockrose",
    slug: "rockrose",
    category: "Architectural & Residential",
    description: "High-performance films under the Ultra Vista brand for UV and heat blocking.",
    url: "#",
    relatedFilms: ["residential", "energy-saving"],
    arizonaNote: "Rockrose films are specified for specialty commercial applications requiring unique performance characteristics not covered by our primary brand lines.",
    bestFor: ["Specialty commercial", "Unique performance requirements"],
    filmSeries: [
      { name: "Rockrose Specialty Series", description: "Specialty window films for unique commercial applications." }
    ],
    faqs: []
  },
  {
    name: "V-KOOL",
    slug: "vkool",
    category: "Architectural & Residential",
    description: "Pioneering brand focusing on high-performance architectural window films.",
    url: "https://www.vkool.com",
    relatedFilms: ["residential", "energy-saving"],
    specs: {
      heatRejection: "Up to 94% IR",
      uvProtection: "99% Blockage",
      warranty: "Residential Lifetime",
      tech: "Sputtered Precious Metal"
    },
    arizonaNote: "V-KOOL multi-layer sputtered films deliver some of the highest heat rejection rates available in a non-reflective format. We specify V-KOOL for Paradise Valley and Fountain Hills estates where maximum heat performance and minimum exterior change are both required. The sputtered metal construction is distinct from ceramic — it performs differently on high-solar-gain glass orientations.",
    bestFor: ["Maximum heat rejection", "Luxury estates", "South-facing glass", "Minimal exterior appearance change"],
    filmSeries: [
      { name: "V-KOOL 40", description: "Flagship sputtered series. 79% heat rejection with near-clear appearance." },
      { name: "V-KOOL 70", description: "Higher VLT option for north-facing or interior glass applications." }
    ],
    faqs: [
      { question: "Is V-KOOL ceramic or metallic film?", answer: "V-KOOL uses a multi-layer sputtered construction — not ceramic. Sputtered films deposit microscopic metal layers onto the film surface at the molecular level, creating superior IR rejection performance. Unlike older metallic films, V-KOOL sputtered construction does not cause significant signal interference." }
    ]
  },
  {
    name: "Decorative Films, LLC",
    slug: "decorative-films-llc",
    category: "Architectural & Residential",
    description: "Wide variety of frosted, etched, and patterned decorative films.",
    url: "https://www.decorativefilm.com",
    relatedFilms: ["decorative"],
    arizonaNote: "Decorative Films LLC provides the widest pattern catalog in our decorative film library. We specify their collection for custom residential and commercial projects where standard frosted patterns are insufficient and a specific aesthetic is required — from Art Deco geometric to natural textures.",
    bestFor: ["Custom pattern projects", "Residential decorative", "Wide pattern selection", "Aesthetic-driven installs"],
    filmSeries: [
      { name: "DFL Architectural Collection", description: "Extensive pattern catalog. Geometric, natural, textured, and gradient films for residential and commercial." }
    ],
    faqs: []
  },
  {
    name: "Smart Glass Technologies",
    slug: "smart-glass",
    category: "Architectural & Residential",
    description: "Producers of switchable smart films that turn from opaque to transparent.",
    url: "https://smartglasstech.us",
    relatedFilms: ["films/specialty-films", "residential"],
    arizonaNote: "Smart Glass Technologies safety films are specified for applications combining security performance with solar control — particularly for Arizona retail and medical facilities where both theft deterrence and energy efficiency are required in a single product.",
    bestFor: ["Retail security + solar combo", "Medical facilities", "Dual-purpose installs"],
    filmSeries: [
      { name: "Smart Glass Security Solar Series", description: "Combination security and solar control film. Smash-and-grab deterrence with heat rejection." }
    ],
    faqs: []
  },
  {
    name: "Armor Glass International",
    slug: "armor-glass",
    category: "Architectural & Residential",
    description: "Specializes in security and safety films for homes and buildings.",
    url: "https://armorglass.com",
    relatedFilms: ["safety", "residential"],
    specs: {
      heatRejection: "Safety Focused",
      uvProtection: "99% Blockage",
      warranty: "System Failure Bonded",
      tech: "Multi-Ply Security"
    },
    arizonaNote: "We deploy Armor Glass films for high-security commercial and residential applications where access denial is the primary objective. The multi-ply construction holds shattered glass intact through sustained impact — the same performance standard we applied for U.S. Navy Recruitment Centers and high-value retail clients including Skechers USA.",
    bestFor: ["Smash-and-grab deterrence", "School safety", "Government facilities", "Dispensaries and high-theft retail"],
    filmSeries: [
      { name: "Armor Glass 8-mil Security", description: "Standard commercial security. Holds glass intact through smash-and-grab attempts. 60+ second forced entry delay." },
      { name: "Armor Glass 12-mil Heavy Duty", description: "High-security specification. Meets blast mitigation requirements for government and educational facilities." }
    ],
    faqs: [
      { question: "How does Armor Glass film stop break-ins?", answer: "Armor Glass film does not prevent glass from breaking — it holds the broken pieces bonded together. A standard smash-and-grab takes 10 seconds on unprotected glass. With 8-mil Armor Glass film, forced entry takes 60-120 seconds — long enough for most criminals to abandon the attempt." },
      { question: "Can Armor Glass film be combined with wet-glaze anchoring?", answer: "Yes — and we recommend it for high-security installations. Wet-glaze anchoring (Dow 995 structural silicone) bonds the film and glass directly to the frame. Even if the glass shatters completely, the pane stays in the opening and denies entry." }
    ]
  },
  {
    name: "HanitaTek",
    slug: "hanitatek",
    category: "Architectural & Residential",
    description: "Former independent manufacturer, now part of Avery Dennison, known for SolarZone film series.",
    url: "#",
    relatedFilms: ["energy-saving", "safety"],
    arizonaNote: "HanitaTek provides high-performance safety films for commercial security applications requiring documented performance.",
    bestFor: ["Commercial security", "Documented performance specs"],
    filmSeries: [
      { name: "HanitaTek Safety Series", description: "Commercial safety film with documented performance specifications." }
    ],
    faqs: []
  },
  {
    name: "Lintec",
    slug: "lintec",
    category: "Specialty / Niche",
    description: "Japanese manufacturer producing advanced polyester and architectural films.",
    url: "https://www.lintecusa.com",
    relatedFilms: ["films/specialty-films"],
    arizonaNote: "Lintec safety and security films are specified for institutional and government applications requiring documented performance data. The Japanese manufacturing standard delivers consistent mil thickness and adhesion performance critical for high-specification security installs.",
    bestFor: ["Institutional security", "Government facilities", "Consistent specification compliance"],
    filmSeries: [
      { name: "Lintec Safety Series", description: "Japanese-manufactured safety film. Consistent mil thickness for high-specification security installs." }
    ],
    faqs: []
  },
  {
    name: "Garware Polyester",
    slug: "garware",
    category: "Specialty / Niche",
    description: "Indian manufacturer exporting polyester and solar control window films.",
    url: "https://www.garwarehitechfilms.com",
    relatedFilms: ["films/specialty-films"],
    arizonaNote: "Garware is our value specification for large commercial perimeters where square footage volume makes premium brand pricing prohibitive. For warehouse facilities, distribution centers, and large retail footprints, Garware delivers reliable solar control performance at a cost structure that makes large-scale deployment financially viable.",
    bestFor: ["Large warehouse installs", "Distribution centers", "High square footage commercial", "Cost-sensitive commercial"],
    filmSeries: [
      { name: "Garware Solar Control Series", description: "Commercial solar film. Reliable heat rejection for large-perimeter industrial and retail installs." }
    ],
    faqs: []
  },
  {
    name: "Reflek Technologies",
    slug: "reflek",
    category: "Specialty / Niche",
    description: "American producer specializing in sputter-coated advanced window films.",
    url: "https://reflektechnologies.com",
    relatedFilms: ["films/specialty-films"],
    arizonaNote: "Reflek Technologies films are specified for high-reflectivity commercial applications where maximum solar rejection through reflective film is acceptable or desirable.",
    bestFor: ["Maximum reflective solar rejection", "Commercial heat control", "High-reflectivity applications"],
    filmSeries: [
      { name: "Reflek Commercial Series", description: "High-reflectivity commercial solar control film." }
    ],
    faqs: []
  },
  {
    name: "Contra Vision",
    slug: "contra-vision",
    category: "Specialty / Niche",
    description: "Leader in perforated and one-way films for signage and advertising.",
    url: "https://www.contravision.com",
    relatedFilms: ["films/specialty-films", "decorative"],
    arizonaNote: "Contra Vision perforated vinyl is our specification for Arizona storefront windows where one-way visibility and full-color branding are both required. The perforation pattern allows outward visibility from inside while displaying full-color graphics to pedestrians and traffic outside — used for high-visibility retail branding in Scottsdale and Phoenix.",
    bestFor: ["Storefront branding", "One-way visibility graphics", "High-traffic retail locations", "Full-color exterior graphics"],
    filmSeries: [
      { name: "Contra Vision Performance Series", description: "Perforated vinyl for one-way visibility graphics. Full-color exterior branding with interior see-through." }
    ],
    faqs: []
  },
  {
    name: "Vsmile",
    slug: "vsmile",
    category: "Specialty / Niche",
    description: "Sells static-cling privacy and sun-blocking films for DIY consumers.",
    url: "#",
    relatedFilms: ["decorative", "residential"],
    arizonaNote: "Vsmile films are specified for value-tier residential and light commercial applications.",
    bestFor: ["Value residential", "Light commercial", "Entry-level installs"],
    filmSeries: [
      { name: "Vsmile Solar Series", description: "Value-tier solar control for residential and light commercial." }
    ],
    faqs: []
  },
  {
    name: "Flexfilm",
    slug: "flexfilm",
    category: "Specialty / Niche",
    description: "Offers specialized architectural tints like the Dualflex series for advanced solar control.",
    url: "https://flexfilmstore.com",
    relatedFilms: ["energy-saving", "films/specialty-films"],
    arizonaNote: "Flexfilm provides flexible film solutions for non-standard glass applications including curved surfaces and specialty installations where standard rigid films are impractical.",
    bestFor: ["Curved glass", "Non-standard installations", "Specialty applications"],
    filmSeries: [
      { name: "Flexfilm Specialty Series", description: "Flexible film for curved and non-standard glass surfaces." }
    ],
    faqs: []
  },
  {
    name: "Solyx",
    slug: "solyx",
    category: "Architectural & Residential",
    description: "Solyx decorative and privacy window films — 600+ patterns for commercial tenant improvements, medical facilities, office partitions, and residential applications across Phoenix and Scottsdale.",
    url: "https://www.solyxfilms.com/",
    relatedFilms: ["decorative", "privacy", "specialty"],
    specs: {
      heatRejection: "Up to 55%",
      uvProtection: "99%",
      tech: "Optically Clear Adhesive / Pressure Sensitive",
      warranty: "Manufacturer backed — varies by series"
    },
    arizonaNote: "Solyx decorative films are our primary specification for commercial tenant improvement projects in Phoenix and Scottsdale requiring specific pattern aesthetics. The 600+ pattern Solyx catalog includes rice paper, bamboo, rain glass, linen, and geometric patterns used extensively in office, medical, and hospitality installations. Authorized Arizona installer.",
    bestFor: ["Office tenant improvements", "Medical privacy partitions", "Pattern-specific design projects", "Hospitality installs", "Bathroom privacy", "Conference room glass", "Retail storefronts"],
    filmSeries: [
      { name: "Solyx Architectural Series", description: "600+ premium decorative patterns. Rice paper, bamboo, rain glass, linen, geometric, and gradient films for commercial interiors and residential applications." },
      { name: "Solyx Privacy Series", description: "Frosted and translucent films for HIPAA-compliant medical office privacy, exam room glass, and clinical partition applications." },
      { name: "Solyx Solar Series", description: "Solar control films combining heat rejection with decorative aesthetics. Dual-function for Arizona commercial properties requiring both privacy and energy performance." }
    ],
    faqs: [
      { question: "Can Solyx decorative film be used in medical facilities?", answer: "Yes. Solyx privacy films are used for HIPAA-compliant exam room frosting, patient waiting area glass, and clinical partition privacy across Phoenix and Scottsdale. The films are cleanroom-safe, moisture-resistant, and removable without damaging glass." },
      { question: "How many Solyx patterns are available in Arizona?", answer: "Arizona House of Film installs from the full Solyx catalog of 600+ patterns including rice paper, bamboo, rain glass, linen, gradient, geometric, and frosted designs. We carry pattern samples for on-site review during your free estimate." },
      { question: "Is Solyx film suitable for Arizona heat?", answer: "Yes. Solyx films are pressure-sensitive, optically clear adhesive films engineered for high-temperature climates. They do not bubble, peel, or delaminate under Arizona's 115°F summer conditions when installed correctly on clean, prepared glass." },
      { question: "What is the difference between Solyx and 3M decorative film?", answer: "Solyx specializes in architectural decorative and privacy films with the widest pattern catalog in the industry — 600+ designs. 3M offers a more limited decorative line but stronger solar and security film options. For pattern-specific tenant improvements and privacy applications, Solyx is our primary specification." }
    ]
  },
  {
    name: "SimGlas",
    slug: "simglas",
    category: "Architectural & Residential",
    description: "High-quality films that simulate the look of real cut, etched, and textured glass.",
    url: "#",
    relatedFilms: ["decorative", "privacy"],
    arizonaNote: "SimGlas specialty films are specified for applications requiring simulated glass aesthetics — particularly decorative commercial installs where specialty glass appearance is desired without replacement cost.",
    bestFor: ["Simulated specialty glass", "Commercial decorative", "Glass-appearance applications"],
    filmSeries: [
      { name: "SimGlas Decorative Series", description: "Specialty decorative film simulating high-end glass aesthetics." }
    ],
    faqs: []
  },
  {
    name: "Panorama",
    slug: "panorama",
    category: "Commercial & Architectural",
    description: "Solar Gard's flagship spectrally selective architectural film line — high visible light transmission with aggressive solar heat gain rejection for commercial glazing.",
    url: "https://www.solargard.com/architectural-films/panorama/",
    relatedFilms: ["commercial", "energy-saving", "solar"],
    arizonaNote: "Panorama is our go-to spectrally selective film for Phoenix and Scottsdale commercial perimeters where tenants demand maximum daylight without the heat. Carries full NFRC certification for COMcheck compliance and SRP/APS energy rebate documentation.",
    bestFor: ["Commercial perimeter glazing", "High-VLT solar control", "NFRC-rated installs", "Energy rebate compliance"],
    filmSeries: [
      { name: "Panorama Solar Bronze", description: "Bronze-tinted spectrally selective film for hot Arizona facades requiring aggressive heat rejection." },
      { name: "Panorama Solar Neutral", description: "Neutral-tone spectrally selective film preserving exterior glass aesthetics on Class A office buildings." },
      { name: "Panorama Sentinel", description: "High-performance spectrally selective film engineered for extreme solar loads on south- and west-facing commercial glass." }
    ],
    faqs: [
      { question: "Is Panorama window film made by Solar Gard?", answer: "Yes — Panorama is Solar Gard's premium spectrally selective architectural film line, manufactured by Saint-Gobain Performance Plastics. Arizona House of Film is an authorized Solar Gard installer in Phoenix and Scottsdale." },
      { question: "Does Panorama film qualify for SRP and APS energy rebates?", answer: "Yes. Panorama films carry NFRC certification with documented SHGC and U-factor values that meet SRP and APS commercial energy rebate requirements. We provide all compliance documentation with every install." }
    ]
  }
];
