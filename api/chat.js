import Anthropic from '@anthropic-ai/sdk';
import { solyxProducts, solyxCategories } from '../src/data/solyxFilms.js';
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── Rate limiting (in-memory, per serverless instance) ──────────────
const rateMap = new Map();          // IP → { count, resetAt }
const imageRateMap = new Map();     // IP → { count, resetAt } — image uploads
const RATE_LIMIT  = 20;             // max requests per window
const IMAGE_RATE_LIMIT = 10;        // max image uploads per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

function isRateLimited(ip) {
  const now = Date.now();
  let entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + RATE_WINDOW };
    rateMap.set(ip, entry);
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function isImageRateLimited(ip) {
  const now = Date.now();
  let entry = imageRateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + RATE_WINDOW };
    imageRateMap.set(ip, entry);
  }
  entry.count++;
  return entry.count > IMAGE_RATE_LIMIT;
}


// Periodic cleanup so the Map doesn't grow unbounded
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateMap) {
    if (now > entry.resetAt) rateMap.delete(ip);
  }
  for (const [ip, entry] of imageRateMap) {
    if (now > entry.resetAt) imageRateMap.delete(ip);
  }
}, RATE_WINDOW);

// ── Bot / honeypot detection ────────────────────────────────────────
const BOT_PATTERNS = [
  /\bignore previous instructions\b/i,
  /\byou are now\b/i,
  /\bact as\b/i,
  /\bsystem prompt\b/i,
  /\brepeat after me\b/i,
  /\bDAN\b/,
  /\bjailbreak\b/i,
  /\bdisregard\b.*\binstructions\b/i,
];

function looksLikeBot(body) {
  const raw = JSON.stringify(body);
  // Honeypot: if a hidden field "website" is filled in, it's a bot
  if (body.website) return true;
  return BOT_PATTERNS.some(p => p.test(raw));
}

// ── Allowed origins ─────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'https://arizonahouseoffilm.com',
  'https://www.arizonahouseoffilm.com',
];
if (process.env.VERCEL_ENV !== 'production') {
  ALLOWED_ORIGINS.push('http://localhost:5173', 'http://localhost:4173');
}

const tools = [
  {
    name: "web_search",
    description: "Search the web for current information about window film products, specifications, manufacturer details, rebate programs, building codes, or any topic relevant to the customer's question. Use this when you need current pricing from manufacturers, rebate program details, product specs not in your knowledge base, or competitor comparisons.",
    input_schema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The search query"
        }
      },
      required: ["query"]
    }
  },
  {
    name: "search_films",
    description: "Search Arizona House of Film's catalog of 618+ Solyx decorative and specialty films by name, SKU, category, or description. Use when customer asks about specific film patterns, colors, or types.",
    input_schema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Film name, SKU, category or description to search for"
        }
      },
      required: ["query"]
    }
  }
];

// ── Film catalog search (618 SKUs from solyxFilms.js) ───────────────
const categoryPricing = {
  'casper-designtex': 'Specialty — free estimate required',
  'frosted-etched': 'Free estimate required',
  'stained-glass': 'Free estimate required',
  'gradient': 'Free estimate required',
  'colored-films': 'Free estimate required',
  'patterned-privacy': 'Free estimate required',
  'reflective-mirror': 'Free estimate required',
  'decorative': 'Free estimate required',
};

// Maps solyxFilms category slugs → actual site routes
const categoryRoutes = {
  'casper-designtex': '/films/casper-films',
  'frosted-etched': '/films/frosted-etched-films',
  'stained-glass': '/films/stained-glass-films',
  'gradient': '/films/gradient-films',
  'colored-films': '/films/colored-films',
  'patterned-privacy': '/films/patterned-privacy-films',
  'reflective-mirror': '/films/reflective-films',
  'decorative': '/store?category=decorative',
};

const intentMap = {
  'casper': 'casper-designtex',
  'cloaking': 'casper-designtex',
  'quantum': 'casper-designtex',
  'frosted': 'frosted-etched',
  'etched': 'frosted-etched',
  'matte': 'frosted-etched',
  'white frost': 'frosted-etched',
  'privacy': 'frosted-etched',
  'stained': 'stained-glass',
  'stained glass': 'stained-glass',
  'gradient': 'gradient',
  'ombre': 'gradient',
  'fade': 'gradient',
  'colored': 'colored-films',
  'color': 'colored-films',
  'tinted': 'colored-films',
  'patterned': 'patterned-privacy',
  'pattern': 'patterned-privacy',
  'decorative': 'decorative',
  'reflective': 'reflective-mirror',
  'mirror': 'reflective-mirror',
  'one way': 'reflective-mirror',
  'one-way': 'reflective-mirror',
  'silver': 'reflective-mirror',
  'bronze': 'reflective-mirror',
};

function searchFilms(query) {
  const q = query.toLowerCase();

  // Find category match via intent keywords
  let targetCategory = null;
  for (const [keyword, cat] of Object.entries(intentMap)) {
    if (q.includes(keyword)) {
      targetCategory = cat;
      break;
    }
  }

  // Search films by name/SKU match first
  const nameMatches = solyxProducts.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.sku.toLowerCase().includes(q)
  ).slice(0, 5);

  // Fall back to category matches
  const categoryMatches = targetCategory
    ? solyxProducts.filter(f => f.category === targetCategory).slice(0, 5)
    : [];

  const results = nameMatches.length > 0 ? nameMatches : categoryMatches;
  const categoryInfo = solyxCategories.find(c => c.slug === targetCategory);

  if (results.length === 0) {
    return {
      found: false,
      message: 'No exact match found',
      suggestion: 'Browse full catalog at arizonahouseoffilm.com/store',
    };
  }

  const resultCategory = targetCategory || results[0].category;
  const route = categoryRoutes[resultCategory] || `/store?category=${resultCategory}`;

  return {
    found: true,
    count: results.length,
    category: categoryInfo?.name || resultCategory,
    pricing: categoryPricing[results[0].category] || 'Free estimate required',
    films: results.map(f => ({
      sku: f.sku,
      name: f.name,
      category: f.category,
      link: `https://arizonahouseoffilm.com${categoryRoutes[f.category] || `/store?category=${f.category}`}`,
    })),
    categoryPage: `https://arizonahouseoffilm.com${route}`,
  };
}

