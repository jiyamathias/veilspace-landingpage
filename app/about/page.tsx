import type { Metadata } from 'next';
import PageShell from '../components/PageShell';

export const metadata: Metadata = {
  title: 'About — VeilSpace',
  description: 'Learn about the story, mission, and people behind VeilSpace.',
};

const S = {
  section: { marginBottom: 56 } as React.CSSProperties,
  h2: { fontFamily: "'Cinzel', serif", fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700, color: 'var(--text-high)', marginBottom: 16, letterSpacing: '-0.3px' } as React.CSSProperties,
  p: { fontSize: 16, color: 'var(--text-med)', lineHeight: 1.8, marginBottom: 16 } as React.CSSProperties,
  divider: { border: 'none', borderTop: '1px solid var(--border)', margin: '48px 0' } as React.CSSProperties,
  card: { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 28, marginBottom: 16 } as React.CSSProperties,
  highlight: { color: 'var(--primary-glow)', fontWeight: 600 } as React.CSSProperties,
};

export default function About() {
  return (
    <PageShell
      title="About VeilSpace"
      subtitle="We believe every person deserves a place to speak honestly — without the weight of identity."
    >
      {/* Mission */}
      <div style={S.section}>
        <h2 style={S.h2}>Our Mission</h2>
        <p style={S.p}>
          VeilSpace was born from a simple observation: the conversations people most need to have are often the ones they feel least able to have. Whether it&apos;s venting about a toxic workplace, processing grief, questioning a relationship, or sharing a confession that&apos;s been weighing on you for years — social media, with its real names and public profiles, makes these conversations feel unsafe.
        </p>
        <p style={S.p}>
          Our mission is to build a <span style={S.highlight}>sanctuary for authentic expression</span> — a place where anonymity is a feature, not a flaw. Where you can speak freely, connect genuinely, and feel heard without the fear of judgment, consequence, or exposure.
        </p>
      </div>

      <hr style={S.divider} />

      {/* The Problem */}
      <div style={S.section}>
        <h2 style={S.h2}>The Problem We&apos;re Solving</h2>
        <p style={S.p}>
          Traditional social media ties your speech to your identity. That means every post, every comment, every admission carries social, professional, or personal risk. People self-censor. Conversations stay shallow. Real feelings go unexpressed.
        </p>
        <p style={S.p}>
          Existing anonymous platforms either devolve into toxicity without structure, or fail to create real community. VeilSpace is different: we combine <span style={S.highlight}>structured topic-based Spaces</span>, rotating anonymous personas, and community moderation to create something that&apos;s both safe and real.
        </p>
      </div>

      <hr style={S.divider} />

      {/* How it&apos;s different */}
      <div style={S.section}>
        <h2 style={S.h2}>What Makes VeilSpace Different</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { icon: '🎭', title: 'Rotating Personas', desc: 'You get a different anonymous identity in each Space — "Silent Raven" in Mental Health, "Fractal Storm" on Campus. Your posts across spaces can never be linked together.' },
            { icon: '🌐', title: '44+ Curated Spaces', desc: 'From Mental Health and Relationships to Workplace Venting and Confessions — every Space has a purpose and a community built around it.' },
            { icon: '🛡️', title: 'Safety by Design', desc: 'Community moderation, smart thresholds, and a robust report system keep Spaces safe without sanitising the honesty that makes them valuable.' },
            { icon: '🔒', title: 'Privacy First', desc: 'We collect the minimum data necessary. We do not sell your information. Anonymity is a core architectural principle, not an afterthought.' },
          ].map(item => (
            <div key={item.title} style={S.card}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-high)', marginBottom: 6 }}>{item.title}</div>
                  <p style={{ fontSize: 14, color: 'var(--text-med)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      {/* Values */}
      <div style={S.section}>
        <h2 style={S.h2}>Our Values</h2>
        <p style={S.p}><strong style={{ color: 'var(--text-high)' }}>Radical honesty.</strong> We believe people are more thoughtful, more compassionate, and more themselves when they&apos;re not performing for an audience that knows their name.</p>
        <p style={S.p}><strong style={{ color: 'var(--text-high)' }}>Safety without sterility.</strong> A safe space doesn&apos;t mean a space with no edge. It means a space where people can say hard things and be met with empathy rather than attack.</p>
        <p style={S.p}><strong style={{ color: 'var(--text-high)' }}>Community over virality.</strong> We build for depth of connection, not breadth of engagement. No algorithmic manipulation. No dopamine traps. Just people, talking.</p>
        <p style={S.p}><strong style={{ color: 'var(--text-high)' }}>Privacy as a right.</strong> Your data is yours. We will never sell it, weaponise it, or use it against you.</p>
      </div>

      <hr style={S.divider} />

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <p style={{ ...S.p, textAlign: 'center', marginBottom: 28 }}>We&apos;re launching on iOS and Android soon. Be among the first to enter the Veil.</p>
        <a href="/#waitlist" style={{
          background: 'linear-gradient(135deg, var(--grad-start), var(--grad-end))',
          color: '#fff', padding: '15px 40px', borderRadius: 100,
          fontSize: 15, fontWeight: 700, textDecoration: 'none',
          boxShadow: '0 6px 30px rgba(124,111,255,0.4)',
          display: 'inline-block',
        }}>Join the Waitlist</a>
      </div>
    </PageShell>
  );
}
