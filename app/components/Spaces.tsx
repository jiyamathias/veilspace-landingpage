'use client';
const spaces = [
  { label: '🌐 General', count: '44+', featured: true },
  { label: '💜 Mental Health', featured: true },
  { label: '❤️ Relationships', featured: true },
  { label: '🔥 Real Talk', featured: true },
  { label: '🎭 Confessions', featured: true },
  { label: '💼 Workplace', featured: false },
  { label: '🎓 Campus', featured: false },
  { label: '🌱 Life Advice', featured: false },
  { label: '📢 Whistleblowing', featured: false },
  { label: '😂 Fun & Entertainment', featured: false },
  { label: '🤝 Social', featured: false },
  { label: '💡 Ideas', featured: false },
  { label: '🧠 Mind & Philosophy', featured: false },
  { label: '🌍 World Affairs', featured: false },
  { label: '🎵 Music & Culture', featured: false },
  { label: '🔮 + Create your own', featured: false },
];

export default function Spaces() {
  return (
    <section
      id="spaces"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '100px 5%',
      }}
    >
      <div
        className="reveal spaces-header-row"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 40,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <div className="section-label">Spaces</div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(24px,4vw,48px)', fontWeight: 700, color: 'var(--text-high)', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 0 }}>
            44+ Spaces for every conversation
          </h2>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-med)', maxWidth: 300 }}>
          Can&apos;t find your topic? Create your own public or private Space in seconds.
        </p>
      </div>

      <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {spaces.map(space => (
          <div
            key={space.label}
            style={{
              background: space.featured ? 'rgba(124,111,255,0.08)' : 'var(--card)',
              border: `1px solid ${space.featured ? 'rgba(124,111,255,0.25)' : 'var(--border)'}`,
              borderRadius: 100,
              padding: '10px 20px',
              fontSize: 13, fontWeight: 600,
              color: space.featured ? 'var(--primary-glow)' : 'var(--text-med)',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'all 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)';
              (e.currentTarget as HTMLElement).style.color = 'var(--text-high)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(124,111,255,0.06)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = space.featured ? 'rgba(124,111,255,0.25)' : 'var(--border)';
              (e.currentTarget as HTMLElement).style.color = space.featured ? 'var(--primary-glow)' : 'var(--text-med)';
              (e.currentTarget as HTMLElement).style.background = space.featured ? 'rgba(124,111,255,0.08)' : 'var(--card)';
              (e.currentTarget as HTMLElement).style.transform = '';
            }}
          >
            {space.label}
            {space.count && (
              <span style={{ fontSize: 10, background: 'var(--surface-el)', borderRadius: 100, padding: '2px 8px', color: 'var(--text-low)' }}>
                {space.count}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
