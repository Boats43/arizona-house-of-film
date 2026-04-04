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
  'casper-designtex': '$25-45/sq ft installed',
  'frosted-etched': '$10-20/sq ft installed',
  'stained-glass': '$12-22/sq ft installed',
  'gradient': '$12-20/sq ft installed',
  'colored-films': '$10-18/sq ft installed',
  'patterned-privacy': '$10-18/sq ft installed',
  'reflective-mirror': '$8-15/sq ft installed',
  'decorative': '$10-20/sq ft installed',
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
    pricing: categoryPricing[results[0].category] || '$10-20/sq ft installed',
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
- LLumar, H\u00fcper Optik, XPEL, Solyx decorative, Flexfilm, Solar Gard
Mention lead time when recommending these.

PRICING — REAL MINIMUMS (never quote below these):

MINIMUM JOB: $500 regardless of size
MINIMUM SQFT CHARGE: 50 sqft at base rate even if job is smaller

Why: mobilization, setup, cutting, travel — small jobs cost the same to execute.

RESIDENTIAL PRICING (installed):
- Budget/entry solar (dyed, carbon): $10-12/sqft — min $500
- Mid-range solar (dual-reflective, neutral): $12-15/sqft — min $500
- Premium ceramic (SunTek CXP, Madico Comfort): $15-18/sqft — min $500
- High performance nano-ceramic (Huper Optik): $18-25/sqft — min $500
- Decorative/frosted (Solyx): $12-18/sqft — min $500
- Security 4-8 mil: $15-20/sqft — min $500
- Security 12-21 mil: $20-30/sqft — min $500
- Casper cloaking: $30-50/sqft — min $750

COMMERCIAL PRICING (installed):
- Solar control standard: $12-18/sqft — min $750
- Solar control premium: $18-25/sqft — min $750
- Security/safety: $18-30/sqft — min $1,000
- Decorative/branded: $15-25/sqft — min $750

SPECIAL CONSIDERATIONS — add to estimate:
- French pane / divided lite windows: +$3-5/sqft surcharge (each small pane requires individual cutting and fitting)
- Upper floor / ladder required: +$2-3/sqft
- Exterior film installation: +$3-5/sqft
- Removal of existing film: +$3-5/sqft
- Same-day or rush install: +15-20%

FRENCH DOOR EXAMPLE (real pricing):
- 2 french pane doors, ~40 sqft total
- Base: 50 sqft minimum x $12/sqft = $600
- French pane surcharge: 40 sqft x $4 = $160
- Total range: $600-$800 installed
- Never quote under $500 for any job

PRICING COMMUNICATION RULES:
- Always present as a RANGE not a fixed price
- Always say 'free on-site estimate for exact pricing'
- Always mention the $500 minimum upfront for small jobs
- Never go below $500 — ever
- For French pane / divided lite — always mention the surcharge
- For jobs under 50 sqft — charge 50 sqft minimum rate

FILM FRAMEWORK — always explain by category not brand first:

REFLECTIVE FILMS (dual-reflective, bronze, silver, neutral):
- Mirror-like exterior appearance during day
- Maximum privacy during daylight hours
- Strong heat rejection 50-70%
- Best for: west/south-facing offices, storefronts, privacy-first applications
- In stock: Madico Bronze/Silver, SunTek dual-reflective, MaxPro reflective

NON-REFLECTIVE SOLAR (ceramic, carbon, spectrally selective):
- Clear to slightly tinted appearance
- Blocks heat through infrared rejection not darkness
- No mirror look — maintains natural appearance
- Best for: residential, HOA-restricted, high-end commercial
- In stock: SunTek CXP ceramic, Madico Comfort ceramic, MaxPro carbon
- Order in: LLumar ATC, H\u00fcper Optik ceramic series

NEUTRAL FILMS (lightly tinted, balanced):
- Middle ground — some reflectivity, moderate heat rejection
- Most popular residential choice
- Best for: bedrooms, living rooms, general use
- In stock: Madico Neutral, SunTek neutral, MaxPro neutral

DECORATIVE & PRIVACY (frosted, etched, gradient, pattern):
- No heat rejection unless combined with solar
- Full privacy day and night
- 618 Solyx patterns available
- Best for: bathrooms, sidelights, office partitions, storefronts
- Order in: full Solyx catalog (1-2 week lead)

