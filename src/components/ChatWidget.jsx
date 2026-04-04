import { useState, useEffect, useRef } from 'react';

const DEFAULT_OPENER = "Hi! I'm the Arizona House of Film assistant. What can I help you with today?";

const OPENING_MESSAGE = { role: 'assistant', content: DEFAULT_OPENER };

function getPageContext() {
  const path = window.location.pathname;

  // ── Informational pages (must be before generic /security, /commercial, /residential) ──
  if (path.includes('/window-film-cost') || path.includes('/cost-estimator')) return {
    trigger: 'auto', delay: 10000,
    opener: "Want a faster estimate? Tell me your square footage and film type — I can give you a ballpark right now without filling out a form.",
  };
  if (path.includes('/energy-rebates')) return {
    trigger: 'auto', delay: 12000,
    opener: "The SRP rebate deadline is April 30, 2026. Are you an SRP customer? I can tell you exactly which films qualify.",
  };
  if (path.includes('/security-film-vs-tempered') || path.includes('/shatterproof')) return {
    trigger: 'auto', delay: 15000,
    opener: "Comparing security options? I can walk you through the difference between 4mil, 8mil, and 14mil film and what's right for your situation.",
  };
  if (path.includes('/best-window-film-arizona') || path.includes('/ceramic')) return {
    trigger: 'auto', delay: 15000,
    opener: "Looking for the best film for Arizona heat? The answer depends on your glass type and priorities. What matters most — heat rejection, visibility, or price?",
  };
  if (path.includes('/blog/')) return {
    trigger: 'auto', delay: 30000,
    opener: "Have questions about what you're reading? I can go deeper on any window film topic or help you figure out what's right for your project.",
  };
  if (path.includes('/gallery')) return {
    trigger: 'auto', delay: 20000,
    opener: "See something you like? I can tell you exactly what film that is and get you a free estimate for your project.",
  };

  // ── Location pages (must be before generic /commercial, /residential) ──
  if (path.includes('/commercial-window-tinting-') || path.includes('/residential-window-tinting-')) {
    const parts = path.replace(/^\//, '').split('-');
    const city = parts[parts.length - 1].replace(/\b\w/g, l => l.toUpperCase());
    return {
      trigger: 'auto', delay: 20000,
      opener: `Looking for window film in ${city}? We do projects there regularly. What type of property are we talking about?`,
    };
  }
  if (path.includes('/service-areas/') || path.includes('/window-tinting-')) {
    const citySlug = path.split('/').pop();
    const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
      trigger: 'auto', delay: 20000,
      opener: `We service ${cityName} regularly — usually within 2-3 days for most projects. Are you looking for residential or commercial window film?`,
    };
  }

  // ── Film pages ──
  if (path.includes('/films/casper')) return {
    trigger: 'auto', delay: 15000,
    opener: "I see you're looking at Casper Cloaking Film — it makes screens invisible from outside while staying clear from inside. Is this for a conference room or office space?",
  };
  if (path.includes('/films/frosted') || path.includes('/films/etched')) return {
    trigger: 'auto', delay: 20000,
    opener: "Looking for privacy film? I can help you find the right opacity and pattern for your space. Is this for a bathroom, office, or entryway?",
  };

  // ── Service pages ──
  if (path.includes('/safety') || path.includes('/security')) return {
    trigger: 'auto', delay: 15000,
    opener: "Security film questions? I can walk you through our 4-21 mil options and what's right for your property type. Residential or commercial?",
  };
  if (path.includes('/commercial')) return {
    trigger: 'auto', delay: 20000,
    opener: "Looking at commercial window film? We work with GCs and property managers across Arizona. What type of building are we talking about?",
  };
  if (path.includes('/residential')) return {
    trigger: 'auto', delay: 20000,
    opener: "Looking to tint your home? I can help find the right film for Arizona heat. What's your main goal — heat reduction, privacy, or UV protection?",
  };

  // ── Brand pages ──
  if (path.includes('/brands/huper-optik')) return {
    trigger: 'auto', delay: 15000,
    opener: "Hüper Optik is our newest brand — German nano-ceramic technology, no signal interference, 99% UV rejection. Which series are you interested in — Ceramic, Select, or Safety?",
  };
  if (path.includes('/brands/')) return {
    trigger: 'auto', delay: 20000,
    opener: "Have questions about this film brand? I can compare specs, pricing ranges, and help you pick the right product for your project.",
  };

  // ── Industry pages ──
  if (path.includes('/industries/government')) return {
    trigger: 'auto', delay: 10000,
    opener: "Government or institutional project? We handle compliance documentation, security clearances, and blast mitigation specs. What facility type are you working with?",
  };
  if (path.includes('/industries/')) return {
    trigger: 'auto', delay: 20000,
    opener: "Have questions about window film for your industry? I can recommend specific films and connect you with our team for a free estimate.",
  };

  // ── Store ──
  if (path.includes('/store')) return {
    trigger: 'manual_only',
    opener: "Need help finding a specific film? Tell me what you're looking for — pattern, opacity, application — and I'll find the right SKU from our 618-film catalog.",
  };

  // ── Contact / booking ──
  if (path.includes('/contact') || path.includes('/book-now')) return {
    trigger: 'auto', delay: 8000,
    opener: "I can help get your estimate started right now — no form needed. What type of project are you looking at?",
  };

  return { trigger: 'manual_only', opener: DEFAULT_OPENER };
}

