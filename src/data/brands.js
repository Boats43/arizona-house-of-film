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
    }
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
    }
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
    }
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
      { question: "Does Madico film qualify for SRP or APS rebates?", answer: "Select Madico Sunscape series films with qualifying SHGC ratings meet SRP Business Solutions and APS rebate program requirements. We provide the NFRC data sheets required for rebate applications." }
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
      { question: "Is Hüper Optik worth the premium cost in Arizona?", answer: "For south and west-facing windows in luxury homes, yes. The combination of 98% IR rejection and low interior reflectivity is unmatched in the residential market. Most Paradise Valley and North Scottsdale clients specify Hüper Optik after seeing the clarity difference." }
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
    }
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
    }
  },
  {
    name: "TERMINAX",
    slug: "terminax",
    category: "Automotive",
    description: "Newer entrant offering cutting-edge ceramic window tint technology.",
    url: "#",
    relatedFilms: ["films/specialty-films"]
  },
  {
    name: "Motoshield Pro",
    slug: "motoshield",
    category: "Automotive",
    description: "Specializes in nano-ceramic window tints for cars, SUVs, and trucks.",
    url: "https://motoshieldpro.com",
    relatedFilms: ["films/specialty-films"]
  },
  {
    name: "Gila",
    slug: "gila",
    category: "Architectural & Residential",
    description: "Popular DIY brand offering heat, glare, and privacy films for homes.",
    url: "https://gila.com",
    relatedFilms: ["residential", "decorative"]
  },
  {
    name: "Artscape",
    slug: "artscape",
    category: "Architectural & Residential",
    description: "Decorative films that mimic etched and stained glass without adhesives.",
    url: "https://artscape-inc.com",
    relatedFilms: ["decorative"]
  },
  {
    name: "EnerLogic",
    slug: "enerlogic",
    category: "Architectural & Residential",
    description: "High-performance, energy-saving window films designed for year-round insulation.",
    url: "https://enerlogicwindowfilms.com",
    relatedFilms: ["energy-saving"],
    specs: {
      heatRejection: "Low-E Insulation",
      uvProtection: "99% Blockage",
      warranty: "Energy Performance Bond",
      tech: "Year-Round Low-E"
    }
  },
  {
    name: "Concord Window Film",
    slug: "concord",
    category: "Architectural & Residential",
    description: "Direct-to-consumer brand offering ComforTech ceramic and solar control films.",
    url: "https://www.concordwindowfilm.com",
    relatedFilms: ["residential", "energy-saving"]
  },
  {
    name: "BuyDecorativeFilm (BDF)",
    slug: "bdf",
    category: "Architectural & Residential",
    description: "Offers decorative films such as one-way privacy and sun control tints.",
    url: "https://www.buydecorativefilm.com",
    relatedFilms: ["decorative", "residential"]
  },
  {
    name: "Rockrose",
    slug: "rockrose",
    category: "Architectural & Residential",
    description: "High-performance films under the Ultra Vista brand for UV and heat blocking.",
    url: "#",
    relatedFilms: ["residential", "energy-saving"]
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
    }
  },
  {
    name: "Decorative Films, LLC",
    slug: "decorative-films-llc",
    category: "Architectural & Residential",
    description: "Wide variety of frosted, etched, and patterned decorative films.",
    url: "https://www.decorativefilm.com",
    relatedFilms: ["decorative"]
  },
  {
    name: "Smart Glass Technologies",
    slug: "smart-glass",
    category: "Architectural & Residential",
    description: "Producers of switchable smart films that turn from opaque to transparent.",
    url: "https://smartglasstech.us",
    relatedFilms: ["films/specialty-films", "residential"]
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
    relatedFilms: ["energy-saving", "safety"]
  },
  {
    name: "Lintec",
    slug: "lintec",
    category: "Specialty / Niche",
    description: "Japanese manufacturer producing advanced polyester and architectural films.",
    url: "https://www.lintecusa.com",
    relatedFilms: ["films/specialty-films"]
  },
  {
    name: "Garware Polyester",
    slug: "garware",
    category: "Specialty / Niche",
    description: "Indian manufacturer exporting polyester and solar control window films.",
    url: "https://www.garwarehitechfilms.com",
    relatedFilms: ["films/specialty-films"]
  },
  {
    name: "Reflek Technologies",
    slug: "reflek",
    category: "Specialty / Niche",
    description: "American producer specializing in sputter-coated advanced window films.",
    url: "https://reflektechnologies.com",
    relatedFilms: ["films/specialty-films"]
  },
  {
    name: "Contra Vision",
    slug: "contra-vision",
    category: "Specialty / Niche",
    description: "Leader in perforated and one-way films for signage and advertising.",
    url: "https://www.contravision.com",
    relatedFilms: ["films/specialty-films", "decorative"]
  },
  {
    name: "Vsmile",
    slug: "vsmile",
    category: "Specialty / Niche",
    description: "Sells static-cling privacy and sun-blocking films for DIY consumers.",
    url: "#",
    relatedFilms: ["decorative", "residential"]
  },
  {
    name: "Flexfilm",
    slug: "flexfilm",
    category: "Specialty / Niche",
    description: "Offers specialized architectural tints like the Dualflex series for advanced solar control.",
    url: "https://flexfilmstore.com",
    relatedFilms: ["energy-saving", "films/specialty-films"]
  },
  {
    name: "Solyx",
    slug: "solyx",
    category: "Architectural & Residential",
    description: "Leading provider of decorative, privacy, and specialty window films.",
    url: "https://www.solyxfilms.com/",
    relatedFilms: ["decorative", "privacy", "specialty"]
  },
  {
    name: "SimGlas",
    slug: "simglas",
    category: "Architectural & Residential",
    description: "High-quality films that simulate the look of real cut, etched, and textured glass.",
    url: "#",
    relatedFilms: ["decorative", "privacy"]
  }
];