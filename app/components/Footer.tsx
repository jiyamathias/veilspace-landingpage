'use client';
export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '60px 5% 40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40, marginBottom: 48 }}>
        <div style={{ maxWidth: 280 }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 0 20px rgba(124, 111, 255, 0.4)' }}>🌑</div>
            <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 17, color: 'var(--text-high)', letterSpacing: '0.5px' }}>VeilSpace</span>
          </a>
          <p style={{ fontSize: 13, color: 'var(--text-low)', lineHeight: 1.65, marginTop: 12 }}>
            A safe space for honest conversations. Anonymous social spaces for the conversations you&apos;ve always wanted to have.
          </p>
        </div>

        <FooterCol title="Product" links={[
          { label: 'How it Works', href: '#how' },
          { label: 'Features', href: '#features' },
          { label: 'Spaces', href: '#spaces' },
          { label: 'Demo', href: '#demo' },
        ]} />
        <FooterCol title="Company" links={[
          { label: 'About', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Contact', href: '#' },
        ]} />
        <FooterCol title="Legal" links={[
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' },
          { label: 'Community Guidelines', href: '#' },
        ]} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: 12, color: 'var(--text-low)' }}>© 2025 VeilSpace. All rights reserved.</p>
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: 'var(--primary-glow)', letterSpacing: '0.5px' }}>veils.space</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--text-low)', marginBottom: 4 }}>{title}</h4>
      {links.map(link => (
        <a key={link.label} href={link.href} style={{ fontSize: 14, color: 'var(--text-med)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-high)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-med)')}
        >{link.label}</a>
      ))}
    </div>
  );
}
