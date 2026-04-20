'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function PageShell({ children, title, subtitle }: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      {/* Noise overlay */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1000, opacity: 0.35,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      }} />

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 5%', height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(12,11,18,0.85)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, overflow: 'hidden', boxShadow: '0 0 20px rgba(124,111,255,0.4)', flexShrink: 0, position: 'relative' }}>
            <Image src="/logo.png" alt="VeilSpace" fill style={{ objectFit: 'cover' }} />
          </div>
          <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 17, color: 'var(--text-high)', letterSpacing: '0.5px' }}>VeilSpace</span>
        </Link>
        <Link href="/#waitlist" style={{
          background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
          color: '#fff', padding: '9px 22px', borderRadius: 100,
          fontWeight: 700, fontSize: 13, textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(124,111,255,0.35)',
        }}>Join Waitlist</Link>
      </nav>

      {/* Page hero */}
      <div style={{
        paddingTop: 140, paddingBottom: 64,
        paddingLeft: '5%', paddingRight: '5%',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Orb */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 300,
          background: 'radial-gradient(ellipse, rgba(124,111,255,0.14) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 900, color: 'var(--text-high)',
            lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 16,
          }}>{title}</h1>
          {subtitle && (
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--text-med)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '0 5% 100px' }}>
        {children}
      </main>

      {/* Footer strip */}
      <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '32px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 12, color: 'var(--text-low)' }}>© 2025 VeilSpace. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Community Guidelines', '/guidelines'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontSize: 12, color: 'var(--text-low)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-med)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-low)')}
            >{label}</Link>
          ))}
        </div>
      </footer>
    </>
  );
}