SECURITY FILM (4-21 mil):
- Clear or lightly tinted
- Holds glass together on impact
- 4-8 mil: residential safety, retail
- 12-21 mil: commercial, government, blast mitigation
- In stock: Madico safety series, SunTek safety

CASPER CLOAKING:
- Makes LED screens invisible from outside
- Conference rooms, boardrooms only
- Order in: 2 week lead time

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
'I can give you a much more accurate recommendation if I can see your windows. Can you snap a quick photo or two of the areas you want filmed? Just tap the camera icon below — you can upload multiple photos and I'll analyze them all together and give you a ballpark estimate.'

PHOTO REQUEST RULES:
- Ask for photos on the FIRST response to any problem description
- If they don't upload photos after 2 messages — proceed with text questions
- If they upload photos — skip the text qualifying questions and go straight to analysis
- Always mention they can upload multiple photos at once
- Always mention the camera icon specifically so they know where to find it

FILM RECOMMENDATION PROTOCOL:
1. Identify primary need from photos or conversation
2. Ask: reflective or non-reflective preference? (show both options)
3. Ask: budget range? under $1k / $1k-$3k / $3k+
4. Match to in-stock vs order-in based on timeline
5. Present 2 options: in-stock fast + premium order-in
6. Give sq footage estimate and price range for each option
7. Capture lead with full project brief

ALWAYS present options across price points.
NEVER assume budget.
NEVER quote below $500 minimum.
ALWAYS mention in-stock availability as a benefit.
ALWAYS mention surcharges for french pane, upper floor, or film removal.

SERVICE AREAS:
Phoenix, Scottsdale, Mesa, Chandler, Gilbert, Peoria, Glendale, Tempe, Queen Creek, Fountain Hills, Avondale, Tolleson, and all of Arizona.

REBATES — mention as a potential benefit only if asked, never push proactively:
- SRP customers may qualify for $1/sq ft rebate on qualifying solar films
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
Pricing runs $10-20/sq ft installed. Want me to get you a free estimate?'

FILM INTENT MAP:
- Hot room / heat / solar → recommend ceramic solar films → search 'ceramic'
- Privacy / neighbors / bathroom → frosted-etched category
- Conference room / office screen → casper-designtex category
- Decorative / design / art → decorative or stained-glass category
- One way / mirror / reflective → reflective-mirror category
- Pattern / texture → patterned-privacy category
- Gradient / fade / ombre → gradient category
- Budget → frosted-etched starting $10/sq ft

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

- Never quote exact prices — always ranges
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
1. French pane surcharge applies (+$3-5/sqft)
2. Each small pane requires individual cutting
3. Minimum job $500
4. Example: '2 French doors at ~35 sqft = $500-600 base + French pane surcharge = $600-750 total range'
Never skip the surcharge mention for French pane windows.

MULTI-PHOTO PROJECT ASSESSMENT:
When a customer sends multiple window photos and asks for an estimate:
- Track each area separately (living room, bedroom, bathroom, etc)
- Estimate sq footage: standard window ~12-15 sqft, sliding door ~35-45 sqft, french door ~15-20 sqft, floor-to-ceiling ~50-80 sqft, sidelight ~6-10 sqft, storefront ~40-60 sqft
- Apply current pricing from PRICING section above — never below $500 minimum
- Give itemized breakdown per area with photo reference (Photo 1, Photo 2, etc)
- Give total project range (low end to high end)
- Always note "free on-site estimate for exact pricing"
- Always end with lead capture offer — ask for name, email, phone
- Format the estimate clearly with each line item on its own line

VISUAL FILM PREVIEW:
When a customer has uploaded a photo, tell them:
'Tap a finish below to see it on your window — then use the slider to choose how light or dark. Once you find the look you want, tap I want this look to get your exact quote.'

Available preview finishes (mention by name when recommending):
- Mirror Silver, Mirror Bronze, Neutral Gray — reflective, 15-35% VLT
- Ceramic Clear — nearly invisible, 50-70% VLT
- Ceramic Medium — subtle tint, 35-50% VLT
- Charcoal Tint — dark tint look, 10-25% VLT
- Frosted / Light Frosted — privacy, opaque
- Gradient — top frosted fading to clear
- Amber Glass, Blue Glass, Green Glass — decorative stained glass

