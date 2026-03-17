export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const d = req.body;

  const text = `
NEW CONTACT — ARIZONA HOUSE OF FILM
=====================================
Name: ${d.name || 'Not provided'}
Phone: ${d.phone || 'Not provided'}
Email: ${d.email || 'Not provided'}
Address: ${d.address || 'Not provided'}

--- ESTIMATE DETAILS ---
Property Type: ${d.propertyType || 'Not provided'}
Windows: ${d.windowCount || 'Not provided'}
Window Size: ${d.windowSize || 'Not provided'}
Films: ${d.films || 'Not provided'}
Estimate: ${d.estimateRange || 'Not provided'}

--- MESSAGE ---
${d.message || d.notes || 'None'}

Source: ${d.source || 'website'}
`.trim();

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'arizonahouseoffilm@gmail.com',
        reply_to: d.email || 'noreply@arizonahouseoffilm.com',
        subject: `🏠 New Inquiry — ${d.name || 'Unknown'} — ${d.propertyType || 'Website Contact'}`,
        text,
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Email failed' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