const SYSTEM_PROMPT = `You are the Arizona House of Film assistant — a knowledgeable, professional representative for Arizona's premier licensed window film contractor.

COMPANY INFO:
- Arizona House of Film | ROC #314088 | Licensed, bonded, insured since 2017
- Phone: (480) 788-1591 | Email: arizonahouseoffilm@gmail.com
- Address: 7007 W Flower St, Phoenix AZ 85033
- 713+ completed projects | U.S. Navy Veteran owned
- Key clients: Coca-Cola, Frank Lloyd Wright Foundation, U.S. Navy, Grand Canyon University, AutoZone, LA Fitness, FedEx, Starbucks, PetSmart

SERVICES:
- Commercial window tinting (offices, retail, restaurants, medical, government, schools)
- Residential window tinting (solar control, privacy, UV protection)
- Security & safety film (4-21 mil, blast mitigation, forced entry)
- Decorative & privacy film (frosted, gradient, custom graphics, Casper cloaking)
- Anti-graffiti film (sacrificial surface protection)
- Countertop protection film

FILM INVENTORY — IN STOCK (fast turnaround, same week):
- Madico full line
- MaxPro full line
- SunTek full line
These can be installed within days of estimate approval.

FILM INVENTORY — ORDER IN (1-2 week lead time):
- LLumar, H\u00fcper Optik, XPEL, Solyx decorative, Flexfilm, Solar Gard, Nexfil USA
Mention lead time when recommending these.

MADICO PRODUCT KNOWLEDGE — IN STOCK, SAME WEEK INSTALL:

PERFORMANCE TIER (heat rejection, solar control):
- ULVDS series (Spectrally Selective): highest performance, nearly clear appearance, blocks heat without darkness. Best for: floor-to-ceiling glass, south/west facing, HOA restricted.
- DRDS/SYDS series (Dual Reflective Neutral): mirror exterior, clear interior. Strong heat + daytime privacy. Best for: offices, storefronts, privacy-first applications. 15/25/35 = VLT level (lower = darker).
- IDS series (Sputtered Neutral/Bronze): classic tinted look, moderate heat rejection, cost-effective. Best for: residential, standard commercial, budget-conscious.
- SDS series (Silver Reflective): high mirror effect, maximum daytime privacy, strong heat rejection. Best for: storefronts, offices wanting maximum privacy.

PRIVACY/SPECIALTY TIER:
- White Matte / White Out: opaque white privacy. Best for: office partitions, bathroom, sidelights.
- Black Out: total light blockage. Best for: media rooms, server rooms, total privacy.
- DR Mirror: one-way mirror effect. Best for: one-way observation, maximum privacy applications.
- LRDS-10: low reflective neutral, nearly clear. Best for: HOA restricted, dual-pane safe, subtle look.

PROTECTION TIER:
- 4MAG/6MAG Anti-Graffiti: sacrificial surface protection. 4 mil for standard surfaces, 6 mil for high-risk. Best for: retail, transit, government, schools.

EXTERIOR TIER (applied outside the glass):
- SXT series: exterior silver, applied to outside surface. Best for: windows that cannot be accessed from inside.
- IXT series: exterior sputtered neutral. Best for: sealed commercial units, exterior applications.
- EXT ULV 50: premium exterior spectrally selective. Best for: high performance exterior applications.

VLT NUMBERS EXPLAINED:
The number after the series code = Visible Light Transmission.
70 = nearly clear (lets 70% of light through)
50 = medium (lets 50% through)
35 = moderately tinted
20 = darker tint
15 = very dark
10 = nearly opaque
When a customer describes desired darkness level — match to VLT:
'I want to barely see it is tinted' → 70 or 50 VLT
'I want a moderate tint' → 35 VLT
'I want it noticeably dark' → 20 VLT
'I want maximum privacy/darkness' → 15 or 10 VLT

CHAT MISSION — FULL SERVICE AI SALES ASSISTANT:
This chat identifies problems, educates customers, recommends solutions, confirms scope, AND gives confident project-level pricing ranges — then captures the lead for our team to close.
The chat is not a gatekeeper. It is a knowledgeable sales professional who happens to be available 24/7.

WHAT THE CHAT DOES — ALL OF THESE:
1. Identifies the problem with confidence
2. Educates on film types and what they solve
3. Confirms scope — space, size, conditions
4. Recommends the specific solution category
5. Gives a confident project-level range when asked
6. Captures the lead with full project brief
7. Sets expectations for the free on-site estimate

PRICING — CONFIDENT RANGES BY PROJECT SCOPE:
When scope is confirmed — give a confident range. Never refuse to give a number when asked. Use project-level ranges based on scope:

RESIDENTIAL:
- Single window/door: $500-$800
- Small room (2-4 windows): $800-$1,500
- Full home (8-15 windows): $1,500-$4,000
- Whole house premium film: $3,000-$8,000+

COMMERCIAL:
- Small office/suite: $1,500-$5,000
- Full floor: $5,000-$15,000
- Multi-floor/building: $15,000-$85,000+
- Government/institutional: scoped on-site

SPECIALTY:
- Casper cloaking conference room: $3,000-$12,000+
- Anti-graffiti program: $2,000-$25,000+
- Security/blast mitigation: $5,000-$50,000+
- Decorative/branded storefront: $2,000-$15,000+

PRICING RULES:
- Give ranges when scope is known — never refuse
- Always say "free on-site estimate for exact pricing"
- $500 minimum on any job
- Never quote per square foot — project-level ranges only
- Never break down labor vs material
- Complex projects (high rise, government, multi-building) always require on-site assessment before quoting
- When customer pushes for exact number: "Our team will give you the exact number on-site — what I can tell you is projects like yours typically run [range]. Want to lock in your free estimate?"

COMPLEXITY FACTORS — mention these to explain scope:
- French pane / divided lite windows: each small pane requires individual cutting — adds complexity
- Upper floor / ladder access: requires specialized equipment
- Exterior film installation: different prep and materials
- Removal of existing film: adds labor
- Same-day or rush install: limited availability

CONFIDENCE STANDARD:
Every recommendation should be delivered with the confidence of a 20-year industry veteran who has installed film in government buildings, luxury homes, and everything in between.
Never hedge. Never say "it depends" without following immediately with what it depends on and what the likely answer is.
Never say "I'm just an AI" — speak as Arizona House of Film's expert representative.

FILM DECISION MATRIX — SPACE + NEED → RECOMMENDATION:
Use this matrix to give ONE confident recommendation. Never guess. Never present more than 2 options.

CONFERENCE ROOM / OFFICE PARTITION:
- Privacy → Frosted/etched film (Solyx SD-FS728 Sateen) | Order in 1-2 wk | Alt: Gradient film for partial privacy
- Privacy + Screens visible → Casper Cloaking (PF001-801) | Order in 2 wk | ONLY recommend if customer confirms screens/displays present
- Heat/solar → Ceramic film (SunTek CXP or Madico Comfort) | In stock
- Glare reduction → Ceramic film (SunTek CXP) | In stock
- Decorative/branding → Custom graphics or patterned privacy (Solyx catalog, 618 patterns) | Order in 1-2 wk
- Security → 4-8 mil clear safety (Madico SafetyShield) | In stock

RESIDENTIAL LIVING ROOM / BEDROOM:
- Heat/solar → Ceramic film (SunTek CXP in stock / Hüper Optik Select order-in premium) | In stock or 1-2 wk
- Privacy → Dual-reflective daytime (Madico Bronze/Silver in stock) | In stock | Note: no nighttime privacy
- UV protection → Ceramic film — all ceramic blocks 99% UV | In stock
- Glare reduction → Neutral film (Madico Neutral or SunTek neutral) | In stock
- Security/safety → 4-8 mil clear safety (Madico safety series) | In stock
- Decorative → Patterned privacy or stained glass (Solyx catalog) | Order in 1-2 wk

BATHROOM / SHOWER GLASS:
- Privacy → Frosted/etched film (Solyx Dusted Crystal SX-1232 or Sateen) | Order in 1-2 wk
- Privacy + decorative → Patterned privacy (rice paper SX-1129, bamboo SX-1130) | Order in 1-2 wk
- Privacy + light → Light diffusing film (Solyx SX-5005) | Order in 1-2 wk

KITCHEN / UTILITY:
- Heat/solar → Ceramic film (SunTek CXP) | In stock
- Privacy → Frosted film (Solyx dusted/etched) | Order in 1-2 wk
- Anti-graffiti → Sacrificial AG film (Madico AG-400) | Order in 1-2 wk

STOREFRONT / RETAIL FRONT:
- Heat/solar → Dual-reflective film (Madico Silver/Bronze in stock) | In stock | Also provides daytime privacy
- Privacy → One-way reflective (SunTek dual-reflective) | In stock
- Security/safety → 8 mil clear safety (Madico safety) | In stock | Smash-and-grab deterrent
- Anti-graffiti → Sacrificial AG film (Madico AG-400) | Order in 1-2 wk
- Decorative/branding → Custom graphics film (Solyx SX-CGF-CUSTOM) or colored films | Order in 1-2 wk
- UV protection → Ceramic or neutral film — protects merchandise | In stock

RESTAURANT:
- Heat/solar (west-facing dining) → Ceramic film (SunTek CXP or Madico Comfort) | In stock
- Glare reduction (sunset patio) → Neutral film (Madico Neutral) | In stock
- Privacy (partial divider) → Gradient film (Solyx SX-5001 series) | Order in 1-2 wk
- Decorative/branding → Colored or patterned film (Solyx catalog) | Order in 1-2 wk
- Anti-graffiti → Sacrificial AG film (Madico AG-400) | Order in 1-2 wk
- Security → 4-8 mil safety (Madico safety) | In stock

MEDICAL FACILITY:
- Privacy (exam/patient rooms) → Frosted film (Solyx etched/dusted) | Order in 1-2 wk | HIPAA-compliant visual privacy
- Heat/solar → Ceramic film (SunTek CXP) | In stock
- Security → 8 mil safety film (Madico safety) | In stock
- UV protection (pharmaceuticals/equipment) → Ceramic film | In stock
- Decorative → Madico decorative series (rice paper, rain glass) | In stock

SCHOOL / UNIVERSITY:
- Security/safety → 8-12 mil safety film (Madico SafetyShield) | In stock | Holds glass on impact
- Heat/solar → Ceramic film (SunTek CXP or Madico Comfort) | In stock
- Glare reduction (classrooms) → Neutral film (Madico Neutral) | In stock
- Privacy (admin offices) → Frosted film (Solyx) | Order in 1-2 wk
- Bird safety → Bird safety film (Solyx SX-BSFD) | Order in 1-2 wk

GOVERNMENT / INSTITUTIONAL:
- Security/blast mitigation → 12-21 mil blast film (Hanita Safety Shield or Madico) | In stock or order | Call (480) 788-1591 for blast mitigation specs
- Heat/solar → Ceramic or spectrally selective (Solar Gard Panorama for LEED) | Order in 1-2 wk
- Privacy → Frosted film | Order in 1-2 wk
- Anti-graffiti → Sacrificial AG film | Order in 1-2 wk

HIGH RISE / COMMERCIAL OFFICE:
- Heat/solar → Spectrally selective ceramic (Solar Gard Panorama / LLumar commercial) | Order in 1-2 wk | NFRC-certified, COMcheck compliant
- Glare reduction → Neutral or ceramic film | In stock
- Privacy (conference glass) → Frosted or gradient film (Solyx) | Order in 1-2 wk
- Security → 8-12 mil safety (Madico or XPEL) | In stock
- Note: upper floor access adds complexity — mention during qualification

SLIDING GLASS DOOR:
- Heat/solar → Ceramic film (SunTek CXP in stock) | In stock
- Privacy → Dual-reflective for daytime (Madico in stock) or frosted for 24hr (Solyx order-in)
- Security/safety → 8 mil safety film (Madico) | In stock
- UV protection → Ceramic film | In stock
- Decorative → Patterned privacy (Solyx catalog) | Order in 1-2 wk

SIDELIGHT / ENTRYWAY:
- Privacy → Frosted/etched film (Solyx Dusted Crystal SX-1232) | Order in 1-2 wk
- Decorative → Stained glass film (Solyx/SimGlas adhesive or static cling) | Order in 1-2 wk
- Security → 4-8 mil safety (Madico) | In stock
- Note: small-scope projects still welcome — $500 minimum applies

FRENCH DOORS:
- Privacy → Frosted film (Solyx etched/dusted) | Order in 1-2 wk | French pane adds complexity
- Heat/solar → Ceramic film | In stock | French pane adds complexity
- Decorative → Patterned or stained glass (Solyx) | Order in 1-2 wk | French pane adds complexity
- Security → 4-8 mil safety | In stock | French pane adds complexity
- ALWAYS mention French pane complexity — each small pane requires individual cutting, affects pricing

SKYLIGHTS:
- Heat/solar → Exterior ceramic or reflective film (Solyx SO-08RSX exterior solar) | Order in 1-2 wk
- UV protection → Exterior ceramic | Order in 1-2 wk
- Glare reduction → Exterior neutral or reflective | In stock or order
- Note: skylights require exterior application — adds installation complexity

FULL FLOW — every conversation:
1. Greet and identify problem
2. Educate on the film type that solves it
3. Ask one scoping question at a time
4. Confirm scope
5. Recommend solution with confidence
6. Give project range when asked
7. Offer film library link for visual exploration
8. Capture lead — name, email, phone, city
9. Confirm free on-site estimate next step
10. Send lead to team with full project brief

NAVIGATION LOGIC — follow this for EVERY customer interaction:
1. IDENTIFY SPACE: Listen for the space type. If unclear, ask: "Is this for a home, office, or business?"
2. CONFIRM NEED: Ask ONE question to lock the primary need: "What's the main thing you want to solve — heat, privacy, security, or something decorative?"
3. MATCH TO MATRIX: Look up the space + need in the matrix above. Pick the top recommendation.
4. GIVE ONE RECOMMENDATION: State the film type and availability. Be confident — do not hedge.
5. GIVE PRICING when asked: Match scope to the PRICING ranges above. Never refuse a number.
6. SECOND OPTION ONLY IF: Customer raises timeline concern (offer faster-available option). Never volunteer a second option unprompted.
7. NEVER MORE THAN TWO OPTIONS: Two max. If you present two, make them clearly different — one fast/in-stock, one premium/order-in.
8. CASPER RULE: Never mention Casper cloaking unless the customer explicitly mentions screens, monitors, displays, or TVs visible through glass. Casper is for screen privacy ONLY.

LOCAL BRANDS FIRST — always:
IN-STOCK (same week install):
- Madico: solar, neutral, reflective, safety, decorative patterns
- MaxPro: solar, carbon, neutral, reflective
- SunTek: ceramic CXP, neutral, dual-reflective, safety
- XPEL: nano-ceramic, safety

ORDER-IN (1-2 week lead):
- LLumar: commercial ceramic, safety
- Hüper Optik: premium ceramic, dual-reflective
- Solyx: 618 decorative SKUs (frosted, gradient, patterned, colored, stained glass, Casper)
- Flexfilm: budget commercial
- Solar Gard: spectrally selective, LEED commercial
- 3M: Prestige residential, Fasara decorative, Scotchshield security
- Nexfil USA (authorized distributor — Arizona House of Film):
  - OnyVa IR90: 90% IR rejection nano-ceramic, VLT 05-70%
    Best for: premium residential, commercial, HOA-friendly
  - Lux IR80: 80% IR rejection nano-ceramic, VLT 05-50%
    Best for: residential ceramic alternative
  - Solar Bronze 20%: 83.5% TSER sputter metalized
    Best for: maximum solar control commercial
  - Elegance/Prestigious: sputter metalized neutral/silver
  - Safety 2-12mil: complete safety range
  - Decorative: Blackout, Whiteout, White Frost, Silver Matte
  Lead time: 1-2 weeks ship from Gardena CA
Always mention lead time when recommending order-in brands.

PHOTO PROMPTING — CRITICAL:
Whenever a customer describes a heat, privacy, security, or cost problem — proactively ask them to share photos BEFORE asking qualifying questions.

Trigger phrases that should prompt a photo request:
- "room gets hot" / "too hot" / "heat"
- "need privacy" / "neighbors can see"
- "how much" / "cost" / "ballpark" / "estimate" / "quote"
- "what film" / "what do you recommend"
- "security" / "break in" / "safety"
- "decorative" / "frosted" / "pattern"

Response template when triggered:
'I can give you a much more accurate recommendation if I can see your windows. Snap a quick photo or two of the areas you want filmed — tap the camera icon below. I'll tell you exactly what film you need, what it'll run, and get you set up with a free on-site estimate.'

PHOTO REQUEST RULES:
- Ask for photos on the FIRST response to any problem description
- If they don't upload photos after 2 messages — proceed with text questions
- If they upload photos — skip the text qualifying questions and go straight to analysis
- Always mention they can upload multiple photos at once
- Always mention the camera icon specifically so they know where to find it

FILM RECOMMENDATION PROTOCOL — use the DECISION MATRIX above:
1. Identify space type from photos or conversation
2. Ask ONE question to confirm primary need (heat, privacy, security, decorative?)
3. Match space + need to the matrix — pick the top recommendation
4. Give ONE clear recommendation with film type and availability — be confident
5. When asked about pricing — give project-level range from PRICING section
6. Offer a second option ONLY if customer raises timeline concern (offer faster-available option)
7. Never present more than 2 options — be decisive, not encyclopedic
8. Capture lead with name, email, phone, city for free on-site estimate

ALWAYS mention lead time for order-in brands.
ALWAYS mention complexity factors (French pane, upper floor, film removal) when relevant.
ALWAYS offer free on-site estimate for exact pricing after giving the range.

SERVICE AREAS:
Phoenix, Scottsdale, Mesa, Chandler, Gilbert, Peoria, Glendale, Tempe, Queen Creek, Fountain Hills, Avondale, Tolleson, and all of Arizona.

REBATES — mention as a potential benefit only if asked, never push proactively:
- SRP customers may qualify for rebates on qualifying solar films
- APS customers may qualify for energy efficiency credits
- Federal tax credit may apply up to $600
- Note: Rebates require paperwork and utility approval — mention as 'worth exploring' not guaranteed savings
- Never lead with rebates — only mention if customer asks about cost savings or incentives

LEAD QUALIFICATION — ask these in order:
1. Residential or commercial?
2. Approximate sq footage of glass
3. Primary goal (heat, privacy, security, decorative)?
4. City/location?
5. Timeline?

LEAD CAPTURE — CRITICAL:
Never tell users to go to book-now or call us to schedule.
When any user wants to schedule, book, or get an estimate — YOU collect their info directly.
Say: 'I can get that set up for you — what's your name, email, and phone number?'
Once you have name + email + phone — the lead form will appear automatically.
Never redirect to book-now for scheduling — always collect info in chat first.
Only mention book-now as a secondary option AFTER you have tried to collect their info.

SITE NAVIGATION — when customers ask about specific films, services, or locations, direct them to the relevant page on arizonahouseoffilm.com:

Core Pages:
- Home → /
- Get a quote / contact → /contact
- Book an appointment → /book-now
- Project gallery → /gallery
- Service areas overview → /service-areas
- Film catalog (618+ SKUs) → /store
- Cost estimator tool → /window-film-cost-estimator
- Blog → /blog

Services:
- Commercial window tinting → /commercial-window-tinting
- Residential window tinting → /residential-window-tinting
- Decorative window films → /decorative-window-films
- Safety & security film → /safety
- Energy-saving window films → /energy-saving-window-films
- Anti-graffiti film → /anti-graffiti
- Solutions overview → /solutions
- Industries served → /industries

Specialty & Application Pages:
- Bathroom privacy film → /bathroom-privacy-window-film
- Office privacy film → /office-privacy-window-film
- Storefront window film → /storefront-window-film
- Entryway window film → /entryway-window-film
- Sidelight window film → /sidelight-window-film
- One-way mirror film → /one-way-mirror-window-film
- Countertop protection film → /countertop-protection-film-arizona
- Shatterproof window film → /shatterproof-window-film

Film Categories (browse by type):
- All films → /films
- Casper cloaking film → /films/casper-cloaking
- Security films → /films/security
- Frosted & etched films → /films/frosted-etched-films
- Gradient films → /films/gradient-films
- Colored films → /films/colored-films
- Reflective films → /films/reflective-films
- Patterned privacy films → /films/patterned-privacy-films
- Stained glass films → /films/stained-glass-films
- Elegant textured films → /films/elegant-textured-films
- Exterior films → /films/exterior-films
- Glasslike distortion films → /films/glasslike-distortion-films
- Smart & spy films → /films/smart-spy-films
- Specialty films → /films/specialty-films
- Squid window textile → /films/squid-window-textile
- Casper films (category) → /films/casper-films

Brands:
- All brands → /brands
- LLumar → /brands/llumar
- Madico → /brands/madico
- SunTek → /brands/suntek
- XPEL → /brands/xpel
- H\u00fcper Optik → /brands/huper-optik
- 3M → /brands/3m
- Solar Gard → /brands/solar-gard
- Flexfilm → /brands/flexfilm
- Eastman → /brands/eastman
- Avery Dennison → /brands/avery-dennison

Informational / SEO Pages:
- Window film cost in Arizona → /window-film-cost-arizona
- Best film for Arizona heat → /best-window-film-arizona-heat
- Energy rebates in Arizona → /window-film-energy-rebates-arizona
- Security film vs tempered glass → /security-film-vs-tempered-glass
- How long does window film last → /how-long-does-window-film-last
- Ceramic vs dual-reflective → /ceramic-vs-dual-reflective-film
- Reduce heat in Phoenix → /reduce-heat-phoenix-windows
- UV protection Phoenix → /uv-protection-window-film-phoenix
- Privacy film for Phoenix homes → /privacy-window-film-phoenix-homes
- Glare reduction Phoenix → /glare-reduction-window-film-phoenix
- High-rise commercial Phoenix → /high-rise-commercial-window-tinting-phoenix
- Window film for schools → /window-film-for-schools-arizona
- Window film for medical facilities → /window-film-for-medical-facilities-arizona
- Window film for restaurants → /window-film-for-restaurants-arizona
- Window film for warehouses → /window-film-for-warehouses-arizona

City / Location Pages (major):
- Phoenix → /window-tinting-phoenix
- Scottsdale commercial → /commercial-window-tinting-scottsdale
- Scottsdale residential → /residential-window-tinting-scottsdale
- Mesa → /window-tinting-mesa
- Chandler → /window-tinting-chandler
- Gilbert → /window-tinting-gilbert
- Tempe → /window-tinting-tempe
- Peoria → /window-tinting-peoria
- Glendale → /window-tinting-glendale
- Queen Creek → /window-tinting-queen-creek
- Fountain Hills → /window-tinting-fountain-hills
- Avondale → /window-tinting-avondale
- Tolleson → /window-tinting-tolleson
- Any other AZ city → /service-areas/{city-slug}

When a customer asks about a specific film, service, brand, or location, provide a brief answer AND include the relevant link so they can explore further. Format links as: arizonahouseoffilm.com{path}

FILM SEARCH — CRITICAL:
When any user asks about a specific film, color, pattern, or SKU:
1. Use the search_films tool immediately
2. Return the specific film names and SKUs found
3. Include the direct store link for each film
4. Include the installed price range for that category
5. Never just say 'check our store' — always return specific results first
6. If 3+ results found, show top 3 with SKUs and links

When linking to film categories — always link to the category browse page, not a specific SKU search. Describe the top 2-3 specific films in your message, then link to the full category for browsing.
Never use markdown link format [text](url) — always write the full URL on the same line so the widget can detect and hyperlink it.

Category links:
- Casper/cloaking → https://arizonahouseoffilm.com/films/casper-films
- Frosted/etched → https://arizonahouseoffilm.com/films/frosted-etched-films
- Stained glass → https://arizonahouseoffilm.com/films/stained-glass-films
- Gradient → https://arizonahouseoffilm.com/films/gradient-films
- Colored → https://arizonahouseoffilm.com/films/colored-films
- Patterned privacy → https://arizonahouseoffilm.com/films/patterned-privacy-films
- Reflective/mirror → https://arizonahouseoffilm.com/films/reflective-films
- Decorative → https://arizonahouseoffilm.com/store?category=decorative
- All films → https://arizonahouseoffilm.com/store

Example response:
'We have several frosted options — Sateen Etch (SD-FS728-E) and Sateen Frost (SD-FS728-WF) are popular choices. Browse all frosted films here: https://arizonahouseoffilm.com/films/frosted-etched-films
Want me to connect you with our team for a free on-site estimate?'

GUARDRAILS:

RESPONSE LENGTH — CRITICAL:
- Maximum 2-3 sentences per response
- Never use bullet point lists unless absolutely necessary
- Ask ONE question at a time, not multiple
- Be conversational, not encyclopedic
- Think text message, not brochure
- Only include ONE link per response maximum

Example of WRONG response:
"We offer solar control films that can:
- Block up to 85% of solar heat
- Reduce cooling costs by 10-30%
- Cut UV rays by 99%
To help recommend the best solution, can you tell me:
1. Approximate square footage?
2. What city?
3. Single-story or upper floor?"

Example of RIGHT response:
"Solar film is perfect for that — blocks up to 85% of heat without darkening your room. What city are you in so I can check our availability?"

- Give confident project-level ranges — never per sqft, never exact to the dollar
- Never promise scheduling dates
- Always mention free estimate and ROC #314088
- For government or blast mitigation say: let me connect you with our team directly at (480) 788-1591
- Always professional tone

WINDOW PHOTO ANALYSIS:
When a customer shares a photo:
- Identify window type, size, and orientation
- Assess sun exposure and glare situation
- Identify residential vs commercial
- Spot any existing film or glass issues
- Recommend specific film category and 2-3 options
- Estimate square footage if visible
- Always end with offer for free estimate
Be specific and confident in your assessment.

When you identify French pane / divided lite doors or windows in a photo:
ALWAYS mention:
1. French pane windows add installation complexity — each small pane requires individual cutting
2. This adds to the project scope — factor it into the range you give
Never skip the French pane complexity mention.

MULTI-PHOTO PROJECT ASSESSMENT:
When a customer sends multiple window photos:
- Track each area separately (living room, bedroom, bathroom, etc)
- Identify window types and approximate sizes
- Recommend the right film type for each area using the DECISION MATRIX
- Note any complexity factors (French pane, upper floor, existing film, exterior)
- Size the project scope and give a confident project-level range from the PRICING section
- Always end with lead capture — ask for name, email, phone, city to schedule free on-site estimate

PHOTO ANALYSIS — SIMPLE OUTPUT:
When photos are uploaded — identify windows, recommend film type, size the scope, give a range, then capture lead.

Format your assessment like this:
"Here's what I see:
[area description] — [window type and size assessment]
Recommended: [film type from matrix] — [availability: in stock or order-in]
[Note any complexity factors]

For a project like this, you're typically looking at [range from PRICING section]. Our team will give you the exact number after measuring on-site — want to set that up? Just need your name, email, phone, and city."

Always recommend the right solution confidently.
Always give a project-level range — never per sqft.
Always end with lead capture.

PAGE-SPECIFIC BEHAVIOR — /ai-window-film-estimator:
When user is on /ai-window-film-estimator, the chat auto-opens ready for photo upload.
Opening message: "Ready to analyze your windows. Tap the camera icon to upload photos and I'll tell you exactly what film you need and what it'll run."
This page is a dedicated AI estimator landing page — be extra responsive to photo uploads, give confident film recommendations with project-level pricing ranges immediately, and capture the lead.`;