function formatMessage(text) {
  const URL_RE = /(https?:\/\/[^\s"<>]+|arizonahouseoffilm\.com\/[^\s"<>]*)/g;
  const BOLD_RE = /\*\*(.+?)\*\*/g;
  // Split on URLs first, then handle bold within each segment
  const parts = text.split(URL_RE);
  return parts.map((part, i) => {
    if (URL_RE.test(part)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer"
          style={{ color: '#22c55e', textDecoration: 'underline' }}>{part}</a>
      );
    }
    // Handle **bold** within non-URL segments
    const boldParts = part.split(BOLD_RE);
    if (boldParts.length === 1) return part;
    return boldParts.map((bp, j) =>
      j % 2 === 1 ? <strong key={`${i}-${j}`}>{bp}</strong> : bp
    );
  });
}

const FILM_EFFECTS = {
  'mirror-silver': {
    label: 'Mirror Silver', defaultVlt: 20, price: '$8-13/sqft', stock: 'In stock',
    desc: 'High reflectivity exterior mirror finish. Maximum daytime privacy — neighbors see their reflection. Strong heat rejection.',
    passes: [
      { blend: 'saturation', color: 'rgba(128,128,128,0.60)' },
      { blend: 'screen', color: 'rgba(192,192,220,0.50)' },
      { blend: 'screen', color: 'rgba(200,210,230,0.15)' },
    ],
  },
  'mirror-bronze': {
    label: 'Mirror Bronze', defaultVlt: 25, price: '$8-13/sqft', stock: 'In stock',
    desc: 'Classic warm bronze reflective look. Strong daytime privacy with a rich amber tone. Popular for commercial storefronts.',
    passes: [
      { blend: 'saturation', color: 'rgba(128,128,128,0.50)' },
      { blend: 'multiply', color: 'rgba(160,100,40,0.50)' },
      { blend: 'screen', color: 'rgba(180,140,60,0.12)' },
    ],
  },
  'mirror-neutral': {
    label: 'Neutral Gray', defaultVlt: 30, price: '$8-13/sqft', stock: 'In stock',
    desc: 'Cool dark neutral reflective finish. Professional look for offices and commercial buildings. Moderate privacy.',
    passes: [
      { blend: 'saturation', color: 'rgba(128,128,128,0.40)' },
      { blend: 'multiply', color: 'rgba(100,105,110,0.45)' },
    ],
  },
  'ceramic-clear': {
    label: 'Ceramic Clear', defaultVlt: 70, price: '$10-18/sqft', stock: 'In stock',
    desc: 'Nearly invisible film. Blocks IR heat and 99% UV without changing your glass appearance. HOA-friendly.',
    passes: [
      { blend: 'screen', color: 'rgba(210,225,255,0.12)' },
    ],
  },
  'ceramic-medium': {
    label: 'Ceramic Medium', defaultVlt: 40, price: '$10-18/sqft', stock: 'In stock',
    desc: 'Subtle gray-blue tint with clear outward visibility. Best balance of heat rejection and natural light.',
    passes: [
      { blend: 'saturation', color: 'rgba(128,128,128,0.15)' },
      { blend: 'multiply', color: 'rgba(180,190,210,0.30)' },
    ],
  },
  'tinted-charcoal': {
    label: 'Charcoal Tint', defaultVlt: 15, price: '$8-12/sqft', stock: 'In stock',
    desc: 'Dark charcoal window tint. Strong privacy and glare reduction. Classic dark tint look.',
    passes: [
      { blend: 'multiply', color: 'rgba(30,30,35,0.50)' },
    ],
  },
  'frosted-full': {
    label: 'Frosted', defaultVlt: 0, price: '$10-20/sqft', stock: 'Order in',
    desc: 'Complete privacy day and night. Diffused natural light maintained. Perfect for bathrooms, sidelights, office partitions.',
    passes: [
      { blend: 'normal', color: 'rgba(255,255,255,0.82)' },
      { blend: 'normal', color: 'rgba(240,242,245,0.08)' },
    ],
    skipVlt: true,
  },
  'frosted-light': {
    label: 'Light Frosted', defaultVlt: 0, price: '$10-20/sqft', stock: 'Order in',
    desc: 'Soft privacy — shapes visible but details obscured. Great for entryways and conference rooms.',
    passes: [
      { blend: 'normal', color: 'rgba(255,255,255,0.50)' },
    ],
    skipVlt: true,
  },
  'gradient-top': {
    label: 'Gradient', defaultVlt: 50, price: '$12-20/sqft', stock: 'Order in',
    desc: 'Top 60% frosted fading to clear at the bottom. Privacy at eye level, open view below. Modern architectural look.',
    passes: [],
    gradient: { from: 'rgba(255,255,255,0.78)', to: 'rgba(255,255,255,0.03)', stop: 0.6 },
  },
  'stained-amber': {
    label: 'Amber Glass', defaultVlt: 45, price: '$12-22/sqft', stock: 'Order in',
    desc: 'Warm yellow-amber stained glass effect. Decorative and artistic. Adds warm color cast to natural light.',
    passes: [
      { blend: 'multiply', color: 'rgba(255,180,40,0.45)' },
    ],
  },
  'stained-blue': {
    label: 'Blue Glass', defaultVlt: 40, price: '$12-22/sqft', stock: 'Order in',
    desc: 'Cool blue stained glass effect. Modern decorative look. Filters light into a calming blue tone.',
    passes: [
      { blend: 'multiply', color: 'rgba(40,100,200,0.45)' },
    ],
  },
  'stained-green': {
    label: 'Green Glass', defaultVlt: 45, price: '$12-22/sqft', stock: 'Order in',
    desc: 'Green stained glass effect. Natural, organic feel. Pairs well with garden views and plant-filled spaces.',
    passes: [
      { blend: 'multiply', color: 'rgba(40,160,80,0.40)' },
    ],
  },
};

