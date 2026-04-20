'use client';
import { useState } from 'react';
import PageShell from '../components/PageShell';
import { supabase } from '../lib/supabase';

const S = {
  label: { fontSize: 12, fontWeight: 700, color: 'var(--text-med)', textTransform: 'uppercase' as const, letterSpacing: '1.5px', marginBottom: 8, display: 'block' },
  input: { width: '100%', background: 'var(--card)', border: '1px solid var(--border-bright)', borderRadius: 12, padding: '13px 18px', fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'var(--text-high)', outline: 'none', marginBottom: 20, transition: 'border-color 0.2s', boxSizing: 'border-box' as const },
  card: { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 24, display: 'flex', alignItems: 'flex-start', gap: 16 } as React.CSSProperties,
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase
      .from('contact_messages')
      .insert([{
        name:    form.name.trim(),
        email:   form.email.trim().toLowerCase(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      }]);

    if (error) {
      console.error('Supabase error:', error);
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <PageShell
      title="Contact Us"
      subtitle="Have a question, partnership idea, or just want to say hello? We'd love to hear from you."
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 56 }} className="contact-grid">

        {/* Contact channels */}
        <div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, fontWeight: 700, color: 'var(--text-high)', marginBottom: 24 }}>Get in Touch</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '📧', title: 'General Enquiries',  desc: 'hello@veils.space',        sub: 'We aim to reply within 48 hours.' },
              { icon: '🛡️', title: 'Safety & Trust',     desc: 'safety@veils.space',       sub: 'For urgent content or safety concerns.' },
              { icon: '🤝', title: 'Partnerships',       desc: 'partnerships@veils.space', sub: 'Press, collaboration, or business enquiries.' },
              { icon: '🔒', title: 'Privacy',            desc: 'privacy@veils.space',      sub: 'Data requests or privacy concerns.' },
            ].map(item => (
              <div key={item.title} style={S.card}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-high)', marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--primary-glow)', marginBottom: 4 }}>{item.desc}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-low)' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, fontWeight: 700, color: 'var(--text-high)', marginBottom: 24 }}>Send a Message</h2>

          {status === 'success' ? (
            <div style={{
              background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: 16, padding: '40px 24px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>✅</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-high)', marginBottom: 10 }}>Message sent!</div>
              <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.6, marginBottom: 24 }}>
                Thanks for reaching out. We&apos;ll get back to you within 48 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{
                  background: 'transparent', border: '1px solid var(--border-bright)',
                  borderRadius: 100, padding: '10px 24px', fontSize: 13,
                  color: 'var(--text-med)', cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label style={S.label}>Your Name</label>
              <input
                required
                style={S.input}
                placeholder="Ghost of a name..."
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onBlur={e  => (e.currentTarget.style.borderColor = 'var(--border-bright)')}
              />

              <label style={S.label}>Email Address</label>
              <input
                required
                type="email"
                style={S.input}
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onBlur={e  => (e.currentTarget.style.borderColor = 'var(--border-bright)')}
              />

              <label style={S.label}>Subject</label>
              <input
                required
                style={S.input}
                placeholder="What's on your mind?"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onBlur={e  => (e.currentTarget.style.borderColor = 'var(--border-bright)')}
              />

              <label style={S.label}>Message</label>
              <textarea
                required
                style={{ ...S.input, height: 130, resize: 'vertical', marginBottom: 24 }}
                placeholder="Say what you actually mean..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                onBlur={e  => (e.currentTarget.style.borderColor = 'var(--border-bright)')}
              />

              {status === 'error' && (
                <p style={{ fontSize: 13, color: '#EF4444', marginBottom: 16, lineHeight: 1.5 }}>
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
                  color: '#fff', border: 'none', borderRadius: 12,
                  padding: '14px 0', fontSize: 15, fontWeight: 700,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 20px rgba(124,111,255,0.4)',
                  transition: 'opacity 0.2s, transform 0.2s',
                  opacity: status === 'loading' ? 0.65 : 1,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageShell>
  );
}
