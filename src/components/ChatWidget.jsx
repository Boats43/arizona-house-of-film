import { useState, useEffect, useRef } from 'react';

const OPENING_MESSAGE = {
  role: 'assistant',
  content: "Hi! I'm the Arizona House of Film assistant. What can I help you with today?"
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([OPENING_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' });
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [pulse, setPulse] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const isQuotePage = window.location.pathname.includes('quote') ||
      window.location.pathname.includes('estimate') ||
      window.location.pathname.includes('rebate');
    if (isQuotePage) {
      const timer = setTimeout(() => setOpen(true), 30000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => { if (open) setPulse(false); }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;
    const userMessage = { role: 'user', content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

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

      if (!leadCaptured && assistantText.toLowerCase().includes('name and email')) {
        setTimeout(() => setShowLeadForm(true), 1000);
      }

    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having trouble connecting. Please call (480) 788-1591 or email arizonahouseoffilm@gmail.com."
      }]);
    } finally {
      setLoading(false);
    }
  };

  const submitLead = async () => {
    if (!leadForm.name || !leadForm.email) return;
    const summary = messages.filter(m => m.role === 'user').map(m => m.content).join(' | ');
    try {
      await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadData: { ...leadForm, summary } }),
      });
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
        onClick={() => setOpen(o => !o)}
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
                  {msg.content}
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
                {['name','email','phone'].map(field => (
                  <input
                    key={field}
                    type={field==='email' ? 'email' : 'text'}
                    placeholder={field==='name' ? 'Your name *' : field==='email' ? 'Email address *' : 'Phone number'}
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
