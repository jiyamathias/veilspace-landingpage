'use client';

const screens = [
  { label: 'Login / Sign Up',  imagePath: '/images/screens/auth.png',    imageAlt: 'Login screen' },
  { label: 'Home Feed',        imagePath: '/images/screens/feed.png',     imageAlt: 'Feed screen' },
  { label: 'Discover Spaces',  imagePath: '/images/screens/discover.png', imageAlt: 'Discover screen' },
  { label: 'Post & Comments',  imagePath: '/images/screens/post.png',     imageAlt: 'Post & Comments screen' },
  { label: 'Compose Post',     imagePath: '/images/screens/compose.png',  imageAlt: 'Compose screen' },
];

export default function AppPreview() {
  return (
    <section id="preview" style={{ padding: '100px 5%' }}>
      <div className="section-label">App Preview</div>
      <h2 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(26px, 4vw, 48px)',
        fontWeight: 700, color: 'var(--text-high)',
        lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 16,
      }}>
        Every screen, crafted with care
      </h2>
      <p style={{ fontSize: 17, color: 'var(--text-med)', lineHeight: 1.7, maxWidth: 560 }}>
        A dark, immersive interface that feels as private as your thoughts.
      </p>

      {/*
        KEY FIX: The scroll container needs padding on all sides so the
        scaled card never hits the edge and gets clipped.
        - paddingTop / paddingBottom give room for the upward translateY + scale
        - paddingLeft / paddingRight give room for the left-edge scale on card 0
        - overflow: visible on the outer wrapper, overflow: hidden only on
          the INNER non-transforming shell so the rounded corners still work
      */}
      <div
        className="screens-scroll"
        style={{
          marginTop: 60,
          display: 'flex',
          gap: 20,
          overflowX: 'auto',
          overflowY: 'visible',          /* let cards pop upward freely */
          /* generous padding so scale(1.05) never clips against any edge */
          paddingTop: 20,
          paddingBottom: 32,
          paddingLeft: 4,
          paddingRight: 4,
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--border-bright) transparent',
          alignItems: 'flex-end',        /* anchor to bottom so lift looks natural */
        }}
      >
        {screens.map((screen, i) => (
          <div
            key={screen.label}
            className="reveal screen-card-item"
            style={{
              flexShrink: 0,
              width: 200,
              transitionDelay: `${i * 0.05}s`,
              /* wrapper must NOT clip — transform happens here */
            }}
          >
            {/*
              OUTER TRANSFORM WRAPPER — this is what scales and lifts.
              It must NOT have overflow:hidden so the scaled content isn't clipped.
            */}
            <div
              style={{
                width: 200,
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                marginBottom: 14,
                borderRadius: 32,
                /* shadow lives here so it scales with the card */
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-12px) scale(1.05)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 36px 80px rgba(0,0,0,0.55), 0 0 40px rgba(124,111,255,0.25)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
              }}
            >
              {/*
                INNER CLIP SHELL — provides the rounded corners + clip.
                Separated from the transform wrapper so overflow:hidden
                never cuts the card during the scale animation.
              */}
              <div
                className="screen-card-frame"
                style={{
                  width: 200,
                  height: 415,
                  background: 'var(--card)',
                  borderRadius: 32,
                  border: '2px solid var(--border-bright)',
                  overflow: 'hidden',   /* safe here — not on the transforming element */
                  position: 'relative',
                }}
              >
                {/*
                  ── PLACEHOLDER — swap with your Canva screenshot ──
                  When ready:
                    1. Export PNG at 400×830px → public/images/screens/<name>.png
                    2. Replace the placeholder div below with:
                       <img src={screen.imagePath} alt={screen.imageAlt}
                            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                */}
                <div style={{
                  width: '100%', height: '100%',
                  background: 'linear-gradient(160deg, #1C1A28 0%, #0C0B12 100%)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: 12, position: 'relative',
                }}>
                  {/* Notch */}
                  <div style={{
                    position: 'absolute', top: 10, left: '50%',
                    transform: 'translateX(-50%)',
                    width: 70, height: 18,
                    background: '#0C0B12', borderRadius: 100,
                  }} />
                  {/* Glow */}
                  <div style={{
                    position: 'absolute',
                    width: 140, height: 140,
                    background: 'radial-gradient(circle, rgba(124,111,255,0.18) 0%, transparent 70%)',
                    borderRadius: '50%', top: '25%', left: '50%',
                    transform: 'translateX(-50%)', filter: 'blur(20px)',
                  }} />
                  {/* Logo */}
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(124,111,255,0.45)',
                    position: 'relative', zIndex: 1, flexShrink: 0,
                  }}>
                    <img src="/logo.png" alt="VeilSpace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  {/* Screen name */}
                  <div style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 12, fontWeight: 700,
                    color: 'var(--text-med)', letterSpacing: 0.5,
                    position: 'relative', zIndex: 1,
                    textAlign: 'center', padding: '0 16px',
                  }}>
                    {screen.label}
                  </div>
                  <div style={{
                    fontSize: 9, color: 'var(--text-low)',
                    position: 'relative', zIndex: 1,
                    textAlign: 'center', padding: '0 16px', lineHeight: 1.5,
                  }}>
                    Screenshot placeholder<br />Replace with Canva export
                  </div>
                  {/* Home indicator */}
                  <div style={{
                    position: 'absolute', bottom: 12, left: '50%',
                    transform: 'translateX(-50%)',
                    width: 80, height: 3,
                    background: 'var(--border-bright)', borderRadius: 100,
                  }} />
                </div>
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
