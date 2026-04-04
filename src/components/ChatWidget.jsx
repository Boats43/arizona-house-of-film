import { useState, useEffect, useRef } from 'react';

const DEFAULT_OPENER = "Hi! I'm the Arizona House of Film assistant. What can I help you with today?";

const OPENING_MESSAGE = { role: 'assistant', content: DEFAULT_OPENER };

function getPageContext() {
  const path = window.location.pathname;

  if (path.includes('/films/casper')) return {
    trigger: 'auto', delay: 15000,
    opener: "I see you're looking at Casper Cloaking Film — it makes screens invisible from outside while staying clear from inside. Is this for a conference room or office space?",
  };
  if (path.includes('/films/frosted') || path.includes('/films/etched')) return {
    trigger: 'auto', delay: 20000,
    opener: "Looking for privacy film? I can help you find the right opacity and pattern for your space. Is this for a bathroom, office, or entryway?",
  };
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
  if (path.includes('/brands/huper-optik')) return {
    trigger: 'auto', delay: 15000,
    opener: "Hüper Optik is our newest brand — German nano-ceramic technology, no signal interference, 99% UV rejection. Which series are you interested in — Ceramic, Select, or Safety?",
  };
  if (path.includes('/brands/')) return {
    trigger: 'auto', delay: 20000,
    opener: "Have questions about this film brand? I can compare specs, pricing ranges, and help you pick the right product for your project.",
  };
  if (path.includes('/industries/government')) return {
    trigger: 'auto', delay: 10000,
    opener: "Government or institutional project? We handle compliance documentation, security clearances, and blast mitigation specs. What facility type are you working with?",
  };
  if (path.includes('/industries/')) return {
    trigger: 'auto', delay: 20000,
    opener: "Have questions about window film for your industry? I can recommend specific films and connect you with our team for a free estimate.",
  };
  if (path.includes('/store')) return {
    trigger: 'manual_only',
    opener: "Need help finding a specific film? Tell me what you're looking for — pattern, opacity, application — and I'll find the right SKU from our 618-film catalog.",
  };
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
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', location: '' });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [pulse, setPulse] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

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

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;
    const userMessage = { role: 'user', content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    // If user typed an email address, show lead form immediately
    if (!leadCaptured && !showLeadForm && text.includes('@') && text.includes('.')) {
      setTimeout(() => setShowLeadForm(true), 500);
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
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
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const submitLead = async () => {
    if (!leadForm.name || !leadForm.email) return;
    const summary = messages.map(m => `${m.role === 'user' ? 'Customer' : 'Assistant'}: ${m.content}`).join('\n\n');
    const payload = { leadData: { ...leadForm, summary } };
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
        content: `Thanks ${leadForm.name}! A specialist will contact you at ${leadForm.email} within 24 hours. You can also call (480) 788-1591 for immediate assistance.`
      }]);
    } catch (e) { console.error('Lead error:', e); }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
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
                  {msg.role === 'assistant' ? formatMessage(msg.content) : msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div style={{ display:'flex', justifyContent:'flex-start' }}>
                <div style={{
                  padding:'10px 14px', borderRadius:'16px 16px 16px 4px',
                  background:'rgba(255,255,255,0.06)',
                  border:'1px solid rgba(255,255,255,0.08)',
                  display:'flex', gap:'4px', alignItems:'center',
                }}>
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

          <div style={{
            borderTop:'1px solid rgba(255,255,255,0.06)',
            padding:'12px', display:'flex', gap:'8px', background:'#0f0f1a',
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about window film..."
              disabled={loading}
              style={{
                flex:1, background:'rgba(255,255,255,0.06)',
                border:'1px solid rgba(255,255,255,0.1)',
                borderRadius:'10px', padding:'9px 14px',
                color:'#fff', fontSize:'13px', outline:'none',
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              style={{
                background: input.trim() && !loading ? '#22c55e' : 'rgba(34,197,94,0.2)',
                border:'none', borderRadius:'10px',
                width:'38px', height:'38px',
                cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'background 0.2s', flexShrink:0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke={input.trim() && !loading ? '#000' : '#22c55e'} strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
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
