'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '0 5%',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        background: scrolled ? 'rgba(12, 11, 18, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'border-color 0.3s, background 0.3s',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <div style={{
          width: 36, height: 36,
          borderRadius: 10,
          overflow: 'hidden',
          boxShadow: '0 0 20px rgba(124, 111, 255, 0.4)',
          flexShrink: 0,
          position: 'relative',
        }}>
          <Image
            src="/logo.png"
            alt="VeilSpace"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <span style={{
          fontFamily: "'Cinzel', serif",
          fontWeight: 700,
          fontSize: 17,
          color: 'var(--text-high)',
          letterSpacing: '0.5px',
        }}>VeilSpace</span>
      </a>

      {/* Nav links — hidden on mobile via CSS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-links-desktop">
        {['How it Works', 'Features', 'Spaces', 'App Preview'].map((label, i) => {
          const hrefs = ['#how', '#features', '#spaces', '#preview'];
          return (
            <a
              key={label}
              href={hrefs[i]}
              style={{ color: 'var(--text-med)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-high)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-med)')}
            >{label}</a>
          );
        })}
        <a
          href="#waitlist"
          style={{
            background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
            color: '#fff', padding: '9px 22px',
            borderRadius: 100, fontWeight: 700, fontSize: 13,
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(124, 111, 255, 0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px rgba(124, 111, 255, 0.5)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = '';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(124, 111, 255, 0.35)';
          }}
        >Join Waitlist</a>
      </div>

      {/* Mobile CTA — only shown on small screens */}
      <a
        href="#waitlist"
        className="nav-mobile-cta"
        style={{
          background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
          color: '#fff', padding: '8px 18px',
          borderRadius: 100, fontWeight: 700, fontSize: 13,
          textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(124, 111, 255, 0.35)',
          display: 'none',
        }}
      >Join</a>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-mobile-cta { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