When recommending, say which preview finish matches your recommendation so they can try it.`;

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
    const fs = leadData.filmSelection;
    const filmLine = fs ? `${fs.filmLabel}${fs.vlt ? ` at ${fs.vlt}% VLT` : ''} — ${fs.price || 'TBD'} — ${fs.stock || 'TBD'}` : 'Not selected';
    const photoCount = leadData.photoCount || 0;
    const city = leadData.location || 'Not provided';
    const subjectLine = `New estimate — ${leadData.name || 'Website visitor'}${fs ? ` — ${fs.filmLabel}` : ''} in ${city}`;

    const leadText = `NEW ESTIMATE REQUEST

Name: ${leadData.name || 'Not provided'}
Phone: ${leadData.phone || 'Not provided'}
Email: ${leadData.email || 'Not provided'}
Location: ${city}

FILM SELECTED: ${filmLine}
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
          html: `<div style="font-family:Arial,sans-serif;max-width:600px;">
<h2 style="color:#1a1a2e;margin:0 0 16px;">New Estimate Request</h2>
<table style="width:100%;border-collapse:collapse;font-size:14px;">
  <tr><td style="padding:6px 8px;font-weight:bold;color:#333;width:120px;">Name</td><td style="padding:6px 8px;">${leadData.name || 'Not provided'}</td></tr>
  <tr style="background:#f9fafb;"><td style="padding:6px 8px;font-weight:bold;color:#333;">Phone</td><td style="padding:6px 8px;">${leadData.phone || 'Not provided'}</td></tr>
  <tr><td style="padding:6px 8px;font-weight:bold;color:#333;">Email</td><td style="padding:6px 8px;">${leadData.email || 'Not provided'}</td></tr>
  <tr style="background:#f9fafb;"><td style="padding:6px 8px;font-weight:bold;color:#333;">Location</td><td style="padding:6px 8px;">${city}</td></tr>
  <tr><td style="padding:6px 8px;font-weight:bold;color:#333;">Film Selected</td><td style="padding:6px 8px;color:#16a34a;font-weight:bold;">${filmLine}</td></tr>
  <tr style="background:#f9fafb;"><td style="padding:6px 8px;font-weight:bold;color:#333;">Photos</td><td style="padding:6px 8px;">${photoCount} photo${photoCount !== 1 ? 's' : ''} submitted</td></tr>
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
      const filmSummaryHtml = fs
        ? `<p style="color:#555;font-size:14px;"><strong>Film selected:</strong> ${fs.filmLabel}${fs.vlt ? ` at ${fs.vlt}% VLT` : ''}<br/><strong>Estimated:</strong> ${fs.price || 'Custom quote'}<br/><strong>Availability:</strong> ${fs.stock === 'In stock' ? 'In stock — same week install' : 'Order in — 1-2 week lead time'}</p>`
        : '';
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
            subject: `Your Arizona House of Film Estimate — ${fs ? fs.filmLabel : 'Custom Quote'}`,
            text: `Thanks for reaching out, ${leadData.name || 'there'}!\n\nJimmy will contact you within 24 hours to schedule your free on-site estimate.\n\n${fs ? `Film selected: ${fs.filmLabel}${fs.vlt ? ` at ${fs.vlt}% VLT` : ''}\nEstimated: ${fs.price || 'Custom quote'}\nAvailability: ${fs.stock || 'TBD'}\n\n` : ''}${photoCount > 0 ? `You submitted ${photoCount} photo${photoCount !== 1 ? 's' : ''} for analysis.\n\n` : ''}In the meantime, explore our work at https://arizonahouseoffilm.com\n\nArizona House of Film | ROC #314088 | (480) 788-1591 | Phoenix, AZ`,
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
    <p style="color: #555; font-size: 14px; line-height: 1.6;">Jimmy will contact you within 24 hours to schedule your free on-site estimate.</p>
    ${filmSummaryHtml}
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

      return res.status(200).json({ success: true, lead: r1Result, confirm: confirmResult });
    } catch (e) {
      console.error('Resend exception:', e);
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
