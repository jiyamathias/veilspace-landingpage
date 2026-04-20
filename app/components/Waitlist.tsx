'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'duplicate' | 'error';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [inputError, setInputError] = useState(false);

  const handleSubmit = async () => {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
      setInputError(true);
      setTimeout(() => setInputError(false), 2000);
      return;
    }
    setStatus('loading');
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email: email.trim().toLowerCase() }]);
    if (!error) setStatus('success');
    else if (error.code === '23505') setStatus('duplicate');
    else { console.error('Supabase error:', error); setStatus('error'); }
  };

  const submitted = status === 'success' || status === 'duplicate';

  return (
    <section id="waitlist" style={{ textAlign: 'center', padding: '120px 5%' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%', maxWidth: 600, height: 300,
          background: 'radial-gradient(ellipse, rgba(124,111,255,0.15) 0%, transparent 70%)',
          pointerEvents: 'none', filter: 'blur(20px)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(124, 111, 255, 0.1)',
            border: '1px solid rgba(124, 111, 255, 0.25)',
            borderRadius: 100, padding: '6px 16px',
            fontSize: 12, fontWeight: 600, color: 'var(--primary-glow)',
            letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 28,
          }}>
            <div style={{ width: 6, height: 6, background: 'var(--primary-glow)', borderRadius: '50%', boxShadow: '0 0 8px var(--primary-glow)', animation: 'pulse-anim 2s ease infinite' }} />
            Early Access · Limited Spots
          </div> */}

          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: 900, color: 'var(--text-high)',
            lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.5px',
          }}>
            Ready to drop<br />the{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>mask?</span>
          </h2>

          <p style={{ fontSize: 16, color: 'var(--text-med)', marginBottom: 40, lineHeight: 1.6 }}>
            Join the waitlist and be first to enter VeilSpace when we launch on iOS and Android. No spam — just your invite.
          </p>

          {!submitted ? (
            <>
              <div
                className="waitlist-form-row"
                style={{ display: 'flex', gap: 10, maxWidth: 480, margin: '0 auto 20px', flexWrap: 'wrap', justifyContent: 'center' }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  placeholder={inputError ? 'Please enter a valid email' : 'you@email.com'}
                  disabled={status === 'loading'}
                  style={{
                    flex: 1, minWidth: 200,
                    background: 'var(--card)',
                    border: `1px solid ${inputError ? '#EF4444' : 'var(--border-bright)'}`,
                    borderRadius: 100, padding: '14px 22px',
                    fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: 'var(--text-high)', outline: 'none',
                    transition: 'border-color 0.2s',
                    opacity: status === 'loading' ? 0.6 : 1,
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onBlur={e => (e.currentTarget.style.borderColor = inputError ? '#EF4444' : 'var(--border-bright)')}
                />
                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  style={{
                    background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
                    color: '#fff', border: 'none',
                    borderRadius: 100, padding: '14px 28px',
                    fontSize: 14, fontWeight: 700,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 20px rgba(124, 111, 255, 0.4)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    opacity: status === 'loading' ? 0.7 : 1,
                    minWidth: 140,
                  }}
                >
                  {status === 'loading' ? 'Saving…' : 'Claim My Spot'}
                </button>
              </div>
              {status === 'error' && (
                <p style={{ fontSize: 13, color: '#EF4444', marginBottom: 12 }}>Something went wrong. Please try again.</p>
              )}
            </>
          ) : status === 'success' ? (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: 100, padding: '12px 24px',
              fontSize: 14, fontWeight: 600, color: '#22C55E',
              maxWidth: 400, margin: '0 auto 20px', justifyContent: 'center',
            }}>
              <span>✓</span> You&apos;re on the list! We&apos;ll reach out soon.
            </div>
          ) : (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'rgba(124,111,255,0.08)', border: '1px solid rgba(124,111,255,0.25)',
              borderRadius: 100, padding: '12px 24px',
              fontSize: 14, fontWeight: 600, color: 'var(--primary-glow)',
              maxWidth: 400, margin: '0 auto 20px', justifyContent: 'center',
            }}>
              <span>🌑</span> You&apos;re already on the list — we&apos;ve got you!
            </div>
          )}

          <p style={{ fontSize: 12, color: 'var(--text-low)' }}>
            No spam. No data selling. Unsubscribe anytime. By joining you agree to our{' '}
            <a href="#" style={{ color: 'var(--text-low)', textDecoration: 'underline' }}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
