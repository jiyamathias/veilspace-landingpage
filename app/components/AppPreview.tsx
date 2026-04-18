'use client';
import React from 'react';

const screens = [
  {
    label: 'Login / Sign Up',
    imagePath: '/images/screens/auth.png',
    imageAlt: 'Login screen',
    placeholder: (
      <div style={{ padding: '20px 14px' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: 18, fontWeight: 700, color: 'var(--text-high)', marginBottom: 4 }}>VeilSpace</div>
        <div style={{ fontSize: 10, color: 'var(--text-low)', marginBottom: 20, fontFamily: "'Cinzel',serif", letterSpacing: 1 }}>ENTER THE VEIL</div>
        <div style={{ background: 'rgba(124,111,255,0.12)', border: '1px solid rgba(124,111,255,0.2)', borderRadius: 8, padding: '8px 12px', fontSize: 10, color: 'var(--primary-glow)', marginBottom: 16, fontWeight: 700, textAlign: 'center' as const }}>SIGN IN &nbsp;|&nbsp; SIGN UP</div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', fontSize: 10, color: 'var(--text-low)', marginBottom: 8 }}>📧 Email address</div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 12px', fontSize: 10, color: 'var(--text-low)', marginBottom: 16 }}>🔒 Password</div>
        <div style={{ background: 'linear-gradient(135deg,var(--grad-start),var(--grad-end))', borderRadius: 8, padding: 10, textAlign: 'center' as const, fontSize: 11, fontWeight: 700, color: '#fff' }}>Enter the Veil →</div>
      </div>
    ),
  },
  {
    label: 'Home Feed',
    imagePath: '/images/screens/feed.png',
    imageAlt: 'Feed screen',
    placeholder: (
      <div style={{ padding: '0 10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0 8px', borderBottom: '1px solid var(--border)', marginBottom: 10 }}>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: 12, fontWeight: 700, color: 'var(--text-high)' }}>Feed</span>
          <div style={{ width: 18, height: 18, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: '#fff', fontWeight: 700 }}>2</div>
        </div>
        <div style={{ display: 'flex', gap: 5, overflow: 'hidden', marginBottom: 10 }}>
          <div style={{ background: 'rgba(124,111,255,0.15)', border: '1px solid rgba(124,111,255,0.3)', borderRadius: 100, padding: '3px 8px', fontSize: 8, color: 'var(--primary-glow)', whiteSpace: 'nowrap' as const }}>💜 Mental Health</div>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 100, padding: '3px 8px', fontSize: 8, color: 'var(--text-med)', whiteSpace: 'nowrap' as const }}>🔥 Real Talk</div>
        </div>
        {[
          { grad: '135deg,#7C6FFF,#AA7BFF', init: 'S', name: 'Silent Raven', nameColor: 'var(--primary-glow)', text: "I've been pretending to be okay for so long I forgot what okay feels like.", r: '💜 8', c: '💬 3' },
          { grad: '135deg,#F97316,#FBBF24', init: 'M', name: 'Midnight Fox', nameColor: '#FBBF24', text: "Unpopular opinion: most of us are addicted to suffering because peace feels boring.", r: '🔥 19', c: '💬 7' },
        ].map(p => (
          <div key={p.name} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, padding: 10, marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: `linear-gradient(${p.grad})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, color: '#fff' }}>{p.init}</div>
              <span style={{ fontSize: 8, fontWeight: 700, color: p.nameColor }}>{p.name}</span>
            </div>
            <p style={{ fontSize: 9, lineHeight: 1.5, color: 'var(--text-high)' }}>{p.text}</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <span style={{ fontSize: 8, color: 'var(--text-low)' }}>{p.r}</span>
              <span style={{ fontSize: 8, color: 'var(--text-low)' }}>{p.c}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Discover Spaces',
    imagePath: '/images/screens/discover.png',
    imageAlt: 'Discover screen',
    placeholder: (
      <div style={{ padding: '0 10px' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: 12, fontWeight: 700, color: 'var(--text-high)', padding: '4px 0 10px', borderBottom: '1px solid var(--border)', marginBottom: 10 }}>Discover</div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, padding: '7px 10px', fontSize: 9, color: 'var(--text-low)', marginBottom: 12 }}>🔍 Search spaces...</div>
        <div style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: 'var(--text-low)', marginBottom: 8 }}>Trending</div>
        {[
          { icon: '💜', name: 'Mental Health', posts: '1.2k posts · 890 members' },
          { icon: '🔥', name: 'Real Talk', posts: '940 posts · 720 members' },
          { icon: '🎭', name: 'Confessions', posts: '680 posts · 540 members' },
        ].map(s => (
          <div key={s.name} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: 8, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 16 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--text-high)' }}>{s.name}</div>
              <div style={{ fontSize: 8, color: 'var(--text-low)' }}>{s.posts}</div>
            </div>
            <div style={{ marginLeft: 'auto', background: 'var(--primary)', borderRadius: 100, padding: '2px 8px', fontSize: 8, color: '#fff', fontWeight: 700 }}>Join</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'Post & Comments',
    imagePath: '/images/screens/post.png',
    imageAlt: 'Post detail screen',
    placeholder: (
      <div style={{ padding: '0 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 0 10px', borderBottom: '1px solid var(--border)', marginBottom: 12 }}>
          <div style={{ fontSize: 12, color: 'var(--text-med)' }}>←</div>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-high)' }}>Post</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#22C55E,#38BDF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>V</div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#22C55E' }}>Velvet Echo</div>
            <div style={{ fontSize: 8, color: 'var(--text-low)' }}>❤️ Relationships · 5m ago</div>
          </div>
        </div>
        <p style={{ fontSize: 11, lineHeight: 1.6, color: 'var(--text-high)', marginBottom: 12 }}>&quot;I miss who I was before I let someone else&apos;s opinion of me become my own.&quot;</p>
        <div style={{ display: 'flex', gap: 10, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
          <span style={{ fontSize: 11, color: 'var(--text-med)' }}>❤️ 34</span>
          <span style={{ fontSize: 11, color: 'var(--text-med)' }}>💬 11 comments</span>
        </div>
        <div style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 1, color: 'var(--text-low)', marginBottom: 8 }}>Comments</div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 10, padding: 8 }}>
          <div style={{ fontSize: 8, fontWeight: 700, color: 'var(--primary-glow)', marginBottom: 3 }}>Phantom Tide</div>
          <p style={{ fontSize: 9, color: 'var(--text-med)', lineHeight: 1.4 }}>This hit me so hard. Same.</p>
        </div>
      </div>
    ),
  },
  {
    label: 'Compose Post',
    imagePath: '/images/screens/compose.png',
    imageAlt: 'Compose screen',
    placeholder: (
      <div style={{ padding: '0 10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0 10px', borderBottom: '1px solid var(--border)', marginBottom: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-high)' }}>New Post</span>
          <div style={{ background: 'var(--primary)', borderRadius: 100, padding: '3px 12px', fontSize: 9, color: '#fff', fontWeight: 700 }}>Post</div>
        </div>
        <div style={{ background: 'rgba(124,111,255,0.1)', border: '1px solid rgba(124,111,255,0.2)', borderRadius: 10, padding: 8, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#7C6FFF,#AA7BFF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, color: '#fff' }}>A</div>
          <div>
            <div style={{ fontSize: 8, color: 'var(--text-low)' }}>Posting as</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary-glow)' }}>Aurora Specter</div>
          </div>
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, padding: '7px 10px', fontSize: 9, color: 'var(--text-med)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>💼</span> Workplace
        </div>
        <div style={{ background: 'var(--card)', border: '1px solid rgba(124,111,255,0.3)', borderRadius: 8, padding: 10, fontSize: 9, color: 'var(--text-high)', lineHeight: 1.5, minHeight: 60 }}>
          My boss literally laughed at my idea in a meeting today...
          <span style={{ display: 'inline-block', width: 1, height: 10, background: 'var(--primary)', marginLeft: 1, animation: 'blink 1s step-end infinite', verticalAlign: 'middle' }} />
        </div>
      </div>
    ),
  },
];

export default function AppPreview() {
  return (
    <section id="preview" style={{ padding: '100px 5%' }}>
      <div className="section-label">App Preview</div>
      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'var(--text-high)', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 16 }}>
        Every screen, crafted with care
      </h2>
      <p style={{ fontSize: 17, color: 'var(--text-med)', lineHeight: 1.7, maxWidth: 560 }}>
        A dark, immersive interface that feels as private as your thoughts.
      </p>

      <div style={{
        marginTop: 60, display: 'flex', gap: 20,
        overflowX: 'auto', paddingBottom: 20,
        scrollbarWidth: 'thin',
      }}>
        {screens.map((screen, i) => (
          <div key={screen.label} className="reveal" style={{ flexShrink: 0, width: 200, transitionDelay: `${i * 0.05}s` }}>
            <div
              style={{
                width: 200, height: 415,
                background: 'var(--card)',
                borderRadius: 32,
                border: '2px solid var(--border-bright)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                marginBottom: 14,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px) scale(1.02)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 30px 80px rgba(0,0,0,0.5), 0 0 30px rgba(124,111,255,0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
              }}
            >
              {/*
                To replace with actual app screenshots from Canva:
                1. Export your screenshot as PNG (recommended 400×830px or 2x)
                2. Place the file at: public/images/screens/<filename>.png
                3. Replace the placeholder div below with:
                   <img src={screen.imagePath} alt={screen.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              */}
              <div style={{ width: '100%', height: '100%', background: 'var(--bg)', padding: 12 }}>
                <div className="sim-notch" />
                {screen.placeholder}
              </div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-med)', textAlign: 'center' }}>
              {screen.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
