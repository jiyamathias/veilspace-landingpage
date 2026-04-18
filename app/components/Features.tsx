'use client';
export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 5%' }}>
      <div className="section-label">Features</div>
      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'var(--text-high)', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 16 }}>
        Built for authentic expression
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 48 }} className="features-grid">
        {/* Large card */}
        <div className="reveal" style={{
          gridColumn: 'span 2',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(124,111,255,0.08), rgba(170,123,255,0.04))',
          border: '1px solid rgba(124,111,255,0.2)',
          borderRadius: 24, padding: 32,
          transition: 'border-color 0.3s, transform 0.3s',
        }}>
          <div>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(124,111,255,0.1)', border: '1px solid rgba(124,111,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>🎭</div>
            <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-high)', marginBottom: 10, letterSpacing: '-0.2px' }}>Rotating Anonymous Personas</h3>
            <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7 }}>
              You don&apos;t have one handle — you have a new poetic identity in every Space. "Cosmic Specter" in Mental Health, "Blazing Oracle" in Real Talk. Completely unlinked. Completely you.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {['Silent Raven', 'Midnight Fox', 'Velvet Echo', 'Cosmic Specter', 'Astral Viper'].map((tag, i) => (
                <span key={tag} style={{
                  background: i < 3 ? 'rgba(124,111,255,0.12)' : 'var(--surface-el)',
                  border: `1px solid ${i < 3 ? 'rgba(124,111,255,0.3)' : 'var(--border-bright)'}`,
                  borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600,
                  color: i < 3 ? 'var(--primary-glow)' : 'var(--text-med)',
                }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { grad: '135deg,#7C6FFF,#AA7BFF', initial: 'A', name: 'Aurora Wraith', color: 'var(--primary-glow)', tag: '💼 Workplace · 2m ago', text: 'My manager takes credit for all my work in meetings and I genuinely don\'t know how to handle it anymore.' },
              { grad: '135deg,#F97316,#FBBF24', initial: 'F', name: 'Fractal Storm', color: '#FBBF24', tag: '🎓 Campus · 8m ago', text: 'Just failed my third exam this semester. Feels like I\'m the only one struggling here.' },
            ].map(post => (
              <div key={post.name} style={{ background: 'var(--surface)', borderRadius: 16, padding: 16, border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(${post.grad})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>{post.initial}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: post.color }}>{post.name}</div>
                    <div style={{ fontSize: 10, color: 'var(--text-low)' }}>{post.tag}</div>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: 'var(--text-high)', lineHeight: 1.55 }}>{post.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature 2 */}
        <FeatureCard icon="🌐" title="Topic-Based Spaces" delay="0s">
          <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7 }}>
            44+ curated Spaces covering every corner of life. Create your own public or private Space with invite-code access.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
            {[
              { label: '💜 Mental Health', active: true },
              { label: '❤️ Relationships', active: true },
              { label: '🎓 Campus', active: false },
              { label: '💼 Workplace', active: false },
              { label: '🔥 Real Talk', active: true },
            ].map(t => (
              <span key={t.label} style={{
                background: t.active ? 'rgba(124,111,255,0.12)' : 'var(--surface-el)',
                border: `1px solid ${t.active ? 'rgba(124,111,255,0.3)' : 'var(--border-bright)'}`,
                borderRadius: 100, padding: '5px 14px', fontSize: 12, fontWeight: 600,
                color: t.active ? 'var(--primary-glow)' : 'var(--text-med)',
              }}>{t.label}</span>
            ))}
          </div>
        </FeatureCard>

        {/* Feature 3 */}
        <FeatureCard icon="🔔" title="Real-Time Notifications" delay="0.1s">
          <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7 }}>
            Get live alerts when someone reacts or replies to your veiled posts — without ever exposing who you are.
          </p>
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { icon: '💜', actor: 'Lunar Moth', action: 'reacted to your post', time: 'just now' },
              { icon: '💬', actor: 'Ember Shade', action: 'replied', time: '3m ago' },
            ].map(n => (
              <div key={n.actor} style={{ background: 'var(--surface-el)', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
                <span>{n.icon}</span>
                <span style={{ color: 'var(--text-med)' }}><strong style={{ color: 'var(--primary-glow)' }}>{n.actor}</strong> {n.action}</span>
                <span style={{ marginLeft: 'auto', color: 'var(--text-low)', fontSize: 10 }}>{n.time}</span>
              </div>
            ))}
          </div>
        </FeatureCard>

        {/* Feature 4 */}
        <FeatureCard icon="🛡️" title="Community Moderation" delay="0.15s">
          <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7 }}>
            Smart thresholds automatically hide or flag harmful content. You can report posts for 8 specific reasons. Spaces stay safe, not sterile.
          </p>
        </FeatureCard>

        {/* Feature 5 */}
        <FeatureCard icon="🔒" title="Private Spaces" delay="0.2s">
          <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7 }}>
            Create invite-only Spaces for your community — campus groups, close circles, professional teams — protected by a code only you share.
          </p>
        </FeatureCard>

        {/* Feature 6 */}
        <FeatureCard icon="🔍" title="Discover & Trending" delay="0.25s">
          <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7 }}>
            Surface what&apos;s resonating across all Spaces. Trending posts, active Spaces, and featured discussions — curated, not algorithmically manipulated.
          </p>
        </FeatureCard>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
          .features-grid > div:first-child { grid-column: span 1 !important; grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ icon, title, delay, children }: { icon: string; title: string; delay: string; children: React.ReactNode }) {
  return (
    <div
      className="reveal"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 24, padding: 32,
        transition: 'border-color 0.3s, transform 0.3s',
        transitionDelay: delay,
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,111,255,0.3)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
        (e.currentTarget as HTMLElement).style.transform = '';
      }}
    >
      <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(124,111,255,0.1)', border: '1px solid rgba(124,111,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{icon}</div>
      <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-high)', marginBottom: 10, letterSpacing: '-0.2px' }}>{title}</h3>
      {children}
    </div>
  );
}
