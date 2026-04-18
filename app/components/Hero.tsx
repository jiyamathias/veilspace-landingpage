'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
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
          overflow: 'hidden',
        }}
      >
        {/* Ambient orbs */}
        <div style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(124,111,255,0.18) 0%, transparent 70%)',
          top: -100, left: -150,
          animation: 'drift 12s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(170,123,255,0.14) 0%, transparent 70%)',
          top: 50, right: -100,
          animation: 'drift 12s ease-in-out infinite alternate',
          animationDelay: '-4s',
        }} />
        <div style={{
          position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          bottom: 0, left: '30%',
          animation: 'drift 12s ease-in-out infinite alternate',
          animationDelay: '-8s',
        }} />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 80%)',
          opacity: 0.4,
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 820 }}>
          {/* Badge */}
          {/* <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(124, 111, 255, 0.1)',
            border: '1px solid rgba(124, 111, 255, 0.25)',
            borderRadius: 100, padding: '6px 16px',
            fontSize: 12, fontWeight: 600,
            color: 'var(--primary-glow)',
            letterSpacing: '0.5px', textTransform: 'uppercase',
            marginBottom: 32,
            animation: 'fadeUp 0.8s ease both',
          }}>
            <div style={{
              width: 6, height: 6,
              background: 'var(--primary-glow)',
              borderRadius: '50%',
              boxShadow: '0 0 8px var(--primary-glow)',
              animation: 'pulse-anim 2s ease infinite',
            }} />
            Now accepting early access
          </div> */}

          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(42px, 7vw, 88px)',
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
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'var(--text-med)',
            lineHeight: 1.7, maxWidth: 560,
            margin: '0 auto 20px', fontWeight: 400,
            animation: 'fadeUp 0.8s ease 0.2s both',
          }}>
            A safe space for honest conversations. Post anonymously in topic-based Spaces, connect without judgment, and finally say what you actually mean.
          </p>

          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(13px, 1.5vw, 15px)',
            color: 'var(--text-low)',
            letterSpacing: '3px', textTransform: 'uppercase',
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
            <a href="#demo" style={{
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
            </a>
          </div>

          {/* Social proof */}
          {/* <div style={{
            marginTop: 48, display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 20,
            animation: 'fadeUp 0.8s ease 0.45s both',
          }}>
            <div style={{ display: 'flex' }}>
              {[11, 32, 47, 22, 58].map((img, i) => (
                <img key={img} src={`https://i.pravatar.cc/68?img=${img}`} alt=""
                  style={{
                    width: 34, height: 34, borderRadius: '50%',
                    border: '2px solid var(--bg)',
                    marginLeft: i === 0 ? 0 : -10,
                    objectFit: 'cover',
                  }}
                />
              ))}
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-med)', textAlign: 'left' }}>
              <strong style={{ color: 'var(--text-high)', fontWeight: 700 }}>2,400+</strong> people already on the waitlist<br />
              Launching on both iOS &amp; Android
            </div>
          </div> */}
        </div>
      </section>

      {/* Phone showcase */}
      <div style={{
        position: 'relative', padding: '0 5% 120px',
        display: 'flex', justifyContent: 'center', overflow: 'hidden',
      }}>
        {/* Left floating card */}
        <div style={{
          position: 'absolute',
          background: 'var(--card)',
          border: '1px solid var(--border-bright)',
          borderRadius: 16, padding: '12px 16px',
          fontSize: 12, backdropFilter: 'blur(10px)',
          animation: 'floatCard-anim 8s ease-in-out infinite',
          animationDelay: '-2s',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          left: 'calc(50% - 280px)',
          top: 120, maxWidth: 180,
        }}>
          <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-low)', marginBottom: 4, fontWeight: 600 }}>Active Spaces</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-high)' }}>44</div>
          <div style={{ fontSize: 11, color: 'var(--text-med)', marginTop: 2 }}>💜 Mental Health · 🔥 Real Talk · 🎭 Confessions + more</div>
        </div>

        {/* Phone mockup */}
        <div style={{ position: 'relative', width: 280, animation: 'float-anim 6s ease-in-out infinite' }}>
          <div style={{
            width: 280, height: 580,
            background: 'var(--card)',
            borderRadius: 44,
            border: '2px solid var(--border-bright)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 60px rgba(124, 111, 255, 0.15)',
          }}>
            {/* Notch */}
            <div style={{
              position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
              width: 100, height: 26, background: 'var(--bg)', borderRadius: 100, zIndex: 10,
            }} />
            {/* Screen */}
            <div style={{ width: '100%', height: '100%', background: 'var(--bg)', padding: '50px 0 0', overflow: 'hidden' }}>
              <div style={{ padding: '0 16px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, color: 'var(--text-high)', letterSpacing: '0.3px' }}>VeilSpace</span>
                <div style={{ width: 22, height: 22, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff' }}>3</div>
              </div>
              {[
                { grad: '135deg,#7C6FFF,#AA7BFF', initial: 'S', name: 'Silent Raven', tag: '💜 Mental Health', text: 'Finally opened up to my therapist about everything. It felt terrifying and freeing at the same time.', react: '💜 14', reply: '💬 5' },
                { grad: '135deg,#F97316,#FBBF24', initial: 'M', name: 'Midnight Fox', tag: '🔥 Real Talk', text: 'Hot take: most "motivational" content on social media is just guilt-tripping in a nice font.', react: '🔥 31', reply: '💬 12' },
                { grad: '135deg,#22C55E,#38BDF8', initial: 'V', name: 'Velvet Echo', tag: '❤️ Relationships', text: 'When you realize your "best friend" only calls when they need something...', react: '❤️ 22', reply: '💬 8' },
              ].map((post, i) => (
                <div key={i} style={{ margin: `${i === 0 ? 12 : 8}px 12px 0`, background: 'var(--card)', borderRadius: 16, padding: 12, border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(${post.grad})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff' }}>{post.initial}</div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary-glow)' }}>{post.name}</span>
                    <span style={{ marginLeft: 'auto', background: 'rgba(124,111,255,0.12)', border: '1px solid rgba(124,111,255,0.2)', borderRadius: 100, padding: '2px 8px', fontSize: 9, fontWeight: 600, color: 'var(--primary-glow)' }}>{post.tag}</span>
                  </div>
                  <p style={{ fontSize: 11, lineHeight: 1.55, color: 'var(--text-high)', marginBottom: 8 }}>{post.text}</p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ fontSize: 10, color: 'var(--text-low)' }}>{post.react}</span>
                    <span style={{ fontSize: 10, color: 'var(--text-low)' }}>{post.reply}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)', width: 200, height: 80, background: 'var(--primary)', filter: 'blur(40px)', opacity: 0.3, borderRadius: '50%' }} />
        </div>

        {/* Right floating card */}
        <div style={{
          position: 'absolute',
          background: 'var(--card)', border: '1px solid var(--border-bright)',
          borderRadius: 16, padding: '12px 16px', fontSize: 12,
          backdropFilter: 'blur(10px)',
          animation: 'floatCard-anim 8s ease-in-out infinite',
          animationDelay: '-5s',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          right: 'calc(50% - 280px)', top: 200, maxWidth: 175,
        }}>
          <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-low)', marginBottom: 4, fontWeight: 600 }}>Anonymous Identity</div>
          <div style={{ marginTop: 4 }}>
            {[
              { color: 'var(--primary)', name: 'Silent Raven' },
              { color: '#F97316', name: 'Midnight Fox' },
              { color: '#22C55E', name: 'Velvet Echo' },
            ].map(item => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, display: 'inline-block' }} />
                <span style={{ fontSize: 12, color: 'var(--text-high)', fontWeight: 600 }}>{item.name}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-med)', marginTop: 8 }}>New persona, every post</div>
        </div>
      </div>
    </>
  );
}