const VLT_PRESETS = [
  { label: 'Very Dark', range: '15%', value: 15 },
  { label: 'Medium', range: '30%', value: 30 },
  { label: 'Light', range: '50%', value: 50 },
  { label: 'Clear', range: '70%', value: 70 },
];

function vltDescription(v) {
  if (v <= 15) return 'Very dark — maximum privacy and heat rejection';
  if (v <= 35) return 'Medium — good heat rejection, some privacy';
  if (v <= 60) return 'Light tint — moderate heat rejection';
  return 'Nearly clear — UV protection only, no visible tint';
}

function applyFilmOverlay(photoBase64, filmType, vltLevel) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      // Draw original photo
      ctx.drawImage(img, 0, 0);

      const effect = FILM_EFFECTS[filmType] || FILM_EFFECTS['ceramic-clear'];

      // Apply gradient effect
      if (effect.gradient) {
        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grad.addColorStop(0, effect.gradient.from);
        grad.addColorStop(effect.gradient.stop || 0.6, effect.gradient.to);
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.globalCompositeOperation = 'normal';
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Apply multi-pass film effect
      for (const pass of effect.passes || []) {
        ctx.globalCompositeOperation = pass.blend;
        ctx.fillStyle = pass.color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Apply VLT darkening (skip for frosted and gradient-only types)
      if (!effect.skipVlt && vltLevel !== undefined) {
        ctx.globalCompositeOperation = 'multiply';
        const darkness = (100 - vltLevel) / 100 * 0.65;
        ctx.fillStyle = `rgba(0,0,0,${darkness})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.globalCompositeOperation = 'source-over';
      resolve(canvas.toDataURL('image/jpeg', 0.85));
    };
    img.src = 'data:image/jpeg;base64,' + photoBase64;
  });
}

const NOT_A_NAME = /\b(estimate|quote|film|window|tint|heat|privacy|cost|install|need|want|help|looking|getting|price|pricing|ballpark|photo|send|ceramic|frosted|security|decorative|residential|commercial)\b/i;
const TRIVIAL_WORDS = /^(yes|no|ok|okay|sure|hello|hi|hey|thanks|thank you|yep|nope|yeah|nah)$/i;

function looksLikeName(text) {
  if (!text || text.length > 40) return false;
  if (!/^[A-Za-z]+(?:\s[A-Za-z]+){0,2}$/.test(text)) return false;
  if (NOT_A_NAME.test(text)) return false;
  if (TRIVIAL_WORDS.test(text)) return false;
  return true;
}

function extractContactInfo(messages) {
  const info = {};
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg.role !== 'user') continue;
    const text = msg.content.trim();

    // Email: contains @ and .
    if (!info.email) {
      const emailMatch = text.match(/[\w.+-]+@[\w-]+\.[\w.]+/);
      if (emailMatch) info.email = emailMatch[0];
    }

    // Phone: 10+ digits (strip formatting)
    if (!info.phone) {
      const digits = text.replace(/\D/g, '');
      if (digits.length >= 10) {
        info.phone = text.match(/[\d().\-+\s]{10,}/)?.[0]?.trim() || digits;
      }
    }

    // Name: 1-3 words, passes exclusion check — only if prior assistant message asked for name
    if (!info.name && i > 0) {
      const prior = messages[i - 1];
      const priorAsked = prior?.role === 'assistant' &&
        /\bname\b/i.test(prior.content) &&
        /\b(what|who|may|can|could|your)\b/i.test(prior.content);
      if (priorAsked && looksLikeName(text)) {
        info.name = text;
      }
    }
  }

  // Fallback name detection: last user message that passes exclusion check
  if (!info.name) {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role !== 'user') continue;
      const text = messages[i].content.trim();
      if (looksLikeName(text) && !/@/.test(text)) {
        info.name = text;
        break;
      }
    }
  }
  return info;
}

export default function ChatWidget() {
  const restoredRef = useRef(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = sessionStorage.getItem('ahof_chat');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 1) {
          console.log('Restored chat:', parsed.length, 'messages');
          restoredRef.current = true;
          return parsed;
        }
      }
    } catch {}
    return [OPENING_MESSAGE];
  });
  const [open, setOpen] = useState(restoredRef.current);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [analyzingImage, setAnalyzingImage] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', location: '' });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [pendingImage, setPendingImage] = useState(null); // { data, mediaType, preview }
  const [photoHistory, setPhotoHistory] = useState([]); // [{ data, mediaType, preview, label }]
  const [showPhotoConsent, setShowPhotoConsent] = useState(false);
  const [filmPreview, setFilmPreview] = useState(null); // { sourceBase64, filmType, vlt, overlayUrl, showBefore }
  const [filmSelection, setFilmSelection] = useState(null); // saved choice for lead
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const imageInputRef = useRef(null);

  // Persist conversation across page navigations
  useEffect(() => {
    if (messages.length > 1) {
      sessionStorage.setItem('ahof_chat', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-open with contextual opener on relevant pages (skip if conversation restored)
  useEffect(() => {
    if (restoredRef.current) return;
    const context = getPageContext();
    if (context.trigger === 'auto' && !sessionStorage.getItem('ahof_chat_opened')) {
      const timer = setTimeout(() => {
        setOpen(true);
        setMessages([{ role: 'assistant', content: context.opener }]);
        sessionStorage.setItem('ahof_chat_opened', 'true');
      }, context.delay);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => { if (open) setPulse(false); }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const ESTIMATE_RE = /\b(estimate|quote|how much|ballpark|cost|price|pricing)\b/i;

  const sendMessage = async (text) => {
    if ((!text.trim() && !pendingImage) || loading) return;

    // Track photo in history when sending an image
    const imageToSend = pendingImage;
    let updatedPhotoHistory = photoHistory;
    if (imageToSend) {
      const label = `Photo ${photoHistory.length + 1}`;
      const newPhoto = { data: imageToSend.data, mediaType: imageToSend.mediaType, preview: imageToSend.preview, label };
      updatedPhotoHistory = [...photoHistory, newPhoto];
      setPhotoHistory(updatedPhotoHistory);
    }

    // Detect multi-photo estimate trigger
    const isEstimateTrigger = !imageToSend && ESTIMATE_RE.test(text) && updatedPhotoHistory.length >= 2;

    const displayContent = pendingImage
      ? (text.trim() ? text : `📷 ${updatedPhotoHistory[updatedPhotoHistory.length - 1]?.label || 'Sent a photo'}`)
      : text;
    const photoLabel = imageToSend ? updatedPhotoHistory[updatedPhotoHistory.length - 1]?.label : undefined;
    const userMessage = { role: 'user', content: displayContent, ...(imageToSend ? { image: imageToSend.preview, photoLabel } : {}) };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setPendingImage(null);
    setInput('');
    setLoading(true);
    if (imageToSend || isEstimateTrigger) setAnalyzingImage(true);

    // Extract contact info from the new message and pre-populate form
    const detected = extractContactInfo(newMessages);
    if (detected.name || detected.email || detected.phone) {
      setLeadForm(prev => ({
        ...prev,
        ...(detected.name && !prev.name ? { name: detected.name } : {}),
        ...(detected.email && !prev.email ? { email: detected.email } : {}),
        ...(detected.phone && !prev.phone ? { phone: detected.phone } : {}),
      }));
    }

    // If user typed an email address, show lead form immediately
    if (!leadCaptured && !showLeadForm && text.includes('@') && text.includes('.')) {
      setTimeout(() => setShowLeadForm(true), 500);
    }

    try {
      const payload = { messages: newMessages.map(m => ({ role: m.role, content: m.content })) };
      if (isEstimateTrigger) {
        // Send all session photos for multi-photo project assessment
        payload.photos = updatedPhotoHistory.map(p => ({ data: p.data, mediaType: p.mediaType, label: p.label }));
        payload.projectEstimate = true;
      } else if (imageToSend) {
        payload.image = { data: imageToSend.data, mediaType: imageToSend.mediaType };
      }
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('API error');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.text) {
                assistantText += data.text;
                setMessages(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { role: 'assistant', content: assistantText };
                  return updated;
                });
              }
            } catch (e) {}
          }
        }
      }

      // Show lead form when: Claude asks for contact info, OR after 4+ exchanges, OR user typed an email
      if (!leadCaptured && !showLeadForm) {
        const lower = assistantText.toLowerCase();
        const askingForInfo = lower.includes('name') && (lower.includes('email') || lower.includes('phone'));
        const enoughMessages = newMessages.length + 1 >= 8; // 4 user + 4 assistant
        if (askingForInfo || enoughMessages) {
          // Pre-populate form from conversation history before showing
          const allMsgs = [...newMessages, { role: 'assistant', content: assistantText }];
          const detected = extractContactInfo(allMsgs);
          if (detected.name || detected.email || detected.phone) {
            setLeadForm(prev => ({
              ...prev,
              ...(detected.name && !prev.name ? { name: detected.name } : {}),
              ...(detected.email && !prev.email ? { email: detected.email } : {}),
              ...(detected.phone && !prev.phone ? { phone: detected.phone } : {}),
            }));
          }
          setTimeout(() => setShowLeadForm(true), 1000);
        }
      }

    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having trouble connecting. Please call (480) 788-1591 or email arizonahouseoffilm@gmail.com."
      }]);
    } finally {
      setLoading(false);
      setAnalyzingImage(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const submitLead = async () => {
    if (!leadForm.name || !leadForm.email) return;
    const summary = messages.map(m => `${m.role === 'user' ? 'Customer' : 'Assistant'}: ${m.content}`).join('\n\n');
    const selEffect = filmSelection ? FILM_EFFECTS[filmSelection.filmType] : null;
    const payload = {
      leadData: {
        name: leadForm.name,
        email: leadForm.email,
        phone: leadForm.phone,
        location: leadForm.location,
        filmSelection: filmSelection ? {
          filmType: filmSelection.filmType,
          filmLabel: filmSelection.filmLabel,
          vlt: filmSelection.vlt,
          price: selEffect?.price || null,
          stock: selEffect?.stock || null,
        } : null,
        photoCount: photoHistory.length,
        summary,
      },
    };
    console.log('Submitting lead:', JSON.stringify(payload));
    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      console.log('Lead submit response:', resp.status, resp.statusText);
      setLeadCaptured(true);
      setShowLeadForm(false);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Thanks ${leadForm.name}! Jimmy will reach out to ${leadForm.email} within 24 hours to schedule your free on-site estimate. You can also call (480) 788-1591 for immediate assistance.`
      }]);
    } catch (e) { console.error('Lead error:', e); }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  };

  const handleFilmSelect = async (filmType) => {
    const lastPhoto = photoHistory[photoHistory.length - 1];
    if (!lastPhoto) return;
    const effect = FILM_EFFECTS[filmType];
    const vlt = effect?.defaultVlt ?? 40;
    const overlayUrl = await applyFilmOverlay(lastPhoto.data, filmType, vlt);
    setFilmPreview({ sourceBase64: lastPhoto.data, sourcePreview: lastPhoto.preview, filmType, vlt, overlayUrl, showBefore: false });
  };

  const handleVltChange = async (newVlt) => {
    if (!filmPreview) return;
    const overlayUrl = await applyFilmOverlay(filmPreview.sourceBase64, filmPreview.filmType, newVlt);
    setFilmPreview(prev => ({ ...prev, vlt: newVlt, overlayUrl }));
  };

  const handleSelectFilmForQuote = () => {
    if (!filmPreview) return;
    const effect = FILM_EFFECTS[filmPreview.filmType];
    setFilmSelection({ filmType: filmPreview.filmType, filmLabel: effect?.label, vlt: filmPreview.vlt, overlayUrl: filmPreview.overlayUrl });
    setShowLeadForm(true);
  };

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const img = new Image();
      const reader = new FileReader();
      reader.onload = (e) => {
        img.onload = () => {
          const maxWidth = 1200;
          const scale = Math.min(1, maxWidth / img.width);
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const compressed = canvas.toDataURL('image/jpeg', 0.8);
          resolve(compressed.split(',')[1]);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    const base64 = await compressImage(file);
    const preview = `data:image/jpeg;base64,${base64}`;
    setPendingImage({ data: base64, mediaType: 'image/jpeg', preview });
  };

  return (
    <>
      <button
        onClick={() => {
          if (!open) {
            const context = getPageContext();
            if (messages.length === 1 && messages[0].content === DEFAULT_OPENER) {
              setMessages([{ role: 'assistant', content: context.opener }]);
            }
            sessionStorage.setItem('ahof_chat_opened', 'true');
          }
          setOpen(o => !o);
        }}
        aria-label="Open chat"
        style={{
          position:'fixed', bottom:'24px', right:'24px', zIndex:9999,
          width:'60px', height:'60px', borderRadius:'50%',
          background:'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)',
          border:'2px solid #22c55e', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow: pulse ? '0 0 0 0 rgba(34,197,94,0.7)' : '0 4px 20px rgba(0,0,0,0.3)',
          animation: pulse ? 'chatPulse 2s infinite' : 'none',
          transition:'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform='scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {open && (
        <div style={{
          position:'fixed', bottom:'96px', right:'24px', zIndex:9998,
          width:'min(380px, calc(100vw - 32px))',
          height:'min(520px, calc(100vh - 120px))',
          background:'#0f0f1a',
          border:'1px solid rgba(34,197,94,0.3)',
          borderRadius:'16px',
          boxShadow:'0 20px 60px rgba(0,0,0,0.5)',
          display:'flex', flexDirection:'column', overflow:'hidden',
          fontFamily:'system-ui,-apple-system,sans-serif',
        }}>

          <div style={{
            background:'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)',
            borderBottom:'1px solid rgba(34,197,94,0.2)',
            padding:'14px 16px', display:'flex', alignItems:'center', gap:'10px',
          }}>
            <div style={{
              width:'36px', height:'36px', borderRadius:'50%',
              background:'rgba(34,197,94,0.15)', border:'1.5px solid #22c55e',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <div style={{ color:'#fff', fontWeight:700, fontSize:'14px', lineHeight:1.2 }}>
                Arizona House of Film
              </div>
              <div style={{ color:'#22c55e', fontSize:'11px', display:'flex', alignItems:'center', gap:'4px' }}>
                <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#22c55e', display:'inline-block' }}/>
                Online · ROC #314088
              </div>
            </div>
          </div>

          <div style={{
            flex:1, overflowY:'auto', padding:'16px',
            display:'flex', flexDirection:'column', gap:'10px',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display:'flex', justifyContent: msg.role==='user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth:'80%', padding:'10px 14px',
                  borderRadius: msg.role==='user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role==='user'
                    ? 'linear-gradient(135deg,#22c55e,#16a34a)'
                    : 'rgba(255,255,255,0.06)',
                  color:'#fff', fontSize:'13px', lineHeight:'1.5',
                  border: msg.role==='assistant' ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  whiteSpace:'pre-wrap',
                }}>
                  {msg.image && (
                    <div style={{ marginBottom:'6px' }}>
                      <img src={msg.image} alt="Uploaded photo" style={{
                        maxWidth:'100%', maxHeight:'160px', borderRadius:'8px', display:'block',
                      }} />
                      {msg.photoLabel && (
                        <span style={{ fontSize:'10px', color:'rgba(255,255,255,0.6)', marginTop:'2px', display:'block' }}>{msg.photoLabel}</span>
                      )}
                    </div>
                  )}
                  {msg.role === 'assistant' ? formatMessage(msg.content) : msg.content}
                  {msg.role === 'assistant' && msg.content && /\btotal.*\$[\d,]+/i.test(msg.content) && photoHistory.length >= 2 && !leadCaptured && (
                    <button
                      onClick={() => setShowLeadForm(true)}
                      style={{
                        marginTop:'8px', display:'block', width:'100%',
                        background:'#22c55e', color:'#000', border:'none',
                        borderRadius:'8px', padding:'8px 12px', fontWeight:700,
                        fontSize:'12px', cursor:'pointer',
                      }}
                    >
                      Get Exact Quote →
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* FILM OVERLAY PREVIEW PANEL */}
            {!loading && photoHistory.length > 0 && messages.length > 1 && messages[messages.length - 1]?.role === 'assistant' && messages.some(m => m.image) && (
              <div style={{
                background:'rgba(255,255,255,0.04)', border:'1px solid rgba(34,197,94,0.2)',
                borderRadius:'12px', padding:'10px', marginTop:'4px',
              }}>
                {/* Finish selector — horizontal scroll */}
                <div style={{ overflowX:'auto', display:'flex', gap:'5px', paddingBottom:'8px', scrollbarWidth:'none' }}>
                  {Object.entries(FILM_EFFECTS).map(([key, ef]) => (
                    <button key={key} onClick={() => handleFilmSelect(key)} style={{
                      flexShrink:0, padding:'4px 9px', borderRadius:'14px', fontSize:'10px', fontWeight:600,
                      cursor:'pointer', whiteSpace:'nowrap', transition:'all 0.15s',
                      background: filmPreview?.filmType === key ? '#22c55e' : 'rgba(255,255,255,0.08)',
                      color: filmPreview?.filmType === key ? '#000' : '#ccc',
                      border: filmPreview?.filmType === key ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
                    }}>{ef.label}</button>
                  ))}
                </div>

                {filmPreview && (() => {
                  const activeEffect = FILM_EFFECTS[filmPreview.filmType];
                  return (
                  <>
                    {/* Live preview + Before/After */}
                    <div style={{ position:'relative', marginBottom:'6px' }}>
                      <img
                        src={filmPreview.showBefore ? filmPreview.sourcePreview : filmPreview.overlayUrl}
                        alt={filmPreview.showBefore ? 'Original window' : 'Film preview'}
                        style={{ width:'100%', borderRadius:'8px', display:'block' }}
                      />
                      <button onClick={() => setFilmPreview(prev => ({ ...prev, showBefore: !prev.showBefore }))} style={{
                        position:'absolute', top:'6px', right:'6px',
                        background:'rgba(0,0,0,0.75)', color:'#fff', border:'none',
                        borderRadius:'6px', padding:'4px 10px', fontSize:'10px',
                        fontWeight:700, cursor:'pointer', letterSpacing:'0.5px',
                      }}>{filmPreview.showBefore ? '▸ AFTER' : '◂ BEFORE'}</button>
                    </div>

                    {/* VLT slider — skip for frosted/skipVlt types */}
                    {!activeEffect?.skipVlt && (
                      <div style={{ marginBottom:'6px' }}>
                        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'3px' }}>
                          <span style={{ color:'#e5e7eb', fontSize:'11px', fontWeight:600 }}>Light transmission: {filmPreview.vlt}%</span>
                        </div>
                        <input type="range" min="5" max="88" value={filmPreview.vlt}
                          onChange={e => handleVltChange(Number(e.target.value))}
                          style={{ width:'100%', accentColor:'#22c55e', height:'4px' }}
                        />
                        <div style={{ display:'flex', justifyContent:'space-between', marginTop:'1px' }}>
                          <span style={{ color:'#6b7280', fontSize:'9px' }}>Dark 5%</span>
                          <span style={{ color:'#6b7280', fontSize:'9px' }}>Clear 88%</span>
                        </div>
                        <div style={{ display:'flex', gap:'4px', marginTop:'4px' }}>
                          {VLT_PRESETS.map(p => (
                            <button key={p.value} onClick={() => handleVltChange(p.value)} style={{
                              flex:1, padding:'4px 0', borderRadius:'6px', fontSize:'10px', fontWeight:600,
                              cursor:'pointer', border:'1px solid rgba(255,255,255,0.1)',
                              background: Math.abs(filmPreview.vlt - p.value) < 10 ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.04)',
                              color: Math.abs(filmPreview.vlt - p.value) < 10 ? '#22c55e' : '#9ca3af',
                            }}>{p.label} {p.range}</button>
                          ))}
                        </div>
                        <div style={{ color:'#9ca3af', fontSize:'10px', marginTop:'4px', textAlign:'center' }}>
                          {vltDescription(filmPreview.vlt)}
                        </div>
                      </div>
                    )}

                    {/* Film description card */}
                    <div style={{
                      background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)',
                      borderRadius:'8px', padding:'8px 10px', marginBottom:'6px',
                    }}>
                      <div style={{ color:'#fff', fontSize:'11px', fontWeight:700, marginBottom:'2px' }}>
                        {activeEffect?.label}{!activeEffect?.skipVlt ? ` at ${filmPreview.vlt}% VLT` : ''}
                      </div>
                      <div style={{ color:'#9ca3af', fontSize:'10px', lineHeight:'1.5', marginBottom:'4px' }}>
                        {activeEffect?.desc}
                      </div>
                      <div style={{ display:'flex', gap:'8px', fontSize:'10px' }}>
                        <span style={{ color:'#22c55e', fontWeight:600 }}>{activeEffect?.price}</span>
                        <span style={{ color: activeEffect?.stock === 'In stock' ? '#22c55e' : '#f59e0b', fontWeight:600 }}>
                          {activeEffect?.stock === 'In stock' ? '● In stock — same week' : '○ Order in — 1-2 weeks'}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    {!leadCaptured && (
                      <button onClick={handleSelectFilmForQuote} style={{
                        width:'100%', background:'#22c55e', color:'#000', border:'none',
                        borderRadius:'8px', padding:'9px', fontWeight:700,
                        fontSize:'12px', cursor:'pointer',
                      }}>I want this look → Get Exact Quote</button>
                    )}
                  </>
                  );
                })()}

                {!filmPreview && (
                  <p style={{ color:'#6b7280', fontSize:'11px', textAlign:'center', margin:'4px 0 0' }}>
                    Tap a finish above to preview it on your window
                  </p>
                )}
              </div>
            )}

            {loading && (
              <div style={{ display:'flex', justifyContent:'flex-start' }}>
                <div style={{
                  padding:'10px 14px', borderRadius:'16px 16px 16px 4px',
                  background:'rgba(255,255,255,0.06)',
                  border:'1px solid rgba(255,255,255,0.08)',
                  display:'flex', gap:'6px', alignItems:'center',
                }}>
                  {analyzingImage && (
                    <span style={{ color:'#9ca3af', fontSize:'12px', marginRight:'2px' }}>
                      {photoHistory.length >= 2 ? `Analyzing ${photoHistory.length} photos for estimate` : 'Analyzing your window photo'}
                    </span>
                  )}
                  {[0,1,2].map(i => (
                    <span key={i} style={{
                      width:'6px', height:'6px', borderRadius:'50%',
                      background:'#22c55e', display:'inline-block',
                      animation:`typingDot 1.2s ${i*0.2}s infinite`,
                    }}/>
                  ))}
                </div>
              </div>
            )}

            {showLeadForm && !leadCaptured && (
              <div style={{
                background:'rgba(34,197,94,0.08)',
                border:'1px solid rgba(34,197,94,0.3)',
                borderRadius:'12px', padding:'14px',
                display:'flex', flexDirection:'column', gap:'8px',
              }}>
                <div style={{ color:'#22c55e', fontSize:'12px', fontWeight:700, marginBottom:'4px' }}>
                  GET YOUR FREE ESTIMATE
                </div>
                {['name','email','phone','location'].map(field => (
                  <input
                    key={field}
                    type={field==='email' ? 'email' : 'text'}
                    placeholder={field==='name' ? 'Your name *' : field==='email' ? 'Email address *' : field==='phone' ? 'Phone number' : 'City or address'}
                    value={leadForm[field]}
                    onChange={e => setLeadForm(prev => ({ ...prev, [field]: e.target.value }))}
                    style={{
                      background:'rgba(255,255,255,0.06)',
                      border:'1px solid rgba(255,255,255,0.12)',
                      borderRadius:'8px', padding:'8px 12px',
                      color:'#fff', fontSize:'13px', outline:'none', width:'100%',
                    }}
                  />
                ))}
                <button
                  onClick={submitLead}
                  disabled={!leadForm.name || !leadForm.email}
                  style={{
                    background:'#22c55e', color:'#000', border:'none',
                    borderRadius:'8px', padding:'9px', fontWeight:700,
                    fontSize:'13px',
                    cursor: leadForm.name && leadForm.email ? 'pointer' : 'not-allowed',
                    opacity: leadForm.name && leadForm.email ? 1 : 0.5,
                  }}
                >
                  Send My Info →
                </button>
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {!showLeadForm && !leadCaptured && (
            <button
              onClick={() => setShowLeadForm(true)}
              style={{
                background:'none', border:'none', cursor:'pointer',
                color:'#22c55e', fontSize:'12px', fontWeight:600,
                padding:'6px 16px', textAlign:'center',
                borderTop:'1px solid rgba(255,255,255,0.06)',
              }}
            >
              Get Free Estimate
            </button>
          )}

          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageSelect}
            style={{ display:'none' }}
          />

          {pendingImage && (
            <div style={{
              borderTop:'1px solid rgba(255,255,255,0.06)',
              padding:'8px 12px', background:'#0f0f1a',
              display:'flex', alignItems:'center', gap:'8px',
            }}>
              <img src={pendingImage.preview} alt="Preview" style={{
                width:'48px', height:'48px', objectFit:'cover', borderRadius:'6px',
                border:'1px solid rgba(34,197,94,0.3)',
              }} />
              <span style={{ color:'#9ca3af', fontSize:'12px', flex:1 }}>Photo ready to send</span>
              <button
                onClick={() => setPendingImage(null)}
                style={{
                  background:'none', border:'none', color:'#ef4444',
                  cursor:'pointer', fontSize:'16px', padding:'2px 6px',
                }}
              >×</button>
            </div>
          )}

          <div style={{
            borderTop:'1px solid rgba(255,255,255,0.06)',
            padding:'12px', display:'flex', gap:'8px', background:'#0f0f1a',
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={pendingImage ? "Add a message or tap send..." : "Ask about window film..."}
              disabled={loading}
              style={{
                flex:1, background:'rgba(255,255,255,0.06)',
                border:'1px solid rgba(255,255,255,0.1)',
                borderRadius:'10px', padding:'9px 14px',
                color:'#fff', fontSize:'13px', outline:'none',
              }}
            />
            <button
              onClick={() => {
                if (sessionStorage.getItem('ahof_photo_consent')) {
                  imageInputRef.current?.click();
                } else {
                  setShowPhotoConsent(true);
                }
              }}
              disabled={loading}
              aria-label="Upload photo"
              style={{
                background:'none', border:'1px solid rgba(255,255,255,0.1)',
                borderRadius:'10px', width:'38px', height:'38px',
                cursor: loading ? 'not-allowed' : 'pointer',
                display:'flex', alignItems:'center', justifyContent:'center',
                flexShrink:0, opacity: loading ? 0.4 : 1,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </button>
            <button
              onClick={() => sendMessage(input)}
              disabled={(!input.trim() && !pendingImage) || loading}
              style={{
                background: (input.trim() || pendingImage) && !loading ? '#22c55e' : 'rgba(34,197,94,0.2)',
                border:'none', borderRadius:'10px',
                width:'38px', height:'38px',
                cursor: (input.trim() || pendingImage) && !loading ? 'pointer' : 'not-allowed',
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'background 0.2s', flexShrink:0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke={(input.trim() || pendingImage) && !loading ? '#000' : '#22c55e'} strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {showPhotoConsent && (
        <div style={{
          position:'fixed', inset:0, zIndex:10000,
          background:'rgba(0,0,0,0.6)', display:'flex',
          alignItems:'center', justifyContent:'center',
        }}>
          <div style={{
            background:'#1a1a2e', border:'1px solid rgba(34,197,94,0.3)',
            borderRadius:'12px', padding:'20px', maxWidth:'300px', width:'90%',
            fontFamily:'system-ui,-apple-system,sans-serif',
          }}>
            <div style={{ fontSize:'16px', marginBottom:'8px' }}>
              <span role="img" aria-label="camera">📷</span> Photo Analysis
            </div>
            <p style={{ color:'#9ca3af', fontSize:'13px', lineHeight:'1.5', margin:'0 0 16px' }}>
              Your photo will be analyzed by AI to recommend window film. Images are not stored and are deleted after analysis.
            </p>
            <div style={{ display:'flex', gap:'8px' }}>
              <button
                onClick={() => {
                  sessionStorage.setItem('ahof_photo_consent', 'true');
                  setShowPhotoConsent(false);
                  imageInputRef.current?.click();
                }}
                style={{
                  flex:1, background:'#22c55e', color:'#000', border:'none',
                  borderRadius:'8px', padding:'10px', fontWeight:700,
                  fontSize:'13px', cursor:'pointer',
                }}
              >Got it</button>
              <button
                onClick={() => setShowPhotoConsent(false)}
                style={{
                  flex:1, background:'rgba(255,255,255,0.1)', color:'#fff', border:'none',
                  borderRadius:'8px', padding:'10px', fontWeight:600,
                  fontSize:'13px', cursor:'pointer',
                }}
              >Cancel</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chatPulse {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.7); }
          70% { box-shadow: 0 0 0 12px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        @keyframes typingDot {
          0%,60%,100% { transform:translateY(0); opacity:0.4; }
          30% { transform:translateY(-4px); opacity:1; }
        }
      `}</style>
    </>
  );
}
