'use client';

export default function Hero() {
  return (
    <>
      {/* ── HERO SECTION ── overflow visible so phone below never clips */}
      <section
        id="home"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '120px 5% 80px',
          overflow: 'visible', /* FIXED: was 'hidden', phone was clipping under it */
        }}
      >
        {/* Ambient orbs — clipped to section via pseudo wrapper */}
        <div style={{
          position: 'absolute', inset: 0, overflow: 'hidden',
          pointerEvents: 'none', zIndex: 0,
        }}>
          <div style={{
            position: 'absolute', borderRadius: '50%', filter: 'blur(80px)',
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(124,111,255,0.18) 0%, transparent 70%)',
            top: -100, left: -150,
            animation: 'drift 12s ease-in-out infinite alternate',
          }} />
          <div style={{
            position: 'absolute', borderRadius: '50%', filter: 'blur(80px)',
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(170,123,255,0.14) 0%, transparent 70%)',
            top: 50, right: -100,
            animation: 'drift 12s ease-in-out infinite alternate',
            animationDelay: '-4s',
          }} />
          <div style={{
            position: 'absolute', borderRadius: '50%', filter: 'blur(80px)',
            width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
            bottom: 0, left: '30%',
            animation: 'drift 12s ease-in-out infinite alternate',
            animationDelay: '-8s',
          }} />
          {/* Grid pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)',
            opacity: 0.4,
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 820, width: '100%' }}>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(38px, 7vw, 88px)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-1px',
            color: 'var(--text-high)',
            marginBottom: 12,
            animation: 'fadeUp 0.8s ease 0.1s both',
          }}>
            Speak Freely.<br />
            Stay{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              filter: 'drop-shadow(0 0 40px rgba(124,111,255,0.5))',
            }}>Unseen.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 2.5vw, 20px)',
            color: 'var(--text-med)',
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 20px',
            fontWeight: 400,
            animation: 'fadeUp 0.8s ease 0.2s both',
          }}>
            A safe space for honest conversations. Post anonymously in topic-based Spaces, connect without judgment, and finally say what you actually mean.
          </p>

          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(11px, 1.5vw, 15px)',
            color: 'var(--text-low)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: 48,
            animation: 'fadeUp 0.8s ease 0.25s both',
          }}>
            veils.space — your voice, veiled
          </p>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 16, flexWrap: 'wrap',
            animation: 'fadeUp 0.8s ease 0.35s both',
          }}>
            <a href="#waitlist" style={{
              background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
              color: '#fff', padding: '15px 36px',
              borderRadius: 100, fontSize: 15, fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 6px 30px rgba(124, 111, 255, 0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              letterSpacing: '0.2px',
            }}>Join the Waitlist</a>
          
            {/* <a href="#demo" style={{
              background: 'transparent', color: 'var(--text-med)',
              padding: '15px 32px', borderRadius: 100, fontSize: 15, fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid var(--border-bright)',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} width={16} height={16}>
                <circle cx={12} cy={12} r={10} />
                <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
              </svg>
              Watch Demo
            </a> */}

            <a href="#preview" style={{
              background: 'transparent', color: 'var(--text-med)',
              padding: '15px 32px', borderRadius: 100, fontSize: 15, fontWeight: 600,
              textDecoration: 'none',
              border: '1px solid var(--border-bright)',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} width={16} height={16}>
                <circle cx={12} cy={12} r={10} />
                <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
              </svg>
              App Preview
            </a>
          </div>
        </div>
      </section>

      {/* ── PHONE SHOWCASE ──
           Sits OUTSIDE the hero section so it never clips under it.
           Uses position:relative + high z-index so it floats on top of whatever follows.
      */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '0 5% 100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        /* Extra top padding gives breathing room between hero text and phone */
        marginTop: -40,
        /* Clip orb glows at left/right edges without hiding the phone vertically */
        overflowX: 'clip',
      }}>

        {/* ── LEFT FLOATING CARD ── hidden on mobile via CSS class */}
        <div className="phone-side-card phone-side-card--left">
          <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-low)', marginBottom: 4, fontWeight: 600 }}>Active Spaces</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-high)' }}>44+</div>
          <div style={{ fontSize: 11, color: 'var(--text-med)', marginTop: 2 }}>💜 Mental Health · 🔥 Real Talk · 🎭 Confessions + more</div>
        </div>

        {/* ── PHONE MOCKUP ── */}
        <div style={{
          position: 'relative',
          flexShrink: 0,
          animation: 'float-anim 6s ease-in-out infinite',
        }}>
          {/* Phone shell */}
          <div style={{
            width: 280,
            height: 580,
            borderRadius: 44,
            border: '2px solid var(--border-bright)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px rgba(124,111,255,0.2)',
          }}>
            <img
              src="/images/screens/feed.png"
              alt="VeilSpace home feed"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Glow under phone */}
          <div style={{
            position: 'absolute', bottom: -40, left: '50%',
            transform: 'translateX(-50%)',
            width: 200, height: 80,
            background: 'var(--primary)',
            filter: 'blur(40px)',
            opacity: 0.25,
            borderRadius: '50%',
          }} />
        </div>

        {/* ── RIGHT FLOATING CARD ── hidden on mobile */}
        <div className="phone-side-card phone-side-card--right">
          <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-low)', marginBottom: 4, fontWeight: 600 }}>Anonymous Identity</div>
          <div style={{ marginTop: 4 }}>
            {[
              { color: 'var(--primary)', name: 'Silent Raven' },
              { color: '#F97316', name: 'Midnight Fox' },
              { color: '#22C55E', name: 'Velvet Echo' },
            ].map(item => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: 'var(--text-high)', fontWeight: 600 }}>{item.name}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-med)', marginTop: 8 }}>New persona, every space</div>
        </div>
      </div>

      {/* ── PHONE SHOWCASE RESPONSIVE STYLES ── */}
      <style>{`
        /* Side cards: absolutely positioned relative to the showcase on desktop */
        .phone-side-card {
          position: absolute;
          background: var(--card);
          border: 1px solid var(--border-bright);
          border-radius: 16px;
          padding: 12px 16px;
          font-size: 12px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          max-width: 180px;
        }
        .phone-side-card--left {
          left: calc(50% - 320px);
          top: 100px;
          animation: floatCard-anim 8s ease-in-out infinite;
          animation-delay: -2s;
        }
        .phone-side-card--right {
          right: calc(50% - 320px);
          top: 180px;
          animation: floatCard-anim 8s ease-in-out infinite;
          animation-delay: -5s;
        }

        /* Below 900px: hide side cards, centre phone cleanly */
        @media (max-width: 900px) {
          .phone-side-card { display: none !important; }
        }
      `}</style>
    </>
  );
}
