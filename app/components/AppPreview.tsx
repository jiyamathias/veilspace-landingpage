'use client';
import { useState, useEffect } from 'react';

const screens = [
  { label: 'Sign In',          imagePath: '/images/screens/auth.png',         imageAlt: 'Sign in screen' },
  { label: 'Sign Up',          imagePath: '/images/screens/signup.png',        imageAlt: 'Sign up screen' },
  { label: 'Home Feed',        imagePath: '/images/screens/feed.png',          imageAlt: 'Home feed screen' },
  { label: 'Discover Spaces',  imagePath: '/images/screens/discover.png',      imageAlt: 'Discover screen' },
  { label: 'Spaces',           imagePath: '/images/screens/spaces.png',        imageAlt: 'Spaces screen' },
  { label: 'Space Detail',     imagePath: '/images/screens/post.png',          imageAlt: 'Space detail screen' },
  { label: 'Create Post',      imagePath: '/images/screens/compose.png',       imageAlt: 'Create post screen' },
  { label: 'Create Space',     imagePath: '/images/screens/create-space.png',  imageAlt: 'Create space screen' },
  { label: 'Profile',          imagePath: '/images/screens/profile.png',       imageAlt: 'Profile screen' },
];

export default function AppPreview() {
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);

  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(prev => prev && { index: (prev.index + 1) % screens.length });
      if (e.key === 'ArrowLeft')  setLightbox(prev => prev && { index: (prev.index - 1 + screens.length) % screens.length });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
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

        <div
          className="screens-scroll"
          style={{
            marginTop: 60,
            display: 'flex',
            gap: 20,
            overflowX: 'auto',
            overflowY: 'visible',
            paddingTop: 20,
            paddingBottom: 32,
            paddingLeft: 4,
            paddingRight: 4,
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--border-bright) transparent',
            alignItems: 'flex-end',
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
              }}
            >
              <div
                style={{
                  width: 200,
                  transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease',
                  marginBottom: 14,
                  borderRadius: 32,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  cursor: 'pointer',
                }}
                onClick={() => setLightbox({ index: i })}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-12px) scale(1.05)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 36px 80px rgba(0,0,0,0.55), 0 0 40px rgba(124,111,255,0.25)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = '';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                }}
              >
                <div
                  className="screen-card-frame"
                  style={{
                    width: 200,
                    height: 415,
                    background: 'var(--card)',
                    borderRadius: 32,
                    border: '2px solid var(--border-bright)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <img
                    src={screen.imagePath}
                    alt={screen.imageAlt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Tap-to-expand hint overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'rgba(0,0,0,0)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                    borderRadius: 30,
                  }}
                  className="screen-expand-hint"
                  >
                    <div style={{
                      background: 'rgba(0,0,0,0.55)',
                      backdropFilter: 'blur(6px)',
                      borderRadius: 50,
                      padding: '8px 14px',
                      display: 'flex', alignItems: 'center', gap: 6,
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}>
                      <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="white" strokeWidth={2}>
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                      <span style={{ fontSize: 11, color: '#fff', fontWeight: 600, letterSpacing: 0.3 }}>View full</span>
                    </div>
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

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(8,7,16,0.92)',
            backdropFilter: 'blur(18px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeIn 0.2s ease',
          }}
          onClick={() => setLightbox(null)}
        >
          {/* Prev button */}
          <button
            onClick={e => { e.stopPropagation(); setLightbox({ index: (lightbox.index - 1 + screens.length) % screens.length }); }}
            style={{
              position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '50%', width: 48, height: 48, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 20, transition: 'background 0.2s',
              backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(124,111,255,0.25)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
          >
            ‹
          </button>

          {/* Phone frame */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              width: 'min(320px, 85vw)',
              aspectRatio: '9/19.5',
              borderRadius: 48,
              border: '2px solid rgba(255,255,255,0.12)',
              overflow: 'hidden',
              boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 80px rgba(124,111,255,0.2)',
              animation: 'popIn 0.25s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <img
              src={screens[lightbox.index].imagePath}
              alt={screens[lightbox.index].imageAlt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Next button */}
          <button
            onClick={e => { e.stopPropagation(); setLightbox({ index: (lightbox.index + 1) % screens.length }); }}
            style={{
              position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '50%', width: 48, height: 48, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: 20, transition: 'background 0.2s',
              backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(124,111,255,0.25)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
          >
            ›
          </button>

          {/* Label + dots */}
          <div style={{
            position: 'absolute', bottom: 32, left: 0, right: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 14, fontWeight: 700,
              color: 'rgba(255,255,255,0.85)', letterSpacing: 0.5,
            }}>
              {screens[lightbox.index].label}
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setLightbox({ index: i }); }}
                  style={{
                    width: i === lightbox.index ? 22 : 7,
                    height: 7,
                    borderRadius: 100,
                    background: i === lightbox.index ? 'var(--primary, #7C6FFF)' : 'rgba(255,255,255,0.2)',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'width 0.3s ease, background 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: 20, right: 20,
              background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '50%', width: 40, height: 40, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1,
              backdropFilter: 'blur(6px)',
            }}
          >✕</button>
        </div>
      )}

      <style>{`
        .screen-card-item:hover .screen-expand-hint {
          opacity: 1 !important;
          background: rgba(0,0,0,0.25) !important;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
