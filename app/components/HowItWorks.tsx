'use client';
const steps = [
  { num: '01', icon: '🎭', title: 'Sign up anonymously', desc: 'Create an account with just an email. VeilSpace automatically assigns you a beautiful anonymous persona — "Silent Raven", "Midnight Fox" — that changes per Space.' },
  { num: '02', icon: '🌐', title: 'Find your Space', desc: 'Browse 44+ curated Spaces across Mental Health, Relationships, Confessions, Campus Life, Workplace venting, and more. Join public or private Spaces with invite codes.' },
  { num: '03', icon: '🗣️', title: 'Post without fear', desc: 'Share your thoughts, stories, confessions, or questions. React, comment, and connect — knowing no one knows it\'s you. Your real self stays completely hidden.' },
  { num: '04', icon: '🛡️', title: 'Stay protected', desc: 'Community moderation, report systems, and smart thresholds keep Spaces safe. Privacy is the foundation — not an afterthought.' },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '100px 5%',
      }}
    >
      <div className="section-label">How it Works</div>
      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'var(--text-high)', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 16 }}>
        Three steps to true freedom
      </h2>
      <p style={{ fontSize: 17, color: 'var(--text-med)', lineHeight: 1.7, maxWidth: 560 }}>
        No social baggage. No profile picture. No algorithm tracking your every move.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 24,
        marginTop: 60,
      }}>
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="reveal"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 24,
              padding: 32,
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.3s, transform 0.3s',
              transitionDelay: `${i * 0.1}s`,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-bright)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = '';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
            }}
          >
            <div style={{
              fontFamily: "'Cinzel', serif", fontSize: 48, fontWeight: 900, lineHeight: 1,
              marginBottom: 16,
              background: 'linear-gradient(135deg, var(--border-bright), var(--text-low))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{step.num}</div>
            <span style={{ fontSize: 28, marginBottom: 12, display: 'block' }}>{step.icon}</span>
            <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-high)', marginBottom: 8 }}>{step.title}</div>
            <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.65 }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
