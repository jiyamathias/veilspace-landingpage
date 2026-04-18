'use client';
import { useState } from 'react';

export default function VideoDemo() {
  const [showEmbed, setShowEmbed] = useState(false);
  // Replace with your actual YouTube video ID when ready:
  const YOUTUBE_VIDEO_ID = 'YOUR_VIDEO_ID';

  return (
    <section
      id="demo"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '100px 5%',
      }}
    >
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 60px' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>App Demo</div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: 'var(--text-high)', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 16 }}>
          See VeilSpace in action
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-med)', lineHeight: 1.7, textAlign: 'center', margin: '0 auto' }}>
          Watch how seamlessly anonymity and authentic community come together.
        </p>
      </div>

      <div className="reveal" style={{
        position: 'relative', maxWidth: 900, margin: '0 auto',
        borderRadius: 24, overflow: 'hidden',
        border: '1px solid var(--border-bright)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(124, 111, 255, 0.12)',
      }}>
        {showEmbed ? (
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ width: '100%', aspectRatio: '16/9', display: 'block', border: 'none', background: 'var(--bg)' }}
          />
        ) : (
          <div style={{
            width: '100%', aspectRatio: '16/9',
            background: 'var(--card)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 16,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,111,255,0.08) 0%, transparent 70%)',
            }} />
            <button
              onClick={() => setShowEmbed(true)}
              style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 40px rgba(124,111,255,0.5)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                position: 'relative', zIndex: 2,
                border: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 50px rgba(124,111,255,0.65)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = '';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(124,111,255,0.5)';
              }}
            >
              <svg viewBox="0 0 24 24" width={28} height={28} style={{ fill: '#fff', marginLeft: 4 }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: 16, fontWeight: 600, color: 'var(--text-med)', letterSpacing: 1, position: 'relative', zIndex: 2 }}>
              VeilSpace · App Walkthrough
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-low)', position: 'relative', zIndex: 2 }}>
              {/* Replace YOUTUBE_VIDEO_ID in this component with your actual video ID */}
              Demo video coming soon — add your YouTube video ID in VideoDemo.tsx
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