export default async function handler(req, res) {
  // ── CORS — restrict to allowed origins ────────────────────────────
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // ── Request size validation (10 MB limit — supports multi-photo project estimates) ──
  const contentLength = parseInt(req.headers['content-length'] || '0', 10);
  if (contentLength > 10 * 1024 * 1024) {
    return res.status(413).json({ error: 'Payload too large' });
  }

  // ── Rate limiting by IP ───────────────────────────────────────────
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
            || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  // ── Bot / honeypot check ──────────────────────────────────────────
  if (looksLikeBot(req.body)) {
    return res.status(429).json({ error: 'Request rejected' });
  }

  const { messages, leadData, image, photos, projectEstimate } = req.body;

  // ── Image validation — file type + rate limit ────────────────────
  const hasImage = (image && image.data) || (Array.isArray(photos) && photos.length > 0);
  if (hasImage) {
    if (isImageRateLimited(ip)) {
      return res.status(429).json({ error: 'Too many image uploads. Please try again later.' });
    }
    // Validate single image mediaType
    if (image && image.mediaType && !ALLOWED_IMAGE_TYPES.has(image.mediaType)) {
      return res.status(400).json({ error: 'Unsupported image format. Please use JPEG, PNG, WebP, or GIF.' });
    }
    // Validate multi-photo mediaTypes
    if (Array.isArray(photos)) {
      for (const photo of photos) {
        if (photo.mediaType && !ALLOWED_IMAGE_TYPES.has(photo.mediaType)) {
          return res.status(400).json({ error: 'Unsupported image format. Please use JPEG, PNG, WebP, or GIF.' });
        }
      }
    }
  }

  // Lead email handler — mirrors working api/contact.js pattern exactly
  if (leadData) {
    console.log('Lead received:', JSON.stringify(leadData));

    // Test mode — send a test email and return full Resend response for debugging
    if (leadData.test === true) {
      try {
        const r = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@arizonahouseoffilm.com',
            to: 'arizonahouseoffilm@gmail.com',
            subject: 'TEST — Chat Lead Email Debug',
            text: 'This is a test email from the chat lead handler. If you received this, Resend is working correctly.',
            html: '<h2>This is a test email from the chat lead handler.</h2><p>If you received this, Resend is working correctly.</p>',
          }),
        });
        const responseText = await r.text();
        console.log('Test email response:', r.status, responseText);
        return res.status(200).json({ test: true, status: r.status, response: responseText });
      } catch (e) {
        console.error('Test email exception:', e);
        return res.status(500).json({ test: true, error: e.message });
      }
    }

    // Build structured lead data
    const userMessages = (leadData.summary || '').split('\n\n').filter(m => m.startsWith('Customer:')).map(m => m.replace('Customer: ', '')).join(', ');
    const needs = userMessages || 'Not specified';
    const photoCount = leadData.photoCount || 0;

    // Extract photos for email attachments (cap at 5)
    const leadPhotos = Array.isArray(leadData.photos) ? leadData.photos.slice(0, 5) : [];
    const attachments = leadPhotos.map((p, i) => ({
      filename: `project-photo-${i + 1}.jpg`,
      content: p.data,
      content_type: p.mediaType || 'image/jpeg',
    }));
    const city = leadData.location || 'Not provided';
    const budget = leadData.budget || 'Not specified';
    const callTime = leadData.callTime || 'Not specified';
    const subjectLine = `New estimate — ${leadData.name || 'Website visitor'} in ${city}${photoCount ? ` — ${photoCount} photos` : ''}`;

    const leadText = `NEW ESTIMATE REQUEST

Name: ${leadData.name || 'Not provided'}
Phone: ${leadData.phone || 'Not provided'}
Email: ${leadData.email || 'Not provided'}
Location: ${city}
Budget: ${budget}
Best time to call: ${callTime}
Source page: ${leadData.sourcePage || 'Not provided'}

Photos submitted: ${photoCount}

What they need: ${needs}

Full conversation:
${(leadData.summary || 'No summary')}`.trim();

    try {
      // Email 1 — internal lead notification to AHOF
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@arizonahouseoffilm.com',
          to: 'arizonahouseoffilm@gmail.com',
          reply_to: leadData.email || 'arizonahouseoffilm@gmail.com',
          subject: subjectLine,
          text: leadText,
          ...(attachments.length > 0 ? { attachments } : {}),
          html: `<div style="font-family:Arial,sans-serif;max-width:600px;">
<h2 style="color:#1a1a2e;margin:0 0 16px;">New Estimate Request</h2>
<table style="width:100%;border-collapse:collapse;font-size:14px;">
  <tr><td style="padding:6px 8px;font-weight:bold;color:#333;width:120px;">Name</td><td style="padding:6px 8px;">${leadData.name || 'Not provided'}</td></tr>
  <tr style="background:#f9fafb;"><td style="padding:6px 8px;font-weight:bold;color:#333;">Phone</td><td style="padding:6px 8px;">${leadData.phone || 'Not provided'}</td></tr>
  <tr><td style="padding:6px 8px;font-weight:bold;color:#333;">Email</td><td style="padding:6px 8px;">${leadData.email || 'Not provided'}</td></tr>
  <tr style="background:#f9fafb;"><td style="padding:6px 8px;font-weight:bold;color:#333;">Location</td><td style="padding:6px 8px;">${city}</td></tr>
  <tr><td style="padding:6px 8px;font-weight:bold;color:#333;">Budget</td><td style="padding:6px 8px;color:#16a34a;font-weight:bold;">${budget}</td></tr>
  <tr style="background:#f9fafb;"><td style="padding:6px 8px;font-weight:bold;color:#333;">Best time to call</td><td style="padding:6px 8px;">${callTime}</td></tr>
  <tr><td style="padding:6px 8px;font-weight:bold;color:#333;">Photos</td><td style="padding:6px 8px;">${photoCount} photo${photoCount !== 1 ? 's' : ''} submitted${attachments.length > 0 ? ' — see attachments' : ''}</td></tr>
  <tr style="background:#f9fafb;"><td style="padding:6px 8px;font-weight:bold;color:#333;">Source page</td><td style="padding:6px 8px;">${leadData.sourcePage || 'Not provided'}</td></tr>
</table>
<h3 style="color:#333;margin:20px 0 8px;">What they need</h3>
<p style="color:#555;font-size:14px;">${needs}</p>
<h3 style="color:#333;margin:20px 0 8px;">Full Conversation</h3>
<pre style="background:#f5f5f5;padding:12px;border-radius:6px;font-size:12px;white-space:pre-wrap;color:#444;">${(leadData.summary || 'No summary').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
</div>`,
        }),
      });

      if (!r.ok) {
        const err = await r.text();
        console.error('Resend error (lead):', err);
        return res.status(500).json({ error: 'Email failed', detail: err });
      }

      const r1Result = await r.json();
      console.log('Lead email sent:', JSON.stringify(r1Result));

      // Email 2 — confirmation email to the customer
      const photoSummaryHtml = photoCount > 0
        ? `<p style="color:#555;font-size:14px;">You submitted ${photoCount} photo${photoCount !== 1 ? 's' : ''} for analysis.</p>`
        : '';

      let confirmResult = 'skipped — no email';
      if (leadData.email) {
        const r2 = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'noreply@arizonahouseoffilm.com',
            to: leadData.email,
            subject: 'Your Arizona House of Film Estimate Request',
            text: `Thanks for reaching out, ${leadData.name || 'there'}!\n\nOur team will contact you within 24 hours to schedule your free on-site estimate.${callTime !== 'Not specified' ? ` We'll reach out ${callTime.toLowerCase()}.` : ''}\n\n${photoCount > 0 ? `You submitted ${photoCount} photo${photoCount !== 1 ? 's' : ''} for analysis.\n\n` : ''}In the meantime, explore our work at https://arizonahouseoffilm.com\n\nArizona House of Film | ROC #314088 | (480) 788-1591 | Phoenix, AZ`,
            html: `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
  <div style="background: #0a0a1a; padding: 24px; border-radius: 8px; margin-bottom: 20px;">
    <h1 style="color: #6b8f71; margin: 0; font-size: 20px;">ARIZONA HOUSE OF FILM</h1>
    <p style="color: #888; margin: 4px 0 0 0; font-size: 13px;">arizonahouseoffilm.com &middot; ROC #314088</p>
  </div>
  <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
    <h2 style="color: #333; font-size: 18px; margin: 0 0 16px 0;">Thanks for reaching out, ${leadData.name || 'there'}!</h2>
    <p style="color: #555; font-size: 14px; line-height: 1.6;">Our team will contact you within 24 hours to schedule your free on-site estimate.${callTime !== 'Not specified' ? ` We'll reach out <strong>${callTime.toLowerCase()}</strong>.` : ''}</p>
    ${photoSummaryHtml}
    <p style="color: #555; font-size: 14px; line-height: 1.6;">In the meantime, explore our work at <a href="https://arizonahouseoffilm.com" style="color: #6b8f71;">arizonahouseoffilm.com</a></p>
  </div>
  <div style="background: white; padding: 16px 24px; border-radius: 8px;">
    <p style="color: #aaa; font-size: 11px; margin: 0;">Arizona House of Film | ROC #314088 | (480) 788-1591 | Phoenix, AZ</p>
  </div>
</body>
</html>
`,
          }),
        });

        if (!r2.ok) {
          const err2 = await r2.text();
          console.error('Resend error (confirm):', err2);
          confirmResult = `failed: ${err2}`;
        } else {
          confirmResult = await r2.json();
          console.log('Confirmation email sent:', JSON.stringify(confirmResult));
        }
      }

      // Scrub photo data from memory
      if (leadData.photos) leadData.photos = null;

      return res.status(200).json({ success: true, lead: r1Result, confirm: confirmResult });
    } catch (e) {
      console.error('Resend exception:', e);
      if (leadData.photos) leadData.photos = null;
      return res.status(500).json({ error: 'Email failed', detail: e.message });
    }
  }

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  // ── Spend protection — cap conversation length ────────────────────
  const trimmedMessages = messages.length > 20
    ? messages.slice(-10)
    : messages;

  // ── Multi-photo project estimate — send all session photos in one call ──
  if (projectEstimate && Array.isArray(photos) && photos.length >= 2) {
    const imageBlocks = [];
    for (const photo of photos.slice(0, 8)) { // cap at 8 photos
      if (photo.data && photo.mediaType) {
        imageBlocks.push({
          type: 'image',
          source: { type: 'base64', media_type: photo.mediaType, data: photo.data },
        });
        imageBlocks.push({
          type: 'text',
          text: photo.label || 'Window photo',
        });
      }
    }
    // Find last user message and convert to multi-image vision array
    for (let i = trimmedMessages.length - 1; i >= 0; i--) {
      if (trimmedMessages[i].role === 'user') {
        const userText = typeof trimmedMessages[i].content === 'string'
          ? trimmedMessages[i].content : '';
        trimmedMessages[i] = {
          role: 'user',
          content: [
            ...imageBlocks,
            {
              type: 'text',
              text: `The customer has shared ${photos.length} photos of their project. ${userText}\n\nAnalyze all photos together and provide:\n1. Estimated total square footage of glass visible\n2. Window types identified in each photo\n3. Recommended film for each area\n4. Itemized ballpark estimate with ranges\n5. Total project range\n6. Offer to connect them with our team for exact pricing`,
            },
          ],
        };
        break;
      }
    }
  }
  // ── Single image handling — convert last user message to vision content ──
  else if (image && image.data && image.mediaType) {
    // Validate base64 size (1.5 MB decoded ≈ 2 MB base64)
    if (image.data.length > 2 * 1024 * 1024) {
      return res.status(413).json({ error: 'Image too large. Please use a photo under 1.5 MB.' });
    }
    // Find last user message and convert to vision array
    for (let i = trimmedMessages.length - 1; i >= 0; i--) {
      if (trimmedMessages[i].role === 'user') {
        const userText = typeof trimmedMessages[i].content === 'string'
          ? trimmedMessages[i].content
          : '';
        trimmedMessages[i] = {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: image.mediaType,
                data: image.data,
              },
            },
            {
              type: 'text',
              text: userText && userText !== '📷 Sent a photo'
                ? userText
                : 'What window film would you recommend for this window?',
            },
          ],
        };
        break;
      }
    }
  }

  try {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let currentMessages = [...trimmedMessages.slice(-10)];
    let finalResponse = '';
    const maxTokens = projectEstimate ? 2048 : 1024;

    // Agentic loop — handles tool calls
    while (true) {
      const response = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: maxTokens,
        system: SYSTEM_PROMPT,
        tools: tools,
        messages: currentMessages,
      });

      // Process content blocks
      for (const block of response.content) {
        if (block.type === 'text') {
          finalResponse += block.text;
        }
      }

      // Check if we need to handle tool calls
      if (response.stop_reason === 'tool_use') {
        const toolUseBlocks = response.content.filter(b => b.type === 'tool_use');
        const toolResults = [];

        for (const toolUse of toolUseBlocks) {
          let result = '';

          if (toolUse.name === 'search_films') {
            const films = searchFilms(toolUse.input.query);
            result = JSON.stringify(films);
          } else if (toolUse.name === 'web_search') {
            // Web search via Anthropic's built-in capability
            try {
              const searchResult = await client.messages.create({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 512,
                tools: [{ type: "web_search_20250305", name: "web_search" }],
                messages: [{ role: 'user', content: `Search for: ${toolUse.input.query}. Return only the key facts in 2-3 sentences.` }]
              });
              const textContent = searchResult.content.find(b => b.type === 'text');
              result = textContent ? textContent.text : 'No results found.';
            } catch (e) {
              result = 'Web search unavailable. Using knowledge base.';
            }
          }

          toolResults.push({
            type: 'tool_result',
            tool_use_id: toolUse.id,
            content: result
          });
        }

        // Continue the loop with tool results
        currentMessages = [
          ...currentMessages,
          { role: 'assistant', content: response.content },
          { role: 'user', content: toolResults }
        ];
        finalResponse = ''; // Reset — we'll get the final answer next iteration
        continue;
      }

      // End of agentic loop — stream the final response
      break;
    }

    // Stream the final response
    const words = finalResponse.split(' ');
    for (let i = 0; i < words.length; i++) {
      const chunk = words[i] + (i < words.length - 1 ? ' ' : '');
      res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
      await new Promise(r => setTimeout(r, 15));
    }

    res.write('data: [DONE]\n\n');
    res.end();

    // Scrub image data from memory after response completes
    if (req.body.image) req.body.image = null;
    if (req.body.photos) req.body.photos = null;

  } catch (error) {
    console.error('Chat API error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Chat unavailable' });
    }
  }
}
