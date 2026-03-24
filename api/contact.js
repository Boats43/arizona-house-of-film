export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const honeypot = req.body.website_url || req.body.url || req.body.company_website;
  if (honeypot) {
    return res.status(200).json({ success: true });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (req.body.email && !emailRegex.test(req.body.email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

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
        from: 'noreply@arizonahouseoffilm.com',
        to: 'arizonahouseoffilm@gmail.com',
        reply_to: d.email || 'arizonahouseoffilm@gmail.com',
        subject: `🏠 New Inquiry — ${d.name || 'Unknown'} — ${d.propertyType || 'Website Contact'}`,
        text,
        html: `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
  <div style="background: #0a0a1a; padding: 24px; border-radius: 8px; margin-bottom: 20px;">
    <h1 style="color: #6b8f71; margin: 0; font-size: 20px;">NEW INQUIRY — ARIZONA HOUSE OF FILM</h1>
    <p style="color: #888; margin: 4px 0 0 0; font-size: 13px;">arizonahouseoffilm.com · ROC #314088</p>
  </div>

  <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
    <h2 style="color: #333; font-size: 16px; margin: 0 0 16px 0; border-bottom: 2px solid #6b8f71; padding-bottom: 8px;">CONTACT DETAILS</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #888; font-size: 13px; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${d.name || '—'}</td></tr>
      <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;"><a href="tel:${d.phone}" style="color: #6b8f71;">${d.phone || '—'}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${d.email}" style="color: #6b8f71;">${d.email || '—'}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #888; font-size: 13px;">Address</td><td style="padding: 8px 0; font-size: 14px;">${d.address || '—'}</td></tr>
    </table>
  </div>

  ${d.estimateRange ? `
  <div style="background: #0d1a0f; border: 2px solid #6b8f71; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
    <h2 style="color: #6b8f71; font-size: 16px; margin: 0 0 16px 0;">ESTIMATE DETAILS</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #aaa; font-size: 13px; width: 140px;">Property Type</td><td style="padding: 8px 0; color: white; font-size: 14px; text-transform: capitalize;">${d.propertyType || '—'}</td></tr>
      <tr><td style="padding: 8px 0; color: #aaa; font-size: 13px;">Windows</td><td style="padding: 8px 0; color: white; font-size: 14px;">${d.windowCount || '—'}</td></tr>
      <tr><td style="padding: 8px 0; color: #aaa; font-size: 13px;">Window Size</td><td style="padding: 8px 0; color: white; font-size: 14px;">${d.windowSize || '—'}</td></tr>
      <tr><td style="padding: 8px 0; color: #aaa; font-size: 13px;">Films</td><td style="padding: 8px 0; color: white; font-size: 14px;">${d.films || '—'}</td></tr>
      <tr style="border-top: 1px solid #2a4a2e;"><td style="padding: 12px 0 4px 0; color: #6b8f71; font-size: 13px; font-weight: bold;">Estimate Range</td><td style="padding: 12px 0 4px 0; color: #6b8f71; font-size: 20px; font-weight: bold;">${d.estimateRange}</td></tr>
    </table>
  </div>
  ` : ''}

  ${(d.message || d.notes) ? `
  <div style="background: white; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
    <h2 style="color: #333; font-size: 16px; margin: 0 0 12px 0;">MESSAGE / NOTES</h2>
    <p style="color: #555; font-size: 14px; line-height: 1.6; margin: 0;">${d.message || d.notes}</p>
  </div>
  ` : ''}

  <div style="background: white; padding: 16px 24px; border-radius: 8px;">
    <p style="color: #aaa; font-size: 11px; margin: 0;">Source: ${d.source || 'website'} · Sent via arizonahouseoffilm.com</p>
  </div>
</body>
</html>
`,
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
