import Anthropic from '@anthropic-ai/sdk';
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

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

// Film catalog data — top categories for search
const FILM_CATALOG = {
  casper: { name: "Casper Cloaking Film", sku: "PF001-801-48", url: "/films/casper-cloaking", price: "$25-45/sqft installed", description: "Makes screens invisible from outside while maintaining visibility from inside. Perfect for conference rooms and glass offices." },
  frosted: { name: "Frosted & Etched Films", url: "/films/frosted-etched-films", price: "$10-20/sqft installed", description: "Privacy films for bathrooms, offices, sidelights. 200+ patterns available." },
  gradient: { name: "Gradient Fading Films", url: "/films/gradient-fading-films", price: "$12-25/sqft installed", description: "Ombre fade from clear to frosted. Popular for conference rooms and storefronts." },
  stained: { name: "Stained Glass Films", url: "/films/stained-glass-films", price: "$15-30/sqft installed", description: "Decorative colored glass appearance without replacement." },
  solar: { name: "Solar Control Films", url: "/films", price: "$8-18/sqft installed", description: "Ceramic and spectrally selective films blocking 50-84% solar heat." },
  security: { name: "Security & Safety Films", url: "/safety", price: "$12-25/sqft installed", description: "4-21 mil thickness. Blast mitigation, forced entry protection, shatter resistance." },
  antigraffiti: { name: "Anti-Graffiti Film", url: "/anti-graffiti", price: "$8-15/sqft installed", description: "Sacrificial surface protection for storefronts and transit." },
  decorative: { name: "Decorative Films", url: "/decorative-window-films", price: "$10-20/sqft installed", description: "600+ Solyx patterns for residential and commercial." },
  reflective: { name: "Reflective & One-Way Films", url: "/films", price: "$8-15/sqft installed", description: "Daytime privacy with maximum solar heat rejection." },
  quantum: { name: "Quantum Cloaking Film", url: "/films/casper-cloaking", price: "$20-35/sqft installed", description: "Preferred partner brand for screen privacy. 7 mil, Class A fire rated." }
};

function searchFilms(query) {
  const q = query.toLowerCase();
  const results = [];
  for (const [key, film] of Object.entries(FILM_CATALOG)) {
    if (film.name.toLowerCase().includes(q) ||
        film.description.toLowerCase().includes(q) ||
        key.includes(q)) {
      results.push(film);
    }
  }
  return results.length > 0 ? results : [{ name: "Film Catalog", url: "/store", description: "Browse our full catalog of 618+ films at our store." }];
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
LLumar, Madico, SunTek, XPEL, Solyx, Flexfilm, Solar Gard, Huper Optik, EnerLogic, Casper by Designtex, Quantum Cloaking Film. For 3M specifically — we work with a certified 3M partner installer.

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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages, leadData } = req.body;

  // Lead email handler — uses raw fetch to match working api/contact.js pattern
  if (leadData) {
    console.log('Lead received:', JSON.stringify(leadData));

    const resendHeaders = {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    };

    // Test mode — send a test email and return full Resend response for debugging
    if (leadData.test === true) {
      try {
        const r = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: resendHeaders,
          body: JSON.stringify({
            from: 'noreply@arizonahouseoffilm.com',
            to: 'arizonahouseoffilm@gmail.com',
            subject: 'TEST — Chat Lead Email Debug',
            html: '<h2>This is a test email from the chat lead handler.</h2><p>If you received this, Resend is working correctly.</p>',
          }),
        });
        const responseText = await r.text();
        console.log('Test email response:', r.status, responseText);
        return res.status(200).json({ test: true, status: r.status, response: responseText, apiKeyPrefix: process.env.RESEND_API_KEY?.slice(0, 8) + '...' });
      } catch (e) {
        console.error('Test email exception:', e);
        return res.status(500).json({ test: true, error: e.message });
      }
    }

    try {
      // Email 1 — internal lead notification to AHOF
      const r1 = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: resendHeaders,
        body: JSON.stringify({
          from: 'noreply@arizonahouseoffilm.com',
          to: 'arizonahouseoffilm@gmail.com',
          reply_to: leadData.email || 'arizonahouseoffilm@gmail.com',
          subject: `New Chat Lead — ${leadData.name || 'Unknown'}`,
          html: `
            <h2>New Lead from Chat Widget</h2>
            <p><strong>Name:</strong> ${leadData.name || 'Not provided'}</p>
            <p><strong>Email:</strong> ${leadData.email || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
            <p><strong>Project:</strong> ${leadData.project || 'Not provided'}</p>
            <p><strong>Summary:</strong> ${leadData.summary || 'No summary'}</p>
            <hr/>
            <p><em>Sent from arizonahouseoffilm.com chat widget</em></p>
          `
        }),
      });
      const r1Text = await r1.text();
      console.log('Lead email (AHOF) response:', r1.status, r1Text);

      // Email 2 — confirmation email to the customer
      let r2Text = 'skipped';
      if (leadData.email) {
        const r2 = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: resendHeaders,
          body: JSON.stringify({
            from: 'noreply@arizonahouseoffilm.com',
            to: leadData.email,
            subject: 'Your Arizona House of Film Estimate Request',
            html: `
              <h2>Thanks for reaching out, ${leadData.name || 'there'}!</h2>
              <p>We received your request and a specialist will contact you within 24 hours to schedule your free on-site estimate.</p>
              <p><strong>Your project details:</strong><br/>${leadData.summary || 'We\'ll discuss details when we reach out.'}</p>
              <p>In the meantime, feel free to explore our work at <a href="https://arizonahouseoffilm.com">arizonahouseoffilm.com</a></p>
              <hr/>
              <p>Arizona House of Film | ROC #314088 | (480) 788-1591 | Phoenix, AZ</p>
            `
          }),
        });
        r2Text = await r2.text();
        console.log('Confirmation email (customer) response:', r2.status, r2Text);
      }

      if (!r1.ok) {
        console.error('Lead email failed:', r1.status, r1Text);
        return res.status(500).json({ error: 'Lead email failed', detail: r1Text });
      }

      return res.status(200).json({ success: true, leadEmail: r1.status, confirmEmail: r2Text });
    } catch (e) {
      console.error('Resend exception:', e);
      return res.status(500).json({ error: 'Email failed', detail: e.message });
    }
  }

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let currentMessages = [...messages.slice(-10)];
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
