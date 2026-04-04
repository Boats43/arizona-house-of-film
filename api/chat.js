import Anthropic from '@anthropic-ai/sdk';
import { solyxProducts, solyxCategories } from '../src/data/solyxFilms.js';
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ── Rate limiting (in-memory, per serverless instance) ──────────────
const rateMap = new Map();          // IP → { count, resetAt }
const RATE_LIMIT  = 20;             // max requests per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

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

// Periodic cleanup so the Map doesn't grow unbounded
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateMap) {
    if (now > entry.resetAt) rateMap.delete(ip);
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

  return {
    found: true,
    count: results.length,
    category: categoryInfo?.name || targetCategory,
    pricing: categoryPricing[results[0].category] || '$10-20/sq ft installed',
    films: results.map(f => ({
      sku: f.sku,
      name: f.name,
      category: f.category,
      link: `https://arizonahouseoffilm.com/store?category=${f.category}`,
    })),
    categoryPage: `https://arizonahouseoffilm.com/films/${targetCategory || results[0].category}`,
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

BRANDS INSTALLED:
LLumar, Madico, SunTek, XPEL, Solyx, Flexfilm, Solar Gard, H\u00fcper Optik, EnerLogic, Casper by Designtex, Quantum Cloaking Film. For 3M specifically — we work with a certified 3M partner installer.

H\u00dcPER OPTIK KEY SPECS (authorized dealer):
- German-engineered multi-layer nano-ceramic — no metal content, no signal interference
- Ceramic 20-70 series: 20% to 73% VLT, all 99% UV rejection
- Klar 85: nearly clear at 82% VLT, 28% TSER
- Select DREI: maximum rejection at 67% TSER, 35% VLT
- Select SECH: balanced at 51% TSER, 61% VLT
- PSA adhesive safe for dual-pane glass
- NFRC certified — SRP/APS rebate eligible
- Brand page: arizonahouseoffilm.com/brands/huper-optik

SERVICE AREAS:
Phoenix, Scottsdale, Mesa, Chandler, Gilbert, Peoria, Glendale, Tempe, Queen Creek, Fountain Hills, Avondale, Tolleson, and all of Arizona.

PRICING GUIDANCE (never give exact quotes):
- Residential solar film: $8-$15/sq ft installed
- Commercial solar film: $10-$18/sq ft installed
- Security film: $12-$25/sq ft installed
- Decorative/frosted: $10-$20/sq ft installed
- Casper cloaking: $25-$45/sq ft installed
- Always say free on-site estimate for exact pricing

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

When linking to store pages — always link to the category page, not a specific SKU search. The user should be able to browse all options in that category. Describe the top 2-3 specific films in your message, then link to the full category for browsing.
Never use markdown link format [text](url) — always write the full URL on the same line so the widget can detect and hyperlink it.

Example response:
'We have several frosted options — Sateen Etch (SD-FS728-E) and Sateen Frost (SD-FS728-WF) are popular choices. Browse all frosted films here: https://arizonahouseoffilm.com/store?category=frosted-etched
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
- Always professional tone`;

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

  // ── Request size validation (10 KB limit) ─────────────────────────
  const contentLength = parseInt(req.headers['content-length'] || '0', 10);
  if (contentLength > 10240) {
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

  const { messages, leadData } = req.body;

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

    // Build plain text version (mirrors contact.js pattern — always send text + html)
    const leadText = `
NEW CHAT LEAD — ARIZONA HOUSE OF FILM
=====================================
Name: ${leadData.name || 'Not provided'}
Email: ${leadData.email || 'Not provided'}
Phone: ${leadData.phone || 'Not provided'}
Location: ${leadData.location || 'Not provided'}

--- CONVERSATION SUMMARY ---
${leadData.summary || 'No summary'}

Source: chat widget
`.trim();

    try {
      // Email 1 — internal lead notification to AHOF (matches contact.js structure exactly)
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
          subject: `New Chat Lead — ${leadData.name || 'Unknown'}`,
          text: leadText,
          html: `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
  <div style="background: #0a0a1a; padding: 24px; border-radius: 8px; margin-bottom: 20px;">
    <h1 style="color: #6b8f71; margin: 0; font-size: 20px;">NEW CHAT LEAD — ARIZONA HOUSE OF FILM</h1>
    <p style="color: #888; margin: 4px 0 0 0; font-size: 13px;">arizonahouseoffilm.com · ROC #314088</p>
  </div>

  <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
    <h2 style="color: #333; font-size: 16px; margin: 0 0 16px 0; border-bottom: 2px solid #6b8f71; padding-bottom: 8px;">CONTACT DETAILS</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #888; font-size: 13px; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${leadData.name || '—'}</td></tr>
      <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;"><a href="tel:${leadData.phone}" style="color: #6b8f71;">${leadData.phone || '—'}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${leadData.email}" style="color: #6b8f71;">${leadData.email || '—'}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Location</td><td style="padding: 8px 0; font-size: 14px;">${leadData.location || '—'}</td></tr>
    </table>
  </div>

  <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
    <h2 style="color: #333; font-size: 16px; margin: 0 0 12px 0;">CONVERSATION SUMMARY</h2>
    <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0;">${leadData.summary || 'No summary'}</p>
  </div>

  <div style="background: white; padding: 16px 24px; border-radius: 8px;">
    <p style="color: #aaa; font-size: 11px; margin: 0;">Source: chat widget · Sent via arizonahouseoffilm.com</p>
  </div>
</body>
</html>
`,
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
      const userMessages = (leadData.summary || '').split('\n\n').filter(m => m.startsWith('Customer:')).map(m => m.replace('Customer: ', '')).join(', ');
      const projectDetails = userMessages || 'We will discuss details when we reach out.';

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
            text: `Thanks for reaching out, ${leadData.name || 'there'}!\n\nWe received your request and a specialist will contact you within 24 hours to schedule your free on-site estimate.\n\nYour project details:\n${projectDetails}\n\nIn the meantime, feel free to explore our work at https://arizonahouseoffilm.com\n\nArizona House of Film | ROC #314088 | (480) 788-1591 | Phoenix, AZ`,
            html: `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
  <div style="background: #0a0a1a; padding: 24px; border-radius: 8px; margin-bottom: 20px;">
    <h1 style="color: #6b8f71; margin: 0; font-size: 20px;">ARIZONA HOUSE OF FILM</h1>
    <p style="color: #888; margin: 4px 0 0 0; font-size: 13px;">arizonahouseoffilm.com · ROC #314088</p>
  </div>

  <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
    <h2 style="color: #333; font-size: 18px; margin: 0 0 16px 0;">Thanks for reaching out, ${leadData.name || 'there'}!</h2>
    <p style="color: #555; font-size: 14px; line-height: 1.6;">We received your request and a specialist will contact you within 24 hours to schedule your free on-site estimate.</p>
    <p style="color: #555; font-size: 14px; line-height: 1.6;"><strong>Your project details:</strong><br/>${projectDetails}</p>
    <p style="color: #555; font-size: 14px; line-height: 1.6;">In the meantime, feel free to explore our work at <a href="https://arizonahouseoffilm.com" style="color: #6b8f71;">arizonahouseoffilm.com</a></p>
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

  try {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let currentMessages = [...trimmedMessages.slice(-10)];
    let finalResponse = '';

    // Agentic loop — handles tool calls
    while (true) {
      const response = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
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

  } catch (error) {
    console.error('Chat API error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Chat unavailable' });
    }
  }
}
