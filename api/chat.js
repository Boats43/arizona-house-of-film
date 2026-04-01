import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';

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

SRP REBATE INFO:
- SRP customers: $1/sq ft on qualifying solar film
- APS customers: Arizona House of Film honors $1/sq ft credit on invoice
- Federal tax credit: 30% up to $600
- Deadline: April 30, 2026 for SRP

LEAD QUALIFICATION — ask these in order:
1. Residential or commercial?
2. Approximate sq footage of glass
3. Primary goal (heat, privacy, security, decorative)?
4. City/location?
5. Timeline?

LEAD CAPTURE — when ready to quote say:
"I'd love to get you a free estimate. Can I get your name, email, and phone number so Jimmy can reach out directly?"

GUARDRAILS:
- Never quote exact prices — always ranges
- Never promise scheduling dates
- Always mention free estimate and ROC #314088
- For government or blast mitigation say: let me connect you with Jimmy directly at (480) 788-1591
- Keep responses to 2-4 sentences unless explaining specs
- Always professional tone`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages, leadData } = req.body;

  // Lead email notification
  if (leadData) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'AHOF Chat <onboarding@resend.dev>',
        to: 'arizonahouseoffilm@gmail.com',
        subject: `New Chat Lead — ${leadData.name || 'Unknown'}`,
        html: `
          <h2>New Lead from Chat Widget</h2>
          <p><strong>Name:</strong> ${leadData.name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${leadData.email || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
          <p><strong>Summary:</strong> ${leadData.summary || 'No summary'}</p>
          <hr/>
          <p><em>Sent from arizonahouseoffilm.com chat widget</em></p>
        `
      });
    } catch (e) {
      console.error('Resend error:', e);
    }
    return res.status(200).json({ success: true });
  }

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const stream = await client.messages.stream({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: messages.slice(-10),
    });

    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ text: chunk.delta.text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();

  } catch (error) {
    console.error('Chat error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Chat unavailable' });
    }
  }
}
